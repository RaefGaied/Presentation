/* Slide 01 : Cover Animations */
document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ═══════════════════════════════════════════════════════════
       FINBANK REAL BANKING NETWORK
       ═══════════════════════════════════════════════════════════ */
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }
    /* ═══════════════════════════════════════════════════════════
       INTERACTIVE 3D PARALLAX TILT ON FINBANK BRANDMARK
       ═══════════════════════════════════════════════════════════ */
    const brandmark = document.querySelector('.cover__brandmark-ring');
    if (brandmark && !prefersReduced) {
        let mouseX = 0, mouseY = 0;
        let curTiltX = 0, curTiltY = 0;

        window.addEventListener('mousemove', (e) => {
            const rect = brandmark.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            mouseX = (e.clientX - cx) / (window.innerWidth / 2);
            mouseY = (e.clientY - cy) / (window.innerHeight / 2);
        });

        window.addEventListener('mouseleave', () => {
            mouseX = 0;
            mouseY = 0;
        });

        function updateTilt() {
            curTiltX += (mouseY * -7 - curTiltX) * 0.08;
            curTiltY += (mouseX * 9 - curTiltY) * 0.08;
            brandmark.style.setProperty('--tiltX', `${curTiltX.toFixed(2)}deg`);
            brandmark.style.setProperty('--tiltY', `${curTiltY.toFixed(2)}deg`);
            requestAnimationFrame(updateTilt);
        }
        setTimeout(() => {
            requestAnimationFrame(updateTilt);
        }, 800);
    }
});
