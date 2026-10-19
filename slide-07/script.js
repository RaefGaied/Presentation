/* Slide 04 : Étude de l'existant */

document.addEventListener('DOMContentLoaded', () => {

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ═══════════════════════════════════════════════════════════
       FINBANK REAL BANKING NETWORK
       ═══════════════════════════════════════════════════════════ */
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }

    /* ═══════════════════════════════════════════════════════════
       ENTRANCE
       ═══════════════════════════════════════════════════════════ */
    if (prefersReduced) return;

    const setT = (el, props, delay) => {
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    setT(document.querySelector('.slide__header'),
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 200);
    setT(document.querySelector('.slide__title'),
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 500);
    setT(document.querySelector('.slide__subtitle'),
        'opacity 0.7s ease, transform 0.7s ease', 800);

    document.querySelectorAll('.row--top .plat').forEach((c, i) => {
        setT(c, 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 1000 + i * 150);
    });

    document.querySelectorAll('.row--bottom .plat').forEach((c, i) => {
        setT(c, 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', 1500 + i * 120);
    });

    setT(document.querySelector('.gap-card'),
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 1700);

    setT(document.querySelector('.navigation'),
        'opacity 0.8s ease, transform 0.8s ease', 2300);
});
