/* Slide 05 : Critique comparative et solution */

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

    const header   = document.querySelector('.slide__header');
    const title    = document.querySelector('.slide__title');
    const matrix   = document.querySelector('.compare__matrix');
    const rows     = document.querySelectorAll('.compare__row');
    const critique = document.querySelector('.critique');
    const nav      = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    // 1. Header
    setTransition(header,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 150);

    // 2. Title
    setTransition(title,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 500);

    // 3. Matrix
    setTransition(matrix,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 900);

    // 4. Rows stagger
    rows.forEach((row, i) => {
        setTransition(row,
            'opacity 0.5s ease, transform 0.5s ease', 1200 + i * 100);
    });

    // 5. Critique conclusion
    setTransition(critique,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 2000);

    // 6. Footer
    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 2600);
});
