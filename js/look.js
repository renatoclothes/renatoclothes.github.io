// Shared "look" vector (-1..1): mouse position on desktop, device tilt on phones.
// Drives the 3D medallion tilt and the CSS light/parallax variables --lx / --ly.
export const look = { x: 0, y: 0 };

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
let tx = 0, ty = 0, raf = 0;

const clamp = (v) => Math.max(-1, Math.min(1, v));

function tick() {
  look.x += (tx - look.x) * 0.08;
  look.y += (ty - look.y) * 0.08;
  root.style.setProperty("--lx", look.x.toFixed(3));
  root.style.setProperty("--ly", look.y.toFixed(3));
  raf = Math.abs(tx - look.x) > 0.002 || Math.abs(ty - look.y) > 0.002 ? requestAnimationFrame(tick) : 0;
}

function aim(x, y) {
  tx = clamp(x); ty = clamp(y);
  if (!raf) raf = requestAnimationFrame(tick);
}

if (!reduce) {
  addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    aim((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1);
  }, { passive: true });
  document.addEventListener("pointerleave", () => aim(0, 0));
  // phones: tilt the device (Android; iOS needs a permission prompt, so it is not requested)
  addEventListener("deviceorientation", (e) => {
    if (e.gamma == null || e.beta == null) return;
    aim(e.gamma / 30, (e.beta - 55) / 30);
  }, { passive: true });
}
