/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2009-2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0
 */

(function(a,b){var c=a,d=c.document,e=c.navigator,f=c.setTimeout,g=c.clearTimeout,h=c.setInterval,i=c.clearInterval,j=c.getComputedStyle,k=c.encodeURIComponent,l=c.ActiveXObject,m=c.Error,n=c.Number.parseInt||c.parseInt,o=c.Number.parseFloat||c.parseFloat,p=c.Number.isNaN||c.isNaN,q=c.Date.now,r=c.Object.keys,s=c.Object.defineProperty,t=c.Object.prototype.hasOwnProperty,u=c.Array.prototype.slice,v=function(){var a=function(a){return a};if(typeof c.wrap=="function"&&typeof c.unwrap=="function")try{var b=d.createElement("div"),e=c.unwrap(b);b.nodeType===1&&e&&e.nodeType===1&&(a=c.unwrap)}catch(f){}return a}(),w=function(a){return u.call(a,0)},x=function(){var a,c,d,e,f,g,h=w(arguments),i=h[0]||{};for(a=1,c=h.length;a<c;a++)if((d=h[a])!=null)for(e in d)t.call(d,e)&&(f=i[e],g=d[e],i!==g&&g!==b&&(i[e]=g));return i},y=function(a){var b,c,d,e;if(typeof a!="object"||a==null||typeof a.nodeType=="number")b=a;else if(typeof a.length=="number"){b=[];for(c=0,d=a.length;c<d;c++)t.call(a,c)&&(b[c]=y(a[c]))}else{b={};for(e in a)t.call(a,e)&&(b[e]=y(a[e]))}return b},z=function(a,b){var c={};for(var d=0,e=b.length;d<e;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},A=function(a,b){var c={};for(var d in a)b.indexOf(d)===-1&&(c[d]=a[d]);return c},B=function(a){if(a)for(var b in a)t.call(a,b)&&delete a[b];return a},C=function(a,b){if(a&&a.nodeType===1&&a.ownerDocument&&b&&(b.nodeType===1&&b.ownerDocument&&b.ownerDocument===a.ownerDocument||b.nodeType===9&&!b.ownerDocument&&b===a.ownerDocument))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},D=function(a){var b;return typeof a=="string"&&a&&(b=a.split("#")[0].split("?")[0],b=a.slice(0,a.lastIndexOf("/")+1)),b},E=function(a){var b,c;return typeof a=="string"&&a&&(c=a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]?b=c[1]:(c=a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]&&(b=c[1]))),b},F=function(){var a,b;try{throw new m}catch(c){b=c}return b&&(a=b.sourceURL||b.fileName||E(b.stack)),a},G=function(){var a,c,e;if(d.currentScript&&(a=d.currentScript.src))return a;c=d.getElementsByTagName("script");if(c.length===1)return c[0].src||b;if("readyState"in c[0])for(e=c.length;e--;)if(c[e].readyState==="interactive"&&(a=c[e].src))return a;return d.readyState==="loading"&&(a=c[c.length-1].src)?a:(a=F())?a:b},H=function(){var a,c,e,f=d.getElementsByTagName("script");for(a=f.length;a--;){if(!(e=f[a].src)){c=null;break}e=D(e);if(c==null)c=e;else if(c!==e){c=null;break}}return c||b},I=function(){var a=D(G())||H()||"";return a+"ZeroClipboard.swf"},J=function(){return a.opener==null&&(!!a.top&&a!=a.top||!!a.parent&&a!=a.parent)}(),K={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,sandboxed:null,unavailable:null,degraded:null,deactivated:null,overdue:null,ready:null},L="11.0.0",M,N={},O,P,Q={},R=null,S=0,T=0,U={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-sandboxed":"Attempting to run Flash in a sandboxed iframe, which is impossible","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-degraded":"Flash is unable to preserve data fidelity when communicating with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-overdue":"Flash communication was established but NOT within the acceptable time limit","version-mismatch":"ZeroClipboard JS version number does not match ZeroClipboard SWF version number","clipboard-error":"At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard","config-mismatch":"ZeroClipboard configuration does not match Flash's reality","swf-not-found":"The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"}},V=["flash-unavailable","flash-degraded","flash-overdue","version-mismatch","config-mismatch","clipboard-error"],W=["flash-disabled","flash-outdated","flash-sandboxed","flash-unavailable","flash-degraded","flash-deactivated","flash-overdue"],X=new RegExp("^flash-("+W.map(function(a){return a.replace(/^flash-/,"")}).join("|")+")$"),Y=new RegExp("^flash-("+W.slice(1).map(function(a){return a.replace(/^flash-/,"")}).join("|")+")$"),Z={swfPath:I(),trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},$=function(a){if(typeof a=="object"&&a!==null)for(var b in a)if(t.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b))Z[b]=a[b];else if(K.bridge==null)if(b==="containerId"||b==="swfObjectId"){if(!nb(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");Z[b]=a[b]}else Z[b]=a[b];if(typeof a=="string"&&a){if(t.call(Z,a))return Z[a];return}return y(Z)},_=function(){return Tb(),{browser:z(e,["userAgent","platform","appName"]),flash:A(K,["bridge"]),zeroclipboard:{version:Vb.version,config:Vb.config()}}},ab=function(){return!!(K.disabled||K.outdated||K.sandboxed||K.unavailable||K.degraded||K.deactivated)},bb=function(a,c){var d,e,f,g={};if(typeof a=="string"&&a)f=a.toLowerCase().split(/\s+/);else if(typeof a=="object"&&a&&typeof c=="undefined")for(d in a)t.call(a,d)&&typeof d=="string"&&d&&typeof a[d]=="function"&&Vb.on(d,a[d]);if(f&&f.length){for(d=0,e=f.length;d<e;d++)a=f[d].replace(/^on/,""),g[a]=!0,N[a]||(N[a]=[]),N[a].push(c);g.ready&&K.ready&&Vb.emit({type:"ready"});if(g.error){for(d=0,e=W.length;d<e;d++)if(K[W[d].replace(/^flash-/,"")]===!0){Vb.emit({type:"error",name:W[d]});break}M!==b&&Vb.version!==M&&Vb.emit({type:"error",name:"version-mismatch",jsVersion:Vb.version,swfVersion:M})}}return Vb},cb=function(a,b){var c,d,e,f,g;if(arguments.length===0)f=r(N);else if(typeof a=="string"&&a)f=a.split(/\s+/);else if(typeof a=="object"&&a&&typeof b=="undefined")for(c in a)t.call(a,c)&&typeof c=="string"&&c&&typeof a[c]=="function"&&Vb.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;c<d;c++){a=f[c].toLowerCase().replace(/^on/,""),g=N[a];if(g&&g.length)if(b){e=g.indexOf(b);while(e!==-1)g.splice(e,1),e=g.indexOf(b,e)}else g.length=0}return Vb},db=function(a){var b;return typeof a=="string"&&a?b=y(N[a])||null:b=y(N),b},eb=function(a){var b,c,d;a=ob(a);if(!a)return;if(vb(a))return;return a.type==="ready"&&K.overdue===!0?Vb.emit({type:"error",name:"flash-overdue"}):(b=x({},a),tb.call(this,b),a.type==="copy"&&(d=Db(Q),c=d.data,R=d.formatMap),c)},fb=function(){var a=K.sandboxed;Tb(),typeof K.ready!="boolean"&&(K.ready=!1);if(K.sandboxed!==a&&K.sandboxed===!0)K.ready=!1,Vb.emit({type:"error",name:"flash-sandboxed"});else if(!Vb.isFlashUnusable()&&K.bridge===null){var b=Z.flashLoadTimeout;typeof b=="number"&&b>=0&&(S=f(function(){typeof K.deactivated!="boolean"&&(K.deactivated=!0),K.deactivated===!0&&Vb.emit({type:"error",name:"flash-deactivated"})},b)),K.overdue=!1,Bb()}},gb=function(){Vb.clearData(),Vb.blur(),Vb.emit("destroy"),Cb(),Vb.off()},hb=function(a,b){var c;if(typeof a=="object"&&a&&typeof b=="undefined")c=a,Vb.clearData();else{if(typeof a!="string"||!a)return;c={},c[a]=b}for(var d in c)typeof d=="string"&&d&&t.call(c,d)&&typeof c[d]=="string"&&c[d]&&(Q[d]=c[d])},ib=function(a){typeof a=="undefined"?(B(Q),R=null):typeof a=="string"&&t.call(Q,a)&&delete Q[a]},jb=function(a){if(typeof a=="undefined")return y(Q);if(typeof a=="string"&&t.call(Q,a))return Q[a]},kb=function(a){if(!a||a.nodeType!==1)return;O&&(Lb(O,Z.activeClass),O!==a&&Lb(O,Z.hoverClass)),O=a,Kb(a,Z.hoverClass);var b=a.getAttribute("title")||Z.title;if(typeof b=="string"&&b){var c=Ab(K.bridge);c&&c.setAttribute("title",b)}var d=Z.forceHandCursor===!0||Mb(a,"cursor")==="pointer";Rb(d),Qb()},lb=function(){var a=Ab(K.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px"),O&&(Lb(O,Z.hoverClass),Lb(O,Z.activeClass),O=null)},mb=function(){return O||null},nb=function(a){return typeof a=="string"&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},ob=function(a){var b;typeof a=="string"&&a?(b=a,a={}):typeof a=="object"&&a&&typeof a.type=="string"&&a.type&&(b=a.type);if(!b)return;b=b.toLowerCase(),!a.target&&(/^(copy|aftercopy|_click)$/.test(b)||b==="error"&&a.name==="clipboard-error")&&(a.target=P),x(a,{type:b,target:a.target||O||null,relatedTarget:a.relatedTarget||null,currentTarget:K&&K.bridge||null,timeStamp:a.timeStamp||q()||null});var c=U[a.type];return a.type==="error"&&a.name&&c&&(c=c[a.name]),c&&(a.message=c),a.type==="ready"&&x(a,{target:null,version:K.version}),a.type==="error"&&(X.test(a.name)&&x(a,{target:null,minimumVersion:L}),Y.test(a.name)&&x(a,{version:K.version})),a.type==="copy"&&(a.clipboardData={setData:Vb.setData,clearData:Vb.clearData}),a.type==="aftercopy"&&(a=Eb(a,R)),a.target&&!a.relatedTarget&&(a.relatedTarget=pb(a.target)),qb(a)},pb=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?d.getElementById(b):null},qb=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var e=a.target,f=a.type==="_mouseover"&&a.relatedTarget?a.relatedTarget:b,g=a.type==="_mouseout"&&a.relatedTarget?a.relatedTarget:b,h=Nb(e),i=c.screenLeft||c.screenX||0,j=c.screenTop||c.screenY||0,k=d.body.scrollLeft+d.documentElement.scrollLeft,l=d.body.scrollTop+d.documentElement.scrollTop,m=h.left+(typeof a._stageX=="number"?a._stageX:0),n=h.top+(typeof a._stageY=="number"?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s=typeof a.movementX=="number"?a.movementX:0,t=typeof a.movementY=="number"?a.movementY:0;delete a._stageX,delete a._stageY,x(a,{srcElement:e,fromElement:f,toElement:g,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:t,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},rb=function(a){var b=a&&typeof a.type=="string"&&a.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(b)},sb=function(a,b,c,d){d?f(function(){a.apply(b,c)},0):a.apply(b,c)},tb=function(a){if(typeof a!="object"||!a||!a.type)return;var b=rb(a),d=N["*"]||[],e=N[a.type]||[],f=d.concat(e);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;g<h;g++)i=f[g],j=l,typeof i=="string"&&typeof c[i]=="function"&&(i=c[i]),typeof i=="object"&&i&&typeof i.handleEvent=="function"&&(j=i,i=i.handleEvent),typeof i=="function"&&(k=x({},a),sb(i,j,[k],b))}return this},ub=function(a){var b=null;if(J===!1||a&&a.type==="error"&&a.name&&V.indexOf(a.name)!==-1)b=!1;return b},vb=function(a){var b=a.target||O||null,c=a._source==="swf";delete a._source;switch(a.type){case"error":var d=a.name==="flash-sandboxed"||ub(a);typeof d=="boolean"&&(K.sandboxed=d),W.indexOf(a.name)!==-1?x(K,{disabled:a.name==="flash-disabled",outdated:a.name==="flash-outdated",unavailable:a.name==="flash-unavailable",degraded:a.name==="flash-degraded",deactivated:a.name==="flash-deactivated",overdue:a.name==="flash-overdue",ready:!1}):a.name==="version-mismatch"&&(M=a.swfVersion,x(K,{disabled:!1,outdated:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1})),Pb();break;case"ready":M=a.swfVersion;var e=K.deactivated===!0;x(K,{disabled:!1,outdated:!1,sandboxed:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:e,ready:!e}),Pb();break;case"beforecopy":P=b;break;case"copy":var f,g,h=a.relatedTarget;!Q["text/html"]&&!Q["text/plain"]&&h&&(g=h.value||h.outerHTML||h.innerHTML)&&(f=h.value||h.textContent||h.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",f),g!==f&&a.clipboardData.setData("text/html",g)):!Q["text/plain"]&&a.target&&(f=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",f));break;case"aftercopy":wb(a),Vb.clearData(),b&&b!==Jb()&&b.focus&&b.focus();break;case"_mouseover":Vb.focus(b),Z.bubbleEvents===!0&&c&&(b&&b!==a.relatedTarget&&!C(a.relatedTarget,b)&&xb(x({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),xb(x({},a,{type:"mouseover"})));break;case"_mouseout":Vb.blur(),Z.bubbleEvents===!0&&c&&(b&&b!==a.relatedTarget&&!C(a.relatedTarget,b)&&xb(x({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),xb(x({},a,{type:"mouseout"})));break;case"_mousedown":Kb(b,Z.activeClass),Z.bubbleEvents===!0&&c&&xb(x({},a,{type:a.type.slice(1)}));break;case"_mouseup":Lb(b,Z.activeClass),Z.bubbleEvents===!0&&c&&xb(x({},a,{type:a.type.slice(1)}));break;case"_click":P=null,Z.bubbleEvents===!0&&c&&xb(x({},a,{type:a.type.slice(1)}));break;case"_mousemove":Z.bubbleEvents===!0&&c&&xb(x({},a,{type:a.type.slice(1)}))}if(/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type))return!0},wb=function(a){if(a.errors&&a.errors.length>0){var b=y(a);x(b,{type:"error",name:"clipboard-error"}),delete b.success,f(function(){Vb.emit(b)},0)}},xb=function(a){if(!a||typeof a.type!="string"||!a)return;var b,e=a.target||null,f=e&&e.ownerDocument||d,g={view:f.defaultView||c,canBubble:!0,cancelable:!0,detail:a.type==="click"?1:0,button:typeof a.which=="number"?a.which-1:typeof a.button=="number"?a.button:f.createEvent?0:1},h=x(g,a);if(!e)return;f.createEvent&&e.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=f.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",e.dispatchEvent(b)))},yb=function(){var a=Z.flashLoadTimeout;if(typeof a=="number"&&a>=0){var b=Math.min(1e3,a/10),c=Z.swfObjectId+"_fallbackContent";T=h(function(){var a=d.getElementById(c);Ob(a)&&(Pb(),K.deactivated=null,Vb.emit({type:"error",name:"swf-not-found"}))},b)}},zb=function(){var a=d.createElement("div");return a.id=Z.containerId,a.className=Z.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+Sb(Z.zIndex),a},Ab=function(a){var b=a&&a.parentNode;while(b&&b.nodeName==="OBJECT"&&b.parentNode)b=b.parentNode;return b||null},Bb=function(){var a,b=K.bridge,e=Ab(b);if(!b){var f=Ib(c.location.host,Z),g=f==="never"?"none":"all",h=Gb(x({jsVersion:Vb.version},Z)),i=Z.swfPath+Fb(Z.swfPath,Z);e=zb();var j=d.createElement("div");e.appendChild(j),d.body.appendChild(e);var k=d.createElement("div"),l=K.pluginType==="activex";k.innerHTML='<object id="'+Z.swfObjectId+'" name="'+Z.swfObjectId+'" '+'width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+f+'"/>'+'<param name="allowNetworking" value="'+g+'"/>'+'<param name="menu" value="false"/>'+'<param name="wmode" value="transparent"/>'+'<param name="flashvars" value="'+h+'"/>'+'<div id="'+Z.swfObjectId+'_fallbackContent">&nbsp;</div>'+"</object>",b=k.firstChild,k=null,v(b).ZeroClipboard=Vb,e.replaceChild(b,j),yb()}return b||(b=d[Z.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&e&&(b=e.firstChild)),K.bridge=b||null,b},Cb=function(){var a=K.bridge;if(a){var c=Ab(a);c&&(K.pluginType==="activex"&&"readyState"in a?(a.style.display="none",function d(){if(a.readyState===4){for(var b in a)typeof a[b]=="function"&&(a[b]=null);a.parentNode&&a.parentNode.removeChild(a),c.parentNode&&c.parentNode.removeChild(c)}else f(d,10)}()):(a.parentNode&&a.parentNode.removeChild(a),c.parentNode&&c.parentNode.removeChild(c))),Pb(),K.ready=null,K.bridge=null,K.deactivated=null,M=b}},Db=function(a){var b={},c={};if(typeof a!="object"||!a)return;for(var d in a)if(d&&t.call(a,d)&&typeof a[d]=="string"&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d;break;default:}return{data:b,formatMap:c}},Eb=function(a,b){if(typeof a!="object"||!a||typeof b!="object"||!b)return a;var c={};for(var d in a)if(t.call(a,d))if(d==="errors"){c[d]=a[d]?a[d].slice():[];for(var e=0,f=c[d].length;e<f;e++)c[d][e].format=b[c[d][e].format]}else if(d!=="success"&&d!=="data")c[d]=a[d];else{c[d]={};var g=a[d];for(var h in g)h&&t.call(g,h)&&t.call(b,h)&&(c[d][b[h]]=g[h])}return c},Fb=function(a,b){var c=b==null||b&&b.cacheBust===!0;return c?(a.indexOf("?")===-1?"?":"&")+"noCache="+q():""},Gb=function(a){var b,d,e,f,g="",h=[];a.trustedDomains&&(typeof a.trustedDomains=="string"?f=[a.trustedDomains]:typeof a.trustedDomains=="object"&&"length"in a.trustedDomains&&(f=a.trustedDomains));if(f&&f.length)for(b=0,d=f.length;b<d;b++)if(t.call(f,b)&&f[b]&&typeof f[b]=="string"){e=Hb(f[b]);if(!e)continue;if(e==="*"){h.length=0,h.push(e);break}h.push.apply(h,[e,"//"+e,c.location.protocol+"//"+e])}return h.length&&(g+="trustedOrigins="+k(h.join(","))),a.forceEnhancedClipboard===!0&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),typeof a.swfObjectId=="string"&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+k(a.swfObjectId)),typeof a.jsVersion=="string"&&a.jsVersion&&(g+=(g?"&":"")+"jsVersion="+k(a.jsVersion)),g},Hb=function(a){if(a==null||a==="")return null;a=a.replace(/^\s+|\s+$/g,"");if(a==="")return null;var b=a.indexOf("//");a=b===-1?a:a.slice(b+2);var c=a.indexOf("/");return a=c===-1?a:b===-1||c===0?null:a.slice(0,c),a&&a.slice(-4).toLowerCase()===".swf"?null:a||null},Ib=function(){var a=function(a){var b,c,d,e=[];typeof a=="string"&&(a=[a]);if(typeof a!="object"||!a||typeof a.length!="number")return e;for(b=0,c=a.length;b<c;b++)if(t.call(a,b)&&(d=Hb(a[b]))){if(d==="*"){e.length=0,e.push("*");break}e.indexOf(d)===-1&&e.push(d)}return e};return function(b,c){var d=Hb(c.swfPath);d===null&&(d=b);var e=a(c.trustedDomains),f=e.length;if(f>0){if(f===1&&e[0]==="*")return"always";if(e.indexOf(b)!==-1)return f===1&&b===d?"sameDomain":"always"}return"never"}}(),Jb=function(){try{return d.activeElement}catch(a){return null}},Kb=function(a,b){var c,d,e,f=[];typeof b=="string"&&b&&(f=b.split(/\s+/));if(a&&a.nodeType===1&&f.length>0)if(a.classList)for(c=0,d=f.length;c<d;c++)a.classList.add(f[c]);else if(a.hasOwnProperty("className")){e=" "+a.className+" ";for(c=0,d=f.length;c<d;c++)e.indexOf(" "+f[c]+" ")===-1&&(e+=f[c]+" ");a.className=e.replace(/^\s+|\s+$/g,"")}return a},Lb=function(a,b){var c,d,e,f=[];typeof b=="string"&&b&&(f=b.split(/\s+/));if(a&&a.nodeType===1&&f.length>0)if(a.classList&&a.classList.length>0)for(c=0,d=f.length;c<d;c++)a.classList.remove(f[c]);else if(a.className){e=(" "+a.className+" ").replace(/[\r\n\t]/g," ");for(c=0,d=f.length;c<d;c++)e=e.replace(" "+f[c]+" "," ");a.className=e.replace(/^\s+|\s+$/g,"")}return a},Mb=function(a,b){var c=j(a,null).getPropertyValue(b);return b!=="cursor"||!!c&&c!=="auto"||a.nodeName!=="A"?c:"pointer"},Nb=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var e=a.getBoundingClientRect(),f=c.pageXOffset,g=c.pageYOffset,h=d.documentElement.clientLeft||0,i=d.documentElement.clientTop||0,j=0,k=0;if(Mb(d.body,"position")==="relative"){var l=d.body.getBoundingClientRect(),m=d.documentElement.getBoundingClientRect();j=l.left-m.left||0,k=l.top-m.top||0}b.left=e.left+f-h-j,b.top=e.top+g-i-k,b.width="width"in e?e.width:e.right-e.left,b.height="height"in e?e.height:e.bottom-e.top}return b},Ob=function(a){if(!a)return!1;var b=j(a,null),c=o(b.height)>0,d=o(b.width)>0,e=o(b.top)>=0,f=o(b.left)>=0,g=c&&d&&e&&f,h=g?null:Nb(a),i=b.display!=="none"&&b.visibility!=="collapse"&&(g||!!h&&(c||h.height>0)&&(d||h.width>0)&&(e||h.top>=0)&&(f||h.left>=0));return i},Pb=function(){g(S),S=0,i(T),T=0},Qb=function(){var a;if(O&&(a=Ab(K.bridge))){var b=Nb(O);x(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+Sb(Z.zIndex)})}},Rb=function(a){K.ready===!0&&(K.bridge&&typeof K.bridge.setHandCursor=="function"?K.bridge.setHandCursor(a):K.ready=!1)},Sb=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return typeof a=="number"&&!p(a)?b=a:typeof a=="string"&&(b=Sb(n(a,10))),typeof b=="number"?b:"auto"},Tb=function(b){var c,d,e,f=K.sandboxed,g=null;b=b===!0;if(J===!1)g=!1;else{try{d=a.frameElement||null}catch(h){e={name:h.name,message:h.message}}if(d&&d.nodeType===1&&d.nodeName==="IFRAME")try{g=d.hasAttribute("sandbox")}catch(h){g=null}else{try{c=document.domain||null}catch(h){c=null}if(c===null||e&&e.name==="SecurityError"&&/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase()))g=!0}}return K.sandboxed=g,f!==g&&!b&&Ub(l),g},Ub=function(a){function j(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function k(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||a.slice(-13)==="chrome.plugin")}function l(a){a&&(f=!0,a.version&&(i=j(a.version)),!i&&a.description&&(i=j(a.description)),a.filename&&(h=k(a.filename)))}var b,c,d,f=!1,g=!1,h=!1,i="";if(e.plugins&&e.plugins.length)b=e.plugins["Shockwave Flash"],l(b),e.plugins["Shockwave Flash 2.0"]&&(f=!0,i="2.0.0.11");else if(e.mimeTypes&&e.mimeTypes.length)d=e.mimeTypes["application/x-shockwave-flash"],b=d&&d.enabledPlugin,l(b);else if(typeof a!="undefined"){g=!0;try{c=new a("ShockwaveFlash.ShockwaveFlash.7"),f=!0,i=j(c.GetVariable("$version"))}catch(m){try{c=new a("ShockwaveFlash.ShockwaveFlash.6"),f=!0,i="6.0.21"}catch(n){try{c=new a("ShockwaveFlash.ShockwaveFlash"),f=!0,i=j(c.GetVariable("$version"))}catch(p){g=!1}}}}K.disabled=f!==!0,K.outdated=i&&o(i)<o(L),K.version=i||"0.0.0",K.pluginType=h?"pepper":g?"activex":f?"netscape":"unknown"};Ub(l),Tb(!0);var Vb=function(){if(!(this instanceof Vb))return new Vb;typeof Vb._createClient=="function"&&Vb._createClient.apply(this,w(arguments))};s(Vb,"version",{value:"2.2.0",writable:!1,configurable:!0,enumerable:!0}),Vb.config=function(){return $.apply(this,w(arguments))},Vb.state=function(){return _.apply(this,w(arguments))},Vb.isFlashUnusable=function(){return ab.apply(this,w(arguments))},Vb.on=function(){return bb.apply(this,w(arguments))},Vb.off=function(){return cb.apply(this,w(arguments))},Vb.handlers=function(){return db.apply(this,w(arguments))},Vb.emit=function(){return eb.apply(this,w(arguments))},Vb.create=function(){return fb.apply(this,w(arguments))},Vb.destroy=function(){return gb.apply(this,w(arguments))},Vb.setData=function(){return hb.apply(this,w(arguments))},Vb.clearData=function(){return ib.apply(this,w(arguments))},Vb.getData=function(){return jb.apply(this,w(arguments))},Vb.focus=Vb.activate=function(){return kb.apply(this,w(arguments))},Vb.blur=Vb.deactivate=function(){return lb.apply(this,w(arguments))},Vb.activeElement=function(){return mb.apply(this,w(arguments))};var Wb=0,Xb={},Yb=0,Zb={},$b={};x(Z,{autoActivate:!0});var _b=function(a){var b=this;b.id=""+Wb++,Xb[b.id]={instance:b,elements:[],handlers:{}},a&&b.clip(a),Vb.on("*",function(a){return b.emit(a)}),Vb.on("destroy",function(){b.destroy()}),Vb.create()},ac=function(a,c){var d,e,f,g={},h=Xb[this.id],i=h&&h.handlers;if(!h)throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");if(typeof a=="string"&&a)f=a.toLowerCase().split(/\s+/);else if(typeof a=="object"&&a&&typeof c=="undefined")for(d in a)t.call(a,d)&&typeof d=="string"&&d&&typeof a[d]=="function"&&this.on(d,a[d]);if(f&&f.length){for(d=0,e=f.length;d<e;d++)a=f[d].replace(/^on/,""),g[a]=!0,i[a]||(i[a]=[]),i[a].push(c);g.ready&&K.ready&&this.emit({type:"ready",client:this});if(g.error){for(d=0,e=W.length;d<e;d++)if(K[W[d].replace(/^flash-/,"")]){this.emit({type:"error",name:W[d],client:this});break}M!==b&&Vb.version!==M&&this.emit({type:"error",name:"version-mismatch",jsVersion:Vb.version,swfVersion:M})}}return this},bc=function(a,b){var c,d,e,f,g,h=Xb[this.id],i=h&&h.handlers;if(!i)return this;if(arguments.length===0)f=r(i);else if(typeof a=="string"&&a)f=a.split(/\s+/);else if(typeof a=="object"&&a&&typeof b=="undefined")for(c in a)t.call(a,c)&&typeof c=="string"&&c&&typeof a[c]=="function"&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;c<d;c++){a=f[c].toLowerCase().replace(/^on/,""),g=i[a];if(g&&g.length)if(b){e=g.indexOf(b);while(e!==-1)g.splice(e,1),e=g.indexOf(b,e)}else g.length=0}return this},cc=function(a){var b=null,c=Xb[this.id]&&Xb[this.id].handlers;return c&&(typeof a=="string"&&a?b=c[a]?c[a].slice(0):[]:b=y(c)),b},dc=function(a){if(ic.call(this,a)){typeof a=="object"&&a&&typeof a.type=="string"&&a.type&&(a=x({},a));var b=x({},ob(a),{client:this});jc.call(this,b)}return this},ec=function(a){if(!Xb[this.id])throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");a=kc(a);for(var b=0;b<a.length;b++)if(t.call(a,b)&&a[b]&&a[b].nodeType===1){a[b].zcClippingId?Zb[a[b].zcClippingId].indexOf(this.id)===-1&&Zb[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+Yb++,Zb[a[b].zcClippingId]=[this.id],Z.autoActivate===!0&&lc(a[b]));var c=Xb[this.id]&&Xb[this.id].elements;c.indexOf(a[b])===-1&&c.push(a[b])}return this},fc=function(a){var b=Xb[this.id];if(!b)return this;var c=b.elements,d;typeof a=="undefined"?a=c.slice(0):a=kc(a);for(var e=a.length;e--;)if(t.call(a,e)&&a[e]&&a[e].nodeType===1){d=0;while((d=c.indexOf(a[e],d))!==-1)c.splice(d,1);var f=Zb[a[e].zcClippingId];if(f){d=0;while((d=f.indexOf(this.id,d))!==-1)f.splice(d,1);f.length===0&&(Z.autoActivate===!0&&mc(a[e]),delete a[e].zcClippingId)}}return this},gc=function(){var a=Xb[this.id];return a&&a.elements?a.elements.slice(0):[]},hc=function(){if(!Xb[this.id])return;this.unclip(),this.off(),delete Xb[this.id]},ic=function(a){if(!a||!a.type)return!1;if(a.client&&a.client!==this)return!1;var b=Xb[this.id],c=b&&b.elements,d=!!c&&c.length>0,e=!a.target||d&&c.indexOf(a.target)!==-1,f=a.relatedTarget&&d&&c.indexOf(a.relatedTarget)!==-1,g=a.client&&a.client===this;return!b||!(e||f||g)?!1:!0},jc=function(a){var b=Xb[this.id];if(!(typeof a=="object"&&a&&a.type&&b))return;var d=rb(a),e=b&&b.handlers["*"]||[],f=b&&b.handlers[a.type]||[],g=e.concat(f);if(g&&g.length){var h,i,j,k,l,m=this;for(h=0,i=g.length;h<i;h++)j=g[h],k=m,typeof j=="string"&&typeof c[j]=="function"&&(j=c[j]),typeof j=="object"&&j&&typeof j.handleEvent=="function"&&(k=j,j=j.handleEvent),typeof j=="function"&&(l=x({},a),sb(j,k,[l],d))}},kc=function(a){return typeof a=="string"&&(a=[]),typeof a.length!="number"?[a]:a},lc=function(a){if(!a||a.nodeType!==1)return;var b=function(a){if(!a&&!(a=c.event))return;a._source!=="js"&&(a.stopImmediatePropagation(),a.preventDefault()),delete a._source},d=function(d){if(!d&&!(d=c.event))return;b(d),Vb.focus(a)};a.addEventListener("mouseover",d,!1),a.addEventListener("mouseout",b,!1),a.addEventListener("mouseenter",b,!1),a.addEventListener("mouseleave",b,!1),a.addEventListener("mousemove",b,!1),$b[a.zcClippingId]={mouseover:d,mouseout:b,mouseenter:b,mouseleave:b,mousemove:b}},mc=function(a){if(!a||a.nodeType!==1)return;var b=$b[a.zcClippingId];if(typeof b!="object"||!b)return;var c,d,e=["move","leave","enter","out","over"];for(var f=0,g=e.length;f<g;f++)c="mouse"+e[f],d=b[c],typeof d=="function"&&a.removeEventListener(c,d,!1);delete $b[a.zcClippingId]};Vb._createClient=function(){_b.apply(this,w(arguments))},Vb.prototype.on=function(){return ac.apply(this,w(arguments))},Vb.prototype.off=function(){return bc.apply(this,w(arguments))},Vb.prototype.handlers=function(){return cc.apply(this,w(arguments))},Vb.prototype.emit=function(){return dc.apply(this,w(arguments))},Vb.prototype.clip=function(){return ec.apply(this,w(arguments))},Vb.prototype.unclip=function(){return fc.apply(this,w(arguments))},Vb.prototype.elements=function(){return gc.apply(this,w(arguments))},Vb.prototype.destroy=function(){return hc.apply(this,w(arguments))},Vb.prototype.setText=function(a){if(!Xb[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Vb.setData("text/plain",a),this},Vb.prototype.setHtml=function(a){if(!Xb[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Vb.setData("text/html",a),this},Vb.prototype.setRichText=function(a){if(!Xb[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Vb.setData("application/rtf",a),this},Vb.prototype.setData=function(){if(!Xb[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Vb.setData.apply(this,w(arguments)),this},Vb.prototype.clearData=function(){if(!Xb[this.id])throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");return Vb.clearData.apply(this,w(arguments)),this},Vb.prototype.getData=function(){if(!Xb[this.id])throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");return Vb.getData.apply(this,w(arguments))},typeof define=="function"&&define.amd?define([],function(){return Vb}):typeof module=="object"&&module&&typeof module.exports=="object"&&module.exports?module.exports=Vb:a.ZeroClipboard=Vb})(function(){return this||window}())