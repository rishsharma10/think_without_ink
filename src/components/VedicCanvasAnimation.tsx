"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  char: string;
  opacity: number;
  color: string;
  spin: number;
  spinSpeed: number;
}

const VEDIC_SYMBOLS = [
  "१", "२", "३", "४", "५", "६", "७", "८", "९", "०",
  "√x", "π", "∞", "∑", "∫", "θ", "∆", "×", "÷",
  "एकाधिकेन", "निखिलं", "ऊर्ध्व", "परावर्त्य", "शून्यं"
];

const COLORS = [
  "rgba(245, 158, 11, ", // Gold
  "rgba(251, 191, 36, ", // Yellow amber
  "rgba(6, 182, 212, ",  // Cyan
  "rgba(139, 92, 246, ", // Purple
  "rgba(52, 211, 153, ", // Emerald
];

export default function VedicCanvasAnimation({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(36, Math.floor((width * height) / 28000));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const colorBase = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 12 + 11,
        char: VEDIC_SYMBOLS[Math.floor(Math.random() * VEDIC_SYMBOLS.length)],
        opacity: Math.random() * 0.4 + 0.15,
        color: colorBase,
        spin: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.008,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw and update each floating symbol
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.spin += p.spinSpeed;

        // Wrap around borders
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        // Mouse proximity reaction
        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        let extraScale = 1;
        let activeOpacity = p.opacity;

        if (mdist < 140) {
          const force = (1 - mdist / 140) * 0.4;
          p.x -= mdx * force * 0.05;
          p.y -= mdy * force * 0.05;
          extraScale = 1 + force * 0.4;
          activeOpacity = Math.min(0.85, p.opacity + force * 0.5);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.spin);
        ctx.scale(extraScale, extraScale);
        ctx.font = `${p.size}px "Space Grotesk", "Plus Jakarta Sans", sans-serif`;
        ctx.fillStyle = `${p.color}${activeOpacity})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.char, 0, 0);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
