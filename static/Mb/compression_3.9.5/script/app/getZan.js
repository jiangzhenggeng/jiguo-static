define(["jquery","app/tplEngine"],function(a,b){return{init:function(){a.get("/api/praise/GetPraiseList",{id:blogid,type:3},function(c){var d=b.init(a("#praise-list-tpl").html()),e=c.result.length;if(e){a("#praise-list-box").removeClass("none");var f=d({data:c.result}),g=a("#praise-list");g.html(f),a("#pariset-number").html(e),g.next(".icon").click(function(){g.css("height","auto"),a(this).remove()})}},"json")}}})