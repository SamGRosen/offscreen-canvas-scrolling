import Handler from "./handler";
import WebGLCanvasDrawer from "./canvas-webgl-drawer";

document.addEventListener("DOMContentLoaded", () => {
  const handler = new Handler();
  handler.addToDOM(WebGLCanvasDrawer);

  handler.forceDrawerRender();
});
