/**
 * Created by wuhongshan on 2017/4/7.
 */

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
        'cropper':'lib/cropper/cropper',
        'echarts':'lib/echarts.common.min',
        'gifshot':'lib/gifshot.min',

    },
    shim:{
        'laydate':{
            deps:['jquery']
        },
        'layer':{
            deps:['jquery']
        },
          'cropper':{
            deps:['css!lib/cropper/cropper']
          },
    }
});