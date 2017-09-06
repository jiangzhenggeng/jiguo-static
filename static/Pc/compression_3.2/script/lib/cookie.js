/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(jQuery)})(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){a.indexOf('"')===0&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(c){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(f!==undefined&&!a.isFunction(f)){i=a.extend({},h.defaults,i);if(typeof i.expires=="number"){var j=i.expires,k=i.expires=new Date;k.setTime(+k+j*864e5)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}var l=b?undefined:{},m=document.cookie?document.cookie.split("; "):[];for(var n=0,o=m.length;n<o;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}!b&&(r=g(r))!==undefined&&(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return a.cookie(b)===undefined?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}})