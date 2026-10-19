/* Slide 19 : Architecture Monolithique Modulaire — FinBank */

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

    const header        = document.querySelector('.slide__header');
    const badge         = document.querySelector('.header-badge');
    const title         = document.querySelector('.slide__title');
    const subtitle      = document.querySelector('.slide__subtitle');
    const diagramPanel  = document.querySelector('.diagram-panel');
    const reasonsPanel  = document.querySelector('.reasons-panel');
    const cards         = document.querySelectorAll('.reason-card');
    const summaryStrip  = document.querySelector('.summary-strip');
    const nav           = document.querySelector('.navigation');

    const animate = (el, props, delay) => {
        if (!el) return;
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity    = '1';
            el.style.transform  = 'none';
        }, delay);
    };

    // 1. Header container
    animate(header,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 100);

    // 2. Badge pill
    animate(badge,
        'opacity 0.7s ease, transform 0.7s ease', 200);

    // 3. Title
    animate(title,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 400);

    // 4. Subtitle
    animate(subtitle,
        'opacity 0.7s ease, transform 0.7s ease', 600);

    // 5. Diagram (slides from left)
    animate(diagramPanel,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 900);

    // 6. Reasons panel (slides from right)
    animate(reasonsPanel,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 1050);

    // 7. Reason cards — staggered
    cards.forEach((card, i) => {
        animate(card,
            'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
            1200 + i * 130);
    });

    // 8. Summary strip
    animate(summaryStrip,
        'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
        1200 + cards.length * 130 + 100);

    // 9. Navigation footer
    animate(nav,
        'opacity 0.8s ease', 2400);
});
