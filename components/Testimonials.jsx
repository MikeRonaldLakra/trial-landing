"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  mass: number;
  baseRadius: number;
}

export default function PhysicsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const frameRef = useRef(0);

  // Physics constants
  const SPRING_K = 0.0008;
  const DAMPING = 0.98;
  const REPULSION = 8000;
  const MAX_REPULSION_DIST = 150;
  const CONNECTION_DIST = 120;

  const colors = [
    "rgba(90, 125, 255, 0.6)",
    "rgba(214, 69, 204, 0.6)",
    "rgba(100, 200, 255, 0.5)",
    "rgba(180, 100, 255, 0.5)",
  ];

  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor((w * h) / 18000));

    for (let i = 0; i < particleCount; i++) {
      const baseRadius = Math.random() * 2.5 + 1;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: baseRadius,
        color: colors[Math.floor(Math.random() * colors.length)],
        mass: Math.random() * 2 + 1,
        baseRadius,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const animate = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const { x: mx, y: my, active: mouseActive } = mouseRef.current;

      // Update physics
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion (inverse square force)
               if (mouseActive) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_REPULSION_DIST * MAX_REPULSION_DIST && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = REPULSION / (distSq + 100);
            p.vx += (dx / dist) * force / p.mass;
            p.vy += (dy / dist) * force / p.mass;
            p.radius = p.baseRadius + (1 - dist / MAX_REPULSION_DIST) * 3;
          } else {
            p.radius = p.baseRadius;
          }
        }

        // Spring toward center
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        p.vx += (cx - p.x) * SPRING_K;
        p.vy += (cy - p.y) * SPRING_K;

        // Damping
        p.vx *= DAMPING;
        p.vy *= DAMPING;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      // Draw connections (every other frame for performance)
      frameRef.current++;
      const drawConnections = frameRef.current % 2 === 0;

      if (drawConnections) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < CONNECTION_DIST) {
              const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
              ctx.strokeStyle = `rgba(90, 125, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [initParticles]);

  return <canvas ref={canvasRef} id="physics-canvas" className="absolute inset-0" />;
}
