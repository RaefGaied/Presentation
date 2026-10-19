/* Slide 08 : Solution Proposée */

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
    const hub        = document.querySelector('.hub');
    const platforms  = document.querySelector('.platforms');
    const modLabel   = document.querySelector('.modules__label');
    const tourismLabel = document.querySelector('.modules__label--tourism');
    const modCards   = document.querySelectorAll('.module__card');
    const nav        = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    setTransition(header,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 150);

    setTransition(title,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 400);

    setTransition(subtitle,
        'opacity 0.7s ease, transform 0.7s ease', 700);

    setTransition(hub,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 900);

    setTransition(platforms,
        'opacity 0.6s ease, transform 0.6s ease', 1200);

    setTransition(modLabel,
        'opacity 0.6s ease, transform 0.6s ease', 1500);

    modCards.forEach((card, i) => {
        setTransition(card,
            'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)', 1500 + i * 80);
    });

    setTransition(tourismLabel,
        'opacity 0.6s ease, transform 0.6s ease', 2200);

    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 2600);
});
