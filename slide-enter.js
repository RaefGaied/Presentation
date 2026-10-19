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

        const sz = Math.max(22, s.size || 34);

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

        let w = 0, h = 0, dpr = 1;
        let tick = 0;
        const mouse = { x: null, y: null };

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
        resize();
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

        // 1. LES GROS ORBES FINTECH QUI COMPRESSENT ET VONT ET VIENNENT
        // Véritable déformation physique Squash & Stretch le long de la trajectoire
        const ORBS = [
            {
                baseRelX: 0.14, baseRelY: 0.18,
                baseRadius: 310,
                r1: 0, g1: 102, b1: 204, // FinBank Sapphire Blue
                r2: 6, g2: 182, b2: 212, // Electric Cyan
                compressSpeed: 0.009,
                compressionRatio: 0.38,
                driftSpeedX: 0.0035, driftSpeedY: 0.0042,
                driftAmpX: 110, driftAmpY: 75,
                phase: 0.0,
                pulseInterval: 280
            },
            {
                baseRelX: 0.86, baseRelY: 0.82,
                baseRadius: 330,
                r1: 16, g1: 185, b1: 129, // Emerald Transaction Green
                r2: 5, g2: 150, b2: 105,  // Deep Mint
                compressSpeed: 0.008,
                compressionRatio: 0.35,
                driftSpeedX: 0.0038, driftSpeedY: 0.0032,
                driftAmpX: 105, driftAmpY: 85,
                phase: 1.8,
                pulseInterval: 320
            },
            {
                baseRelX: 0.84, baseRelY: 0.18,
                baseRadius: 280,
                r1: 234, g1: 88, b1: 12,  // VERMEG Amber
                r2: 245, g2: 158, b2: 11, // Golden Sun
                compressSpeed: 0.011,
                compressionRatio: 0.40,
                driftSpeedX: 0.0042, driftSpeedY: 0.0036,
                driftAmpX: 95, driftAmpY: 70,
                phase: 3.4,
                pulseInterval: 260
            },
            {
                baseRelX: 0.18, baseRelY: 0.82,
                baseRadius: 290,
                r1: 2, g1: 132, b1: 199,  // Sky Blue
                r2: 99, g2: 102, b2: 241, // Royal Indigo
                compressSpeed: 0.010,
                compressionRatio: 0.36,
                driftSpeedX: 0.0032, driftSpeedY: 0.0045,
                driftAmpX: 115, driftAmpY: 80,
                phase: 4.9,
                pulseInterval: 300
            }
        ];

        // 2. CHOSES QUI BAIGNENT : MÉDAILLONS BANCAIRES FLOTTANTS
        // Positionnés judicieusement dans les zones calmes/périphériques
        const TOKENS = [
            {
                type: 'tnd',
                baseSize: 34,
                relX: 0.10, relY: 0.28,
                curX: null, curY: null,
                vx: 0, vy: 0,
                bobSpeedY: 0.012, bobAmpY: 18,
                bobSpeedX: 0.009, bobAmpX: 14,
                rotSpeed: 0.007,
                phase: 0.4
            },
            {
                type: 'card',
                baseSize: 36,
                relX: 0.88, relY: 0.30,
                curX: null, curY: null,
                vx: 0, vy: 0,
                bobSpeedY: 0.011, bobAmpY: 20,
                bobSpeedX: 0.012, bobAmpX: 15,
                rotSpeed: -0.006,
                phase: 2.1
            },
            {
                type: 'shield',
                baseSize: 32,
                relX: 0.11, relY: 0.70,
                curX: null, curY: null,
                vx: 0, vy: 0,
                bobSpeedY: 0.014, bobAmpY: 16,
                bobSpeedX: 0.010, bobAmpX: 12,
                rotSpeed: 0.005,
                phase: 3.7
            },
            {
                type: 'transfer',
                baseSize: 32,
                relX: 0.86, relY: 0.68,
                curX: null, curY: null,
                vx: 0, vy: 0,
                bobSpeedY: 0.013, bobAmpY: 18,
                bobSpeedX: 0.011, bobAmpX: 15,
                rotSpeed: -0.004,
                phase: 5.2
            },
            {
                type: 'bpmn',
                baseSize: 30,
                relX: 0.48, relY: 0.09,
                curX: null, curY: null,
                vx: 0, vy: 0,
                bobSpeedY: 0.010, bobAmpY: 12,
                bobSpeedX: 0.013, bobAmpX: 16,
                rotSpeed: 0.008,
                phase: 1.2
            },
            {
                type: 'microservice',
                baseSize: 30,
                relX: 0.52, relY: 0.91,
                curX: null, curY: null,
                vx: 0, vy: 0,
                bobSpeedY: 0.015, bobAmpY: 14,
                bobSpeedX: 0.009, bobAmpX: 12,
                rotSpeed: -0.006,
                phase: 4.1
            },
            {
                type: 'vault',
                baseSize: 28,
                relX: 0.07, relY: 0.48,
                curX: null, curY: null,
                vx: 0, vy: 0,
                bobSpeedY: 0.012, bobAmpY: 15,
                bobSpeedX: 0.011, bobAmpX: 13,
                rotSpeed: 0.005,
                phase: 2.8
            },
            {
                type: 'eur',
                baseSize: 28,
                relX: 0.93, relY: 0.48,
                curX: null, curY: null,
                vx: 0, vy: 0,
                bobSpeedY: 0.011, bobAmpY: 16,
                bobSpeedX: 0.010, bobAmpX: 14,
                rotSpeed: -0.005,
                phase: 4.6
            }
        ];

        // 3. ÉTINCELLES DE LIQUIDITÉ (Particules dorées et cyan qui baignent doucement)
        const SPARKS = [];
        const SPARK_COLORS = ['#f59e0b', '#10b981', '#0066cc', '#06b6d4', '#ea580c'];
        for (let i = 0; i < 22; i++) {
            SPARKS.push({
                x: Math.random(),
                y: Math.random(),
                speedY: 0.0003 + Math.random() * 0.0004,
                driftSpeedX: 0.004 + Math.random() * 0.005,
                driftAmpX: 15 + Math.random() * 20,
                radius: 1.6 + Math.random() * 1.8,
                color: SPARK_COLORS[i % SPARK_COLORS.length],
                phase: Math.random() * Math.PI * 2,
                opacity: 0.25 + Math.random() * 0.35
            });
        }

        // 4. PÉRIMÈTRE FIBRE-OPTIQUE & PACKETS (Clean framing & Kafka Events)
        const PERIMETER_NODES = [
            { relX: 0.04, relY: 0.08, color: '#0066cc' },
            { relX: 0.50, relY: 0.03, color: '#10b981' },
            { relX: 0.96, relY: 0.08, color: '#0066cc' },
            { relX: 0.97, relY: 0.50, color: '#ea580c' },
            { relX: 0.96, relY: 0.92, color: '#10b981' },
            { relX: 0.50, relY: 0.97, color: '#0066cc' },
            { relX: 0.04, relY: 0.92, color: '#10b981' },
            { relX: 0.03, relY: 0.50, color: '#ea580c' }
        ];

        const HIGHWAYS = [
            { from: 0, to: 1, speed: 0.0028 },
            { from: 1, to: 2, speed: 0.0026 },
            { from: 2, to: 3, speed: 0.0030 },
            { from: 3, to: 4, speed: 0.0027 },
            { from: 4, to: 5, speed: 0.0029 },
            { from: 5, to: 6, speed: 0.0025 },
            { from: 6, to: 7, speed: 0.0028 },
            { from: 7, to: 0, speed: 0.0026 }
        ];

        const PACKETS = [];
        for (let i = 0; i < HIGHWAYS.length; i++) {
            PACKETS.push({
                highwayIdx: i,
                progress: (i / HIGHWAYS.length + 0.15) % 1.0,
                color: PERIMETER_NODES[i % PERIMETER_NODES.length].color
            });
        }

        // BOUCLE D'ANIMATION PRINCIPALE
        function renderFrame() {
            tick++;
            ctx.clearRect(0, 0, w, h);
            const scaleFactor = getScale();

            // ── 1. RENDER LES GROS ORBES COMPRESSANTS EN VA-ET-VIENT ──
            for (let i = 0; i < ORBS.length; i++) {
                const o = ORBS[i];

                // Mouvement harmonisé en va-et-vient (Lissajous)
                const ox = o.baseRelX * w + Math.sin(tick * o.driftSpeedX + o.phase) * o.driftAmpX;
                const oy = o.baseRelY * h + Math.cos(tick * o.driftSpeedY + o.phase * 1.25) * o.driftAmpY;

                // Vecteur vitesse pour orienter l'axe de compression/étirement (Squash & Stretch)
                const vx = Math.cos(tick * o.driftSpeedX + o.phase) * o.driftAmpX * o.driftSpeedX;
                const vy = -Math.sin(tick * o.driftSpeedY + o.phase * 1.25) * o.driftAmpY * o.driftSpeedY;
                const angle = Math.atan2(vy, vx);

                // Compression harmonique : s'écrase lors des décélérations, s'étire en plein vol
                const compressVal = Math.sin(tick * o.compressSpeed + o.phase) * o.compressionRatio;
                const scaleMajor = 1.0 + compressVal;
                const scaleMinor = 1.0 / Math.sqrt(scaleMajor); // Préserve le volume apparent de liquide

                ctx.save();
                ctx.translate(ox, oy);
                ctx.rotate(angle);
                ctx.scale(scaleMajor, scaleMinor);

                const currentRadius = o.baseRadius * scaleFactor;
                const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, currentRadius);
                grad.addColorStop(0, `rgba(${o.r1}, ${o.g1}, ${o.b1}, 0.22)`);
                grad.addColorStop(0.38, `rgba(${o.r2}, ${o.g2}, ${o.b2}, 0.09)`);
                grad.addColorStop(0.75, `rgba(${o.r1}, ${o.g1}, ${o.b1}, 0.025)`);
                grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                // Onde de compression douce (concentric liquidity ripple pulse)
                const waveTick = (tick + o.phase * 60) % o.pulseInterval;
                const waveProgress = waveTick / o.pulseInterval;
                if (waveProgress > 0) {
                    const waveR = (currentRadius * 0.2) + waveProgress * (currentRadius * 0.9);
                    const waveAlpha = (1.0 - waveProgress) * 0.18;
                    ctx.beginPath();
                    ctx.arc(ox, oy, waveR, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(${o.r1}, ${o.g1}, ${o.b1}, ${waveAlpha})`;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                }
            }

            // ── 2. ÉTINCELLES DE LIQUIDITÉ QUI BAIGNENT FLUIDEMENT ──
            for (let i = 0; i < SPARKS.length; i++) {
                const spk = SPARKS[i];
                spk.y -= spk.speedY;
                if (spk.y < -0.05) spk.y = 1.05;

                const sx = spk.x * w + Math.sin(tick * spk.driftSpeedX + spk.phase) * spk.driftAmpX;
                const sy = spk.y * h;
                const sparkAlpha = spk.opacity * (0.8 + 0.2 * Math.sin(tick * 0.03 + spk.phase));

                ctx.beginPath();
                ctx.arc(sx, sy, spk.radius * scaleFactor, 0, Math.PI * 2);
                ctx.fillStyle = spk.color;
                ctx.globalAlpha = sparkAlpha;
                ctx.fill();

                // Micro-halo
                ctx.beginPath();
                ctx.arc(sx, sy, spk.radius * 2.5 * scaleFactor, 0, Math.PI * 2);
                ctx.strokeStyle = spk.color;
                ctx.globalAlpha = sparkAlpha * 0.35;
                ctx.stroke();
                ctx.globalAlpha = 1.0;
            }

            // ── 3. CHOSES QUI BAIGNENT : MÉDAILLONS BANCAIRES FLOTTANTS ──
            for (let i = 0; i < TOKENS.length; i++) {
                const tok = TOKENS[i];

                // Cible de flottaison harmonique ("qui baignent")
                const targetX = tok.relX * w + Math.cos(tick * tok.bobSpeedX + tok.phase) * tok.bobAmpX;
                const targetY = tok.relY * h + Math.sin(tick * tok.bobSpeedY + tok.phase) * tok.bobAmpY;

                if (tok.curX === null) {
                    tok.curX = targetX;
                    tok.curY = targetY;
                }

                // Amortissement élastique
                tok.vx = (targetX - tok.curX) * 0.05;
                tok.vy = (targetY - tok.curY) * 0.05;

                // Répulsion physique fluide au passage du curseur
                if (mouse.x !== null) {
                    const dx = tok.curX - mouse.x;
                    const dy = tok.curY - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180 && dist > 1) {
                        const force = (180 - dist) / 180 * 14;
                        tok.vx += (dx / dist) * force;
                        tok.vy += (dy / dist) * force;
                    }
                }

                tok.curX += tok.vx;
                tok.curY += tok.vy;

                // Balancement angulaire et respiration d'échelle
                const rotation = Math.sin(tick * tok.rotSpeed + tok.phase) * 0.12;
                const scale = scaleFactor * (1.0 + 0.06 * Math.sin(tick * 0.015 + tok.phase));

                // Rendu de l'artéfact bancaire authentique
                if (window.drawBankArtifact) {
                    window.drawBankArtifact(ctx, {
                        type: tok.type,
                        x: tok.curX,
                        y: tok.curY,
                        size: tok.baseSize * scale,
                        rotation: rotation
                    });
                }
            }

            // ── 4. CONDUITS PÉRIMÉTRIQUES & FLUX KAFKA (Cadrage épuré) ──
            for (let i = 0; i < PERIMETER_NODES.length; i++) {
                const n = PERIMETER_NODES[i];
                n.x = n.relX * w + Math.sin(tick * 0.0015 + i) * 3;
                n.y = n.relY * h + Math.cos(tick * 0.0018 + i) * 2.5;
            }

            for (let i = 0; i < HIGHWAYS.length; i++) {
                const hw = HIGHWAYS[i];
                const f = PERIMETER_NODES[hw.from];
                const t = PERIMETER_NODES[hw.to];

                ctx.beginPath();
                ctx.moveTo(f.x, f.y);
                ctx.lineTo(t.x, t.y);
                ctx.strokeStyle = 'rgba(0, 102, 204, 0.08)';
                ctx.lineWidth = 0.8;
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(f.x, f.y);
                ctx.lineTo(t.x, t.y);
                ctx.strokeStyle = 'rgba(2, 132, 199, 0.12)';
                ctx.lineWidth = 0.8;
                ctx.setLineDash([4, 14]);
                ctx.lineDashOffset = -tick * 0.45;
                ctx.stroke();
                ctx.setLineDash([]);
            }

            // Paquets de données en transit
            for (let i = 0; i < PACKETS.length; i++) {
                const p = PACKETS[i];
                const hw = HIGHWAYS[p.highwayIdx];
                const f = PERIMETER_NODES[hw.from];
                const t = PERIMETER_NODES[hw.to];

                p.progress += hw.speed;
                if (p.progress >= 1.0) p.progress = 0;

                const curX = f.x + (t.x - f.x) * p.progress;
                const curY = f.y + (t.y - f.y) * p.progress;

                ctx.beginPath();
                ctx.arc(curX, curY, 2.4, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(curX, curY, 5.0, 0, Math.PI * 2);
                ctx.strokeStyle = p.color;
                ctx.globalAlpha = 0.35;
                ctx.stroke();
                ctx.globalAlpha = 1.0;
            }

            // Nœuds du périmètre
            for (let i = 0; i < PERIMETER_NODES.length; i++) {
                const n = PERIMETER_NODES[i];
                ctx.beginPath();
                ctx.arc(n.x, n.y, 2.6, 0, Math.PI * 2);
                ctx.fillStyle = n.color;
                ctx.fill();
            }

            requestAnimationFrame(renderFrame);
        }

        requestAnimationFrame(renderFrame);
    };

    /* ── Utility: smoothly reveal an element with modern fintech curve ── */
    function reveal(el, delay, duration, easing) {
        if (!el) return;
        duration = duration || 650;
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
            'background:radial-gradient(750px circle at 50% 50%, rgba(0,119,204,0.065), rgba(16,185,129,0.035), transparent 70%);',
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
            curX += (mouseX - curX) * 0.08;
            curY += (mouseY - curY) * 0.08;
            spotlight.style.background = `radial-gradient(750px circle at ${curX.toFixed(1)}px ${curY.toFixed(1)}px, rgba(0,119,204,0.07), rgba(16,185,129,0.035), transparent 70%)`;
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
            targetX = (e.clientX / window.innerWidth  - 0.5) * 36;
            targetY = (e.clientY / window.innerHeight - 0.5) * 24;
        });

        function loop() {
            curX += (targetX - curX) * 0.05;
            curY += (targetY - curY) * 0.05;
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
        reveal(document.querySelector('.slide__eyebrow'),  60, 500);
        reveal(document.querySelector('.slide__header'),   100, 600);
        reveal(document.querySelector('.slide__title'),    150, 700);
        reveal(document.querySelector('.slide__subtitle'), 240, 600);

        /* 2. Cover-specific */
        reveal(document.querySelector('.cover__header'),   100, 600);
        reveal(document.querySelector('.cover__main'),     250, 800);
        reveal(document.querySelector('.cover__footer'),   500, 650);

        /* 3. Plan slide */
        reveal(document.querySelector('.plan__header'),    100, 600);
        reveal(document.querySelector('.plan__connector'), 300, 500);
        const planCards = document.querySelectorAll('.plan__card');
        planCards.forEach(function (el, i) { reveal(el, 320 + i * 50, 550); });

        /* 4. Section dividers */
        reveal(document.querySelector('.section__eyebrow'), 80, 500);
        reveal(document.querySelector('.section__number'),  120, 600);
        reveal(document.querySelector('.section__title'),   220, 750);
        reveal(document.querySelector('.section__line'),    320, 650);

        /* 5. Generic content areas & panels */
        ['content-wrapper','content-split','content-grid',
         'needs-table','scrum-visual','diagram-panel',
         'advantages-panel','uc-section','roadmap',
         'arch-panel','gallery__panel','interface-showcase',
         'cicd-panel','releases','concl-summary','persp-grid',
         'merci-content','demo-content'].forEach(function (cls) {
            reveal(document.querySelector('.' + cls), 280, 650);
        });

        /* 6. Staggered children marked with data-delay */
        document.querySelectorAll('[data-delay]').forEach(function (el) {
            const d = parseInt(el.getAttribute('data-delay'), 10) || 0;
            reveal(el, 260 + d * 70, 550);
        });

        /* 7. Devices & interface showcases */
        document.querySelectorAll('.device').forEach(function (el, i) {
            reveal(el, 300 + i * 120, 750);
        });

        /* 8. Navigation footer pill */
        reveal(document.querySelector('.navigation'), 600, 500);
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
