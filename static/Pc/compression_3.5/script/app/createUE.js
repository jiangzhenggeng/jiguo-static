define(["require","jquery","ueditor","layer"],function(a,b,c,d){function e(a){var d=c.getEditor(a,{serverUrl:window.FILE_UPLOAD_URL,onready:function(){b(d.body).find("img[_url]").each(function(){b(this).replaceWith('<embed type="application/x-shockwave-flash" class="edui-faked-video" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+b(this).attr("_url")+'" '+'width="'+b(this).attr("width")+'" '+'height="'+b(this).attr("height")+'" '+'wmode="transparent" '+'play="true" '+'loop="false" '+'menu="false" '+'allowscriptaccess="never" '+'allowfullscreen="true"/>')});var a='<div class="tooltip" style="display: none;"><div class="tooltip_inner"></div><i class="tooltip_arrow"></i></div>';b("body").append(a);var c=jQuery(".tooltip");b(".edui-toolbar > .edui-box").hover(function(a){c.show().find(".tooltip_inner").html(b(this).find("[title]").eq(0).attr("title"));var d=b(this).offset(),e=d.left-c.width()/2+b(this).width()/2,f=d.top-b(this).height()/2-15;c.css("left",e).css("top",f)},function(){c.hide()})}});return d.addListener("beforepaste",function(a,b){b.html&&(b.html=b.html.replace(/<img[^>](\/>|>)/ig,""))}),d}return window.FILE_UPLOAD_URL=window.UEDITOR_HOME_URL+"php/controller.php?uid="+window.URL.uid+"&code="+window.URL.uploadCode,d.ready(),{init:e}})