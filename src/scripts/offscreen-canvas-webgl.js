import OffscreenHandler from "./offscreen-handler";

document.addEventListener("DOMContentLoaded", () => {
  const handler = new OffscreenHandler();
  handler.addToDOM(new Worker("../scripts/offscreen-canvas-webgl-worker.js"));

  handler.forceDrawerRender();
});
