const express = require('express');
const router = express.Router();
const { getPool } = require('../db/init');

let stripe;
function getStripe() {
    if (!stripe) {
        if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY not configured');
        stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    }
    return stripe;
}

// Category → vendor mapping
const CATEGORIES = {
    ai: ['nvidia', 'aws', 'azure', 'gcp'],
    trades: ['hvac', 'electrician', 'plumbing'],
    healthcare: ['nursing'],
    it: ['security'],
    transportation: ['cdl'],
    management: ['pmp']
};

// All valid vendors
const ALL_VENDORS = Object.values(CATEGORIES).flat();

// Pricing (cents)
const PRICES = {
    single_exam: 799,
    category_bundle: 1999,
    all_access_monthly: 499
};

// Friendly names
const VENDOR_NAMES = {
    nvidia: 'NVIDIA AI Infrastructure',
    aws: 'AWS AI/ML',
    azure: 'Azure AI',
    gcp: 'GCP AI/ML',
    hvac: 'HVAC EPA 608',
    electrician: 'Journeyman Electrician',
    plumbing: 'Journeyman Plumber',
    nursing: 'NCLEX-RN Nursing',
    security: 'CompTIA Security+',
    cdl: 'CDL',
    pmp: 'PMP'
};

const CATEGORY_NAMES = {
    ai: 'AI Infrastructure (NVIDIA, AWS, Azure, GCP)',
    trades: 'Trades (HVAC, Electrician, Plumbing)',
    healthcare: 'Healthcare (Nursing)',
    it: 'IT & Security (Security+)',
    transportation: 'Transportation (CDL)',
    management: 'Project Management (PMP)'
};

function requireAuth(req, res, next) {
    if (!req.session.userId) return res.status(401).json({ error: 'Login required' });
    next();
}

// Get user's access level
router.get('/access', requireAuth, async (req, res) => {
    const pool = getPool();
    const { rows } = await pool.query(
        `SELECT purchase_type, exam_vendor, category, status, expires_at
         FROM purchases WHERE user_id = $1 AND status = 'active'`,
        [req.session.userId]
    );

    const access = { vendors: [], allAccess: false };

    for (const p of rows) {
        if (p.expires_at && new Date(p.expires_at) < new Date()) continue;

        if (p.purchase_type === 'all_access') {
            access.allAccess = true;
            access.vendors = [...ALL_VENDORS];
            break;
        }
        if (p.purchase_type === 'single_exam' && p.exam_vendor) {
            if (!access.vendors.includes(p.exam_vendor)) access.vendors.push(p.exam_vendor);
        }
        if (p.purchase_type === 'category_bundle' && p.category) {
            const catVendors = CATEGORIES[p.category] || [];
            for (const v of catVendors) {
                if (!access.vendors.includes(v)) access.vendors.push(v);
            }
        }
    }

    res.json(access);
});

// Create Stripe Checkout session
router.post('/checkout', requireAuth, async (req, res) => {
    const { type, vendor, category } = req.body;
    const pool = getPool();

    // Get or create Stripe customer
    const { rows } = await pool.query('SELECT email, stripe_customer_id FROM users WHERE id = $1', [req.session.userId]);
    const user = rows[0];
    let customerId = user.stripe_customer_id;

    if (!customerId) {
        const customer = await getStripe().customers.create({ email: user.email });
        customerId = customer.id;
        await pool.query('UPDATE users SET stripe_customer_id = $1 WHERE id = $2', [customerId, req.session.userId]);
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    let sessionConfig;

    if (type === 'single_exam') {
        if (!vendor || !ALL_VENDORS.includes(vendor)) {
            return res.status(400).json({ error: 'Invalid vendor' });
        }
        sessionConfig = {
            customer: customerId,
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: { name: `${VENDOR_NAMES[vendor]} Exam Pass` },
                    unit_amount: PRICES.single_exam
                },
                quantity: 1
            }],
            metadata: { userId: req.session.userId.toString(), type: 'single_exam', vendor },
            success_url: `${baseUrl}/pricing.html?success=1`,
            cancel_url: `${baseUrl}/pricing.html?canceled=1`
        };
    } else if (type === 'category_bundle') {
        if (!category || !CATEGORIES[category]) {
            return res.status(400).json({ error: 'Invalid category' });
        }
        sessionConfig = {
            customer: customerId,
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: { name: `${CATEGORY_NAMES[category]} Bundle` },
                    unit_amount: PRICES.category_bundle
                },
                quantity: 1
            }],
            metadata: { userId: req.session.userId.toString(), type: 'category_bundle', category },
            success_url: `${baseUrl}/pricing.html?success=1`,
            cancel_url: `${baseUrl}/pricing.html?canceled=1`
        };
    } else if (type === 'all_access') {
        sessionConfig = {
            customer: customerId,
            mode: 'subscription',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: { name: 'CertsOnTheFly All Access' },
                    unit_amount: PRICES.all_access_monthly,
                    recurring: { interval: 'month' }
                },
                quantity: 1
            }],
            metadata: { userId: req.session.userId.toString(), type: 'all_access' },
            success_url: `${baseUrl}/pricing.html?success=1`,
            cancel_url: `${baseUrl}/pricing.html?canceled=1`
        };
    } else {
        return res.status(400).json({ error: 'Invalid purchase type' });
    }

    const checkoutSession = await getStripe().checkout.sessions.create(sessionConfig);
    res.json({ url: checkoutSession.url });
});

// Cancel subscription
router.post('/cancel', requireAuth, async (req, res) => {
    const pool = getPool();
    const { rows } = await pool.query(
        `SELECT stripe_subscription_id FROM purchases
         WHERE user_id = $1 AND purchase_type = 'all_access' AND status = 'active'
         ORDER BY created_at DESC LIMIT 1`,
        [req.session.userId]
    );

    if (!rows.length || !rows[0].stripe_subscription_id) {
        return res.status(400).json({ error: 'No active subscription' });
    }

    await getStripe().subscriptions.update(rows[0].stripe_subscription_id, {
        cancel_at_period_end: true
    });

    res.json({ message: 'Subscription will cancel at end of billing period' });
});

// Get pricing info (public)
router.get('/prices', (req, res) => {
    res.json({
        single_exam: { price: 7.99, label: 'Single Exam Pass' },
        category_bundle: { price: 19.99, label: 'Category Bundle' },
        all_access: { price: 4.99, label: 'All Access Monthly' },
        categories: CATEGORY_NAMES,
        vendors: VENDOR_NAMES
    });
});

module.exports = { router, CATEGORIES, ALL_VENDORS };

// Webhook handler — called from server.js with raw body
module.exports.handleWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;
    try {
        event = getStripe().webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    const pool = getPool();

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const meta = session.metadata;
        const userId = parseInt(meta.userId);

        if (meta.type === 'single_exam') {
            await pool.query(
                `INSERT INTO purchases (user_id, purchase_type, exam_vendor, stripe_session_id, status)
                 VALUES ($1, 'single_exam', $2, $3, 'active')`,
                [userId, meta.vendor, session.id]
            );
        } else if (meta.type === 'category_bundle') {
            await pool.query(
                `INSERT INTO purchases (user_id, purchase_type, category, stripe_session_id, status)
                 VALUES ($1, 'category_bundle', $2, $3, 'active')`,
                [userId, meta.category, session.id]
            );
        } else if (meta.type === 'all_access') {
            await pool.query(
                `INSERT INTO purchases (user_id, purchase_type, stripe_session_id, stripe_subscription_id, status)
                 VALUES ($1, 'all_access', $2, $3, 'active')`,
                [userId, session.id, session.subscription]
            );
        }
    }

    if (event.type === 'customer.subscription.deleted') {
        const sub = event.data.object;
        await pool.query(
            `UPDATE purchases SET status = 'canceled' WHERE stripe_subscription_id = $1`,
            [sub.id]
        );
    }

    res.json({ received: true });
};
