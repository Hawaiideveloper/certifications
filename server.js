const express = require('express');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const { Pool } = require('pg');
const { initDb } = require('./db/init');
const authRoutes = require('./routes/auth');
const scoreRoutes = require('./routes/scores');
const { router: paymentRoutes, handleWebhook } = require('./routes/payments');

const app = express();
const PORT = process.env.PORT || 3000;

// Trust Fly.io reverse proxy (required for secure cookies behind SSL termination)
app.set('trust proxy', 1);

// Stripe webhook needs raw body — must be before express.json()
app.post('/api/payments/webhook', express.raw({ type: 'application/json' }), handleWebhook);

// Middleware
app.use(compression());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());

// Session store backed by Postgres (shared across machines)
const sessionPool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });
app.use(session({
    store: new pgSession({ pool: sessionPool, createTableIfMissing: true }),
    secret: process.env.SESSION_SECRET || 'certsonthefly-dev-secret-change-in-prod',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 * 1000
    }
}));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/payments', paymentRoutes);

// Keep the dashboard outside the public directory so static URLs cannot bypass login.
app.get('/dashboard.html', require('./routes/dashboard'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// SPA fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server after database is ready
initDb().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`CertsOnTheFly running on port ${PORT}`);
    });
});
