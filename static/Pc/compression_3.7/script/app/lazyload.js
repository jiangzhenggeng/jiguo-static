define(["require","jquery","app/scrollStatus"],function(a,b){function c(a){e=b(window).scrollTop(),window.____imgArray____.each(function(){f=b(this).offset().top,d+e+600>=f&&e-b(this).height()<f&&b(this).attr({src:b(this).attr(j),"data-loaded":"yes"})})}var d=b(window).height(),e=0,f=0,g=0,h="img[data-lazyload]:not([data-loaded])",i=a.toUrl("../../style/ext_img/lazyload_default.png"),j="_src2_",k=640;return b(function(){b("#article-content-show img").attr({height:"auto",width:"auto"})}),{init:function(a){var f="";e=b(window).scrollTop(),window.____imgArray____=b(a||h).filter(function(a){return g=b(this).offset().top,this.complete||d+e+300>=g&&e-b(this).height()<g?(b(this).attr({"data-loaded":"yes",width:"auto"}),typeof b(this).attr(j)!="undefined"&&(f=b(this).attr(j),b(this).attr({src:f})),!1):(typeof b(this).attr(j)=="undefined"&&(f=b(this).attr("src"),b(this).attr({src:i}),b(this).addClass("load_img"),b(this).attr(j,f)),!0)}),b(window).data("lazyload_scrollstop")!="scrollLoadImg"&&b(window).bind("scroll",c).data("lazyload_scrollstop","scrollLoadImg")}}})