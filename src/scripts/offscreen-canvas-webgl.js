import OffscreenEngine from "./offscreen-engine";

document.addEventListener("DOMContentLoaded", () => {
  const engine = new OffscreenEngine();
  engine.addToDOM(new Worker("../scripts/offscreen-canvas-webgl-worker.js"));

  engine.render();
});
