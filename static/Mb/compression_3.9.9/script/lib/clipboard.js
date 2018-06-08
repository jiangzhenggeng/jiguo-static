/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */

(function(a,b){typeof exports=="object"&&typeof module=="object"?module.exports=b():typeof define=="function"&&define.amd?define([],b):typeof exports=="object"?exports.ClipboardJS=b():a.ClipboardJS=b()})(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a["default"]}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=3)}([function(a,b,c){var d,e,f;(function(g,h){e=[a,c(7)],d=h,f=typeof d=="function"?d.apply(b,e):d,f===undefined||!(a.exports=f)})(this,function(a,b){function c(a){return a&&a.__esModule?a:{"default":a}}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=c(b),f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=function(){function a(b){d(this,a),this.resolveOptions(b),this.initSelection()}return g(a,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=a.action,this.container=a.container,this.emitter=a.emitter,this.target=a.target,this.text=a.text,this.trigger=a.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var a=this,b=document.documentElement.getAttribute("dir")=="rtl";this.removeFake(),this.fakeHandlerCallback=function(){return a.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[b?"right":"left"]="-9999px";var c=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=c+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,e.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,e.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var a=void 0;try{a=document.execCommand(this.action)}catch(b){a=!1}this.handleResult(a)}},{key:"handleResult",value:function(a){this.emitter.emit(a?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"copy";this._action=a;if(this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(a){if(a!==undefined){if(!a||(typeof a=="undefined"?"undefined":f(a))!=="object"||a.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(this.action==="copy"&&a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(a.hasAttribute("readonly")||a.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=a}},get:function(){return this._target}}]),a}();a.exports=h})},function(a,b,c){function d(a,b,c){if(!a&&!b&&!c)throw new Error("Missing required arguments");if(!h.string(b))throw new TypeError("Second argument must be a String");if(!h.fn(c))throw new TypeError("Third argument must be a Function");if(h.node(a))return e(a,b,c);if(h.nodeList(a))return f(a,b,c);if(h.string(a))return g(a,b,c);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function e(a,b,c){return a.addEventListener(b,c),{destroy:function(){a.removeEventListener(b,c)}}}function f(a,b,c){return Array.prototype.forEach.call(a,function(a){a.addEventListener(b,c)}),{destroy:function(){Array.prototype.forEach.call(a,function(a){a.removeEventListener(b,c)})}}}function g(a,b,c){return i(document.body,a,b,c)}var h=c(6),i=c(5);a.exports=d},function(a,b){function c(){}c.prototype={on:function(a,b,c){var d=this.e||(this.e={});return(d[a]||(d[a]=[])).push({fn:b,ctx:c}),this},once:function(a,b,c){function d(){e.off(a,d),b.apply(c,arguments)}var e=this;return d._=b,this.on(a,d,c)},emit:function(a){var b=[].slice.call(arguments,1),c=((this.e||(this.e={}))[a]||[]).slice(),d=0,e=c.length;for(d;d<e;d++)c[d].fn.apply(c[d].ctx,b);return this},off:function(a,b){var c=this.e||(this.e={}),d=c[a],e=[];if(d&&b)for(var f=0,g=d.length;f<g;f++)d[f].fn!==b&&d[f].fn._!==b&&e.push(d[f]);return e.length?c[a]=e:delete c[a],this}},a.exports=c},function(a,b,c){var d,e,f;(function(g,h){e=[a,c(0),c(2),c(1)],d=h,f=typeof d=="function"?d.apply(b,e):d,f===undefined||!(a.exports=f)})(this,function(a,b,c,d){function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?a:b}function h(a,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a,b){var c="data-clipboard-"+a;if(!b.hasAttribute(c))return;return b.getAttribute(c)}var j=e(b),k=e(c),l=e(d),m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=function(a){function b(a,c){f(this,b);var d=g(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return d.resolveOptions(c),d.listenClick(a),d}return h(b,a),n(b,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=m(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var b=this;this.listener=(0,l.default)(a,"click",function(a){return b.onClick(a)})}},{key:"onClick",value:function(a){var b=a.delegateTarget||a.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new j.default({action:this.action(b),target:this.target(b),text:this.text(b),container:this.container,trigger:b,emitter:this})}},{key:"defaultAction",value:function(a){return i("action",a)}},{key:"defaultTarget",value:function(a){var b=i("target",a);if(b)return document.querySelector(b)}},{key:"defaultText",value:function(a){return i("text",a)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:["copy","cut"],b=typeof a=="string"?[a]:a,c=!!document.queryCommandSupported;return b.forEach(function(a){c=c&&!!document.queryCommandSupported(a)}),c}}]),b}(k.default);a.exports=o})},function(a,b){function c(a,b){while(a&&a.nodeType!==d){if(typeof a.matches=="function"&&a.matches(b))return a;a=a.parentNode}}var d=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}a.exports=c},function(a,b,c){function d(a,b,c,d,e){var g=f.apply(this,arguments);return a.addEventListener(c,g,e),{destroy:function(){a.removeEventListener(c,g,e)}}}function e(a,b,c,e,f){return typeof a.addEventListener=="function"?d.apply(null,arguments):typeof c=="function"?d.bind(null,document).apply(null,arguments):(typeof a=="string"&&(a=document.querySelectorAll(a)),Array.prototype.map.call(a,function(a){return d(a,b,c,e,f)}))}function f(a,b,c,d){return function(c){c.delegateTarget=g(c.target,b),c.delegateTarget&&d.call(a,c)}}var g=c(4);a.exports=e},function(a,b){b.node=function(a){return a!==undefined&&a instanceof HTMLElement&&a.nodeType===1},b.nodeList=function(a){var c=Object.prototype.toString.call(a);return a!==undefined&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in a&&(a.length===0||b.node(a[0]))},b.string=function(a){return typeof a=="string"||a instanceof String},b.fn=function(a){var b=Object.prototype.toString.call(a);return b==="[object Function]"}},function(a,b){function c(a){var b;if(a.nodeName==="SELECT")a.focus(),b=a.value;else if(a.nodeName==="INPUT"||a.nodeName==="TEXTAREA"){var c=a.hasAttribute("readonly");c||a.setAttribute("readonly",""),a.select(),a.setSelectionRange(0,a.value.length),c||a.removeAttribute("readonly"),b=a.value}else{a.hasAttribute("contenteditable")&&a.focus();var d=window.getSelection(),e=document.createRange();e.selectNodeContents(a),d.removeAllRanges(),d.addRange(e),b=d.toString()}return b}a.exports=c}])})