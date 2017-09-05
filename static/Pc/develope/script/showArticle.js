
/**
 +----------------------------------------------------------
 //文章显示页
 +----------------------------------------------------------
 */

define([
    'jquery',
    "app/blogAjaxLoad",
    "app/videoAdapt",
    "app/lazyload",
    "app/comment",
    'app/cardAuto'
],function ($,blogAjaxLoad,videoAdapt,lazyload,comment,cardAuto) {
    //视频自适应大小
    videoAdapt.init({
        selecter:'.article-content-show',
        width:640,
    });

    //图片延迟加载模块
    lazyload.init('.article-content-show img');

    //获取关联产品
    blogAjaxLoad.getLinkProduct(blogid);

    //点赞
    blogAjaxLoad.praise({
        trigger:'[data-ajax-praise]',
        data:{
            id_value:blogid,
            status:is_praise,
            type:2,
        },
    });

    //收藏
    blogAjaxLoad.praise({
        trigger:'[data-ajax-collect]',
        tips:'您已收藏',
        data:{
            id_value:blogid,
            status:is_show,
            type:4,
        },
    },'collect');
    //获取点赞用户列表
    blogAjaxLoad.getPariseList(blogid);

    /**
     * 43.【PC】正文图片截取，当前是截取的图片的上方部分，变更为截取图片的中间部分
     * @type {any}
     */

    // var articleCoverObj = $('.article-cover'),
    //     articleCoverObjImg = articleCoverObj.find('img');
    // articleCoverObjImg.css('marginTop',-(articleCoverObjImg.height()-articleCoverObj.height())/2);


    //卡片
    cardAuto.init();

    //加载评论
    comment.init();
    //初始化发布pingl
    comment.sendComment();

    return{
        loadRelative:function () {
            //获取相关文章
            blogAjaxLoad.getRelative({
                id:blogid,
                type:4,
                size:4,
                limit:0
            });

            //加载更多相关文章

            // 下一页
            $("#relative-article-warp").on("click",".next",function(){
                if($(this).hasClass("next-stop")){
                    return;
                }
                var ulWidth=730;
                var slide=$(".choice-event-content-wrap");
                var slideWidth=slide.width();
                var slideLeft=slide.position().left;
                var limitNum=$(this).attr("limit-data");

                if(slide.is(":animated")) {
                    return;
                }
                $(".prev").removeClass("prev-stop");

                //如果本页内容是最后一页，触发加载器
                if(slideLeft<=2*ulWidth-slideWidth){
                    blogAjaxLoad.getRelative({
                        id:blogid,
                        size:4,
                        type:4,
                        limit:limitNum||1
                    });
                }else{
                    slide.animate({left:"-=730px"},500);
                }

            });

            //前一页
            $("#relative-article-warp").on("click",".prev",function(){
                var ulWidth=730;
                var slide=$(".choice-event-content-wrap");
                var slideLeft=slide.position().left;
                var _this=$(this);
                if(slide.is(":animated")) {
                    return;
                }
                $(".next").removeClass("next-stop");

                if(slideLeft+ulWidth>10){
                    _this.addClass("prev-stop");
                    return;
                }
                slide.animate({left:"+=730px"},500,function(){
                    slideLeft=slide.position().left;
                    if(slideLeft+ulWidth>10){
                        _this.addClass("prev-stop");
                    }
                });
            });
        }
    }
});