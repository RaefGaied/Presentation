/* Slide 17 : Conception — Cas d'utilisation & Diagramme de classes */

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
    const header    = document.querySelector('.slide__header');
    const title     = document.getElementById('slideTitle');
    const subtitle  = document.getElementById('slideSubtitle');
    const ucSection = document.querySelector('.uc-section');
    const nav       = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        if (!el) return;
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    if (!prefersReduced) {
        setTransition(header, 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 150);
        setTransition(title, 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 380);
        setTransition(subtitle, 'opacity 0.6s ease, transform 0.6s ease', 600);
        setTransition(ucSection, 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 850);
        setTransition(nav, 'opacity 0.8s ease, transform 0.8s ease', 1400);
    } else {
        if (header) { header.style.opacity = '1'; header.style.transform = 'none'; }
        if (title) { title.style.opacity = '1'; title.style.transform = 'none'; }
        if (subtitle) { subtitle.style.opacity = '1'; subtitle.style.transform = 'none'; }
        if (ucSection) { ucSection.style.opacity = '1'; ucSection.style.transform = 'none'; }
        if (nav) { nav.style.opacity = '1'; }
    }

    /* ═══════════════════════════════════════════════════════════
       PROGRESSIVE VIEW SWITCHER (UC <-> CLASSES)
       ═══════════════════════════════════════════════════════════ */
    const eyebrowEl    = document.getElementById('slideEyebrow');
    const titleEl      = document.getElementById('slideTitle');
    const subtitleEl   = document.getElementById('slideSubtitle');
    const tabUc        = document.getElementById('tabUc');
    const tabClasses   = document.getElementById('tabClasses');
    const paneUc       = document.getElementById('paneUc');
    const paneClasses  = document.getElementById('paneClasses');
    const zoomLevelEl  = document.getElementById('zoomLevel');
    const btnToggleStepText = document.getElementById('btnToggleStepText');
    const btnToggleStep     = document.getElementById('btnToggleStep');
    const container         = document.getElementById('diagramContainer');
    const zoomWrapperUc     = document.getElementById('zoomWrapperUc');
    const zoomWrapperClasses= document.getElementById('zoomWrapperClasses');

    const viewData = {
        uc: {
            eyebrow: 'CONCEPTION · VUE FONCTIONNELLE',
            title: "Diagramme de cas d'utilisation global",
            subtitle: "Vue d'ensemble des interactions entre acteurs et le système FinBank",
            nextLabel: "Structure interne (Classes) \u2192"
        },
        classes: {
            eyebrow: 'CONCEPTION · STRUCTURE INTERNE',
            title: "Diagramme de classes global",
            subtitle: "Structure interne, entités métier et modélisation du domaine FinBank",
            nextLabel: "\u2190 Vue fonctionnelle (Cas d'utilisation)"
        }
    };

    let currentView = 'uc';
    let scaleMap = { uc: 1, classes: 1 };

    function updateZoomDisplay() {
        const curScale = scaleMap[currentView];
        if (zoomLevelEl) {
            zoomLevelEl.textContent = `${Math.round(curScale * 100)}%`;
        }
    }

    function applyScale(scale) {
        scale = Math.max(0.8, Math.min(4.0, scale));
        scaleMap[currentView] = scale;
        const activeWrapper = currentView === 'uc' ? zoomWrapperUc : zoomWrapperClasses;
        if (activeWrapper) {
            activeWrapper.style.transform = `scale(${scale})`;
            activeWrapper.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
        }
        updateZoomDisplay();
    }

    function switchView(target) {
        if (target !== 'uc' && target !== 'classes') return;
        currentView = target;

        // Tabs state
        if (tabUc && tabClasses) {
            tabUc.classList.toggle('is-active', target === 'uc');
            tabUc.setAttribute('aria-selected', target === 'uc');
            tabClasses.classList.toggle('is-active', target === 'classes');
            tabClasses.setAttribute('aria-selected', target === 'classes');
        }

        // Panes state
        if (paneUc && paneClasses) {
            paneUc.classList.toggle('is-active', target === 'uc');
            paneClasses.classList.toggle('is-active', target === 'classes');
        }

        // Texts
        const data = viewData[target];
        if (eyebrowEl) eyebrowEl.textContent = data.eyebrow;
        if (titleEl) titleEl.textContent = data.title;
        if (subtitleEl) subtitleEl.textContent = data.subtitle;
        if (btnToggleStepText) btnToggleStepText.textContent = data.nextLabel;

        // Reset scroll position on switch
        if (container) {
            container.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
        updateZoomDisplay();
    }

    // Check initial view from query param or hash
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('view') === 'classes' || window.location.hash === '#classes') {
        switchView('classes');
    }

    // Tab clicks
    if (tabUc) tabUc.addEventListener('click', () => switchView('uc'));
    if (tabClasses) tabClasses.addEventListener('click', () => switchView('classes'));
    if (btnToggleStep) {
        btnToggleStep.addEventListener('click', () => {
            switchView(currentView === 'uc' ? 'classes' : 'uc');
        });
    }

    /* ═══════════════════════════════════════════════════════════
       ZOOM & PAN CONTROLS
       ═══════════════════════════════════════════════════════════ */
    const btnZoomIn  = document.getElementById('btnZoomIn');
    const btnZoomOut = document.getElementById('btnZoomOut');
    const btnReset   = document.getElementById('btnReset');

    if (btnZoomIn) {
        btnZoomIn.addEventListener('click', (e) => {
            e.stopPropagation();
            applyScale(scaleMap[currentView] + 0.25);
        });
    }

    if (btnZoomOut) {
        btnZoomOut.addEventListener('click', (e) => {
            e.stopPropagation();
            applyScale(scaleMap[currentView] - 0.25);
        });
    }

    if (btnReset) {
        btnReset.addEventListener('click', (e) => {
            e.stopPropagation();
            applyScale(1);
            if (container) container.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        });
    }

    // Wheel zoom
    if (container) {
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.15 : 0.15;
            applyScale(scaleMap[currentView] + delta);
        }, { passive: false });
    }

    // Drag to pan
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    if (container) {
        container.addEventListener('mousedown', (e) => {
            if (e.target.closest('.diagram-toolbar') || e.target.closest('.conception-nav')) return;
            if (scaleMap[currentView] <= 1) return;
            isDragging = false;
            startX = e.pageX - container.offsetLeft;
            startY = e.pageY - container.offsetTop;
            scrollLeft = container.scrollLeft;
            scrollTop  = container.scrollTop;
            const activeWrapper = currentView === 'uc' ? zoomWrapperUc : zoomWrapperClasses;
            if (activeWrapper) activeWrapper.classList.add('panning');
        });

        container.addEventListener('mousemove', (e) => {
            const activeWrapper = currentView === 'uc' ? zoomWrapperUc : zoomWrapperClasses;
            if (!activeWrapper || !activeWrapper.classList.contains('panning')) return;
            e.preventDefault();
            isDragging = true;
            const x = e.pageX - container.offsetLeft;
            const y = e.pageY - container.offsetTop;
            const walkX = (x - startX) * 1.4;
            const walkY = (y - startY) * 1.4;
            container.scrollLeft = scrollLeft - walkX;
            container.scrollTop  = scrollTop  - walkY;
        });

        const stopDrag = () => {
            if (zoomWrapperUc) zoomWrapperUc.classList.remove('panning');
            if (zoomWrapperClasses) zoomWrapperClasses.classList.remove('panning');
            setTimeout(() => { isDragging = false; }, 50);
        };

        container.addEventListener('mouseup', stopDrag);
        container.addEventListener('mouseleave', stopDrag);

        // Click to toggle 1x / 2.0x zoom
        container.addEventListener('click', (e) => {
            if (e.target.closest('.diagram-toolbar') || e.target.closest('.conception-nav')) return;
            if (isDragging) return;
            if (scaleMap[currentView] === 1) {
                applyScale(2.0);
            } else {
                applyScale(1);
                container.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
            }
        });
    }

    /* ═══════════════════════════════════════════════════════════
       DEFENSE PROGRESSION KEYBOARD HANDLER
       ═══════════════════════════════════════════════════════════ */
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        // When in view 1 (Use Case) and presenter presses Next:
        if (currentView === 'uc') {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
                e.stopImmediatePropagation();
                e.preventDefault();
                switchView('classes');
                return;
            }
        }

        // When in view 2 (Class Diagram) and presenter presses Back:
        if (currentView === 'classes') {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.stopImmediatePropagation();
                e.preventDefault();
                switchView('uc');
                return;
            }
        }
        // Otherwise, allow standard nav.js event to bubble (ArrowRight on Classes -> Slide 18, ArrowLeft on UC -> Slide 16)
    }, true); // Capture phase ensures we intercept before nav.js bubbling

});
