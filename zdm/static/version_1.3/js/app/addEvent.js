define(["jquery","layer","app/common","template","app/event","app/createUE"],function(a,b,c,d,e,f){function g(b){a("[data-addEventPlay]").on("click",function(){if(b=="edit"&&!k())return;if(!l())return;var d=a(this).attr("data-url"),e=a(this).attr("data-addEventPlay");a("#event-tpl-box").show(),a("#tpl-list").html(""),e==1?a(".title-wrap .Z-name").html("载入免费试用玩法模板："):a(".title-wrap .Z-name").html("载入折扣试用玩法模板："),a("#event-tpl-box .list-wrap").attr({"data-palytype":e}).attr({"data-url":d}),c.ajax("post","/admin2/event/SearchTemplate",{type:e},"json",function(b){var c=b.result,d="";for(var e in c)d+='<li data-tplid="'+c[e].id+'">'+c[e].name+"</li>";a("#tpl-list").html(d),a(".list-wrap li").bind("click",function(){a(this).attr("data-checked")!=undefined?a(this).removeAttr("data-checked"):a(this).attr({"data-checked":""}).siblings().removeAttr("data-checked")})})})}function h(b){a("[data-newplay]").on("click",function(){var b=a(this).closest(".list-wrap").attr("data-palytype"),c=a(this).closest(".list-wrap").attr("data-url"),d="";c+="?type="+b,n(b,c)})}function i(c){a("[data-tplplay]").on("click",function(){var d=a(this).closest(".list-wrap"),e=d.attr("data-palytype"),f=a(this).closest(".list-wrap").attr("data-url");if(d.find("li[data-checked]").length<=0){b.msg("请选择一个你需要载入的模板");return}var g=d.find("li[data-checked]").attr("data-tplid");f+="?type="+e+"&id="+g,c=="edit"?n(e,f,c):n(e,f,c)})}function j(c){a("body").on("click","[data-editcard]",function(){if(!l())return;var d="",e=[],f=a(this).closest("[data-playtype]").attr("data-playtype"),g="/admin2/event/editEventType?type="+f,h=a(this).closest(".Z-card-list-box").find("[type=hidden]"),i=a(this).closest(".Z-card-list-box").attr("data-playitemid"),j=m();a(h).each(function(b,c){e[b]={};var d=a(c).prop("name");d=d.match(/meta\[[\w]+\]\[(\S*)\]$/)[1],d.indexOf("[")>=0&&(d="["+d+"]"),e[b].name=d,e[b].value=a(c).val()}),f==1?d="免费试用玩法设置":d="折扣试用玩法设置",b.open({title:d,type:2,move:!1,scrollbar:!1,area:["910px","600px"],content:g,success:function(d,g){var h="",l=[];for(var m in j)h+="<tr><td>"+j[m]+"</td><td><input type='text' data-editdiscount name='"+m+"[buying_num]'></td><td class='price'><b></b><input type='hidden' name='"+m+"[price]'></td><td class='cost'><input type='text' data-editcost name='"+m+"[cost_spec]'></td><td><input type='text' data-editoldprice name='"+m+"[old_price]'></td></tr>";var n={},p="",q=b.getChildFrame("body",g),r=q.find("[name='[user_group][]']");q.find("#event-model-list tbody").html(h),q.find("#formDataAjaxSend").attr("data-playid",i);for(var s in e){var t=e[s].name,u=e[s].value;t=="[user_group][]"&&l.push(u);if(t.indexOf("user_group")>=0)continue;t.indexOf("spec_remarks")>=0&&(n[t]=u);if(c=="edit"&&t=="all_user"&&u==0)continue;q.find("[name='"+t+"']:not('[type=checkbox]'):not('[type=radio]')").val(u),q.find("[name='"+t+"'][type=checkbox]").prop("checked",!0);var v=q.find("[name='"+t+"'][type=radio]");v.each(function(b,c){a(this).val()==u&&a(this).prop("checked",!0)})}r.each(function(){for(var b in l)a(this).val()==l[b]&&a(this).prop("checked",!0)}),c=="edit"&&(q.find("#platform [type=checkbox]:checked").length>=4&&q.find("[name=all_platform]").prop("checked",!0),k()||a("[name=no_spec]:checked").val()!=1&&(q.find(".Z-model-box input").attr("readonly","readonly").addClass("Z-gray"),q.find("#batch").addClass("Z-gray-btn"))),f==2&&q.find("[data-editoldprice]").each(function(b,c){var d,e,f=q.find("#discount").val(),g=q.find("#cost_discount").val(),h=a(c).val();d=(h*100*f*100/1e5).toFixed(2),a(c).closest("tr").find(".price b").text(d),a(c).closest("tr").find(".price").find("[type=hidden]").val(d)});var w=0,x=0;q.find("[data-editdiscount]").each(function(){var b=parseInt(a(this).val());if(f==1)w+=b;else{var c=parseFloat(a(this).closest("tr").find(".cost input").val());x+=c*b,w+=b}}),x=x.toFixed(2),isNaN(x)&&(x=0),q.find(".allNum").html(w),q.find("#buying_num").val(w),q.find(".allCost").html(x),q.find("#cost").val(x),a("[name=no_spec]:checked").val()==1?(q.find("#event-model-list").attr("data-nospec","1"),q.find(".play-model-list-wrap").show()):q.find(".play-model-list-wrap").remove();for(var m in n)p+='<li class="modelitem"><input type="text" value="'+n[m]+'" name="'+m+'" placeholder="请填写规格名称"><span data-delmodelitem>x</span></li>';q.find("[data-addmodelitem]").before(p),o(q)}})})}function k(){return a("#formDataAjaxSend").attr("data-disabled")=="false"?!1:!0}function l(){return a("[name=no_spec]:checked").val()==0&&a("#model-list li").find("[type=hidden]").length<=0?(b.msg("请先添加型号信息"),!1):!0}function m(){var b={},c;return a("[name=no_spec]:checked").val()==0?c=a(".Z-edit-model .Z-gray-btn:not(.Z-btn)"):c=a(".Z-edit-model .no_spec"),a(c).each(function(){var c=a(this).find("input").prop("name"),d=a(this).text();c=c.replace(/model/g,"[model]"),b[c]=d}),b}function n(c,d,e){var f="",g=m();c==1?f="免费试用玩法设置":f="折扣试用玩法设置",a(".event-tpl-mask").hide(),b.open({title:f,type:2,move:!1,scrollbar:!1,area:["910px","600px"],content:d,success:function(c,d){var f="";for(var h in g)f+="<tr><td>"+g[h]+"</td><td><input type='text' data-editdiscount name='"+h+"[buying_num]'></td><td class='price'><b></b><input type='hidden' name='"+h+"[price]'></td><td class='cost'><input type='text' data-editcost name='"+h+"[cost_spec]'></td><td><input type='text' data-editoldprice name='"+h+"[old_price]'></td></td></tr>";var i=b.getChildFrame("body",d);i.find("#event-model-list tbody").html(f),e=="edit"&&i.find("#formDataAjaxSend").attr("data-editplay","edit"),a("[name=no_spec]:checked").val()==1&&(i.find("#event-model-list").attr("data-nospec","1"),i.find(".play-model-list-wrap").show()),o(i)}})}function o(a){var b=a.find("#type").val();b==1&&(a.find(".price").text("-"),a.find(".cost").css({backgroundColor:"#ededed"}).html("-"))}function p(){a("[name=no_spec]:checked").val()==0?a("#model-list").find("li.no_spec").remove():a("#model-list").find("li:not(.no_spec)").remove()}return a("[name=no_spec]").on("click",function(){a("[name=no_spec]:checked").val()==0?(a("#model-wrap").show(),a("#model-list .no_spec").remove()):(a("#model-wrap").hide(),a("[data-editmodel]").before('<li class="Z-gray-btn Z-w-150 no_spec">无规格<input type="hidden" name="model[0]" value="无规格"></li>'))}),a(".event-tpl-mask").on("click",".close-event-tpl-page",function(){a(this).closest(".event-tpl-mask").hide()}),{chooseTpl:g,addTplPlay:h,loadTplPlay:i,editPlayer:j,isDisabled:k,getModelList:m,delModel:p}})