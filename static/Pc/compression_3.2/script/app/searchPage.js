define(["jquery","app/tplEngine","app/unitTool","layer"],function(a,b,c,d){return{searchAll:function(e,f){function g(b,c){var d=this,e=String(d.keyword).replace(/^\s+|\s+$/i,"");if(d.loading)return;d.loading=!0;var f=a("title").html(),g=t(window.location.href);history.pushState({title:f},f,g),p.show(),o.hide(),q.hide(),a.get("/api/search/index",{keyword:e,type:d.type,cid:d.cid,limit:d.limit,sys:d.sys,size:d.size},function(a){d.loading=!1,p.hide(),d.limit=a.limit,b.apply(d,[a,c])},"json")}function l(){i.limit=0,i.keyword=i.val(),g.apply(i,[s,!0]),j.html(i.keyword)}function s(a,b){var e=!0,f=0,g=this;if(a.resultCode==0)for(var h=0;h<m.length;h++){f=c.getLength(a.result[m[h]]);if(f>0){n[h].warpBox.show();if(n[h].htmlBox.length){e=!1,b?n[h].htmlBox.html(n[h].cacheFn({data:a.result[m[h]]})):n[h].htmlBox.append(n[h].cacheFn({data:a.result[m[h]]})),f<g.size?(q.hide(),i.type?(e=!0,o.show()):o.hide()):i.type?(q.show(),o.hide()):(o.hide(),q.hide());if(i.type)break}}else n[h].warpBox.hide();n[h].warpBox.attr("data-number",c.getLength(a.result[m[h]]))}else d.msg(a.message||"系统错误");e?o.show():o.hide()}function t(a){var b=a.split("?");return b.length>=2&&b[1]!=""?(b[1]=String(b[1]).replace(/keyword=([^&]*)/i,"").replace(/^&+|&+$/i,""),a=b[0]+"?"+b[1]+"&keyword="+i.val(),a.replace(/^&+|&+$/i,"")):a}var h=a(".search-page-header"),i=h.find("#keyword"),j=a("#show-keyword"),k=null;i.loading=!1,h.on("click","[data-search-page-submit]",function(){i.keyword=i.val(),i.limit=0,g.apply(i,[s,!0])}).on("keyup","#keyword",function(){clearTimeout(k),k=setTimeout(l,500)}),i.type=e,i.cid=f,i.sys="pc",i.size=8;var m=["event","product","rebate","list","article"],n=[],o=a(".no-data"),p=a(".loading"),q=a(".click-loading");i.type&&(i.size=20);for(var r=0;r<m.length;r++)n.push({cacheFn:b.init(a("#"+m[r]+"AjaxLoad-tpl").html()),htmlBox:a("#"+m[r]+"AjaxLoad"),warpBox:a("#"+m[r]+"Warp")});l(),q.click(function(){g.apply(i,[s,!1])}),a("a[href][data-search-singin-url]").click(function(b){a(this).attr("href",t(a(this).attr("href")))})}}})