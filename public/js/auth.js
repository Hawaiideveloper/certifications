/* ═══ CertsOnTheFly — Auth Module ═══ */
let currentUser = null;

// Inject modal HTML into the page
function initAuthModal() {
    const modal = document.createElement('div');
    modal.id = 'authModal';
    modal.className = 'auth-overlay';
    modal.innerHTML = `
    <div class="auth-panel">
        <button class="auth-close" onclick="closeAuth()">&times;</button>
        <div class="auth-header">
            <div class="auth-logo">✈️</div>
            <h2 id="authTitle">Log In</h2>
            <p id="authSubtitle">Welcome back! Enter your credentials.</p>
        </div>
        <form id="authForm" onsubmit="return handleAuth(event)">
            <div id="usernameField" class="auth-field" style="display:none">
                <label>Username</label>
                <input type="text" id="authUsername" placeholder="Choose a username" autocomplete="username">
            </div>
            <div class="auth-field">
                <label>Email</label>
                <input type="email" id="authEmail" placeholder="you@example.com" required autocomplete="email">
            </div>
            <div class="auth-field">
                <label>Password</label>
                <input type="password" id="authPassword" placeholder="Min 8 characters" required minlength="8" autocomplete="current-password">
            </div>
            <div id="authError" class="auth-error"></div>
            <button type="submit" class="btn btn-primary auth-submit" id="authSubmitBtn">Log In</button>
        </form>
        <p class="auth-switch">
            <span id="authSwitchText">Don't have an account?</span>
            <a href="#" onclick="toggleAuthMode(event);" id="authSwitchLink">Sign Up</a>
        </p>
    </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) closeAuth(); });
}

let authMode = 'login';

function openAuth(mode) {
    authMode = mode || 'login';
    updateAuthForm();
    document.getElementById('authError').textContent = '';
    document.getElementById('authForm').reset();
    document.getElementById('authModal').classList.add('open');
}

function closeAuth() {
    document.getElementById('authModal').classList.remove('open');
}

function toggleAuthMode(e) {
    e.preventDefault();
    authMode = authMode === 'login' ? 'register' : 'login';
    updateAuthForm();
}

function updateAuthForm() {
    const isLogin = authMode === 'login';
    document.getElementById('authTitle').textContent = isLogin ? 'Log In' : 'Create Account';
    document.getElementById('authSubtitle').textContent = isLogin
        ? 'Welcome back! Enter your credentials.'
        : 'Start tracking your progress today.';
    document.getElementById('usernameField').style.display = isLogin ? 'none' : 'block';
    document.getElementById('authSubmitBtn').textContent = isLogin ? 'Log In' : 'Create Account';
    document.getElementById('authSubmitBtn').disabled = false;
    document.getElementById('authSwitchText').textContent = isLogin ? "Don't have an account?" : 'Already have an account?';
    document.getElementById('authSwitchLink').textContent = isLogin ? 'Sign Up' : 'Log In';
    document.getElementById('authError').textContent = '';
    if (!isLogin) document.getElementById('authUsername').required = true;
    else document.getElementById('authUsername').required = false;
}

async function handleAuth(e) {
    e.preventDefault();
    const errorEl = document.getElementById('authError');
    const btn = document.getElementById('authSubmitBtn');
    errorEl.textContent = '';
    btn.disabled = true;
    btn.textContent = 'Please wait...';

    const body = {
        email: document.getElementById('authEmail').value,
        password: document.getElementById('authPassword').value
    };
    if (authMode === 'register') {
        body.username = document.getElementById('authUsername').value;
    }

    try {
        const res = await fetch(`/api/auth/${authMode}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const data = await res.json();
        if (!res.ok) {
            errorEl.textContent = data.error;
            btn.disabled = false;
            btn.textContent = authMode === 'login' ? 'Log In' : 'Create Account';
            return false;
        }
        currentUser = data;
        closeAuth();
        updateNavForUser();
        if (new URLSearchParams(location.search).get('login') === 'dashboard') {
            location.replace('/dashboard.html');
            return false;
        }
        if (typeof onAuthSuccess === 'function') onAuthSuccess(data);
    } catch (err) {
        errorEl.textContent = 'Network error. Please try again.';
        btn.disabled = false;
        btn.textContent = authMode === 'login' ? 'Log In' : 'Create Account';
    }
    return false;
}

async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    currentUser = null;
    updateNavForUser();
    if (document.body.hasAttribute('data-requires-auth')) location.replace('/index.html');
    if (typeof onAuthLogout === 'function') onAuthLogout();
}

async function checkSession() {
    try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
            currentUser = await res.json();
            updateNavForUser();
            if (typeof loadUserAccess === 'function') await loadUserAccess();
        }
    } catch (e) { /* not logged in */ }
}

function updateNavForUser() {
    document.querySelectorAll('[data-auth-only]').forEach(el => { el.hidden = !currentUser; });
    if (document.body.hasAttribute('data-requires-auth')) {
        document.body.classList.toggle('session-verified', !!currentUser);
    }
    // Desktop nav
    document.querySelectorAll('.auth-login-btn').forEach(el => {
        if (currentUser) {
            el.textContent = currentUser.username;
            el.onclick = null;
            el.href = '/dashboard.html';
            el.className = 'topnav-btn topnav-btn-outline auth-login-btn';
        } else {
            el.textContent = 'Log In';
            el.href = '#';
            el.onclick = (e) => { e.preventDefault(); openAuth('login'); };
            el.className = 'topnav-btn topnav-btn-outline auth-login-btn';
        }
    });

    // Logout link in mobile menu
    document.querySelectorAll('.auth-mobile-link').forEach(el => {
        if (currentUser) {
            el.textContent = 'Log Out';
            el.href = '#';
            el.onclick = (e) => { e.preventDefault(); logout(); };
        } else {
            el.textContent = 'Log In';
            el.href = '#';
            el.onclick = (e) => { e.preventDefault(); openAuth('login'); };
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', async () => {
    initAuthModal();
    await checkSession();
    if (document.body.hasAttribute('data-requires-auth')) {
        if (!currentUser) { location.replace('/index.html?login=dashboard'); return; }
        if (typeof loadDashboardStats === 'function') await loadDashboardStats();
    }
    if (new URLSearchParams(location.search).get('login') === 'dashboard') {
        if (currentUser) { location.replace('/dashboard.html'); return; }
        openAuth('login');
    }
    document.dispatchEvent(new Event('auth-ready'));
});
