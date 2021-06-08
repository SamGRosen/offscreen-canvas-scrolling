import { getRandomColor, scale, SuperclusterMapper } from "./utilities";
import Drawer from "./drawer";

class BaseCanvasDrawer extends Drawer {
  constructor(data) {
    super(data);
    this.ctx = this.canvas.getContext("2d");
  }

  animateSquares() {
    if (!this.needsAnimation) {
      this.lastFrame = requestAnimationFrame(this.animateSquares.bind(this));
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
    this.lastFrame = requestAnimationFrame(this.animateSquares.bind(this));
    this.tick();
  }

  renderSquares() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    this.needsAnimation = true;
    this.animateSquares();
  }

  animateJittered() {}

  renderJittered() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    this.boxes = {};
  }

  animateRandom() {
    if (!this.needsAnimation) {
      this.tick();
      this.lastFrame = requestAnimationFrame(this.animateRandom.bind(this));
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);
    const pointsToDraw = this.clusterMap.getClusters(
      [
        this.currentXRange[0],
        this.currentYRange[0],
        this.currentXRange[1],
        this.currentYRange[1],
      ],
      10
    );
    const scaleX = scale(this.currentXRange, [0, this.width]);
    const scaleY = scale(this.currentYRange, [0, this.height]);

    for (let point of pointsToDraw) {
      this.ctx.fillStyle = point.color;
      this.ctx.fillRect(
        scaleX(point.geometry.coordinates[0]),
        scaleY(point.geometry.coordinates[1]),
        2,
        2
      );
    }

    this.tick();
    this.lastFrame = requestAnimationFrame(this.animateRandom.bind(this));
    this.needsAnimation = false;
  }

  renderRandom() {
    const points = [];
    for (let i = 0; i < this.count.value; i++) {
      points.push({
        geometry: {
          coordinates: [
            this.minX + Math.random() * (this.maxX - this.minX),
            this.minY + Math.random() * (this.maxY - this.minY),
          ],
        },
        color: getRandomColor(),
      });
    }

    this.clusterMap = new SuperclusterMapper(
      points,
      [this.minX, this.maxX],
      [this.minY, this.maxY]
    );

    this.needsAnimation = true;
    this.animateRandom();
  }
}

export default BaseCanvasDrawer;
