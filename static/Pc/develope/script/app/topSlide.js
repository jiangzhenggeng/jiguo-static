define(['jquery'], function ($) {
    //初始化轮播
    function initSlide() {
        var vis = 4;
        var slideWrap = $('.top-list-box');
        slideWrap.each(function () {
            var slideBox = $(this).find('ul');
            var slide = slideBox.find('li');
            var slideW = slide.outerWidth(true);
            var slideInnerW = slide.outerWidth();
            var slideGoLen = slideW * vis;
            var slideLen = slide.length;
            var slideMr = slideW - slideInnerW;

            if (slideLen > vis) {
                slideBox.css({width: slideW * slideLen});
            } else {
                slideBox.css({width: '100%'});
                $(this).find('.prev-btn').hide();
                $(this).find('.next-btn').hide();
            }

            //下一页
            $(this).find('.next-btn').click(function () {
                var that = this;
                var pos = getPos(this);
                var prevBtn = $(this).siblings('.prev-btn');
                var slideBox = $(this).closest('.top-list-box').find('ul');
                if ((pos.boxW - pos.wrapW - slideMr) <= pos.left || slideBox.is(':animated')) {
                    return;
                }
                if ((pos.left + slideGoLen + pos.wrapW) > pos.boxW) {
                    var goLen = pos.boxW - pos.wrapW - pos.left - slideMr;
                } else {
                    var goLen = slideGoLen;
                }
                slideBox.animate({marginLeft: '-=' + goLen}, 'slow', function () {
                    var pos = getPos(that);
                    if ((pos.boxW - pos.wrapW - slideMr) <= pos.left) {
                        $(that).hide();
                    }
                    if (pos.left > 0) {
                        prevBtn.show();
                    }
                });
            });

            //前一页
            $(this).find('.prev-btn').click(function () {
                var that = this;
                var pos = getPos(this);
                var nextBtn = $(this).siblings('.next-btn');
                var slideBox = $(this).closest('.top-list-box').find('ul');
                if (pos.left <= 0 || slideBox.is(':animated')) {
                    return;
                }
                if (pos.left - slideGoLen < 0) {
                    var goLen = pos.left;
                } else {
                    var goLen = slideGoLen;
                }
                slideBox.animate({marginLeft: '+=' + goLen}, 'slow', function () {
                    var pos = getPos(that);
                    if (pos.left <= 0) {
                        $(that).hide();
                    }
                    if ((pos.boxW - pos.wrapW) > pos.left) {
                        nextBtn.show();
                    }
                });
            });
        });
    }

    //获取轮播组件位置信息
    function getPos(that) {
        var wrap = $(that).closest('.top-list-box');
        var wrapW = wrap.width();
        var slideBox = wrap.find('ul');
        var boxW = slideBox.width();
        var left = Math.abs(parseInt(slideBox.css('marginLeft')));
        return {
            wrapW: wrapW,
            boxW: boxW,
            left: left
        }
    }

    return {
        initSlide: initSlide
    }
});