import Engine from "./engine";
import { scale, initShaderProgram } from "./utilities";

// Largely taken from
// https://github.com/mdn/webgl-examples/blob/gh-pages/tutorial/sample2/webgl-demo.js
const vertexShader = `
  attribute vec4 aVertexPosition;

  void main() {
      gl_Position = aVertexPosition;
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform float uGridSize;
  uniform vec4 viewport;
  void main() {
    vec4 ndcPos;
    // Reverse calculations from window space to clip space (normalized device coordinates)
    ndcPos.xy = ((2.0 * gl_FragCoord.xy) - (2.0 * viewport.xy)) / (viewport.zw) - 1.0;
    ndcPos.xy = ndcPos.xy - mod(ndcPos.xy, 1.0 / uGridSize);
    gl_FragColor = vec4(ndcPos.x/2.0 + 0.5 , 0, ndcPos.y/2.0 + 0.5, 1.0);
  }
`;

class WebGLCanvasEngine extends Engine {
  constructor() {
    super();

    this.gl = this.canvas.getContext("webgl");

    if (!this.gl) {
      console.error("Unable to initialize WebGL!");
      return;
    }

    this.content.appendChild(this.canvas);
  }

  animate() {
    if (!this.needsAnimation) {
      this.lastFrame = requestAnimationFrame(this.animate.bind(this));
      this.meter.tick();
      return;
    }

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.vertexAttribPointer(
      this.programInfo.attribLocations.vertexPosition,
      2, // numComponents
      this.gl.FLOAT, // type
      false, // normalize
      0, // stride
      0 // offset
    );
    this.gl.enableVertexAttribArray(
      this.programInfo.attribLocations.vertexPosition
    );

    this.gl.useProgram(this.programInfo.program);

    this.gl.uniform1f(
      this.programInfo.uniformLocations.gridSize,
      Math.sqrt(this.count.value) / 2
    );
    this.gl.uniform4fv(
      this.programInfo.uniformLocations.viewport,
      this.gl.getParameter(this.gl.VIEWPORT)
    );

    this.gl.drawArrays(
      this.gl.TRIANGLES,
      0, // stride
      this.vertexCount // vertex count
    );

    const viewport = this.getWebGLViewport();

    this.gl.viewport(viewport[0], viewport[1], viewport[2], viewport[3]);

    this.needsAnimation = false;
    this.lastFrame = requestAnimationFrame(this.animate.bind(this));
    this.meter.tick();
  }

  render() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);
    this.scaleBlue = scale([this.minX, this.maxX], [0, 256]);
    this.scaleRed = scale([this.minY, this.maxY], [0, 256]);

    this.baseViewport = this.gl.getParameter(this.gl.VIEWPORT);

    this.shaderProgram = initShaderProgram(
      this.gl,
      vertexShader,
      fragmentShader
    );

    this.programInfo = {
      program: this.shaderProgram,
      attribLocations: {
        vertexPosition: this.gl.getAttribLocation(
          this.shaderProgram,
          "aVertexPosition"
        ),
      },
      uniformLocations: {
        gridSize: this.gl.getUniformLocation(this.shaderProgram, "uGridSize"),
        viewport: this.gl.getUniformLocation(this.shaderProgram, "viewport"),
      },
    };
    this.positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

    const scaleX = scale([this.minX, this.maxX], [-1, 1]);
    const scaleY = scale([this.minY, this.maxY], [-1, 1]);
    const positions = [];
    for (let x = this.minX; x < this.maxX; x += this.trueBoxWidth) {
      for (let y = this.minY; y < this.maxY; y += this.trueBoxHeight) {
        positions.push(
          scaleX(x),
          scaleY(y),
          scaleX(x + this.trueBoxWidth),
          scaleY(y),
          scaleX(x + this.trueBoxWidth),
          scaleY(y + this.trueBoxHeight)
        );

        positions.push(
          scaleX(x),
          scaleY(y),
          scaleX(x),
          scaleY(y + this.trueBoxHeight),
          scaleX(x + this.trueBoxWidth),
          scaleY(y + this.trueBoxHeight)
        );
      }
    }

    this.vertexCount = positions.length / 2;

    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(positions),
      this.gl.STATIC_DRAW
    );

    if (this.lastFrame) {
      cancelAnimationFrame(this.lastFrame);
    }
    this.needsAnimation = true;
    this.animate();
  }

  getWebGLViewport() {
    // Calculate appropriate webgl viewport given current selection window
    const scaleXWindowSpace = scale([this.minX, this.maxX], [0, -this.width]);
    const scaleYWindowSpace = scale([this.minY, this.maxY], [0, -this.height]);

    const toReturnX = scaleXWindowSpace(this.currentXRange[0]);
    const toReturnY = scaleYWindowSpace(this.currentYRange[0]);

    const windowWidth = this.currentXRange[1] - this.currentXRange[0];
    const windowHeight = this.currentYRange[1] - this.currentYRange[0];

    return [
      toReturnX,
      toReturnY,
      ((this.maxX - this.minX) / windowWidth) * this.width,
      ((this.maxY - this.minY) / windowHeight) * this.height,
    ];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const engine = new WebGLCanvasEngine();
  engine.render();
});
