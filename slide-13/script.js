/* Slide 13 : Besoins non fonctionnels */
document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    /* ═══════════════════════════════════════════════════════════
       FINBANK REAL BANKING NETWORK
       ═══════════════════════════════════════════════════════════ */
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }

    if (prefersReduced) return;

    const header = document.querySelector('.slide__header');
    const title = document.querySelector('.slide__title');
    const nfr = document.querySelector('.nfr');
    const nfrItems = document.querySelectorAll('.nfr__item');
    const nav = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    setTransition(header, 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 150);
    setTransition(title, 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 500);
    setTransition(nfr, 'opacity 0.7s ease, transform 0.7s ease', 900);
    nfrItems.forEach((item, i) => {
        setTransition(item, 'opacity 0.35s cubic-bezier(0.34,1.56,0.64,1), transform 0.35s cubic-bezier(0.34,1.56,0.64,1)', 1100 + i * 80);
    });
    setTransition(nav, 'opacity 0.8s ease, transform 0.8s ease', 2200);
});
