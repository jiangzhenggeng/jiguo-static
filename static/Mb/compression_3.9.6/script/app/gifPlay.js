define(["require","jquery"],function(a,b){return{init:function(c){var d="img[data-img-type=1][data-original]",e=a.toUrl("../../style/ext_img/gif_play_default.png"),f=b(c||d).filter(function(a){return this.complete?!1:!0}),g="position:absoult;background:rgba(0,0,0,.7);";f.each(function(a,c){var d=b('<div style="'+g+"width:"+b(this).width()+"px;height:"+b(this).height()+"px;"+"left:"+b(this).offset().top+"px;top:"+b(this).offset().left+'px;">'+'<img src="'+e+'">'+"</div>"),f=b(this);f.data("original",f.attr("src")),d.click(function(){f.attr({src:f.data("original")}),b(this).remove()}),b(this).after(d)})}}})