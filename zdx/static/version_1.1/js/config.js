var js=document.scripts,script,jsPath;for(var i=0;i<js.length;i++)if(js[i].src&&js[i].src.indexOf("js/require.js")>0){script=js[i],jsPath=script.src;break}require.config({baseUrl:jsPath.substring(0,jsPath.lastIndexOf("/")+1),paths:{jquery:"lib/jquery.min",laydate:"lib/laydate/laydate",template:"lib/template",layer:"lib/layer/layer",ueditor:"http://zdm.jiguo.com/protected/extensions/editor/ueditor.all",ZeroClipboard:"lib/zeroclipboard/ZeroClipboard",uploadify:"http://zdm.jiguo.com/protected/extensions/uploadify/jquery.uploadify.min"},shim:{jquery:{deps:["template"]},laydate:{deps:["jquery"]},layer:{deps:["jquery"]},uploadify:{deps:["jquery"],exports:"jQuery.fn.uploadify"},ueditor:{deps:["http://zdm.jiguo.com/protected/extensions/editor/third-party/zeroclipboard/ZeroClipboard.min.js","http://zdm.jiguo.com/protected/extensions/editor/ueditor.config.js"],exports:"UE",init:function(a){window.ZeroClipboard=a}}}})