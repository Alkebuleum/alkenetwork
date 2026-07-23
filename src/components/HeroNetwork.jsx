import { useEffect, useRef } from "react";

const LINK_DISTANCE = 150;
const SPEED = 0.12;

export default function HeroNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let nodes = [];
    let raf = null;
    let pulseTimer = null;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      const count = width < 720 ? 45 : 90;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        pulse: 0,
      }));
    }

    function update() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        if (n.pulse > 0) n.pulse -= 0.012;
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(126,135,145,${(1 - dist / LINK_DISTANCE) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        if (n.pulse > 0) {
          ctx.fillStyle = `rgba(196,106,59,${Math.min(0.35 + n.pulse * 0.65, 1)})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2.4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = "rgba(244,240,232,0.32)";
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function tick() {
      update();
      render();
      raf = requestAnimationFrame(tick);
    }

    function schedulePulse() {
      pulseTimer = setTimeout(() => {
        if (nodes.length) nodes[Math.floor(Math.random() * nodes.length)].pulse = 1;
        schedulePulse();
      }, 900 + Math.random() * 1400);
    }

    resize();
    seed();
    render();

    if (!reduceMotion) {
      raf = requestAnimationFrame(tick);
      schedulePulse();
    }

    function onResize() {
      resize();
      seed();
      render();
    }
    window.addEventListener("resize", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (pulseTimer) clearTimeout(pulseTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-network" aria-hidden="true" />;
}
