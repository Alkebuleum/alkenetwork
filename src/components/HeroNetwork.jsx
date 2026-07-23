import { useEffect, useRef } from "react";

const NODE_COUNT = 70;
const LINK_DISTANCE = 0.42;
const ROTATION_SPEED = 0.0016;

export default function HeroNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let nodes = [];
    let pulses = [];
    let rotation = 0;
    let raf = null;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Fibonacci sphere: evenly distributed points on a unit sphere.
    function buildSphere() {
      nodes = [];
      const radius = Math.min(width, height) * 0.42;
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < NODE_COUNT; i++) {
        const y = 1 - (i / (NODE_COUNT - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = golden * i;
        nodes.push({
          x0: Math.cos(theta) * radiusAtY,
          y0: y,
          z0: Math.sin(theta) * radiusAtY,
          radius,
          hub: i % 11 === 0,
        });
      }
    }

    function project(n, rotY) {
      const cosT = Math.cos(rotY);
      const sinT = Math.sin(rotY);
      const x = n.x0 * cosT - n.z0 * sinT;
      const z = n.x0 * sinT + n.z0 * cosT;
      const persp = 1 / (2 - z);
      return {
        sx: width / 2 + x * n.radius * persp,
        sy: height / 2 + n.y0 * n.radius * persp,
        z,
      };
    }

    function maybeSpawnPulse(points) {
      if (Math.random() > 0.985) {
        const hubs = points.map((p, i) => i).filter((i) => nodes[i].hub);
        if (hubs.length < 2) return;
        const from = hubs[Math.floor(Math.random() * hubs.length)];
        const to = hubs[Math.floor(Math.random() * hubs.length)];
        if (from === to) return;
        pulses.push({ from, to, t: 0 });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const points = nodes.map((n) => project(n, rotation));

      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x0 - nodes[j].x0;
          const dy = nodes[i].y0 - nodes[j].y0;
          const dz = nodes[i].z0 - nodes[j].z0;
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < LINK_DISTANCE) {
            const avgZ = (points[i].z + points[j].z) / 2;
            const alpha = Math.max(0, (avgZ + 1) / 2) * 0.22;
            ctx.strokeStyle = `rgba(214,129,47,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(points[i].sx, points[i].sy);
            ctx.lineTo(points[j].sx, points[j].sy);
            ctx.stroke();
          }
        }
      }

      pulses.forEach((p) => {
        p.t += 0.012;
      });
      pulses = pulses.filter((p) => p.t <= 1);
      pulses.forEach((p) => {
        const a = points[p.from];
        const b = points[p.to];
        const x = a.sx + (b.sx - a.sx) * p.t;
        const y = a.sy + (b.sy - a.sy) * p.t;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232,151,63,0.9)";
        ctx.fill();
      });
      if (!reduceMotion) maybeSpawnPulse(points);

      points.forEach((p, i) => {
        const depth = (p.z + 1) / 2;
        const r = nodes[i].hub ? 2.6 : 1.5;
        const alpha = 0.25 + depth * 0.65;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * (0.7 + depth * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214,129,47,${alpha})`;
        ctx.fill();
      });
    }

    function loop() {
      if (!reduceMotion) rotation += ROTATION_SPEED;
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onResize() {
      resize();
      buildSphere();
      draw();
    }

    resize();
    buildSphere();
    draw();
    if (!reduceMotion) raf = requestAnimationFrame(loop);
    window.addEventListener("resize", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="hero-visual">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
