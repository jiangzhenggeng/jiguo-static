requirejs.config({baseUrl:"http://cdn.jiguo.com/zdm/static/version_1.1/js/",waitSeconds:0,paths:{jquery:"lib/jquery.min",layer:"lib/layer/layer",laydate:"lib/laydate/laydate",template:"lib/template-native",ueconfig:"http://zdm.jiguo.com/protected/extensions/editor/ueditor.config",ueditor:"http://zdm.jiguo.com/protected/extensions/editor/ueditor",zeroclipboard:"http://zdm.jiguo.com/protected/extensions/editor/third-party/zeroclipboard/ZeroClipboard.min"},shim:{layer:{deps:["css!lib/layer/need/layer.css"]},ueditor:{deps:["http://www.jiguo.com/protected/extensions/ueditor/third-party/zeroclipboard/ZeroClipboard.min.js","http://www.jiguo.com/protected/extensions/ueditor/ueditor.config.js"]}}})