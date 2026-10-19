/* Slide 16 : Conclusion */

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
    const cards      = document.querySelectorAll('.concl-card');
    const summary    = document.querySelector('.concl-summary');
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

    // 4. Summary (hero)
    setTransition(summary,
        'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', 900);

    // 5. Footer
    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 1500);
});
