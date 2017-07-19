$(function () {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width();
    $('head').append('<style>.header{height:' + windowHeight + 'px;width:100%;position: relative;color:#fff;background-image: url( http://cdn.jiguo.com/special/GTIC/images/header-pc.png);background-repeat: no-repeat;background-size: cover}</style>');
    $('head').append('<style>.report-item{position: fixed;top: 0;left: 0;height:' + windowHeight + 'px;width:' + windowWidth + 'px;background-color: rgba(0,0,0,.6);z-index:200;}</style>');
    $('head').append('<style>.report-box{position: absolute;top:' + windowHeight / 2 + 'px;left:' + windowWidth / 2 + 'px;width:960px;height:640px;margin-top:-320px;margin-left:-480px;background-color: #fff;z-index:11;}</style>');

    // 轮播
    swiper();

    //下一页
    headNext();
    next('#about');
    next('#GTIC');
    next('#park');
    next('#enroll');
    //导航
    changeNav();


})


// 轮播
function swiper() {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        // autoplay: 3000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    });
}


// 下一页
function headNext() {
    $('#header .icon').on('click',function () {
        var navHeight = $('.nav').height();
        var targetScroll = $('#about').offset().top - navHeight;
        $("html,body").animate({scrollTop: targetScroll}, 300);
    })
}
function next(target) {
    $('' + target + ' .icon').on('click', function () {
        var navHeight = $('.nav').height();
        var targetScroll = $(target).next().offset().top - navHeight;
        $("html,body").animate({scrollTop: targetScroll}, 300);
    })
}


//导航栏功能


//跳转
function jump(target) {
    //利用a的href
    var target = target.children('a').attr("href");
    var navHeight = $('.nav').height();
    var targetScroll = $(target).offset().top - navHeight+50;
    $("html,body").animate({scrollTop: targetScroll}, 300);
}
//改变active类
function changeActive(target) {
    target.addClass('active')
        .siblings().removeClass('active');
}
function changeNav() {
    var nav = $('.nav'),
        navHeight = $('.nav').height(),
        aboutScrollTop,
        schedulingScrollTop,
        guestScrollTop,
        GTICScrollTop,
        parkScrollTop,
        enrollScrollTop,
        addressScrollTop,
        partnerScrollTop,
        contactScrollTop,
        fixTop,
        scrollTop;

//点击事件
    $('.nav li').each(function () {
        $(this).on('click', function () {
            var $this = $(this);
            //改变高亮
            changeActive($this)
            //跳转
            jump($this);
        })
    })

//滚动事件
    $(window).scroll(function () {
        aboutScrollTop = $('#about').offset().top - navHeight;
        schedulingScrollTop = $('#scheduling').offset().top - navHeight;
        GTICScrollTop = $('#GTIC').offset().top - navHeight;
        parkScrollTop = $('#park').offset().top - navHeight;
        enrollScrollTop = $('#enroll').offset().top - navHeight;
        addressScrollTop = $('#address').offset().top - navHeight;
        partnerScrollTop = $('#partner').offset().top - navHeight;
        contactScrollTop = $('#contact').offset().top - navHeight;
        fixTop = aboutScrollTop - navHeight;
        scrollTop = $(window).scrollTop();
        //导航栏固定
        if (scrollTop > fixTop) {
            nav.css({'position':'fixed'});
            nav.addClass('navColor');
            nav.find('img').removeClass('display');
        } else {
            nav.css({'position':'absolute'});
            nav.removeClass('navColor');
            nav.find('img').addClass('display');
        }

//滑动定位导航
        if (0 <= scrollTop && scrollTop < schedulingScrollTop) {
            changeActive($('#first'))
        } else if (schedulingScrollTop <= scrollTop && scrollTop < GTICScrollTop) {
            changeActive($('#nine'))
        } else if (GTICScrollTop <= scrollTop && scrollTop < parkScrollTop) {
            changeActive($('#third'))
        } else if (parkScrollTop <= scrollTop && scrollTop < enrollScrollTop) {
            changeActive($('#fourth'))
        } else if (enrollScrollTop <= scrollTop && scrollTop < addressScrollTop) {
            changeActive($('#fifth'))
        } else if (addressScrollTop <= scrollTop && scrollTop < partnerScrollTop) {
            changeActive($('#sixth'))
        } else if (partnerScrollTop <= scrollTop && scrollTop < contactScrollTop) {
            changeActive($('#seventh'))
        } else if (contactScrollTop <= scrollTop) {
            changeActive($('#eighth'))
        }
        console.log($('#partner').offset().top,navHeight,$('#partner').offset().top-navHeight,partnerScrollTop);
    }).trigger('scroll');


}


