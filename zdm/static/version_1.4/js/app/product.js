define(["jquery","layer","app/common","template"],function(a,b,c,d){function e(b){if(window.writed)return!1;window.writed=!0,a("#link-name").val(b.result.name).focus(),a("#link-price").val(b.result.price);var c="";a.each(b.result.pic,function(a,b){c+='<li><img src="'+b+'">'+"<span data-delete>x</span>"+'<input type="hidden" name="product[pic][]" value="'+b+'">'+'<div class="setting-query-wrap">'+'  <div class="Z-cover-hover" data-id="product-cover">封面</div>'+'  <div class="cropper" data-aspect-ratio="2.0">裁剪</div>'+"</div>"+"</li>"}),a("#link-image").prepend(c),a("#link-image .Z-cover-hover:first").trigger("click"),window.ueditorContentBox&&window.ueditorContentBox.setContent(b.result.detail)}function f(a,d){if(f)return!1;var f=!0;if(a=="")return b.msg("请填写链接地址"),!1;b.msg("抓取中",{time:99999}),c.ajax("post","/admin2/casperjs/index",{url:a},"JSON",function(a){f=!1,b.msg(a.errorMsg),d&&(d.find(".link-mall").val(a.result.mall),d.find(".link-price").val(a.result.price),d.find("[data-has]").attr("checked","true"),e(a))})}function g(a,d){if(e)return!1;var e=!0;if(a=="")return b.msg("请填写链接地址"),!1;var f=b.msg("信息查询中",{time:99999});c.ajax("post","/admin2/casperjs/GetCardUrl",{url:a},"JSON",function(a){e=!1,b.msg(a.errorMsg),d(a)})}function h(b,c,d){b||(b=0),c||(c=0),d||(d=0),i("/admin2/ajax/GetAllProductCategory",{id:0},"category-first","product-category",b,function(){i("/admin2/ajax/GetProductCategory",{parentid:b},"category-second","product-category",c,function(){i("/admin2/ajax/GetProductCategory",{parentid:c},"category-third","product-category",d)})}),a("body").on("change","#category-first",function(){a(this).nextAll().empty().remove();var b=a(this).val();i("/admin2/ajax/GetProductCategory",{parentid:b},"category-second","product-category",c)}),a("body").on("change","#category-second",function(){a(this).nextAll().empty().remove();var b=a(this).val();i("/admin2/ajax/GetProductCategory",{parentid:b},"category-third","product-category",d)})}function i(b,d,e,f,g,h){c.ajax("post",b,d,"json",function(b){var c="";a.each(b.result,function(a,b){g==b.id?c+='<option value="'+b.id+'" selected>'+b.name+"</option>":c+='<option value="'+b.id+'">'+b.name+"</option>"});var d='<select class="Z-w-110 mr20" id="'+e+'" name="product[category]"><option value="-1">选择分类</option>'+c+"</select>";a("#"+f+"").append(d),h&&h()})}function j(b){function e(b){a.get("/admin/product/GetCategoryForKeyord",{str:b},function(b){var c=d("search-category-list-tpl",b);a("#search-category-list").html(c)},"json")}function f(b){a.get("/admin/product/GetCateGoryTree",{id:b},function(b){var c=d("category-list-tpl",b);a("#category-list").html(c)},"json")}a(".hot-category").on("click","span",function(){var b="",c=a(this).data("fname"),d=a(this).data("sname"),e=a(this).text(),g=a(this).data("id");b=c+">"+d+">"+e,a("#P-category-show").val(b),a("#P-category").val(g),f(g)});var c=null;a("#P-search").on("focus",function(){a("#search-category-list").show()}).on("blur",function(){setTimeout(function(){a("#search-category-list").hide()},200)}).on("keyup",function(){var b=a(this).val();clearTimeout(c),c=setTimeout(function(){e(b)},500)}),a("#search-category-list").on("click","li",function(){var b=a(this).data("pid"),c=a(this).find(".category-text").text();a("#P-category-show").val(c),a("#P-category").val(b),a("#search-category-list").hide(),f(b)}),f(b),a(".category-list").on("mouseenter",".first-category li",function(){var b=a(this).data("fid");a(this).addClass("on").siblings().removeClass("on"),a(".second-category-"+b).show().siblings().hide(),a(".third-category").find("div").hide()}),a(".category-list").on("mouseenter",".second-category li",function(){var b=a(this).data("sid");a(this).addClass("on").siblings().removeClass("on"),a(".third-category-"+b).show().siblings().hide()}),a(".category-list").on("click",".third-category li",function(){var b="",c=a(this).data("fname"),d=a(this).data("sname"),e=a(this).text(),f=a(this).data("id");b=c+">"+d+">"+e,a("#P-category-show").val(b),a("#P-category").val(f),a(this).addClass("checked").closest("div").siblings().find(".checked").removeClass("checked")}),a(".category-wrap").on("click",function(){a("#category-list").css({display:"flex"})}).on("mouseleave",function(){var b=a(this).find("#P-category").val();a("#category-list").css({display:"none"}),f(b)})}function k(a,b){c.showBox("相同链接产品","800px","550px",a,b)}function l(a,c){b.open({title:"相同型号产品",btn:["不归入，继续新建"],area:["800px","550px"],content:a,yes:c})}function m(a){c.confirm("不存在相似产品，是否进行新建","","",a)}function n(){a("#product-brand").on("focus",function(){a("#brandList").removeClass("Z-block").html("");var b="";if(a(this).val()!="")return;c.ajax("post","/admin2/ajax/BrandList",b,"json",function(b){a("#brandList").html(d("brand-list-tpl",b.result)).addClass("Z-block")})}).on("paste",function(b){a("#product-brand-id").val(""),a("#brandList").html(""),a(".quick-add-tag").removeClass("Z-block");var e="";window.clipboardData&&window.clipboardData.getData?e=window.clipboardData.getData("Text"):e=b.originalEvent.clipboardData.getData("Text");var f={keyword:e};c.ajax("post","/admin2/ajax/BrandList",f,"json",function(b){b.result.has=="0"?(a(".quick-add-tag").addClass("Z-block"),a("#brandList").html(d("brand-list-tpl",b.result)).addClass("Z-block")):a("#brandList").html(d("brand-list-tpl",b.result)).addClass("Z-block")})}).on("keyup",function(b){var e=b.which||b.keycode;if(e!=38&&e!=40){a("#product-brand-id").val(""),a("#brandList").html(""),a(".quick-add-tag").removeClass("Z-block");var f=a("#product-brand").val(),g={keyword:f};c.ajax("post","/admin2/ajax/BrandList",g,"json",function(b){b.result.has=="0"?(a(".quick-add-tag").addClass("Z-block"),a("#brandList").html(d("brand-list-tpl",b.result)).addClass("Z-block")):a("#brandList").html(d("brand-list-tpl",b.result)).addClass("Z-block")})}}).on("blur",function(){setTimeout(function(){a("#brandList").removeClass("Z-block")},500)}).on("keydown",function(b){var c=b.which||b.keycode,d=a("#brandList").find("li"),e;d.each(function(b){a(this).hasClass("on")&&(e=a(this))}),c==38&&(e?e.text()==d.first().text()?(e.removeClass("on"),e=d.last(),e.addClass("on")):(e.removeClass("on"),e=e.prev(),e.addClass("on")):(e=d.last(),e.addClass("on"))),c==40&&(e?e.text()==d.last().text()?(e.removeClass("on"),e=d.first(),e.addClass("on")):(e.removeClass("on"),e=e.next(),e.addClass("on")):(e=d.first(),e.addClass("on")));if(c==13){if(e){var f=a(e).attr("data-name"),g=a(e).attr("data-value");a("#product-brand").val(f).focus(),a("#product-brand-id").val(g)}else a(".quick-add-tag").addClass("Z-block");a("#brandList").trigger("blur")}}),a("body").on("click",".brand-item",function(b){b.preventDefault();var c=a(this).attr("data-name"),d=a(this).attr("data-value");a("#product-brand").val(c).focus(),a("#product-brand-id").val(d),a(".quick-add-tag").removeClass("Z-block"),a("#brandList").trigger("blur")}),a("#brandList").on("blur",function(){a("#brandList").removeClass("Z-block")})}function o(){return a("#Z-link-wrapper").find(".link-url").length<=0?(b.msg("请添加购买链接"),!1):a(".link-url").val().toString().trim().length<=0?(a(".link-url").focus(),b.msg("请填写购买链接"),!1):a("#link-name").val().toString().trim().length<=0?(b.msg("请输入产品名称"),a("#link-name").focus(),!1):a("#link-image").find("li").length<=0?(b.msg("请上传产品图片"),a(".Z-image-up-input").focus(),!1):a("P-category").val()==""?(b.msg("请选择分类"),!1):a("#product-brand").val().toString().trim().length<=0?(b.msg("请输入产品品牌"),a("#product-brand").focus(),!1):a("#product-model").val().toString().trim().length<=0?(b.msg("请输入产品型号"),a("#product-model").focus(),!1):!0}function p(d){if(!o())return;b.msg("正在提交");var e=a("#formDataAjaxSend").serialize();c.ajax("post",d,e,"json",function(){b.msg("操作成功",function(){window.location="/admin2/product/down"})})}return{getProduct:f,categoryInit:h,showProductByUrl:k,showProductByModel:l,newProduct:m,findProduct:g,chooseBrand:n,submit:p,initCategory:j}})