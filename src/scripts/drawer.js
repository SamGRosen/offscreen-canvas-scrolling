class Drawer {
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
    this.dataset = data.dataset;

    this.needsAnimation = true;
  }

  tick() {}

  animate() {}

  render() {
    if (this.lastFrame) {
      // Avoid overlapping animation requests
      cancelAnimationFrame(this.lastFrame);
    }

    switch (this.dataset) {
      case "squares":
        this.renderSquares();
        break;
      case "random":
        this.renderRandom();
        break;
      case "jittered":
        this.renderJittered();
        break;
      case "tsne":
        this.renderTSNE();
        break;
      default:
        console.error(
          `Did not receive valid dataset to render: ${this.dataset}`
        );
    }
  }
}

export default Drawer;
