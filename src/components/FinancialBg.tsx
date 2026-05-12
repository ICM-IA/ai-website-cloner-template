'use client';

import { useEffect, useRef } from 'react';

const TICKERS = [
  'BTC', 'ETH', 'S&P', 'DOW', 'NDX', 'DAX', 'IBEX', 'MXX',
  'MERV', 'USD', 'EUR', 'BRL', 'ARS', 'AED', 'GBP', 'JPY',
  'REI', 'FII', 'VGV', 'IPO', 'CRE', 'RE', 'INV', 'CAP',
];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Particle {
  x: number;
  y: number;
  speed: number;
  text: string;
  alpha: number;
  color: string;
  size: number;
}

function makeParticle(canvasWidth: number, canvasHeight: number): Particle {
  const isUp = Math.random() > 0.42;
  const pct = (Math.random() * 4.8 + 0.02).toFixed(2);
  const ticker = TICKERS[Math.floor(Math.random() * TICKERS.length)];
  const price = (Math.random() * 9000 + 100).toFixed(2);
  const type = Math.random();

  let text: string;
  if (type < 0.35) {
    text = `${isUp ? '▲' : '▼'} ${pct}%`;
  } else if (type < 0.65) {
    text = `${ticker}  ${isUp ? '+' : '-'}${pct}%`;
  } else {
    text = `${price}`;
  }

  return {
    x: rand(0, canvasWidth),
    y: rand(-canvasHeight, 0),
    speed: rand(0.4, 1.4),
    text,
    alpha: rand(0.12, 0.55),
    color: isUp ? '#22c55e' : '#ef4444',
    size: rand(10, 16),
  };
}

export default function FinancialBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles
    const COUNT = 120;
    for (let i = 0; i < COUNT; i++) {
      const p = makeParticle(canvas.width, canvas.height);
      p.y = rand(0, canvas.height); // start scattered
      particles.push(p);
    }

    // Draw grid lines
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(30,180,120,0.07)';
      ctx.lineWidth = 1;
      const cols = 12;
      const rows = 8;
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo((canvas.width / cols) * i, 0);
        ctx.lineTo((canvas.width / cols) * i, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, (canvas.height / rows) * j);
        ctx.lineTo(canvas.width, (canvas.height / rows) * j);
        ctx.stroke();
      }
    };

    // Draw city silhouette at bottom
    const drawCity = () => {
      ctx.fillStyle = 'rgba(5,10,25,0.55)';
      const buildings = [
        { x: 0,   w: 60,  h: 90  },
        { x: 55,  w: 80,  h: 130 },
        { x: 130, w: 50,  h: 100 },
        { x: 175, w: 90,  h: 160 },
        { x: 260, w: 60,  h: 120 },
        { x: 315, w: 100, h: 180 },
        { x: 410, w: 70,  h: 140 },
        { x: 475, w: 85,  h: 200 },
        { x: 555, w: 55,  h: 110 },
        { x: 605, w: 95,  h: 165 },
        { x: 695, w: 70,  h: 130 },
        { x: 760, w: 60,  h: 90  },
        { x: 815, w: 85,  h: 150 },
        { x: 895, w: 65,  h: 120 },
        { x: 955, w: 100, h: 170 },
        { x: 1050,w: 55,  h: 100 },
        { x: 1100,w: 90,  h: 145 },
        { x: 1185,w: 70,  h: 190 },
        { x: 1250,w: 60,  h: 110 },
        { x: 1305,w: 80,  h: 155 },
        { x: 1380,w: 65,  h: 130 },
        { x: 1440,w: 80,  h: 100 },
      ];
      const base = canvas.height;
      buildings.forEach(b => {
        const scale = canvas.width / 1440;
        ctx.fillRect(b.x * scale, base - b.h * 0.6, b.w * scale, b.h * 0.6);
        // Window lights
        ctx.fillStyle = 'rgba(100,180,255,0.08)';
        for (let wy = base - b.h * 0.6 + 8; wy < base - 6; wy += 14) {
          for (let wx = b.x * scale + 4; wx < (b.x + b.w) * scale - 4; wx += 10) {
            if (Math.random() > 0.5) ctx.fillRect(wx, wy, 5, 7);
          }
        }
        ctx.fillStyle = 'rgba(5,10,25,0.55)';
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#060e1e');
      grad.addColorStop(0.5, '#080d1a');
      grad.addColorStop(1, '#050c18');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      // Particles
      particles.forEach((p, i) => {
        ctx.font = `${p.size}px 'Courier New', monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fillText(p.text, p.x, p.y);
        ctx.globalAlpha = 1;
        p.y += p.speed;
        if (p.y > canvas.height + 30) {
          particles[i] = makeParticle(canvas.width, canvas.height);
        }
      });

      drawCity();

      // Subtle blue glow overlay at bottom
      const glow = ctx.createLinearGradient(0, canvas.height * 0.6, 0, canvas.height);
      glow.addColorStop(0, 'rgba(10,30,80,0)');
      glow.addColorStop(1, 'rgba(10,30,80,0.45)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  );
}
