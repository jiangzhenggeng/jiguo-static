define(["jquery","layer","template","app/common","app/event"],function(a,b,c,d,e){function f(){a("[data-checkbox]").on("click",function(){var b=a(this).attr("data-checkbox");_this=a(this).find("input[type=checkbox]")[0],_this.checked?a("#"+b+" :checkbox").prop("checked",!0):a("#"+b+" :checkbox").prop("checked",!1)}),a(".checkbox-wrap").on("click","input[type=checkbox]",function(){var b=a(this).closest(".checkbox-wrap"),c=b.attr("id"),d=b.find("input[type=checkbox]").length,e=b.find("input[type=checkbox]:checked").length;e==d?a("[data-checkbox="+c+"]").find("input[type=checkbox]").prop("checked",!0):a("[data-checkbox="+c+"]").find("input[type=checkbox]").prop("checked",!1)})}function g(){a("#start").on("blur",function(){j("#start","#deadline","#applyday"),j("#deadline","#end","#eventday")}),a("#deadline").on("blur",function(){j("#deadline","#end","#eventday"),k("#start","#deadline","#applyday")}),a("#end").on("blur",function(){k("#deadline","#end","#eventday")}),a("#applyday").on("blur",function(){j("#start","#deadline","#applyday"),j("#deadline","#end","#eventday")}),a("#eventday").on("blur",function(){j("#deadline","#end","#eventday")})}function h(a){var a=a||new Date,b=a.getFullYear(),c=a.getDate(),d=+a.getMonth()+1,e=a.getHours(),f=a.getMinutes(),g=a.getSeconds(),h=b+"-"+i(d)+"-"+i(c)+" "+i(e)+":"+i(f)+":"+i(g);return h}function i(a){return a>9?a:"0"+a}function j(c,d,e,f){var g,i=a(c).val(),e=a(e).val(),j=a(d);if(e%1>0||isNaN(e)){b.msg("请输入整天数");return}if(i=="")return;navigator.userAgent.indexOf("Safari")>-1&&navigator.userAgent.indexOf("Chrome")==-1&&(i=i.replace(/-/g,"/")),e=e||f,g=new Date(i),g.setDate(g.getDate()+parseInt(e)),g=h(g),j.val(g)}function k(b,c,d){var e,f,g,h,i,j=a(b).val(),k=a(c).val(),d=a(d);e=j.split("-"),f=k.split("-"),e[2]=e[2].substr(0,2),f[2]=f[2].substr(0,2),navigator.userAgent.indexOf("Safari")>-1&&navigator.userAgent.indexOf("Chrome")==-1?(g=new Date(e[1]+"/"+e[2]+"/"+e[0]),h=new Date(f[1]+"/"+f[2]+"/"+f[0])):(g=new Date(e[1]+"-"+e[2]+"-"+e[0]),h=new Date(f[1]+"-"+f[2]+"-"+f[0])),i=parseInt(Math.abs(h-g)/1e3/60/60/24),d.val(i)}function l(){a("#batch").on("click",function(){if(a(this).hasClass("Z-gray-btn"))return;var c=a("#discount").val(),d=a("#cost_discount").val(),e=a("#inventory").val(),f=a("#old-price").val(),g,h;if(Math.floor(e)!=e){b.msg("请填入正确的库存");return}if(!f){b.msg("请填入正确的原价");return}if(a("#discount").length>0){if(c<=0||c>=10||d<0||d>=10){b.msg("请填入正确的折扣");return}g=(f*100*c*100/1e5).toFixed(2),a(".price b").text(g),a(".price").find("[type=hidden]").val(g),h=(f*100*d*100/1e5).toFixed(2),a(".cost").find("input").val(h)}a("[data-editdiscount]").val(e),a("[data-editoldprice]").val(f),m()}),a("body").on("keyup","[data-editdiscount]",function(){var c=a(this).val();if(Math.floor(c)!=c){b.msg("请填入正确的库存");return}m()}),a("body").on("keyup","[data-editcost]",function(){var c=a(this).val();if(isNaN(c)){b.msg("请填入正确的成本价");return}m()}),a("body").on("keyup","[data-editoldprice]",function(){var b,c,d=a(this).val(),e=a("#discount").val(),f=a("#cost_discount").val();n();if(a("#discount").length<=0)return;b=(d*100*e*100/1e5).toFixed(2),a(this).closest("tr").find(".price b").text(b),a(this).closest("tr").find(".price").find("[type=hidden]").val(b),c=(d*100*f*100/1e5).toFixed(2),a(this).closest("tr").find(".cost").find("input").val(c),m()})}function m(){var b=0,c=0;a("[data-editdiscount]").each(function(){var d=parseInt(a(this).val());if(a("#discount").length<=0)b+=d;else{var e=parseFloat(a(this).closest("tr").find(".cost input").val());c+=e*d,b+=d}}),c=c.toFixed(2),isNaN(c)&&(c=0),a(".allNum").html(b),a("#buying_num").val(b),a(".allCost").html(c),a("#cost").val(c),n()}function n(){var c,d=[],e=!0;a("[data-editoldprice]").each(function(){if(isNaN(Number(a(this).val()))&&a(this).val()!="")return b.msg("请输入正确的商品原价"),e=!1,!1;if(a(this).val()=="")return e=!1,!1;d.push(a(this).val())});if(!e)return;c=Math.min.apply(null,d),a("#showprice").val(c)}function o(){var c=!1;if(a("[name=buying_name]").val()=="")return b.msg("请填写正确的玩法名称"),a("[name=buying_name]").trigger("focus"),!1;if(e.getLen(a("[name=buying_name]").val())>6)return b.msg("玩法名称不超过6个字"),a("[name=buying_name]").trigger("focus"),!1;if(a("[name='[user_group][]']:checked").length<=0)return b.msg("请选择用户级别"),a("[name=user_group]").trigger("focus"),!1;if(a("#platform :checked").length<=0)return b.msg("请选择参与平台"),a("#platform input").trigger("focus"),!1;if(a("[name=starttime]").val()=="")return b.msg("请选择报名开始时间"),a("[name=starttime]").trigger("focus"),!1;if(a("[name=endtime]").val()==""){b.msg("请选择报名截止时间"),a("[name=endtime]").trigger("focus");return}if(a("#type").val()==2&&a("#discount").val()==""){b.msg("请填写折扣"),a("#discount").trigger("focus");return}if(a("#type").val()==2&&a("#cost_discount").val()==""){b.msg("请填写成本折扣"),a("#cost_discount").trigger("focus");return}if(a("#type").val()!=1||a("#event-model-list").attr("data-nospec")!=1){a("[data-editdiscount]").each(function(){if(a(this).val()=="")return b.msg("请填写库存数量"),a(this).trigger("focus"),c=!0,!1});if(c)return!1;a("[data-editoldprice]").each(function(){if(a(this).val()=="")return b.msg("请填写原价"),a(this).trigger("focus"),c=!0,!1});if(c)return!1}return!a("#event-model-list").attr("data-nospec")==1&&a("#buying_num").val()<=0?(b.msg("请正确填写库存数量"),a("#inventory").trigger("facus"),!1):a("[name=buying_price]").val()==""?(b.msg("请填写押金"),a("[name=buying_price]").trigger("focus"),!1):a("[name=quantifier]").val()==""?(b.msg("请填写单位"),a("[name=quantifier]").trigger("focus"),!1):a("[name=pay_back]").val()==""?(b.msg("请填写描述"),a("[name=pay_back]").trigger("focus"),!1):a("[name=explain]").val()==""?(b.msg("请填写押金说明"),a("[name=explain]").trigger("focus"),!1):a("[name=tips]").val()==""?(b.msg("请填写试用贴士"),a("[name=tips]").trigger("focus"),!1):a("[name=detail]").val()==""?(b.msg("请填写活动介绍"),a("[name=detail]").trigger("focus"),!1):!0}return{initCheckBox:f,initInventory:m,batch:l,testForm:o,changeTime:g}})