/**
 +----------------------------------------------------------
 //首页优化文件
 +----------------------------------------------------------
 */

define([
    'jquery'
],function ($){

    return {
        login:function (url) {
            window.location = '/mb/user/login.html?callbackurl='+encodeURIComponent(url||window.location.href);
        }
    };

});
