parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S/qp":[function(require,module,exports) {
!function(t,n){"use strict";function e(t){return document.createElement(t)}function o(t,n){for(var e in n)try{t.style[e]=n[e]}catch(o){}return t}function a(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof t}function i(t,n){if("array"!==a(n))return-1;if(n.indexOf)return n.indexOf(t);for(var e=0,o=n.length;e<o;e++)if(n[e]===t)return e;return-1}function r(){var t=arguments;for(var n in t[1])if(t[1].hasOwnProperty(n))switch(a(t[1][n])){case"object":t[0][n]=r({},t[0][n],t[1][n]);break;case"array":t[0][n]=t[1][n].slice(0);break;default:t[0][n]=t[1][n]}return t.length>2?r.apply(null,[t[0]].concat(Array.prototype.slice.call(t,2))):t[0]}function h(t){return 1===(t=Math.round(255*t).toString(16)).length?"0"+t:t}function l(t,n,e,o){t.addEventListener?t[o?"removeEventListener":"addEventListener"](n,e,!1):t.attachEvent&&t[o?"detachEvent":"attachEvent"]("on"+n,e)}var s;!function(){var n=t.performance;if(n&&(n.now||n.webkitNow)){var e=n.now?"now":"webkitNow";s=n[e].bind(n)}else s=function(){return+new Date}}();var u=t.cancelAnimationFrame||t.cancelRequestAnimationFrame,c=t.requestAnimationFrame;!function(){for(var n=["moz","webkit","o"],e=0,o=0,a=n.length;o<a&&!u;++o)u=t[n[o]+"CancelAnimationFrame"]||t[n[o]+"CancelRequestAnimationFrame"],c=u&&t[n[o]+"RequestAnimationFrame"];u||(c=function(n){var o=s(),a=Math.max(0,16-(o-e));return e=o+a,t.setTimeout(function(){n(o+a)},a)},u=function(t){clearTimeout(t)})}();var p="string"===a(document.createElement("div").textContent)?"textContent":"innerText";function d(t,m){"object"===a(t)&&t.nodeType===n&&(m=t,t=document.body),t||(t=document.body);var x,b,v,w,y,k,O,S,F,C=this,M=r({},d.defaults,m||{}),z={},A=[],E=100,P=[],H=M.threshold,T=0,j=s()-H,I=[],q=[],D="fps"===M.show;function L(t,n,e,o){return b[0|t][Math.round(Math.min((n-e)/(o-e)*E,E))]}function R(){z.legend.fps!==D&&(z.legend.fps=D,z.legend[p]=D?"FPS":"ms"),O=D?C.fps:C.duration,z.count[p]=O>999?"999+":O.toFixed(O>99?0:M.decimals)}function B(){if(v=s(),j<v-M.threshold&&(C.fps-=C.fps/Math.max(1,60*M.smoothing/M.interval),C.duration=1e3/C.fps),function(){for(S=M.history;S--;)I[S]=0===S?C.fps:I[S-1],q[S]=0===S?C.duration:q[S-1]}(),R(),M.heat){if(P.length)for(S=P.length;S--;)P[S].el.style[x[P[S].name].heatOn]=D?L(x[P[S].name].heatmap,C.fps,0,M.maxFps):L(x[P[S].name].heatmap,C.duration,M.threshold,0);if(z.graph&&x.column.heatOn)for(S=A.length;S--;)A[S].style[x.column.heatOn]=D?L(x.column.heatmap,I[S],0,M.maxFps):L(x.column.heatmap,q[S],M.threshold,0)}if(z.graph)for(F=0;F<M.history;F++)A[F].style.height=(D?I[F]?Math.round(k/M.maxFps*Math.min(I[F],M.maxFps)):0:q[F]?Math.round(k/M.threshold*Math.min(q[F],M.threshold)):0)+"px"}function N(){M.interval<20?(w=c(N),B()):(w=setTimeout(N,M.interval),y=c(B))}function V(t){(t=t||window.event).preventDefault?(t.preventDefault(),t.stopPropagation()):(t.returnValue=!1,t.cancelBubble=!0),C.toggle()}function W(){M.toggleOn&&l(z.container,M.toggleOn,V,1),t.removeChild(z.container)}function G(){for(var n in z.container&&W(),function(){if(x=d.theme[M.theme],!(b=x.compiledHeatmaps||[]).length&&x.heatmaps.length){for(F=0;F<x.heatmaps.length;F++)for(b[F]=[],S=0;S<=E;S++)b[F][S]=(t=.33/E*S,n=x.heatmaps[F].saturation,e=x.heatmaps[F].lightness,o=void 0,a=void 0,i=void 0,r=void 0,l=void 0,s=void 0,u=void 0,0==(r=e<=.5?e*(1+n):e+n-e*n)?"#000":(u=r*((r-(l=2*e-r))/r)*((t*=6)-(s=Math.floor(t))),0===s||6===s?(o=r,a=l+u,i=l):1===s?(o=r-u,a=r,i=l):2===s?(o=l,a=r,i=l+u):3===s?(o=l,a=r-u,i=r):4===s?(o=l+u,a=l,i=r):(o=r,a=l,i=r-u),"#"+h(o)+h(a)+h(i)));x.compiledHeatmaps=b}var t,n,e,o,a,i,r,l,s,u}(),z.container=o(e("div"),x.container),z.count=z.container.appendChild(o(e("div"),x.count)),z.legend=z.container.appendChild(o(e("div"),x.legend)),z.graph=M.graph?z.container.appendChild(o(e("div"),x.graph)):0,P.length=0,z)z[n]&&x[n].heatOn&&P.push({name:n,el:z[n]});if(A.length=0,z.graph)for(z.graph.style.width=M.history*x.column.width+(M.history-1)*x.column.spacing+"px",S=0;S<M.history;S++)A[S]=z.graph.appendChild(o(e("div"),x.column)),A[S].style.position="absolute",A[S].style.bottom=0,A[S].style.right=S*x.column.width+S*x.column.spacing+"px",A[S].style.width=x.column.width+"px",A[S].style.height="0px";J(),R(),t.appendChild(z.container),z.graph&&(k=z.graph.clientHeight),M.toggleOn&&("click"===M.toggleOn&&(z.container.style.cursor="pointer"),l(z.container,M.toggleOn,V))}function J(){o(z.container,M)}C.options=M,C.fps=0,C.duration=0,C.isPaused=0,C.tickStart=function(){T=s()},C.tick=function(){v=s(),H+=(v-j-H)/M.smoothing,C.fps=1e3/H,C.duration=T<j?H:v-T,j=v},C.pause=function(){return w&&(C.isPaused=1,clearTimeout(w),u(w),u(y),w=y=0),C},C.resume=function(){return w||(C.isPaused=0,N()),C},C.set=function(t,n){return M[t]=n,D="fps"===M.show,-1!==i(t,g)&&G(),-1!==i(t,f)&&J(),C},C.showDuration=function(){return C.set("show","ms"),C},C.showFps=function(){return C.set("show","fps"),C},C.toggle=function(){return C.set("show",D?"ms":"fps"),C},C.hide=function(){return C.pause(),z.container.style.display="none",C},C.show=function(){return C.resume(),z.container.style.display="block",C},C.destroy=function(){C.pause(),W(),C.tick=C.tickStart=function(){}},G(),N()}d.extend=r,window.FPSMeter=d,d.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var g=["toggleOn","theme","heat","graph","history"],f=["position","zIndex","left","top","right","bottom","margin"]}(window),function(t,n,e){"use strict";n.theme={};var o=n.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};n.theme.dark=n.extend({},o,{heatmaps:[{saturation:.8,lightness:.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}}),n.theme.light=n.extend({},o,{heatmaps:[{saturation:.5,lightness:.5}],container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}}),n.theme.colorful=n.extend({},o,{heatmaps:[{saturation:.5,lightness:.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}}),n.theme.transparent=n.extend({},o,{heatmaps:[{saturation:.8,lightness:.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:.5}})}(window,FPSMeter);
},{}],"4nb4":[function(require,module,exports) {
"use strict";module.exports=function(r,n){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];return r.apply(n,t)}};
},{}],"zIVT":[function(require,module,exports) {
"use strict";var r=require("./helpers/bind"),t=Object.prototype.toString;function n(r){return"[object Array]"===t.call(r)}function e(r){return void 0===r}function o(r){return null!==r&&!e(r)&&null!==r.constructor&&!e(r.constructor)&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r)}function i(r){return"[object ArrayBuffer]"===t.call(r)}function u(r){return"undefined"!=typeof FormData&&r instanceof FormData}function c(r){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(r):r&&r.buffer&&r.buffer instanceof ArrayBuffer}function f(r){return"string"==typeof r}function a(r){return"number"==typeof r}function l(r){return null!==r&&"object"==typeof r}function s(r){if("[object Object]"!==t.call(r))return!1;var n=Object.getPrototypeOf(r);return null===n||n===Object.prototype}function p(r){return"[object Date]"===t.call(r)}function d(r){return"[object File]"===t.call(r)}function y(r){return"[object Blob]"===t.call(r)}function b(r){return"[object Function]"===t.call(r)}function j(r){return l(r)&&b(r.pipe)}function v(r){return"undefined"!=typeof URLSearchParams&&r instanceof URLSearchParams}function B(r){return r.replace(/^\s*/,"").replace(/\s*$/,"")}function m(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function g(r,t){if(null!=r)if("object"!=typeof r&&(r=[r]),n(r))for(var e=0,o=r.length;e<o;e++)t.call(null,r[e],e,r);else for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&t.call(null,r[i],i,r)}function A(){var r={};function t(t,e){s(r[e])&&s(t)?r[e]=A(r[e],t):s(t)?r[e]=A({},t):n(t)?r[e]=t.slice():r[e]=t}for(var e=0,o=arguments.length;e<o;e++)g(arguments[e],t);return r}function O(t,n,e){return g(n,function(n,o){t[o]=e&&"function"==typeof n?r(n,e):n}),t}function h(r){return 65279===r.charCodeAt(0)&&(r=r.slice(1)),r}module.exports={isArray:n,isArrayBuffer:i,isBuffer:o,isFormData:u,isArrayBufferView:c,isString:f,isNumber:a,isObject:l,isPlainObject:s,isUndefined:e,isDate:p,isFile:d,isBlob:y,isFunction:b,isStream:j,isURLSearchParams:v,isStandardBrowserEnv:m,forEach:g,merge:A,extend:O,trim:B,stripBOM:h};
},{"./helpers/bind":"4nb4"}],"RS1v":[function(require,module,exports) {
"use strict";var e=require("./../utils");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}module.exports=function(i,n,t){if(!n)return i;var a;if(t)a=t(n);else if(e.isURLSearchParams(n))a=n.toString();else{var c=[];e.forEach(n,function(i,n){null!=i&&(e.isArray(i)?n+="[]":i=[i],e.forEach(i,function(i){e.isDate(i)?i=i.toISOString():e.isObject(i)&&(i=JSON.stringify(i)),c.push(r(n)+"="+r(i))}))}),a=c.join("&")}if(a){var o=i.indexOf("#");-1!==o&&(i=i.slice(0,o)),i+=(-1===i.indexOf("?")?"?":"&")+a}return i};
},{"./../utils":"zIVT"}],"+GGk":[function(require,module,exports) {
"use strict";var t=require("./../utils");function e(){this.handlers=[]}e.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},e.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},e.prototype.forEach=function(e){t.forEach(this.handlers,function(t){null!==t&&e(t)})},module.exports=e;
},{"./../utils":"zIVT"}],"i7gz":[function(require,module,exports) {
"use strict";var r=require("./../utils");module.exports=function(t,u,e){return r.forEach(e,function(r){t=r(t,u)}),t};
},{"./../utils":"zIVT"}],"C9l1":[function(require,module,exports) {
"use strict";module.exports=function(t){return!(!t||!t.__CANCEL__)};
},{}],"TOXd":[function(require,module,exports) {
"use strict";var e=require("../utils");module.exports=function(t,r){e.forEach(t,function(e,o){o!==r&&o.toUpperCase()===r.toUpperCase()&&(t[r]=e,delete t[o])})};
},{"../utils":"zIVT"}],"obgR":[function(require,module,exports) {
"use strict";module.exports=function(e,i,s,t,n){return e.config=i,s&&(e.code=s),e.request=t,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e};
},{}],"0l+G":[function(require,module,exports) {
"use strict";var r=require("./enhanceError");module.exports=function(e,n,o,t,u){var a=new Error(e);return r(a,n,o,t,u)};
},{"./enhanceError":"obgR"}],"wZW9":[function(require,module,exports) {
"use strict";var t=require("./createError");module.exports=function(e,s,u){var a=u.config.validateStatus;u.status&&a&&!a(u.status)?s(t("Request failed with status code "+u.status,u.config,null,u.request,u)):e(u)};
},{"./createError":"0l+G"}],"OhlP":[function(require,module,exports) {
"use strict";var e=require("./../utils");module.exports=e.isStandardBrowserEnv()?{write:function(n,t,o,r,i,u){var s=[];s.push(n+"="+encodeURIComponent(t)),e.isNumber(o)&&s.push("expires="+new Date(o).toGMTString()),e.isString(r)&&s.push("path="+r),e.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};
},{"./../utils":"zIVT"}],"Ex+b":[function(require,module,exports) {
"use strict";module.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)};
},{}],"BTlr":[function(require,module,exports) {
"use strict";module.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e};
},{}],"d0lp":[function(require,module,exports) {
"use strict";var e=require("../helpers/isAbsoluteURL"),r=require("../helpers/combineURLs");module.exports=function(s,u){return s&&!e(u)?r(s,u):u};
},{"../helpers/isAbsoluteURL":"Ex+b","../helpers/combineURLs":"BTlr"}],"9T8H":[function(require,module,exports) {
"use strict";var e=require("./../utils"),t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];module.exports=function(r){var i,o,n,s={};return r?(e.forEach(r.split("\n"),function(r){if(n=r.indexOf(":"),i=e.trim(r.substr(0,n)).toLowerCase(),o=e.trim(r.substr(n+1)),i){if(s[i]&&t.indexOf(i)>=0)return;s[i]="set-cookie"===i?(s[i]?s[i]:[]).concat([o]):s[i]?s[i]+", "+o:o}}),s):s};
},{"./../utils":"zIVT"}],"1DmB":[function(require,module,exports) {
"use strict";var t=require("./../utils");module.exports=t.isStandardBrowserEnv()?function(){var r,e=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function a(t){var r=t;return e&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return r=a(window.location.href),function(e){var o=t.isString(e)?a(e):e;return o.protocol===r.protocol&&o.host===r.host}}():function(){return!0};
},{"./../utils":"zIVT"}],"7LYE":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./../core/settle"),t=require("./../helpers/cookies"),s=require("./../helpers/buildURL"),o=require("../core/buildFullPath"),n=require("./../helpers/parseHeaders"),a=require("./../helpers/isURLSameOrigin"),i=require("../core/createError");module.exports=function(u){return new Promise(function(l,d){var p=u.data,c=u.headers;e.isFormData(p)&&delete c["Content-Type"];var f=new XMLHttpRequest;if(u.auth){var h=u.auth.username||"",m=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";c.Authorization="Basic "+btoa(h+":"+m)}var w=o(u.baseURL,u.url);if(f.open(u.method.toUpperCase(),s(w,u.params,u.paramsSerializer),!0),f.timeout=u.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in f?n(f.getAllResponseHeaders()):null,t={data:u.responseType&&"text"!==u.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:e,config:u,request:f};r(l,d,t),f=null}},f.onabort=function(){f&&(d(i("Request aborted",u,"ECONNABORTED",f)),f=null)},f.onerror=function(){d(i("Network Error",u,null,f)),f=null},f.ontimeout=function(){var e="timeout of "+u.timeout+"ms exceeded";u.timeoutErrorMessage&&(e=u.timeoutErrorMessage),d(i(e,u,"ECONNABORTED",f)),f=null},e.isStandardBrowserEnv()){var R=(u.withCredentials||a(w))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;R&&(c[u.xsrfHeaderName]=R)}if("setRequestHeader"in f&&e.forEach(c,function(e,r){void 0===p&&"content-type"===r.toLowerCase()?delete c[r]:f.setRequestHeader(r,e)}),e.isUndefined(u.withCredentials)||(f.withCredentials=!!u.withCredentials),u.responseType)try{f.responseType=u.responseType}catch(T){if("json"!==u.responseType)throw T}"function"==typeof u.onDownloadProgress&&f.addEventListener("progress",u.onDownloadProgress),"function"==typeof u.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",u.onUploadProgress),u.cancelToken&&u.cancelToken.promise.then(function(e){f&&(f.abort(),d(e),f=null)}),p||(p=null),f.send(p)})};
},{"./../utils":"zIVT","./../core/settle":"wZW9","./../helpers/cookies":"OhlP","./../helpers/buildURL":"RS1v","../core/buildFullPath":"d0lp","./../helpers/parseHeaders":"9T8H","./../helpers/isURLSameOrigin":"1DmB","../core/createError":"0l+G"}],"rH1J":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"T2kP":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=require("./utils"),r=require("./helpers/normalizeHeaderName"),n={"Content-Type":"application/x-www-form-urlencoded"};function a(e,r){!t.isUndefined(e)&&t.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function i(){var t;return"undefined"!=typeof XMLHttpRequest?t=require("./adapters/xhr"):void 0!==e&&"[object process]"===Object.prototype.toString.call(e)&&(t=require("./adapters/http")),t}var o={adapter:i(),transformRequest:[function(e,n){return r(n,"Accept"),r(n,"Content-Type"),t.isFormData(e)||t.isArrayBuffer(e)||t.isBuffer(e)||t.isStream(e)||t.isFile(e)||t.isBlob(e)?e:t.isArrayBufferView(e)?e.buffer:t.isURLSearchParams(e)?(a(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):t.isObject(e)?(a(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};t.forEach(["delete","get","head"],function(e){o.headers[e]={}}),t.forEach(["post","put","patch"],function(e){o.headers[e]=t.merge(n)}),module.exports=o;
},{"./utils":"zIVT","./helpers/normalizeHeaderName":"TOXd","./adapters/xhr":"7LYE","./adapters/http":"7LYE","process":"rH1J"}],"U2+V":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./transformData"),a=require("../cancel/isCancel"),t=require("../defaults");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}module.exports=function(n){return s(n),n.headers=n.headers||{},n.data=r(n.data,n.headers,n.transformRequest),n.headers=e.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),e.forEach(["delete","get","head","post","put","patch","common"],function(e){delete n.headers[e]}),(n.adapter||t.adapter)(n).then(function(e){return s(n),e.data=r(e.data,e.headers,n.transformResponse),e},function(e){return a(e)||(s(n),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,n.transformResponse))),Promise.reject(e)})};
},{"./../utils":"zIVT","./transformData":"i7gz","../cancel/isCancel":"C9l1","../defaults":"T2kP"}],"Qj6T":[function(require,module,exports) {
"use strict";var e=require("../utils");module.exports=function(n,t){t=t||{};var r={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(n,t){return e.isPlainObject(n)&&e.isPlainObject(t)?e.merge(n,t):e.isPlainObject(t)?e.merge({},t):e.isArray(t)?t.slice():t}function d(o){e.isUndefined(t[o])?e.isUndefined(n[o])||(r[o]=c(void 0,n[o])):r[o]=c(n[o],t[o])}e.forEach(o,function(n){e.isUndefined(t[n])||(r[n]=c(void 0,t[n]))}),e.forEach(i,d),e.forEach(a,function(o){e.isUndefined(t[o])?e.isUndefined(n[o])||(r[o]=c(void 0,n[o])):r[o]=c(void 0,t[o])}),e.forEach(s,function(e){e in t?r[e]=c(n[e],t[e]):e in n&&(r[e]=c(void 0,n[e]))});var f=o.concat(i).concat(a).concat(s),u=Object.keys(n).concat(Object.keys(t)).filter(function(e){return-1===f.indexOf(e)});return e.forEach(u,d),r};
},{"../utils":"zIVT"}],"9RB6":[function(require,module,exports) {
"use strict";var e=require("./../utils"),t=require("../helpers/buildURL"),r=require("./InterceptorManager"),o=require("./dispatchRequest"),s=require("./mergeConfig");function i(e){this.defaults=e,this.interceptors={request:new r,response:new r}}i.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},i.prototype.getUri=function(e){return e=s(this.defaults,e),t(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},e.forEach(["delete","get","head","options"],function(e){i.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}}),e.forEach(["post","put","patch"],function(e){i.prototype[e]=function(t,r,o){return this.request(s(o||{},{method:e,url:t,data:r}))}}),module.exports=i;
},{"./../utils":"zIVT","../helpers/buildURL":"RS1v","./InterceptorManager":"+GGk","./dispatchRequest":"U2+V","./mergeConfig":"Qj6T"}],"RlDD":[function(require,module,exports) {
"use strict";function t(t){this.message=t}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,module.exports=t;
},{}],"/VWB":[function(require,module,exports) {
"use strict";var e=require("./Cancel");function n(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(e){o=e});var r=this;n(function(n){r.reason||(r.reason=new e(n),o(r.reason))})}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(n){e=n}),cancel:e}},module.exports=n;
},{"./Cancel":"RlDD"}],"Kbjq":[function(require,module,exports) {
"use strict";module.exports=function(n){return function(t){return n.apply(null,t)}};
},{}],"NLsH":[function(require,module,exports) {
"use strict";module.exports=function(o){return"object"==typeof o&&!0===o.isAxiosError};
},{}],"HXpE":[function(require,module,exports) {
"use strict";var e=require("./utils"),r=require("./helpers/bind"),i=require("./core/Axios"),n=require("./core/mergeConfig"),u=require("./defaults");function o(n){var u=new i(n),o=r(i.prototype.request,u);return e.extend(o,i.prototype,u),e.extend(o,u),o}var l=o(u);l.Axios=i,l.create=function(e){return o(n(l.defaults,e))},l.Cancel=require("./cancel/Cancel"),l.CancelToken=require("./cancel/CancelToken"),l.isCancel=require("./cancel/isCancel"),l.all=function(e){return Promise.all(e)},l.spread=require("./helpers/spread"),l.isAxiosError=require("./helpers/isAxiosError"),module.exports=l,module.exports.default=l;
},{"./utils":"zIVT","./helpers/bind":"4nb4","./core/Axios":"9RB6","./core/mergeConfig":"Qj6T","./defaults":"T2kP","./cancel/Cancel":"RlDD","./cancel/CancelToken":"/VWB","./cancel/isCancel":"C9l1","./helpers/spread":"Kbjq","./helpers/isAxiosError":"NLsH"}],"uj17":[function(require,module,exports) {
module.exports=require("./lib/axios");
},{"./lib/axios":"HXpE"}],"DQ4o":[function(require,module,exports) {
module.exports="tsne.a2fc1183.csv";
},{}],"9Vg0":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("fpsmeter");var h=require("axios"),g=function(){function t(){u(this,t),this.content=document.querySelector(".content"),this.countLinks=this.content.querySelectorAll(".selector > a"),this.canvas=document.createElement("canvas"),this.width=Math.min(this.content.clientWidth,1e3),this.height=.75*this.content.clientHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.mouseReader=this.canvas,this.controls={lockedX:!1,lockedY:!1},this.minX=-2e3,this.maxX=2e3,this.minY=-2e3,this.maxY=2e3,this.currentXRange=[-100,100],this.currentYRange=[-100,100],this.needsAnimation=!0,this.initFpsmeter(),this.initSettings(),this.initControls()}return d(t,[{key:"addToDOM",value:function(e,t){var n=this;this.drawer=new e(c({canvas:this.canvas},this.getState()),t),this.drawer.tick=function(){return n.meter.tick()},this.content.appendChild(this.canvas)}},{key:"initFpsmeter",value:function(){this.meter=new window.FPSMeter(this.content,{graph:1,heat:1,theme:"light",history:25,top:"-10px",left:"".concat(this.width,"px"),transform:"translateX(-100%)"})}},{key:"initSettings",value:function(){var e=this,t=JSON.parse(localStorage.getItem("count"));this.count=t||{index:0,value:1e3},localStorage.setItem("count",JSON.stringify(this.count)),this.countLinks.forEach(function(t,n){e.countLinks[e.count.index].classList.toggle("selected",!0),t.addEventListener("click",function(r){r.preventDefault(),r.stopPropagation(),e.countLinks[e.count.index].classList.toggle("selected",!1),e.count={index:n,value:parseInt(t.innerText)},e.countLinks[e.count.index].classList.toggle("selected",!0),localStorage.setItem("count",JSON.stringify(e.count)),e.sendDrawerState(),e.forceDrawerRender()})});var n=JSON.parse(localStorage.getItem("controls"));this.controls=n||{lockedX:!1,lockedY:!1},localStorage.setItem("controls",JSON.stringify(this.controls)),document.getElementById("lock-x").checked=this.controls.lockedX,document.getElementById("lock-y").checked=this.controls.lockedY,document.querySelector("#lock-x").addEventListener("change",function(t){e.controls.lockedX=t.target.checked,localStorage.setItem("controls",JSON.stringify(e.controls)),e.sendDrawerState()}),document.querySelector("#lock-y").addEventListener("change",function(t){e.controls.lockedY=t.target.checked,localStorage.setItem("controls",JSON.stringify(e.controls)),e.sendDrawerState()});var r=JSON.parse(localStorage.getItem("dataset"));this.dataset=r||"squares",localStorage.setItem("dataset",JSON.stringify(this.dataset)),document.getElementById("dataset").value=this.dataset,document.querySelector(".selector").style.display="tsne"===this.dataset?"none":"initial","tsne"===this.dataset&&this.loadCsv(),document.querySelector("#dataset").addEventListener("change",function(t){e.dataset=t.target.value,localStorage.setItem("dataset",JSON.stringify(e.dataset)),document.querySelector(".selector").style.display="tsne"===e.dataset?"none":"initial","tsne"===e.dataset&&e.loadCsv(),e.sendDrawerState(),e.forceDrawerRender()})}},{key:"initControls",value:function(){var t=this;this.mouseReader.addEventListener("wheel",function(n){if(!t.controls.lockedX){var r=e(t.currentXRange);t.currentXRange[0]-=n.wheelDelta/50,t.currentXRange[1]+=n.wheelDelta/50,t.currentXRange[0]=Math.max(t.currentXRange[0],t.minX),t.currentXRange[1]=Math.min(t.currentXRange[1],t.maxX),t.currentXRange[1]<t.currentXRange[0]&&(t.currentXRange=r)}if(!t.controls.lockedY){var a=e(t.currentYRange);t.currentYRange[0]-=n.wheelDelta/50,t.currentYRange[1]+=n.wheelDelta/50,t.currentYRange[0]=Math.max(t.currentYRange[0],t.minY),t.currentYRange[1]=Math.min(t.currentYRange[1],t.maxY),t.currentYRange[1]<t.currentYRange[0]&&(t.currentYRange=a)}return t.needsAnimation=!0,t.updateSelectionWindowDisplay(),t.sendDrawerState(),!1},!1),this.isMoving=!1,this.mouseReader.addEventListener("mousedown",function(e){t.isMoving=!0},!1),this.mouseReader.addEventListener("mousemove",function(n){if(!t.isMoving)return!1;if(!t.controls.lockedX){var r=e(t.currentXRange);t.currentXRange[0]-=n.movementX,t.currentXRange[1]-=n.movementX,t.currentXRange[0]=Math.max(t.currentXRange[0],t.minX),t.currentXRange[1]=Math.min(t.currentXRange[1],t.maxX),t.currentXRange[1]<t.currentXRange[0]&&(t.currentXRange=r)}if(!t.controls.lockedY){var a=e(t.currentYRange);t.currentYRange[0]-=n.movementY,t.currentYRange[1]-=n.movementY,t.currentYRange[0]=Math.max(t.currentYRange[0],t.minY),t.currentYRange[1]=Math.min(t.currentYRange[1],t.maxY),t.currentYRange[1]<t.currentYRange[0]&&(t.currentYRange=a)}t.needsAnimation=!0,t.sendDrawerState(),t.updateSelectionWindowDisplay()},!1),this.mouseReader.addEventListener("mouseup",function(e){t.isMoving=!1}),this.mouseReader.addEventListener("mouseleave",function(e){t.isMoving=!1})}},{key:"updateSelectionWindowDisplay",value:function(){document.querySelector(".selection-window").textContent="[".concat(this.currentXRange[0].toFixed(2),", ").concat(this.currentXRange[1].toFixed(2),"] x [").concat(this.currentYRange[0].toFixed(2),", ").concat(this.currentYRange[1].toFixed(2),"]")}},{key:"sendDrawerState",value:function(){this.drawer.receiveState(c({},this.getState()))}},{key:"loadCsv",value:function(){var e=this;this.csv||(this.csv=[],h.get(require("../data/tsne.csv")).then(function(t){t.data.split("\n").forEach(function(t){var n=t.split(",");n[0]&&e.csv.push({geometry:{coordinates:[parseFloat(n[1]),parseFloat(n[2])]},sample:n[0]})}),e.csv.shift(),e.sendDrawerState(),e.hasSentCSV=!0,e.forceDrawerRender()}))}},{key:"getState",value:function(){var e={minX:this.minX,maxX:this.maxX,minY:this.minY,maxY:this.maxY,controls:this.controls,currentXRange:this.currentXRange,currentYRange:this.currentYRange,count:this.count,dataset:this.dataset};return this.hasSentCSV||(e.csv=this.csv),e}},{key:"forceDrawerRender",value:function(){this.drawer.render()}}]),t}(),m=g;exports.default=m;
},{"fpsmeter":"S/qp","axios":"uj17","../data/tsne.csv":"DQ4o"}],"gkni":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./handler"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=b();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(t){s(n,e.default);var r=l(n);function n(){var e;return c(this,n),(e=r.call(this)).mouseReader=document.createElement("div"),e.canvas.style.position="absolute",e.mouseReader.id="mouse-reader",e.initControls(),e}return a(n,[{key:"addToDOM",value:function(e){var t=this;this.content.appendChild(this.canvas),this.content.appendChild(this.mouseReader),this.offscreenCanvas=this.canvas.transferControlToOffscreen(),this.worker=e,this.worker.postMessage(o({type:"init",canvas:this.offscreenCanvas},this.getState()),[this.offscreenCanvas]),this.worker.onmessage=function(e){"tick"===e.data.type&&t.meter.tick()}}},{key:"sendDrawerState",value:function(){this.worker.postMessage(o({type:"state"},this.getState()))}},{key:"forceDrawerRender",value:function(){this.worker.postMessage(o({type:"render"},this.getState()))}}]),n}(),v=d;exports.default=v;
},{"./handler":"9Vg0"}],"ixbG":[function(require,module,exports) {
"use strict";var e=r(require("./offscreen-handler"));function r(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){var r=new e.default;r.addToDOM(new Worker("offscreen-pixi-worker.e7bc95cc.js")),r.forceDrawerRender()});
},{"./offscreen-handler":"gkni","./offscreen-pixi-worker.js":[["offscreen-pixi-worker.e7bc95cc.js","erHE"],"offscreen-pixi-worker.e7bc95cc.js.map","erHE"]}]},{},["ixbG"], null)
//# sourceMappingURL=offscreen-pixi.f3405698.js.map