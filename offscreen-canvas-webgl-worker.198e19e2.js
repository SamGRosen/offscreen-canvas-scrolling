parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q0ab":[function(require,module,exports) {
"use strict";function t(t){return a(t)||n(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function n(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t){if(Array.isArray(t))return i(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=function(){function e(t){o(this,e),this.canvas=t.canvas,this.width=t.canvas.width,this.height=t.canvas.height,this.receiveState(t)}return c(e,[{key:"receiveState",value:function(e){this.minX=e.minX,this.maxX=e.maxX,this.minY=e.minY,this.maxY=e.maxY,this.currentXRange=t(e.currentXRange),this.currentYRange=t(e.currentYRange),this.count=e.count,this.controls=e.controls,this.dataset=e.dataset,e.csv&&(this.csv=e.csv),this.needsAnimation=!0}},{key:"tick",value:function(){}},{key:"animate",value:function(){}},{key:"render",value:function(){switch(this.lastFrame&&cancelAnimationFrame(this.lastFrame),this.dataset){case"squares":this.renderSquares();break;case"random":this.renderRandom();break;case"jittered":this.renderJittered();break;case"tsne":this.renderTSNE();break;default:console.error("Did not receive valid dataset to render: ".concat(this.dataset))}}}]),e}(),l=u;exports.default=l;
},{}],"KvNs":[function(require,module,exports) {
"use strict";function t(n,e,f,r,a,c){if(a-r<=f)return;const s=r+a>>1;o(n,e,s,r,a,c%2),t(n,e,f,r,s-1,c+1),t(n,e,f,s+1,a,c+1)}function o(t,e,f,r,a,c){for(;a>r;){if(a-r>600){const n=a-r+1,s=f-r+1,i=Math.log(n),u=.5*Math.exp(2*i/3),M=.5*Math.sqrt(i*u*(n-u)/n)*(s-n/2<0?-1:1);o(t,e,f,Math.max(r,Math.floor(f-s*u/n+M)),Math.min(a,Math.floor(f+(n-s)*u/n+M)),c)}const s=e[2*f+c];let i=r,u=a;for(n(t,e,r,f),e[2*a+c]>s&&n(t,e,r,a);i<u;){for(n(t,e,i,u),i++,u--;e[2*i+c]<s;)i++;for(;e[2*u+c]>s;)u--}e[2*r+c]===s?n(t,e,r,u):n(t,e,++u,a),u<=f&&(r=u+1),f<=u&&(a=u-1)}}function n(t,o,n,f){e(t,n,f),e(o,2*n,2*f),e(o,2*n+1,2*f+1)}function e(t,o,n){const e=t[o];t[o]=t[n],t[n]=e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"EaTL":[function(require,module,exports) {
"use strict";function t(t,e,o,p,s,u,n){const h=[0,t.length-1,0],r=[];let c,l;for(;h.length;){const f=h.pop(),i=h.pop(),a=h.pop();if(i-a<=n){for(let n=a;n<=i;n++)c=e[2*n],l=e[2*n+1],c>=o&&c<=s&&l>=p&&l<=u&&r.push(t[n]);continue}const d=Math.floor((a+i)/2);c=e[2*d],l=e[2*d+1],c>=o&&c<=s&&l>=p&&l<=u&&r.push(t[d]);const g=(f+1)%2;(0===f?o<=c:p<=l)&&(h.push(a),h.push(d-1),h.push(g)),(0===f?s>=c:u>=l)&&(h.push(d+1),h.push(i),h.push(g))}return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"JzcI":[function(require,module,exports) {
"use strict";function t(t,s,e,p,u,n){const r=[0,t.length-1,0],h=[],c=u*u;for(;r.length;){const f=r.pop(),l=r.pop(),i=r.pop();if(l-i<=n){for(let u=i;u<=l;u++)o(s[2*u],s[2*u+1],e,p)<=c&&h.push(t[u]);continue}const a=Math.floor((i+l)/2),d=s[2*a],g=s[2*a+1];o(d,g,e,p)<=c&&h.push(t[a]);const x=(f+1)%2;(0===f?e-u<=d:p-u<=g)&&(r.push(i),r.push(a-1),r.push(x)),(0===f?e+u>=d:p+u>=g)&&(r.push(a+1),r.push(l),r.push(x))}return h}function o(t,o,s,e){const p=t-s,u=o-e;return p*p+u*u}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"S+0s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("./sort")),t=i(require("./range")),r=i(require("./within"));function i(e){return e&&e.__esModule?e:{default:e}}const s=e=>e[0],n=e=>e[1];class o{constructor(t,r=s,i=n,o=64,d=Float64Array){this.nodeSize=o,this.points=t;const u=t.length<65536?Uint16Array:Uint32Array,h=this.ids=new u(t.length),l=this.coords=new d(2*t.length);for(let e=0;e<t.length;e++)h[e]=e,l[2*e]=r(t[e]),l[2*e+1]=i(t[e]);(0,e.default)(h,l,o,0,h.length-1,0)}range(e,r,i,s){return(0,t.default)(this.ids,this.coords,e,r,i,s,this.nodeSize)}within(e,t,i){return(0,r.default)(this.ids,this.coords,e,t,i,this.nodeSize)}}exports.default=o;
},{"./sort":"KvNs","./range":"EaTL","./within":"JzcI"}],"7EcW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("kdbush"));function e(t){return t&&t.__esModule?t:{default:t}}const o={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},n=Math.fround||(t=>e=>(t[0]=+e,t[0]))(new Float32Array(1));class i{constructor(t){this.options=l(Object.create(o),t),this.trees=new Array(this.options.maxZoom+1)}load(e){const{log:o,minZoom:n,maxZoom:i,nodeSize:s}=this.options;o&&console.time("total time");const u=`prepare ${e.length} points`;o&&console.time(u),this.points=e;let a=[];for(let t=0;t<e.length;t++)e[t].geometry&&a.push(r(e[t],t));this.trees[i+1]=new t.default(a,m,f,s,Float32Array),o&&console.timeEnd(u);for(let r=i;r>=n;r--){const e=+Date.now();a=this._cluster(a,r),this.trees[r]=new t.default(a,m,f,s,Float32Array),o&&console.log("z%d: %d clusters in %dms",r,a.length,+Date.now()-e)}return o&&console.timeEnd("total time"),this}getClusters(t,e){let o=((t[0]+180)%360+360)%360-180;const n=Math.max(-90,Math.min(90,t[1]));let i=180===t[2]?180:((t[2]+180)%360+360)%360-180;const s=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)o=-180,i=180;else if(o>i){const t=this.getClusters([o,n,180,s],e),r=this.getClusters([-180,n,i,s],e);return t.concat(r)}const r=this.trees[this._limitZoom(e)],a=r.range(h(o),p(s),h(i),p(n)),c=[];for(const h of a){const t=r.points[h];c.push(t.numPoints?u(t):this.points[t.index])}return c}getChildren(t){const e=this._getOriginId(t),o=this._getOriginZoom(t),n="No cluster with the specified id.",i=this.trees[o];if(!i)throw new Error(n);const s=i.points[e];if(!s)throw new Error(n);const r=this.options.radius/(this.options.extent*Math.pow(2,o-1)),a=i.within(s.x,s.y,r),h=[];for(const p of a){const e=i.points[p];e.parentId===t&&h.push(e.numPoints?u(e):this.points[e.index])}if(0===h.length)throw new Error(n);return h}getLeaves(t,e,o){e=e||10,o=o||0;const n=[];return this._appendLeaves(n,t,e,o,0),n}getTile(t,e,o){const n=this.trees[this._limitZoom(t)],i=Math.pow(2,t),{extent:s,radius:r}=this.options,u=r/s,a=(o-u)/i,h=(o+1+u)/i,p={features:[]};return this._addTileFeatures(n.range((e-u)/i,a,(e+1+u)/i,h),n.points,e,o,i,p),0===e&&this._addTileFeatures(n.range(1-u/i,a,1,h),n.points,i,o,i,p),e===i-1&&this._addTileFeatures(n.range(0,a,u/i,h),n.points,-1,o,i,p),p.features.length?p:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){const o=this.getChildren(t);if(e++,1!==o.length)break;t=o[0].properties.cluster_id}return e}_appendLeaves(t,e,o,n,i){const s=this.getChildren(e);for(const r of s){const e=r.properties;if(e&&e.cluster?i+e.point_count<=n?i+=e.point_count:i=this._appendLeaves(t,e.cluster_id,o,n,i):i<n?i++:t.push(r),t.length===o)break}return i}_addTileFeatures(t,e,o,n,i,s){for(const r of t){const t=e[r],u=t.numPoints;let c,d,l;if(u)c=a(t),d=t.x,l=t.y;else{const e=this.points[t.index];c=e.properties,d=h(e.geometry.coordinates[0]),l=p(e.geometry.coordinates[1])}const m={type:1,geometry:[[Math.round(this.options.extent*(d*i-o)),Math.round(this.options.extent*(l*i-n))]],tags:c};let f;u?f=t.id:this.options.generateId?f=t.index:this.points[t.index].id&&(f=this.points[t.index].id),void 0!==f&&(m.id=f),s.features.push(m)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(+t,this.options.maxZoom+1))}_cluster(t,e){const o=[],{radius:n,extent:i,reduce:r,minPoints:u}=this.options,a=n/(i*Math.pow(2,e));for(let h=0;h<t.length;h++){const n=t[h];if(n.zoom<=e)continue;n.zoom=e;const i=this.trees[e+1],p=i.within(n.x,n.y,a),c=n.numPoints||1;let d=c;for(const t of p){const o=i.points[t];o.zoom>e&&(d+=o.numPoints||1)}if(d>=u){let t=n.x*c,u=n.y*c,a=r&&c>1?this._map(n,!0):null;const l=(h<<5)+(e+1)+this.points.length;for(const o of p){const s=i.points[o];if(s.zoom<=e)continue;s.zoom=e;const h=s.numPoints||1;t+=s.x*h,u+=s.y*h,s.parentId=l,r&&(a||(a=this._map(n,!0)),r(a,this._map(s)))}n.parentId=l,o.push(s(t/d,u/d,l,d,a))}else if(o.push(n),d>1)for(const t of p){const n=i.points[t];n.zoom<=e||(n.zoom=e,o.push(n))}}return o}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e){if(t.numPoints)return e?l({},t.properties):t.properties;const o=this.points[t.index].properties,n=this.options.map(o);return e&&n===o?l({},n):n}}function s(t,e,o,i,s){return{x:n(t),y:n(e),zoom:1/0,id:o,parentId:-1,numPoints:i,properties:s}}function r(t,e){const[o,i]=t.geometry.coordinates;return{x:n(h(o)),y:n(p(i)),zoom:1/0,index:e,parentId:-1}}function u(t){return{type:"Feature",id:t.id,properties:a(t),geometry:{type:"Point",coordinates:[c(t.x),d(t.y)]}}}function a(t){const e=t.numPoints,o=e>=1e4?`${Math.round(e/1e3)}k`:e>=1e3?`${Math.round(e/100)/10}k`:e;return l(l({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:o})}function h(t){return t/360+.5}function p(t){const e=Math.sin(t*Math.PI/180),o=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return o<0?0:o>1?1:o}function c(t){return 360*(t-.5)}function d(t){const e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function l(t,e){for(const o in e)t[o]=e[o];return t}function m(t){return t.x}function f(t){return t.y}exports.default=i;
},{"kdbush":"S+0s"}],"VuXv":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"yjX3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scale=p,exports.initShaderProgram=v,exports.loadShader=h,exports.rgbToHex=g,exports.JITTER_FACTOR=exports.getRandomColor=exports.SuperclusterMapper=exports.createMessanger=void 0;var e=t(require("supercluster")),r=t(require("regenerator-runtime"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach(function(r){o(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw o}}}}function i(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function l(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,r,t){return r&&l(e.prototype,r),t&&l(e,t),e}var d=250;function p(e,r){var t=e[1]-e[0],n=(r[1]-r[0])/t,a=r[1]-n*e[1];return function(e){return n*e+a}}function h(e,r,t){var n=e.createShader(r);return e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)?n:(console.error("Could not compile shader: ".concat(e.getShaderInfoLog(n))),e.deleteShader(n),null)}function v(e,r,t){var n=h(e,e.VERTEX_SHADER,r),a=h(e,e.FRAGMENT_SHADER,t),o=e.createProgram();return e.attachShader(o,n),e.attachShader(o,a),e.linkProgram(o),e.getProgramParameter(o,e.LINK_STATUS)?o:(console.error("Unable to initialize the shader program: ".concat(e.getProgramInfoLog(o))),null)}function y(e){var r=e.toString(16);return 1==r.length?"0"+r:r}function g(e,r,t){return parseInt(Number("0x"+y(e)+y(r)+y(t)),10)}exports.JITTER_FACTOR=d;var b=function(e,r){return function(t){switch(t.data.type){case"init":r.drawer=new e(t.data);break;case"state":r.drawer.receiveState(t.data);break;case"render":r.drawer.receiveState(t.data),r.drawer.render();break;default:console.error("Received unknown message type: ".concat(t))}}};exports.createMessanger=b;var m=function(){function t(r,n,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{radius:1e3,maxZoom:16};u(this,t),this.xScale=p(n,[-180,180]),this.yScale=p(a,[-90,90]),this.xScaleInverse=p([-180,180],n),this.yScaleInverse=p([-90,90],a),this.index=new e.default(o);var i,s=c(r);try{for(s.s();!(i=s.n()).done;){var l=i.value;l.geometry.coordinates=[this.xScale(l.geometry.coordinates[0]),this.yScale(l.geometry.coordinates[1])]}}catch(f){s.e(f)}finally{s.f()}this.index.load(r)}return f(t,[{key:"getClusters",value:r.default.mark(function e(t){var n,o,i,s,u,l=arguments;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=l.length>1&&void 0!==l[1]?l[1]:10,o=this.index.getClusters([this.xScale(t[0]),this.yScale(t[1]),this.xScale(t[2]),this.yScale(t[3])],n),i=c(o),e.prev=3,i.s();case 5:if((s=i.n()).done){e.next=11;break}return u=s.value,e.next=9,a(a({},u),{},{geometry:{coordinates:[this.xScaleInverse(u.geometry.coordinates[0]),this.yScaleInverse(u.geometry.coordinates[1])]}});case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),i.e(e.t0);case 16:return e.prev=16,i.f(),e.finish(16);case 19:case"end":return e.stop()}},e,this,[[3,13,16,19]])})}]),t}();exports.SuperclusterMapper=m;var S=function(){var e=Math.floor(255*Math.random()),r=Math.floor(255*Math.random()),t=Math.floor(255*Math.random());return"rgb(".concat(e,", ").concat(r,", ").concat(t,")")};exports.getRandomColor=S;
},{"supercluster":"7EcW","regenerator-runtime":"VuXv"}],"0Cx4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.colorPointsFragmentShader=exports.colorPointsVertexShader=exports.squaresFragmentShader=exports.vertexShader=void 0;var o="\n  attribute vec4 aVertexPosition;\n\n  void main() {\n      gl_Position = aVertexPosition;\n  }\n";exports.vertexShader=o;var e="\n  precision mediump float;\n  uniform float uGridSize;\n  uniform vec4 viewport;\n  void main() {\n    vec4 ndcPos;\n    // Reverse calculations from window space to clip space (normalized device coordinates)\n    ndcPos.xy = ((2.0 * gl_FragCoord.xy) - (2.0 * viewport.xy)) / (viewport.zw) - 1.0;\n    ndcPos.xy = ndcPos.xy - mod(ndcPos.xy, 1.0 / uGridSize);\n    gl_FragColor = vec4(ndcPos.x/2.0 + 0.5 , 0, ndcPos.y/2.0 + 0.5, 1.0);\n  }\n";exports.squaresFragmentShader=e;var r="\n  attribute vec4 aVertexPosition;\n  attribute vec4 aVertexColor;\n\n  varying lowp vec4 vColor;\n\n  void main(void) {\n    gl_Position = aVertexPosition;\n    vColor = aVertexColor;\n    gl_PointSize = 1.0;\n  }\n";exports.colorPointsVertexShader=r;var n="\n  varying lowp vec4 vColor;\n\n  void main(void) {\n    gl_FragColor = vColor;\n  }\n";exports.colorPointsFragmentShader=n;
},{}],"QCvO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./drawer")),i=require("./utilities"),r=require("./webgl.js");function e(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return h(t)||a(t)||u(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function h(t){if(Array.isArray(t))return f(t)}function l(t,i){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||i&&t&&"number"==typeof t.length){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,n=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return n=t.done,t},e:function(t){a=!0,s=t},f:function(){try{n||null==r.return||r.return()}finally{if(a)throw s}}}}function u(t,i){if(t){if("string"==typeof t)return f(t,i);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,i):void 0}}function f(t,i){(null==i||i>t.length)&&(i=t.length);for(var r=0,e=new Array(i);r<i;r++)e[r]=t[r];return e}function g(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function m(t,i){for(var r=0;r<i.length;r++){var e=i[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function c(t,i,r){return i&&m(t.prototype,i),r&&m(t,r),t}function d(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&A(t,i)}function A(t,i){return(A=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function b(t){var i=R();return function(){var r,e=x(t);if(i){var o=x(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return p(this,r)}}function p(t,i){return!i||"object"!==o(i)&&"function"!=typeof i?v(t):i}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var B=function(e){d(n,t.default);var o=b(n);function n(t){var i;return g(this,n),(i=o.call(this,t)).gl=i.canvas.getContext("webgl"),i.gl?i:(console.error("Unable to initialize WebGL!"),p(i))}return c(n,[{key:"getWebGLViewport",value:function(){var t=this.currentXRange[1]-this.currentXRange[0],r=this.currentYRange[1]-this.currentYRange[0],e=(this.maxX-this.minX)/t*this.width,o=(this.maxY-this.minY)/r*this.height,s=(0,i.scale)([this.minX,this.maxX],[0,-e]),n=(0,i.scale)([this.minY,this.maxY],[0,-o]);return[s(this.currentXRange[0]),n(this.currentYRange[0]),e,o]}},{key:"animateSquares",value:function(){if(!this.needsAnimation)return this.lastFrame=requestAnimationFrame(this.animateSquares.bind(this)),void this.tick();this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT);var t=this.getWebGLViewport();this.gl.viewport(t[0],t[1],t[2],t[3]),this.gl.uniform4fv(this.programInfo.uniformLocations.viewport,this.gl.getParameter(this.gl.VIEWPORT)),this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertexCount),this.needsAnimation=!1,this.lastFrame=requestAnimationFrame(this.animateSquares.bind(this)),this.tick()}},{key:"renderSquares",value:function(){this.trueBoxWidth=(this.maxX-this.minX)/Math.sqrt(this.count.value),this.trueBoxHeight=(this.maxY-this.minY)/Math.sqrt(this.count.value),this.shaderProgram=(0,i.initShaderProgram)(this.gl,r.vertexShader,r.squaresFragmentShader),this.programInfo={program:this.shaderProgram,attribLocations:{vertexPosition:this.gl.getAttribLocation(this.shaderProgram,"aVertexPosition")},uniformLocations:{gridSize:this.gl.getUniformLocation(this.shaderProgram,"uGridSize"),viewport:this.gl.getUniformLocation(this.shaderProgram,"viewport")}},this.positionBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer);for(var t=(0,i.scale)([this.minX,this.maxX],[-1,1]),e=(0,i.scale)([this.minY,this.maxY],[-1,1]),o=[],s=this.minX;s<this.maxX;s+=this.trueBoxWidth)for(var n=this.minY;n<this.maxY;n+=this.trueBoxHeight)o.push(t(s),e(n),t(s+this.trueBoxWidth),e(n),t(s+this.trueBoxWidth),e(n+this.trueBoxHeight)),o.push(t(s),e(n),t(s),e(n+this.trueBoxHeight),t(s+this.trueBoxWidth),e(n+this.trueBoxHeight));this.vertexCount=o.length/2,this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(o),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexPosition),this.gl.useProgram(this.programInfo.program),this.gl.uniform1f(this.programInfo.uniformLocations.gridSize,Math.sqrt(this.count.value)/2),this.needsAnimation=!0,this.animateSquares()}},{key:"animateJittered",value:function(){if(!this.needsAnimation)return this.lastFrame=requestAnimationFrame(this.animateJittered.bind(this)),void this.tick();this.gl.disable(this.gl.BLEND),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT);var t=this.getWebGLViewport();this.gl.viewport(t[0],t[1],t[2],t[3]),this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertexCount),this.needsAnimation=!1,this.lastFrame=requestAnimationFrame(this.animateJittered.bind(this)),this.tick()}},{key:"renderJittered",value:function(){this.trueBoxWidth=(this.maxX-this.minX)/Math.sqrt(this.count.value),this.trueBoxHeight=(this.maxY-this.minY)/Math.sqrt(this.count.value);var t=(0,i.scale)([this.minX,this.maxX],[-1,1]),e=(0,i.scale)([this.minY,this.maxY],[-1,1]),o=function(r){var e=t(r-i.JITTER_FACTOR/2+Math.random()*i.JITTER_FACTOR);return e<-1?-1:e>1?1:e},s=function(t){var r=e(t-i.JITTER_FACTOR/2+Math.random()*i.JITTER_FACTOR);return r<-1?-1:r>1?1:r},n=(0,i.scale)([this.minX,this.maxX],[0,1]),a=(0,i.scale)([this.minY,this.maxY],[0,1]);this.shaderProgram=(0,i.initShaderProgram)(this.gl,r.colorPointsVertexShader,r.colorPointsFragmentShader),this.programInfo={program:this.shaderProgram,attribLocations:{vertexPosition:this.gl.getAttribLocation(this.shaderProgram,"aVertexPosition"),vertexColor:this.gl.getAttribLocation(this.shaderProgram,"aVertexColor")}};for(var h=[],l=[],u=this.minX;u<this.maxX;u+=this.trueBoxWidth)for(var f=this.minY;f<this.maxY;f+=this.trueBoxHeight)l.push(o(u),s(f),o(u+this.trueBoxWidth),s(f),o(u+this.trueBoxWidth),s(f+this.trueBoxHeight)),l.push(o(u),s(f),o(u),s(f+this.trueBoxHeight),o(u+this.trueBoxWidth),s(f+this.trueBoxHeight)),h.push(a(f),0,n(u),1),h.push(a(f),0,n(u),1),h.push(a(f),0,n(u),1),h.push(a(f),0,n(u),1),h.push(a(f),0,n(u),1),h.push(a(f),0,n(u),1);this.vertexCount=l.length/2,this.positionBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(l),this.gl.STATIC_DRAW),this.colorBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(h),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexPosition),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexColor,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexColor),this.gl.useProgram(this.programInfo.program),this.needsAnimation=!0,this.animateJittered()}},{key:"animateRandom",value:function(){if(!this.needsAnimation)return this.lastFrame=requestAnimationFrame(this.animateRandom.bind(this)),void this.tick();this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT);var t=this.getWebGLViewport();this.gl.viewport(t[0],t[1],t[2],t[3]),this.gl.drawArrays(this.gl.POINTS,0,this.count.value),this.needsAnimation=!1,this.lastFrame=requestAnimationFrame(this.animateRandom.bind(this)),this.tick()}},{key:"renderRandom",value:function(){this.shaderProgram=(0,i.initShaderProgram)(this.gl,r.colorPointsVertexShader,r.colorPointsFragmentShader),this.programInfo={program:this.shaderProgram,attribLocations:{vertexPosition:this.gl.getAttribLocation(this.shaderProgram,"aVertexPosition"),vertexColor:this.gl.getAttribLocation(this.shaderProgram,"aVertexColor")}};for(var t=[],e=0;e<this.count.value;e++)t.push(2*Math.random()-1,2*Math.random()-1);this.positionBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.STATIC_DRAW);for(var o=[],s=0;s<this.count.value;s++)o.push(Math.random(),Math.random(),Math.random(),1);this.colorBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(o),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexPosition),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexColor,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexColor),this.gl.useProgram(this.programInfo.program),this.lastFrame&&cancelAnimationFrame(this.lastFrame),this.needsAnimation=!0,this.animateRandom()}},{key:"animateTSNE",value:function(){if(!this.needsAnimation)return this.lastFrame=requestAnimationFrame(this.animateTSNE.bind(this)),void this.tick();this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_COLOR,this.gl.DST_COLOR),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT);var t=this.getWebGLViewport();this.gl.viewport(t[0],t[1],t[2],t[3]),this.gl.drawArrays(this.gl.POINTS,0,this.vertexCount),this.needsAnimation=!1,this.lastFrame=requestAnimationFrame(this.animateTSNE.bind(this)),this.tick()}},{key:"renderTSNE",value:function(){this.sampleColors=new Map("ABCDEFGHIJKLMNOPQRSTUVWXYZ012".split("").map(function(t){return[t,[Math.random(),Math.random(),Math.random(),.01]]})),this.xTSNEScale=(0,i.scale)([-10,10],[-1,1]),this.yTSNEScale=(0,i.scale)([-10,10],[-1,1]),this.shaderProgram=(0,i.initShaderProgram)(this.gl,r.colorPointsVertexShader,r.colorPointsFragmentShader),this.programInfo={program:this.shaderProgram,attribLocations:{vertexPosition:this.gl.getAttribLocation(this.shaderProgram,"aVertexPosition"),vertexColor:this.gl.getAttribLocation(this.shaderProgram,"aVertexColor")}};var t,e=[],o=[],n=l(this.csv);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.push(this.xTSNEScale(a.geometry.coordinates[0]),this.yTSNEScale(a.geometry.coordinates[1])),o.push.apply(o,s(this.sampleColors.get(a.sample)))}}catch(h){n.e(h)}finally{n.f()}this.vertexCount=e.length/2,this.positionBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(e),this.gl.STATIC_DRAW),this.colorBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(o),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexPosition),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.vertexAttribPointer(this.programInfo.attribLocations.vertexColor,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexColor),this.gl.useProgram(this.programInfo.program),this.lastFrame&&cancelAnimationFrame(this.lastFrame),this.needsAnimation=!0,this.animateTSNE()}}]),n}(),F=B;exports.default=F;
},{"./drawer":"q0ab","./utilities":"yjX3","./webgl.js":"0Cx4"}],"tZX4":[function(require,module,exports) {
"use strict";var t=n(require("./canvas-webgl-drawer")),e=require("./utilities");function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=p();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(e){f(r,t.default);var n=a(r);function r(){return o(this,r),n.apply(this,arguments)}return c(r,[{key:"tick",value:function(){postMessage({type:"tick"})}}]),r}();self.onmessage=(0,e.createMessanger)(b,self);
},{"./canvas-webgl-drawer":"QCvO","./utilities":"yjX3"}]},{},["tZX4"], null)
//# sourceMappingURL=offscreen-canvas-webgl-worker.198e19e2.js.map