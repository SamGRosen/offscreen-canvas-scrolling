import StubPixiDrawer from "./stub-pixi-drawer";

class OffscreenPixiDrawer extends StubPixiDrawer {
  tick() {
    postMessage({ type: "tick" });
  }
}

// Following https://github.com/jimbertools/pixiForWorker
console.debug("Installing PIXI.js worker polyfills");

self.document = {
  createElement(type) {
    if (type === "canvas") {
      return new OffscreenCanvas(0, 0);
    }

    return {
      style: {},
    };
  },

  addEventListener() {},
};

self.window = {
  console: self.console,
  addEventListener() {},
  removeEventListener() {},
  navigator: {},
  document: self.document,

  /*
   * This is necessary for PIXI.js to correctly detect that WebGL is present:
   * https://github.com/pixijs/pixi.js/blob/f6f00047d6c523df2aa366cf3745eb831cec6ec5/src/core/utils/index.js#L314
   */
  WebGLRenderingContext:
    self.WebGL2RenderingContext || self.WebGLRenderingContext,

  // Required by react-spring hooks
  requestAnimationFrame: self.requestAnimationFrame.bind(self),
};

let imported = require("../scripts/offscreen-pixi-polyfill.js");
let PIXI = imported.default;

self.HTMLVideoElement = function HTMLVideoElement() {};

// https://github.com/pixijs/pixi.js/pull/5756
self.HTMLCanvasElement = self.OffscreenCanvas;

self.onmessage = (e) => {
  switch (e.data.type) {
    case "init":
      self.drawer = new OffscreenPixiDrawer(e.data, PIXI);
      break;
    case "state":
      self.drawer.receiveState(e.data);
      break;
    case "render":
      self.drawer.receiveState(e.data);
      self.drawer.render();
      break;
    default:
      console.error(`Received unknown message type: ${e}`);
  }
};
