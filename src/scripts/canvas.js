import Engine from "./engine";
import { scale } from "./utilities";

class BaseCanvasEngine extends Engine {
  constructor() {
    super();
    this.ctx = this.canvas.getContext("2d");
    this.content.appendChild(this.canvas);
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const scaleX = scale(this.currentXRange, [0, this.canvas.width]);
    const scaleY = scale(this.currentYRange, [0, this.canvas.height]);

    const currBoxWidth =
      ((this.maxX - this.minX) /
        (this.currentXRange[1] - this.currentXRange[0])) *
      this.trueBoxWidth;

    const currBoxHeight =
      ((this.maxY - this.minY) /
        (this.currentYRange[1] - this.currentYRange[0])) *
      this.trueBoxHeight;

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

    this.lastFrame = requestAnimationFrame(this.animate.bind(this));
    this.meter.tick();
  }

  render() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    if (this.lastFrame) {
      // Avoid overlapping animation requests
      cancelAnimationFrame(this.lastFrame);
    }
    this.animate();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const engine = new BaseCanvasEngine();
  engine.render();
});
