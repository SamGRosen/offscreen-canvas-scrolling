import Engine from "./engine";

class OffscreenEngine extends Engine {
  constructor() {
    super();

    // Create a div for reading mouse events
    this.mouseReader = document.createElement("div");

    this.canvas.style.position = "absolute";
    this.mouseReader.id = "mouse-reader";

    // Reinit controls with new mouse reader
    this.initControls();
  }

  addToDOM(worker) {
    super.addToDOM();
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

  initSettings() {
    super.initSettings();
    document
      .querySelector("#lock-x")
      .addEventListener("change", this.sendState.bind(this));

    document
      .querySelector("#lock-y")
      .addEventListener("change", this.sendState.bind(this));
  }

  initControls() {
    super.initControls();
    this.mouseReader.addEventListener("wheel", this.sendState.bind(this));

    this.mouseReader.addEventListener("mousemove", () => {
      if (this.isMoving) {
        this.sendState();
      }
    });
  }

  sendState() {
    this.worker.postMessage({ type: "state", ...this.getState() });
  }

  getState() {
    return {
      minX: this.minX,
      maxX: this.maxX,
      minY: this.minY,
      maxY: this.maxY,
      controls: this.controls,
      currentXRange: this.currentXRange,
      currentYRange: this.currentYRange,
      count: this.count,
    };
  }

  render() {
    this.worker.postMessage({ type: "render", ...this.getState() });
  }
}

export default OffscreenEngine;
