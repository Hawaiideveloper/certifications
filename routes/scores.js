const express = require('express');
const { getPool } = require('../db/init');
const router = express.Router();

function requireAuth(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Login required' });
    }
    next();
}

// POST /api/scores — save a quiz result
router.post('/', requireAuth, async (req, res) => {
    const { vendor, total_questions, correct, percentage, passed, time_seconds } = req.body;
    if (!vendor || total_questions == null || correct == null || percentage == null) {
        return res.status(400).json({ error: 'Missing required score fields' });
    }

    const pool = getPool();
    const result = await pool.query(
        'INSERT INTO scores (user_id, vendor, total_questions, correct, percentage, passed, time_seconds) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
        [req.session.userId, vendor, total_questions, correct, percentage, !!passed, time_seconds || null]
    );

    res.json({ id: result.rows[0].id });
});

// GET /api/scores — get user's score history
router.get('/', requireAuth, async (req, res) => {
    const pool = getPool();
    const result = await pool.query(
        'SELECT id, vendor, total_questions, correct, percentage, passed, time_seconds, created_at FROM scores WHERE user_id = $1 ORDER BY created_at DESC LIMIT 100',
        [req.session.userId]
    );
    res.json(result.rows);
});

// GET /api/scores/stats — get user's aggregate stats
router.get('/stats', requireAuth, async (req, res) => {
    const pool = getPool();

    const overall = await pool.query(
        `SELECT COUNT(*) as total_exams, COALESCE(SUM(correct), 0) as total_correct,
         COALESCE(SUM(total_questions), 0) as total_questions,
         COUNT(*) FILTER (WHERE passed = true) as total_passed,
         ROUND(AVG(percentage)::numeric, 1) as avg_score,
         MIN(time_seconds) as fastest_time
         FROM scores WHERE user_id = $1`,
        [req.session.userId]
    );

    const byVendor = await pool.query(
        `SELECT vendor, COUNT(*) as attempts, MAX(percentage) as best_score,
         ROUND(AVG(percentage)::numeric, 1) as avg_score,
         COUNT(*) FILTER (WHERE passed = true) as times_passed
         FROM scores WHERE user_id = $1 GROUP BY vendor ORDER BY attempts DESC`,
        [req.session.userId]
    );

    const streakDays = await pool.query(
        `SELECT DATE(created_at) as day FROM scores WHERE user_id = $1
         GROUP BY DATE(created_at) ORDER BY day DESC LIMIT 30`,
        [req.session.userId]
    );

    let streak = 0;
    const today = new Date().toISOString().slice(0, 10);
    let checkDate = new Date(today);
    for (const row of streakDays.rows) {
        const rowDay = row.day.toISOString().slice(0, 10);
        if (rowDay === checkDate.toISOString().slice(0, 10)) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }

    res.json({ overall: overall.rows[0], byVendor: byVendor.rows, streak });
});

module.exports = router;
