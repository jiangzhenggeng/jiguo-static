var js=document.scripts,script,jsPath;for(var i=0;i<js.length;i++)if(js[i].src&&js[i].src.indexOf("js/require.js")>0){script=js[i],jsPath=script.src;break}require.config({baseUrl:jsPath.substring(0,jsPath.lastIndexOf("/")+1),paths:{ueditor:"http://zdm.jiguo.com/protected/extensions/editor/ueditor",zeroclipboard:"http://zdm.jiguo.com/protected/extensions/editor/third-party/zeroclipboard/ZeroClipboard.min",jquery:"lib/jquery.min",laydate:"lib/laydate/laydate",template:"lib/template-native",layer:"lib/layer/layer",gif:"lib/gif",cropper:"lib/cropper/cropper",echarts:"lib/echarts.common.min"},shim:{laydate:{deps:["jquery"]},layer:{deps:["jquery"]},cropper:{deps:["css!lib/cropper/cropper"]},ueditor:{deps:["http://zdm.jiguo.com/protected/extensions/editor/ueditor.config.js"],exports:"UE",init:function(a){window.ZeroClipboard=a}}}})