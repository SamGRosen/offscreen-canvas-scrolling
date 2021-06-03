import Engine from "./engine";
import { rgbToHex, scale } from "./utilities";
import { Viewport } from "pixi-viewport";

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
    this.content.appendChild(this.app.view);
  }

  animate() {
    this.meter.tick();
  }

  render() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    this.app.ticker.remove(this.animate, this);
    this.app.stage.removeChildren();

    this.viewport = new Viewport({
      screenWidth: this.width,
      screenHeight: this.height,
      worldWidth: this.maxX - this.minX,
      worldHeight: this.maxY - this.minY,

      interaction: this.app.renderer.plugins.interaction, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    });

    this.app.stage.addChild(this.viewport);
    this.viewport.drag().pinch().wheel().decelerate();

    for (let x = this.minX; x < this.maxX; x += this.trueBoxWidth) {
      for (let y = this.minY; y < this.maxY; y += this.trueBoxHeight) {
        const rect = new PIXI.Graphics();
        rect.beginFill(
          rgbToHex(
            Math.floor(this.scaleRed(x)),
            0,
            Math.floor(this.scaleBlue(y))
          )
        );

        rect.drawRect(
          -this.trueBoxWidth / 2,
          -this.trueBoxHeight / 2,
          this.trueBoxWidth,
          this.trueBoxHeight
        );
        rect.endFill();

        rect.position.set(x + 10 * Math.random(), y + 10 * Math.random());
        this.viewport.addChild(rect);
      }
    }

    this.app.ticker.add(this.animate, this);

    this.animate();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const engine = new PixiEngine();
  engine.render();
});
