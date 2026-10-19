/* Slide 17 : Perspectives */

document.addEventListener('DOMContentLoaded', () => {

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ═══════════════════════════════════════════════════════════
       FINBANK REAL BANKING NETWORK
       ═══════════════════════════════════════════════════════════ */
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }

    /* ═══════════════════════════════════════════════════════════
       ENTRANCE SEQUENCE
       ═══════════════════════════════════════════════════════════ */
    if (prefersReduced) return;

    const header     = document.querySelector('.slide__header');
    const title      = document.querySelector('.slide__title');
    const subtitle   = document.querySelector('.slide__subtitle');
    const cards      = document.querySelectorAll('.persp-card');
    const nav        = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    // 1. Header
    setTransition(header,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 150);

    // 2. Title
    setTransition(title,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 400);

    // 3. Subtitle
    setTransition(subtitle,
        'opacity 0.6s ease, transform 0.6s ease', 650);

    // 4. Cards staggered
    cards.forEach((card, i) => {
        setTransition(card,
            'opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)', 1000 + i * 120);
    });

    // 5. Footer
    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 2200);
});
