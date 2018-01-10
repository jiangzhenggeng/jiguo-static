/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/requirejs/LICENSE
 */

var requirejs,require,define;(function(global){function commentReplace(a,b,c,d){return d||""}function isFunction(a){return ostring.call(a)==="[object Function]"}function isArray(a){return ostring.call(a)==="[object Array]"}function each(a,b){if(a){var c;for(c=0;c<a.length;c+=1)if(a[c]&&b(a[c],c,a))break}}function eachReverse(a,b){if(a){var c;for(c=a.length-1;c>-1;c-=1)if(a[c]&&b(a[c],c,a))break}}function hasProp(a,b){return hasOwn.call(a,b)}function getOwn(a,b){return hasProp(a,b)&&a[b]}function eachProp(a,b){var c;for(c in a)if(hasProp(a,c)&&b(a[c],c))break}function mixin(a,b,c,d){return b&&eachProp(b,function(b,e){if(c||!hasProp(a,e))d&&typeof b=="object"&&b&&!isArray(b)&&!isFunction(b)&&!(b instanceof RegExp)?(a[e]||(a[e]={}),mixin(a[e],b,c,d)):a[e]=b}),a}function bind(a,b){return function(){return b.apply(a,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(a){throw a}function getGlobal(a){if(!a)return a;var b=global;return each(a.split("."),function(a){b=b[a]}),b}function makeError(a,b,c,d){var e=new Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a);return e.requireType=a,e.requireModules=d,c&&(e.originalError=c),e}function newContext(a){function q(a){var b,c;for(b=0;b<a.length;b++){c=a[b];if(c===".")a.splice(b,1),b-=1;else if(c===".."){if(b===0||b===1&&a[2]===".."||a[b-1]==="..")continue;b>0&&(a.splice(b-1,2),b-=2)}}}function r(a,b,c){var d,e,f,h,i,j,k,l,m,n,o,p,r=b&&b.split("/"),s=g.map,t=s&&s["*"];a&&(a=a.split("/"),k=a.length-1,g.nodeIdCompat&&jsSuffixRegExp.test(a[k])&&(a[k]=a[k].replace(jsSuffixRegExp,"")),a[0].charAt(0)==="."&&r&&(p=r.slice(0,r.length-1),a=p.concat(a)),q(a),a=a.join("/"));if(c&&s&&(r||t)){f=a.split("/");a:for(h=f.length;h>0;h-=1){j=f.slice(0,h).join("/");if(r)for(i=r.length;i>0;i-=1){e=getOwn(s,r.slice(0,i).join("/"));if(e){e=getOwn(e,j);if(e){l=e,m=h;break a}}}!n&&t&&getOwn(t,j)&&(n=getOwn(t,j),o=h)}!l&&n&&(l=n,m=o),l&&(f.splice(0,m,l),a=f.join("/"))}return d=getOwn(g.pkgs,a),d?d:a}function s(a){isBrowser&&each(scripts(),function(b){if(b.getAttribute("data-requiremodule")===a&&b.getAttribute("data-requirecontext")===d.contextName)return b.parentNode.removeChild(b),!0})}function t(a){var b=getOwn(g.paths,a);if(b&&isArray(b)&&b.length>1)return b.shift(),d.require.undef(a),d.makeRequire(null,{skipMap:!0})([a]),!0}function u(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function v(a,b,c,e){var f,g,h,i,j=null,k=b?b.name:null,m=a,n=!0,q="";return a||(n=!1,a="_@r"+(o+=1)),i=u(a),j=i[0],a=i[1],j&&(j=r(j,k,e),g=getOwn(l,j)),a&&(j?g&&g.normalize?q=g.normalize(a,function(a){return r(a,k,e)}):q=a.indexOf("!")===-1?r(a,k,e):a:(q=r(a,k,e),i=u(q),j=i[0],q=i[1],c=!0,f=d.nameToUrl(q))),h=j&&!g&&!c?"_unnormalized"+(p+=1):"",{prefix:j,name:q,parentMap:b,unnormalized:!!h,url:f,originalName:m,isDefine:n,id:(j?j+"!"+q:q)+h}}function w(a){var b=a.id,c=getOwn(h,b);return c||(c=h[b]=new d.Module(a)),c}function x(a,b,c){var d=a.id,e=getOwn(h,d);hasProp(l,d)&&(!e||e.defineEmitComplete)?b==="defined"&&c(l[d]):(e=w(a),e.error&&b==="error"?c(e.error):e.on(b,c))}function y(a,b){var c=a.requireModules,d=!1;b?b(a):(each(c,function(b){var c=getOwn(h,b);c&&(c.error=a,c.events.error&&(d=!0,c.emit("error",a)))}),d||req.onError(a))}function z(){globalDefQueue.length&&(each(globalDefQueue,function(a){var b=a[0];typeof b=="string"&&(d.defQueueMap[b]=!0),k.push(a)}),globalDefQueue=[])}function A(a){delete h[a],delete i[a]}function B(a,b,c){var d=a.map.id;a.error?a.emit("error",a.error):(b[d]=!0,each(a.depMaps,function(d,e){var f=d.id,g=getOwn(h,f);g&&!a.depMatched[e]&&!c[f]&&(getOwn(b,f)?(a.defineDep(e,l[f]),a.check()):B(g,b,c))}),c[d]=!0)}function C(){var a,c,e=g.waitSeconds*1e3,h=e&&d.startTime+e<(new Date).getTime(),j=[],k=[],l=!1,m=!0;if(b)return;b=!0,eachProp(i,function(a){var b=a.map,d=b.id;if(!a.enabled)return;b.isDefine||k.push(a);if(!a.error)if(!a.inited&&h)t(d)?(c=!0,l=!0):(j.push(d),s(d));else if(!a.inited&&a.fetched&&b.isDefine){l=!0;if(!b.prefix)return m=!1}});if(h&&j.length)return a=makeError("timeout","Load timeout for modules: "+j,null,j),a.contextName=d.contextName,y(a);m&&each(k,function(a){B(a,{},{})}),(!h||c)&&l&&(isBrowser||isWebWorker)&&!f&&(f=setTimeout(function(){f=0,C()},50)),b=!1}function D(a){hasProp(l,a[0])||w(v(a[0],null,!0)).init(a[1],a[2])}function E(a,b,c,d){a.detachEvent&&!isOpera?d&&a.detachEvent(d,b):a.removeEventListener(c,b,!1)}function F(a){var b=a.currentTarget||a.srcElement;return E(b,d.onScriptLoad,"load","onreadystatechange"),E(b,d.onScriptError,"error"),{node:b,id:b&&b.getAttribute("data-requiremodule")}}function G(){var a;z();while(k.length){a=k.shift();if(a[0]===null)return y(makeError("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));D(a)}d.defQueueMap={}}var b,c,d,e,f,g={waitSeconds:9999999,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},i={},j={},k=[],l={},m={},n={},o=1,p=1;return e={require:function(a){return a.require?a.require:a.require=d.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?l[a.map.id]=a.exports:a.exports=l[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return getOwn(g.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}},c=function(a){this.events=getOwn(j,a.id)||{},this.map=a,this.shim=getOwn(g.shim,a.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},c.prototype={init:function(a,b,c,d){d=d||{};if(this.inited)return;this.factory=b,c?this.on("error",c):this.events.error&&(c=bind(this,function(a){this.emit("error",a)})),this.depMaps=a&&a.slice(0),this.errback=c,this.inited=!0,this.ignore=d.ignore,d.enabled||this.enabled?this.enable():this.check()},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(this.fetched)return;this.fetched=!0,d.startTime=(new Date).getTime();var a=this.map;if(!this.shim)return a.prefix?this.callPlugin():this.load();d.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return a.prefix?this.callPlugin():this.load()}))},load:function(){var a=this.map.url;m[a]||(m[a]=!0,d.load(this.map.id,a))},check:function(){if(!this.enabled||this.enabling)return;var a,b,c=this.map.id,e=this.depExports,f=this.exports,g=this.factory;if(!this.inited)hasProp(d.defQueueMap,c)||this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(isFunction(g)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{f=d.execCb(c,g,e,f)}catch(h){a=h}else f=d.execCb(c,g,e,f);this.map.isDefine&&f===undefined&&(b=this.module,b?f=b.exports:this.usingExports&&(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",y(this.error=a)}else f=g;this.exports=f;if(this.map.isDefine&&!this.ignore){l[c]=f;if(req.onResourceLoad){var i=[];each(this.depMaps,function(a){i.push(a.normalizedMap||a)}),req.onResourceLoad(d,this.map,i)}}A(c),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}},callPlugin:function(){var a=this.map,b=a.id,c=v(a.prefix);this.depMaps.push(c),x(c,"defined",bind(this,function(c){var e,f,i,j=getOwn(n,this.map.id),k=this.map.name,l=this.map.parentMap?this.map.parentMap.name:null,m=d.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){c.normalize&&(k=c.normalize(k,function(a){return r(a,l,!0)})||""),f=v(a.prefix+"!"+k,this.map.parentMap),x(f,"defined",bind(this,function(a){this.map.normalizedMap=f,this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),i=getOwn(h,f.id),i&&(this.depMaps.push(f),this.events.error&&i.on("error",bind(this,function(a){this.emit("error",a)})),i.enable());return}if(j){this.map.url=d.nameToUrl(j),this.load();return}e=bind(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),e.error=bind(this,function(a){this.inited=!0,this.error=a,a.requireModules=[b],eachProp(h,function(a){a.map.id.indexOf(b+"_unnormalized")===0&&A(a.map.id)}),y(a)}),e.fromText=bind(this,function(c,f){var h=a.name,i=v(h),j=useInteractive;f&&(c=f),j&&(useInteractive=!1),w(i),hasProp(g.config,b)&&(g.config[h]=g.config[b]);try{req.exec(c)}catch(k){return y(makeError("fromtexteval","fromText eval for "+b+" failed: "+k,k,[b]))}j&&(useInteractive=!0),this.depMaps.push(i),d.completeLoad(h),m([h],e)}),c.load(a.name,m,e,g)})),d.enable(c,this),this.pluginMaps[c.id]=c},enable:function(){i[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(a,b){var c,f,g;if(typeof a=="string"){a=v(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[b]=a,g=getOwn(e,a.id);if(g){this.depExports[b]=g(this);return}this.depCount+=1,x(a,"defined",bind(this,function(a){if(this.undefed)return;this.defineDep(b,a),this.check()})),this.errback?x(a,"error",bind(this,this.errback)):this.events.error&&x(a,"error",bind(this,function(a){this.emit("error",a)}))}c=a.id,f=h[c],!hasProp(e,c)&&f&&!f.enabled&&d.enable(a,this)})),eachProp(this.pluginMaps,bind(this,function(a){var b=getOwn(h,a.id);b&&!b.enabled&&d.enable(a,this)})),this.enabling=!1,this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]),c.push(b)},emit:function(a,b){each(this.events[a],function(a){a(b)}),a==="error"&&delete this.events[a]}},d={config:g,contextName:a,registry:h,defined:l,urlFetched:m,defQueue:k,defQueueMap:{},Module:c,makeModuleMap:v,nextTick:req.nextTick,onError:y,configure:function(a){a.baseUrl&&a.baseUrl.charAt(a.baseUrl.length-1)!=="/"&&(a.baseUrl+="/");if(typeof a.urlArgs=="string"){var b=a.urlArgs;a.urlArgs=function(a,c){return(c.indexOf("?")===-1?"?":"&")+b}}var c=g.shim,e={paths:!0,bundles:!0,config:!0,map:!0};eachProp(a,function(a,b){e[b]?(g[b]||(g[b]={}),mixin(g[b],a,!0,!0)):g[b]=a}),a.bundles&&eachProp(a.bundles,function(a,b){each(a,function(a){a!==b&&(n[a]=b)})}),a.shim&&(eachProp(a.shim,function(a,b){isArray(a)&&(a={deps:a}),(a.exports||a.init)&&!a.exportsFn&&(a.exportsFn=d.makeShimExports(a)),c[b]=a}),g.shim=c),a.packages&&each(a.packages,function(a){var b,c;a=typeof a=="string"?{name:a}:a,c=a.name,b=a.location,b&&(g.paths[c]=a.location),g.pkgs[c]=a.name+"/"+(a.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=v(b,null,!0))}),(a.deps||a.callback)&&d.require(a.deps||[],a.callback)},makeShimExports:function(a){function b(){var b;return a.init&&(b=a.init.apply(global,arguments)),b||a.exports&&getGlobal(a.exports)}return b},makeRequire:function(b,c){function f(g,i,j){var k,m,n;return c.enableBuildCallback&&i&&isFunction(i)&&(i.__requireJsBuild=!0),typeof g=="string"?isFunction(i)?y(makeError("requireargs","Invalid require call"),j):b&&hasProp(e,g)?e[g](h[b.id]):req.get?req.get(d,g,b,f):(m=v(g,b,!1,!0),k=m.id,hasProp(l,k)?l[k]:y(makeError("notloaded",'Module name "'+k+'" has not been loaded yet for context: '+a+(b?"":". Use require([])")))):(G(),d.nextTick(function(){G(),n=w(v(null,b)),n.skipMap=c.skipMap,n.init(g,i,j,{enabled:!0}),C()}),f)}return c=c||{},mixin(f,{isBrowser:isBrowser,toUrl:function(a){var c,e=a.lastIndexOf("."),f=a.split("/")[0],g=f==="."||f==="..";return e!==-1&&(!g||e>1)&&(c=a.substring(e,a.length),a=a.substring(0,e)),d.nameToUrl(r(a,b&&b.id,!0),c,!0)},defined:function(a){return hasProp(l,v(a,b,!1,!0).id)},specified:function(a){return a=v(a,b,!1,!0).id,hasProp(l,a)||hasProp(h,a)}}),b||(f.undef=function(a){z();var c=v(a,b,!0),e=getOwn(h,a);e.undefed=!0,s(a),delete l[a],delete m[c.url],delete j[a],eachReverse(k,function(b,c){b[0]===a&&k.splice(c,1)}),delete d.defQueueMap[a],e&&(e.events.defined&&(j[a]=e.events),A(a))}),f},enable:function(a){var b=getOwn(h,a.id);b&&w(a).enable()},completeLoad:function(a){var b,c,e,f=getOwn(g.shim,a)||{},i=f.exports;z();while(k.length){c=k.shift();if(c[0]===null){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);D(c)}d.defQueueMap={},e=getOwn(h,a);if(!b&&!hasProp(l,a)&&e&&!e.inited){if(g.enforceDefine&&(!i||!getGlobal(i))){if(t(a))return;return y(makeError("nodefine","No define call for "+a,null,[a]))}D([a,f.deps||[],f.exportsFn])}C()},nameToUrl:function(a,b,c){var e,f,h,i,j,k,l,m=getOwn(g.pkgs,a);m&&(a=m),l=getOwn(n,a);if(l)return d.nameToUrl(l,b,c);if(req.jsExtRegExp.test(a))j=a+(b||"");else{e=g.paths,f=a.split("/");for(h=f.length;h>0;h-=1){i=f.slice(0,h).join("/"),k=getOwn(e,i);if(k){isArray(k)&&(k=k[0]),f.splice(0,h,k);break}}j=f.join("/"),j+=b||(/^data\:|^blob\:|\?/.test(j)||c?"":".js"),j=(j.charAt(0)==="/"||j.match(/^[\w\+\.\-]+:/)?"":g.baseUrl)+j}return g.urlArgs&&!/^blob\:/.test(j)?j+g.urlArgs(a,j):j},load:function(a,b){req.load(d,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if(a.type==="load"||readyRegExp.test((a.currentTarget||a.srcElement).readyState)){interactiveScript=null;var b=F(a);d.completeLoad(b.id)}},onScriptError:function(a){var b=F(a);if(!t(b.id)){var c=[];return eachProp(h,function(a,d){d.indexOf("_@r")!==0&&each(a.depMaps,function(a){if(a.id===b.id)return c.push(d),!0})}),y(makeError("scripterror",'Script error for "'+b.id+(c.length?'", needed by: '+c.join(", "):'"'),a,[b.id]))}}},d.require=d.makeRequire(),d}function getInteractiveScript(){return interactiveScript&&interactiveScript.readyState==="interactive"?interactiveScript:(eachReverse(scripts(),function(a){if(a.readyState==="interactive")return interactiveScript=a}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.2.0",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=typeof window!="undefined"&&typeof navigator!="undefined"&&!!window.document,isWebWorker=!isBrowser&&typeof importScripts!="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(typeof define!="undefined")return;if(typeof requirejs!="undefined"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!="undefined"&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(a,b,c,d){var e,f,g=defContextName;return!isArray(a)&&typeof a!="string"&&(f=a,isArray(b)?(a=b,b=c,c=d):a=[]),f&&f.context&&(g=f.context),e=getOwn(contexts,g),e||(e=contexts[g]=req.s.newContext(g)),f&&e.configure(f),e.require(a,b,c)},req.config=function(a){return req(a)},req.nextTick=typeof setTimeout!="undefined"?function(a){setTimeout(a,4)}:function(a){a()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(a){req[a]=function(){var b=contexts[defContextName];return b.require[a].apply(b,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(a,b,c){var d=a.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return d.type=a.scriptType||"text/javascript",d.charset="utf-8",d.async=!0,d},req.load=function(a,b,c){var d=a&&a.config||{},e;if(isBrowser)return e=req.createNode(d,b,c),e.setAttribute("data-requirecontext",a.contextName),e.setAttribute("data-requiremodule",b),e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!isOpera?(useInteractive=!0,e.attachEvent("onreadystatechange",a.onScriptLoad)):(e.addEventListener("load",a.onScriptLoad,!1),e.addEventListener("error",a.onScriptError,!1)),e.src=c,d.onNodeCreated&&d.onNodeCreated(e,d,b,c),currentlyAddingScript=e,baseElement?head.insertBefore(e,baseElement):head.appendChild(e),currentlyAddingScript=null,e;if(isWebWorker)try{setTimeout(function(){},0),importScripts(c),a.completeLoad(b)}catch(f){a.onError(makeError("importscripts","importScripts failed for "+b+" at "+c,f,[b]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(a){head||(head=a.parentNode),dataMain=a.getAttribute("data-main");if(dataMain)return mainScript=dataMain,!cfg.baseUrl&&mainScript.indexOf("!")===-1&&(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(a,b,c){var d,e;typeof a!="string"&&(c=b,b=a,a=null),isArray(b)||(c=b,b=null),!b&&isFunction(c)&&(b=[],c.length&&(c.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(a,c){b.push(c)}),b=(c.length===1?["require"]:["require","exports","module"]).concat(b))),useInteractive&&(d=currentlyAddingScript||getInteractiveScript(),d&&(a||(a=d.getAttribute("data-requiremodule")),e=contexts[d.getAttribute("data-requirecontext")])),e?(e.defQueue.push([a,b,c]),e.defQueueMap[a]=!0):globalDefQueue.push([a,b,c])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)})(this)