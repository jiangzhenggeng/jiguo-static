/**
 +----------------------------------------------------------
 //首页获取公告
 +----------------------------------------------------------
 */

define([
    'jquery',
    'app/tplEngine',
    'lib/jquery.easing'
],function ($,tplEngine){
    return {
        init:function () {
            var tpl = '<% for(var i in data){ %>' +
                '<li><a href="/mb/event/index/<%=data[i].eventid%>.html" class="announcement-item">' +
                '<span class="announcement-event-name"><%=data[i].play_name%></span>' +
                '<span class="username"><%=data[i].username%></span>' +
                '<%=data[i].content%>' +
                '</a></li>' +
                '<% } %>',
                cacheTplFun = tplEngine.init(tpl),
                wrapMain = $('.announcement-main'),
                htmlBox = $('#ajax-loading-announcement-box');
            $.get('/api/event/getBulletins',function (replayDate) {
                if(replayDate.resultCode==0){
                    wrapMain.show();
                    var html = cacheTplFun({data:replayDate.result});
                    htmlBox.html( html+html );
                    var cellLi = htmlBox.find('li');
                    var cellLen = cellLi.length / 2;
                    var cellHei = cellLi.first().height();
                    var scorllNum = 0;
                    var setTimeFn = function () {
                        cellLi.removeClass('on').eq(scorllNum).addClass('on');
                        htmlBox.animate({
                            marginTop:- scorllNum * cellHei
                        },'easeOutQuad',function () {
                            if( scorllNum >= cellLen ){
                                scorllNum = 0;
                                htmlBox.css('margin-top',0);
                            }
                            scorllNum ++ ;
                        });
                        setTimeout(function () {
                            setTimeFn();
                        },4000);
                    };
                    setTimeFn();
                }
            },'json');
        }
    };

});
