/* ═══════════════════════════════════════════════════════════════
   Slide 04 : Organisme d'accueil — VERMEG
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ═══════════════════════════════════════════════════════════
       FINBANK REAL BANKING NETWORK
       ═══════════════════════════════════════════════════════════ */
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }

    /* ═══════════════════════════════════════════════════════════
       3D CARD TILT (mousemove-driven parallax)
       ═══════════════════════════════════════════════════════════ */
    const card = document.querySelector('.org__card');

    if (card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotateX = ((y - cy) / cy) * -4;
            const rotateY = ((x - cx) / cx) * 4;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    }

    /* ═══════════════════════════════════════════════════════════
       ENTRANCE SEQUENCE
       ═══════════════════════════════════════════════════════════ */
    if (prefersReduced) return;

    const header = document.querySelector('.slide__header');
    const title  = document.querySelector('.slide__title');
    const nav    = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        if (!el) return;
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
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 450);

    // 3. Vermeg Card
    if (card) {
        card.style.transform = 'translateY(30px) scale(0.97)';
        setTimeout(() => {
            card.style.transition = 'opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)';
            card.style.opacity = '1';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        }, 850);
    }

    // 4. Staggered inner rows & pillars
    const rows = document.querySelectorAll('.org__row');
    const pillars = document.querySelectorAll('.org__pillar');

    rows.forEach((row, i) => {
        setTransition(row,
            'opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)', 1200 + i * 80);
    });

    pillars.forEach((pill, i) => {
        setTransition(pill,
            'opacity 0.5s cubic-bezier(0.34,1.56,0.64,1), transform 0.5s cubic-bezier(0.34,1.56,0.64,1)', 1700 + i * 100);
    });

    // 5. Footer
    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 2100);
});
