const { test } = require('node:test');
const assert = require('node:assert/strict');
const express = require('express');
const path = require('node:path');
const fs = require('node:fs');

test('dashboard requires a session and cannot be served as a public file', async () => {
    const app = express();
    // Inject session state without requiring a production database.
    app.use((req, res, next) => {
        req.session = req.headers['x-test-user'] ? { userId: 1 } : {};
        next();
    });
    app.get('/dashboard.html', require('../routes/dashboard'));
    app.use(express.static(path.join(__dirname, '..', 'public')));
    const server = app.listen(0, '127.0.0.1');
    await new Promise(resolve => server.once('listening', resolve));
    const base = `http://127.0.0.1:${server.address().port}`;
    try {
        const guest = await fetch(`${base}/dashboard.html`, { redirect: 'manual' });
        assert.equal(guest.status, 302);
        assert.equal(guest.headers.get('location'), '/index.html?login=dashboard');
        assert.equal(guest.headers.get('cache-control'), 'no-store');
        const user = await fetch(`${base}/dashboard.html`, { headers: { 'x-test-user': '1' } });
        assert.equal(user.status, 200);
        assert.match(await user.text(), /data-requires-auth/);
        assert.equal(user.headers.get('cache-control'), 'no-store');
        for (const url of ['/views/dashboard.html', '/%64ashboard.html']) {
            const response = await fetch(base + url, { redirect: 'manual' });
            assert.notEqual(response.status, 200);
        }
    } finally { await new Promise(resolve => server.close(resolve)); }
});

test('every individual exam has an overview with a scoped Start Exam link', () => {
    const exams = ['hvac', 'electrician', 'plumbing', 'nursing', 'security', 'cdl', 'pmp', 'nvidia', 'aws', 'azure', 'gcp'];
    for (const exam of exams) {
        const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'exams', `${exam}.html`), 'utf8');
        assert.match(html, new RegExp(`href="../quiz.html\\?exam=${exam}"[^>]*>Start Exam</a>`));
        assert.match(html, /data-auth-only hidden/);
    }
    assert.equal(fs.existsSync(path.join(__dirname, '..', 'public', 'dashboard.html')), false);
});
