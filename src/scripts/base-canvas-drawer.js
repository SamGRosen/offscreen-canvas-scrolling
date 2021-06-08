import {
  getRandomColor,
  getRandomColorAlpha,
  scale,
  SuperclusterMapper,
  JITTER_FACTOR,
} from "./utilities";
import Drawer from "./drawer";

class BaseCanvasDrawer extends Drawer {
  constructor(data) {
    super(data);
    this.ctx = this.canvas.getContext("2d");
  }

  render() {
    super.render();
    this.ctx.globalAlpha = 1.0; // avoid switching datasets ruining opacity
    this.ctx.globalCompositeOperation = "source-over";
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

  animateJittered() {
    if (!this.needsAnimation) {
      this.tick();
      this.lastFrame = requestAnimationFrame(this.animateJittered.bind(this));
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

    const pointsToDraw = this.clusterMap.getClusters(
      [
        this.currentXRange[0] - JITTER_FACTOR - currBoxWidth,
        this.currentYRange[0] - JITTER_FACTOR - currBoxHeight,
        this.currentXRange[1] + JITTER_FACTOR + currBoxWidth,
        this.currentYRange[1] + JITTER_FACTOR + currBoxHeight,
      ],
      10
    );

    for (const point of pointsToDraw) {
      this.ctx.fillStyle = point.color;
      this.ctx.fillRect(
        scaleX(point.geometry.coordinates[0]),
        scaleY(point.geometry.coordinates[1]),
        currBoxWidth,
        currBoxHeight
      );
    }

    this.tick();
    this.lastFrame = requestAnimationFrame(this.animateJittered.bind(this));
    this.needsAnimation = false;
  }

  renderJittered() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    const corners = [];
    for (let currX = this.minX; currX < this.maxX; currX += this.trueBoxWidth) {
      for (
        let currY = this.minY;
        currY < this.maxY;
        currY += this.trueBoxHeight
      ) {
        corners.push({
          geometry: {
            coordinates: [
              currX - JITTER_FACTOR / 2 + Math.random() * JITTER_FACTOR,
              currY - JITTER_FACTOR / 2 + Math.random() * JITTER_FACTOR,
            ],
          },
          color: `rgb(
            ${this.scaleRed(currY)},
            0,
            ${this.scaleBlue(currX)})`,
        });
      }
    }

    this.clusterMap = new SuperclusterMapper(
      corners,
      [
        this.minX - JITTER_FACTOR - this.trueBoxWidth,
        this.maxX + JITTER_FACTOR + this.trueBoxWidth,
      ],
      [
        this.minY - JITTER_FACTOR - this.trueBoxHeight,
        this.maxY + JITTER_FACTOR + this.trueBoxHeight,
      ]
    );

    this.needsAnimation = true;
    this.animateJittered();
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

    for (const point of pointsToDraw) {
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

  animateTSNE() {
    if (!this.needsAnimation) {
      this.tick();
      this.lastFrame = requestAnimationFrame(this.animateTSNE.bind(this));
      return;
    }

    this.ctx.globalCompositeOperation = "overlay";

    this.ctx.clearRect(0, 0, this.width, this.height);

    const bboxTSNES = [
      this.xTSNEScale(this.currentXRange[0]),
      this.yTSNEScale(this.currentYRange[0]),
      this.xTSNEScale(this.currentXRange[1]),
      this.yTSNEScale(this.currentYRange[1]),
    ];

    const pointsToDraw = this.clusterMap.getClusters(bboxTSNES, 10);
    const scaleX = scale([bboxTSNES[0], bboxTSNES[2]], [0, this.width]);
    const scaleY = scale([bboxTSNES[1], bboxTSNES[3]], [0, this.height]);

    for (const point of pointsToDraw) {
      this.ctx.fillStyle = this.sampleColors.get(point.sample);
      this.ctx.fillRect(
        scaleX(point.geometry.coordinates[0]),
        scaleY(point.geometry.coordinates[1]),
        2,
        2
      );
    }

    this.tick();
    this.lastFrame = requestAnimationFrame(this.animateTSNE.bind(this));
    this.needsAnimation = false;
  }

  renderTSNE() {
    this.xTSNEScale = scale([this.minX, this.maxX], [-10, 10]);
    this.yTSNEScale = scale([this.minY, this.maxY], [-10, 10]);

    this.sampleColors = new Map( // Create colors for sample type
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
        .split("")
        .map((letter) => [letter, getRandomColorAlpha(0.3)])
    );

    this.clusterMap = new SuperclusterMapper(
      this.csv,
      [-10, 10], // domain of csv data
      [-10, 10] // range of csv data
    );

    this.needsAnimation = true;
    this.animateTSNE();
  }
}

export default BaseCanvasDrawer;
