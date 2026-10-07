const express = require('express');
const bcrypt = require('bcryptjs');
const { getPool } = require('../db/init');
const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        return res.status(400).json({ error: 'Email, username, and password are required' });
    }
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const pool = getPool();
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
        return res.status(409).json({ error: 'Email already registered' });
    }

    const hash = await bcrypt.hash(password, 12);
    const result = await pool.query(
        'INSERT INTO users (email, username, password_hash) VALUES ($1, $2, $3) RETURNING id',
        [email, username, hash]
    );

    req.session.userId = result.rows[0].id;
    req.session.username = username;

    res.json({ id: result.rows[0].id, username, email });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const pool = getPool();
    const result = await pool.query('SELECT id, email, username, password_hash FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    req.session.userId = user.id;
    req.session.username = user.username;

    res.json({ id: user.id, username: user.username, email: user.email });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.json({ ok: true });
    });
});

// GET /api/auth/me
router.get('/me', async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Not logged in' });
    }
    const pool = getPool();
    const result = await pool.query('SELECT id, email, username, created_at FROM users WHERE id = $1', [req.session.userId]);
    if (result.rows.length === 0) {
        return res.status(401).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
});

module.exports = router;
