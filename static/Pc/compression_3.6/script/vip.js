define(["app/upload","app/provinceArea","laydate","app/tplEngine","layer","app/unitTool"],function(a,b,c,d,e,f){return window.NextSetp=function(a,b){switch(a){case".apply-step-1":if(!checkoutStep1(a,!1))return;break;case".apply-step-2":if(!checkoutStep2(a,!1))return;break;case".apply-step-3":if(!checkoutStep3(a,!1))return;break;case".apply-step-4":if(!checkoutStep4(a,!1))return}if($(this).hasClass("gray"))return;var c=$(a).find("form");$.post(c.attr("action"),c.serialize(),function(d){if(d.resultCode==0){b&&e.msg("信息提交成功，耐心等待审核"),$(a).hide().next(".apply-step").show();var f=c.find('input[type=hidden][name="step"]').val()}else e.msg(d.errorMsg||"系统错误")},"json")},window.PrevSetp=function(a){$(a).hide().prev(".apply-step").show()},window.SubmitData=function(a){$(a).hide().prev(".apply-step").show()},window.checkoutStep1=function(a,b){console.log(b),a=$(a||".apply-step-1");var c=-150,d=$("html,body"),f=a.find("#user-face");if(f.find("input[data-url]").val()=="")return b?!1:(d.animate({scrollTop:f.offset().top+c}),e.msg("请上传头像"),!1);var f=a.find("#name");if(f.val()=="")return b?!1:(d.animate({scrollTop:f.offset().top+c}),e.msg("请填写姓名"),!1);var f=a.find('input[name="apply[sex]"]:checked');if(f.length<=0)return b?!1:(d.animate({scrollTop:530+c}),e.msg("请选择性别"),!1);var f=a.find("#birthday");if(!/^\d{4}\-\d{2}\-\d{2}$/.test(f.val()))return b?!1:(d.animate({scrollTop:f.offset().top+c}),e.msg("请正确选择生日"),!1);var f=a.find("#job");if(f.val()=="")return b?!1:(d.animate({scrollTop:f.offset().top+c}),e.msg("请填写职业"),!1);var f=a.find("#province"),g=a.find("#city");if(f.val()==""||g.val()=="")return b?!1:(d.animate({scrollTop:f.offset().top+c}),e.msg("请填选择地域"),!1);var f=a.find("#introduce");return f.val()==""?b?!1:(d.animate({scrollTop:f.offset().top+c}),e.msg("请填写个人介绍"),!1):!0},window.checkoutStep2=function(a,b){a=$(a);var c=-150,d=$("html,body"),f=a.find('input[name="apply[type]"]:checked');if(f.length<=0)return b?!1:(d.animate({scrollTop:120}),e.msg("请选择申请类别"),!1);var f=a.find(".good-at-area li input:checked");if(f.length<=0)return b?!1:(d.animate({scrollTop:420}),e.msg("请选择擅长领域"),!1);var f=a.find("#tel");if(!/^1\d{10}$/.test(f.val()))return b?!1:(d.animate({scrollTop:f.offset().top+c}),e.msg("请填写电话"),!1);var f=a.find("#weixin");return f.val()==""?b?!1:(d.animate({scrollTop:f.offset().top+c}),e.msg("请填微信号"),!1):(window.getAreaQuestion(a),!0)},window.checkoutStep3=function(a,b){a=$(a);var c=-150,d=$("html,body"),f=[];a.find("[data-apply-answer-text]").each(function(){if($(this).val()==""){f.push($(this));return}});if(f.length>0)return b?!1:(d.animate({scrollTop:f[0].offset().top+c}),e.msg("请填写问题"),!1);var f=[];return a.find("[data-apply-answer-image]").each(function(){if($(this).find("li").length<=0){f.push($(this));return}}),f.length>0?b?!1:(d.animate({scrollTop:f[0].offset().top+c}),e.msg("请填上传图片"),!1):!0},window.checkoutStep4=function(a,b){a=$(a);var c=-150,d=$("html,body"),f=[];return a.find("[data-apply-link]").each(function(){if($(this).val()==""){f.push($(this));return}}),f.length>0?b?!1:(d.animate({scrollTop:f[0].offset().top+c}),e.msg("请填作品链接"),!1):!0},window.getAreaQuestion=function(a){a=$(a);var b=a.find(".good-at-area li input:checked"),c="";b.each(function(){c+=","+$(this).val()}),c=c.substr(1),$.get("/api/vip/GetArea",{area:c},function(a){var b=d.init($("#apply-question-item-tpl").html(),{data:a.result?a.result.data:[]});$("#apply-question-item-wrap").html(b),window.uploadify()},"json")},window.uploadify=function(){var b=document.createElement("input");b.setAttribute("type","file"),"multiple"in b?a.uploadify(".apply-step3-item-image ul",{uploadUrl:"/api/other/RepairUpload",onUploadSuccess:function(a,b,c){b=b.result;var e=$("#"+c);b.data_name=e.attr("data-name");var f=d.init($("#uploadfile-item-show-tpl").html(),b);e.find("#"+a.id).replaceWith(f)}}):a.uploadify(".apply-step3-item-image ul",{uploadUrl:"/api/other/RepairUpload",onUploadSuccess:function(a,b,c){b=$.parseJSON(b).result;var e=$("#"+this.settings.queueID);b.data_name=e.attr("data-name");var f=d.init($("#uploadfile-item-show-tpl").html(),b);e.find("#"+a.id).replaceWith(f)}})},{init:function(){var f=require("jquery");window.getAreaQuestion(".apply-step-2"),a.init("#user-face",{width:185}),c({elem:"#birthday",event:"focus"}),b.init({province:"#province",city:"#city"}),f("#apply-sex-select").on("click",".select-group",function(){f(this).prevAll().removeClass("on"),f(this).nextAll().removeClass("on"),f(this).addClass("on")});var g=f(".apply-step-1");g.on("keyup","[data-text-number]",function(){var a=parseInt(f(this).attr("data-text-number")),b=g.find("["+f(this).attr("data-rel")+"]"),c=f(this).val();c.length>=a&&f(this).val(c.substr(0,a)),b.html(a-c.length<1?0:a-c.length)}).find("[data-text-number]").trigger("keyup");var h=f(".apply-step-2");h.on("click",".apply-type-wrap",function(){h.find('input[name="apply[type]"]').prop("checked",!1),h.find(".apply-type-wrap").removeClass("on"),f(this).addClass("on").find('input[name="apply[type]"]').prop("checked",!0)}),f("#apply-form-step2").on("click","li",function(){if(f(this).hasClass("on")){if(f(this).parent().find("li.on").length<=1){e.msg("至少选择一个领域");return}f(this).removeClass("on").find('input[name="apply[area][]"]').prop("checked",!1)}else{if(f(this).parent().find("li.on").length>=3){e.msg("最多选择三项领域");return}f(this).addClass("on").find('input[name="apply[area][]"]').prop("checked",!0)}}),f(".apply-step-3").on("click",".delete",function(){f(this).parent("li").remove()}),window.uploadify(),f(".apply-step-4").on("click",".apply-add-production",function(){var a=f(this).closest(".apply-table-view").find("[data-production-box]");a.append(d.init(f("#add-production-item-tpl").html(),{number:a.find(">tr").length+1}))}).on("click",".apply-sub-production",function(){var a=1,b=f(this).closest("[data-production-box]");if(b.find("[data-apply-link]").length<=1){e.msg("至少有一个作品链接");return}f(this).closest("tr").remove(),b.find("[data-apply-link]").each(function(){f(this).parent().parent().prev().find("[data-production-item-index]").html(a),a++})})}}})