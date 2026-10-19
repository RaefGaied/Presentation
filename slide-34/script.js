/* Slide 19 : Démonstration */

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

    const badge      = document.querySelector('.demo-badge');
    const title      = document.querySelector('.demo-title');
    const subtitle   = document.querySelector('.demo-subtitle');
    const features   = document.querySelector('.demo-features');
    const cta        = document.querySelector('.demo-cta');
    const nav        = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    // 1. Badge scale
    setTransition(badge,
        'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', 200);

    // 2. Title
    setTransition(title,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 500);

    // 3. Subtitle
    setTransition(subtitle,
        'opacity 0.6s ease, transform 0.6s ease', 800);

    // 4. Features
    setTransition(features,
        'opacity 0.6s ease, transform 0.6s ease', 1100);

    // 5. CTA
    setTransition(cta,
        'opacity 0.5s ease, transform 0.5s ease', 1400);

    // 6. Footer
    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 1900);
});
