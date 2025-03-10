// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(o):t(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!n(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===a.call(e.specifier)?a.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,_=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=s.call(t,y,"$1e"),t=s.call(t,h,"e"),t=s.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,g,"e-0$1"),e.alternate&&(t=s.call(t,d,"$1."),t=s.call(t,_,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):l.call(t)}function v(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}var w=String.fromCharCode,j=Array.isArray;function S(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,n,t,o,a,u,l,f,s,p,g,d,_;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,f=0;f<e.length;f++)if("string"==typeof(t=e[f]))u+=t;else{if(r=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!S(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(a)?String(t.arg):w(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,d=t.padRight,_=void 0,(_=g-p.length)<0?p:p=d?p+v(_):v(_)+p)),u+=t.arg||"",l+=1}return u}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,n,t,i;for(n=[],i=0,t=O.exec(e);t;)(r=e.slice(i,O.lastIndex-t[0].length)).length&&n.push(r),n.push(k(t)),i=O.lastIndex,t=O.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function I(e){var r,n;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return x.apply(null,r)}var A,V=Object.prototype,P=V.toString,F=V.__defineGetter__,$=V.__defineSetter__,C=V.__lookupGetter__,N=V.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(C.call(e,r)||N.call(e,r)?(t=e.__proto__,e.__proto__=V,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,n.get),a&&$&&$.call(e,r,n.set),e};var B=A;function L(e,r,n){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var R=["same","promoted","boolean","boolean_and_generic","signed_integer","signed_integer_and_generic","unsigned_integer","unsigned_integer_and_generic","integer","integer_and_generic","floating_point","floating_point_and_generic","real_floating_point","real_floating_point_and_generic","complex_floating_point","complex_floating_point_and_generic","real_and_generic","real","numeric","numeric_and_generic","default"];function G(){return R.slice()}function W(){return{same:0,promoted:1,boolean:2,boolean_and_generic:3,signed_integer:4,signed_integer_and_generic:5,unsigned_integer:6,unsigned_integer_and_generic:7,integer:8,integer_and_generic:9,floating_point:10,floating_point_and_generic:11,real_floating_point:12,real_floating_point_and_generic:13,complex_floating_point:14,complex_floating_point_and_generic:15,real:16,real_and_generic:17,numeric:18,numeric_and_generic:19,default:20}}function X(e,r,n){B(e,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}function Z(e){return Object.keys(Object(e))}var M=void 0!==Object.keys,Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return Y&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&z.call(e,r)}var q,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=U()?function(e){var r,n,t;if(null==e)return H.call(e);n=e[K],r=D(e,K);try{e[K]=void 0}catch(r){return H.call(e)}return t=H.call(e),r?e[K]=n:delete e[K],t}:function(e){return H.call(e)};function ee(e){return"[object Arguments]"===Q(e)}q=function(){return ee(arguments)}();var re=q;function ne(e){return"string"==typeof e}var te=String.prototype.valueOf,ie=U();function oe(e){return"object"==typeof e&&(e instanceof String||(ie?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object String]"===Q(e)))}function ae(e){return ne(e)||oe(e)}function ce(e){return"number"==typeof e}L(ae,"isPrimitive",ne),L(ae,"isObject",oe);var ue=Number,le=ue.prototype.toString,fe=U();function se(e){return"object"==typeof e&&(e instanceof ue||(fe?function(e){try{return le.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function pe(e){return ce(e)||se(e)}function ge(e){return e!=e}function de(e){return ce(e)&&ge(e)}function _e(e){return se(e)&&ge(e.valueOf())}function be(e){return de(e)||_e(e)}L(pe,"isPrimitive",ce),L(pe,"isObject",se),L(be,"isPrimitive",de),L(be,"isObject",_e);var he=Number.POSITIVE_INFINITY,ye=ue.NEGATIVE_INFINITY,me=Math.floor;function ve(e){return me(e)===e}function we(e){return e<he&&e>ye&&ve(e)}function je(e){return ce(e)&&we(e)}function Se(e){return se(e)&&we(e.valueOf())}function Ee(e){return je(e)||Se(e)}L(Ee,"isPrimitive",je),L(Ee,"isObject",Se);var xe=Object.prototype.propertyIsEnumerable,Oe=!xe.call("beep","0");function ke(e,r){var n;return null!=e&&(!(n=xe.call(e,r))&&Oe&&ae(e)?!de(r=+r)&&je(r)&&r>=0&&r<e.length:n)}var Te=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)},Ie=re?ee:function(e){return null!==e&&"object"==typeof e&&!Te(e)&&"number"==typeof e.length&&ve(e.length)&&e.length>=0&&e.length<=4294967295&&D(e,"callee")&&!ke(e,"callee")},Ae=Array.prototype.slice;function Ve(e){return null!==e&&"object"==typeof e}L(Ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var n,t;if(!Te(r))return!1;if(0===(n=r.length))return!1;for(t=0;t<n;t++)if(!1===e(r[t]))return!1;return!0}}(Ve));var Pe=ke((function(){}),"prototype"),Fe=!ke({toString:null},"toString"),$e=9007199254740991;function Ce(e,r,n){var t,i,o;if(!("object"==typeof(o=e)&&null!==o&&"number"==typeof o.length&&ve(o.length)&&o.length>=0&&o.length<=$e||ne(e)))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(t=e.length))return-1;if(3===arguments.length){if(!je(n))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=t)return-1;i=n}else(i=t+n)<0&&(i=0)}else i=0;if(be(r)){for(;i<t;i++)if(be(e[i]))return i}else for(;i<t;i++)if(e[i]===r)return i;return-1}var Ne=/./;function Be(e){return"boolean"==typeof e}var Le=Boolean,Re=Boolean.prototype.toString,Ge=U();function We(e){return"object"==typeof e&&(e instanceof Le||(Ge?function(e){try{return Re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function Xe(e){return Be(e)||We(e)}L(Xe,"isPrimitive",Be),L(Xe,"isObject",We);var Ze="object"==typeof self?self:null,Me="object"==typeof window?window:null,Ye="object"==typeof globalThis?globalThis:null,Ue=function(e){if(arguments.length){if(!Be(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ye)return Ye;if(Ze)return Ze;if(Me)return Me;throw new Error("unexpected error. Unable to resolve global object.")}(),He=Ue.document&&Ue.document.childNodes,ze=Int8Array;function De(){return/^\s*function\s*([^(]*)/i}var qe=/^\s*function\s*([^(]*)/i;function Je(e){var r,n,t,i;if(("Object"===(n=Q(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=qe.exec(t.toString()))return r[1]}return Ve(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}L(De,"REGEXP",qe);var Ke="function"==typeof Ne||"object"==typeof ze||"function"==typeof He?function(e){return Je(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Je(e).toLowerCase():r};function Qe(e){return e.constructor&&e.constructor.prototype===e}var er,rr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],nr="undefined"==typeof window?void 0:window,tr=function(){var e;if("undefined"===Ke(nr))return!1;for(e in nr)try{-1===Ce(rr,e)&&D(nr,e)&&null!==nr[e]&&"object"===Ke(nr[e])&&Qe(nr[e])}catch(e){return!0}return!1}(),ir="undefined"!=typeof window,or=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];er=M?function(){return 2!==(Z(arguments)||"").length}(1,2)?function(e){return Ie(e)?Z(Ae.call(e)):Z(e)}:Z:function(e){var r,n,t,i,o,a,c;if(i=[],Ie(e)){for(c=0;c<e.length;c++)i.push(c.toString());return i}if("string"==typeof e){if(e.length>0&&!D(e,"0"))for(c=0;c<e.length;c++)i.push(c.toString())}else{if(0==(t="function"==typeof e)&&!Ve(e))return i;n=Pe&&t}for(o in e)n&&"prototype"===o||!D(e,o)||i.push(String(o));if(Fe)for(r=function(e){if(!1===ir&&!tr)return Qe(e);try{return Qe(e)}catch(e){return!1}}(e),c=0;c<or.length;c++)a=or[c],r&&"constructor"===a||!D(e,a)||i.push(String(a));return i};var ar=er;return L(G,"enum",W),function(e,r){var n,t,i;for(n=ar(r),i=0;i<n.length;i++)X(e,t=n[i],r[t])}(G,{same:0,promoted:1,boolean:2,boolean_and_generic:3,signed_integer:4,signed_integer_and_generic:5,unsigned_integer:6,unsigned_integer_and_generic:7,integer:8,integer_and_generic:9,floating_point:10,floating_point_and_generic:11,real_floating_point:12,real_floating_point_and_generic:13,complex_floating_point:14,complex_floating_point_and_generic:15,real:16,real_and_generic:17,numeric:18,numeric_and_generic:19,default:20}),G},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).policies=r();
//# sourceMappingURL=browser.js.map
