define(["app/downLoadErweima","jquery","index","app/login","layer","app/tplEngine","app/countdown","app/videoAdapt","app/lazyload","app/function","cookie"],function(a,b,c,d,e,f,g,h,i,j){function k(){a.loadErweima({title:"已售罄，下次记得早点来哦！",content:(a.isWeixin()?"长安识别二维码":"微信扫码")+"关注极果试用服务号，了解最新折扣试用信息，更快人一步！"})}function l(){function i(){var a=f.init(b("#public-list-tpl").html());b.get("/api/event/publiclist/"+q+".html",function(c){c.success=="true"?(b("#public-list").append(a({data:c.result.meta_list})),p(b("#public-list").find("[data-down-time]")),m=c.result.num):(m=0,b("#public-list").append("暂无数据"))},"json")}function l(){var a=f.init(b("#meta-list-tpl").html());b.get("/api/event/eventtypelist/"+q+".html",function(c){if(c.success=="true"){b("#meta-list").append(a({data:c.result})),b("[data-goApp]").removeAttr("data-login"),p(b("#meta-list").find("[data-down-time]"));var d=window.location.href.split("#")[1],e=0;b("#"+d+"").length>0&&(e=b("#"+d+"").offset().top-55,b("html,body").animate({scrollTop:e},300));var f=!0;for(var g in c.result)if(c.result[g].meta_type==1||c.result[g].buying_num>0){f=!1;break}function h(){m==-1?setTimeout(h,500):m<=0&&f&&k()}h()}else b("#meta-list").append("暂无数据")},"json")}function n(){function a(){b.get("/api/event/Getarticle.html",{id:q,limit:c,size:3},function(a){a.success=="true"?(a.result.data.length>0&&(b("#apply-report-list li").length>0?(d=g({data:a.result.data}),b("#apply-report-list").append(d)):(d=e({data:a.result.data}),b("#apply-report-wrapper").append(d))),a.result.data.length<3&&b(".look-more-artical").removeClass("more").html("没有更多了~"),c=a.limit):b("#apply-report-list").append('<span class="error">数据错误</span>')},"json")}var c=0,d="",e=f.init(b("#apply-report-wrapper-tpl").html()),g=f.init(b("#apply-report-list-tpl").html());a(),b("body").on("click",".more",function(){a()})}function o(){window.__no_session_cache__=!0,new c.init({url:"/api/comment/geteventapply.html",size:10,boxDom:"#apply-list",tplDom:"#apply-list-tpl",sendData:{id:q},callBack:function(a,c){b("#apply-list .ugc:not([data-show])").each(function(){var a=b(this).find(".line-num");a&&a.position().top>b(this).height()&&(b(this).attr("data-show",""),b(this).after('<a href="javascript:;" class="look-more">展开</a>'))})}}),b("body").on("click",".look-more",function(){b(this).siblings(".ugc").removeClass("text-ellipsis-5"),b(this).remove()})}function p(a){a.each(function(){if(parseInt(b(this).text())<=0)return;var a=parseInt(b(this).text())+Date.parse(new Date)/1e3,c=b(this),d=c.parent(),e=d.siblings(".meta-btn").find("a");e.data("href",e.data("href")||e.attr("href")),e.attr("href",e.attr("href")||"javascript:;"),g.timeDown({dom:c,intDiff:a,callback:function(){var a=c.parent(),b=a.siblings(".meta-btn").find("a"),d=b.data("href")||"",e=b.attr("data-bun-text")||"立即申请";b.removeClass("gray").addClass("red").removeAttr("style").text(e),d&&b.attr("href",d),a.remove()},runing:function(a){var b=c.data("reserve_time"),d=c.data("time_left");if(b&&d&&b>a.time){var e=c.parent(),f=e.siblings(".meta-btn").find("a"),g=f.attr("data-bun-text")||"即将开始",h=f.data("href")||f.attr("href")||"javascript:;";f.removeAttr("data-reserve"),typeof f.attr("data-goapp")!="undefined"?f.removeClass("gray").addClass("red").removeAttr("style").attr("href",h).text(g):f.removeClass("red").addClass("gray").removeAttr("style").attr("href","javascript:;").text(g),f.data("href",h)}}})})}var q=b("#eventid").val()||/(\d+)/.exec(window.location)[0],r=b(window).width()-24,s="<style>.mian-stream li.large .stream-box .stream-img{height:"+r*320/640+"px !important;}"+"</style>";b("head").eq(0).append(s),b(".desc-more img").parent("p").css({margin:0});var t=b(window).height()*2;b(".event-desc").height(t),b(".read-more").on("click",function(){b(this).css("z-index",-100),b(".event-desc").height("auto")}),b(".desc-more img").each(function(){b(this).height(b(this).width()/b(this).data("width")*b(this).data("height"))}),b(".desc-more").height()<=t&&b(".read-more").trigger("click"),n(),i(),l(),o();var u=b("body").width()-24;h.init({width:u}),b("body").on("click","[data-login]",function(){if(b(this).attr("href")=="javascript:;")return;return d.login(b(this).attr("href")),!1}),b("body").on("click","[data-alert]",function(a){a.preventDefault();if(b(this).attr("href")=="javascript:;")return;var c=f.init(b("#alert-tpl").html()),d=b(this).data("alert"),g=e.open({type:1,anim:"up",shade:"background-color: rgba(0,0,0,.3)",style:"width:75%;border-radius:5px",content:c({html:d}),success:function(a,c){b("body").on("click",".know-close",function(){e.close(g)})}})}),b("body").on("click","[data-pc]",function(a){a.preventDefault();var c=f.init(b("#alert-tpl").html()),d=e.open({type:1,anim:"up",shade:"background-color: rgba(0,0,0,.3)",style:"width:75%;border-radius:5px",content:c({html:"请用电脑打开该试用进行申请"}),success:function(a,c){b("body").on("click",".know-close",function(){e.close(d)})}})}),b("body").on("click","[data-like]",function(){if(!window.URL.login)return d.login(),!1;var a=b(this);b(this).hasClass("on")?b.get("/api/praise/praise",{id_value:q,type:6,status:-1},function(b){a.removeClass("on").find("i").removeClass("on animate")},"json"):b.get("/api/praise/praise",{id_value:q,type:6,status:1},function(b){b.resultCode=="-100"?d.login():b.resultCode=="0"?a.addClass("on").find("i").addClass("on animate"):e.msg("操作失败~请稍后再试")},"json")}),b("body").on("click","[data-share]",function(){j.share()}),b("body").on("click","[data-buy]",function(){j.buy()}),b("body").on("click","[data-reserve]",function(c){c.preventDefault();if(!window.URL.login)return d.login(),!1;var f=b(this).data("mid"),g=b(this),h=e.open({skin:"msg",time:999999,content:"预约中"});b.get("/api/event/EventReserve",{mid:f},function(b){if(b.resultCode==0){g.html('<span style="color:#07B25F;font-size:14px">预约成功</span>'),g.css({"border-color":"transparent"});return}b.resultCode==-100?a.loadErweima({title:'<span style="    color: #999;\n    font-size: 12px;\n    line-height: 18px;\n    display: block;\n    padding-bottom: 5px;">微信扫码关注<span style="color:#333">【极果试用】</span><br>服务号完成预约</span>',image:b.result.url}):b.resultCode==99?d.login():e.open({skin:"msg",time:2,content:b.errorMsg||"预约失败"})},"json").fail(function(){e.open({skin:"msg",time:2,content:"预约失败"})}).always(function(){e.close(h)})}),window.onload=function(){b("#goAnchor").on("click",function(a){a.preventDefault();var c=b("#meta-list > .meta-item");if(c.length==1){var d=c.find(".meta-btn a[href]"),e=d.attr("href");if(e){b.removeCookie("request"),b.cookie("request",encodeURIComponent(e),"/"),window.location=e+"?callbackurl="+encodeURIComponent(e);return}}var f=b(b(this).attr("href")).offset().top-52;b("html,body").animate({scrollTop:f},300)})}}var m=-1;return{init:l}})