/* Slide 20 : Global architecture */

document.addEventListener('DOMContentLoaded', () => {
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const reveal = (element, transition, delay) => {
        if (!element) return;
        window.setTimeout(() => {
            element.style.transition = transition;
            element.style.opacity = '1';
            element.style.transform = 'none';
        }, delay);
    };

    reveal(
        document.querySelector('.slide__header'),
        'opacity 0.8s ease, transform 0.8s ease',
        150
    );
    reveal(
        document.querySelector('.slide__title'),
        'opacity 0.8s ease, transform 0.8s ease',
        350
    );
    reveal(
        document.querySelector('.slide__subtitle'),
        'opacity 0.6s ease, transform 0.6s ease',
        500
    );
    reveal(
        document.querySelector('.gif-container'),
        'opacity 0.8s ease, transform 0.8s ease',
        700
    );
    reveal(document.querySelector('.navigation'), 'opacity 0.6s ease', 1100);
});
