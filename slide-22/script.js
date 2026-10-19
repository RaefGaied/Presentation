/* Slide 22 : CI/CD Pipeline FinBank — GitHub Actions */

document.addEventListener('DOMContentLoaded', function () {

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ═══════════════════════════════════════════════════════════
       PROOF DATA — 4 corner thumbnails → sequential overlay on →
       ═══════════════════════════════════════════════════════════ */
    var proofs = [
        {
            id:    'thumb-0',
            img:   '../assets/ci_github_actions_runs.png',
            title: 'GitHub Actions — CI Run',
            sub:   'Pipeline réussi · Status : <strong>Success</strong> · 9m 37s · 6 artefacts'
        },
        {
            id:    'thumb-1',
            img:   '../assets/ci_job_detail.png',
            title: 'Détail des jobs',
            sub:   'Build &amp; Test ✅ · Frontend Build ✅ · Playwright E2E ✅ · 5 images Docker publiées ✅'
        },
        {
            id:    'thumb-2',
            img:   '../assets/sonarcloud_dashboard.png',
            title: 'SonarCloud — Qualité du code',
            sub:   'banking-api · 7.1k lignes · Java/XML · Analyse automatique sur chaque push'
        },
        {
            id:    'thumb-3',
            img:   '../assets/ghcr_images.png',
            title: 'GHCR — 5 images Docker publiées',
            sub:   'frontend · postgres · pgadmin · ai-agent · banking-api → ghcr.io/raefgaied'
        }
    ];

    /* ═══════════════════════════════════════════════════════════
       OVERLAY SYSTEM
       ═══════════════════════════════════════════════════════════ */
    var overlay      = document.getElementById('ci-overlay');
    var closeBtn     = document.getElementById('ci-close');
    var overlayImg   = document.getElementById('overlay-img');
    var overlayTitle = document.getElementById('overlay-title-text');
    var overlaySub   = document.getElementById('overlay-sub');

    var overlayOpen  = false;
    var stepIndex    = -1;   /* -1 = no overlay shown yet, 0..3 = which proof is open */

    function highlightThumb(idx) {
        proofs.forEach(function (p, i) {
            var el = document.getElementById(p.id);
            if (el) el.classList.toggle('is-active', i === idx);
        });
    }

    function openOverlay(idx) {
        var p = proofs[idx];
        if (!p) return;
        overlayImg.src              = p.img;
        overlayTitle.innerHTML      = p.title;
        overlaySub.innerHTML        = p.sub;
        stepIndex  = idx;
        overlayOpen = true;
        overlay.classList.add('is-open');
        highlightThumb(idx);
    }

    function closeOverlay() {
        overlayOpen = false;
        overlay.classList.remove('is-open');
        highlightThumb(-1);
    }

    /* Click on each corner thumbnail */
    proofs.forEach(function (p, i) {
        var el = document.getElementById(p.id);
        if (el) {
            el.addEventListener('click', function () { openOverlay(i); });
        }
    });

    /* Also attach to proof-card buttons if they exist (legacy) */
    document.querySelectorAll('.proof-card').forEach(function (card) {
        card.addEventListener('click', function () {
            openOverlay(parseInt(card.dataset.step || 0, 10));
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
    if (overlay)  overlay.querySelector('.ci-overlay__backdrop').addEventListener('click', closeOverlay);

    /* ═══════════════════════════════════════════════════════════
       KEYBOARD — → steps through 4 overlays then navigates
       ═══════════════════════════════════════════════════════════ */
    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 'Escape' && overlayOpen) {
            e.preventDefault();
            e.stopImmediatePropagation();
            closeOverlay();
            return;
        }

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
            if (!overlayOpen) {
                /* First →: open proof #0 */
                e.preventDefault();
                e.stopImmediatePropagation();
                openOverlay(0);
                return;
            }
            /* Overlay open: go to next proof or close+navigate */
            var next = stepIndex + 1;
            if (next < proofs.length) {
                e.preventDefault();
                e.stopImmediatePropagation();
                openOverlay(next);
                return;
            }
            /* All 4 shown → close overlay, let nav.js navigate */
            closeOverlay();
            /* fall through to nav.js */
        }

        if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && overlayOpen) {
            if (stepIndex > 0) {
                e.preventDefault();
                e.stopImmediatePropagation();
                openOverlay(stepIndex - 1);
            } else {
                e.preventDefault();
                e.stopImmediatePropagation();
                closeOverlay();
            }
        }
    }, true);

    /* ═══════════════════════════════════════════════════════════
       ENTRANCE SEQUENCE
       ═══════════════════════════════════════════════════════════ */
    if (prefersReduced) {
        document.querySelectorAll(
            '.slide__header,.slide__eyebrow,.slide__title,.slide__subtitle,' +
            '.pipeline,.lane-label,.pipe-row,.pipe-node,.pipe-arrow,' +
            '.connector-vps,.corner-thumb,.navigation'
        ).forEach(function (el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    function reveal(el, delay, dur, ease) {
        if (!el) return;
        dur  = dur  || 650;
        ease = ease || 'cubic-bezier(0.22,1,0.36,1)';
        setTimeout(function () {
            el.style.transition = 'opacity ' + dur + 'ms ' + ease + ', transform ' + dur + 'ms ' + ease;
            el.style.opacity    = '1';
            el.style.transform  = 'none';
        }, delay);
    }

    function revealCorner(el, delay) {
        if (!el) return;
        setTimeout(function () {
            el.style.transition = 'opacity 550ms cubic-bezier(0.22,1,0.36,1), transform 550ms cubic-bezier(0.22,1,0.36,1)';
            el.style.opacity    = '1';
            /* keep the hover-ready position (reset scale but not translate so hover still works) */
            el.style.transform  = 'translateY(0) scale(1)';
            el.classList.add('is-visible');
        }, delay);
    }

    var rows         = document.querySelectorAll('.pipe-row');
    var vpsConnector = document.querySelector('.connector-vps');
    var lanes        = document.querySelectorAll('.lane-label');

    /* Header */
    reveal(document.querySelector('.slide__header'),   120, 700);
    reveal(document.querySelector('.slide__eyebrow'),  200, 500, 'ease');
    reveal(document.querySelector('.slide__title'),    320, 750);
    reveal(document.querySelector('.slide__subtitle'), 500, 550, 'ease');

    /* Pipeline wrapper */
    reveal(document.querySelector('.pipeline'), 600, 500, 'ease');

    /* CI lane label */
    reveal(lanes[0], 700, 500, 'ease');

    /* Row 1: CI nodes + arrows */
    reveal(rows[0], 780, 500, 'ease');
    var ciNodes  = rows[0] ? rows[0].querySelectorAll('.pipe-node')  : [];
    var ciArrows = rows[0] ? rows[0].querySelectorAll('.pipe-arrow') : [];
    ciNodes.forEach(function (n, i)  { reveal(n, 860 + i * 90, 520); });
    ciArrows.forEach(function (a, i) {
        var delay = 920 + i * 90;
        reveal(a, delay, 380, 'ease');
        setTimeout(function () {
            a.classList.add('is-animated');
            var dot = a.querySelector('.dot');
            if (dot) dot.style.animationDelay = (i * 0.38) + 's';
        }, delay + 400);
    });

    /* Central Docker connector */
    reveal(vpsConnector, 1480, 550, 'ease');
    reveal(rows[1], 1600, 560);
    reveal(rows[1] ? rows[1].querySelector('.pipe-node') : null, 1680, 600);

    /* CD lane label */
    reveal(lanes[1], 1960, 500, 'ease');

    /* Row 2: CD nodes + arrows */
    reveal(rows[2], 2020, 500, 'ease');
    var cdNodes  = rows[2] ? rows[2].querySelectorAll('.pipe-node')  : [];
    var cdArrows = rows[2] ? rows[2].querySelectorAll('.pipe-arrow') : [];
    cdNodes.forEach(function (n, i)  { reveal(n, 2100 + i * 110, 520); });
    cdArrows.forEach(function (a, i) {
        var delay = 2160 + i * 110;
        reveal(a, delay, 380, 'ease');
        setTimeout(function () {
            a.classList.add('is-animated');
            var dot = a.querySelector('.dot');
            if (dot) dot.style.animationDelay = (i * 0.5) + 's';
        }, delay + 400);
    });

    /* Corner thumbs — staggered pop-in from each corner */
    revealCorner(document.getElementById('thumb-0'), 2600);
    revealCorner(document.getElementById('thumb-1'), 2700);
    revealCorner(document.getElementById('thumb-2'), 2750);
    revealCorner(document.getElementById('thumb-3'), 2850);

    /* Nav pill */
    reveal(document.querySelector('.navigation'), 2950, 500, 'ease');
});
