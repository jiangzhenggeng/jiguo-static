({
    baseUrl: '../develope/js',
    out:'../version_1.4/js/main.js',
    name:'main',
    optimizeCss:'standard',
    fileExclusionRegExp:'\.(less|html|php|psd|PSD|DS_Store)$',
    paths: {
        //试用模块百度编辑器依赖配置
        'jquery': 'lib/jquery.min',
        'layer': 'lib/layer/layer',
        'laydate': 'lib/laydate/laydate',
        'template':'lib/template-native',
        // 'ueconfig':'http://zdm.jiguo.com/protected/extensions/editor/ueditor.config',
        // 'ueditor':'http://zdm.jiguo.com/protected/extensions/editor/ueditor',
        // 'zeroclipboard':'http://zdm.jiguo.com/protected/extensions/editor/third-party/zeroclipboard/ZeroClipboard.min',
    },
    shim: {
        'laydate': {
            deps: ['jquery']
        },
        'layer': {
            deps: ['jquery']
        },
        // 'ueditor': {
        //     deps: [
        //         'http://www.jiguo.com/protected/extensions/ueditor/third-party/zeroclipboard/ZeroClipboard.min.js',
        //         'http://www.jiguo.com/protected/extensions/ueditor/ueditor.config.js'
        //     ]
        // }
    }
})