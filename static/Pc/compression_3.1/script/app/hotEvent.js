define(["require","jquery","superSlide","app/common","app/unitTool","app/tplEngine","app/lazyload"],function(a,b,c,d,e,f,g){function h(){var a=b(".hot-event-warp");a.length&&a.slide({titCell:".hd ul",mainCell:".bd",effect:"left",autoPlay:!0,autoPage:!0,trigger:"click",pnLoop:!1,interTime:5e3,prevCell:".prev",nextCell:".next"});var c=b(".event-show-card-warp");c.length&&c.on("mouseenter","li",function(){b(this).find(".e-item-hide").stop(!0,!1).slideDown(250)}).on("mouseleave","li",function(){b(this).find(".e-item-hide").stop(!0,!1).slideUp(250)})}function i(a){function m(a,d){c.load&&(c.load=!1,h.hide(),i.show(),d&&(k=c.options.data),k.limit=c.limit,k.size=c.options.size,b.get(c.options.url,k,function(d){d=c.options.dataChange(d,c.options),i.hide();var f=e.getLength(d.result);if(f){var k=l({data:d.result});c.options.boxDom.append(k),(a||b.noop)(),c.limit=e.has(d,"limit")?d.limit:0,c.load=!0,h.show(),f<c.options.size&&(c.load=!1,h.hide(),j.show()),g.init()}else c.load=!1,j.show()},"json"))}var c=this;c.options=b.extend({url:"/api/event/EventList",fireDom:".loading-more-btn",tplDom:"#loading-data-list-tpl",boxDom:"#blogAjaxLoad",firWarp:"body",data:{},size:20,triggerType:"",dataChange:function(a){return a}},a);if(c.options.url==null)throw"没有URL";var d=b(c.options.firWarp);c.options.fireDom=d.find(c.options.fireDom),c.options.boxDom=b(c.options.boxDom);var h=d.find(".click-loading"),i=d.find(".is-loading"),j=d.find(".no-data");c.load=!0,c.limit=0;var k=b.extend({},c.options.data),l=f.init(b(c.options.tplDom).html());c.clickFirst=!1,c.options.fireDom.bind("click",function(){c.options.triggerType!="click"?m(function(){c.options.fireDom.unbind("click"),b(window).scroll(function(){var a=b(document).scrollTop()+b(window).height()+400;c.load&&a>c.options.fireDom.offset().top&&m(null,c.options.data)})},c.options.data):m(null,c.options.data)}),m(null,c.options.data)}return{init:h,ajaxLoad:i}})