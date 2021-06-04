parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yjX3":[function(require,module,exports) {
"use strict";function r(r,e){var t=r[1]-r[0],a=(e[1]-e[0])/t,o=e[1]-a*r[1];return function(r){return a*r+o}}function e(r,e,t){var a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(console.error("Could not compile shader: ".concat(r.getShaderInfoLog(a))),r.deleteShader(a),null)}function t(r,t,a){var o=e(r,r.VERTEX_SHADER,t),n=e(r,r.FRAGMENT_SHADER,a),c=r.createProgram();return r.attachShader(c,o),r.attachShader(c,n),r.linkProgram(c),r.getProgramParameter(c,r.LINK_STATUS)?c:(console.error("Unable to initialize the shader program: ".concat(r.getProgramInfoLog(c))),null)}function a(r){var e=r.toString(16);return 1==e.length?"0"+e:e}function o(r,e,t){return parseInt(Number("0x"+a(r)+a(e)+a(t)),10)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.scale=r,exports.initShaderProgram=t,exports.loadShader=e,exports.rgbToHex=o;
},{}],"wX4Y":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function t(e){o(this,t),this.canvas=e.canvas,this.width=e.canvas.width,this.height=e.canvas.height,this.receiveState(e)}return u(t,[{key:"receiveState",value:function(t){this.minX=t.minX,this.maxX=t.maxX,this.minY=t.minY,this.maxY=t.maxY,this.currentXRange=e(t.currentXRange),this.currentYRange=e(t.currentYRange),this.count=t.count,this.controls=t.controls,this.needsAnimation=!0}},{key:"tick",value:function(){postMessage({type:"tick"})}},{key:"animate",value:function(){}},{key:"render",value:function(){}}],[{key:"onmessager",value:function(e){var t=this;return function(n){switch(n.data.type){case"init":e.engine=new t(n.data);break;case"state":e.engine.receiveState(n.data);break;case"render":e.engine.receiveState(n.data),e.engine.render();break;default:console.error("Received unknown message type: ".concat(n))}}}}]),t}(),l=s;exports.default=l;
},{}],"S/qp":[function(require,module,exports) {
!function(t,n){"use strict";function e(t){return document.createElement(t)}function o(t,n){for(var e in n)try{t.style[e]=n[e]}catch(o){}return t}function a(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof t}function i(t,n){if("array"!==a(n))return-1;if(n.indexOf)return n.indexOf(t);for(var e=0,o=n.length;e<o;e++)if(n[e]===t)return e;return-1}function r(){var t=arguments;for(var n in t[1])if(t[1].hasOwnProperty(n))switch(a(t[1][n])){case"object":t[0][n]=r({},t[0][n],t[1][n]);break;case"array":t[0][n]=t[1][n].slice(0);break;default:t[0][n]=t[1][n]}return t.length>2?r.apply(null,[t[0]].concat(Array.prototype.slice.call(t,2))):t[0]}function h(t){return 1===(t=Math.round(255*t).toString(16)).length?"0"+t:t}function l(t,n,e,o){t.addEventListener?t[o?"removeEventListener":"addEventListener"](n,e,!1):t.attachEvent&&t[o?"detachEvent":"attachEvent"]("on"+n,e)}var s;!function(){var n=t.performance;if(n&&(n.now||n.webkitNow)){var e=n.now?"now":"webkitNow";s=n[e].bind(n)}else s=function(){return+new Date}}();var u=t.cancelAnimationFrame||t.cancelRequestAnimationFrame,c=t.requestAnimationFrame;!function(){for(var n=["moz","webkit","o"],e=0,o=0,a=n.length;o<a&&!u;++o)u=t[n[o]+"CancelAnimationFrame"]||t[n[o]+"CancelRequestAnimationFrame"],c=u&&t[n[o]+"RequestAnimationFrame"];u||(c=function(n){var o=s(),a=Math.max(0,16-(o-e));return e=o+a,t.setTimeout(function(){n(o+a)},a)},u=function(t){clearTimeout(t)})}();var p="string"===a(document.createElement("div").textContent)?"textContent":"innerText";function d(t,m){"object"===a(t)&&t.nodeType===n&&(m=t,t=document.body),t||(t=document.body);var x,b,v,w,y,k,O,S,F,C=this,M=r({},d.defaults,m||{}),z={},A=[],E=100,P=[],H=M.threshold,T=0,j=s()-H,I=[],q=[],D="fps"===M.show;function L(t,n,e,o){return b[0|t][Math.round(Math.min((n-e)/(o-e)*E,E))]}function R(){z.legend.fps!==D&&(z.legend.fps=D,z.legend[p]=D?"FPS":"ms"),O=D?C.fps:C.duration,z.count[p]=O>999?"999+":O.toFixed(O>99?0:M.decimals)}function B(){if(v=s(),j<v-M.threshold&&(C.fps-=C.fps/Math.max(1,60*M.smoothing/M.interval),C.duration=1e3/C.fps),function(){for(S=M.history;S--;)I[S]=0===S?C.fps:I[S-1],q[S]=0===S?C.duration:q[S-1]}(),R(),M.heat){if(P.length)for(S=P.length;S--;)P[S].el.style[x[P[S].name].heatOn]=D?L(x[P[S].name].heatmap,C.fps,0,M.maxFps):L(x[P[S].name].heatmap,C.duration,M.threshold,0);if(z.graph&&x.column.heatOn)for(S=A.length;S--;)A[S].style[x.column.heatOn]=D?L(x.column.heatmap,I[S],0,M.maxFps):L(x.column.heatmap,q[S],M.threshold,0)}if(z.graph)for(F=0;F<M.history;F++)A[F].style.height=(D?I[F]?Math.round(k/M.maxFps*Math.min(I[F],M.maxFps)):0:q[F]?Math.round(k/M.threshold*Math.min(q[F],M.threshold)):0)+"px"}function N(){M.interval<20?(w=c(N),B()):(w=setTimeout(N,M.interval),y=c(B))}function V(t){(t=t||window.event).preventDefault?(t.preventDefault(),t.stopPropagation()):(t.returnValue=!1,t.cancelBubble=!0),C.toggle()}function W(){M.toggleOn&&l(z.container,M.toggleOn,V,1),t.removeChild(z.container)}function G(){for(var n in z.container&&W(),function(){if(x=d.theme[M.theme],!(b=x.compiledHeatmaps||[]).length&&x.heatmaps.length){for(F=0;F<x.heatmaps.length;F++)for(b[F]=[],S=0;S<=E;S++)b[F][S]=(t=.33/E*S,n=x.heatmaps[F].saturation,e=x.heatmaps[F].lightness,o=void 0,a=void 0,i=void 0,r=void 0,l=void 0,s=void 0,u=void 0,0==(r=e<=.5?e*(1+n):e+n-e*n)?"#000":(u=r*((r-(l=2*e-r))/r)*((t*=6)-(s=Math.floor(t))),0===s||6===s?(o=r,a=l+u,i=l):1===s?(o=r-u,a=r,i=l):2===s?(o=l,a=r,i=l+u):3===s?(o=l,a=r-u,i=r):4===s?(o=l+u,a=l,i=r):(o=r,a=l,i=r-u),"#"+h(o)+h(a)+h(i)));x.compiledHeatmaps=b}var t,n,e,o,a,i,r,l,s,u}(),z.container=o(e("div"),x.container),z.count=z.container.appendChild(o(e("div"),x.count)),z.legend=z.container.appendChild(o(e("div"),x.legend)),z.graph=M.graph?z.container.appendChild(o(e("div"),x.graph)):0,P.length=0,z)z[n]&&x[n].heatOn&&P.push({name:n,el:z[n]});if(A.length=0,z.graph)for(z.graph.style.width=M.history*x.column.width+(M.history-1)*x.column.spacing+"px",S=0;S<M.history;S++)A[S]=z.graph.appendChild(o(e("div"),x.column)),A[S].style.position="absolute",A[S].style.bottom=0,A[S].style.right=S*x.column.width+S*x.column.spacing+"px",A[S].style.width=x.column.width+"px",A[S].style.height="0px";J(),R(),t.appendChild(z.container),z.graph&&(k=z.graph.clientHeight),M.toggleOn&&("click"===M.toggleOn&&(z.container.style.cursor="pointer"),l(z.container,M.toggleOn,V))}function J(){o(z.container,M)}C.options=M,C.fps=0,C.duration=0,C.isPaused=0,C.tickStart=function(){T=s()},C.tick=function(){v=s(),H+=(v-j-H)/M.smoothing,C.fps=1e3/H,C.duration=T<j?H:v-T,j=v},C.pause=function(){return w&&(C.isPaused=1,clearTimeout(w),u(w),u(y),w=y=0),C},C.resume=function(){return w||(C.isPaused=0,N()),C},C.set=function(t,n){return M[t]=n,D="fps"===M.show,-1!==i(t,g)&&G(),-1!==i(t,f)&&J(),C},C.showDuration=function(){return C.set("show","ms"),C},C.showFps=function(){return C.set("show","fps"),C},C.toggle=function(){return C.set("show",D?"ms":"fps"),C},C.hide=function(){return C.pause(),z.container.style.display="none",C},C.show=function(){return C.resume(),z.container.style.display="block",C},C.destroy=function(){C.pause(),W(),C.tick=C.tickStart=function(){}},G(),N()}d.extend=r,window.FPSMeter=d,d.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var g=["toggleOn","theme","heat","graph","history"],f=["position","zIndex","left","top","right","bottom","margin"]}(window),function(t,n,e){"use strict";n.theme={};var o=n.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};n.theme.dark=n.extend({},o,{heatmaps:[{saturation:.8,lightness:.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}}),n.theme.light=n.extend({},o,{heatmaps:[{saturation:.5,lightness:.5}],container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}}),n.theme.colorful=n.extend({},o,{heatmaps:[{saturation:.5,lightness:.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}}),n.theme.transparent=n.extend({},o,{heatmaps:[{saturation:.8,lightness:.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:.5}})}(window,FPSMeter);
},{}],"d4Db":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("fpsmeter");var u=function(){function t(){c(this,t),this.content=document.querySelector(".content"),this.countLinks=this.content.querySelectorAll(".selector > a"),this.canvas=document.createElement("canvas"),this.width=Math.min(this.content.clientWidth,1e3),this.height=.75*this.content.clientHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.mouseReader=this.canvas,this.controls={lockedX:!1,lockedY:!1},this.minX=-2e3,this.maxX=2e3,this.minY=-2e3,this.maxY=2e3,this.currentXRange=[-100,100],this.currentYRange=[-100,100],this.needsAnimation=!0,this.initFpsmeter(),this.initSettings(),this.initControls()}return s(t,[{key:"addToDOM",value:function(){this.content.appendChild(this.canvas)}},{key:"initFpsmeter",value:function(){this.meter=new window.FPSMeter(this.content,{graph:1,heat:1,theme:"light",history:25,top:"-10px",left:"".concat(this.width,"px"),transform:"translateX(-100%)"})}},{key:"initSettings",value:function(){var e=this,t=JSON.parse(localStorage.getItem("count"));this.count=t||{index:0,value:1e3},localStorage.setItem("count",JSON.stringify(this.count)),this.countLinks.forEach(function(t,n){e.countLinks[e.count.index].classList.toggle("selected",!0),t.addEventListener("click",function(r){r.preventDefault(),r.stopPropagation(),e.countLinks[e.count.index].classList.toggle("selected",!1),e.count={index:n,value:parseInt(t.innerText)},e.countLinks[e.count.index].classList.toggle("selected",!0),localStorage.setItem("count",JSON.stringify(e.count)),e.render()})});var n=JSON.parse(localStorage.getItem("controls"));this.controls=n||{lockedX:!1,lockedY:!1},localStorage.setItem("controls",JSON.stringify(this.controls)),document.getElementById("lock-x").checked=this.controls.lockedX,document.getElementById("lock-y").checked=this.controls.lockedY,document.querySelector("#lock-x").addEventListener("change",function(t){e.controls.lockedX=t.target.checked,localStorage.setItem("controls",JSON.stringify(e.controls)),console.log(e.controls)}),document.querySelector("#lock-y").addEventListener("change",function(t){e.controls.lockedY=t.target.checked,localStorage.setItem("controls",JSON.stringify(e.controls)),console.log(e.controls)})}},{key:"initControls",value:function(){var t=this;this.mouseReader.addEventListener("wheel",function(n){if(!t.controls.lockedX){var r=e(t.currentXRange);t.currentXRange[0]-=n.wheelDelta/50,t.currentXRange[1]+=n.wheelDelta/50,t.currentXRange[0]=Math.max(t.currentXRange[0],t.minX),t.currentXRange[1]=Math.min(t.currentXRange[1],t.maxX),t.currentXRange[1]<t.currentXRange[0]&&(t.currentXRange=r)}if(!t.controls.lockedY){var o=e(t.currentYRange);t.currentYRange[0]-=n.wheelDelta/50,t.currentYRange[1]+=n.wheelDelta/50,t.currentYRange[0]=Math.max(t.currentYRange[0],t.minY),t.currentYRange[1]=Math.min(t.currentYRange[1],t.maxY),t.currentYRange[1]<t.currentYRange[0]&&(t.currentYRange=o)}return t.needsAnimation=!0,t.updateSelectionWindowDisplay(),!1},!1),this.isMoving=!1,this.mouseReader.addEventListener("mousedown",function(e){t.isMoving=!0},!1),this.mouseReader.addEventListener("mousemove",function(n){if(!t.isMoving)return!1;if(!t.controls.lockedX){var r=e(t.currentXRange);t.currentXRange[0]-=n.movementX,t.currentXRange[1]-=n.movementX,t.currentXRange[0]=Math.max(t.currentXRange[0],t.minX),t.currentXRange[1]=Math.min(t.currentXRange[1],t.maxX),t.currentXRange[1]<t.currentXRange[0]&&(t.currentXRange=r)}if(!t.controls.lockedY){var o=e(t.currentYRange);t.currentYRange[0]-=n.movementY,t.currentYRange[1]-=n.movementY,t.currentYRange[0]=Math.max(t.currentYRange[0],t.minY),t.currentYRange[1]=Math.min(t.currentYRange[1],t.maxY),t.currentYRange[1]<t.currentYRange[0]&&(t.currentYRange=o)}t.needsAnimation=!0,t.updateSelectionWindowDisplay()},!1),this.mouseReader.addEventListener("mouseup",function(e){t.isMoving=!1}),this.mouseReader.addEventListener("mouseleave",function(e){t.isMoving=!1})}},{key:"updateSelectionWindowDisplay",value:function(){document.querySelector(".selection-window").textContent="[".concat(this.currentXRange[0].toFixed(2),", ").concat(this.currentXRange[1].toFixed(2),"] x [").concat(this.currentYRange[0].toFixed(2),", ").concat(this.currentYRange[1].toFixed(2),"]")}},{key:"render",value:function(){}}]),t}(),l=u;exports.default=l;
},{"fpsmeter":"S/qp"}],"c/UT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./engine"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=b();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(t){l(r,e.default);var n=y(r);function r(){var e;return c(this,r),(e=n.call(this)).mouseReader=document.createElement("div"),e.canvas.style.position="absolute",e.mouseReader.id="mouse-reader",e.initControls(),e}return u(r,[{key:"addToDOM",value:function(e){var t=this;a(v(r.prototype),"addToDOM",this).call(this),this.content.appendChild(this.mouseReader),this.offscreenCanvas=this.canvas.transferControlToOffscreen(),this.worker=e,this.worker.postMessage(o({type:"init",canvas:this.offscreenCanvas},this.getState()),[this.offscreenCanvas]),this.worker.onmessage=function(e){"tick"===e.data.type&&t.meter.tick()}}},{key:"initSettings",value:function(){a(v(r.prototype),"initSettings",this).call(this),document.querySelector("#lock-x").addEventListener("change",this.sendState.bind(this)),document.querySelector("#lock-y").addEventListener("change",this.sendState.bind(this))}},{key:"initControls",value:function(){var e=this;a(v(r.prototype),"initControls",this).call(this),this.mouseReader.addEventListener("wheel",this.sendState.bind(this)),this.mouseReader.addEventListener("mousemove",function(){e.isMoving&&e.sendState()})}},{key:"sendState",value:function(){this.worker.postMessage(o({type:"state"},this.getState()))}},{key:"getState",value:function(){return{minX:this.minX,maxX:this.maxX,minY:this.minY,maxY:this.maxY,controls:this.controls,currentXRange:this.currentXRange,currentYRange:this.currentYRange,count:this.count.value}}},{key:"render",value:function(){this.worker.postMessage(o({type:"render"},this.getState()))}}]),r}(),O=m;exports.default=O;
},{"./engine":"d4Db"}],"G5Mx":[function(require,module,exports) {
"use strict";var t=require("./utilities"),e=i(require("./offscreen-worker")),n=i(require("./offscreen-engine"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=m();return function(){var n,i=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}console.log(10);var y=function(n){u(r,e.default);var i=h(r);function r(t){var e;return o(this,r),(e=i.call(this,t)).ctx=e.canvas.getContext("2d"),e}return c(r,[{key:"animate",value:function(){if(!this.needsAnimation)return this.lastFrame=requestAnimationFrame(this.animate.bind(this)),void this.tick();this.ctx.clearRect(0,0,this.width,this.height);for(var e=(0,t.scale)(this.currentXRange,[0,this.width]),n=(0,t.scale)(this.currentYRange,[0,this.height]),i=(this.maxX-this.minX)/(this.currentXRange[1]-this.currentXRange[0])*this.trueBoxWidth,r=(this.maxY-this.minY)/(this.currentYRange[1]-this.currentYRange[0])*this.trueBoxHeight,o=this.currentXRange[0]-this.currentXRange[0]%this.trueBoxWidth-this.trueBoxWidth,s=this.currentXRange[1]-this.currentXRange[1]%this.trueBoxWidth+this.trueBoxWidth,c=this.currentYRange[0]-this.currentYRange[0]%this.trueBoxHeight-this.trueBoxWidth,u=this.currentYRange[1]-this.currentYRange[1]%this.trueBoxHeight+this.trueBoxWidth,a=o;a<s;a+=this.trueBoxWidth)for(var h=c;h<u;h+=this.trueBoxHeight)this.ctx.fillStyle="rgb(\n          ".concat(this.scaleRed(h),",\n          0,\n          ").concat(this.scaleBlue(a),")"),this.ctx.fillRect(e(a),n(h),i,r);this.needsAnimation=!1,this.tick(),this.lastFrame=requestAnimationFrame(this.animate.bind(this))}},{key:"render",value:function(){this.trueBoxWidth=(this.maxX-this.minX)/Math.sqrt(this.count),this.trueBoxHeight=(this.maxY-this.minY)/Math.sqrt(this.count),this.scaleBlue=(0,t.scale)([this.minX,this.maxX],[0,256]),this.scaleRed=(0,t.scale)([this.minY,this.maxY],[0,256]),this.lastFrame&&cancelAnimationFrame(this.lastFrame),this.needsAnimation=!0,this.animate()}}]),r}();self.onmessage=y.onmessager(self),document.addEventListener("DOMContentLoaded",function(){var t=new n.default;t.addToDOM(new Worker("offscreen-canvas-worker.ca560fcd.js")),t.render()});
},{"./utilities":"yjX3","./offscreen-worker":"wX4Y","./offscreen-engine":"c/UT","./offscreen-canvas-worker.js":[["offscreen-canvas-worker.ca560fcd.js","G5Mx"],"offscreen-canvas-worker.ca560fcd.js.map","G5Mx"]}]},{},["G5Mx"], null)
//# sourceMappingURL=offscreen-canvas-worker.ca560fcd.js.map