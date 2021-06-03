import Engine from "./engine";
import { rgbToHex, scale } from "./utilities";

import * as PIXI from "pixi.js";

class PixiEngine extends Engine {
  constructor() {
    super();

    this.app = new PIXI.Application({
      width: this.width,
      height: this.height,
      backgroundColor: 0xffffff,
      antialias: true,
    });

    this.canvas = this.app.view;
    this.content.appendChild(this.canvas);
    this.initControls();
  }

  animate() {
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
    this.meter.tick();
  }

  render() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    this.app.ticker.remove(this.animate, this);
    this.app.stage.removeChildren();

    this.columns = [];
    for (let x = this.minX; x < this.maxX; x += this.trueBoxWidth) {
      let currentColumn = new PIXI.Container();
      this.columns.push({ x, element: currentColumn });
      this.app.stage.addChild(currentColumn);

      for (let y = this.minY; y < this.maxY; y += this.trueBoxHeight) {
        const rect = new PIXI.Graphics();
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

    this.app.ticker.add(this.animate, this);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const engine = new PixiEngine();
  engine.render();
});
