define(["jquery","app/unitTool","app/tplEngine","app/md5","app/localDataCache"],function(a,b,c,d,e){function h(b){var b=a.extend({size:10,url:"/api/article/GetArticleList",boxDom:"#ajax-loading-home-box",fireDom:".loading-more",tplDom:"#ajax-loading-home-box-tpl",sendData:{},firstNoData:!1,topic:!1,data:!1,touchBox:!1,callBack:function(){}},b);this.options=b,this.__box__=b.boxDom,this.options.boxDom=a(this.options.boxDom),this.options.fireDom=a(this.options.fireDom);var d=this.options.fireDom.parent();this.options.noData=d.find(".no-data"),this.options.firstNoDataDom=d.find(".first-no-data"),this.options.notTopicDom=d.find("[data-notTopic]"),this.options.topicDom=d.find("[data-topic]"),this.options.tplDom=a(this.options.tplDom),this.loading=!0;var e=a(".loading");this.tplFunCache=c.init(this.options.tplDom.html()),this.options.sendData.limit=0,this.options.sendData.size=b.size,this.options.sendData.sys="mb",this.options.first=!0}function i(b){var c=e.getPageCacheData(g+"time");+(new Date)-c>18e4&&[g,g+"limit",g+"box",g+"point"].forEach(function(a,b){e.delPageCacheData(a)});var d=new h(b),f=e.getPageCacheData(g),i=e.getPageCacheData(g+"limit"),j=e.getPageCacheData(g+"box"),k=e.getPageCacheData(g+"point");typeof window.__no_session_cache__=="undefined"&&j&&f?(a(j).html(f),d.options.sendData.limit=i,k>0&&setTimeout(function(){a("html,body").animate({scrollTop:k},160)},20)):d.run(),d.options.touchBox?a("[data-touchBox]").scroll(function(){var b=a("[data-touchBox]").scrollTop()+a("[data-touchBox]").height()+200;e.setPageCacheData(g+"point",a(window).scrollTop()),d.loading&&d.options.fireDom.length&&b>d.options.fireDom.offset().top&&d.run()}):a(window).scroll(function(){var b=a(window).scrollTop()+a(window).height()+200;e.setPageCacheData(g+"point",a(window).scrollTop()),d.loading&&d.options.fireDom.length&&b>d.options.fireDom.offset().top&&d.run()})}var f=a(window).height(),g=d.init(window.location.href);return h.prototype.run=function(){var c=this;if(!c.loading)return!0;c.loading=!1,c.options.fireDom.show(),c.options.noData.hide(),c.options.firstNoDataDom.removeClass("flex"),c.options.notTopicDom.show(),c.options.topicDom.hide(),a.get(c.options.url,c.options.sendData,function(d){var h;c.options.data?h=b.getLength(d.result.data):h=b.getLength(d.result);if(h){var i=c.tplFunCache({data:d.result});c.options.boxDom.append(i),c.options.sendData.limit=b.has(d,"limit")?d.limit:0,h<c.options.sendData.size?(c.loading=!1,c.options.noData.show(),c.options.fireDom.hide()):(c.loading=!0,c.options.fireDom.length&&f>c.options.fireDom.offset().top&&c.run()),i=e.getPageCacheData(g)+i,e.setPageCacheData(g,i),e.setPageCacheData(g+"limit",c.options.sendData.limit),e.setPageCacheData(g+"box",c.__box__),e.setPageCacheData(g+"time",+(new Date))}else{if(c.options.first&&c.options.firstNoData){var j=a(window).height()-c.options.firstNoDataDom.parent().parent().offset().top;c.options.firstNoDataDom.addClass("flex").removeClass("pdt15").css("height",j),c.options.topic?(c.options.topicDom.show(),c.options.notTopicDom.hide()):(c.options.topicDom.hide(),c.options.notTopicDom.show())}else c.options.noData.show(),c.options.firstNoDataDom.removeClass("flex");c.load=!1,c.options.fireDom.hide()}c.options.callBack(c,h),c.options.first=!1},"json")},a(function(){a(".logo>h1>a[href]").click(function(){sessionStorage.clear()})}),{init:i}})