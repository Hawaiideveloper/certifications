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
}

function getPool() {
    return pool;
}

module.exports = { initDb, getPool };
