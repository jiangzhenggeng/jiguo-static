requirejs.config({

    baseUrl: 'http://cdn.jiguo.com/zdx/nvidia/Pc/version_1.0/js/',

    waitSeconds: 0,

    paths: {
        //试用模块百度编辑器依赖配置
        'jquery': 'lib/jquery.min',
        'superSlide': 'lib/superSlide',
        'layer': 'lib/layer/layer',
        'laydate':'lib/laydate/laydate',
        'template':'lib/template-native'
    },
    shim: {
        'layer':{
            deps: ['css!lib/layer/need/layer.css'],
        },
        'superSlide': {
            deps: ['jquery'],
            exports: 'jQuery.fn.slide'
        },
        'laydate': {
            deps: ['jquery']
        }
    }
});
