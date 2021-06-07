import WebGLCanvasDrawer from "./canvas-webgl-drawer";
import { createMessanger } from "./utilities";

class OffscreenWebGLCanvasDrawer extends WebGLCanvasDrawer {
  tick() {
    postMessage({ type: "tick" });
  }
}

self.onmessage = createMessanger(OffscreenWebGLCanvasDrawer, self);
