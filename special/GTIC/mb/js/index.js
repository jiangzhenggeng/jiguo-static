/**
 * Created by wuhongshan on 2016/12/20.
 */
$(function () {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width();
    $('head').append('<style>.header{height:' + windowHeight + 'px;width:100%;position: relative;color:#fff;background: url( http://cdn.jiguo.com/special/GTIC/images/header_mb.png) no-repeat center center;background-size: cover}</style>');
    // $('head').append('<style>.report-item{position: fixed;top:0;left:0;width:100%;height:' + windowHeight + 'px;background-color:#fff;z-index:101;}</style>');
    swiper();
    menuDown();
    menuClose();
    next('#header');
    next('#GTIC');
    next('#park');
    next('#enroll');
})


// 轮播
function swiper() {
    var mySwiper = new Swiper('.swiper-container', {
        // loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    });
}

//跳转
function jump(target) {
    //利用a的href
    var target = target.children('a').attr("href");
    var navHeight = $('.nav').height();
    var targetScroll = $(target).offset().top - navHeight;
    $("html,body").animate({scrollTop: targetScroll}, 300);
    console.log(targetScroll);
}
//手机导航栏
function menuDown() {
    var navHeight = $('.nav').height(),
        windowHeight = $(window).height() - navHeight,
        windowWidth = $(window).width();
    $('#menu-down').click(function () {
        $('head').append('<style>.navbar{position: absolute;top: ' + navHeight + 'px;left: 0;height:' + windowHeight + 'px;width:100%;background-color: #000;z-index:50;}</style>');
        $('.navbar').removeClass('display');
        $(this).addClass('display');
        $('#menu-close').removeClass('display');
    })
    //点击事件
    $('.navbar li').each(function () {
        $(this).on('click', function () {
            $('.navbar').addClass('display');
            var $this = $(this);
            //跳转
            jump($this);
            $('#menu-close').addClass('display');
            $('#menu-down').removeClass('display');
        })
    })
}

//关闭菜单
function menuClose() {
    $('#menu-close').on('click', function () {
        $('.navbar').addClass('display');
        $(this).addClass('display');
        $('#menu-down').removeClass('display');
    });
}

// 下一页
function next(target) {
    $('' + target + ' .icon').on('click', function () {
        var navHeight = $('.nav').height();
        var targetScroll = $(target).next().offset().top - navHeight;
        $("html,body").animate({scrollTop: targetScroll}, 300);
    })
}