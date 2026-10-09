const path = require('path');

module.exports = function dashboard(req, res) {
    res.set('Cache-Control', 'no-store');
    if (!req.session.userId) return res.redirect('/index.html?login=dashboard');
    res.sendFile(path.join(__dirname, '..', 'views', 'dashboard.html'));
};
