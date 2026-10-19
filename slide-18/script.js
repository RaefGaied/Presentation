/* Slide 10 : Stack Technique & Environnement */

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

    const header    = document.querySelector('.slide__header');
    const title     = document.querySelector('.slide__title');
    const subtitle  = document.querySelector('.slide__subtitle');
    const categories = document.querySelectorAll('.category');
    const techCards = document.querySelectorAll('.tech__card');
    const toolChips = document.querySelectorAll('.tool__chip');
    const envCards  = document.querySelectorAll('.env__card');
    const nav       = document.querySelector('.navigation');

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

    // 4. Categories
    categories.forEach((cat, ci) => {
        setTransition(cat,
            'opacity 0.6s ease, transform 0.6s ease', 900 + ci * 200);
    });

    // 5. Tech cards stagger
    techCards.forEach((card, i) => {
        setTransition(card,
            'opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)', 1200 + i * 60);
    });

    // 6. Tool chips stagger
    toolChips.forEach((chip, i) => {
        setTransition(chip,
            'opacity 0.4s cubic-bezier(0.34,1.56,0.64,1), transform 0.4s cubic-bezier(0.34,1.56,0.64,1)', 1600 + i * 50);
    });

    // 7. Env cards
    envCards.forEach((card, i) => {
        setTransition(card,
            'opacity 0.5s ease, transform 0.5s ease', 2000 + i * 120);
    });

    // 8. Footer
    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 2400);
});
