window.EV_C={},window.EV_C.host="http://www.jiguo.com",window.UEDITOR_HOME_URL=window.EV_C.host+"/protected/extensions/ueditor/";var js=document.scripts,script,jsPath;for(var i=0;i<js.length;i++)if(js[i].src&&js[i].src.indexOf("script/require.js")>0){script=js[i],jsPath=script.src;break}requirejs.config({baseUrl:jsPath.substring(0,jsPath.lastIndexOf("/")+1),paths:{ueditor:"http://"+window.location.host+"/protected/extensions/ueditor/ueditor.all.min",jquery:"lib/jquery-1.12.3.min",cookie:"lib/cookie",superSlide:"lib/superSlide",laydate:"lib/laydate/laydate",layer:"lib/layer/layer","socket.io":"lib/socket.io",ZeroClipboard:"lib/zeroclipboard/ZeroClipboard",uploadify:"http://"+window.location.host+"/protected/extensions/uploadify/jquery.uploadify.min",pjax:"lib/jquery.pjax"},shim:{"socket.io":{exports:"io"},uploadify:{deps:["jquery"],exports:"jQuery.fn.uploadify"},cookie:{deps:["jquery"],exports:"jQuery.fn.cookie"},superSlide:{deps:["jquery"],exports:"jQuery.fn.slide"},laydate:{deps:["jquery"]},layer:{deps:["jquery"]},pjax:{deps:["jquery"]},ueditor:{deps:["http://www.jiguo.com/protected/extensions/ueditor/third-party/zeroclipboard/ZeroClipboard.min.js","http://www.jiguo.com/protected/extensions/ueditor/ueditor.config.js"],exports:"UE",init:function(a){window.ZeroClipboard=a}}}})