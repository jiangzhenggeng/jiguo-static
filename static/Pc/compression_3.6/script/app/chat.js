define(["global.fun","app/tplEngine","app/unitTool","socket.io","layer"],function(a,b,c,d,e){var f=require("jquery"),g=[],h=0,i=f(".update-number"),j=i.css("top");return{getCommentItemData:function(){function a(a){var b=this;if(b.data("loading"))return;b.data("loading",!0),b.loadingObj.stop(!1,!0).slideDown(160),f.get("/api/live/GetCommentList",{id:window.DATA.id,type:0,limit:b.data("limit")||0,tag:b.data("tagid")||0},function(e){setTimeout(function(){b.loadingObj.stop(!1,!0).slideUp(160,function(){b.data("loading",!1)})},800);if(e.result&&c.getLength(e.result.data)>0){var f=e.result.data,g=a({data:f});b.find("li").length?b.find("li").first().before(g):b.append(g),b.data("limit",e.result.limit),d.countdown()}},"json")}var d=this,e=f("#comment-list-data-warp"),g=b.init(f("#comment-list-data-warp-tpl").html());e.loadingObj=f(".right-loading-more"),e.data("loading",!1),a.apply(e,[g]);var h=Date.parse(new Date),i=f(".chat-daren-warp");i.on("mousewheel DOMMouseScroll",function(b){if(e.data("loading")||Date.parse(new Date)-h<1e3)return b.preventDefault(),!1;var c=b.originalEvent.wheelDelta&&(b.originalEvent.wheelDelta>0?1:-1)||b.originalEvent.detail&&(b.originalEvent.detail>0?-1:1);c>0&&f(this).scrollTop()<=0&&(h=Date.parse(new Date),a.apply(e,[g]))})},getliveItemData:function(){function a(a,b){var e=this;if(e.data("loading"))return;e.data("loading",!0),e.loadingObj.show(),e.noDataObj.hide(),f.get("/api/live/GetCommentList",{id:window.DATA.id,type:2,limit:e.data("limit")||0,tag:e.data("tagid")||0},function(f){e.loadingObj.hide();if(f.result&&c.getLength(f.result.data)>0){var g=f.result.data,h=a({data:g});b?e.html(h):e.append(h),e.data("limit",f.result.limit),e.data("loading",!1),d.countdown(),c.getLength(f.result.data)<20&&(e.data("loading",!0),e.noDataObj.show())}else e.data("loading",!0),e.noDataObj.show()},"json")}var d=this,e=f("#live-list-data-warp"),g=e.height(),h=f(window).height(),j=f(window).scrollTop(),k=b.init(f("#live-list-data-warp-tpl").html());e.loadingObj=f(".loading-more"),e.noDataObj=f(".no-data"),e.data("loading",!1);var l=f("[data-category-tag]"),m=l.height(),n=f(".chat-right"),o=f("body > .header").outerHeight(),p=f(".chat-right-inner .headetr").outerHeight(),q=f(".chat-input").outerHeight(),r=10,s=f(".chat-daren-warp"),t=o+p+q+40+r-2,u=l.offset().top,v=n.offset().top,w=f(window).width(),x=(w-1080)/2;window.dataCategoryTagFixed=!1,f(window).scroll(function(){g=e.height(),j=f(window).scrollTop(),j>=g-h&&a.apply(e,[k]),f(window).scrollTop()+o>=u?(l.addClass("fixed"),l.css("left",x>=0?x:0),window.dataCategoryTagFixed=!0):(l.removeClass("fixed"),l.css("left","0"),window.dataCategoryTagFixed=!1),f(window).scrollTop()+o>=v?n.addClass("fixed"):n.removeClass("fixed")}),f(window).resize(function(){s.css({height:f(window).height()-t}),f(window).width()>1080?n.css({right:(f(window).width()-1080)/2,left:"auto"}):n.css({left:1080-n.width()})}),f(".chat-main").css("min-height",f(window).height()),s.css({height:f(window).height()-t}),f(window).width()>1080?n.css({right:(f(window).width()-1080)/2,left:"auto"}):n.css({left:1080-n.width()}),n.animate({opacity:1},160),i.click(function(){e.data("loading",!1),e.data("limit",0),window.liveTag=window.liveTag2,a.apply(e,[k,!0]),f(this).animate({opacity:0},100,function(){f(this).hide()})});var y=f(".category-tag"),z=y.find("ul"),A=y.find("li"),B=f(".chat-content-body-warp").offset().top;y.on("click","li",function(){A.removeClass("on"),f(this).addClass("on"),window.__tagId__=f(this).find("a").attr("data-tag-id"),e.data("loading",!1),e.data("limit",0),e.data("tagid",window.__tagId__),a.apply(e,[k,!0]);var b=f(this).width(),c=f(window).width()-375,d=f(this).offset().left,g=z.width(),h=z.scrollLeft();d>c/2?z.animate({scrollLeft:h+(d-c/2-b/2)}):z.animate({scrollLeft:h-(c/2-d-b/2)}),window.location=window.location.href.split("#")[0]+"#"+window.__tagId__,window.dataCategoryTagFixed&&f(window).scrollTop(B-70-38-6)}),window.location.href.split("#").length==2?window.__tagId__=window.location.href.split("#")[1]:window.__tagId__=0,y.find("li a[data-tag-id="+window.__tagId__+"]").parent().trigger("click"),y.on("click",".category-tag-next",function(){z.animate({scrollLeft:z.scrollLeft()+80}),y.find(".category-tag-prev").addClass("on")}).on("click",".category-tag-prev",function(){z.animate({scrollLeft:z.scrollLeft()-80}),y.find(".category-tag-next").addClass("on")})},countdown:function(){var a=f(".card-kill:not([data-countdown-runing])");a.attr("data-countdown-runing","runing");var b,c;a.each(function(){b=f(this).find("[data-card-kill-timer]"),g.push({startTime:b.attr("data-starttime"),endTime:b.attr("data-endtime"),elem:b,elemBox:f(this),elemWarp:b.parent(),btn:f(this).find(".card-buy")})}),g.length&&this.countdownRun()},countdownRun:function(){clearTimeout(window.timer),window.timer=null;var a,b,c,d,e,h,i,j=Math.floor,k,l,m,n,o=[],p=99,q=p,r,s,t=null,u=Math.floor(1e3/(p+1)),v,w=f(window).height(),x;f(window).resize(function(){w=f(window).height()});var y=function(a){return k=j(a/3600),l=j(a/60)-k*60,m=a-k*60*60-l*60,k<=9&&(k="0"+(k>=0?k:0)),l<=9&&(l="0"+(l>=0?l:0)),m<=9&&(m="0"+(m>=0?m:0)),n='<span class="kill-timer-number">'+k+"</span>时<!--",n+='--><span class="kill-timer-number">'+l+"</span>分<!--",n+='--><span class="kill-timer-number">'+m+"</span>秒<!--",n+='--><span class="kill-timer-number millisecond">'+q+"</span>",n},z=new Date,A=z.getDate(),B,C=!1,D=function(){if(g.length<=0&&window.timer){clearTimeout(window.timer),window.timer=null;return}x=f(window).scrollTop();for(var i=0;i<g.length;i++){d=g[i],v=d.elemWarp.offset().top;if(v>w+x||v<x)continue;b=d.elemBox,c=d.elem,e=d.startTime,h=d.endTime,r=d.btn,a=Math.ceil(Date.parse(new Date)/1e3);if(e<=a&&h>=a)n=y(h-a>=0?h-a:0),c.html(n),r.addClass("on");else if(d.startTime>a){var j=new Date(parseInt(e)*1e3),s=j.getMonth()+1,t=j.getDate();k=j.getHours(),l=j.getMinutes(),m=j.getSeconds(),k<=9&&(k="0"+(k>=0?k:0)),l<=9&&(l="0"+(l>=0?l:0)),m<=9&&(m="0"+(m>=0?m:0));var A=Math.floor(new Date(z.getFullYear()+"/"+(z.getMonth()+1)+"/"+z.getDate()+" "+"23:59:59")/1e3);e-A<=0?B="今天":e-A<=86400?B="明天":B='<span class="kill-timer-number">'+s+"</span>月"+'<span class="kill-timer-number">'+t+"</span>日",n=B+'<span class="kill-timer-number">'+k+"</span>:"+'<span class="kill-timer-number">'+l+"</span>",c.html(n+"开始"),r.removeClass("on"),o.push(i)}else if(d.endTime<=0||!d.endTime){var j=new Date(parseInt(e)*1e3),s=j.getMonth()+1,t=j.getDate();k=j.getHours(),l=j.getMinutes(),m=j.getSeconds(),t<=9&&(t="0"+(t>=0?t:0)),k<=9&&(k="0"+(k>=0?k:0)),l<=9&&(l="0"+(l>=0?l:0)),m<=9&&(m="0"+(m>=0?m:0)),n='<span class="kill-timer-number">'+s+"</span>月"+'<span class="kill-timer-number">'+t+"</span>日"+'<span class="kill-timer-number">'+k+"</span>:"+'<span class="kill-timer-number">'+l+"</span>",c.html("秒杀已于"+n+"开始"),r.addClass("on").html("购买"),o.push(i)}else d.endTime<a&&(r.removeClass("on").html("已结束"),c.html("秒杀已结束"),o.push(i))}o.sort(function(a,b){return a<=b}),o.length&&console.log(o);for(var i=0;i<o.length;i++)g.splice(o[i],1);C=!0,o=[],q--,q=q<0?p:q,window.timer=setTimeout(D,u)};window.timer=setTimeout(D,u)},chatChangeView:function(){var a=f(".chat-right-body > *"),b=f("#chat-change-view"),c=null;b.on("click","li",function(){b.find("li").removeClass("on"),c=f(this).addClass("on"),a.each(function(){f(this).attr("id")==c.attr("data-target")?f(this).show():f(this).hide()})})},showDownApp:function(){e.ready(function(){var a=K.randomId(),b=f("#app-down-show-erweima-tpl").html();e.ready(function(){var c=e.open({type:1,title:!1,closeBtn:0,shadeClose:!0,area:["350px","350px"],content:'<div id="'+a+'">'+b+"</div>",success:function(a,b){setTimeout(function(){f(a).find(".apply-input-close").attr("onClick","layer.close('"+c+"')")})}})})})},socketIo:function(a){var b=d("http://io.jiguo.com:2120");b.on("connect",function(){this.emit("login",a+"&"+window.DATA.id)});var e=this,g=require("app/tplEngine"),j=g.init(f("#comment-list-data-warp-tpl").html()),k="",l=f("#comment-list-data-warp"),m=null,n=0,o=100,p=null,q=1e3,r,s;s=Date.parse(new Date),b.on("live_"+window.DATA.id,function(a){console.log(a),a=f.parseJSON(a);if(a.type==0){h+=c.getLength(a.comment),k=j({data:[a.comment]})+k;var b=function(){m=l.find("li"),n=m.length,l.append(k),l.parent().animate({scrollTop:99999999},260),h>o&&m.each(function(a){a>o&&(f(this).remove(),l.data("limit",0),l.data("loading",!1))}),k="",a.type==3&&e.countdown()};r=Date.parse(new Date),p&&clearTimeout(p),r-s>q?(b(),s=r):p=setTimeout(function(){b()},q)}else if(a.type==2){var d=a.tag,g=0,t=0,u=0;for(var v in window.liveTag)for(var w in d)window.liveTag[v].id==d[w].id&&window.__tagId__==d[w].id&&window.liveTag[v].num<d[w].num&&window.__tagId__!=0&&(g+=d[w].num-window.liveTag[v].num),window.liveTag[v].id==0&&d[w].id==0&&(t=d[w].num-window.liveTag[v].num);window.liveTag2=d,g>0&&window.__tagId__>0?u=g:window.__tagId__<=0&&(u=t),u>0&&i.css("opacity",0).show().animate({opacity:1},260).find("#update-number-box").html(u)}})}}})