/* Slide 15 : Méthodologie Scrum & Sprint Cycle */

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

    const header      = document.querySelector('.slide__header');
    const title       = document.querySelector('.slide__title');
    const subtitle    = document.querySelector('.slide__subtitle');
    const content     = document.querySelector('.content-split');
    const cards       = document.querySelectorAll('.methodo-card');
    const scrumVisual = document.querySelector('.scrum-visual');
    const nav         = document.querySelector('.navigation');

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

    // 3. Subtitle
    setTransition(subtitle,
        'opacity 0.7s ease, transform 0.7s ease', 700);

    // 4. Content split
    setTransition(content,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 900);

    // 5. Candidate cards & selected card staggered
    cards.forEach((card, i) => {
        setTransition(card,
            'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', 1100 + i * 160);
    });

    // 6. Scrum visual engine
    setTransition(scrumVisual,
        'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 1750);

    // 7. Footer
    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 2100);

    /* ═══════════════════════════════════════════════════════════
       INTERACTIVE SPRINT CYCLE HUB & PODS
       ═══════════════════════════════════════════════════════════ */
    const pods = document.querySelectorAll('.cycle-pod');
    const hubTag = document.querySelector('.hub-tag');
    const originalTagText = hubTag ? hubTag.textContent : 'Incrément Livrable';

    pods.forEach(pod => {
        const stage = pod.getAttribute('data-stage');
        const line = document.querySelector(`.hub-line[data-line="${stage}"]`);
        const label = pod.querySelector('.pod-label')?.textContent || '';

        pod.addEventListener('mouseenter', () => {
            if (line) {
                line.classList.add('active');
            }
            if (hubTag) {
                hubTag.textContent = `Étape ${stage} : ${label}`;
                hubTag.style.color = '#38bdf8';
                hubTag.style.transition = 'color 0.2s ease';
            }
        });

        pod.addEventListener('mouseleave', () => {
            if (line) {
                line.classList.remove('active');
            }
            if (hubTag) {
                hubTag.textContent = originalTagText;
                hubTag.style.color = '#94a3b8';
            }
        });
    });
});
