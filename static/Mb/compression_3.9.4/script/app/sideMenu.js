define(["jquery","global.fun"],function(a,b){function c(a,b){var c=null;for(var d=0,e=window.cssPrifx.length;d<e;d++){c=a.css(window.cssPrifx[d]+b);if(c)return a.css(window.cssPrifx[d]+b)}}function d(a,b,c){for(var d=0,e=window.cssPrifx.length;d<e;d++)a.css(window.cssPrifx[d]+b,c)}return window.cssPrifx=["","-webkit-","-o-","-moz-","-ms-"],{init:function(){function q(){d(h,"transition","all 0.3s")}function r(){d(h,"transition","none")}function s(a){d(h,"transform","translate3d(0px, "+a+"px, 0px)")}var b=a("#side-menu"),c=b.find(".menu-inner"),e=c.width(),f=b.find(".mask");a("[data-show-menue]").on("click",function(e){e.preventDefault(),b.addClass("show"),b.css("zIndex",99),a("body").on("touchmove",function(a){a.preventDefault()}),d(c,"transform","translate3d(100%, 0px, 0px)  translateZ(0px)")}),b.find(".mask").on("click touchmove",function(e){e.preventDefault(),b.removeClass("show"),setTimeout(function(){b.css("zIndex",-1)},400),d(c,"transform","translate3d(0px, 0px, 0px)  translateZ(0px)"),a("body").off("touchmove")});var g=a(".swipe"),h=g.find("ul"),i=g.height()-80,j=h.height(),k=0,l=i-j,m=0,n=150,o=l-n,p=k+n,t=0,u=0,v=0;l<0&&(h.on("touchstart",function(a){t=a.originalEvent.targetTouches[0].clientY}),h.on("touchmove",function(a){u=a.originalEvent.targetTouches[0].clientY,v=u-t,r(),m+v<p&&m+v>o&&s(m+v)}),h.on("touchend",function(a){m+v>k?(m=k,q(),s(m)):m+v<l?(m=l,q(),s(m)):m+=v,t=0,u=0,v=0}))}}})