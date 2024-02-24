// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,y,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,j=isNaN,S=Array.isArray;function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,o,a,c,l,f,s,p,g,d,b;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)c+=n;else{if(r=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+w(b):w(b)+p)),c+=n.arg||"",l+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var A,V=Object.prototype,P=V.toString,F=V.__defineGetter__,N=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var B=A;function L(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var R=["same","promoted","bool","signed_integer","unsigned_integer","integer","floating_point","real_floating_point","complex_floating_point","real","numeric","default"];function G(){return R.slice()}function W(){return{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}}function X(e,r,t){B(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function Z(e){return Object.keys(Object(e))}var M=void 0!==Object.keys;var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return Y&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&z.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,J="function"==typeof q?q.toStringTag:"";var K=U()?function(e){var r,t,n;if(null==e)return H.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[J]=t:delete e[J],n}:function(e){return H.call(e)};function Q(e){return"[object Arguments]"===K(e)}var ee=function(){return Q(arguments)}();function re(e){return"string"==typeof e}var te=String.prototype.valueOf;var ne=U();function ie(e){return"object"==typeof e&&(e instanceof String||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function oe(e){return re(e)||ie(e)}function ae(e){return"number"==typeof e}L(oe,"isPrimitive",re),L(oe,"isObject",ie);var ue=Number,ce=ue.prototype.toString;var le=U();function fe(e){return"object"==typeof e&&(e instanceof ue||(le?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function se(e){return ae(e)||fe(e)}function pe(e){return e!=e}function ge(e){return ae(e)&&pe(e)}function de(e){return fe(e)&&pe(e.valueOf())}function be(e){return ge(e)||de(e)}L(se,"isPrimitive",ae),L(se,"isObject",fe),L(be,"isPrimitive",ge),L(be,"isObject",de);var he=Number.POSITIVE_INFINITY,ye=ue.NEGATIVE_INFINITY,ve=Math.floor;function me(e){return ve(e)===e}function we(e){return e<he&&e>ye&&me(e)}function _e(e){return ae(e)&&we(e)}function je(e){return fe(e)&&we(e.valueOf())}function Se(e){return _e(e)||je(e)}L(Se,"isPrimitive",_e),L(Se,"isObject",je);var Ee=Object.prototype.propertyIsEnumerable;var Oe=!Ee.call("beep","0");function xe(e,r){var t;return null!=e&&(!(t=Ee.call(e,r))&&Oe&&oe(e)?!ge(r=+r)&&_e(r)&&r>=0&&r<e.length:t)}var ke=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};var Ie=ee?Q:function(e){return null!==e&&"object"==typeof e&&!ke(e)&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=4294967295&&D(e,"callee")&&!xe(e,"callee")},Te=Array.prototype.slice;function Ae(e){return null!==e&&"object"==typeof e}L(Ae,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ke(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ae));var Ve=xe((function(){}),"prototype"),Pe=!xe({toString:null},"toString"),Fe=9007199254740991;function Ne(e,r,t){var n,i,o;if(!(o=e,"object"==typeof o&&null!==o&&"number"==typeof o.length&&me(o.length)&&o.length>=0&&o.length<=Fe||re(e)))throw new TypeError(T("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!_e(t))throw new TypeError(T("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(be(r)){for(;i<n;i++)if(be(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var $e=/./;function Ce(e){return"boolean"==typeof e}var Be=Boolean,Le=Boolean.prototype.toString;var Re=U();function Ge(e){return"object"==typeof e&&(e instanceof Be||(Re?function(e){try{return Le.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function We(e){return Ce(e)||Ge(e)}L(We,"isPrimitive",Ce),L(We,"isObject",Ge);var Xe="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Me="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ye="object"==typeof Me?Me:null,Ue="object"==typeof globalThis?globalThis:null;var He=function(e){if(arguments.length){if(!Ce(e))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ue)return Ue;if(Xe)return Xe;if(Ze)return Ze;if(Ye)return Ye;throw new Error("unexpected error. Unable to resolve global object.")}(),ze=He.document&&He.document.childNodes,De=Int8Array;function qe(){return/^\s*function\s*([^(]*)/i}var Je=/^\s*function\s*([^(]*)/i;function Ke(e){var r,t,n,i;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Je.exec(n.toString()))return r[1]}return Ae(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(qe,"REGEXP",Je);var Qe="function"==typeof $e||"object"==typeof De||"function"==typeof ze?function(e){return Ke(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ke(e).toLowerCase():r};function er(e){return e.constructor&&e.constructor.prototype===e}var rr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],tr="undefined"==typeof window?void 0:window;var nr=function(){var e;if("undefined"===Qe(tr))return!1;for(e in tr)try{-1===Ne(rr,e)&&D(tr,e)&&null!==tr[e]&&"object"===Qe(tr[e])&&er(tr[e])}catch(e){return!0}return!1}(),ir="undefined"!=typeof window;var or=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ar=M?function(){return 2!==(Z(arguments)||"").length}(1,2)?function(e){return Ie(e)?Z(Te.call(e)):Z(e)}:Z:function(e){var r,t,n,i,o,a,u;if(i=[],Ie(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!D(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!Ae(e))return i;t=Ve&&n}for(o in e)t&&"prototype"===o||!D(e,o)||i.push(String(o));if(Pe)for(r=function(e){if(!1===ir&&!nr)return er(e);try{return er(e)}catch(e){return!1}}(e),u=0;u<or.length;u++)a=or[u],r&&"constructor"===a||!D(e,a)||i.push(String(a));return i};L(G,"enum",W),function(e,r){var t,n,i;for(t=ar(r),i=0;i<t.length;i++)X(e,n=t[i],r[n])}(G,{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11});export{G as default,W as enum};
//# sourceMappingURL=mod.js.map
