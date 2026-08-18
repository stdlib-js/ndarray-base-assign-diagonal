"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=n(function(x,s){
var v=require('@stdlib/ndarray-base-broadcast-array/dist'),o=require('@stdlib/ndarray-base-diagonal/dist'),g=require('@stdlib/ndarray-base-shape/dist'),q=require('@stdlib/ndarray-base-assign/dist');function c(e,r,a){var i,t;return i=o(e[1],r,a,!0),t=v(e[0],g(i,!1)),q([t,i]),e[1]}s.exports=c
});var l=u();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
