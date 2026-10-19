/* Slide 16 : Interface Reels */

document.addEventListener('DOMContentLoaded', () => {

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ═══════════════════════════════════════════════════════════
       FINBANK REAL BANKING NETWORK
       ═══════════════════════════════════════════════════════════ */
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }

    /* ═══════════════════════════════════════════════════════════
       GALLERY
       ═══════════════════════════════════════════════════════════ */
    const gallery      = document.getElementById('gallery');
    const galleryImgs  = gallery.querySelectorAll('.gallery__img');
    const counterEl    = document.getElementById('gallery-counter');
    const progressEl   = document.getElementById('gallery-progress');
    const btnPrev      = document.getElementById('gallery-prev');
    const btnNext      = document.getElementById('gallery-next');
    const btnClose     = document.getElementById('gallery-close');
    const TOTAL_IMGS   = galleryImgs.length;

    let galleryActive = false;
    let currentIndex  = 0;

    function updateGalleryUI() {
        galleryImgs.forEach((img, i) => {
            img.classList.remove('is-active', 'is-exit');
            if (i === currentIndex) {
                img.classList.add('is-active');
            } else if (i < currentIndex) {
                img.classList.add('is-exit');
            }
        });
        counterEl.textContent = `${currentIndex + 1} / ${TOTAL_IMGS}`;
        progressEl.style.width = `${((currentIndex + 1) / TOTAL_IMGS) * 100}%`;
        btnPrev.classList.toggle('is-disabled', currentIndex === 0);
        btnNext.classList.toggle('is-disabled', currentIndex === TOTAL_IMGS - 1);
    }

    function openGallery() {
        galleryActive = true;
        currentIndex = 0;
        gallery.classList.add('is-active');
        updateGalleryUI();
    }

    function closeGallery() {
        galleryActive = false;
        gallery.classList.remove('is-active');
        // Reset images for next open
        setTimeout(() => {
            galleryImgs.forEach(img => img.classList.remove('is-active', 'is-exit'));
        }, 500);
    }

    function nextImage() {
        if (currentIndex < TOTAL_IMGS - 1) {
            currentIndex++;
            updateGalleryUI();
            return true; // handled
        }
        return false; // at last image, let nav handle it
    }

    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGalleryUI();
            return true; // handled
        }
        closeGallery();
        return true; // handled (closed gallery instead of going to prev slide)
    }

    // Click handlers
    btnClose.addEventListener('click', closeGallery);
    btnNext.addEventListener('click', () => nextImage());
    btnPrev.addEventListener('click', () => prevImage());
    gallery.querySelector('.gallery__backdrop').addEventListener('click', closeGallery);

    // Hook for nav.js click navigation
    window.__galleryHandleClick = function () {
        if (!galleryActive) { openGallery(); return true; }
        if (nextImage()) { return true; }
        closeGallery(); return false;
    };

    /* ═══════════════════════════════════════════════════════════
       KEYBOARD INTERCEPT (capture phase : before nav.js)
       ═══════════════════════════════════════════════════════════ */
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        // Right arrow / Down / Space
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
            if (!galleryActive) {
                // Not in gallery: open it instead of changing slide
                e.preventDefault();
                e.stopImmediatePropagation();
                openGallery();
                return;
            }
            // In gallery: try next image; if at end, let nav.js take over
            if (nextImage()) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
            // If nextImage() returned false (at end), do nothing => nav.js will navigate to next slide
        }

        // Left arrow / Up
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            if (galleryActive) {
                e.preventDefault();
                e.stopImmediatePropagation();
                prevImage();
            }
            // If gallery not active, let nav.js go to previous slide
        }

        // Escape: close gallery
        if (e.key === 'Escape') {
            if (galleryActive) {
                e.preventDefault();
                e.stopImmediatePropagation();
                closeGallery();
            }
        }
    }, true); // capture phase

    /* ═══════════════════════════════════════════════════════════
       CLICK TO OPEN GALLERY
       ═══════════════════════════════════════════════════════════ */
    document.querySelectorAll('.device__screen img').forEach((img, i) => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            galleryActive = true;
            currentIndex = i;
            gallery.classList.add('is-active');
            updateGalleryUI();
        });
    });


    /* ═══════════════════════════════════════════════════════════
       ENTRANCE SEQUENCE
       ═══════════════════════════════════════════════════════════ */
    if (prefersReduced) return;

    const header         = document.querySelector('.slide__header');
    const title          = document.querySelector('.slide__title');
    const subtitle       = document.querySelector('.slide__subtitle');
    const stage          = document.querySelector('.interface-stage');
    const devices        = document.querySelectorAll('.device');
    const nav            = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        if (!el) return;
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    setTransition(header,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 150);

    setTransition(title,
        'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 400);

    setTransition(subtitle,
        'opacity 0.6s ease, transform 0.6s ease', 650);

    setTransition(stage,
        'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', 900);

    devices.forEach((device, i) => {
        setTransition(device,
            'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', 1100 + i * 250);
    });

    setTransition(nav,
        'opacity 0.8s ease, transform 0.8s ease', 2000);
});
