// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).policies=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,s="set"in r,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),s&&u&&u.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=["same","promoted","bool","signed_integer","unsigned_integer","integer","floating_point","real_floating_point","complex_floating_point","real","numeric","default"];function s(){return p.slice()}function y(){return{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}}function g(t,e,r){c(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function b(t){return Object.keys(Object(t))}var d=void 0!==Object.keys;var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return v&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;function j(t,e){return null!=t&&h.call(t,e)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var O,S=m()?function(t){var e,r,n;if(null==t)return _.call(t);r=t[w],e=j(t,w);try{t[w]=void 0}catch(e){return _.call(t)}return n=_.call(t),e?t[w]=r:delete t[w],n}:function(t){return _.call(t)};function E(t){return"[object Arguments]"===S(t)}O=function(){return E(arguments)}();var I=O;function T(t){return"string"==typeof t}var P=String.prototype.valueOf;var A=m();function x(t){return"object"==typeof t&&(t instanceof String||(A?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object String]"===S(t)))}function N(t){return T(t)||x(t)}function k(t){return"number"==typeof t}a(N,"isPrimitive",T),a(N,"isObject",x);var B=Number,V=B.prototype.toString;var F=m();function L(t){return"object"==typeof t&&(t instanceof B||(F?function(t){try{return V.call(t),!0}catch(t){return!1}}(t):"[object Number]"===S(t)))}function G(t){return k(t)||L(t)}function Y(t){return t!=t}function C(t){return k(t)&&Y(t)}function M(t){return L(t)&&Y(t.valueOf())}function X(t){return C(t)||M(t)}a(G,"isPrimitive",k),a(G,"isObject",L),a(X,"isPrimitive",C),a(X,"isObject",M);var H=Number.POSITIVE_INFINITY,W=B.NEGATIVE_INFINITY,D=Math.floor;function R(t){return D(t)===t}function U(t){return t<H&&t>W&&R(t)}function q(t){return k(t)&&U(t)}function z(t){return L(t)&&U(t.valueOf())}function J(t){return q(t)||z(t)}a(J,"isPrimitive",q),a(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,e){var r;return null!=t&&(!(r=K.call(t,e))&&Q&&N(t)?!C(e=+e)&&q(e)&&e>=0&&e<t.length:r)}var $=Array.isArray?Array.isArray:function(t){return"[object Array]"===S(t)};var tt=I?E:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=4294967295&&j(t,"callee")&&!Z(t,"callee")},et=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}a(rt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!$(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(rt));var nt=Z((function(){}),"prototype"),ot=!Z({toString:null},"toString");function it(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function ut(t,e,r){var n,o;if(!it(t)&&!T(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!q(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(X(e)){for(;o<n;o++)if(X(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ft=/./;function lt(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var at=m();function pt(t){return"object"==typeof t&&(t instanceof Boolean||(at?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===S(t)))}function st(t){return lt(t)||pt(t)}function yt(){return new Function("return this;")()}a(st,"isPrimitive",lt),a(st,"isObject",pt);var gt="object"==typeof self?self:null,bt="object"==typeof window?window:null,dt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},vt="object"==typeof dt?dt:null;var mt=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return yt()}if(gt)return gt;if(bt)return bt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")}(),_t=mt.document&&mt.document.childNodes,ht=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var wt=/^\s*function\s*([^(]*)/i;function Ot(t){var e,r,n,o;if(("Object"===(r=S(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=wt.exec(n.toString()))return e[1]}return rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(jt,"REGEXP",wt);var St="function"==typeof ft||"object"==typeof ht||"function"==typeof _t?function(t){return Ot(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ot(t).toLowerCase():e};function Et(t){return t.constructor&&t.constructor.prototype===t}var It=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Tt="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===St(Tt))return!1;for(t in Tt)try{-1===ut(It,t)&&j(Tt,t)&&null!==Tt[t]&&"object"===St(Tt[t])&&Et(Tt[t])}catch(t){return!0}return!1}(),At="undefined"!=typeof window;var xt,Nt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];xt=d?function(){return 2!==(b(arguments)||"").length}(1,2)?function(t){return tt(t)?b(et.call(t)):b(t)}:b:function(t){var e,r,n,o,i,u,f;if(o=[],tt(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!j(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!rt(t))return o;r=nt&&n}for(i in t)r&&"prototype"===i||!j(t,i)||o.push(String(i));if(ot)for(e=function(t){if(!1===At&&!Pt)return Et(t);try{return Et(t)}catch(t){return!1}}(t),f=0;f<Nt.length;f++)u=Nt[f],e&&"constructor"===u||!j(t,u)||o.push(String(u));return o};var kt=xt;return a(s,"enum",y),function(t,e){var r,n,o;for(r=kt(e),o=0;o<r.length;o++)g(t,n=r[o],e[n])}(s,{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}),s}));
//# sourceMappingURL=browser.js.map
