define(["require","jquery","app/common","app/unitTool","app/tplEngine","app/lazyload","layer"],function(a,b,c,d,e,f,g){function h(a){function c(a){g.load&&(g.load=!1,j.hide(),k.show(),m.limit=g.limit,m.size=g.options.size,b.get(g.options.url,m,function(c){k.hide();var e=d.getLength(c.result);if(e){var h=n({data:c.result});g.options.boxDom.append(h),(a||b.noop)(),g.limit=d.has(c,"limit")?c.limit:0,g.load=!0,j.show(),e<g.options.size&&(g.load=!1,j.hide(),l.show()),f.init()}else g.load=!1,l.show();g.item++,g.len=e,g.options.callBack(g)},"json"))}var g=this;g.options=b.extend({url:"/api/article/GetBlogLists",fireDom:".loading-more-btn",tplDom:"#loading-data-list-tpl",boxDom:"#blogAjaxLoad",data:{},size:20,callBack:function(){}},a);if(g.options.url==null)throw"没有URL";g.options.fireDom=b(g.options.fireDom),g.options.boxDom=b(g.options.boxDom);var h=g.options.fireDom.parent(),i=h.parent(),j=i.find(".click-loading"),k=i.find(".is-loading"),l=i.find(".no-data");g.load=!0,g.limit=0,g.item=0;var m=b.extend({},g.options.data),n=e.init(b(g.options.tplDom).html());g.clickFirst=!1,g.options.fireDom.bind("click",function(){c(function(){g.options.fireDom.unbind("click"),b(window).scroll(function(){var a=b(document).scrollTop()+b(window).height()+400;g.load&&a>g.options.fireDom.offset().top&&c()})})}),c()}return{init:h,praise:function(a,d){a=b.extend({url:"/api/praise/praise",tips:"你已点赞"},a);var e=this,f=b(a.trigger);f.bind("click",function(){var h=b(this);if(d=="collect")b.get(a.url,a.data,function(a){a.resultCode==-100?c.login():a.resultCode==0?a.result.zan==1?f.addClass("on").find(".icon").addClass("animate"):f.removeClass("on"):g.msg("操作失败~请稍后试试")},"json");else{if(h.hasClass("on")){g.tips(a.tips,h);return}b.get(a.url,a.data,function(a){if(a.resultCode==-100)c.login();else if(a.resultCode==0){f.addClass("on").find(".icon").addClass("animate");var b=parseInt(f.find("[data-article-zan-num]").html());f.find("[data-article-zan-num]").html(b+1),e.getPariseList(blogid)}else g.msg("操作失败~请稍后试试")},"json")}})},getRelative:function(a){b.get("/api/article/BlogLinkBlog",a,function(f){var g=e.init(b("#loading-data-list-tpl").html()),h=d.getLength(f.result.data),i=730,j=b(".choice-event-content-wrap"),k=j.width();if(h){var l=g({data:f.result});b("#relative-article-warp").show(),a.limit>0?b("#relative-article").append(l):b("#relative-article").html(l),c.collect("#relative-article"),b(".next").attr("limit-data",f.limit),a.limit>0&&(h<=4?(j.children("ul:last-child").css({width:i}),j.css({width:k+i})):j.css({width:k+2*i}),j.animate({left:"-=730px"},500)),b("[data-src]:not([data-src-loaded])").one("load",function(){var a=b(this).attr("data-src");b(this).attr("src",a),b(this).attr("data-src-loaded","loaded")}).each(function(){this.complete&&b(this).load()})}else a.limit==0?b("#relative-article-warp").remove():a.limit>0&&b(".next").addClass("next-stop")},"json")},getPariseList:function(a){b.get("/api/praise/GetPraiseList",{id:a,type:2},function(a){var c=e.init(b("#article-pariset-list-tpl").html()),f=d.getLength(a.result);if(f){var g=c({data:a.result});b("#article-pariset-list").html(g),b(".last-child").click(function(){b(this).parent().parent().css("height","auto"),b(this).remove()})}},"json")},getLinkProduct:function(a){b.get("/api/article/BlogLinkProduct",{id:a},function(a){var c=e.init(b("#article-link-product-tpl").html()),f=d.getLength(a.result);if(f){var g=c({data:a.result});b("#article-link-product").append(g),b("#article-link-product").parent().parent().show()}else b("#article-link-product").parent().parent().hide()},"json")}}})