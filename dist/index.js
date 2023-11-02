"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=n(function(R,m){m.exports=["same","promoted","bool","signed_integer","unsigned_integer","integer","floating_point","real_floating_point","complex_floating_point","real","numeric","default"]});var l=n(function(h,u){
var d=s();function v(){return d.slice()}u.exports=v
});var p=n(function(j,g){
function q(){return{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}}g.exports=q
});var c=n(function(C,_){
var x=require('@stdlib/utils-define-read-only-property/dist'),y=require('@stdlib/utils-keys/dist');function b(r,e){var t,o,i;for(t=y(e),i=0;i<t.length;i++)o=t[i],x(r,o,e[o]);return r}_.exports=b
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=l(),f=p(),k=c();O(a,"enum",f);k(a,f());module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
