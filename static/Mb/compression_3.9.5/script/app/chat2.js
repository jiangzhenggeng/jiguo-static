define(["global.fun","app/iscroll","app/tplEngine","app/unitTool","layer","socket.io","app/localDataCache"],function(a,b,c,d,e,f,g){var h=require("jquery"),i=[],j=!1,k=0;return{heartChat:function(){function i(a,b,c){var d=h(this);if(d.data("loading"))return;h.get("/api/live/GetCommentList",{id:window.DATA.id,type:1,limit:d.data("limit")||0},function(e){if(e.result){var f=e.result.data,i=b({data:f}),j=h("#heart-message-list-box");c=="slideDown"&&j.find("li").length?j.find("li").eq(0).before(i):j.append(i),j.resize(function(){a.refresh(),a.scrollBy(0,-j.parent().outerHeight()+g)}),a.refresh(),a.scrollBy(0,-j.parent().outerHeight()+g),d.data("limit",e.result.limit),d.data("loading",!1)}else d.data("loading",!0)},"json")}var a=h(window).height(),d=h(".chat-header").height(),e=h(".chat-query-header").height(),f=h(".chat-comment-input-warp").height(),g=a-d-e-f;h("head").append("<style>.heart-height{height:"+g+"px !important}</style>"),window.body_H=g;var j=c.init(h("#heart-message-list-box-tpl").html()),k,l=h("#up-icon"),m=h("#down-icon"),n=h(".heart-body-list"),k=new b(n.get(0),{mouseWheel:!0,preventDefault:!0,probeType:3,click:!0});window.myScroll=k,window.cacheFn=j,i.apply(n,[k,j]),k.on("scroll",function(){var a=this.y,b=this.maxScrollY-a,c=m.hasClass("reverse_icon"),d=l.hasClass("reverse_icon");if(a>=40)return!c&&m.addClass("reverse_icon"),"";if(a<40&&a>0)return c&&m.removeClass("reverse_icon"),"";if(b>=40)return!d&&l.addClass("reverse_icon"),"";if(b<40&&b>=0)return d&&l.removeClass("reverse_icon"),""}),k.on("slideDown",function(){this.y>30&&(l.removeClass("reverse_icon"),i.apply(n,[this,j,"slideDown"]))}),k.on("slideUp",function(){this.maxScrollY-this.y>40&&l.removeClass("reverse_icon"),this.refresh()})},heartInput:function(){var a=h("[data-trigger-heart-input]"),b=h("[data-heart-input]"),c=b.find(".text");a.click(function(){b.addClass("show"),c.focus()}),c.blur(function(){b.removeClass("show")})},imgUpload:function(){function a(a,b){if(typeof FileReader=="undefined"){console.log("您的浏览器不支持FileReader");return}var c=new FileReader;c.onload=function(a){var c=document.getElementById(b);c.src=this.result},c.readAsDataURL(document.getElementById(a).files[0])}var b=h("#hideUploadIframe"),d=h("#hideUploadInputFile"),f=h("#blogFormCover"),g="";d.change(function(){g=K.randomId();var b=c.init(h("#heart-message-upload-img-tpl").html(),{data:{rId:g}});a("hideUploadInputFile",g);var d=h("#heart-message-list-box");h("#loading"+g).show(),d.append(b),window.myScroll.scrollBy(0,-d.parent().outerHeight()+window.body_H),window.myScroll.refresh(),f.submit()}),b.load(function(){var a=(this.contentDocument||this.contentWindow.document).body,b=a.innerText||a.textContent||"{}",c={},d=1.5;try{c=(new Function("return "+b))()}catch(f){e.open({skin:"msg",time:d||2,content:"上传失败,请重新试试"});return}if(!("url"in c.result)){e.open({skin:"msg",time:d||2,content:"没有url"});return}var i=new Image,j="?time="+ +~(new Date);i.src=c.result.url+j,i.onload=function(){h("#"+g).attr("src",c.result.url+j),h("#loading"+g).hide(),h.get("/api/live/PostComment",{type:1,msg:"",commentid:"",pic:["",""]},function(){},"json")},i.src=c.result.url+j,window.myScroll.refresh()})},viewer:function(a){var b=h(a),c=h(".img-viewer-warp"),d=c.find(".img-viewer-inner .viewer-box"),e=c.find(".viewer-title"),f=h(window).width(),g=h(window).height(),i=[],j=0,k=d.find("li"),l=0,m,n="_src";k.find(".item").height(g-70).width(f),b.on("click","img[data-viewer]",function(a){i=b.find("img[data-viewer]"),j=i.length,c.show(),m=i.index(this),k.attr("class",""),d.attr("style","transition-duration:0ms;"),k.eq(1).attr("class","curr").find("img").attr("src",h(this).attr(n)),l=1,e.eq(1).html(h(this).attr("data-index")),m-1>=0&&(e.eq(0).html(h(this).attr("data-index")),k.eq(0).attr("class","prev").find("img").attr("src",i.eq(m-1).attr(n))),m+1<j&&(e.eq(2).html(h(this).attr("data-index")),k.eq(2).attr("class","next").find("img").attr("src",i.eq(m+1).attr(n))),a.preventDefault()});var o=0,p=0;c.on("touchstart",function(a){o=pageX=a.originalEvent.targetTouches[0].pageX,a.preventDefault(),d.attr("style","transition-duration:0ms;")}).on("touchmove",function(a){a.preventDefault();var b=a.originalEvent.targetTouches[0].pageX;p=b,d.attr("style","transition-duration:0ms;transform:translate3d("+(b-o)+"px, 0px, 0px) translateZ(0px);")}).on("touchend",function(a){a.preventDefault();var b=o-p,c=0,g=m,h,q,r;b>50?m<j-1?(l==0?(q=0,h=1,r=2):l==1?(r=0,q=1,h=2):l==2&&(h=0,r=1,q=2),c=-f,l++,m++,l>2&&(l=0)):c=0:b<-50&&(m>0?(l==0?(r=0,q=1,h=2):l==1?(h=0,r=1,q=2):l==2&&(q=0,h=1,r=2),c=f,l--,m--,l<0&&(l=2)):c=0),d.attr("style","transform:translate3d("+c+"px, 0px, 0px) translateZ(0px);transition-duration:160ms;");if(c==0)return;setTimeout(function(){d.attr("style","transform:translate3d(0px, 0px, 0px) translateZ(0px);transition-duration:0ms;"),e.eq(q).html(i.eq(m-1).attr("alt")),e.eq(h).html(i.eq(m).attr("alt")),e.eq(r).html(i.eq(m+1).attr("alt")),k.eq(h).attr("class","curr"),k.eq(q).attr("class","prev").find("img").attr("src",i.eq(m-1).attr(n)),k.eq(r).attr("class","next").find("img").attr("src",i.eq(m+1).attr(n)),m<=0&&k.eq(q).attr("class",""),m>=j-1&&k.eq(r).attr("class","")},160)})},closeOpenTag:function(){h(".open-all").click(function(){var a=h(this).parent();a.hasClass("on")?a.removeClass("on"):a.addClass("on")})},categoryPos:function(){},liveList:function(){function e(b){var c=this;if(c.data("loading"))return;c.data("loading",!0),c.loadingObj.show(),c.noDataObj.hide(),h.get("/api/live/GetCommentList",{id:window.DATA.id,type:2,limit:c.data("limit")||0,tag:c.data("tagid")||0},function(e){if(e.result){var f=e.result.data,h=b({data:f});k=d.getLength(f),c.append(h),c.data("limit",e.result.limit),c.data("loading",!1),g.setPageCacheData("limit",e.result.limit),a.countdown(),d.getLength(e.result.data)<20&&(c.loadingObj.hide(),c.data("loading",!0),c.noDataObj.show())}else c.loadingObj.hide(),c.data("loading",!0),c.noDataObj.show();window.myScroll&&window.myScroll.refresh()},"json")}var a=this,f=h("#live-list-data-warp"),j=f.height(),l=h(window).height(),m=h(window).scrollTop(),n=c.init(h("#live-list-data-warp-tpl").html());f.loadingObj=h(".loading-more"),f.noDataObj=h(".no-data");var o=h(".chat-select-box"),p=o.find("li"),q=null;o.on("click","li",function(){var a=h(this).find("a");a.attr("data-tag-id")!=f.data("tagid");var b=h(window).width(),c=h(window).height(),d=h(window).scrollTop();window.__tagId__=a.attr("data-tag-id"),f.data("tagid",window.__tagId__),g.setPageCacheData("__tagId__",window.__tagId__),g.setPageCacheData("back",""),p.removeClass("on"),h(this).addClass("on"),h(this).parent().parent().removeClass("on"),h(this).parent().animate({scrollLeft:h(this).offset().left+h(this).parent().scrollLeft()-(b/2-h(this).width()/2)},260),f.html(""),f.data("limit",0),f.data("loading",!1),e.apply(f,[n]),i=[],window.myScroll&&(window.myScroll.scrollTo(0,0),window.myScroll.refresh())});var r=new b(h("#chat-iscroll-warp").get(0),{mouseWheel:!0,preventDefault:!0,probeType:3,click:!0});window.myScroll=r,r.on("scroll",function(){}),f.data("loading",!1);var s=h(".chat-header-common-hide"),t=s.height(),u=h("[chat-category-item]"),v=h(".chat-header"),w=v.outerHeight(),x=0,y=!1,z=h("body"),A=0;r.on("scroll",function(){A=this.y,-(this.maxScrollY-this.y)<=200&&e.apply(f,[n]),-(this.maxScrollY-this.y)<=20&&r.refresh();if(y)return!1;x=this.y+t,x<=0?x>=-w?v.css("top",x):(s.remove(),r.scrollBy(0,0),z.append(u.addClass("fixed")),f.css("margin-top",90),v.css("top",-50),y=!0,r.refresh()):v.css("top",0)}),z.on("click","a[href]",function(){g.setPageCacheData("back","true"),g.setPageCacheData("pos",A||0),g.setPageCacheData("lidata",f.html())});if(g.getPageCacheData("back")){y=!0,x=-50,v.css("top",x),s.remove(),f.html(g.getPageCacheData("lidata")),z.append(u.addClass("fixed")),f.css("margin-top",90),y=!0,r.scrollBy(0,g.getPageCacheData("pos")-90),r.refresh(),window.__tagId__=g.getPageCacheData("__tagId__"),f.data("limit",g.getPageCacheData("limit")),f.data("tagid",window.__tagId__);var B=o.find("li"),C=h(window).width();B.each(function(){if(h(this).find("a").attr("data-tag-id")==window.__tagId__)return B.removeClass("on"),h(this).parent().animate({scrollLeft:h(this).offset().left+h(this).parent().scrollLeft()-(C/2-h(this).width()/2)},260),h(this).addClass("on"),!1})}else o.find("li").first().trigger("click")},socketIo:function(a){var b=f("http://io.jiguo.com:2120");b.on("connect",function(){this.emit("login",a+"&"+window.DATA.id)});var c=this,e=require("app/tplEngine"),g=e.init(h("#live-list-data-warp-tpl").html()),i="",j=h("#live-list-data-warp"),l=null,m=0,n=100,o=null,p=1e3,q,r;r=Date.parse(new Date),b.on("live_"+window.DATA.id,function(a){a=h.parseJSON(a);if(a.type==0&&window.location.href.indexOf("mb/live/CommentList")>0){k+=d.getLength(a.comment),i=g({data:[a.comment]})+i;var b=function(){l=j.find("li"),m=l.length,m?(l.first().before(i),k>n&&l.each(function(a){a>n&&(h(this).remove(),j.data("limit",0),j.data("loading",!1))})):j.append(i),i="",a.type==3&&c.countdown()};q=Date.parse(new Date),o&&clearTimeout(o),q-r>p?(b(),r=q):o=setTimeout(function(){b()},p)}else if(a.type==2){var e=a.tag,f=0,s=0;for(var t in window.liveTag)for(var u in e)window.liveTag[t].id==e[u].id&&window.__tagId__==e[u].id&&window.liveTag[t].num<e[u].num&&(f+=e[u].num-window.liveTag[t].num),window.liveTag[t].id==e[u].id&&(s+=e[u].num-window.liveTag[t].num);window.liveTag2=e,f>0&&window.__tagId__>0?h(".chat-update-warp").show().find(".chat-update-num").html(f):window.__tagId__<=0&&h(".chat-update-warp").show().find(".chat-update-num").html(s)}});var s=h(".chat-select-box li");h(".chat-update-warp").click(function(){s.each(function(){if(h(this).hasClass("on"))return h(this).trigger("click"),!1}),h(this).hide(),window.liveTag=window.liveTag2})},commentLive:function(){function a(a){var b=this;if(b.data("loading"))return;b.data("loading",!0),b.loadingObj.show(),b.noDataObj.hide(),h.get("/api/live/GetCommentList",{id:window.DATA.id,type:0,limit:b.data("limit")||0,tag:b.data("tagid")||0},function(c){b.loadingObj.hide();if(c.result){var d=c.result.data,e=a({data:d});b.append(e),b.data("limit",c.result.limit),b.data("loading",!1)}else b.data("loading",!0),b.noDataObj.show()},"json")}alert("sss");var b=h("#live-list-data-warp"),d=b.height(),e=h(window).height(),f=h(window).scrollTop(),g=c.init(h("#live-list-data-warp-tpl").html());b.loadingObj=h(".loading-more"),b.noDataObj=h(".no-data"),b.data("loading",!1),a.apply(b,[g]),h(window).scroll(function(){d=b.height(),f=h(window).scrollTop(),f>=d-e&&a.apply(b,[g])})},countdown:function(){var a=h(".card-kill:not([data-countdown-runing])");a.attr("data-countdown-runing","runing");var b,c;a.each(function(){b=h(this).find("[data-card-kill-timer]"),i.push({startTime:b.attr("data-starttime"),endTime:b.attr("data-endtime"),elem:b,elemBox:h(this),elemWarp:b.parent(),btn:h(this).find(".card-buy")})}),i.length&&this.countdownRun()},countdownRun:function(){var a,b,c,d,e,f,g,j=Math.floor,k,l,m,n,o=[],p=9,q=p,r,s,t=null,u=Math.floor(1e3/(p+1)),v,w=h(window).height(),x,y=function(a){return k=j(a/3600),l=j(a/60)-k*60,m=a-k*60*60-l*60,k<=9&&(k="0"+(k>=0?k:0)),l<=9&&(l="0"+(l>=0?l:0)),m<=9&&(m="0"+(m>=0?m:0)),n='<span class="kill-timer-number">'+k+"</span>时<!--",n+='--><span class="kill-timer-number">'+l+"</span>分<!--",n+='--><span class="kill-timer-number">'+m+"</span>秒<!--",n+='--><span class="kill-timer-number millisecond">'+q+"</span>",n},z=new Date,A=z.getDate(),B,C=!1,D=function(){if(i.length<=0&&t){clearTimeout(t);return}x=h(window).scrollTop();for(var g=0;g<i.length;g++){d=i[g],v=d.elemWarp.offset().top;if(v>w+x||v<x)continue;b=d.elemBox,c=d.elem,e=d.startTime,f=d.endTime,r=d.btn,a=Math.ceil(Date.parse(new Date)/1e3);if(e<=a&&f>=a)n=y(f-a>=0?f-a:0),c.html(n+"秒杀结束"),r.addClass("on");else if(d.startTime>a){var j=new Date(parseInt(e)*1e3),s=j.getMonth()+1,A=j.getDate();k=j.getHours(),l=j.getMinutes(),m=j.getSeconds(),k<=9&&(k="0"+(k>=0?k:0)),l<=9&&(l="0"+(l>=0?l:0)),m<=9&&(m="0"+(m>=0?m:0));var E=Math.floor(new Date(z.getFullYear()+"/"+(z.getMonth()+1)+"/"+z.getDate()+" "+"23:59:59")/1e3);e-E<=0?B="今天":e-E<=86400?B="明天":B='<span class="kill-timer-number">'+s+"</span>月"+'<span class="kill-timer-number">'+A+"</span>日",n=B+'<span class="kill-timer-number">'+k+"</span>:"+'<span class="kill-timer-number">'+l+"</span>",c.html(n+"开始"),r.removeClass("on"),o.push(g)}else if(d.endTime<=0||!d.endTime){var j=new Date(parseInt(e)*1e3),s=j.getMonth()+1,A=j.getDate();k=j.getHours(),l=j.getMinutes(),m=j.getSeconds(),A<=9&&(A="0"+(A>=0?A:0)),k<=9&&(k="0"+(k>=0?k:0)),l<=9&&(l="0"+(l>=0?l:0)),m<=9&&(m="0"+(m>=0?m:0)),n='<span class="kill-timer-number">'+s+"</span>月"+'<span class="kill-timer-number">'+A+"</span>日"+'<span class="kill-timer-number">'+k+"</span>:"+'<span class="kill-timer-number">'+l+"</span>",c.html("秒杀已于"+n+"开始"),r.removeClass("on"),o.push(g)}else d.endTime<a&&(r.removeClass("on").html("已结束"),c.html("秒杀已结束"),o.push(g))}for(var g=o.length;g>0;g--)i.splice(o[g]+1,1);C=!0,o=[],q--,q=q<0?p:q,t=setTimeout(D,u)};t=setTimeout(D,u)}}})