requirejs.config({

    baseUrl: 'http://cdn.jiguo.com/static/Mb/compression_3.7/script/',

    waitSeconds: 0,

    paths: {
        //试用模块百度编辑器依赖配置
        'jquery': 'lib/jquery-2.2.3',
        'cookie': 'lib/cookie',
        'touchSlide': 'lib/TouchSlide.1.1',
        'layer': 'lib/layer/layer',
        'socket.io': 'lib/socket.io',
        'touchSwipe': 'lib/jquery.touchSwipe',
        'ZeroClipboard': 'lib/zeroclipboard/ZeroClipboard',
        'swipebox':'lib/swipebox/jquery.swipebox'
    },
    shim: {
        'cookie': {
            deps: ['jquery'],
            exports: 'jQuery.fn.cookie'
        },
        'touchSwipe': {
            deps: ['jquery'],
            exports: 'jQuery.fn.swipe'
        },
        'layer':{
            deps: ['css!lib/layer/need/layer.css'],
        },
        'swipebox':{
            deps:['jquery','css!lib/swipebox/swipebox.css'],
            exports:'jQuery.fn.swipebox'
        },
    }
});
