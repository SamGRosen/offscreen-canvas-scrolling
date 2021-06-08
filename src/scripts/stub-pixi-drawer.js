import Drawer from "./Drawer";
import {
  JITTER_FACTOR,
  rgbToHex,
  scale,
  SuperclusterMapper,
} from "./utilities";

class StubPixiDrawer extends Drawer {
  /*
    Because we need to polyfill PIXI for the worker, we give an ability for the drawer to choose which PIXI to use
  */
  constructor(data, PIXI) {
    super(data);

    this.PIXI = PIXI;
    this.app = new this.PIXI.Application({
      width: this.width,
      height: this.height,
      backgroundColor: 0xffffff,
      antialias: true,
      view: this.canvas,
    });
  }

  removeTicker() {
    this.app.ticker.remove(this.animateSquares, this);
    this.app.ticker.remove(this.animateRandom, this);
    this.app.ticker.remove(this.animateJittered, this);
    this.app.ticker.remove(this.animateTSNE, this);
  }

  animateSquares() {
    if (!this.needsAnimation) {
      this.tick();
      return;
    }

    const scaleX = scale(this.currentXRange, [0, this.width]);
    const scaleYWindowSpace = scale([this.minY, this.maxY], [0, this.height]);

    const toReturnY = scaleYWindowSpace(this.currentYRange[1]);

    const windowWidth = this.currentXRange[1] - this.currentXRange[0];
    const windowHeight = this.currentYRange[1] - this.currentYRange[0];

    const currBoxWidth =
      ((this.maxX - this.minX) /
        (this.currentXRange[1] - this.currentXRange[0])) *
      this.trueBoxWidth;

    for (let column of this.columns) {
      let columnX = scaleX(column.x);
      column.element.visible = columnX + currBoxWidth > 0;

      if (column.element.visible) {
        // Shift entire column as rectangles are shifted appropriate amount with in column
        column.element.position.set(columnX, toReturnY / 2);

        // Rescale shapes on screen
        column.element.transform.scale.set(
          this.canvas.width / windowWidth,
          this.canvas.height / windowHeight
        );
        column.element.updateTransform();
      }
    }
    this.needsAnimation = false;
    this.tick();
  }

  renderSquares() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    this.removeTicker();
    this.app.stage.removeChildren();

    this.columns = [];
    for (let x = this.minX; x < this.maxX; x += this.trueBoxWidth) {
      let currentColumn = new this.PIXI.Container();
      this.columns.push({ x, element: currentColumn });
      this.app.stage.addChild(currentColumn);

      for (let y = this.minY; y < this.maxY; y += this.trueBoxHeight) {
        const rect = new this.PIXI.Graphics();
        rect.beginFill(
          rgbToHex(
            Math.floor(this.scaleRed(x)),
            0,
            Math.floor(this.scaleBlue(y))
          )
        );

        // Draw rects at true world size, scale to window in animate function
        rect.drawRect(0, 0, this.trueBoxWidth, this.trueBoxHeight);
        rect.endFill();

        // Set x position to 0 as columns will be assigned an x position
        rect.position.set(0, y);
        currentColumn.addChild(rect);
      }
    }
    this.needsAnimation = true;
    this.app.ticker.add(this.animateSquares, this);
  }

  animateJittered() {
    this.animateSquares();
  }

  renderJittered() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    this.removeTicker();
    this.app.stage.removeChildren();

    this.columns = [];
    for (let x = this.minX; x < this.maxX; x += this.trueBoxWidth) {
      let currentColumn = new this.PIXI.Container();
      this.columns.push({ x, element: currentColumn });
      this.app.stage.addChild(currentColumn);

      for (let y = this.minY; y < this.maxY; y += this.trueBoxHeight) {
        const rect = new this.PIXI.Graphics();
        rect.beginFill(
          rgbToHex(
            Math.floor(this.scaleRed(x)),
            0,
            Math.floor(this.scaleBlue(y))
          )
        );

        // Draw rects at true world size, scale to window in animate function
        rect.drawRect(0, 0, this.trueBoxWidth, this.trueBoxHeight);
        rect.endFill();

        // Set x position to 0 as columns will be assigned an x position
        rect.position.set(
          -JITTER_FACTOR / 2 + Math.random() * JITTER_FACTOR,
          y - JITTER_FACTOR / 2 + Math.random() * JITTER_FACTOR
        );
        currentColumn.addChild(rect);
      }
    }
    this.needsAnimation = true;
    this.app.ticker.add(this.animateJittered, this);
  }

  animateRandom() {
    if (!this.needsAnimation) {
      this.tick();
      return;
    }

    const scaleX = scale(this.currentXRange, [0, this.width]);
    const scaleY = scale(this.currentYRange, [0, this.height]);

    const pointsToDraw = this.clusterMap.getClusters(
      [
        this.currentXRange[0],
        this.currentYRange[0],
        this.currentXRange[1],
        this.currentYRange[1],
      ],
      10
    );

    for (const point of this.points) {
      point.element.visible = false;
    }

    for (const point of pointsToDraw) {
      if (!point.element) {
        // Artifacts from supercluster
        continue;
      }
      let pointX = scaleX(point.geometry.coordinates[0]);
      let pointY = scaleY(point.geometry.coordinates[1]);
      point.element.visible = true;

      point.element.position.set(pointX, pointY);
    }

    this.needsAnimation = false;
    this.tick();
  }

  renderRandom() {
    this.removeTicker();
    this.app.stage.removeChildren();

    this.points = [];
    for (let i = 0; i < this.count.value; i++) {
      const rect = new this.PIXI.Graphics();
      rect.beginFill(
        rgbToHex(
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255)
        )
      );
      rect.drawRect(0, 0, 10, 10);
      rect.endFill();
      this.points.push({
        geometry: {
          coordinates: [
            this.minX + Math.random() * (this.maxX - this.minX),
            this.minY + Math.random() * (this.maxY - this.minY),
          ],
        },
        element: rect,
      });
      this.app.stage.addChild(rect);
    }

    this.clusterMap = new SuperclusterMapper(
      this.points,
      [this.minX, this.maxX],
      [this.minY, this.maxY]
    );

    this.needsAnimation = true;
    this.app.ticker.add(this.animateRandom, this);
  }

  animateTSNE() {
    if (!this.needsAnimation) {
      this.tick();
      return;
    }

    const scaleX = scale(this.currentXRange, [0, this.width]);
    const scaleY = scale(this.currentYRange, [0, this.height]);

    for (const point of this.csv) {
      let pointX = scaleX(point.geometry.coordinates[0]);
      let pointY = scaleY(point.geometry.coordinates[1]);

      point.element.position.set(pointX, pointY);
    }

    this.needsAnimation = false;
    this.tick();
  }

  renderTSNE() {
    const doRender = confirm(
      "Warning: PIXI.js struggles to render this dataset and may cause this page to crash. Would you like to continue?"
    );

    if (!doRender) {
      return;
    }
    this.removeTicker();
    this.app.stage.removeChildren();
    this.sampleColors = new Map( // Create colors for sample type
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
        .split("")
        .map((letter) => [
          letter,
          [
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
          ],
        ])
    );

    for (const point of this.csv) {
      const rect = new this.PIXI.Graphics();
      rect.beginFill(rgbToHex(...this.sampleColors.get(point.sample)), 0.2);
      rect.drawRect(0, 0, 20, 20);
      rect.endFill();
      point.element = rect;
      this.app.stage.addChild(rect);
    }

    this.needsAnimation = true;
    this.app.ticker.add(this.animateTSNE, this);
  }
}

export default StubPixiDrawer;
