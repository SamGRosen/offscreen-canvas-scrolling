import Handler from "./handler";
import PixiDrawer from "./pixi-drawer";

document.addEventListener("DOMContentLoaded", () => {
  const handler = new Handler();
  handler.addToDOM(PixiDrawer);

  handler.forceDrawerRender();
});
