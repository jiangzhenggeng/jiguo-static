define(["jquery","app/common","template","app/tplEngine","layer","lib/html2canvas"],function(a,b,c,d,e){function f(){return"random_id_"+Math.random().toString().replace(".","")}function g(a){var b=atob(a.split(",")[1]),c=a.split(",")[0].split(":")[1].split(";")[0],d=new ArrayBuffer(b.length),e=new Uint8Array(d);for(var f=0;f<b.length;f++)e[f]=b.charCodeAt(f);return new Blob([d],{type:c})}function h(a,b){var c=document.createElementNS("http://www.w3.org/1999/xhtml","a");c.href=a,c.download=b;var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(d)}function i(b){var c=document.getElementById("share-img-box"),d=c.offsetWidth,f=c.offsetHeight,h=document.createElement("canvas");h.width=d*2,h.height=f*2,h.style.width=d+"px",h.style.height=f+"px";var i=h.getContext("2d"),j=c.getBoundingClientRect().left*2,k=c.getBoundingClientRect().top*2;i.translate(-j,-k),i.scale(2,2),html2canvas(c,{canvas:h,onrendered:function(c){var d=c.toDataURL("image/png",1).replace("image/jpeg","image/octet-stream"),f=(new Date).getDate()+String(Math.random()).replace("0.","")+".png",h=new FormData,i=g(d);h.append("file",i,f),a.ajax({type:"post",url:"/admin2/ajax/upload",data:h,dataType:"json",processData:!1,contentType:!1,success:function(c){c.resultCode==0?(a(".share-img").attr("src",c.result.url),a("#share_cover").val(c.result.fileid)):e.msg(c.errorMsg),(b||function(){})()}})}})}function j(){var b=a("#share-img-box"),c=!1,f,g,h;f=a("#share_title").val(),g=a("#share_desc").val(),h=a("#share_small_desc").val();if(f.trim().length<=0){e.msg("请填写分享标题");return}if(g.trim().length<=0){e.msg("请填写第一行文案");return}if(h.trim().length<=0){e.msg("请填写第二行文案");return}if(c)return;var j=e.msg("正在生成小程序分享图",{time:999999});c=!0,clearTimeout(k);var k=setTimeout(function(){c=!1},5e3),l={title:f,first_text:g,second_text:h},m=d.init(a("#coupon-wx-share-tpl").html(),l);b.html(m).find("img").load(function(){i(function(){e.close(j),c=!1,a(".share-title").html(l.title)})})}function k(){var b=a("#price-type").find("input:checked").val();if(a("#name").val().length<=0)return e.msg("请输入名称"),!1;if(b==0){if(a("#price").val().length<=0||isNaN(a("#price").val()))return e.msg("请输入金额"),!1;var c=a("#num").val();if(c.length<=0)return e.msg("请输入券数量"),!1;if(c%1>0||c<=0||isNaN(c))return e.msg("券数量请填写大于 0 的整数"),!1}else if(a("#all-random-price").val()<=0)return e.msg("请添加至少一个随机金额"),!1;return a("#start_time").val().length<=0?(e.msg("请输入有效期开始时间"),!1):a("#push_day").val().length<=0?(e.msg("请输入push提醒时间"),!1):a("#ctitle").val().length<=0?(e.msg("请输入券标题"),!1):a("#cdesc").val().length<=0?(e.msg("请输入券简介"),!1):a("#cleftdesc").val().length<=0?(e.msg("请输入左侧文案"),!1):a("#crule").val().length<=0?(e.msg("请输入规则说明"),!1):a("#share_title").val().length<=0?(e.msg("请输入分享标题"),!1):a("#share_cover").val().length<=0?(e.msg("请生成小程序分享图"),!1):l()?!0:!1}function l(){var b=a("#num").val(),c=a("#event").val(),d=a("#price").val(),f=d*b,g=a("[data-allmoney]").data("allmoney"),h=a("[data-limiteventmoney]").data("limiteventmoney"),i=a("#all-random-price").val(),j=a("#price-type").find("input:checked").val();if(j==0){if(c!=""&&f>h||c==""&&f>g)return a("html,body").animate({scrollTop:0},160),e.msg("超出可用余额"),!1}else if(c!=""&&i>h||c==""&&i>g)return a("html,body").animate({scrollTop:0},160),e.msg("超出可用余额"),!1;return!0}function m(a){navigator.userAgent.indexOf("Safari")>-1&&navigator.userAgent.indexOf("Chrome")==-1&&(a=a.replace(/-/g,"/"));var b=new Date(a),c=b.getFullYear(),d=b.getMonth()+1,e=b.getDate();return c+"."+d+"."+e}function n(){var b=a("#ran-price").val(),d=a("#ran-num").val(),g=(b*d).toFixed(2),h={price:b,num:d,count_price:g,randomID:f()};if(isNaN(b)||b==""||isNaN(d)||d==""||d%1>0){e.msg("请填写正确的金额和数量");return}var i=c("price-list-tpl",h);a("#ran-num").val(""),a("#ran-price").val("").focus(),a("#random-price-list").find("li.on").removeClass("on"),a("#random-price-list").append(i),p(),o()}function o(){var b=a("#random-price-list li");b.sort(function(b,c){var d=a(b).find("[name*=price]").val(),e=a(c).find("[name*=price]").val();return d-e}),a("#random-price-list").html(b)}function p(){var b=0,c=a("#random-price-list li");c.each(function(){var c=a(this).find("input[name*=count_price]").val();b+=parseFloat(c)}),b=b.toFixed(2),a("#all-price").html(b),a("#all-random-price").val(b)}return{submitForm:function(){if(!k())return;var b=e.load(3,{time:2e4}),c=a("#formData").serialize();a.ajax({type:"post",url:"/admin2/coupon/InsertCouponPackage",data:c,dataType:"json",timeout:1e4,complete:function(c,d){e.close(b);if(d=="timeout")e.msg("提交超时");else{var f=a.parseJSON(c.responseText);f.success!="true"?e.msg(f.errorMsg):e.msg(f.result,function(){location.href="/admin2/coupon/couponpackagelist"})}}})},showCard:function(){var b=a("#ctitle").val(),d=a("#cdesc").val(),e=a("#price").val(),f=a("#cleftdesc").val(),g=a("#crule").val(),h=m(a("#start_time").val()),i=m(a("#end_time").val()),j={ctitle:b,cdesc:d,price:e,cleftdesc:f,crule:g,startTime:h,endTime:i},k=a("#price-type").find("input:checked").val();k==1&&(j.price="xx");var l=c("preview-card-tpl",j);a(".coupon-card-wrapper").html(l)},updatePrice:function(){var b=this;a("#price").bind("input propertychange",function(){var c=a(this).val();a(".coupon-money").text(c),b.showCard()})},updateCard:function(){var b=this;a("#price,#ctitle,#cdesc,#cleftdesc").bind("input propertychange",function(){b.showCard()}),a("#start_time,#end_time").blur(function(){b.showCard()})},createShareImg:function(){a("body").on("click","[data-create-wxcode-share-pic]",function(){j()})},choosePriceType:function(){a("body").on("click","#price-type .radiobox",function(){var b=a(this).find("input").val();b==0?(a(".random-price").hide(),a(".fixed-price").show()):(a(".random-price").show(),a(".fixed-price").hide())})},addRandomPrice:function(){a("body").on("click","#add-random-price",function(){n()}),a("#ran-num").keypress(function(a){a.keyCode==13&&n()}),a("#random-price-list").on("mouseenter",function(){a(this).find("li.on").removeClass("on")})},delRandomPrice:function(){a("body").on("click",".del",function(){a(this).closest("li").remove(),p()})}}})