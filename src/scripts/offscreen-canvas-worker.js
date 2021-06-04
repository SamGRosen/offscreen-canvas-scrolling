import { scale } from "./utilities";
import OffscreenWorker from "./offscreen-worker";

console.log(10);
class OffscreenCanvasWorker extends OffscreenWorker {
  constructor(data) {
    super(data);
    this.ctx = this.canvas.getContext("2d");
  }

  animate() {
    if (!this.needsAnimation) {
      this.lastFrame = requestAnimationFrame(this.animate.bind(this));
      this.tick();
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);

    const scaleX = scale(this.currentXRange, [0, this.width]);
    const scaleY = scale(this.currentYRange, [0, this.height]);

    const currBoxWidth =
      ((this.maxX - this.minX) /
        (this.currentXRange[1] - this.currentXRange[0])) *
      this.trueBoxWidth;

    const currBoxHeight =
      ((this.maxY - this.minY) /
        (this.currentYRange[1] - this.currentYRange[0])) *
      this.trueBoxHeight;
    // Calculate where grid starts so we draw rectangles that are partially offscreen
    const gridStartX =
      this.currentXRange[0] -
      (this.currentXRange[0] % this.trueBoxWidth) -
      this.trueBoxWidth;
    const gridEndX =
      this.currentXRange[1] -
      (this.currentXRange[1] % this.trueBoxWidth) +
      this.trueBoxWidth;

    const gridStartY =
      this.currentYRange[0] -
      (this.currentYRange[0] % this.trueBoxHeight) -
      this.trueBoxWidth;
    const gridEndY =
      this.currentYRange[1] -
      (this.currentYRange[1] % this.trueBoxHeight) +
      this.trueBoxWidth;

    // Only draw rectangles inside viewing window
    for (let currX = gridStartX; currX < gridEndX; currX += this.trueBoxWidth) {
      for (
        let currY = gridStartY;
        currY < gridEndY;
        currY += this.trueBoxHeight
      ) {
        this.ctx.fillStyle = `rgb(
          ${this.scaleRed(currY)},
          0,
          ${this.scaleBlue(currX)})`;
        this.ctx.fillRect(
          scaleX(currX),
          scaleY(currY),
          currBoxWidth,
          currBoxHeight
        );
      }
    }

    this.needsAnimation = false;
    this.tick();
    this.lastFrame = requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    if (this.lastFrame) {
      // Avoid overlapping animation requests
      cancelAnimationFrame(this.lastFrame);
    }
    this.needsAnimation = true;
    this.animate();
  }
}

self.onmessage = OffscreenCanvasWorker.onmessager(self);
