/* Slide 20 : Architecture Globale FinBank — Dynamic Step Descriptions */

document.addEventListener('DOMContentLoaded', () => {

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ═══════════════════════════════════════════════════════════
       FINBANK REAL BANKING NETWORK CANVAS
       ═══════════════════════════════════════════════════════════ */
    if (window.initFinBankNetwork) {
        window.initFinBankNetwork('bg-canvas');
    }

    /* ═══════════════════════════════════════════════════════════
       STEP DESCRIPTIONS — Synchronized with GIF timeline
       Each step has: duration (ms), icon, label, description, gradientColors
       Adjust durations to match the actual GIF animation segments.
       ═══════════════════════════════════════════════════════════ */
    const STEPS = [
        {
            duration: 4000,
            icon: '🔐',
            label: '01',
            text: 'Authentification sécurisée — L\'utilisateur se connecte via JWT/RBAC. Un token signé est émis et stocké côté client pour sécuriser chaque requête.',
            gradient: 'linear-gradient(135deg, #0066cc 0%, #4f46e5 100%)'
        },
        {
            duration: 4000,
            icon: '🏠',
            label: '02',
            text: 'Tableau de bord personnalisé — Le frontend React 19 récupère les données financières en temps réel via l\'API Gateway Spring Boot 3.',
            gradient: 'linear-gradient(135deg, #0284c7 0%, #0066cc 100%)'
        },
        {
            duration: 4500,
            icon: '💳',
            label: '03',
            text: 'Gestion des comptes & virements — Le microservice de transactions orchestre les opérations ACID via PostgreSQL avec traçabilité d\'audit immuable.',
            gradient: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)'
        },
        {
            duration: 4500,
            icon: '⚙️',
            label: '04',
            text: 'Workflows BPMN Flowable — Les demandes de crédit et processus métier complexes s\'exécutent via le moteur Flowable, garantissant conformité et auditabilité.',
            gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)'
        },
        {
            duration: 4000,
            icon: '🤖',
            label: '05',
            text: 'Assistant IA RAG (Python) — Le chatbot financier utilise la génération augmentée par récupération pour fournir des conseils contextuels personnalisés.',
            gradient: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)'
        },
        {
            duration: 4000,
            icon: '📊',
            label: '06',
            text: 'Analytics & Reporting — Les tableaux de bord financiers agrègent les données en temps réel avec Redis pour le cache haute performance.',
            gradient: 'linear-gradient(135deg, #0066cc 0%, #10b981 100%)'
        },
        {
            duration: 4000,
            icon: '🐳',
            label: '07',
            text: 'Déploiement conteneurisé — L\'ensemble de l\'architecture est orchestré via Docker Compose, garantissant portabilité, isolation et déploiement reproductible.',
            gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0066cc 100%)'
        }
    ];

    /* ═══════════════════════════════════════════════════════════
       DOM REFERENCES
       ═══════════════════════════════════════════════════════════ */
    const header        = document.querySelector('.slide__header');
    const title         = document.querySelector('.slide__title');
    const subtitle      = document.querySelector('.slide__subtitle');
    const callout       = document.getElementById('stepCallout');
    const calloutBadge  = document.getElementById('stepBadge');
    const stepIcon      = document.getElementById('stepIcon');
    const stepNum       = document.getElementById('stepNum');
    const stepText      = document.getElementById('stepText');
    const progressBar   = document.getElementById('stepProgressBar');
    const gifContainer  = document.querySelector('.gif-container');
    const nav           = document.querySelector('.navigation');

    const setTransition = (el, props, delay) => {
        if (!el) return;
        setTimeout(() => {
            el.style.transition = props;
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, delay);
    };

    /* ═══════════════════════════════════════════════════════════
       BUILD STEP DOTS
       ═══════════════════════════════════════════════════════════ */
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'step-dots';
    STEPS.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'step-dot' + (i === 0 ? ' active' : '');
        dot.dataset.step = i;
        dotsContainer.appendChild(dot);
    });
    if (callout) callout.appendChild(dotsContainer);

    /* ═══════════════════════════════════════════════════════════
       STEP ROTATION ENGINE
       ═══════════════════════════════════════════════════════════ */
    let currentStep = 0;
    let stepTimer = null;
    let progressTimer = null;
    let progressStart = null;

    function updateDots(activeIdx) {
        document.querySelectorAll('.step-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIdx);
        });
    }

    function animateProgress(durationMs) {
        // Reset
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';

        // Trigger reflow
        progressBar.offsetWidth;

        // Animate to 100% over duration
        progressBar.style.transition = `width ${durationMs}ms linear`;
        progressBar.style.width = '100%';
    }

    function showStep(idx) {
        const step = STEPS[idx];

        // Fade out text
        stepText.classList.remove('visible', 'fading-in');
        stepText.classList.add('fading-out');

        setTimeout(() => {
            // Update content
            stepIcon.textContent = step.icon;
            stepNum.textContent = step.label;
            calloutBadge.style.background = step.gradient;
            stepText.textContent = step.text;

            // Fade in text
            stepText.classList.remove('fading-out');
            stepText.classList.add('fading-in');
            stepText.offsetWidth; // force reflow
            stepText.classList.remove('fading-in');
            stepText.classList.add('visible');

            // Update dots
            updateDots(idx);

            // Animate progress bar
            animateProgress(step.duration - 400);

        }, 350);

        // Schedule next step
        clearTimeout(stepTimer);
        stepTimer = setTimeout(() => {
            currentStep = (currentStep + 1) % STEPS.length;
            showStep(currentStep);
        }, step.duration);
    }

    /* ═══════════════════════════════════════════════════════════
       ENTRANCE SEQUENCE
       ═══════════════════════════════════════════════════════════ */
    if (!prefersReduced) {
        // 1. Header
        setTransition(header, 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 150);

        // 2. Title
        setTransition(title, 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)', 450);

        // 3. Subtitle
        setTransition(subtitle, 'opacity 0.7s ease, transform 0.7s ease', 650);

        // 4. Callout box
        setTransition(callout, 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)', 900);

        // 5. GIF container
        setTransition(gifContainer, 'opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)', 1100);

        // 6. Nav footer
        setTransition(nav, 'opacity 0.8s ease', 1800);
    }

    // Initialize first step description (after entrance animations settle)
    setTimeout(() => {
        // Set initial text as visible
        stepText.classList.add('visible');
        showStep(0);
    }, prefersReduced ? 0 : 1200);

});
