parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S/qp":[function(require,module,exports) {
!function(t,n){"use strict";function e(t){return document.createElement(t)}function o(t,n){for(var e in n)try{t.style[e]=n[e]}catch(o){}return t}function a(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof t}function i(t,n){if("array"!==a(n))return-1;if(n.indexOf)return n.indexOf(t);for(var e=0,o=n.length;e<o;e++)if(n[e]===t)return e;return-1}function r(){var t=arguments;for(var n in t[1])if(t[1].hasOwnProperty(n))switch(a(t[1][n])){case"object":t[0][n]=r({},t[0][n],t[1][n]);break;case"array":t[0][n]=t[1][n].slice(0);break;default:t[0][n]=t[1][n]}return t.length>2?r.apply(null,[t[0]].concat(Array.prototype.slice.call(t,2))):t[0]}function h(t){return 1===(t=Math.round(255*t).toString(16)).length?"0"+t:t}function l(t,n,e,o){t.addEventListener?t[o?"removeEventListener":"addEventListener"](n,e,!1):t.attachEvent&&t[o?"detachEvent":"attachEvent"]("on"+n,e)}var s;!function(){var n=t.performance;if(n&&(n.now||n.webkitNow)){var e=n.now?"now":"webkitNow";s=n[e].bind(n)}else s=function(){return+new Date}}();var u=t.cancelAnimationFrame||t.cancelRequestAnimationFrame,c=t.requestAnimationFrame;!function(){for(var n=["moz","webkit","o"],e=0,o=0,a=n.length;o<a&&!u;++o)u=t[n[o]+"CancelAnimationFrame"]||t[n[o]+"CancelRequestAnimationFrame"],c=u&&t[n[o]+"RequestAnimationFrame"];u||(c=function(n){var o=s(),a=Math.max(0,16-(o-e));return e=o+a,t.setTimeout(function(){n(o+a)},a)},u=function(t){clearTimeout(t)})}();var p="string"===a(document.createElement("div").textContent)?"textContent":"innerText";function d(t,m){"object"===a(t)&&t.nodeType===n&&(m=t,t=document.body),t||(t=document.body);var x,b,v,w,y,k,O,S,F,C=this,M=r({},d.defaults,m||{}),z={},A=[],E=100,P=[],H=M.threshold,T=0,j=s()-H,I=[],q=[],D="fps"===M.show;function L(t,n,e,o){return b[0|t][Math.round(Math.min((n-e)/(o-e)*E,E))]}function R(){z.legend.fps!==D&&(z.legend.fps=D,z.legend[p]=D?"FPS":"ms"),O=D?C.fps:C.duration,z.count[p]=O>999?"999+":O.toFixed(O>99?0:M.decimals)}function B(){if(v=s(),j<v-M.threshold&&(C.fps-=C.fps/Math.max(1,60*M.smoothing/M.interval),C.duration=1e3/C.fps),function(){for(S=M.history;S--;)I[S]=0===S?C.fps:I[S-1],q[S]=0===S?C.duration:q[S-1]}(),R(),M.heat){if(P.length)for(S=P.length;S--;)P[S].el.style[x[P[S].name].heatOn]=D?L(x[P[S].name].heatmap,C.fps,0,M.maxFps):L(x[P[S].name].heatmap,C.duration,M.threshold,0);if(z.graph&&x.column.heatOn)for(S=A.length;S--;)A[S].style[x.column.heatOn]=D?L(x.column.heatmap,I[S],0,M.maxFps):L(x.column.heatmap,q[S],M.threshold,0)}if(z.graph)for(F=0;F<M.history;F++)A[F].style.height=(D?I[F]?Math.round(k/M.maxFps*Math.min(I[F],M.maxFps)):0:q[F]?Math.round(k/M.threshold*Math.min(q[F],M.threshold)):0)+"px"}function N(){M.interval<20?(w=c(N),B()):(w=setTimeout(N,M.interval),y=c(B))}function V(t){(t=t||window.event).preventDefault?(t.preventDefault(),t.stopPropagation()):(t.returnValue=!1,t.cancelBubble=!0),C.toggle()}function W(){M.toggleOn&&l(z.container,M.toggleOn,V,1),t.removeChild(z.container)}function G(){for(var n in z.container&&W(),function(){if(x=d.theme[M.theme],!(b=x.compiledHeatmaps||[]).length&&x.heatmaps.length){for(F=0;F<x.heatmaps.length;F++)for(b[F]=[],S=0;S<=E;S++)b[F][S]=(t=.33/E*S,n=x.heatmaps[F].saturation,e=x.heatmaps[F].lightness,o=void 0,a=void 0,i=void 0,r=void 0,l=void 0,s=void 0,u=void 0,0==(r=e<=.5?e*(1+n):e+n-e*n)?"#000":(u=r*((r-(l=2*e-r))/r)*((t*=6)-(s=Math.floor(t))),0===s||6===s?(o=r,a=l+u,i=l):1===s?(o=r-u,a=r,i=l):2===s?(o=l,a=r,i=l+u):3===s?(o=l,a=r-u,i=r):4===s?(o=l+u,a=l,i=r):(o=r,a=l,i=r-u),"#"+h(o)+h(a)+h(i)));x.compiledHeatmaps=b}var t,n,e,o,a,i,r,l,s,u}(),z.container=o(e("div"),x.container),z.count=z.container.appendChild(o(e("div"),x.count)),z.legend=z.container.appendChild(o(e("div"),x.legend)),z.graph=M.graph?z.container.appendChild(o(e("div"),x.graph)):0,P.length=0,z)z[n]&&x[n].heatOn&&P.push({name:n,el:z[n]});if(A.length=0,z.graph)for(z.graph.style.width=M.history*x.column.width+(M.history-1)*x.column.spacing+"px",S=0;S<M.history;S++)A[S]=z.graph.appendChild(o(e("div"),x.column)),A[S].style.position="absolute",A[S].style.bottom=0,A[S].style.right=S*x.column.width+S*x.column.spacing+"px",A[S].style.width=x.column.width+"px",A[S].style.height="0px";J(),R(),t.appendChild(z.container),z.graph&&(k=z.graph.clientHeight),M.toggleOn&&("click"===M.toggleOn&&(z.container.style.cursor="pointer"),l(z.container,M.toggleOn,V))}function J(){o(z.container,M)}C.options=M,C.fps=0,C.duration=0,C.isPaused=0,C.tickStart=function(){T=s()},C.tick=function(){v=s(),H+=(v-j-H)/M.smoothing,C.fps=1e3/H,C.duration=T<j?H:v-T,j=v},C.pause=function(){return w&&(C.isPaused=1,clearTimeout(w),u(w),u(y),w=y=0),C},C.resume=function(){return w||(C.isPaused=0,N()),C},C.set=function(t,n){return M[t]=n,D="fps"===M.show,-1!==i(t,g)&&G(),-1!==i(t,f)&&J(),C},C.showDuration=function(){return C.set("show","ms"),C},C.showFps=function(){return C.set("show","fps"),C},C.toggle=function(){return C.set("show",D?"ms":"fps"),C},C.hide=function(){return C.pause(),z.container.style.display="none",C},C.show=function(){return C.resume(),z.container.style.display="block",C},C.destroy=function(){C.pause(),W(),C.tick=C.tickStart=function(){}},G(),N()}d.extend=r,window.FPSMeter=d,d.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var g=["toggleOn","theme","heat","graph","history"],f=["position","zIndex","left","top","right","bottom","margin"]}(window),function(t,n,e){"use strict";n.theme={};var o=n.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};n.theme.dark=n.extend({},o,{heatmaps:[{saturation:.8,lightness:.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}}),n.theme.light=n.extend({},o,{heatmaps:[{saturation:.5,lightness:.5}],container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}}),n.theme.colorful=n.extend({},o,{heatmaps:[{saturation:.5,lightness:.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}}),n.theme.transparent=n.extend({},o,{heatmaps:[{saturation:.8,lightness:.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:.5}})}(window,FPSMeter);
},{}],"d4Db":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("fpsmeter");var u=function(){function t(){a(this,t),this.content=document.querySelector(".content"),this.countLinks=this.content.querySelectorAll(".selector > a"),this.canvas=document.createElement("canvas"),this.width=Math.min(this.content.clientWidth,1e3),this.height=.75*this.content.clientHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.mouseReader=this.canvas,this.controls={lockedX:!1,lockedY:!1},this.minX=-2e3,this.maxX=2e3,this.minY=-2e3,this.maxY=2e3,this.currentXRange=[-100,100],this.currentYRange=[-100,100],this.needsAnimation=!0,this.initFpsmeter(),this.initSettings(),this.initControls()}return s(t,[{key:"addToDOM",value:function(){this.content.appendChild(this.canvas)}},{key:"initFpsmeter",value:function(){this.meter=new window.FPSMeter(this.content,{graph:1,heat:1,theme:"light",history:25,top:"-10px",left:"".concat(this.width,"px"),transform:"translateX(-100%)"})}},{key:"initSettings",value:function(){var e=this,t=JSON.parse(localStorage.getItem("count"));this.count=t||{index:0,value:1e3},localStorage.setItem("count",JSON.stringify(this.count)),this.countLinks.forEach(function(t,n){e.countLinks[e.count.index].classList.toggle("selected",!0),t.addEventListener("click",function(r){r.preventDefault(),r.stopPropagation(),e.countLinks[e.count.index].classList.toggle("selected",!1),e.count={index:n,value:parseInt(t.innerText)},e.countLinks[e.count.index].classList.toggle("selected",!0),localStorage.setItem("count",JSON.stringify(e.count)),e.render()})});var n=JSON.parse(localStorage.getItem("controls"));this.controls=n||{lockedX:!1,lockedY:!1},localStorage.setItem("controls",JSON.stringify(this.controls)),document.getElementById("lock-x").checked=this.controls.lockedX,document.getElementById("lock-y").checked=this.controls.lockedY,document.querySelector("#lock-x").addEventListener("change",function(t){e.controls.lockedX=t.target.checked,localStorage.setItem("controls",JSON.stringify(e.controls)),console.log(e.controls)}),document.querySelector("#lock-y").addEventListener("change",function(t){e.controls.lockedY=t.target.checked,localStorage.setItem("controls",JSON.stringify(e.controls)),console.log(e.controls)})}},{key:"initControls",value:function(){var t=this;this.mouseReader.addEventListener("wheel",function(n){if(!t.controls.lockedX){var r=e(t.currentXRange);t.currentXRange[0]-=n.wheelDelta/50,t.currentXRange[1]+=n.wheelDelta/50,t.currentXRange[0]=Math.max(t.currentXRange[0],t.minX),t.currentXRange[1]=Math.min(t.currentXRange[1],t.maxX),t.currentXRange[1]<t.currentXRange[0]&&(t.currentXRange=r)}if(!t.controls.lockedY){var o=e(t.currentYRange);t.currentYRange[0]-=n.wheelDelta/50,t.currentYRange[1]+=n.wheelDelta/50,t.currentYRange[0]=Math.max(t.currentYRange[0],t.minY),t.currentYRange[1]=Math.min(t.currentYRange[1],t.maxY),t.currentYRange[1]<t.currentYRange[0]&&(t.currentYRange=o)}return t.needsAnimation=!0,t.updateSelectionWindowDisplay(),!1},!1);var n=!1;this.mouseReader.addEventListener("mousedown",function(e){n=!0},!1),this.mouseReader.addEventListener("mousemove",function(r){if(!n)return!1;if(!t.controls.lockedX){var o=e(t.currentXRange);t.currentXRange[0]-=r.movementX,t.currentXRange[1]-=r.movementX,t.currentXRange[0]=Math.max(t.currentXRange[0],t.minX),t.currentXRange[1]=Math.min(t.currentXRange[1],t.maxX),t.currentXRange[1]<t.currentXRange[0]&&(t.currentXRange=o)}if(!t.controls.lockedY){var c=e(t.currentYRange);t.currentYRange[0]-=r.movementY,t.currentYRange[1]-=r.movementY,t.currentYRange[0]=Math.max(t.currentYRange[0],t.minY),t.currentYRange[1]=Math.min(t.currentYRange[1],t.maxY),t.currentYRange[1]<t.currentYRange[0]&&(t.currentYRange=c)}t.needsAnimation=!0,t.updateSelectionWindowDisplay()},!1),this.mouseReader.addEventListener("mouseup",function(e){n=!1}),this.mouseReader.addEventListener("mouseleave",function(e){n=!1})}},{key:"updateSelectionWindowDisplay",value:function(){document.querySelector(".selection-window").textContent="[".concat(this.currentXRange[0].toFixed(2),", ").concat(this.currentXRange[1].toFixed(2),"] x [").concat(this.currentYRange[0].toFixed(2),", ").concat(this.currentYRange[1].toFixed(2),"]")}},{key:"render",value:function(){}}]),t}(),l=u;exports.default=l;
},{"fpsmeter":"S/qp"}],"yjX3":[function(require,module,exports) {
"use strict";function r(r,e){var t=r[1]-r[0],a=(e[1]-e[0])/t,o=e[1]-a*r[1];return function(r){return a*r+o}}function e(r,e,t){var a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(console.error("Could not compile shader: ".concat(r.getShaderInfoLog(a))),r.deleteShader(a),null)}function t(r,t,a){var o=e(r,r.VERTEX_SHADER,t),n=e(r,r.FRAGMENT_SHADER,a),c=r.createProgram();return r.attachShader(c,o),r.attachShader(c,n),r.linkProgram(c),r.getProgramParameter(c,r.LINK_STATUS)?c:(console.error("Unable to initialize the shader program: ".concat(r.getProgramInfoLog(c))),null)}function a(r){var e=r.toString(16);return 1==e.length?"0"+e:e}function o(r,e,t){return parseInt(Number("0x"+a(r)+a(e)+a(t)),10)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.scale=r,exports.initShaderProgram=t,exports.loadShader=e,exports.rgbToHex=o;
},{}],"PMNT":[function(require,module,exports) {
"use strict";var t=e(require("./engine")),i=require("./utilities");function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function o(t,i){for(var e=0;e<i.length;e++){var r=i[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,i,e){return i&&o(t.prototype,i),e&&o(t,e),t}function a(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&h(t,i)}function h(t,i){return(h=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function u(t){var i=f();return function(){var e,r=m(t);if(i){var n=m(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return c(this,e)}}function c(t,i){return!i||"object"!==r(i)&&"function"!=typeof i?l(t):i}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g="\n  attribute vec4 aVertexPosition;\n\n  void main() {\n      gl_Position = aVertexPosition;\n  }\n",d="\n  precision mediump float;\n  uniform float uGridSize;\n  uniform vec4 viewport;\n  void main() {\n    vec4 ndcPos;\n    // Reverse calculations from window space to clip space (normalized device coordinates)\n    ndcPos.xy = ((2.0 * gl_FragCoord.xy) - (2.0 * viewport.xy)) / (viewport.zw) - 1.0;\n    ndcPos.xy = ndcPos.xy - mod(ndcPos.xy, 1.0 / uGridSize);\n    gl_FragColor = vec4(ndcPos.x/2.0 + 0.5 , 0, ndcPos.y/2.0 + 0.5, 1.0);\n  }\n",p=function(e){a(o,t.default);var r=u(o);function o(){var t;return n(this,o),(t=r.call(this)).gl=t.canvas.getContext("webgl"),t.gl?t:(console.error("Unable to initialize WebGL!"),c(t))}return s(o,[{key:"animate",value:function(){if(!this.needsAnimation)return this.lastFrame=requestAnimationFrame(this.animate.bind(this)),void this.meter.tick();this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexPosition),this.gl.useProgram(this.programInfo.program),this.gl.uniform1f(this.programInfo.uniformLocations.gridSize,Math.sqrt(this.count.value)/2),this.gl.uniform4fv(this.programInfo.uniformLocations.viewport,this.gl.getParameter(this.gl.VIEWPORT)),this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertexCount);var t=this.getWebGLViewport();this.gl.viewport(t[0],t[1],t[2],t[3]),this.needsAnimation=!1,this.lastFrame=requestAnimationFrame(this.animate.bind(this)),this.meter.tick()}},{key:"render",value:function(){this.trueBoxWidth=(this.maxX-this.minX)/Math.sqrt(this.count.value),this.trueBoxHeight=(this.maxY-this.minY)/Math.sqrt(this.count.value),this.scaleBlue=(0,i.scale)([this.minX,this.maxX],[0,256]),this.scaleRed=(0,i.scale)([this.minY,this.maxY],[0,256]),this.baseViewport=this.gl.getParameter(this.gl.VIEWPORT),this.shaderProgram=(0,i.initShaderProgram)(this.gl,g,d),this.programInfo={program:this.shaderProgram,attribLocations:{vertexPosition:this.gl.getAttribLocation(this.shaderProgram,"aVertexPosition")},uniformLocations:{gridSize:this.gl.getUniformLocation(this.shaderProgram,"uGridSize"),viewport:this.gl.getUniformLocation(this.shaderProgram,"viewport")}},this.positionBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer);for(var t=(0,i.scale)([this.minX,this.maxX],[-1,1]),e=(0,i.scale)([this.minY,this.maxY],[-1,1]),r=[],n=this.minX;n<this.maxX;n+=this.trueBoxWidth)for(var o=this.minY;o<this.maxY;o+=this.trueBoxHeight)r.push(t(n),e(o),t(n+this.trueBoxWidth),e(o),t(n+this.trueBoxWidth),e(o+this.trueBoxHeight)),r.push(t(n),e(o),t(n),e(o+this.trueBoxHeight),t(n+this.trueBoxWidth),e(o+this.trueBoxHeight));this.vertexCount=r.length/2,this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.lastFrame&&cancelAnimationFrame(this.lastFrame),this.needsAnimation=!0,this.animate()}},{key:"getWebGLViewport",value:function(){var t=(0,i.scale)([this.minX,this.maxX],[0,-this.width]),e=(0,i.scale)([this.minY,this.maxY],[0,-this.height]),r=t(this.currentXRange[0]),n=e(this.currentYRange[0]),o=this.currentXRange[1]-this.currentXRange[0],s=this.currentYRange[1]-this.currentYRange[0];return[r,n,(this.maxX-this.minX)/o*this.width,(this.maxY-this.minY)/s*this.height]}}]),o}();document.addEventListener("DOMContentLoaded",function(){var t=new p;t.addToDOM(),t.render()});
},{"./engine":"d4Db","./utilities":"yjX3"}]},{},["PMNT"], null)
//# sourceMappingURL=canvas-webgl.5cf2ac20.js.map