/**
 * Created by wuhongshan on 2017/6/6.
 */
require.config({
    baseUrl: 'http://cdn.jiguo.com/static/zdx/version_1.0/js/',
    paths: {
        'jquery':'lib/jquery.min',
        'jqueryUI':'lib/jquery_ui',
        'laydate':'lib/laydate/laydate',
        'template':'lib/template',
        'layer':'lib/layer/layer',
        'ueditor':'http://zdm.jiguo.com/protected/extensions/editor/ueditor.all',
        //剪贴板插件
        'ZeroClipboard': 'lib/zeroclipboard/ZeroClipboard',
        //多文件上传插件
        'uploadify': 'http://zdm.jiguo.com/protected/extensions/uploadify/jquery.uploadify.min',
    },
    shim:{
        'jquery':{
            deps:['template']
        },
        'jqueryUI':{
            deps:['jquery']
        },
        'laydate':{
            deps:['jquery']
        },
        'layer':{
            deps:['jquery']
        },
        'uploadify': {
            deps: ['jquery'],
            exports: 'jQuery.fn.uploadify',
        },
        'ueditor': {
            deps: [
                'http://zdm.jiguo.com/protected/extensions/editor/third-party/zeroclipboard/ZeroClipboard.min.js',
                'http://zdm.jiguo.com/protected/extensions/editor/ueditor.config.js'
            ],
            exports: 'UE',
            init: function (ZeroClipboard) {
                //导出到全局变量，供ueditor使用
                window.ZeroClipboard = ZeroClipboard;
            }
        },
    }
});