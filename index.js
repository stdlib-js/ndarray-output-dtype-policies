// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).policies=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var S=String.fromCharCode,E=isNaN,O=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,f,s,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,s=0;s<e.length;s++)if(c(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function P(e){var r,t,n;if(!V(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var G=F;function W(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X=["same","promoted","bool","signed_integer","unsigned_integer","integer","floating_point","real_floating_point","complex_floating_point","real","numeric","default"];function Z(){return X.slice()}function M(){return{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}}function Y(e,r,t){G(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function U(e){return Object.keys(Object(e))}var H=void 0!==Object.keys;var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return z&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&J.call(e,r)}var Q="function"==typeof Symbol?Symbol:void 0,ee="function"==typeof Q?Q.toStringTag:"";var re,te=D()?function(e){var r,t,n;if(null==e)return q.call(e);t=e[ee],r=K(e,ee);try{e[ee]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[ee]=t:delete e[ee],n}:function(e){return q.call(e)};function ne(e){return"[object Arguments]"===te(e)}re=function(){return ne(arguments)}();var ie=re;function oe(e){return"string"==typeof e}var ae=String.prototype.valueOf;var ue=D();function ce(e){return"object"==typeof e&&(e instanceof String||(ue?function(e){try{return ae.call(e),!0}catch(e){return!1}}(e):"[object String]"===te(e)))}function le(e){return oe(e)||ce(e)}function fe(e){return"number"==typeof e}W(le,"isPrimitive",oe),W(le,"isObject",ce);var se=Number,pe=se.prototype.toString;var ge=D();function de(e){return"object"==typeof e&&(e instanceof se||(ge?function(e){try{return pe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===te(e)))}function be(e){return fe(e)||de(e)}function he(e){return e!=e}function ye(e){return fe(e)&&he(e)}function ve(e){return de(e)&&he(e.valueOf())}function me(e){return ye(e)||ve(e)}W(be,"isPrimitive",fe),W(be,"isObject",de),W(me,"isPrimitive",ye),W(me,"isObject",ve);var we=Number.POSITIVE_INFINITY,_e=se.NEGATIVE_INFINITY,je=Math.floor;function Se(e){return je(e)===e}function Ee(e){return e<we&&e>_e&&Se(e)}function Oe(e){return fe(e)&&Ee(e)}function xe(e){return de(e)&&Ee(e.valueOf())}function ke(e){return Oe(e)||xe(e)}W(ke,"isPrimitive",Oe),W(ke,"isObject",xe);var Te=Object.prototype.propertyIsEnumerable;var Ie=!Te.call("beep","0");function Ae(e,r){var t;return null!=e&&(!(t=Te.call(e,r))&&Ie&&le(e)?!ye(r=+r)&&Oe(r)&&r>=0&&r<e.length:t)}var Ve=Array.isArray?Array.isArray:function(e){return"[object Array]"===te(e)};var Pe=ie?ne:function(e){return null!==e&&"object"==typeof e&&!Ve(e)&&"number"==typeof e.length&&Se(e.length)&&e.length>=0&&e.length<=4294967295&&K(e,"callee")&&!Ae(e,"callee")},Fe=Array.prototype.slice;function Ne(e){return null!==e&&"object"==typeof e}W(Ne,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ve(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ne));var $e=Ae((function(){}),"prototype"),Ce=!Ae({toString:null},"toString");function Be(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Se(e.length)&&e.length>=0&&e.length<=9007199254740991}function Le(e,r,t){var n,i;if(!Be(e)&&!oe(e))throw new TypeError(P("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Oe(t))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(me(r)){for(;i<n;i++)if(me(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var Re=/./;function Ge(e){return"boolean"==typeof e}var We=Boolean,Xe=Boolean.prototype.toString;var Ze=D();function Me(e){return"object"==typeof e&&(e instanceof We||(Ze?function(e){try{return Xe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===te(e)))}function Ye(e){return Ge(e)||Me(e)}function Ue(){return new Function("return this;")()}W(Ye,"isPrimitive",Ge),W(Ye,"isObject",Me);var He="object"==typeof self?self:null,ze="object"==typeof window?window:null,De="object"==typeof global?global:null,qe="object"==typeof globalThis?globalThis:null;var Je=function(e){if(arguments.length){if(!Ge(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ue()}if(qe)return qe;if(He)return He;if(ze)return ze;if(De)return De;throw new Error("unexpected error. Unable to resolve global object.")}(),Ke=Je.document&&Je.document.childNodes,Qe=Int8Array;function er(){return/^\s*function\s*([^(]*)/i}var rr=/^\s*function\s*([^(]*)/i;function tr(e){var r,t,n,i;if(("Object"===(t=te(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=rr.exec(n.toString()))return r[1]}return Ne(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(er,"REGEXP",rr);var nr="function"==typeof Re||"object"==typeof Qe||"function"==typeof Ke?function(e){return tr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?tr(e).toLowerCase():r};function ir(e){return e.constructor&&e.constructor.prototype===e}var or=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ar="undefined"==typeof window?void 0:window;var ur=function(){var e;if("undefined"===nr(ar))return!1;for(e in ar)try{-1===Le(or,e)&&K(ar,e)&&null!==ar[e]&&"object"===nr(ar[e])&&ir(ar[e])}catch(e){return!0}return!1}(),cr="undefined"!=typeof window;var lr,fr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];lr=H?function(){return 2!==(U(arguments)||"").length}(1,2)?function(e){return Pe(e)?U(Fe.call(e)):U(e)}:U:function(e){var r,t,n,i,o,a,u;if(i=[],Pe(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!K(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!Ne(e))return i;t=$e&&n}for(o in e)t&&"prototype"===o||!K(e,o)||i.push(String(o));if(Ce)for(r=function(e){if(!1===cr&&!ur)return ir(e);try{return ir(e)}catch(e){return!1}}(e),u=0;u<fr.length;u++)a=fr[u],r&&"constructor"===a||!K(e,a)||i.push(String(a));return i};var sr=lr;return W(Z,"enum",M),function(e,r){var t,n,i;for(t=sr(r),i=0;i<t.length;i++)Y(e,n=t[i],r[n])}(Z,{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}),Z}));
//# sourceMappingURL=index.js.map
