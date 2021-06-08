import Supercluster from "supercluster";
import regeneratorRuntime from "regenerator-runtime";

const JITTER_FACTOR = 250;

function scale(domain, range) {
  const domainLength = domain[1] - domain[0];
  const rangeLength = range[1] - range[0];
  const slope = rangeLength / domainLength;
  const intercept = range[1] - slope * domain[1];
  return (x) => slope * x + intercept;
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);

  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(`Could not compile shader: ${gl.getShaderInfoLog(shader)}`);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function initShaderProgram(gl, vertexSource, fragmentSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram
      )}`
    );
    return null;
  }

  return shaderProgram;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return parseInt(
    Number("0x" + componentToHex(r) + componentToHex(g) + componentToHex(b)),
    10
  );
}

const createMessanger = (clazz, self) => {
  return (e) => {
    switch (e.data.type) {
      case "init":
        self.drawer = new clazz(e.data);
        break;
      case "state":
        self.drawer.receiveState(e.data);
        break;
      case "render":
        self.drawer.receiveState(e.data);
        self.drawer.render();
        break;
      default:
        console.error(`Received unknown message type: ${e}`);
    }
  };
};

class SuperclusterMapper {
  constructor(points, xRange, yRange, options = { radius: 1000, maxZoom: 16 }) {
    this.xScale = scale(xRange, [-180, 180]);
    this.yScale = scale(yRange, [-90, 90]);

    this.xScaleInverse = scale([-180, 180], xRange);
    this.yScaleInverse = scale([-90, 90], yRange);

    this.index = new Supercluster(options);

    for (const point of points) {
      point.geometry.coordinates = [
        this.xScale(point.geometry.coordinates[0]),
        this.yScale(point.geometry.coordinates[1]),
      ];
    }

    this.index.load(points);
  }

  *getClusters(bbox, zoomLevel = 10) {
    const inLatLong = this.index.getClusters(
      [
        this.xScale(bbox[0]),
        this.yScale(bbox[1]),
        this.xScale(bbox[2]),
        this.yScale(bbox[3]),
      ],
      zoomLevel
    );
    for (const point of inLatLong) {
      // use of generator here gives huge speedup since no heap changes needed
      yield {
        ...point,
        geometry: {
          coordinates: [
            this.xScaleInverse(point.geometry.coordinates[0]),
            this.yScaleInverse(point.geometry.coordinates[1]),
          ],
        },
      };
    }
  }
}

const getRandomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

export {
  scale,
  initShaderProgram,
  loadShader,
  rgbToHex,
  createMessanger,
  SuperclusterMapper,
  getRandomColor,
  JITTER_FACTOR,
};
