var js = document.scripts,script, jsPath;
for(var i = 0 ; i < js.length ;i++ ){
    if(js[i].src && js[i].src.indexOf('js/require.js')>0 ){
        script = js[i];
        jsPath = script.src;
        break;
    }
}

require.config({
    baseUrl: jsPath.substring(0, jsPath.lastIndexOf("/") + 1),
    paths: {
        'jquery':'lib/jquery.min',
        'laydate':'lib/laydate/laydate',
        'template':'lib/template-native',
        'layer':'lib/layer/layer',
        'superSlide': 'lib/superSlide'
    },
    shim:{
        'laydate':{
            deps:['jquery']
        },
        'layer':{
            deps:['jquery']
        },
        'superSlide': {
            deps: ['jquery'],
            exports: 'jQuery.fn.slide'
        }
    }
});