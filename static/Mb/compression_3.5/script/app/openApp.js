define(["jquery","layer"],function(a,b){return{init:function(){var c=a(".show-app-down-warp").css("bottom",-60),d=a(".app-down-touch-show");d.length||(d=a(".event-opera"));var e=d.height()+10,f=0,g=0;setTimeout(function(){c.animate({bottom:e})});var h=null;window.addEventListener("touchstart",function(a){f=a.touches[0].clientY,h=null},!1),window.addEventListener("touchmove",function(a){Math.abs(g-f)>15&&!h&&(c.stop(!1,!0).animate({bottom:-60}),h=!0)},!1),window.addEventListener("touchend",function(a){setTimeout(function(){Math.abs(g-f)>15&&c.stop(!1,!0).animate({bottom:e})},500)},!1),a("[data-article-share]").click(function(){var c=a("#share-tpl");if(c.length)var d=b.open({type:1,anim:"up",shade:"background-color: rgba(0,0,0,.3)",style:"position:fixed; bottom:0;left:0; width: 100%;",content:c.html(),success:function(b,c){setTimeout(function(){a(b).find(".share-query").attr("onclick","layer.close("+d+")")},100)}})})}}})