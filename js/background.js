/* Interactive particle network */
(() => {
  const c = document.getElementById("bg"), x = c.getContext("2d");
  let w, h, dpr, P = [], m = { x: -999, y: -999 };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function init() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
    c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
    const n = Math.min(110, Math.floor(innerWidth * innerHeight / 14000));
    P = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35 * dpr, vy: (Math.random() - .5) * .35 * dpr, r: (Math.random() * 1.4 + .6) * dpr }));
  }
  function frame() {
    x.clearRect(0, 0, w, h);
    const D = 150 * dpr;
    for (const p of P) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = p.x - m.x * dpr, dy = p.y - m.y * dpr, d = Math.hypot(dx, dy);
      if (d < 140 * dpr && d > 0) { p.x += dx / d * 1.2; p.y += dy / d * 1.2; }
      x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fillStyle = "rgba(160,150,255,.8)"; x.fill();
    }
    for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
      const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
      if (d < D) { x.strokeStyle = `rgba(124,92,255,${(1 - d / D) * .35})`; x.lineWidth = dpr * .7; x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke(); }
    }
    if (!reduce) requestAnimationFrame(frame);
  }
  addEventListener("mousemove", e => { m.x = e.clientX; m.y = e.clientY; });
  addEventListener("resize", init); init(); frame();
})();
