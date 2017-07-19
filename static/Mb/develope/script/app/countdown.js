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
            callback: function () {

            },
            //倒计时框
            dom: null
        }, options);

        this.options.dom = $(this.options.dom);

        var day = 0,
            hour = 0,
            minute = 0,
            second = 0,
            options = this.options;
        _t.prototype.run = function () {
            day = 0,
                hour = 0,
                minute = 0,
                second = 0,
                options = this.options;
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
                var tpl = (day > 0 ? (day + "天") : ('')) + (hour > 0 ? (hour + '时') : ('')) + minute + '分' + second + '秒';
                options.dom.html(tpl);
            }
            if (options.intDiff <= 0) {
                clearInterval(displayTime);
                options.callback();
                return;
            }
            var _this = this;
            var displayTime = setTimeout(function () {
                _this.run();
            }, 1000);
        };
        _t.prototype.timeDown = function () {
                day = 0,
                hour = 0,
                minute = 0,
                second = 0,
                options = this.options,
            options.time = options.intDiff - Math.floor(Date.parse(new Date()) / 1000);
            if (options.time > 0) {
                day = Math.floor(options.time / (60 * 60 * 24));
                hour = Math.floor(options.time / (60 * 60)) - (day * 24);
                minute = Math.floor(options.time / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(options.time) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            if (typeof options.tplFn == 'function') {
                options.tplFn(day, hour, minute, second, options.intDiff);
            } else {
                var tpl = (day > 0 ? (day + "天") : ('')) + (hour > 0 ? (hour + '时') : ('')) + minute + '分' + second + '秒';
                options.dom.html(tpl);
            }
            if (options.time <= 0) {
                clearInterval(displayTime);
                options.callback();
                return;
            }
            var _this = this;
            var displayTime = setTimeout(function () {
                _this.timeDown();
            }, 1000);
        };
    }

    return {
        run: function (options) {
            var o = new _t(options);
            o.run();
        },
        timeDown: function (options) {
            var o = new _t(options);
            o.timeDown();
        },

    }
});
