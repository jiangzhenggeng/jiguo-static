define(["jquery"],function(a){function b(b){var b=a.extend({},b),c=a(b.selecter||"body"),d=c.find("iframe").filter(function(b,c){return a(this).attr("src")==undefined||a(this).attr("src")==""?!1:a(this).attr("src").indexOf("zdm.jiguo.com")!=-1?!0:!1});d.each(function(){a(this).attr("frameborder","0").load(function(){try{var b=this.contentWindow.document||this.document;a(this).attr({height:a("body",b).height()})}catch(c){a(this).attr({height:"auto"})}}),a(this).attr({style:"",width:"100%",src:a(this).attr("src")+"&type=web"})})}return window.$=window.jQuery=a,{init:b}})