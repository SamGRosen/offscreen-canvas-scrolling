import Handler from "./handler";
import PixiDrawer from "./pixi-drawer";

document.addEventListener("DOMContentLoaded", () => {
  const engine = new Handler();
  engine.addToDOM(PixiDrawer);

  engine.forceDrawerRender();
});
