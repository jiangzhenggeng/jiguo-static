define(["jquery","index","app/login","layer","app/tplEngine","app/countdown","app/videoAdapt","app/lazyload","app/function"],function(a,b,c,d,e,f,g,h,i){function j(){function j(){var b=e.init(a("#public-list-tpl").html());a.get("/api/event/publiclist/"+h+"",function(c){c.success=="true"?(a("#public-list").append(b({data:c.result.meta_list})),n(a("#public-list").find("[data-down-time]"))):a("#public-list").append("暂无数据")},"json")}function k(){var b=e.init(a("#meta-list-tpl").html());a.get("/api/event/eventtypelist/"+h+"",function(c){if(c.success=="true"){a("#meta-list").append(b({data:c.result})),a("[data-goApp]").removeAttr("data-login"),n(a("#meta-list").find("[data-down-time]"));var d=window.location.href.split("#")[1],e=0;a("#"+d+"").length>0&&(e=a("#"+d+"").offset().top-55,a("html,body").animate({scrollTop:e},300))}else a("#meta-list").append("暂无数据")},"json")}function l(){function g(){a.get("/api/event/Getarticle",{id:h,limit:b,size:3},function(e){e.success=="true"?(e.result.data.length>0&&(a("#apply-report-list li").length>0?(c=f({data:e.result.data}),a("#apply-report-list").append(c)):(c=d({data:e.result.data}),a("#apply-report-wrapper").append(c))),e.result.data.length<3&&a(".look-more-artical").removeClass("more").html("没有更多了~"),b=e.limit):a("#apply-report-list").append('<span class="error">数据错误</span>')},"json")}var b=0,c="",d=e.init(a("#apply-report-wrapper-tpl").html()),f=e.init(a("#apply-report-list-tpl").html());g(),a("body").on("click",".more",function(){g()})}function m(){window.__no_session_cache__=!0,new b.init({url:"/api/comment/geteventapply.html",size:10,boxDom:"#apply-list",tplDom:"#apply-list-tpl",sendData:{id:h},callBack:function(b,c){a("#apply-list .ugc:not([data-show])").each(function(){var b=a(this).find(".line-num");b&&b.position().top>a(this).height()&&(a(this).attr("data-show",""),a(this).after('<a href="javascript:;" class="look-more">展开</a>'))})}}),a("body").on("click",".look-more",function(){a(this).siblings(".ugc").removeClass("text-ellipsis-5"),a(this).remove()})}function n(b){b.each(function(){var b=parseInt(a(this).text())+Date.parse(new Date)/1e3,c=a(this);f.timeDown({dom:c,intDiff:b,callback:function(){var a=c.parent(),b=a.siblings(".meta-btn").find("a"),d=b.data("href")||"",e=b.attr("data-bun-text")||"立即申请";b.removeClass("gray").addClass("red").attr("href",d).text(e),a.remove()}})})}var h=a("#eventid").val()||/(\d+)/.exec(window.location)[0],o=a(window).width()-24,p="<style>.mian-stream li.large .stream-box .stream-img{height:"+o*320/640+"px !important;}"+"</style>";a("head").eq(0).append(p),a(".desc-more img").parent("p").css({margin:0});var q=a(window).height()*2;a(".event-desc").height(q),a(".read-more").on("click",function(){a(this).css("z-index",-100),a(".event-desc").height("auto")}),a(".desc-more img").each(function(){a(this).height(a(this).width()/a(this).data("width")*a(this).data("height"))}),a(".desc-more").height()<=q&&a(".read-more").trigger("click"),l(),j(),k(),m();var r=a("body").width()-24;g.init({width:r}),a("body").on("click","[data-login]",function(){if(a(this).attr("href")=="javascript:;")return;return c.login(),!1}),a("body").on("click","[data-alert]",function(b){b.preventDefault();if(a(this).attr("href")=="javascript:;")return;var c=e.init(a("#alert-tpl").html()),f=a(this).data("alert"),g=d.open({type:1,anim:"up",shade:"background-color: rgba(0,0,0,.3)",style:"width:75%;border-radius:5px",content:c({html:f}),success:function(b,c){a("body").on("click",".know-close",function(){d.close(g)})}})}),a("body").on("click","[data-pc]",function(b){b.preventDefault();var c=e.init(a("#alert-tpl").html()),f=d.open({type:1,anim:"up",shade:"background-color: rgba(0,0,0,.3)",style:"width:75%;border-radius:5px",content:c({html:"请用电脑打开该试用进行申请"}),success:function(b,c){a("body").on("click",".know-close",function(){d.close(f)})}})}),a("body").on("click","[data-like]",function(){if(!window.URL.login)return c.login(),!1;var b=a(this);a(this).hasClass("on")?a.get("/api/praise/praise",{id_value:h,type:6,status:-1},function(a){b.removeClass("on").find("i").removeClass("on animate")},"json"):a.get("/api/praise/praise",{id_value:h,type:6,status:1},function(a){a.resultCode=="-100"?c.login():a.resultCode=="0"?b.addClass("on").find("i").addClass("on animate"):d.msg("操作失败~请稍后再试")},"json")}),a("body").on("click","[data-share]",function(){i.share()}),a("body").on("click","[data-buy]",function(){i.buy()}),window.onload=function(){a("#goAnchor").on("click",function(b){b.preventDefault();var c=a(a(this).attr("href")).offset().top-52;a("html,body").animate({scrollTop:c},300)})}}return{init:j}})