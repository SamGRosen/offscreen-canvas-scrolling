import Handler from "./handler";

class OffscreenHandler extends Handler {
  constructor() {
    super();

    // Create a div for reading mouse events
    this.mouseReader = document.createElement("div");

    // Ensure div is directly on top of canvas
    this.canvas.style.position = "absolute";
    this.mouseReader.id = "mouse-reader";

    // Reinit controls with new mouse reader
    this.initControls();
  }

  addToDOM(worker) {
    this.content.appendChild(this.canvas);
    this.content.appendChild(this.mouseReader);

    this.offscreenCanvas = this.canvas.transferControlToOffscreen();

    this.worker = worker;
    this.worker.postMessage(
      { type: "init", canvas: this.offscreenCanvas, ...this.getState() },
      [this.offscreenCanvas]
    );

    this.worker.onmessage = (e) => {
      if (e.data.type === "tick") {
        this.meter.tick();
      }
    };
  }

  sendDrawerState() {
    this.worker.postMessage({ type: "state", ...this.getState() });
  }

  forceDrawerRender() {
    this.worker.postMessage({ type: "render", ...this.getState() });
  }
}

export default OffscreenHandler;
