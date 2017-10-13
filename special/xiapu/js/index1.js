//新品
getData({
    url:'http://www.jiguo.com/api/article/GetXiaPuXinPin',
    tplDom:'xinpin-list-tpl',
    boxDom:'xinpin-list-box'
});
//体验报告
getData({
    url:'http://www.jiguo.com/api/article/GetXiaPuArticle',
    tplDom:'blog-list-tpl',
    boxDom:'blog-list-box'
});
//导航跳转
$('.nav a').click(function () {
    var id = $(this).data('target');
    var target = $('#'+id);
    var offsetTop = target.offset().top;
    $('html,body').animate({scrollTop:offsetTop},160);
    $(this).addClass('on').siblings().removeClass('on');
});

function changeNav() {
    var nav = $('.nav'),
        navHeight = $('.nav').height(),
        indexScrollTop = $('#index').offset().top - navHeight,
        sjjhScrollTop = $('#sjjh').offset().top - navHeight,
        sqtyScrollTop = $('#sqty').offset().top - navHeight,
        rmxpScrollTop = $('#rmxp').offset().top - navHeight,
        tybgScrollTop = $('#tybg').offset().top - navHeight,
        tyspScrollTop = $('#tysp').offset().top - navHeight,
        hdhgScrollTop = $('#hdhg').offset().top - navHeight,
        fixTop = indexScrollTop - navHeight,
        scrollTop = null;
    //滚动事件
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
    //滑动定位导航
        if (0 <= scrollTop && scrollTop < sjjhScrollTop) {
            changeActive($('#first'))
        } else if (sjjhScrollTop <= scrollTop && scrollTop < sqtyScrollTop) {
            changeActive($('#second'))
        } else if (sqtyScrollTop <= scrollTop && scrollTop < rmxpScrollTop) {
            changeActive($('#third'))
        } else if (rmxpScrollTop <= scrollTop && scrollTop < tybgScrollTop) {
            changeActive($('#fourth'))
        } else if (tybgScrollTop <= scrollTop && scrollTop < tyspScrollTop) {
            changeActive($('#fifth'))
        } else if (tyspScrollTop <= scrollTop && scrollTop < hdhgScrollTop) {
            changeActive($('#sixth'))
        } else {
            changeActive($('#seventh'))
        }
    }).trigger('scroll');
}
changeNav();
function changeActive(dom) {
    dom.addClass('on').siblings().removeClass('on');
}

//加载新品、体验报告内容
function getData(option) {
    $.ajax({
        type: "get",
        async: false,
        url: option.url,
        dataType: "jsonp",
        success: function(replayData){
            var data = {data:replayData};
            var html = template(option.tplDom, data);
            $('#'+option.boxDom).html(html);
        },
        error: function(){
            console.log(data);
        }
    });
}

//体验报告轮播
$('.tybg .firstPage').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('#blog-list-box').animate({marginLeft:'0'},160);
});
$('.tybg .sencondPage').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('#blog-list-box').animate({marginLeft:'-1010px'},160);
});

//体验视频
$('.video-list li').click(function () {
    if($(this).hasClass('on')) return;
    var url = $(this).data('url');
    $(this).addClass('on').siblings().removeClass('on');
    $('.show-video iframe').attr('src',url);
});
//体验趴轮播
$(".typhg-list").slide({
    mainCell: ".hd ul",
    effect: "leftLoop",
    trigger: "click",
    prevCell: ".prev",
    nextCell: ".next",
    autoPlay: true,
    interTime:5000,
});