// Loads the parallax helper right away and the 3D medallion after the page has finished loading,
// so the card is usable instantly. If 3D can't start (old phone, no WebGL, data saver), the flat logo stays
// and the 3D bundle is never downloaded.
import "./look.js";

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    if (!gl) return false;
    const lose = gl.getExtension("WEBGL_lose_context");
    if (lose) lose.loseContext();
    return true;
  } catch (e) {
    return false;
  }
}

const wrap = document.querySelector(".hero-logo");
const saveData = navigator.connection && navigator.connection.saveData;

if (wrap && !saveData && hasWebGL()) {
  const go = () => import("./medallion.js").then((m) => m.start(wrap)).catch(() => {});
  if (document.readyState === "complete") go();
  else addEventListener("load", go, { once: true });
}
