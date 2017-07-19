$(function () {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width();
    $('head').append('<style>.header{height:' + windowHeight + 'px;width:100%;position: relative;color:#fff;background-image: url(../img/bg.jpg);background-repeat: no-repeat;background-size: 100% 100%}</style>');

    if (windowWidth < 768) {
        $('.navbar-header').css({'backgroundColor':'#fff'});
    }


//导航栏
    changeNav();
//下一页
    next();
//手机导航栏
    menuDown();
    closeMenu();
    //倒计时
    $('#new_year').flipcountdown({
        size:'sm',
        beforeDateTime:'3/11/2017 09:00:00'
    });
    // if (windowWidth > 768){
    //     //地图
    //     map();
    //
    // }
//微信内置浏览器点击
    weixinClick();
})

// //地图
// function map() {
//
//     //创建和初始化地图函数：
//     function initMap() {
//         createMap();//创建地图
//         setMapEvent();//设置地图事件
//         addMapControl();//向地图添加控件
//     }
//
//     //创建地图函数：
//     function createMap() {
//         var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
//         var point = new BMap.Point(121.565081,31.21446);//定义一个中心点坐标
//         map.centerAndZoom(point,16);//设定地图的中心点和坐标并将地图显示在地图容器中
//         window.map = map;//将map变量存储在全局
//     }
//
//     //地图事件设置函数：
//     function setMapEvent() {
//         map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
//         map.enableScrollWheelZoom();//启用地图滚轮放大缩小
//         map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
//         map.enableKeyboard();//启用键盘上下左右键移动地图
//     }
//
//     //地图控件添加函数：
//     function addMapControl() {
//         //向地图中添加缩放控件
//         var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL});
//         map.addControl(ctrl_nav);
//         //向地图中添加缩略图控件
//         var ctrl_ove = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 0});
//         map.addControl(ctrl_ove);
//         //向地图中添加比例尺控件
//         var ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
//         map.addControl(ctrl_sca);
//     }
//
//
//     initMap();//创建和初始化地图
//
// }

//跳转
function jump(target) {
    //利用a的href
    var target = target.children('a').attr("href");
    var navHeight=$($('.navbar')[0]).height();
    var targetScroll = $(target).offset().top - navHeight;
    $("html,body").animate({scrollTop: targetScroll}, 300);
}
//改变active类
function changeActive(target) {
    target.addClass('active')
        .siblings().removeClass('active');
}
function whiteNavBackground() {
    $('.navbar-default').css({'backgroundColor': '#fff'});
    $('#bs-example-navbar-collapse-1 .logo').removeClass('display');
    $('#bs-example-navbar-collapse-1 li a').css('color', '#404040');
}
function normalNavBackground() {
    $('.navbar-default').css({'backgroundColor': '#232323'});
    $('#bs-example-navbar-collapse-1 .logo').addClass('display');
    $('#bs-example-navbar-collapse-1 li a').css('color', '#fff');
}
//导航栏功能
function changeNav() {
    var nav = $('.nav'),
        aboutHeight = $('#about').offset().top,
        showScrollTop = $('#show').offset().top - 180,
        enrollScrollTop = $('#enroll').offset().top - 380,
        addressScrollTop = $('#address').offset().top - 380,
        partnerScrollTop = $('#partner').offset().top - 380,
        contactScrollTop = $('#contact').offset().top - 380,
        fixTop = aboutHeight - 30,
        scrollTop = null;

//点击事件
    $('.navbar li').each(function () {
        $(this).on('click', function () {
            $('.phone_nav').addClass('display');
            var $this = $(this);
            //改变高亮
            changeActive($this)
            //跳转
            jump($this);
        })
    })
//滚动事件
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

        //导航栏固定
        if (scrollTop > fixTop) {
            whiteNavBackground();
        } else {
            normalNavBackground();
        }
        //滑动定位导航
        if (0 <= scrollTop && scrollTop < showScrollTop) {
            changeActive($('#first'))
        } else if (showScrollTop <= scrollTop && scrollTop < enrollScrollTop) {
            changeActive($('#second'))
        } else if (enrollScrollTop <= scrollTop && scrollTop < addressScrollTop) {
            changeActive($('#third'))
        } else if (addressScrollTop <= scrollTop && scrollTop < partnerScrollTop) {
            changeActive($('#fourth'))
        } else if (partnerScrollTop <= scrollTop && scrollTop < contactScrollTop) {
            changeActive($('#fifth'))
        } else if (contactScrollTop <= scrollTop) {
            changeActive($('#sixth'))
        }
    }).trigger('scroll');


}


//下一页
function next() {
    $('.icon').on('click', function () {
        var targetScroll = $('#about').offset().top - 30;
        $('html,body').animate({scrollTop: targetScroll}, 300);
    })
}

//手机导航栏
function menuDown() {
    var windowHeight = $(window).height()-50,
        windowWidth = $(window).width();
    $('#navBtn').click(function () {
        $('head').append('<style>.phone_nav{position: fixed;top: 50px;left: 0;height:' + windowHeight + 'px;width:' + windowWidth + 'px;background-color: rgba(0,0,0,.8);z-index:50;}</style>');
        $('.phone_nav').removeClass('display');
    })
}

//关闭菜单
function closeMenu() {
    $('#close_nav').on('click', function () {
        $('.phone_nav').addClass('display');
    });
}

function weixinClick() {
    $('.touch').each(function () {
        var $this=$(this);
        $(this).on('touchstart',function () {
           $($this.find('div')[0]).css('display','block');
            $this.siblings().find('div').css('display','none');
        });
    });

}


