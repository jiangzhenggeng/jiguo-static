/**
 +----------------------------------------------------------
 //倒计时
 +----------------------------------------------------------
 */

define(['require', 'jquery'], function (require, $) {

    function _t(options) {

        this.options = $.extend({
            tplFn: '',
            //倒计时秒数
            intDiff: 60,
            //倒计时结束回调函数
            callback: $.loop,
            //倒计时框
            dom: null,
            //是否全局
            isglobal: false,
            //在中途执行事件时间
            overTime: 0,
            //在中途执行的事件
            overCallBack: $.loop
        }, options);

        this.options.dom = $(this.options.dom);

        _t.prototype.run = function () {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0;//时间默认值

            var options = this.options;


            options.intDiff--;

            if (options.intDiff > 0) {
                day = Math.floor(options.intDiff / (60 * 60 * 24));
                hour = Math.floor(options.intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(options.intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(options.intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;

            if (typeof options.tplFn == 'function') {
                options.tplFn(day, hour, minute, second, options.intDiff);
            } else {
                var tpl = (day > 0 ? (day + "天") : ('')) + (hour > 0 ? (hour + "时") : ('')) + minute + '分' + second + '秒';
                options.dom.html(tpl);
            }
            if (options.overTime && options.overTime > 0 && (options.intDiff == options.overTime)) {
                if (options.isglobal) {
                    options.overCallBack();
                } else {
                    options.overCallBack.call(options.dom);
                }
            } else if (options.intDiff <= 0) {
                // this.options.intDiff = 60;
                if (options.isglobal) {
                    options.callback();
                } else {
                    options.callback.call(options.dom);
                }
                this.timer && clearInterval(this.timer);
                return;
            }
            // var _this = this;
            // setTimeout(function () {
            //     _this.run();
            // }, 1000);
        }
    }

    return {
        run: function (options) {
            var o = new _t(options);
            o.timer = setInterval(function () {
                o.run();
            }, 1000);
        }
    }
});
