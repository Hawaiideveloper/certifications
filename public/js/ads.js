/* ═══ CertsOnTheFly — AdSense Integration ═══ */
/* Replace YOUR_PUB_ID with your actual ca-pub-XXXXXXXXXXXXXXXX ID */
const ADSENSE_PUB_ID = 'ca-pub-2461392800574626';

// Inject AdSense script into page head (once)
(function() {
    if (document.querySelector('script[src*="adsbygoogle"]')) return;
    const s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`;
    document.head.appendChild(s);
})();

// Create an ad unit element
// type: 'banner' | 'sidebar' | 'in-article' | 'between-questions'
function createAdUnit(type) {
    const container = document.createElement('div');
    container.className = 'ad-container ad-' + type;

    // Don't show ads to logged-in users (future premium perk)
    // if (typeof currentUser !== 'undefined' && currentUser) return container;

    const label = document.createElement('div');
    label.className = 'ad-label';
    label.textContent = 'Advertisement';

    const ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', ADSENSE_PUB_ID);

    switch (type) {
        case 'banner':
            ins.setAttribute('data-ad-format', 'auto');
            ins.setAttribute('data-full-width-responsive', 'true');
            break;
        case 'sidebar':
            ins.setAttribute('data-ad-format', 'vertical');
            ins.style.width = '100%';
            ins.style.minHeight = '250px';
            break;
        case 'in-article':
            ins.setAttribute('data-ad-format', 'fluid');
            ins.setAttribute('data-ad-layout', 'in-article');
            break;
        case 'between-questions':
            ins.setAttribute('data-ad-format', 'auto');
            ins.setAttribute('data-full-width-responsive', 'true');
            break;
    }

    container.appendChild(label);
    container.appendChild(ins);

    // Push ad after insertion
    setTimeout(() => {
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
    }, 100);

    return container;
}

// Insert ad into a specific element
function insertAd(selector, type, position) {
    const target = document.querySelector(selector);
    if (!target) return;
    const ad = createAdUnit(type);
    if (position === 'before') {
        target.parentNode.insertBefore(ad, target);
    } else if (position === 'after') {
        target.parentNode.insertBefore(ad, target.nextSibling);
    } else {
        target.appendChild(ad);
    }
}

// Auto-place ads based on page type
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.endsWith('/') || path.endsWith('index.html')) {
        // Landing page — one ad between sections
        insertAd('.cta-section', 'banner', 'before');
    }

    if (path.includes('dashboard')) {
        // Dashboard — sidebar ad
        const colRight = document.querySelector('.col-right');
        if (colRight) {
            const ad = createAdUnit('sidebar');
            colRight.appendChild(ad);
        }
    }

    if (path.includes('/exams/')) {
        // Exam detail pages — in-article ad after first content card
        const cards = document.querySelectorAll('.exam-content .card');
        if (cards.length >= 2) {
            const ad = createAdUnit('in-article');
            cards[1].parentNode.insertBefore(ad, cards[1]);
        }
    }
});
