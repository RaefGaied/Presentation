/* ═══════════════════════════════════════════════════════════
   FinBank – High-Performance Slide Entrance & Spotlight Engine
   Staggered fintech reveals, interactive ambient spotlight & card physics
   ═══════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ═══════════════════════════════════════════════════════════
       FINBANK CANVAS ARTIFACT RENDERER
       Replaces all abstract geometric shapes with authentic banking symbols:
       - TND (Dinar Tunisien), EUR (€), USD ($), % (taux)
       - Credit Card with EMV chip
       - Security Shield with audit validation check
       - Central Banking Institution / Temple Facade
       - Instant Transfer dual transaction arrows
       - Flowable BPMN Decision Gateway (> 5 000 TND)
       ═══════════════════════════════════════════════════════════ */
    window.drawBankArtifact = function(ctx, s) {
        if (!ctx || !s) return;
        ctx.save();
        ctx.translate(s.x, s.y);
        if (s.rotation) ctx.rotate(s.rotation);

        let type = s.type || 'tnd';
        // Intercept legacy shapes if any
        if (type === 'circle') {
            const h = Math.abs(Math.floor((s.x + s.y) % 3));
            type = h === 0 ? 'tnd' : (h === 1 ? 'shield' : 'eur');
        } else if (type === 'triangle') {
            const h = Math.abs(Math.floor((s.x + s.y) % 2));
            type = h === 0 ? 'vault' : 'bpmn';
        } else if (type === 'square') {
            const h = Math.abs(Math.floor((s.x + s.y) % 2));
            type = h === 0 ? 'card' : 'transfer';
        }

        const sz = Math.max(16, s.size || 26);

        // Theme palette determination based on type
        let theme = {
            border: 'rgba(0, 102, 204, 0.55)',
            glow: 'rgba(0, 102, 204, 0.22)',
            accent: '#0066cc',
            secondary: '#0284c7',
            bgGrad: ['rgba(255, 255, 255, 0.96)', 'rgba(240, 246, 255, 0.88)']
        };

        if (type === 'tnd') {
            theme = {
                border: 'rgba(217, 119, 6, 0.65)',
                glow: 'rgba(245, 158, 11, 0.28)',
                accent: '#d97706',
                secondary: '#f59e0b',
                bgGrad: ['rgba(255, 254, 245, 0.96)', 'rgba(254, 243, 199, 0.88)']
            };
        } else if (type === 'card') {
            theme = {
                border: 'rgba(2, 132, 199, 0.60)',
                glow: 'rgba(2, 132, 199, 0.25)',
                accent: '#0284c7',
                secondary: '#0066cc',
                bgGrad: ['rgba(240, 249, 255, 0.96)', 'rgba(224, 242, 254, 0.88)']
            };
        } else if (type === 'shield') {
            theme = {
                border: 'rgba(16, 185, 129, 0.65)',
                glow: 'rgba(16, 185, 129, 0.28)',
                accent: '#10b981',
                secondary: '#059669',
                bgGrad: ['rgba(240, 253, 244, 0.96)', 'rgba(209, 250, 229, 0.88)']
            };
        } else if (type === 'transfer') {
            theme = {
                border: 'rgba(234, 88, 12, 0.60)',
                glow: 'rgba(234, 88, 12, 0.25)',
                accent: '#ea580c',
                secondary: '#0066cc',
                bgGrad: ['rgba(255, 247, 237, 0.96)', 'rgba(254, 215, 170, 0.88)']
            };
        } else if (type === 'bpmn') {
            theme = {
                border: 'rgba(234, 88, 12, 0.60)',
                glow: 'rgba(234, 88, 12, 0.25)',
                accent: '#ea580c',
                secondary: '#10b981',
                bgGrad: ['rgba(255, 251, 235, 0.96)', 'rgba(254, 240, 138, 0.85)']
            };
        } else if (type === 'vault') {
            theme = {
                border: 'rgba(99, 102, 241, 0.60)',
                glow: 'rgba(99, 102, 241, 0.25)',
                accent: '#6366f1',
                secondary: '#4f46e5',
                bgGrad: ['rgba(245, 243, 255, 0.96)', 'rgba(237, 233, 254, 0.88)']
            };
        } else if (type === 'microservice') {
            theme = {
                border: 'rgba(6, 182, 212, 0.60)',
                glow: 'rgba(6, 182, 212, 0.25)',
                accent: '#06b6d4',
                secondary: '#0284c7',
                bgGrad: ['rgba(236, 254, 255, 0.96)', 'rgba(207, 250, 254, 0.88)']
            };
        }

        // 1. DESSINER LE MÉDAILLON EN VERRE DÉPOLI (Visible, lumineux, net)
        ctx.shadowColor = theme.glow;
        ctx.shadowBlur = 14;
        ctx.shadowOffsetY = 4;

        const isRect = (type === 'card' || type === 'transfer');
        const rw = isRect ? sz * 1.6 : sz * 1.1;
        const rh = isRect ? sz * 1.05 : sz * 1.1;

        const glassGrad = ctx.createLinearGradient(-rw/2, -rh/2, rw/2, rh/2);
        glassGrad.addColorStop(0, theme.bgGrad[0]);
        glassGrad.addColorStop(1, theme.bgGrad[1]);
        ctx.fillStyle = glassGrad;
        ctx.strokeStyle = theme.border;
        ctx.lineWidth = 1.6;

        ctx.beginPath();
        if (isRect) {
            if (ctx.roundRect) ctx.roundRect(-rw/2, -rh/2, rw, rh, 10);
            else ctx.rect(-rw/2, -rh/2, rw, rh);
        } else {
            ctx.arc(0, 0, sz * 0.95, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.stroke();

        // Réinitialiser l'ombre pour la netteté des icônes intérieures
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        // 2. DESSINER LES GRAPHISMES BANCAIRES FINTECH INTÉRIEURS
        switch (type) {
            case 'tnd': {
                // Pièce d'or Dinar Tunisien
                // Anneau doré intérieur
                ctx.beginPath();
                ctx.arc(0, 0, sz * 0.76, 0, Math.PI * 2);
                ctx.strokeStyle = theme.accent;
                ctx.lineWidth = 1.4;
                ctx.stroke();

                // Micro-crénelage de sécurité monétaire
                ctx.beginPath();
                ctx.arc(0, 0, sz * 0.65, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(217, 119, 6, 0.35)';
                ctx.lineWidth = 0.8;
                ctx.setLineDash([2, 4]);
                ctx.stroke();
                ctx.setLineDash([]);

                // Typographie TND nette et bold
                ctx.fillStyle = '#0f172a';
                ctx.font = `800 ${Math.round(sz * 0.44)}px 'Outfit', 'Inter', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('TND', 0, -sz * 0.04);

                // Dénomination en arabe د.ت (Dinar Tunisien)
                ctx.fillStyle = theme.accent;
                ctx.font = `700 ${Math.round(sz * 0.22)}px 'Inter', sans-serif`;
                ctx.fillText('د.ت', 0, sz * 0.38);
                break;
            }

            case 'card': {
                // Carte Bancaire FinBank avec Puce EMV & Contactless
                const cw = sz * 1.35;
                const ch = sz * 0.84;

                // Fond de la carte intérieure bleue FinBank
                const cardGrad = ctx.createLinearGradient(-cw/2, -ch/2, cw/2, ch/2);
                cardGrad.addColorStop(0, '#0052cc');
                cardGrad.addColorStop(1, '#003380');
                ctx.fillStyle = cardGrad;
                ctx.beginPath();
                if (ctx.roundRect) ctx.roundRect(-cw/2, -ch/2, cw, ch, 5);
                else ctx.rect(-cw/2, -ch/2, cw, ch);
                ctx.fill();

                // Puce EMV Dorée
                const pw = cw * 0.24;
                const ph = ch * 0.32;
                ctx.fillStyle = '#fbbf24';
                ctx.strokeStyle = '#d97706';
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                if (ctx.roundRect) ctx.roundRect(-cw/2 + cw * 0.12, -ph/2, pw, ph, 2);
                else ctx.rect(-cw/2 + cw * 0.12, -ph/2, pw, ph);
                ctx.fill();
                ctx.stroke();

                // Traces de circuits sur la puce EMV
                ctx.beginPath();
                ctx.moveTo(-cw/2 + cw * 0.12 + pw/2, -ph/2);
                ctx.lineTo(-cw/2 + cw * 0.12 + pw/2, ph/2);
                ctx.moveTo(-cw/2 + cw * 0.12, 0);
                ctx.lineTo(-cw/2 + cw * 0.12 + pw, 0);
                ctx.stroke();

                // Ondes Radio Contactless NFC )))
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 1.1;
                for (let r = 1; r <= 3; r++) {
                    ctx.beginPath();
                    ctx.arc(-cw/2 + cw * 0.50, 0, r * 3.5, -Math.PI * 0.3, Math.PI * 0.3);
                    ctx.stroke();
                }

                // Points du numéro de carte FinBank
                ctx.fillStyle = '#ffffff';
                ctx.font = `600 ${Math.round(sz * 0.17)}px 'Outfit', sans-serif`;
                ctx.textAlign = 'right';
                ctx.textBaseline = 'middle';
                ctx.fillText('•••• 8420', cw/2 - cw * 0.08, ch * 0.26);

                // Logo FinBank micro
                ctx.fillStyle = '#93c5fd';
                ctx.font = `700 ${Math.round(sz * 0.16)}px 'Outfit', sans-serif`;
                ctx.textAlign = 'left';
                ctx.fillText('FinBank', -cw/2 + cw * 0.12, -ch * 0.28);
                break;
            }

            case 'shield': {
                // Bouclier Sécurité & Audit Trail BCT
                const sw = sz * 0.85;
                const sh = sz * 1.1;

                // Corps du bouclier
                ctx.beginPath();
                ctx.moveTo(0, -sh/2);
                ctx.lineTo(sw/2, -sh/3);
                ctx.lineTo(sw/2, sh/6);
                ctx.quadraticCurveTo(sw/2, sh/2, 0, sh/2 + 2);
                ctx.quadraticCurveTo(-sw/2, sh/2, -sw/2, sh/6);
                ctx.lineTo(-sw/2, -sh/3);
                ctx.closePath();

                const shGrad = ctx.createLinearGradient(0, -sh/2, 0, sh/2);
                shGrad.addColorStop(0, 'rgba(16, 185, 129, 0.22)');
                shGrad.addColorStop(1, 'rgba(5, 150, 105, 0.38)');
                ctx.fillStyle = shGrad;
                ctx.fill();
                ctx.strokeStyle = theme.accent;
                ctx.lineWidth = 1.8;
                ctx.stroke();

                // Coche de validation JWT / Sécurité
                ctx.beginPath();
                ctx.moveTo(-sw * 0.26, -sh * 0.02);
                ctx.lineTo(-sw * 0.08, sh * 0.16);
                ctx.lineTo(sw * 0.30, -sh * 0.18);
                ctx.strokeStyle = '#059669';
                ctx.lineWidth = 2.4;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.stroke();

                // Petit cadenas supérieur
                ctx.beginPath();
                ctx.arc(0, -sh * 0.28, sw * 0.12, Math.PI, 0);
                ctx.strokeStyle = theme.accent;
                ctx.lineWidth = 1.4;
                ctx.stroke();
                break;
            }

            case 'transfer': {
                // Virement Instantané 24/7 (Flèches bidirectionnelles vives)
                const tw = sz * 0.95;

                // Flèche 1 (Virement sortant - FinBank Bleu)
                ctx.strokeStyle = '#0066cc';
                ctx.fillStyle = '#0066cc';
                ctx.lineWidth = 2.2;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(-tw/2, -sz * 0.16);
                ctx.lineTo(tw/2 - 6, -sz * 0.16);
                ctx.stroke();
                // Tête de flèche
                ctx.beginPath();
                ctx.moveTo(tw/2, -sz * 0.16);
                ctx.lineTo(tw/2 - 7, -sz * 0.16 - 5);
                ctx.lineTo(tw/2 - 7, -sz * 0.16 + 5);
                ctx.closePath();
                ctx.fill();

                // Flèche 2 (Virement entrant - VERMEG Orange)
                ctx.strokeStyle = '#ea580c';
                ctx.fillStyle = '#ea580c';
                ctx.lineWidth = 2.2;
                ctx.beginPath();
                ctx.moveTo(tw/2, sz * 0.16);
                ctx.lineTo(-tw/2 + 6, sz * 0.16);
                ctx.stroke();
                // Tête de flèche
                ctx.beginPath();
                ctx.moveTo(-tw/2, sz * 0.16);
                ctx.lineTo(-tw/2 + 7, sz * 0.16 - 5);
                ctx.lineTo(-tw/2 + 7, sz * 0.16 + 5);
                ctx.closePath();
                ctx.fill();

                // Badge "24/7"
                ctx.fillStyle = '#475569';
                ctx.font = `800 ${Math.round(sz * 0.20)}px 'Outfit', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('24/7', 0, 0);
                break;
            }

            case 'bpmn': {
                // Passerelle Décisionnelle Flowable BPMN (> 5 000 TND)
                const dw = sz * 0.82;

                ctx.beginPath();
                ctx.moveTo(0, -dw);
                ctx.lineTo(dw, 0);
                ctx.lineTo(0, dw);
                ctx.lineTo(-dw, 0);
                ctx.closePath();
                ctx.fillStyle = 'rgba(234, 88, 12, 0.15)';
                ctx.fill();
                ctx.strokeStyle = theme.accent;
                ctx.lineWidth = 2.0;
                ctx.stroke();

                // Engrenage intérieur / condition Flowable
                ctx.beginPath();
                ctx.arc(0, 0, dw * 0.36, 0, Math.PI * 2);
                ctx.strokeStyle = '#ea580c';
                ctx.lineWidth = 1.4;
                ctx.stroke();

                ctx.fillStyle = '#ea580c';
                ctx.font = `800 ${Math.round(sz * 0.26)}px 'Outfit', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('⚡', 0, 0);
                break;
            }

            case 'vault': {
                // Coffre-fort Numérique & Chiffrement
                const vr = sz * 0.58;
                ctx.beginPath();
                ctx.arc(0, 0, vr, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(99, 102, 241, 0.18)';
                ctx.fill();
                ctx.strokeStyle = theme.accent;
                ctx.lineWidth = 2.0;
                ctx.stroke();

                // Encoches radiales du cadran du coffre
                ctx.strokeStyle = theme.accent;
                ctx.lineWidth = 1.5;
                for (let a = 0; a < 8; a++) {
                    const ang = (a * Math.PI) / 4;
                    ctx.beginPath();
                    ctx.moveTo(Math.cos(ang) * (vr - 5), Math.sin(ang) * (vr - 5));
                    ctx.lineTo(Math.cos(ang) * (vr + 2), Math.sin(ang) * (vr + 2));
                    ctx.stroke();
                }

                // Trou de serrure central
                ctx.fillStyle = '#4f46e5';
                ctx.beginPath();
                ctx.arc(0, -2, 3.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(-2.5, 0);
                ctx.lineTo(2.5, 0);
                ctx.lineTo(3.5, 7);
                ctx.lineTo(-3.5, 7);
                ctx.closePath();
                ctx.fill();
                break;
            }

            case 'eur': {
                // Symbole Euro € pour transferts internationaux
                ctx.beginPath();
                ctx.arc(0, 0, sz * 0.74, 0, Math.PI * 2);
                ctx.strokeStyle = theme.accent;
                ctx.lineWidth = 1.4;
                ctx.stroke();

                ctx.fillStyle = '#0f172a';
                ctx.font = `700 ${Math.round(sz * 0.65)}px 'Outfit', 'Inter', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('€', 0, 0);
                break;
            }

            case 'microservice': {
                // Node Microservices Docker / Kafka Event Bus
                const hr = sz * 0.62;
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    const ang = (i * Math.PI) / 3;
                    const hx = Math.cos(ang) * hr;
                    const hy = Math.sin(ang) * hr;
                    if (i === 0) ctx.moveTo(hx, hy);
                    else ctx.lineTo(hx, hy);
                }
                ctx.closePath();
                ctx.fillStyle = 'rgba(6, 182, 212, 0.16)';
                ctx.fill();
                ctx.strokeStyle = theme.accent;
                ctx.lineWidth = 1.8;
                ctx.stroke();

                // Noyau central pulsant
                ctx.beginPath();
                ctx.arc(0, 0, hr * 0.35, 0, Math.PI * 2);
                ctx.fillStyle = '#06b6d4';
                ctx.fill();

                // Orbite satellite
                ctx.beginPath();
                ctx.arc(0, 0, hr * 0.75, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
                ctx.lineWidth = 0.8;
                ctx.setLineDash([2, 4]);
                ctx.stroke();
                ctx.setLineDash([]);
                break;
            }

            default: {
                ctx.beginPath();
                ctx.arc(0, 0, sz * 0.7, 0, Math.PI * 2);
                ctx.stroke();
                break;
            }
        }

        ctx.restore();
    };

    /* ═══════════════════════════════════════════════════════════
       FINBANK LIVING FINTECH AMBIENT CANVAS ENGINE
       "Choses qui baignent, gros orbes qui compressent & vont et viennent"
       1. Deforming, Compressing & Oscillating Orbs (Squash & Stretch en va-et-vient)
       2. Concentric Liquidity Pulse Waves (Ondes de compression douces)
       3. Floating Thematic Banking Medallions (TND, EMV Card, Shield, Transfer, BPMN, Vault)
       4. Sparks of Liquidity (Particules dorées & cyan qui baignent)
       5. Perimeter Event Bus (Kafka / RabbitMQ asynchronous data stream)
       ═══════════════════════════════════════════════════════════ */
    window.initFinBankNetwork = function(target) {
        const canvas = (typeof target === 'string') ? document.getElementById(target) : target;
        if (!canvas) return;
        if (canvas.__finbankNetworkActive) return;
        canvas.__finbankNetworkActive = true;
        window.__finbankNetworkActive = true;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const isSectionSlide = Boolean(document.querySelector('.section'));

        let w = 0, h = 0, dpr = 1;
        let tick = 0;
        const mouse = { x: null, y: null };

        // Initialiser les dimensions avant de créer les particules
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', function(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', function() {
            mouse.x = null;
            mouse.y = null;
        });

        // Facteur d'échelle adaptatif pour la résolution d'écran
        function getScale() {
            return Math.min(1.2, Math.max(0.8, Math.min(w / 1400, h / 800)));
        }

        // 1. PARTICULES GÉOMÉTRIQUES (style démo slide-10)
        const PARTICLE_COUNT = 50;
        const LINK_DIST = 180;
        const particles = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                originX: Math.random() * w,
                originY: Math.random() * h,
                phase: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.008 + 0.003,
                amp: Math.random() * 20 + 10,
                r: Math.random() * 1.8 + 0.6
            });
        }

        // 2. ORBES GÉOMÉTRIQUES AVEC DÉGRADÉ (couleurs originales)
        const orbColors = [
            { r: 0, g: 102, b: 204 },    // FinBank Sapphire Blue
            { r: 16, g: 185, b: 129 },   // Emerald Transaction Green
            { r: 234, g: 88, b: 12 },    // VERMEG Amber
            { r: 2, g: 132, b: 199 },    // Sky Blue
        ];

        const orbs = [];
        for (let i = 0; i < 5; i++) {
            const c = orbColors[i % orbColors.length];
            orbs.push({
                x: Math.random() * w,
                y: Math.random() * h,
                radius: Math.random() * 180 + 120,
                color: c,
                phaseX: Math.random() * Math.PI * 2,
                phaseY: Math.random() * Math.PI * 2,
                speedX: Math.random() * 0.0008 + 0.0003,
                speedY: Math.random() * 0.0006 + 0.0002,
                ampX: Math.random() * 60 + 40,
                ampY: Math.random() * 60 + 40
            });
        }

        // TOKENS (petits logos) avec mouvement très lent et transparent
        const TOKENS = [
            {
                type: 'tnd',
                baseSize: 20,
                curX: Math.random() * w,
                curY: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15, // Plus lent
                vy: (Math.random() - 0.5) * 0.15, // Plus lent
                rotSpeed: (Math.random() - 0.5) * 0.0003, // Plus lent
                phase: Math.random() * Math.PI * 2,
                opacity: 0,
                targetOpacity: 0.10 + Math.random() * 0.06, // Plus transparent
                fadeInSpeed: 0.0003 + Math.random() * 0.0002, // Fade in très doux
                fadeOutSpeed: 0.0002 + Math.random() * 0.0001, // Fade out très doux
                visible: false,
                fadingOut: false,
                lifeTime: 0,
                maxLifeTime: 8000 + Math.random() * 4000, // Vie plus longue
                nextAppear: Math.random() * 6000 + 3000 // Apparition plus lente
            },
            {
                type: 'card',
                baseSize: 20,
                curX: Math.random() * w,
                curY: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                rotSpeed: (Math.random() - 0.5) * 0.0003,
                phase: Math.random() * Math.PI * 2,
                opacity: 0,
                targetOpacity: 0.10 + Math.random() * 0.06,
                fadeInSpeed: 0.0003 + Math.random() * 0.0002,
                fadeOutSpeed: 0.0002 + Math.random() * 0.0001,
                visible: false,
                fadingOut: false,
                lifeTime: 0,
                maxLifeTime: 8000 + Math.random() * 4000,
                nextAppear: Math.random() * 6000 + 3000
            },
            {
                type: 'shield',
                baseSize: 19,
                curX: Math.random() * w,
                curY: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                rotSpeed: (Math.random() - 0.5) * 0.0003,
                phase: Math.random() * Math.PI * 2,
                opacity: 0,
                targetOpacity: 0.10 + Math.random() * 0.06,
                fadeInSpeed: 0.0003 + Math.random() * 0.0002,
                fadeOutSpeed: 0.0002 + Math.random() * 0.0001,
                visible: false,
                fadingOut: false,
                lifeTime: 0,
                maxLifeTime: 8000 + Math.random() * 4000,
                nextAppear: Math.random() * 6000 + 3000
            },
            {
                type: 'transfer',
                baseSize: 19,
                curX: Math.random() * w,
                curY: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                rotSpeed: (Math.random() - 0.5) * 0.0003,
                phase: Math.random() * Math.PI * 2,
                opacity: 0,
                targetOpacity: 0.10 + Math.random() * 0.06,
                fadeInSpeed: 0.0003 + Math.random() * 0.0002,
                fadeOutSpeed: 0.0002 + Math.random() * 0.0001,
                visible: false,
                fadingOut: false,
                lifeTime: 0,
                maxLifeTime: 8000 + Math.random() * 4000,
                nextAppear: Math.random() * 6000 + 3000
            },
            {
                type: 'bpmn',
                baseSize: 18,
                curX: Math.random() * w,
                curY: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                rotSpeed: (Math.random() - 0.5) * 0.0003,
                phase: Math.random() * Math.PI * 2,
                opacity: 0,
                targetOpacity: 0.10 + Math.random() * 0.06,
                fadeInSpeed: 0.0003 + Math.random() * 0.0002,
                fadeOutSpeed: 0.0002 + Math.random() * 0.0001,
                visible: false,
                fadingOut: false,
                lifeTime: 0,
                maxLifeTime: 8000 + Math.random() * 4000,
                nextAppear: Math.random() * 6000 + 3000
            },
            {
                type: 'microservice',
                baseSize: 18,
                curX: Math.random() * w,
                curY: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                rotSpeed: (Math.random() - 0.5) * 0.0003,
                phase: Math.random() * Math.PI * 2,
                opacity: 0,
                targetOpacity: 0.10 + Math.random() * 0.06,
                fadeInSpeed: 0.0003 + Math.random() * 0.0002,
                fadeOutSpeed: 0.0002 + Math.random() * 0.0001,
                visible: false,
                fadingOut: false,
                lifeTime: 0,
                maxLifeTime: 8000 + Math.random() * 4000,
                nextAppear: Math.random() * 6000 + 3000
            },
            {
                type: 'vault',
                baseSize: 18,
                curX: Math.random() * w,
                curY: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                rotSpeed: (Math.random() - 0.5) * 0.0003,
                phase: Math.random() * Math.PI * 2,
                opacity: 0,
                targetOpacity: 0.10 + Math.random() * 0.06,
                fadeInSpeed: 0.0003 + Math.random() * 0.0002,
                fadeOutSpeed: 0.0002 + Math.random() * 0.0001,
                visible: false,
                fadingOut: false,
                lifeTime: 0,
                maxLifeTime: 8000 + Math.random() * 4000,
                nextAppear: Math.random() * 6000 + 3000
            },
            {
                type: 'eur',
                baseSize: 18,
                curX: Math.random() * w,
                curY: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                rotSpeed: (Math.random() - 0.5) * 0.0003,
                phase: Math.random() * Math.PI * 2,
                opacity: 0,
                targetOpacity: 0.10 + Math.random() * 0.06,
                fadeInSpeed: 0.0003 + Math.random() * 0.0002,
                fadeOutSpeed: 0.0002 + Math.random() * 0.0001,
                visible: false,
                fadingOut: false,
                lifeTime: 0,
                maxLifeTime: 8000 + Math.random() * 4000,
                nextAppear: Math.random() * 6000 + 3000
            }
        ];

        // BOUCLE D'ANIMATION PRINCIPALE
        function renderFrame() {
            tick++;
            ctx.fillStyle = isSectionSlide
                ? 'rgba(15, 23, 42, 0.18)'
                : 'rgba(248, 250, 252, 0.18)';
            ctx.fillRect(0, 0, w, h);
            const scaleFactor = getScale();

            // ── 1. RENDU DES ORBES GÉOMÉTRIQUES (style démo slide-10) ──
            for (const o of orbs) {
                const ox = o.x + Math.sin(tick * o.speedX + o.phaseX) * o.ampX;
                const oy = o.y + Math.cos(tick * o.speedY + o.phaseY) * o.ampY;

                const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, o.radius);
                g.addColorStop(0, `rgba(${o.color.r},${o.color.g},${o.color.b},0.045)`);
                g.addColorStop(0.5, `rgba(${o.color.r},${o.color.g},${o.color.b},0.015)`);
                g.addColorStop(1, `rgba(${o.color.r},${o.color.g},${o.color.b},0)`);

                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(ox, oy, o.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            // ── 3. TOKENS (petits logos) avec mouvement aléatoire "out of nowhere" ──
            for (let i = 0; i < TOKENS.length; i++) {
                const tok = TOKENS[i];

                // Gestion de l'apparition/disparition (très doux et progressif)
                if (!tok.visible) {
                    tok.nextAppear -= 16; // ~60fps
                    if (tok.nextAppear <= 0) {
                        tok.visible = true;
                        tok.fadingOut = false;
                        tok.lifeTime = 0;
                        tok.curX = Math.random() * w;
                        tok.curY = Math.random() * h;
                        tok.vx = (Math.random() - 0.5) * 0.15;
                        tok.vy = (Math.random() - 0.5) * 0.15;
                        tok.opacity = 0;
                    }
                } else {
                    // Fade in très doux et progressif
                    if (!tok.fadingOut && tok.opacity < tok.targetOpacity) {
                        tok.opacity += tok.fadeInSpeed;
                        if (tok.opacity > tok.targetOpacity) tok.opacity = tok.targetOpacity;
                    }
                    // Maintenir l'opacité pendant la durée de vie
                    else if (!tok.fadingOut) {
                        tok.lifeTime += 16;
                        if (tok.lifeTime >= tok.maxLifeTime) {
                            tok.fadingOut = true;
                        }
                    }
                    // Fade out très doux et progressif
                    else if (tok.fadingOut) {
                        tok.opacity -= tok.fadeOutSpeed;
                        if (tok.opacity <= 0) {
                            tok.visible = false;
                            tok.nextAppear = Math.random() * 6000 + 3000;
                        }
                    }
                }

                if (tok.visible && tok.opacity > 0.01) {
                    // Mouvement aléatoire lent
                    tok.curX += tok.vx;
                    tok.curY += tok.vy;

                    // Rebond sur les bords
                    if (tok.curX < 0 || tok.curX > w) tok.vx *= -1;
                    if (tok.curY < 0 || tok.curY > h) tok.vy *= -1;

                    // Rotation lente
                    const rotation = Math.sin(tick * tok.rotSpeed + tok.phase) * 0.02;
                    const scale = scaleFactor * (1.0 + 0.005 * Math.sin(tick * 0.002 + tok.phase));

                    // Rendu de l'artéfact bancaire avec transparence
                    if (window.drawBankArtifact) {
                        ctx.globalAlpha = tok.opacity;
                        window.drawBankArtifact(ctx, {
                            type: tok.type,
                            x: tok.curX,
                            y: tok.curY,
                            size: tok.baseSize * scale,
                            rotation: rotation
                        });
                        ctx.globalAlpha = 1.0;
                    }
                }
            }

            // ── 4. PARTICULES GÉOMÉTRIQUES AVEC CONNEXIONS (style démo slide-10) ──
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const targetX = p.originX + Math.sin(tick * p.speed + p.phase) * p.amp;
                const targetY = p.originY + Math.cos(tick * p.speed * 0.7 + p.phase) * p.amp;

                p.x += (targetX - p.x) * 0.012;
                p.y += (targetY - p.y) * 0.012;

                // Répulsion au passage du curseur
                if (mouse.x !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 220 && dist > 1) {
                        const force = (220 - dist) / 220 * 0.015;
                        p.x += (dx / dist) * force * 60;
                        p.y += (dy / dist) * force * 60;
                    }
                }

                // Rebond sur les bords
                if (p.x < -40) { p.originX += w + 80; p.x += w + 80; }
                if (p.x > w + 40) { p.originX -= w + 80; p.x -= w + 80; }
                if (p.y < -40) { p.originY += h + 80; p.y += h + 80; }
                if (p.y > h + 40) { p.originY -= h + 80; p.y -= h + 80; }

                // Dessiner la particule
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r + 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 119, 204, ${0.06})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 119, 204, ${0.14})`;
                ctx.fill();

                // Dessiner les connexions entre particules proches
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < LINK_DIST * LINK_DIST) {
                        const dist = Math.sqrt(distSq);
                        const alpha = 0.035 * (1 - dist / LINK_DIST);

                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(0, 119, 204, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            if (!prefersReduced) requestAnimationFrame(renderFrame);
        }

        requestAnimationFrame(renderFrame);
    };

    /* ── Utility: smoothly reveal an element with modern fintech curve ── */
    function reveal(el, delay, duration, easing) {
        if (!el) return;
        duration = duration || 900;
        easing   = easing   || 'cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(function () {
            el.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
            el.style.opacity    = '1';
            el.style.transform  = 'none';
        }, delay);
    }

    /* ── Interactive Fintech Mouse Spotlight ── */
    function initSpotlight() {
        if (prefersReduced) return;
        const spotlight = document.createElement('div');
        spotlight.className = 'finbank-spotlight';
        spotlight.style.cssText = [
            'position:fixed;inset:0;pointer-events:none;z-index:1;',
            'background:radial-gradient(550px circle at 50% 50%, rgba(0,119,204,0.035), rgba(16,185,129,0.02), transparent 70%);',
            'opacity:0;transition:opacity 0.8s ease;',
            'will-change:background;'
        ].join('');
        document.body.appendChild(spotlight);

        let raf = null;
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let curX = mouseX, curY = mouseY;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            spotlight.style.opacity = '1';
        });

        document.addEventListener('mouseleave', function () {
            spotlight.style.opacity = '0';
        });

        function updateSpotlight() {
            curX += (mouseX - curX) * 0.04;
            curY += (mouseY - curY) * 0.04;
            spotlight.style.background = `radial-gradient(550px circle at ${curX.toFixed(1)}px ${curY.toFixed(1)}px, rgba(0,119,204,0.04), rgba(16,185,129,0.02), transparent 70%)`;
            raf = requestAnimationFrame(updateSpotlight);
        }
        updateSpotlight();
    }

    /* ── Mouse-parallax on ambient orbs ── */
    function initOrbParallax() {
        if (prefersReduced) return;
        const orbs = document.querySelectorAll('.ambient-orb');
        if (!orbs.length) return;
        let raf = null;
        let targetX = 0, targetY = 0, curX = 0, curY = 0;

        document.addEventListener('mousemove', function (e) {
            targetX = (e.clientX / window.innerWidth  - 0.5) * 12;
            targetY = (e.clientY / window.innerHeight - 0.5) * 8;
        });

        function loop() {
            curX += (targetX - curX) * 0.03;
            curY += (targetY - curY) * 0.03;
            orbs.forEach(function (orb, i) {
                const factor = 0.8 + i * 0.45;
                orb.style.transform = `translate(${curX * factor}px, ${curY * factor}px)`;
            });
            raf = requestAnimationFrame(loop);
        }
        loop();

        document.addEventListener('mouseleave', function () {
            targetX = 0; targetY = 0;
        });
    }

    /* ── Standard Fintech Entrance Sequence ── */
    function runEntrance() {
        if (prefersReduced) {
            document.querySelectorAll('[data-sr], [data-delay], .slide__header, .slide__title, .navigation').forEach(function (el) {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return;
        }

        /* 1. Header elements (rapid, high-precision) */
        reveal(document.querySelector('.slide__eyebrow'),  60, 800);
        reveal(document.querySelector('.slide__header'),   100, 900);
        reveal(document.querySelector('.slide__title'),    150, 950);
        reveal(document.querySelector('.slide__subtitle'), 240, 850);

        /* 2. Cover-specific */
        reveal(document.querySelector('.cover__header'),   100, 900);
        reveal(document.querySelector('.cover__main'),     250, 1000);
        reveal(document.querySelector('.cover__footer'),   500, 900);

        /* 3. Plan slide */
        reveal(document.querySelector('.plan__header'),    100, 900);
        reveal(document.querySelector('.plan__connector'), 300, 800);
        const planCards = document.querySelectorAll('.plan__card');
        planCards.forEach(function (el, i) { reveal(el, 320 + i * 90, 850); });

        /* 4. Section dividers */
        reveal(document.querySelector('.section__eyebrow'), 80, 800);
        reveal(document.querySelector('.section__number'),  120, 900);
        reveal(document.querySelector('.section__title'),   220, 950);
        reveal(document.querySelector('.section__line'),    320, 900);

        /* 5. Generic content areas & panels */
        ['content-wrapper','content-split','content-grid',
         'needs-table','scrum-visual','diagram-panel',
         'advantages-panel','uc-section','roadmap',
         'arch-panel','gallery__panel','interface-showcase',
         'cicd-panel','releases','concl-summary','persp-grid',
         'merci-content','demo-content'].forEach(function (cls) {
            reveal(document.querySelector('.' + cls), 280, 900);
        });

        /* 6. Staggered children marked with data-delay */
        document.querySelectorAll('[data-delay]').forEach(function (el) {
            const d = parseInt(el.getAttribute('data-delay'), 10) || 0;
            reveal(el, 260 + d * 100, 850);
        });

        /* 7. Devices & interface showcases */
        document.querySelectorAll('.device').forEach(function (el, i) {
            reveal(el, 300 + i * 150, 950);
        });

        /* 8. Navigation footer pill */
        reveal(document.querySelector('.navigation'), 600, 800);
    }

    /* ── Initialize ── */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            if (window.initFinBankNetwork) window.initFinBankNetwork('bg-canvas');
            initSpotlight();
            initOrbParallax();
            runEntrance();
        });
    } else {
        if (window.initFinBankNetwork) window.initFinBankNetwork('bg-canvas');
        initSpotlight();
        initOrbParallax();
        runEntrance();
    }
})();
