/* Slide 02 : Plan / Roadmap */

document.addEventListener('DOMContentLoaded', () => {
    /* ═══════════════════════════════════════════════════════════
       FINBANK REAL BANKING NETWORK
       ═══════════════════════════════════════════════════════════ */
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }

    /* ── Entrance Animations ── */
    const header    = document.querySelector('.plan__header');
    const cards     = document.querySelectorAll('.plan__card');
    const connector = document.querySelector('.plan__connector');
    const nav       = document.querySelector('.navigation');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
        if (header) {
            setTimeout(() => {
                header.style.transition = 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)';
                header.style.opacity = '1';
                header.style.transform = 'translateY(0) scale(1)';
            }, 250);
        }

        if (connector) {
            setTimeout(() => {
                connector.style.transition = 'opacity 1.2s ease, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
                connector.style.opacity = '1';
                connector.style.transform = 'translateY(0) scale(1)';
            }, 500);
        }

        cards.forEach((card, idx) => {
            const delay = 600 + idx * 200;
            setTimeout(() => {
                card.style.transition = 'opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translate(0, 0) rotateX(0) rotateY(0) scale(1)';
            }, delay);
        });

        if (nav) {
            setTimeout(() => {
                nav.style.transition = 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)';
                nav.style.opacity = '1';
                nav.style.transform = 'translateY(0) scale(1)';
            }, 1600);
        }
    }

    /* Inject dot pulse keyframes */
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dotPulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.3); }
        }
    `;
    document.head.appendChild(style);
});
