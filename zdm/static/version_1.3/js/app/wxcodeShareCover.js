define(["jquery","layer","app/common","lib/html2canvas","app/tplEngine"],function(a,b,c,d,e){function f(a){var b=atob(a.split(",")[1]),c=a.split(",")[0].split(":")[1].split(";")[0],d=new ArrayBuffer(b.length),e=new Uint8Array(d);for(var f=0;f<b.length;f++)e[f]=b.charCodeAt(f);return new Blob([d],{type:c})}function g(a,b){var c=document.createElementNS("http://www.w3.org/1999/xhtml","a");c.href=a,c.download=b;var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(d)}function h(b){var d=document.getElementById("wxcode-share-inner"),e=d.offsetWidth,g=d.offsetHeight,h=document.createElement("canvas");h.width=e,h.height=g,h.style.width=e+"px",h.style.height=g+"px";var i=h.getContext("2d"),j=parseInt(a(d).parent().css("left")),k=parseInt(a(d).parent().css("top"));i.translate(-j,-k),html2canvas(d,{canvas:h,onrendered:function(d){var e=d.toDataURL("image/png",1).replace("image/jpeg","image/octet-stream"),g=(new Date).getDate()+String(Math.random()).replace("0.","")+".png",h=new FormData,i=f(e);h.append("file",i,g),c.upload(h,a("#Z-image-up-wxcode_share_pic"),"wxcode_share_pic",!1,function(){(b||function(){})()})}})}function i(a,b){a.tId&&clearTimeout(a.tId),a.tId=setTimeout(function(){a.call(b)},0)}function j(c){var d=a("#Z-image-up-fengmian"),f=e.init(a("#wxcode-share-inner-tpl").html()),g=a("#wxcode-share-inner"),j=a("#Z-image-up-wxcode_share_pic"),k=j.offset().top,l=a("#add-event-free-block"),m=a("#add-event-pay-block"),n=!1,o=function(){if(n)return;var e=b.msg("正在生成小程序分享图",{time:999999});n=!0,setTimeout(function(){n=!1},5e3);var i,j,k,o,p;i="",j="",k="",o="",p="";if(l.find("input[type=hidden]").length>5&&m.find("input[type=hidden]").length<=0)i="立即申请",j=l.find('input[name*="buying_name"]').val(),o="限"+l.find("[data-all-number]").attr("data-all-number")+l.find('input[name*="quantifier"]').val(),k="免费",p="原价 ￥"+l.find('input[name*="buying_price"]').val(),l.find('input[name*="all_user"]').val()!=1&&l.find('input[name*="all_platform"]').val()!=1;else if(m.find(".Z-card-title").length>1){i="立即试用";var q=m.find(".Z-card-list-box").first(),r=q.find('input[name*="discount"]').val(),s=0;m.find(".Z-card-list-box").each(function(){if(a(this).find('input[name*="[pc]"]').val()==1&&a(this).find('input[name*="[h5]"]').val()==1){var b=a(this).find('input[name*="discount"]').val();b&&r>b&&(q=a(this),r=b);var c=parseInt(a(this).find("[data-all-number]").attr("data-all-number"));!isNaN(c)&&c>0&&(s+=c)}}),s>0&&(r=String(r||"").replace(/\.0+$/,""),j=r+"折试用起",o="限"+s+q.find('input[name*="quantifier"]').val(),k="￥"+q.find(".yan-number.Z-red").html(),p="原价 "+q.find(".card-number .Z-gray").html())}else if(m.find('input[name*="[pc]"]').val()==1&&m.find('input[name*="[h5]"]').val()==1){i="立即试用";var q=m.find(".Z-card-list-box").first(),r=String(q.find('input[name*="discount"]').val()||"").replace(/\.0+$/,"");j=r+"折试用",o="限"+q.find("[data-all-number]").attr("data-all-number")+q.find('input[name*="quantifier"]').val(),k="￥"+q.find(".yan-number.Z-red").html(),p="原价 "+q.find(".card-number .Z-gray").html()}if(!i||!j||!k||!o||!p){a("#Z-image-up-wxcode_share_pic").html('<input type="hidden" name="wxcode_share_pic" value="">'),b.msg("没有小程序分享图");return}var t=f({share_cover:d.find('input[name="fileid"]').val(),btn_text:i,left_top:j,left_bottom:k,right_top:o,right_bottom:p});g.html(t).find("img").load(function(){h(function(){b.close(e),n=!1,(c||function(){})()})})};a("body").on("click","[data-create-wxcode-share-pic]",function(){a("#Z-image-up-fengmian").find("img").val()?b.msg("请上传封面图"):i(o,this)})}function k(b){j(b),a("[data-create-wxcode-share-pic]").trigger("click")}return c.upImage("wxcode_share_pic","wxcode_share_pic",!1),{init:j,create:k}})