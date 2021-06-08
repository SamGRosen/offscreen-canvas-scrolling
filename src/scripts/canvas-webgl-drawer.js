import Drawer from "./drawer";
import { scale, initShaderProgram } from "./utilities";
import {
  vertexShader,
  squaresFragmentShader,
  colorPointsVertexShader,
  colorPointsFragmentShader,
} from "./webgl.js";

// Largely taken from
// https://github.com/mdn/webgl-examples/blob/gh-pages/tutorial/sample2/webgl-demo.js

class WebGLCanvasDrawer extends Drawer {
  constructor(data) {
    super(data);

    this.gl = this.canvas.getContext("webgl");

    if (!this.gl) {
      console.error("Unable to initialize WebGL!");
      return;
    }
  }

  animateSquares() {
    if (!this.needsAnimation) {
      this.lastFrame = requestAnimationFrame(this.animateSquares.bind(this));
      this.tick();
      return;
    }

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    const viewport = this.getWebGLViewport();

    this.gl.viewport(viewport[0], viewport[1], viewport[2], viewport[3]);

    this.gl.uniform4fv(
      this.programInfo.uniformLocations.viewport,
      this.gl.getParameter(this.gl.VIEWPORT)
    );

    this.gl.drawArrays(
      this.gl.TRIANGLES,
      0, // stride
      this.vertexCount // vertex count
    );

    this.needsAnimation = false;
    this.lastFrame = requestAnimationFrame(this.animateSquares.bind(this));
    this.tick();
  }

  renderSquares() {
    this.trueBoxWidth = (this.maxX - this.minX) / Math.sqrt(this.count.value);
    this.trueBoxHeight = (this.maxY - this.minY) / Math.sqrt(this.count.value);

    this.shaderProgram = initShaderProgram(
      this.gl,
      vertexShader,
      squaresFragmentShader
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

    this.needsAnimation = true;
    this.animateSquares();
  }

  getWebGLViewport() {
    // Calculate appropriate webgl viewport given current selection window
    const windowWidth = this.currentXRange[1] - this.currentXRange[0];
    const windowHeight = this.currentYRange[1] - this.currentYRange[0];

    const displayAsIfThisWide =
      ((this.maxX - this.minX) / windowWidth) * this.width;
    const displayAsIfThisHigh =
      ((this.maxY - this.minY) / windowHeight) * this.height;

    const scaleXWindowSpace = scale(
      [this.minX, this.maxX],
      [0, -displayAsIfThisWide]
    );
    const scaleYWindowSpace = scale(
      [this.minY, this.maxY],
      [0, -displayAsIfThisHigh]
    );

    const toReturnX = scaleXWindowSpace(this.currentXRange[0]);
    const toReturnY = scaleYWindowSpace(this.currentYRange[0]);

    return [toReturnX, toReturnY, displayAsIfThisWide, displayAsIfThisHigh];
  }

  animateRandom() {
    if (!this.needsAnimation) {
      this.lastFrame = requestAnimationFrame(this.animateRandom.bind(this));
      this.tick();
      return;
    }

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    const viewport = this.getWebGLViewport();

    this.gl.viewport(viewport[0], viewport[1], viewport[2], viewport[3]);

    this.gl.drawArrays(
      this.gl.POINTS,
      0, // stride
      this.count.value // vertex count
    );

    this.needsAnimation = false;
    this.lastFrame = requestAnimationFrame(this.animateRandom.bind(this));
    this.tick();
  }

  renderRandom() {
    this.shaderProgram = initShaderProgram(
      this.gl,
      colorPointsVertexShader,
      colorPointsFragmentShader
    );

    this.programInfo = {
      program: this.shaderProgram,
      attribLocations: {
        vertexPosition: this.gl.getAttribLocation(
          this.shaderProgram,
          "aVertexPosition"
        ),
        vertexColor: this.gl.getAttribLocation(
          this.shaderProgram,
          "aVertexColor"
        ),
      },
    };

    const positions = [];
    for (let i = 0; i < this.count.value; i++) {
      positions.push(-1 + 2 * Math.random(), -1 + 2 * Math.random());
    }

    this.positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(positions),
      this.gl.STATIC_DRAW
    );

    const colors = [];
    for (let i = 0; i < this.count.value; i++) {
      colors.push(Math.random(), Math.random(), Math.random(), 1.0);
    }
    this.colorBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(colors),
      this.gl.STATIC_DRAW
    );

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

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
    this.gl.vertexAttribPointer(
      this.programInfo.attribLocations.vertexColor,
      4, // numComponents
      this.gl.FLOAT, // type
      false, // normalize
      0, // stride
      0 // offset
    );
    this.gl.enableVertexAttribArray(
      this.programInfo.attribLocations.vertexColor
    );

    this.gl.useProgram(this.programInfo.program);

    if (this.lastFrame) {
      cancelAnimationFrame(this.lastFrame);
    }
    this.needsAnimation = true;
    this.animateRandom();
  }
}

export default WebGLCanvasDrawer;
