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

    this.needsAnimation = true;
  }

  tick() {}

  animate() {}

  render() {}
}

export default Drawer;
