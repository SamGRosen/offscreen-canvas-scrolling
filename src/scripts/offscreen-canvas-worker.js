import BaseCanvasDrawer from "./base-canvas-drawer";
import { createMessanger } from "./utilities";

class OffscreenBaseCanvasDrawer extends BaseCanvasDrawer {
  tick() {
    postMessage({ type: "tick" });
  }
}

self.onmessage = createMessanger(OffscreenBaseCanvasDrawer, self);
