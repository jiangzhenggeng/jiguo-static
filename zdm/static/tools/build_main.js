({
    baseUrl: '../develope/js',
    out:'../version_1.6/js/main.js',
    name:'main',
    optimizeCss:'standard',
    fileExclusionRegExp:'\.(less|html|php|psd|PSD|DS_Store)$',
    paths: {
        //试用模块百度编辑器依赖配置
        'jquery': 'lib/jquery.min',
        'layer': 'lib/layer/layer',
        'laydate': 'lib/laydate/laydate',
        'template':'lib/template-native',
    },
    shim: {
        'laydate': {
            deps: ['jquery']
        },
        'layer': {
            deps: ['jquery']
        }
    }
})