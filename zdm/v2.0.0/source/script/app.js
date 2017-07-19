/*********************
 * 字符串扩展方法
 *********************/
try {
    String.prototype.trim=function(){
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    String.prototype.ltrim=function(){
        return this.replace(/(^\s*)/g,"");
    }
    String.prototype.rtrim=function(){
        return this.replace(/(\s*$)/g,"");
    }
}catch (e){}


requirejs.config({
    baseUrl:'http://cdn.jiguo.com/zdm/v2.0.0/source/script/',

    paths: {
        'ueditor': 'http://zdm.jiguo.com/protected/extensions/editor/ueditor.all.min',

        //试用模块百度编辑器依赖配置
        'ueditor.config_event': 'http://zdm.jiguo.com/protected/extensions/editor/ueditor.config_event',
        'jquery': 'lib/jquery-1.12.3.min',
        'cookie': 'lib/cookie',
        'laydate': 'lib/laydate/laydate',
        'layer': 'lib/layer/layer',
        'uploadify':'http://zdm.jiguo.com/protected/extensions/uploadify/jquery.uploadify.min',
    },
    shim: {
        'ueditor': {
            deps: [
                'http://zdm.jiguo.com/protected/extensions/editor/third-party/zeroclipboard/ZeroClipboard.min.js',
                'http://zdm.jiguo.com/protected/extensions/editor/ueditor.config.js'
            ],
            exports: 'UE',
            init:function(ZeroClipboard){
                //导出到全局变量，供ueditor使用
                window.ZeroClipboard = ZeroClipboard;
            }
        },
        'uploadify': {
            deps: ['jquery'],
            exports: 'jQuery.fn.uploadify',
        },

        'jquery.cookie': {
            deps: ['jquery'],
            exports: 'jQuery.fn.cookie'
        },
        'laydate': {
            deps: ['jquery']
        },
        'layer': {
            deps: ['jquery']
        },
    }
});