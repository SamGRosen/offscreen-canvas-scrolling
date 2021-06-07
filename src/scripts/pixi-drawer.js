import StubPixiDrawer from "./stub-pixi-drawer";
import * as PIXI from "pixi.js";

class PixiDrawer extends StubPixiDrawer {
  constructor(data) {
    super(data, PIXI);
  }
}

export default PixiDrawer;
