import OffscreenHandler from "./offscreen-handler";

document.addEventListener("DOMContentLoaded", () => {
  const handler = new OffscreenHandler();
  handler.addToDOM(new Worker("../scripts/offscreen-canvas-worker.js"));

  handler.forceDrawerRender();
});
