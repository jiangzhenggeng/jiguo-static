define(["require","jquery","superSlide","app/common","app/unitTool","app/tplEngine","app/lazyload"],function(a,b,c,d,e,f,g){function h(){var a=b(".hot-event-warp");a.length&&a.slide({titCell:".hd ul",mainCell:".bd",effect:"left",autoPlay:!0,autoPage:!0,trigger:"click",pnLoop:!1,interTime:5e3,prevCell:".prev",nextCell:".next"});var c=b(".event-show-card-warp");c.length&&c.on("mouseenter","li",function(){b(this).find(".e-item-hide").stop(!0,!1).slideDown(250)}).on("mouseleave","li",function(){b(this).find(".e-item-hide").stop(!0,!1).slideUp(250)})}function i(a){function c(a,c){d.load&&(d.load=!1,i.hide(),j.show(),c&&(l=d.options.data),l.limit=d.limit,l.size=d.options.size,b.get(d.options.url,l,function(c){c=d.options.dataChange(c,d.options),j.hide();var f=e.getLength(c.result);if(f){var h=m({data:c.result});d.options.boxDom.append(h),(a||b.noop)(),d.limit=e.has(c,"limit")?c.limit:0,d.load=!0,i.show(),f<d.options.size&&(d.load=!1,i.hide(),k.show()),g.init()}else d.load=!1,k.show()},"json"))}var d=this;d.options=b.extend({url:"/api/event/EventList",fireDom:".loading-more-btn",tplDom:"#loading-data-list-tpl",boxDom:"#blogAjaxLoad",firWarp:"body",data:{},size:20,triggerType:"",dataChange:function(a){return a}},a);if(d.options.url==null)throw"没有URL";var h=b(d.options.firWarp);d.options.fireDom=h.find(d.options.fireDom),d.options.boxDom=b(d.options.boxDom);var i=h.find(".click-loading"),j=h.find(".is-loading"),k=h.find(".no-data");d.load=!0,d.limit=0;var l=b.extend({},d.options.data),m=f.init(b(d.options.tplDom).html());d.clickFirst=!1,d.options.fireDom.bind("click",function(){d.options.triggerType!="click"?c(function(){d.options.fireDom.unbind("click"),b(window).scroll(function(){var a=b(document).scrollTop()+b(window).height()+400;d.load&&a>d.options.fireDom.offset().top&&c(null,d.options.data)})},d.options.data):c(null,d.options.data)}),c(null,d.options.data)}return{init:h,ajaxLoad:i}})