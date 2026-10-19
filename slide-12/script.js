/* Slide 12 : Analyse et spécification des besoins */
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
    const table = document.querySelector('.needs-table');
    const tableRows = document.querySelectorAll('.needs-table__row');
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
    setTransition(table, 'opacity 0.7s ease, transform 0.7s ease', 900);
    tableRows.forEach((row, i) => {
        setTransition(row, 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)', 1100 + i * 100);
    });
    setTransition(nav, 'opacity 0.8s ease, transform 0.8s ease', 2200);
});
