define(["jquery"],function(a){function b(){return navigator.userAgent.match(/MicroMessenger/i)=="MicroMessenger"?!0:!1}function c(){return navigator.userAgent.match(/QQ/i)=="QQ"?!0:!1}function d(){return navigator.userAgent.indexOf("Android")>-1||navigator.userAgent.indexOf("Adr")>-1?!0:!1}function e(){var a=navigator.userAgent.toLowerCase(),b;if(a.indexOf("like mac os x")>0){var c=/os [\d._]*/gi,d=a.match(c);b=(d+"").replace(/[^0-9|_.]/ig,"").replace(/_/ig,".")}var e=b+"";if(e!="undefined"&&e.length>0){b=b.substring(0,2);if(b>=9)return!0}return!1}function f(){a("body").on("click","[data-goApp]",function(c){var d=a(this).attr("href"),f=/applink\/(\w+\?id\=\d+)/.exec(d)[1],g="http://a.app.qq.com/o/simple.jsp?pkgname=com.jiguo.net";if(!e()){c.preventDefault();if(b())a("#goBrowser").removeClass("none"),a(".cancle img").on("click",function(){a("#goBrowser").addClass("none")});else{var h=document.createElement("iframe");h.src="jiguo://"+f+"",h.style.display="none",document.body.appendChild(h),window.setTimeout(function(){document.body.removeChild(h),window.location=g},1200)}}})}return{init:f}})