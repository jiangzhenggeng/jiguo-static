define(["jquery","layer","app/common","template","laydate","app/addEvent"],function(a,b,c,d,e,f){function g(){return"random_id_"+Math.random().toString().replace(".","")}function h(a){if(typeof a!="string")return"";var b="";return a.length==0?"":a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\n/g,"<br>")}function i(a){if(typeof a!="string")return"";var b="";return a.length==0?"":(b=a.replace(/&amp;/g,"&"),b=b.replace(/&lt;/g,"<"),b=b.replace(/&gt;/g,">"),b=b.replace(/&nbsp;/g," "),b=b.replace(/&#39;/g,"'"),b=b.replace(/&quot;/g,'"'),b=b.replace(/<br>/g,"\n"),b)}function j(a){e({elem:a,format:"YYYY-MM-DD hh:mm:ss",min:"1970-01-1 23:59:59",max:"2099-06-16 23:59:59",istime:!0,istoday:!0})}function k(a){var b=[];for(var c in a)b.push(a[c]);var d=b.sort();for(var e=0;e<b.length;e++)if(d[e]==d[e+1])return!1;return!0}function l(b){var c=a("."+b);c.on("keyup","[data-text-number]",function(){var b=parseInt(a(this).attr("data-text-number")),d=c.find(".data-rel"),e=a(this).val(),f=/[^\x00-\xff]/g;if(w(e)>b){var g=f.test(e)?e.match(f).length:0,h=w(e)-g,i=b+h;a(this).val(e.substr(0,i))}d.html(b-w(e)<.5?0:b-w(e))}).find("[data-text-number]").trigger("keyup")}function m(a){var c=b.confirm("你确定删除吗？",{btn:["删除","取消"]},function(){a.closest(".Z-card-list-box").remove(),b.close(c)})}function n(a){b.open({title:"新增头条",type:2,move:!1,scrollbar:!1,area:["910px","550px"],content:a})}function o(a,d){b.open({title:"暂停公告",type:1,move:!1,btn:["确定"],area:["500px"],content:'            <div class="note-warp event-page-notice ">            <div class="notice-title-wrap">活动详情页公告</div>            <textarea class="pauseText" placeholder="公告内容" name="eventPauseText">抱歉！本产品由于厂家暂时缺货，发货时间待定。我们将在产品到货后继续此试用活动的开奖，给您带来的不便敬请谅解！</textarea>            </div>            <div class="note-warp order-page-notice mt10">            <div class="notice-title-wrap">订单详情页公告</div>            <textarea class="pauseText" placeholder="公告内容" name="orderPauseText">由于厂家暂时缺货，无法马上发货，我们会催促商家快马加鞭为您发货。</textarea>            </div>',yes:function(e,f){var g=f.find("[name=eventPauseText]").val(),h=f.find("[name=orderPauseText]").val();if(g==""||h=="")return b.msg("请填写公告内容"),!1;var i={id:d,pause_event_notice:g,pause_order_notice:h},j=b.msg("处理中",{time:3e3});c.ajax("post",a,i,"json",function(a){b.close(j),b.msg(a.errorMsg||"操作成功"),b.closeAll(),window.location.reload()})}})}function p(c,d){var e=g(),f=b.open({title:"产品列表",type:1,scrollbar:!1,area:["610px","480px"],content:'            <div class="layer-event-link-product-search">                <spa>关键词:</spa>                <input id="key'+e+'" class="Z-input" style="width:200px;">                <spa>产品id:</spa>                <input id="product'+e+'" class="Z-input Z-w-100">                <button id="search-btn'+e+'" type="button" class="Z-btn Z-w-110 Z-right">搜索</button>            </div>            <div id="'+e+'" class="layer-event-link-product-list">				<ul></ul>			</div>',success:function(b,g){var i=b.find("#"+e),j=i.find("ul"),k=!0,l=0,m="";window._getData=function(b){k=!1,a.get(c||"/admin2/search/index",{p:l,size:10,name:a("#key"+e).val(),keyword:a("#key"+e).val(),pid:a("#product"+e).val(),type:"product"},function(a){var a=a.result;m="";for(var c in a)m+='<li>                                <div class="product-pic Z-left">                                    <img style="width:100%;" src="http://s1.jiguo.com/'+a[c].cover+'/230x230">                                </div>                                <div class="product-desc">                                    <div style="height:23px;overflow:hidden;">'+a[c].name+'</div>                                    <div>                                        <a class="blue" href="http://zdm.jiguo.com/admin/product/edit/id/'+a[c].id+'.html" target="_blank">查看</a>                                        <a class="blue" href="javascript:;" data-addLinkProduct data-name="'+h(a[c].name)+'" data-id="'+a[c].id+'" data-wid="'+f+'">关联</a>                                        <span style="float: right;color:grey;">'+a[c].addtime+"</span>                                    </div>                                </div>                            </li>";b?(m==""&&(m='<span class="Z-red">没有数据...</span>'),j.html(m)):j.append(m),a.length?(l++,k=!0):k=!1},"json")},a(".layer-event-link-product-list").on("click","[data-addLinkProduct]",function(){var b=a(this).attr("data-name"),c=a(this).attr("data-id"),e=a(this).attr("data-wid");q(b,c,d,e)}),b.find("#"+e).scroll(function(){if(!(k&&j.height()<i.scrollTop()+i.height()+40))return;window._getData()}),a("#key"+e).keypress(function(){l=0,k=!0,window._getData(!0)}),a("#search-btn"+e).click(function(){l=0,k=!0,window._getData(!0)}),window._getData()}})}function q(e,f,h,i){a("#__addLinkProduct__").html(e+'<input data-goods_id name="goods_id" value="'+f+'" type="hidden">'),c.ajax("get","/admin2/event/getproducturl",{id:f},"json",function(b){var b=b.result;a("[data-addProductLink]").siblings().remove();for(var c in b){var e=g();b[c].id=e,a("[data-addproductlink]").before(d("add-event-link-block-tpl",b[c]))}}),c.ajax("get","/admin2/event/GetProductDetail",{id:f},"json",function(a){h.setContent(a.result)}),i&&b.close(i)}function r(c,e){var f=g();c=c||{},c={url:c.url||"",mall:c.mall||"",price:c.price||"",desc:i(c.desc)||"",id:c.id||g()};var j=b.open({title:"添加购买链接",type:1,btn:["保存"],area:["465px"],content:'            <form id="'+f+'">                <div class="layer-event-add-block-warp">                    <div class="Z-row">                        <span class="Z-name">购买链接：</span><input  value="'+c.url+'" name="url" class="Z-input Z-w-327">                    </div>                    <div class="Z-row">                        <span class="Z-name">来源：</span><input  value="'+c.mall+'" name="mall" class="Z-input Z-w-327">                    </div>                    <div class="Z-row">                        <span class="Z-name">价格：</span><input value="'+c.price+'" name="price" class="Z-input Z-w-327">                    </div>                    <div class="Z-row">                        <span class="Z-name">描述：</span><textarea name="desc" class="Z-input Z-w-327">'+c.desc+"</textarea>                    </div>                </div>            </form>",yes:function(){var g=a("#"+f),i={price:g.find("[name=price]").val().toString().replace(/[^\d\.]/g,""),mall:g.find("[name=mall]").val().toString(),url:g.find("[name=url]").val(),desc:h(g.find("[name=desc]").val()),id:c.id};if(!/^(\d+)|(\d+\.\d+)$/.test(i.price.toString())){b.msg("请填写购买价格");return}if(i.mall==""){b.msg("请填写来源");return}if(i.url==""){b.msg("请填写购买链接");return}e?e.prop("outerHTML",d("add-event-link-block-tpl",i)):a("[data-addproductlink]").before(d("add-event-link-block-tpl",i)),b.close(j)}})}function s(c){b.open({title:"产品规格设置<font style='font-size:14px;font-weight: 500;color: #999'>（规格命名统一标准：规格1+空格+规格2+空格+规格3，（8个字以内）例如：男 白色 M;女 红色 S）</font>",type:1,move:!1,scrollbar:!1,area:["910px","400px"],content:'                   <div class="model-list-wrap">                        <ul class="clearfix">                            <li data-addmodelitem class="add-model-item">+</li>                        </ul>                        <div class="Z-sub-main Z-center" style="padding-top:30px;border: none">                            <button data-sub type="button" class="Z-btn Z-w-100">确定</button>                        </div>                   </div>',success:function(d,e){if(c){var f="";for(var h in c)f+='<li class="modelitem"><input type="text" value="'+c[h]+'" name="'+h+'" placeholder="请填写规格名称"><span data-delmodelitem>x</span></li>';a(d).find("[data-addmodelitem]").before(f)}a(d).on("click","[data-delmodelitem]",function(){a(this).closest("li").remove()}).on("click","[data-addmodelitem]",function(){var b="model["+g()+"]",c='<li class="modelitem"><input type="text" name="'+b+'" placeholder="请填写规格名称"><span data-delmodelitem>x</span></li>';a(this).before(c),a(this).prev().find("input").trigger("focus")}).on("click","[data-sub]",function(){var c={},e="",f=!1;a(d).find(".modelitem input").length<=0&&(f=!0),a(d).find(".modelitem input").each(function(){var b=a(this).val(),d=a(this).prop("name");if(!b||w(b)>8)return f=!0,!1;c[d]=b});if(!k(c)){b.msg("产品规格不能重复");return}if(f){b.msg("请填写正确的产品规格");return}for(var g in c)e+='<li class="Z-gray-btn Z-w-150">'+c[g]+'<input type="hidden" name="'+g+'" value="'+c[g]+'"></li>';a("[data-editmodel]").siblings().remove(),a("[data-editmodel]").before(e),a("[data-addmodel]").hide(),a(".Z-edit-model").show(),b.closeAll(),(a("#formDataAjaxSend").find("#add-event-free-block > .Z-card-list-box:not(.Z-card-list-add)").length>0||a("#formDataAjaxSend").find("#add-event-free-block > .Z-card-list-box:not(.Z-card-list-add)").length>0)&&b.msg("规格改变后需要修改所有玩法的规格库存、押金及价格!")})}})}function t(){var b={};a(".Z-edit-model li:not(.Z-btn)").each(function(){var c=a(this).find("input").prop("name"),d=a(this).text();b[c]=d}),s(b)}function u(b){a("[data-changelogo]").on("click",function(){var d="/admin2/event/changelogo",e=a("[name=brief]").val(),f=a(this).attr("data-changelogo"),g={type:f,content:e};f==3?a("#logo-box").show():c.ajax("post",d,g,"json",function(a){b.setContent(a.result)})}),a(".logo-list-wrap li").on("click",function(){var d="/admin2/event/changelogo",e=a(this).attr("data-id"),f=a("[name=brief]").val(),g={type:3,logo_id:e,content:f};c.ajax("post",d,g,"json",function(c){a("#logo-box").hide(),b.setContent(c.result)})})}function v(){var b,c=!0,d=[],e=[],f=a("#formDataAjaxSend").attr("data-disabled");return a("[name=no_spec]:checked").val()==0?(b=a("#model-list li"),a("#formDataAjaxSend").find("#add-event-pay-block > .Z-card-list-box:not(.Z-card-list-add)").each(function(){d.push(a(this))}),a("#formDataAjaxSend").find("#add-event-free-block > .Z-card-list-box:not(.Z-card-list-add)").each(function(){d.push(a(this))})):(b=a("#model-list li.no_spec"),a("#formDataAjaxSend").find("#add-event-pay-block > .Z-card-list-box:not(.Z-card-list-add)").each(function(){d.push(a(this))})),b.find("[type=hidden]").each(function(){var b=a(this).prop("name");b=b.replace(/model/g,"[model]"),e.push(b)}),a(d).each(function(b,d){var f=a(d).find("[type=hidden]")[0],g=a(f).prop("name"),h=g.indexOf("]"),i=g.substr(0,h+1);a(e).each(function(b,d){if(a("[name='"+i+d+"[buying_num]']").val()==""||a("[name='"+i+d+"[buying_num]']").length<=0)return c=!1,!1})}),c}function w(a){return a==null?0:(typeof a!="string"&&(a+=""),a.replace(/[^\x00-\xff]/g,"01").length/2)}function x(d){if(!y(d))return;f.delModel();var e=a(d).attr("action"),g=a(d).serialize(),h=b.msg("数据提交中...");c.ajax("post",e,g,"json",function(c){var e=a(d).attr("callurl");b.msg(c.message||"提交成功");if(a(d).find("#online_time").val()!=""){var f=a(d).find("#online_time").val(),f=Date.parse(new Date(f)),g=Date.parse(new Date);f>g?e="/admin2/event/PublishTask":e="/admin2/event/EventListOnline"}setTimeout(function(){window.location=e},3e3)})}function y(c){return c=a(c),c.find("#title").val()==""||w(c.find("#title").val())>20?(b.msg("请填写正确的试用名称"),!1):c.find("#Z-image-up-fengmian li").find("[type=hidden]").length<=0?(b.msg("请上传封面图片"),!1):c.find("#Z-image-up-box li").find("[type=hidden]").length<=0?(b.msg("请上传试用图片"),!1):c.find("#intro").val()==""?(b.msg("请填写产品简介"),!1):a("[name=no_spec]:checked").val()==0&&c.find("#model-list li").find("[type=hidden]").length<=0?(b.msg("请填写产品规格"),!1):c.find("#add-event-free-block .Z-card-list-box:not(.Z-card-list-add)").length<=0&&c.find("#add-event-pay-block .Z-card-list-box:not(.Z-card-list-add)").length<=0?(b.msg("请添加试用玩法"),!1):c.find("#__addLinkProduct__").find("input[data-goods_id]").val()==""?(b.msg("请关联产品"),!1):c.find("#brief").html()==""?(b.msg("请填写产品介绍"),!1):c.find("#E-keywords").val()==""?(b.msg("请填写关键词"),!1):c.find("#E-seodesc").val()==""?(b.msg("请填写活动描述"),!1):v()?!0:(b.msg("玩法中有待修改的规格参数"),!1)}return a("body").on("keyup","[data-countText]",function(){var b=a(this).attr("data-countText"),c=a(this).val(),d=a(this).next();b<w(c)?d.show():d.hide()}),{randomID:g,initTime:j,countText:l,delCard:m,addHeadline:n,pauseEvent:o,addLinkEvent:r,getProductListLink:p,addLinkProduct:q,addModel:s,editModel:t,submitEventData:x,html_encode:h,html_decode:i,getLen:w,changeLogo:u}})