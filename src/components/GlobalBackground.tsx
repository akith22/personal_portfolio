import { useEffect, useRef, useState } from 'react';

// Particle type for the canvas network
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PRIMARY_RGB = '56, 189, 248';       // matches --color-primary #38BDF8
const SECONDARY_RGB = '129, 140, 248';    // matches --color-secondary #818CF8

export default function GlobalBackground() {
  // ── Mouse position for spotlight (updates every mousemove) ──
  const [spotlight, setSpotlight] = useState({ x: -999, y: -999 });

  // ── Cursor dot (follows instantly via CSS transition) ──
  const [dot, setDot] = useState({ x: -999, y: -999 });

  // ── Cursor ring (follows with JS lerp for lag effect) ──
  const ringPos = useRef({ x: -999, y: -999 });
  const ringEl = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -999, y: -999 });
  const isTouchDevice = useRef(false);

  // Canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const canvasAnimId = useRef<number>(0);

  // ── Mouse tracking ──
  useEffect(() => {
    // Detect touch device — hide custom cursor on mobile
    isTouchDevice.current =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice.current) return;

    // Hide default system cursor
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mousePos.current = { x, y };
      // Spotlight and dot update immediately via state
      setSpotlight({ x, y });
      setDot({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.style.cursor = '';
    };
  }, []);

  // ── Ring lerp animation loop ──
  useEffect(() => {
    if (isTouchDevice.current) return;

    let rafId: number;

    const animate = () => {
      // Lerp ring toward mouse with 0.10 factor = nice lag
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.10;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.10;

      if (ringEl.current) {
        ringEl.current.style.transform =
          `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%))`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // ── Canvas particle network ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize particles on resize
      particlesRef.current = Array.from({ length: 55 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.2 + 0.4,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const LINK_DISTANCE = 130;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update & draw dots
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PRIMARY_RGB}, 0.20)`;
        ctx.fill();
      });

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.07;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${PRIMARY_RGB}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      canvasAnimId.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(canvasAnimId.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // ── Cursor ring hover effect — grows when hovering links/buttons ──
  useEffect(() => {
    if (isTouchDevice.current) return;

    const onEnter = () => {
      if (ringEl.current) {
        ringEl.current.style.width = '48px';
        ringEl.current.style.height = '48px';
        ringEl.current.style.borderColor = `rgba(${PRIMARY_RGB}, 0.80)`;
      }
    };
    const onLeave = () => {
      if (ringEl.current) {
        ringEl.current.style.width = '32px';
        ringEl.current.style.height = '32px';
        ringEl.current.style.borderColor = `rgba(${PRIMARY_RGB}, 0.50)`;
      }
    };

    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* ── Layer 1: Mouse spotlight radial gradient ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          transition: 'background 0.1s',
          background: spotlight.x < 0
            ? 'none'
            : `radial-gradient(700px at ${spotlight.x}px ${spotlight.y}px,
                rgba(${PRIMARY_RGB}, 0.07) 0%,
                rgba(${PRIMARY_RGB}, 0.03) 30%,
                rgba(${SECONDARY_RGB}, 0.015) 60%,
                transparent 70%)`,
        }}
      />

      {/* ── Layer 2: Canvas particle network ── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* ── Layer 3: Custom cursor ring (lagged) ── */}
      <div
        ref={ringEl}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: 'none',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: `0.5px solid rgba(${PRIMARY_RGB}, 0.50)`,
          backgroundColor: 'transparent',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s',
          transform: 'translate(-999px, -999px)', // start off-screen
        }}
      />

      {/* ── Layer 4: Custom cursor dot (instant) ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: `rgb(${PRIMARY_RGB})`,
          transition: 'transform 0.08s linear',
          transform: dot.x < 0
            ? 'translate(-999px, -999px)'
            : `translate(calc(${dot.x}px - 50%), calc(${dot.y}px - 50%))`,
        }}
      />
    </>
  );
}
