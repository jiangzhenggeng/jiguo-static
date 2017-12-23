({
    baseUrl: '../develope/js',
    out:'../version_1.0/js/main.js',
    name:'main',
    optimizeCss:'standard',
    fileExclusionRegExp:'\.(less|html|php|psd|PSD|DS_Store)$',
    paths: {
        'jquery': 'lib/jquery.min',
        'layer': 'lib/layer/layer',
        'laydate': 'lib/laydate/laydate',
        'template':'lib/template',
        'ueconfig':'http://zdm.jiguo.com/protected/extensions/editor/ueditor.config',
        'ueditor':'http://zdm.jiguo.com/protected/extensions/editor/ueditor',
    },
    shim: {
        'laydate': {
            deps: ['jquery']
        },
        'layer': {
            deps: ['jquery']
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
})