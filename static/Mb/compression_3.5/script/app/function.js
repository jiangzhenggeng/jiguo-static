define(["jquery","layer","app/tplEngine"],function(a,b,c){return{share:function(){var d=c.init(a("#share-tpl").html()),e=b.open({type:1,anim:"up",shade:"background-color: rgba(0,0,0,.3)",style:"position:fixed; bottom:0;left:0; width: 100%;",content:d({}),success:function(c,d){a("body").on("click",".share-query",function(){b.close(e)})}})},buy:function(){var d=c.init(a("#buy-tpl").html()),e=b.open({type:1,anim:"up",shade:"background-color: rgba(0,0,0,.3)",style:"position:fixed; bottom:0;left:0; width: 100%;",content:d({}),success:function(c,d){a("body").on("click",".share-query",function(){b.close(e)})}})}}})