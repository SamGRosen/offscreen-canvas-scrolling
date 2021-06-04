parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yjX3":[function(require,module,exports) {
"use strict";function r(r,e){var t=r[1]-r[0],a=(e[1]-e[0])/t,o=e[1]-a*r[1];return function(r){return a*r+o}}function e(r,e,t){var a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(console.error("Could not compile shader: ".concat(r.getShaderInfoLog(a))),r.deleteShader(a),null)}function t(r,t,a){var o=e(r,r.VERTEX_SHADER,t),n=e(r,r.FRAGMENT_SHADER,a),c=r.createProgram();return r.attachShader(c,o),r.attachShader(c,n),r.linkProgram(c),r.getProgramParameter(c,r.LINK_STATUS)?c:(console.error("Unable to initialize the shader program: ".concat(r.getProgramInfoLog(c))),null)}function a(r){var e=r.toString(16);return 1==e.length?"0"+e:e}function o(r,e,t){return parseInt(Number("0x"+a(r)+a(e)+a(t)),10)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.scale=r,exports.initShaderProgram=t,exports.loadShader=e,exports.rgbToHex=o;
},{}],"wX4Y":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=function(){function t(e){o(this,t),this.canvas=e.canvas,this.width=e.canvas.width,this.height=e.canvas.height,this.receiveState(e)}return s(t,[{key:"receiveState",value:function(t){this.minX=t.minX,this.maxX=t.maxX,this.minY=t.minY,this.maxY=t.maxY,this.currentXRange=e(t.currentXRange),this.currentYRange=e(t.currentYRange),this.count=t.count,this.controls=t.controls,this.needsAnimation=!0}},{key:"tick",value:function(){postMessage({type:"tick"})}},{key:"animate",value:function(){}},{key:"render",value:function(){}}],[{key:"onmessager",value:function(e){var t=this;return function(n){switch(console.log(n),n.data.type){case"init":e.engine=new t(n.data);break;case"state":e.engine.receiveState(n.data);break;case"render":e.engine.receiveState(n.data),e.engine.render();break;default:console.error("Received unknown message type: ".concat(n))}}}}]),t}(),l=u;exports.default=l;
},{}],"0Cx4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fragmentShader=exports.vertexShader=void 0;var e="\n  attribute vec4 aVertexPosition;\n\n  void main() {\n      gl_Position = aVertexPosition;\n  }\n";exports.vertexShader=e;var o="\n  precision mediump float;\n  uniform float uGridSize;\n  uniform vec4 viewport;\n  void main() {\n    vec4 ndcPos;\n    // Reverse calculations from window space to clip space (normalized device coordinates)\n    ndcPos.xy = ((2.0 * gl_FragCoord.xy) - (2.0 * viewport.xy)) / (viewport.zw) - 1.0;\n    ndcPos.xy = ndcPos.xy - mod(ndcPos.xy, 1.0 / uGridSize);\n    gl_FragColor = vec4(ndcPos.x/2.0 + 0.5 , 0, ndcPos.y/2.0 + 0.5, 1.0);\n  }\n";exports.fragmentShader=o;
},{}],"tZX4":[function(require,module,exports) {
"use strict";var t=require("./utilities"),i=r(require("./offscreen-worker")),e=require("./webgl.js");function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function s(t,i){for(var e=0;e<i.length;e++){var r=i[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,i,e){return i&&s(t.prototype,i),e&&s(t,e),t}function h(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&u(t,i)}function u(t,i){return(u=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function f(t){var i=g();return function(){var e,r=m(t);if(i){var n=m(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return c(this,e)}}function c(t,i){return!i||"object"!==n(i)&&"function"!=typeof i?l(t):i}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(r){h(s,i.default);var n=f(s);function s(t){var i;return o(this,s),(i=n.call(this,t)).gl=i.canvas.getContext("webgl"),i.gl?i:(console.error("Unable to initialize WebGL!"),c(i))}return a(s,[{key:"animate",value:function(){if(!this.needsAnimation)return this.lastFrame=requestAnimationFrame(this.animate.bind(this)),void this.tick();this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexPosition),this.gl.useProgram(this.programInfo.program),this.gl.uniform1f(this.programInfo.uniformLocations.gridSize,Math.sqrt(this.count)/2),this.gl.uniform4fv(this.programInfo.uniformLocations.viewport,this.gl.getParameter(this.gl.VIEWPORT)),this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertexCount);var t=this.getWebGLViewport();this.gl.viewport(t[0],t[1],t[2],t[3]),this.needsAnimation=!1,this.lastFrame=requestAnimationFrame(this.animate.bind(this)),this.tick()}},{key:"render",value:function(){this.trueBoxWidth=(this.maxX-this.minX)/Math.sqrt(this.count),this.trueBoxHeight=(this.maxY-this.minY)/Math.sqrt(this.count),this.shaderProgram=(0,t.initShaderProgram)(this.gl,e.vertexShader,e.fragmentShader),this.programInfo={program:this.shaderProgram,attribLocations:{vertexPosition:this.gl.getAttribLocation(this.shaderProgram,"aVertexPosition")},uniformLocations:{gridSize:this.gl.getUniformLocation(this.shaderProgram,"uGridSize"),viewport:this.gl.getUniformLocation(this.shaderProgram,"viewport")}},this.positionBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer);for(var i=(0,t.scale)([this.minX,this.maxX],[-1,1]),r=(0,t.scale)([this.minY,this.maxY],[-1,1]),n=[],o=this.minX;o<this.maxX;o+=this.trueBoxWidth)for(var s=this.minY;s<this.maxY;s+=this.trueBoxHeight)n.push(i(o),r(s),i(o+this.trueBoxWidth),r(s),i(o+this.trueBoxWidth),r(s+this.trueBoxHeight)),n.push(i(o),r(s),i(o),r(s+this.trueBoxHeight),i(o+this.trueBoxWidth),r(s+this.trueBoxHeight));this.vertexCount=n.length/2,this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(n),this.gl.STATIC_DRAW),this.lastFrame&&cancelAnimationFrame(this.lastFrame),this.needsAnimation=!0,this.animate()}},{key:"getWebGLViewport",value:function(){var i=(0,t.scale)([this.minX,this.maxX],[0,-this.width]),e=(0,t.scale)([this.minY,this.maxY],[0,-this.height]),r=i(this.currentXRange[0]),n=e(this.currentYRange[0]),o=this.currentXRange[1]-this.currentXRange[0],s=this.currentYRange[1]-this.currentYRange[0];return[r,n,(this.maxX-this.minX)/o*this.width,(this.maxY-this.minY)/s*this.height]}}]),s}();self.onmessage=p.onmessager(self);
},{"./utilities":"yjX3","./offscreen-worker":"wX4Y","./webgl.js":"0Cx4"}]},{},["tZX4"], null)
//# sourceMappingURL=offscreen-canvas-webgl-worker.a22adc4f.js.map