import Handler from "./handler";
import BaseCanvasDrawer from "./base-canvas-drawer";

document.addEventListener("DOMContentLoaded", () => {
  const handler = new Handler();
  handler.addToDOM(BaseCanvasDrawer);

  handler.forceDrawerRender();
});
