/**
 * Created by wangkang on 2017/6/2.
 */
define(['jquery','layer','self/common','template','self/creatUE'],function ($,layer,common,template,UE){

    function GetIsRead() {//获取是否已经阅读过的信息
        $(document).ready(
            function () {
                $.each($('.Z-grab-NewsList li'),function () {
                    var listId = $(this).find('span.id').text();
                    //console.log(listId);
                    if(localStorage.getItem(listId)){
                        $(this).find('img').removeClass('Z-vis');
                        $(this).find('a').addClass('Z-visible');
                    }
                })
            }
        )

    }

    function test(layero) {
        var title=layero.find('.grab-layerTitle input').val();
        var l = 0;
        var reg = /[\w\s\d\.]/;
        for(var i=0;i<title.length;i++){
            l+= reg.test(title[i])?0.5:1;
        }
        if(l > 19){
            layer.msg('字数限制为19字,现输入'+l+'字');
            layero.find('.grab-layerTitle input').focus();
            return false;
        }
        return true;
    }

    function newsListClick(option) {
        var options=$.extend({
                width:'100%',
                height:'100%',
                template:null,
                addurl:null
                },option);
            var i=0;
        $('.addArticle,.Z-grab-NewsList li').on('click',function (event) {
            //console.log($(this).find('img'));
            $(this).find('img').removeClass('Z-vis');
            $(this).find('a').addClass('Z-visible');
                i++;
                var listId = $(this).find('span.id').text();
                localStorage.setItem(listId,true);
                var classId=$(this).find('span.classId').text();
                  var articleTitle=$(this).find('span.articleTitle').text();
                  var mediaSource=$(this).find('span.mediaSource').text();
                  var URL=$(this).find('span.URL').text();
                  var content=$(this).find('span.content').data('content');
            if(listId) {
                    var templateData = {
                        tpl: i,
                        listId: listId,
                        classId: classId,
                        articleTitle: articleTitle,
                        mediaSource: mediaSource,
                        URL: URL,
                        content: content
                    }
                }
            else{
                templateData={tpl:i};
            }
            common.showBox('编辑文章','100%','100%',template(option.template,templateData),function (layero) {
                $('body').keydown(function (e) {
                    console.log(e.keyCode);
                    if(e.keyCode == 27){
                        layer.closeAll();
                    }
                })
                UE.init('Z-grab-textContentID-'+i+'');
                common.testTitle(layero.find('.grab-layerTitle input')[0],19);
                layero.find('#morning').click(function () {
                   if($(this).is(':checked')){
                       layero.find('.Z-grab-classify').show();
                   }else{
                       layero.find('.Z-grab-classify').hide();
                   }
                });
                if(layero.find('.Z-grab-contentEdit input[name=id]').val()) {
                    var classId = layero.find('.Z-grab-classify').data('classid');
                    // console.log(classId);
                    layero.find('.Z-grab-classify option[value=' + classId + ']').attr('selected', 'selected');
                }
                layero.find('input[data-submit]').on('click',function (event) {
                    event.preventDefault();
                    if(!test(layero)){
                        return false;
                    }
                    // var articleTitle = layero.find('.Z-grab-layerTitle').data();
                    // var mediaSource = layero.find('.Z-grab-resource').val();
                    // var URL = layero.find('.Z-grab-linkage').val();
                    // var content = layero.find('.Z-grab-textContent').val();
                    var data=layero.find('.Z-grab-contentEdit').serialize();
                    common.ajax('post','http://wx.zhidx.com/zhidx/content/AddNews',data,'json',function () {
                        layer.msg('操作成功',function () {
                           layer.closeAll();
                           window.location.reload();
                        })
                    });
                })
            });
        })
    }

    return {
        newsListClick: newsListClick,
        GetIsRead : GetIsRead,
        test:test
    };

})
