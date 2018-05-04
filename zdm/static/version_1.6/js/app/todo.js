define(["jquery","layer","template","app/common"],function(a,b,c,d){function e(a){var b=c("history-list-tpl",a.result),e=a.result.win_num,f=a.result.win_amount||0,g="共中签"+e+"次，中签总金额"+f+"元";d.showBox(g,"800px","500px",b,function(){})}function f(a){d.confirm("请确认有充足货源再发布？","/admin2/work/PublishApply",{mid:a})}function g(a){d.confirm("确定发布未中签消息吗？","/admin2/work/PublishFailedMessage",{mid:a})}function h(b){d.ajax("post","/admin2/work/GetMetaSpec",{meta_id:b},"json",function(b){d.showBox("强制添加","660px","600px",c("user-list-tpl",b.result),function(){a("body").on("click","#spec .meta-type",function(){a(this).addClass("on").siblings().removeClass("on")}),b.result.no_spec==1&&b.result.display_spec_remarks!=1&&a("#spec").find("span").trigger("click"),a("#authorBtn").on("click",function(){var b=a(this).prev().val().trim();d.ajax("post","/admin2/ajax/GetUserInfo",{username:b},"json",function(b){a("#userBox").html(c("user-tpl",b))})}),i()})})}function i(){a("body").off("click","[data-choose-author]").on("click","[data-choose-author]",function(){if(!a("#spec div").hasClass("on"))return b.msg("请选择型号"),!1;var c=a("#spec .on input").val();if(a(this).data("data-choose-author")=="send")return b.msg("该用户已添加"),!1;var e=a("#spec").attr("data-display-spec-remarks"),f=a(this).next().val().trim(),g={storage_id:c,uid:f};if(e==1){var h=a("#spec .on input").val();c=a("#spec [name=storage_id]").val(),g={storage_id:c,spec_remarks:h,uid:f}}a(this).data("data-choose-author","send"),d.ajax("post","/admin2/work/EventAddApply",g,"json",function(){b.closeAll(),b.msg("操作成功",function(){window.location.reload()})})})}function j(a,c){b.confirm("您确定取消吗？",{bth:["确定","取消"]},function(){d.ajax("post","/admin2/work/RemoveApplyUser",{id:a},"json",function(){b.msg("操作成功",function(){window.location.reload()})})})}function k(a,c){b.prompt({title:"请填写押金",value:a},function(a,e){var f={deposit:a,id:c};d.ajax("post","/admin2/work/ChangeDeposit",f,"json",function(){b.close(e),b.msg("操作成功",function(){window.location.reload()})})})}function l(b){var b=a.extend({chooseBtn:"#chooseAll",checkboxes:"#todo-list .icon",operaBtn:"#operaAll",operaAttr:"data-opera",warningAttr:"data-warning"},b),c=a(b.checkboxes).length,d=0;a(b.chooseBtn).on("change",function(){a(b.checkboxes).prop("checked",a(this).is(":checked")),a(b.chooseBtn).is(":checked")?(d=c,a(b.operaBtn).removeAttr(b.warningAttr).attr(b.operaAttr,"")):(d=0,a(b.operaBtn).removeAttr(b.operaAttr).attr(b.warningAttr,""))}),a("body").on("change",b.checkboxes,function(){var e=this;a(e).prop("checked")?d++:(d--,a(b.chooseBtn).prop("checked",!1)),d==c&&(a(b.chooseBtn).prop("checked",!0),a(b.operaBtn).removeAttr(b.warningAttr).attr(b.operaAttr,"")),d>=1?a(b.operaBtn).removeAttr(b.warningAttr).attr(b.operaAttr,""):a(b.operaBtn).removeAttr(b.operaAttr).attr(b.warningAttr,"")})}function m(d){var e=c("add-black-list-tpl",{uid:d});b.open({type:1,title:"加入黑名单",btn:["确定","取消"],area:["600px","480px"],content:e,success:function(b,c){function g(a){a=a;if(!a)var c="hi~ 亲爱的果主，面带悲伤的通知您，您被雪藏了，惩罚时间“"+e+"”。为什么？谁让你违反试用规则“"+d+"”呢！若有不服，请联系极果工作人，欢迎辩解~（迷人微笑.jpg）";else var c="hi~ 亲爱的果主，面带悲伤的通知您，您被雪藏了。为什么？谁让你违反极果平台规则！若有不服，请联系极果工作人，欢迎辩解~（迷人微笑.jpg）";b.find(".msg-wrapper").html(c),b.find('[name="data[send_msg]"]').val(c)}var d="",e="",f=!1;b.find("#B-reason .icon").click(function(){a('[name="data[send_type]"]:checked').val()==5?(b.find(".reason-wrapper").show(),d=b.find(".reason-wrapper textarea").val(),f=!0,g(f)):(b.find(".reason-wrapper").hide(),d=a(this).parent().text(),f=!1,g(f))}),b.find("#B-time .icon").click(function(){e=a(this).parent().text(),g(f)}),b.find("#B-msg .icon").click(function(){a('[name="data[is_send_msg]"]:checked').val()==1?b.find(".msg-box").show():b.find(".msg-box").hide()})},yes:function(c,d){if(!n(d))return!1;var e=d.find("form").serialize(),f=b.load();a.get("/admin/user/AddBlackList",e,function(a){b.close(f),b.msg(a.errorMsg||"操作成功",{time:1e3},function(){window.location.reload()})},"json")}})}function n(a){return a.find("#B-reason .icon:checked").length<=0?(b.msg("请选择加入黑名单理由"),!1):a.find("#B-reason .icon:checked").val()==5&&a.find('[name="data[other_msg]"]').val()==""?(b.msg("请填写加入黑名单理由"),!1):a.find("#B-time .icon:checked").length<=0?(b.msg("请选择黑名单时效"),!1):!0}function o(d){var e=c("cancel-black-list-tpl",{uid:d});b.confirm(e,{title:"取消黑名单",bth:["确定","取消"],area:["600px"],success:function(b,c){b.find(".icon").click(function(){a("[name=is_send_msg]:checked").val()==1?b.find(".msg-box").show():b.find(".msg-box").hide()})}},function(c,d){var e=d.find("form").serialize(),f=b.load();a.get("/admin/user/CancelBlackList",e,function(a){b.close(f),b.msg(a.result||"操作成功",{time:1e3},function(){window.location.reload()})},"json")})}function p(a,c){b.prompt({title:"备注",value:c},function(c,e){var f={remarks:c,orderid:a};d.ajax("post","/admin2/work/EditOrderRemarks",f,"json",function(){b.close(e),b.msg("操作成功",function(){window.location.reload()})})})}return{lookHistory:e,publish:f,publishno:g,addUser:h,deleteUser:j,changeDeposit:k,pass:l,addBlackList:m,cancelBlackList:o,remarksUser:p}})