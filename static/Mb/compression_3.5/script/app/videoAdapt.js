define(["require","jquery"],function(a,b){function c(a){function c(a,b){var c=a.toString().split("?")[1].toString().split("&"),d=null;for(var e=0;e<c.length;e++)if(c[e].split("=")[0].toLowerCase()==b)return d=c[e].split("=")[1],d;return""}var a=b.extend({},a),d=b(a.selecter||"body"),e=a.width||d.width(),f=e*2/3,g=d.find("embed,iframe:not([data-productid])").filter(function(a,c){var d=String(b(this).attr("src"));return!b(this).attr("src")||d.indexOf("jiguo.com")!=-1||d.indexOf("xhcheng.com")!=-1?!1:!0}),h=null;g.each(function(){h=b(this).attr("src");var a="iframe"+Math.random().toString().replace(".","");b(this).replaceWith('<div style="text-align: center;"><iframe id="'+a+'" frameborder="0"></iframe></div>');var d=b("#"+a);h.match("v.qq.com")||h.match("video.qq.com")||h.match("imgcache.qq.com")?h="http://v.qq.com/iframe/player.html?vid="+c(h,"vid")+"&width="+e+"&height="+f+"&auto=0":h.match("youku.com")?(h.match(/http:\/\/player.youku.com\/player.php\/sid\/(.+)\/v.swf/),h="http://player.youku.com/embed/"+RegExp.$1):h.match(/sohu\.com(.*?)v\.swf/i)&&(h.match(/sohu\.com(.*?)v\.swf(.*?)id=(\d+)/i),h="http://tv.sohu.com/upload/static/share/share_play.html#4059416_"+RegExp.$3+"_0_2_1");if(h.match(/sohu\.com(.*?)v\.swf/i)){var g='<embed class="previewVideo" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+h+'" '+'width="'+e+'" '+'height="'+f+'" wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true">';d.replaceWith(g)}else d.attr({src:h,height:f,width:e})})}return{init:c}})