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
        'opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.2s cubic-bezier(0.22,1,0.36,1)', 200);
    setT(document.querySelector('.slide__title'),
        'opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.2s cubic-bezier(0.22,1,0.36,1)', 500);
    setT(document.querySelector('.slide__subtitle'),
        'opacity 1s ease, transform 1s ease', 800);

    document.querySelectorAll('.row--top .plat').forEach((c, i) => {
        setT(c, 'opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)', 1000 + i * 220);
    });

    document.querySelectorAll('.row--bottom .plat').forEach((c, i) => {
        setT(c, 'opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)', 1700 + i * 180);
    });

    setT(document.querySelector('.gap-card'),
        'opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)', 1900);

    setT(document.querySelector('.navigation'),
        'opacity 1s ease, transform 1s ease', 2500);
});
