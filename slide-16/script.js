/* Background + entrance animations */
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
    const eyebrow = document.querySelector('.slide__eyebrow');
    const title = document.querySelector('.slide__title');
    const subtitle = document.querySelector('.slide__subtitle');
    const roadmap = document.querySelector('.roadmap');
    const releaseGroups = document.querySelectorAll('.release-group');
    const sprintCards = document.querySelectorAll('.sprint-card');
    const summary = document.querySelector('.roadmap-summary');
    const nav = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        if (!el) return;
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    setTransition(header, 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 150);
    setTransition(eyebrow, 'opacity 0.6s ease, transform 0.6s ease', 300);
    setTransition(title, 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 380);
    setTransition(subtitle, 'opacity 0.6s ease, transform 0.6s ease', 600);
    setTransition(roadmap, 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', 750);
    releaseGroups.forEach((group, i) => {
        setTransition(group, 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)', 850 + i * 150);
    });
    sprintCards.forEach((card, i) => {
        setTransition(card, 'opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)', 1050 + i * 100);
    });
    setTransition(summary, 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', 1650);
    setTransition(nav, 'opacity 0.8s ease, transform 0.8s ease', 1900);
});
