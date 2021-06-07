import OffscreenHandler from "./offscreen-handler";

document.addEventListener("DOMContentLoaded", () => {
  const handler = new OffscreenHandler();
  handler.addToDOM(new Worker("../scripts/offscreen-pixi-worker.js"));

  handler.forceDrawerRender();
});
