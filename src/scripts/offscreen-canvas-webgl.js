import OffscreenHandler from "./offscreen-handler";

document.addEventListener("DOMContentLoaded", () => {
  const engine = new OffscreenHandler();
  engine.addToDOM(new Worker("../scripts/offscreen-canvas-webgl-worker.js"));

  engine.forceDrawerRender();
});
