const { Pool } = require('pg');

let pool;

async function initDb() {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        max: 10
    });

    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            username TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW()
        )
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS scores (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id),
            vendor TEXT NOT NULL,
            total_questions INTEGER NOT NULL,
            correct INTEGER NOT NULL,
            percentage REAL NOT NULL,
            passed BOOLEAN NOT NULL DEFAULT FALSE,
            time_seconds INTEGER,
            created_at TIMESTAMPTZ DEFAULT NOW()
        )
    `);

    await pool.query('CREATE INDEX IF NOT EXISTS idx_scores_user ON scores(user_id)');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_scores_vendor ON scores(user_id, vendor)');

    // Stripe customer ID on users
    await pool.query(`
        ALTER TABLE users ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT
    `);

    // Purchases table
    await pool.query(`
        CREATE TABLE IF NOT EXISTS purchases (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id),
            purchase_type TEXT NOT NULL,
            exam_vendor TEXT,
            category TEXT,
            stripe_session_id TEXT,
            stripe_subscription_id TEXT,
            status TEXT NOT NULL DEFAULT 'active',
            created_at TIMESTAMPTZ DEFAULT NOW(),
            expires_at TIMESTAMPTZ
        )
    `);
    await pool.query('CREATE INDEX IF NOT EXISTS idx_purchases_user ON purchases(user_id)');
}

function getPool() {
    return pool;
}

module.exports = { initDb, getPool };
