define(["require","jquery","app/scrollStatus"],function(a,b){function k(a){d=b(window).scrollTop(),window.____imgArray____.each(function(){e=b(this).offset().top,c+d+600>=e&&d-b(this).height()<e&&b(this).attr({src:b(this).attr(i),"data-loaded":"yes"})})}var c=b(window).height(),d=0,e=0,f=0,g="img[data-lazyload]:not([data-loaded])",h=a.toUrl("../../style/ext_img/lazyload_default.png"),i="_src2_",j=640;return b(function(){b("#article-content-show img").attr({height:"auto",width:"auto"})}),{init:function(a){var e="";d=b(window).scrollTop(),window.____imgArray____=b(a||g).filter(function(a){f=b(this).offset().top;if(this.complete||c+d+300>=f&&d-b(this).height()<f)return b(this).attr({"data-loaded":"yes",width:"auto"}),typeof b(this).attr(i)!="undefined"&&(e=b(this).attr(i),b(this).attr({src:e})),!1;if(typeof b(this).attr(i)=="undefined"){e=b(this).attr("src");var g=parseFloat(b(this).attr("data-width")),h=parseFloat(b(this).attr("data-ratio"));g=isNaN(g)?0:g>j?j:g,h=isNaN(h)?0:h;var k=0;try{k=g/h}catch(l){}g&&k&&(b(this).attr({width:g,height:k,src:""}),b(this).addClass("load_img")),b(this).attr(i,e)}return!0}),b(window).data("lazyload_scrollstop")!="scrollLoadImg"&&b(window).bind("scroll",k).data("lazyload_scrollstop","scrollLoadImg")}}})