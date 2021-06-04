class OffscreenWorker {
  constructor(data) {
    this.canvas = data.canvas;
    this.width = data.canvas.width;
    this.height = data.canvas.height;
    this.receiveState(data);
  }

  receiveState(data) {
    this.minX = data.minX;
    this.maxX = data.maxX;
    this.minY = data.minY;
    this.maxY = data.maxY;
    this.currentXRange = [...data.currentXRange];
    this.currentYRange = [...data.currentYRange];
    this.count = data.count;
    this.controls = data.controls;

    this.needsAnimation = true;
  }

  tick() {
    postMessage({ type: "tick" });
  }

  animate() {}

  render() {}

  static onmessager(self) {
    return (e) => {
      console.log(e);
      switch (e.data.type) {
        case "init":
          self.engine = new this(e.data);
          break;
        case "state":
          self.engine.receiveState(e.data);
          break;
        case "render":
          self.engine.receiveState(e.data);
          self.engine.render();
          break;
        default:
          console.error(`Received unknown message type: ${e}`);
      }
    };
  }
}

export default OffscreenWorker;
