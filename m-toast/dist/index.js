!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t.aj=t.aj||{},t.aj.toast=n())}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n){return t(n={exports:{}},n.exports),n.exports}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}}(),a="object"==o(t)&&t&&t.Object===Object&&t,r="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,c=a||r||Function("return this")(),i=c.Symbol,u=Object.prototype,s=u.hasOwnProperty,l=u.toString,f=i?i.toStringTag:void 0;var p=function(t){var n=s.call(t,f),e=t[f];try{t[f]=void 0}catch(t){}var r=l.call(t);return n?t[f]=e:delete t[f],r},d=Object.prototype.toString;var b=function(t){return d.call(t)},y=i?i.toStringTag:void 0;var v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?p(t):b(t)};var Q=function(t){var n=void 0===t?"undefined":o(t);return null!=t&&("object"==n||"function"==n)};var B,m=function(t){if(!Q(t))return!1;var n=v(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},U=c["__core-js_shared__"],g=(B=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"";var j=function(t){return!!g&&g in t},F=Function.prototype.toString;var h=function(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""},E=/^\[object .+?Constructor\]$/,w=Function.prototype,_=Object.prototype,x=w.toString,O=_.hasOwnProperty,A=RegExp("^"+x.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var S=function(t){return!(!Q(t)||j(t))&&(m(t)?A:E).test(h(t))};var N=function(t,n){return null==t?void 0:t[n]};var k=function(t,n){var e=N(t,n);return S(e)?e:void 0},R=function(){try{var t=k(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var T=function(t,n,e){"__proto__"==n&&R?R(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e};var D=function(t,n){return t===n||t!=t&&n!=n},V=Object.prototype.hasOwnProperty;var C=function(t,n,e){var r=t[n];V.call(t,n)&&D(r,e)&&(void 0!==e||n in t)||T(t,n,e)};var M=function(t,n,e,r){var o=!e;e||(e={});for(var i=-1,a=n.length;++i<a;){var c=n[i],u=r?r(e[c],t[c],c,e,t):void 0;void 0===u&&(u=t[c]),o?T(e,c,u):C(e,c,u)}return e};var J=function(t){return t};var L=function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)},z=Math.max;var I=function(i,a,c){return a=z(void 0===a?i.length-1:a,0),function(){for(var t=arguments,n=-1,e=z(t.length-a,0),r=Array(e);++n<e;)r[n]=t[a+n];n=-1;for(var o=Array(a+1);++n<a;)o[n]=t[n];return o[a]=c(r),L(i,this,o)}};var G=function(t){return function(){return t}},P=R?function(t,n){return R(t,"toString",{configurable:!0,enumerable:!1,value:G(n),writable:!0})}:J,X=Date.now;var Z=function(e){var r=0,o=0;return function(){var t=X(),n=16-(t-o);if(o=t,0<n){if(800<=++r)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}(P);var W=function(t,n){return Z(I(t,n,J),t+"")};var q=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991};var H=function(t){return null!=t&&q(t.length)&&!m(t)},K=/^(?:0|[1-9]\d*)$/;var Y=function(t,n){var e=void 0===t?"undefined":o(t);return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&K.test(t))&&-1<t&&t%1==0&&t<n};var $=function(t,n,e){if(!Q(e))return!1;var r=void 0===n?"undefined":o(n);return!!("number"==r?H(e)&&Y(n,e.length):"string"==r&&n in e)&&D(e[n],t)};var tt=function(c){return W(function(t,n){var e=-1,r=n.length,o=1<r?n[r-1]:void 0,i=2<r?n[2]:void 0;for(o=3<c.length&&"function"==typeof o?(r--,o):void 0,i&&$(n[0],n[1],i)&&(o=r<3?void 0:o,r=1),t=Object(t);++e<r;){var a=n[e];a&&c(t,a,e,o)}return t})},nt=Object.prototype;var et=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||nt)};var rt=function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r};var ot=function(t){return null!=t&&"object"==(void 0===t?"undefined":o(t))};var it=function(t){return ot(t)&&"[object Arguments]"==v(t)},at=Object.prototype,ct=at.hasOwnProperty,ut=at.propertyIsEnumerable,st=it(function(){return arguments}())?it:function(t){return ot(t)&&ct.call(t,"callee")&&!ut.call(t,"callee")},lt=Array.isArray;var ft=function(){return!1},pt=n(function(t,n){var e=n&&!n.nodeType&&n,r=e&&t&&!t.nodeType&&t,o=r&&r.exports===e?c.Buffer:void 0,i=(o?o.isBuffer:void 0)||ft;t.exports=i}),dt={};dt["[object Float32Array]"]=dt["[object Float64Array]"]=dt["[object Int8Array]"]=dt["[object Int16Array]"]=dt["[object Int32Array]"]=dt["[object Uint8Array]"]=dt["[object Uint8ClampedArray]"]=dt["[object Uint16Array]"]=dt["[object Uint32Array]"]=!0,dt["[object Arguments]"]=dt["[object Array]"]=dt["[object ArrayBuffer]"]=dt["[object Boolean]"]=dt["[object DataView]"]=dt["[object Date]"]=dt["[object Error]"]=dt["[object Function]"]=dt["[object Map]"]=dt["[object Number]"]=dt["[object Object]"]=dt["[object RegExp]"]=dt["[object Set]"]=dt["[object String]"]=dt["[object WeakMap]"]=!1;var bt=function(t){return ot(t)&&q(t.length)&&!!dt[v(t)]};var yt=function(n){return function(t){return n(t)}},vt=n(function(t,n){var e=n&&!n.nodeType&&n,r=e&&t&&!t.nodeType&&t,o=r&&r.exports===e&&a.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),Qt=vt&&vt.isTypedArray,Bt=Qt?yt(Qt):bt,mt=Object.prototype.hasOwnProperty;var Ut=function(t,n){var e=lt(t),r=!e&&st(t),o=!e&&!r&&pt(t),i=!e&&!r&&!o&&Bt(t),a=e||r||o||i,c=a?rt(t.length,String):[],u=c.length;for(var s in t)!n&&!mt.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Y(s,u))||c.push(s);return c};var gt=function(n,e){return function(t){return n(e(t))}},jt=gt(Object.keys,Object),Ft=Object.prototype.hasOwnProperty;var ht=function(t){if(!et(t))return jt(t);var n=[];for(var e in Object(t))Ft.call(t,e)&&"constructor"!=e&&n.push(e);return n};var Et=function(t){return H(t)?Ut(t):ht(t)},wt=Object.prototype.hasOwnProperty,_t=tt(function(t,n){if(et(n)||H(n))M(n,Et(n),t);else for(var e in n)wt.call(n,e)&&C(t,e,n[e])});var xt=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n},Ot=Object.prototype.hasOwnProperty;var At=function(t){if(!Q(t))return xt(t);var n=et(t),e=[];for(var r in t)("constructor"!=r||!n&&Ot.call(t,r))&&e.push(r);return e};var St=function(t){return H(t)?Ut(t,!0):At(t)},Nt=tt(function(t,n,e,r){M(n,St(n),t,r)}),kt=gt(Object.getPrototypeOf,Object),Rt=Function.prototype,Tt=Object.prototype,Dt=Rt.toString,Vt=Tt.hasOwnProperty,Ct=Dt.call(Object);var Mt=function(t){if(!ot(t)||"[object Object]"!=v(t))return!1;var n=kt(t);if(null===n)return!0;var e=Vt.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&Dt.call(e)==Ct};var Jt=function(t){if(!ot(t))return!1;var n=v(t);return"[object Error]"==n||"[object DOMException]"==n||"string"==typeof t.message&&"string"==typeof t.name&&!Mt(t)},Lt=W(function(t,n){try{return L(t,void 0,n)}catch(t){return Jt(t)?t:new Error(t)}});var zt=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o};var It=function(n,t){return zt(t,function(t){return n[t]})},Gt=Object.prototype,Pt=Gt.hasOwnProperty;var Xt=function(t,n,e,r){return void 0===t||D(t,Gt[e])&&!Pt.call(r,e)?n:t},Zt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};var Wt=function(t){return"\\"+Zt[t]},qt=/<%=([\s\S]+?)%>/g;var Ht=function(n){return function(t){return null==n?void 0:n[t]}}({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});var Kt=function(t){return"symbol"==(void 0===t?"undefined":o(t))||ot(t)&&"[object Symbol]"==v(t)},Yt=1/0,$t=i?i.prototype:void 0,tn=$t?$t.toString:void 0;var nn=function t(n){if("string"==typeof n)return n;if(lt(n))return zt(n,t)+"";if(Kt(n))return tn?tn.call(n):"";var e=n+"";return"0"==e&&1/n==-Yt?"-0":e};var en=function(t){return null==t?"":nn(t)},rn=/[&<>"']/g,on=RegExp(rn.source);var an={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:qt,variable:"",imports:{_:{escape:function(t){return(t=en(t))&&on.test(t)?t.replace(rn,Ht):t}}}},cn=/\b__p \+= '';/g,un=/\b(__p \+=) '' \+/g,sn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ln=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fn=/($^)/,pn=/['\n\r\u2028\u2029\\]/g;var dn=function(a,t,n){var e=an.imports._.templateSettings||an;n&&$(a,t,n)&&(t=void 0),a=en(a),t=Nt({},t,e,Xt);var c,u,r=Nt({},t.imports,e.imports,Xt),o=Et(r),i=It(r,o),s=0,l=t.interpolate||fn,f="__p += '",p=RegExp((t.escape||fn).source+"|"+l.source+"|"+(l===qt?ln:fn).source+"|"+(t.evaluate||fn).source+"|$","g"),d="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";a.replace(p,function(t,n,e,r,o,i){return e||(e=r),f+=a.slice(s,i).replace(pn,Wt),n&&(c=!0,f+="' +\n__e("+n+") +\n'"),o&&(u=!0,f+="';\n"+o+";\n__p += '"),e&&(f+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),s=i+t.length,t}),f+="';\n";var b=t.variable;b||(f="with (obj) {\n"+f+"\n}\n"),f=(u?f.replace(cn,""):f).replace(un,"$1").replace(sn,"$1;"),f="function("+(b||"obj")+") {\n"+(b?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(c?", __e = _.escape":"")+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var y=Lt(function(){return Function(o,d+"return "+f).apply(void 0,i)});if(y.source=f,Jt(y))throw y;return y};var bn={"aj-toast":"index_aj-toast__1nS9S",body:"index_body__3tmbX",icon:"index_icon__1Gg7l",rotate:"index_rotate__2NMsB",msg:"index_msg__I1lMU"};!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===e&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}("/*\n * @Author: ApathyJade <apathyjade@outlook.com>\n * @Version: 0.0.1\n * @Date: 2018-06-08 11:07:09\n * @Last Modified by:   xinyu.wang\n * @Last Modified Time: 2018-06-08 11:07:09\n */\n.index_aj-toast__1nS9S {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.index_aj-toast__1nS9S[aj-fade] {\n  background-color: rgba(35,35,35,0);\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.index_aj-toast__1nS9S[aj-fade] .index_body__3tmbX {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.index_aj-toast__1nS9S .index_body__3tmbX {\n  padding: 0.48rem 0.48rem;\n  max-width: 90%;\n  min-width: 1.2rem;\n  line-height: 0.45rem;\n  border-radius: 0.16rem;\n  color: #fff;\n  font-size: 0.32rem;\n  background-color: rgba(53,53,53,0.8);\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.index_aj-toast__1nS9S .index_icon__1Gg7l {\n  display: block;\n  margin: 0 auto 0.16rem;\n  width: 0.6rem;\n  height: 0.6rem;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAAN3RSTlMAC0cyXCAuBZ1wdPPfsx0HybBgoYbwWLf3iTYZ3MZEmUuMguJ3bcvOERVAwigk2FU5ulBnkqnmv4/ScgAABmlJREFUaN7t1213mjAUwPELqNFuaqvWVl1VKE5AKD7u+3+0JSExCQ8KyZlv1r/bXuzs9Nd7r3QtaDfa/fmzG8GjW/R/kF77C3hsbz8y+PUFHtroncOvj9327v3HO4MP8MhexcSf8MjecRTGwT8J4RrDA/889jpG7BCH6Wbw5OfnT5xv4FpDJjeBvU/s4n7N9F2LyU3gI3Ep/MvRhIcWjo1cG7Z+C3ilCVsSjOrC/mcG/8IdTOFhfXjwC7scfjaAhVwPXhGXw2/aN6Y1gfefMtwDo5EtduUaMDpIF/7aBrowEnI9uEVdDo8AjEfm8m042HKXdED6MGoGe3zRtAh45ldW4fccnPyUL9wF+AfyOyk/8Vi5cAIi40fq5sRLyf368sEwBUY3JkY7edHPlimMSnf9Kib+hKzTpwxPwbjSZ3knJj6wR+lLvnAfmcOoTD6JiUdA8/+QifmF942EIFyEVsnIAZPlZR/4xC98BwTmiz4XP8ho3L9M4jI3GAwWpCJdBi/esi8gLwvI4psm824H+ZnS3W/c87Nf5jJ4EQ4rHykBF35o20lwD9Tml+02g59PhT1j90oHKL9sIUNFYwyzRe/UpQ1cxtKS/MAMxq/ivpFYNlQ1Fxc+gpS1ed5K8Ed+G2G7jV0xdajQ1n0Yzvwd7YHU8cBQnluE2xxmNCosG7s38ui8itsZK9M+f3x8ePlVt2mcLp56iF24neONz35bGmbCWRaBN6CG2pK84Fmg3/D0sVXmpe0GUNg1T750ONR1l2+EZaiAfYD7MqU1h+5taeK6zEVQzJJlbod66/bFkiW4v4bygtJ1o+buQFxXTLvbVM+AFkVaZ+QnwqrT7twB3MoaCJrJQXPYpTBFWZc93Cto56YOm8Mryopp39I690KhSmtM7Cvz7p6Cus/+IkkErfEoO5zd4c4J1M9qX+VA63G6TnuJoFlBkk0dgk5olk17aDXalzi1/lfr+fnlcNmE8N13/1dB0ikWJwEYtz73D7Q3qZezDSTE2GJtZDjQTJBqEzIUdZ1y2QyeZUrR7vcnACFWievkXjSjbdvcUVH6u29D7IgUmfxKTGCXEFW50HEqokObwC8EeGOvvvSb/HEBp7q545jAl/6NLnjVN4qNVn0LdiHEk/FXodAEtl9uZAPE1XIMRnnVrgcAKOZOwTX9AuJVugGQwljMup/vs+adEIxbzi5F9TKz4bvv/q9QGz9b+v8xxj13NUstaNwgyurouacxrbtG0KhgHkVLmh3ruNNxd5zlNvnMrU4UXWFbY9tJt9u90v6i7nETgeJ0Rm51iczrtmqdeiFNS5s3h3sElqZeLWscd8lQ1nrtaLy1VjgO0ybxveMuC7DGqlMKE1ngm/DWcTnKVZLGsxhil9Fi6m46rDjuvjAtSetBbhGWwFTm77TzHkqKBcpY5mo1xXLJ1K1ytwjbA9BsPluVTT2CXFYepZl81zU8nsXMRKVwNwS1pAR2LOkTc/bRve9228fT6Cj9m/DEZpannoJax86PG8mMk05xrfktdz2bzVzXTeX7eav81CdQc64qfpHjtpVPi7LTViuqdtMJhVUZIpdNzeuBWpx7LyNlh9m8uNGics/eZMJoZS9WulKmzq86YCyF5xbIofWUwaPRsvLJFbA3BLnFRn5/twuPk3rc4qKpO0qlv91sWuIp73keh911/gN415lTKNQhMD+uuiwJbvG/PG56vaenpylfju9heTahsBuAGlqeM3gEJQVOZEfxEPLtxaLFxNilsM9vtiEwn7n48a2j53qbBBoUUpbDDjvMhsJEZtuOZNhNwDybwszl30ukHPb9ERvJJzCnn8zdhLBXmI0HJzExN/Yy7O5NXXQkMHdTxC8qYJ//y568bM8yhJ2pDA+gGoZEufLRzLWm8oVtuAVDS172LDSCI+XCwW04VK58MnEXyqL3IMG9Igw2XzalYwN4jdkr3Bregy1fhn1k8igxlhTDPRjmyrIjXXeYyvAR7sOwwbDZIyX+V+Lyog7cVq5sa8K2fOEl1IFhmsFmXziP8oWtenDAr0zyNOG1BDtQD4alBPuacNS6ulNUF0bSIzXShAMBJ1AXho5Ydhs023N4D/VhWHM4Be2cChewWwnD0aPwGgwK5svIsQDqTCwK7OloPYB/kDrxIzsJuAePbCrgFjyyjoA78NBSDk/hsVlpBqcWPDTxQ5tufwF4lj3yRNFMagAAAABJRU5ErkJggg==');\n  background-repeat: no-repeat;\n}\n.index_aj-toast__1nS9S .index_icon__1Gg7l[aj-type=loading] {\n  background-size: 0.6rem 0.6rem;\n  -webkit-animation: index_rotate__2NMsB 0.8s infinite steps(12, start);\n          animation: index_rotate__2NMsB 0.8s infinite steps(12, start);\n}\n.index_aj-toast__1nS9S .index_msg__I1lMU {\n  margin: 0;\n  padding: 0;\n}\n@-webkit-keyframes index_rotate__2NMsB {\n  0% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes index_rotate__2NMsB {\n  0% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5zdHlsIiwiaW5kZXguc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dDTUc7QURVSDtFQUNFLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUFBLHNCQUFBO0VBQUEscUJBQUE7RUFBQSxjQUFBO0VBQ0EseUJBQUE7RUFBQSxnQ0FBQTtNQUFBLHNCQUFBO1VBQUEsd0JBQUE7RUFDQSwwQkFBQTtFQUFBLDRCQUFBO01BQUEsdUJBQUE7VUFBQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtDQ1JEO0FEVUM7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7Q0NSSDtBRFdDO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7Q0NUSDtBRFlDO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtDQ1ZIO0FEWUM7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBrRkFBQTtFQUNBLDZCQUFBO0NDVkg7QURXRztFQUNFLCtCQUFBO0VBQ0Esc0VBQUE7VUFBQSw4REFBQTtDQ1RMO0FEWUM7RUFDRSxVQUFBO0VBQ0EsV0FBQTtDQ1ZIO0FEL0NnQjtFQUNmO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtHQ3lERDtFRHZERDtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7R0N5REQ7Q0FDRjtBRC9EZ0I7RUFDZjtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7R0N5RUQ7RUR2RUQ7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0dDeUVEO0NBQ0YiLCJmaWxlIjoiaW5kZXguc3R5bCJ9 */");var yn="aj-fade",vn="aj-toast",Qn=dn('<div class="<%=style.body%>">\n  <% if (type) { %>\n    <span aj-type="<%= type %>" class="<%= style.icon %>"></span>\n  <% } %>\n  <p class="<%= style.msg %>">\n    <%- msg %>\n  </p>\n</div>');return function(){function c(t){var n,e,r,o,i,a=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),this.opts=_t({msg:"保存中...",type:null,autoClose:!0,autoCloseTime:3e3,animateTime:500,style:bn,event:{}},t),this.el=(n=this.opts,e=n.msg,r=n.style,o=n.type,(i=document.createElement("div")).className=r[vn],i.setAttribute(yn,"fadeIn"),i.innerHTML=Qn({msg:e,type:o,style:r}),document.querySelector("body").appendChild(i),i),setTimeout(function(){a.el.removeAttribute(yn)},0),this.opts.autoClose&&setTimeout(function(){a.close()},this.opts.autoCloseTime)}return e(c,[{key:"emit",value:function(t){"function"==typeof this.opts.event[t]&&this.opts.event[t]()}},{key:"close",value:function(){var t=this;try{this.el.setAttribute(yn,"fadeOut"),setTimeout(function(){t.emit("close"),t.destroy()},this.opts.animateTime)}catch(t){this.destroy()}}},{key:"destroy",value:function(){try{this.el&&function(t){try{t&&t.parentNode.removeChild(t)}catch(t){}}(this.el),this.el=null}catch(t){}}}]),c}()});
