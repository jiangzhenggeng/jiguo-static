define(["jquery"],function(a){function b(b){function c(c){var d=a(c).closest(b),e=d.width(),f=d.find("ul"),g=f.width(),h=Math.abs(parseInt(f.css("marginLeft")));return{wrapW:e,boxW:g,left:h}}var b=b||".top-list-box",d=4,e=a(b);e.each(function(){var e=a(this).find("ul"),f=e.find("li"),g=f.outerWidth(!0),h=f.outerWidth(),i=g*d,j=f.length,k=g-h;j>d?e.css({width:g*j}):(e.css({width:"100%"}),a(this).find(".prev-btn").hide(),a(this).find(".next-btn").hide()),a(this).find(".next-btn").click(function(){var d=this,e=c(this),f=a(this).siblings(".prev-btn"),g=a(this).closest(b).find("ul");if(e.boxW-e.wrapW-k<=e.left||g.is(":animated"))return;if(e.left+i+e.wrapW>e.boxW)var h=e.boxW-e.wrapW-e.left-k;else var h=i;g.animate({marginLeft:"-="+h},"slow",function(){var b=c(d);b.boxW-b.wrapW-k<=b.left&&a(d).hide(),b.left>0&&f.show()})}),a(this).find(".prev-btn").click(function(){var d=this,e=c(this),f=a(this).siblings(".next-btn"),g=a(this).closest(b).find("ul");if(e.left<=0||g.is(":animated"))return;if(e.left-i<0)var h=e.left;else var h=i;g.animate({marginLeft:"+="+h},"slow",function(){var b=c(d);b.left<=0&&a(d).hide(),b.boxW-b.wrapW>b.left&&f.show()})})})}return{initSlide:b}})