

define([
    'jquery',
    'ext/ui/select',
    'laydate',
    'layer',
    'ueditor',
    'cookie',
    'uploadify',
],function ($,select,laydate,layer,UE,cookie,uploadify){
    return {
        selectInit: function (selector) {
            //初始化模拟select下拉框
            select.init(selector);
        },
        dateUi: function () {
            /*********************
             * 时间选择器
             *********************/
            function setTimeSelect(start,end){
                var startObj = {
                    elem: start || '#start',
                    format: 'YYYY-MM-DD hh:mm:ss',
                    min: '1970-01-1 23:59:59', //设定最小日期为当前日期
                    max: '2099-06-16 23:59:59', //最大日期
                    istime: true,
                    istoday: false,
                    choose: function(datas){
                        startObj.min = datas; //开始日选好后，重置结束日的最小日期
                        startObj.start = datas //将结束日的初始值设定为开始日
                    }
                };
                var endObj = {
                    elem: end || '#end',
                    format: 'YYYY-MM-DD hh:mm:ss',
                    min: '1970-01-1 23:59:59',
                    max: '2099-06-16 23:59:59',
                    istime: true,
                    istoday: false,
                    choose: function(datas){
                        endObj.max = datas; //结束日选好后，重置开始日的最大日期
                    }
                };
                laydate(startObj);
                laydate(endObj);
            }

            /*********************
             * 时间选择器
             *********************/
            function layerTimer(select) {
                var startObj = {
                    elem: select,
                    format: 'YYYY-MM-DD hh:mm:ss',
                    min: '1970-01-1 23:59:59', //设定最小日期为当前日期
                    max: '2099-06-16 23:59:59', //最大日期
                    istime: true,
                    istoday: false
                };
                laydate(startObj);
            }
            if(arguments.length==1){
                layerTimer(arguments[0]);
            }else if(arguments.length==2){
                setTimeSelect(arguments[0],arguments[1]);
            }else {
                alert('必须传入id');
            }
        }
    };
});