(() => {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('hamburgerBtn');
    const close = document.getElementById('mobileClose');
    let previousOverflow = '';

    function setMenu(open) {
        if (open === menu.classList.contains('open')) return;
        menu.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
        if (open) {
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            close.focus();
        } else {
            document.body.style.overflow = previousOverflow;
            toggle.focus();
        }
    }
    toggle.addEventListener('click', () => setMenu(true));
    close.addEventListener('click', () => setMenu(false));
    menu.addEventListener('click', event => {
        if (event.target === menu || event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', event => {
        if (!menu.classList.contains('open')) return;
        if (event.key === 'Escape') setMenu(false);
        if (event.key !== 'Tab') return;
        const items = [...menu.querySelectorAll('a, button')];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault(); first.focus();
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1150) setMenu(false);
    });

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('reveal-pending');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.05 });
    document.querySelectorAll('.stagger-item, .landing-section-head, .cta-inner').forEach(element => {
        element.classList.add('reveal');
        const siblings = [...element.parentElement.children];
        element.style.setProperty('--reveal-delay', `${(siblings.indexOf(element) % 4) * 70}ms`);
        element.classList.add('reveal-pending');
        observer.observe(element);
    });
    motion.addEventListener('change', event => {
        if (!event.matches) return;
        observer.disconnect();
        document.querySelectorAll('.reveal-pending').forEach(element => element.classList.remove('reveal-pending'));
    });
})();
