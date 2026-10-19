/* ═══════════════════════════════════════════════════════════
   FinBank – High-Precision Fintech Slide Transition
   Seamless, responsive slide transitions with banking laser sweep
   ═══════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Fintech Shutter Veil ── */
    const veil = document.createElement('div');
    veil.id = 'finbank-veil';
    veil.style.cssText = [
        'position:fixed;inset:0;z-index:9998;pointer-events:none;',
        'background:linear-gradient(135deg,rgba(10,25,47,0.96) 0%,rgba(15,23,42,0.98) 50%,rgba(10,34,64,0.96) 100%);',
        'backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
        'transform:translateX(100%);',
        'transition:transform 0.42s cubic-bezier(0.16,1,0.3,1);',
        'will-change:transform;'
    ].join('');
    document.body.appendChild(veil);

    /* ── Financial Laser Sweep Beam ── */
    const sweep = document.createElement('div');
    sweep.id = 'finbank-sweep';
    sweep.style.cssText = [
        'position:fixed;top:0;bottom:0;width:4px;z-index:9999;pointer-events:none;',
        'background:linear-gradient(180deg,#0077cc 0%,#38bdf8 30%,#10b981 70%,#ea580c 100%);',
        'box-shadow:0 0 25px rgba(56,189,248,0.9), 0 0 50px rgba(16,185,129,0.7), 0 0 80px rgba(0,119,204,0.5);',
        'opacity:0;transition:opacity 0.12s ease;'
    ].join('');
    document.body.appendChild(sweep);

    /* ── EXIT: called before navigating away ── */
    window.__playTransition = function (url, direction) {
        if (prefersReduced) {
            window.location.href = url;
            return;
        }

        if (document.body.classList.contains('finbank-leaving')) return;
        document.body.classList.add('finbank-leaving');

        const dir = direction === 'back' ? -1 : 1;
        try { sessionStorage.setItem('finbank-dir', dir > 0 ? 'forward' : 'back'); } catch(e) {}

        /* Animate sweep line & veil */
        veil.style.transition = 'transform 0.42s cubic-bezier(0.16,1,0.3,1)';
        veil.style.transform = dir > 0 ? 'translateX(100%)' : 'translateX(-100%)';
        void veil.offsetWidth; /* reflow */
        veil.style.transform = 'translateX(0)';

        sweep.style.left = dir > 0 ? 'auto' : '0';
        sweep.style.right = dir > 0 ? '0' : 'auto';
        sweep.style.opacity = '1';
        sweep.style.transition = 'opacity 0.1s ease';

        /* Smooth subtle depth scaling for outgoing slide */
        document.body.style.transition = 'transform 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.38s ease, filter 0.38s ease';
        document.body.style.transform = `scale(0.975) translateX(${dir * -24}px)`;
        document.body.style.filter = 'blur(3px) brightness(0.92)';
        document.body.style.opacity = '0.7';

        setTimeout(function () {
            window.location.href = url;
        }, 400);
    };

    /* ── ENTER: run when new slide loads ── */
    function doEnter() {
        if (prefersReduced) return;

        let dir = 'forward';
        try { dir = sessionStorage.getItem('finbank-dir') || 'forward'; sessionStorage.removeItem('finbank-dir'); } catch(e) {}

        const isForward = dir !== 'back';

        /* Place veil covering screen, then glide off smoothly */
        veil.style.transition = 'none';
        veil.style.transform = 'translateX(0)';
        void veil.offsetWidth;

        veil.style.transition = 'transform 0.48s cubic-bezier(0.16,1,0.3,1)';
        veil.style.transform = isForward ? 'translateX(-100%)' : 'translateX(100%)';

        /* Laser beam exiting */
        sweep.style.left = isForward ? '0' : 'auto';
        sweep.style.right = isForward ? 'auto' : '0';
        sweep.style.opacity = '1';
        setTimeout(function () {
            sweep.style.transition = 'opacity 0.35s ease';
            sweep.style.opacity = '0';
        }, 360);

        /* Clean body transform */
        document.body.style.transform = '';
        document.body.style.filter = '';
        document.body.style.opacity = '1';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', doEnter);
    } else {
        doEnter();
    }
})();
