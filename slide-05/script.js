/* ═══════════════════════════════════════════════════════════════
   Slide 05 : Cadre Général du Projet FinBank (Pop-Out Interactivity)
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
       3D POP-OUT CARD TILT
       ═══════════════════════════════════════════════════════════ */
    const card = document.getElementById('finbankCard');
    const img  = document.getElementById('finbankImg');

    if (card && !prefersReduced) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotateX = ((y - cy) / cy) * -6;
            const rotateY = ((x - cx) / cx) * 6;
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
            if (img) {
                img.style.transform = `translateZ(65px) rotateX(${rotateX * 0.4}deg) rotateY(${rotateY * 0.4}deg) scale(1.03)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
            if (img) {
                img.style.transform = 'translateZ(45px) scale(1)';
            }
        });
    }

    /* ═══════════════════════════════════════════════════════════
       ENTRANCE SEQUENCE
       ═══════════════════════════════════════════════════════════ */
    if (prefersReduced) return;

    const header   = document.querySelector('.slide__header');
    const title    = document.querySelector('.slide__title');
    const subtitle = document.querySelector('.slide__subtitle');
    const showcase = document.querySelector('.finbank-showcase');
    const nav      = document.querySelector('.navigation');

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
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 400);

    // 3. Subtitle
    setTransition(subtitle,
        'opacity 0.7s ease, transform 0.7s ease', 650);

    // 4. Pop-out showcase card
    setTransition(showcase,
        'opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)', 900);

    // 5. Navigation
    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 1600);
});
