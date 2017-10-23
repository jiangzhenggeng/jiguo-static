/**
 * Created by wuhongshan on 2017/4/10.
 */
define(['jquery', 'layer', 'app/common', 'template', 'app/createUE'], function ($, layer, common, template, UE) {
//产品信息赋值
    function writeProduct(data) {
        if (window.writed) return false;
        window.writed = true;
        $('#link-name').val(data.result.name).focus();
        $('#link-price').val(data.result.price);
        var html = '';
        $.each(data.result.pic, function (key, value) {
            html += '<li>' +
              '<img src="' + value + '">' +
              '<span data-delete>x</span>' +
              '<input type="hidden" name="product[pic][]" value="' + value + '">' +
							'<div class="setting-query-wrap">' +
              '  <div class="Z-cover-hover" data-id="product-cover">封面</div>' +
              '  <div class="cropper" data-aspect-ratio="2.0">裁剪</div>' +
              '</div>' +
              '</li>';
        });
        $('#link-image').prepend(html);
        $('#link-image .Z-cover-hover:first').trigger('click');
        UE.setContent('Z-desciption',data.result.detail);
    };
//抓取按钮
    function getProduct(url, dom) {
        if (isSending) {
            return false;
        }
        var isSending = true;
        if (url == '') {
            layer.msg('请填写链接地址');
            return false;
        }
        layer.msg('抓取中', {time: 99999});
        common.ajax('post', '/admin2/casperjs/index', {
            url: url
        }, 'JSON', function (replyData) {
            isSending = false;
            layer.msg(replyData.errorMsg);
            if (dom) {
                dom.find('.link-mall').val(replyData.result.mall);
                dom.find('.link-price').val(replyData.result.price);
                dom.find('[data-has]').attr('checked', 'true');
                writeProduct(replyData);
            }
        })
    };
    //查询
    function findProduct(url, callback) {
        if (isFinding) {
            return false;
        }
        var isFinding = true;
        if (url == '') {
            layer.msg('请填写链接地址');
            return false;
        }
        var l=layer.msg('信息查询中', {time: 99999});
        common.ajax('post', '/admin2/casperjs/GetCardUrl', {
            url: url
        }, 'JSON', function (replyData) {
            isFinding = false;
            layer.msg(replyData.errorMsg);
            callback(replyData);
        })
    }

//产品分类
    function categoryInit(one, second, third) {
        if (!one) {
            one = 0;
        }
        if (!second) {
            second = 0;
        }
        if (!third) {
            third = 0;
        }
        //初始化
        category('/admin2/ajax/GetAllProductCategory', {id: 0}, 'category-first', 'product-category', one, function () {
            category('/admin2/ajax/GetProductCategory', {'parentid': one}, 'category-second', 'product-category', second, function () {
                category('/admin2/ajax/GetProductCategory', {'parentid': second}, 'category-third', 'product-category', third);
            });
        });

        //二级分类
        $('body').on('change', '#category-first', function () {

            $(this).nextAll().empty().remove();
            var parentid = $(this).val();
            category('/admin2/ajax/GetProductCategory', {'parentid': parentid}, 'category-second', 'product-category', second);
        });
        //三级分类
        $('body').on('change', '#category-second', function () {
            $(this).nextAll().empty().remove();
            var parentid = $(this).val();
            category('/admin2/ajax/GetProductCategory', {'parentid': parentid}, 'category-third', 'product-category', third);
        });
    };

    function category(url, data, id, dom, valueid, callback) {
        common.ajax('post', url, data, 'json', function (replyData) {
            var htmlOption = '';
            $.each(replyData.result, function (key, val) {
                if (valueid == val.id) {
                    htmlOption += '<option value="' + val.id + '" selected>' + val.name + '</option>';
                } else {
                    htmlOption += '<option value="' + val.id + '">' + val.name + '</option>';
                }
            });
            var html = '<select class="Z-w-110 mr20" id="' + id + '" name="product[category]"><option value="-1">选择分类</option>' + htmlOption + '</select>';
            $('#' + dom + '').append(html);
            if (callback) {
                callback();
            }
        });

    };

//初始化产品分类

    function initCategory(id) {
        //热门分类
        $('.hot-category').on('click','span',function () {
            var txt = '',
                fname = $(this).data('fname'),
                sname = $(this).data('sname'),
                name = $(this).text(),
                id = $(this).data('id');
            txt = fname + '>' + sname + '>' + name;
            $('#P-category-show').val(txt);
            $('#P-category').val(id);
            getAllCategory(id);
        });

        //产品分类搜索
        var timer = null;
        $('#P-search').on('focus',function () {
            $('#search-category-list').show();
        }).on('blur',function () {
            setTimeout(function () {
                $('#search-category-list').hide();
            },200)
        }).on('keyup',function () {
            var val = $(this).val();
            clearTimeout(timer);
            timer = setTimeout(function () {
                getCategory(val);
            },500);
        });

        function getCategory(val) {
            $.get('/admin/product/GetCategoryForKeyord',{str:val},function (replayData) {
                var html = template('search-category-list-tpl',replayData);
                $('#search-category-list').html(html);
            },'json');
        }

        $('#search-category-list').on('click','li',function () {
            var id = $(this).data('pid'),
                text = $(this).find('.category-text').text();
            $('#P-category-show').val(text);
            $('#P-category').val(id);
            $('#search-category-list').hide();
            getAllCategory(id);
        });

        //所有分类
        function getAllCategory(id) {
            $.get('/admin/product/GetCateGoryTree',{id:id},function (replayData) {
                var html = template('category-list-tpl',replayData);
                $('#category-list').html(html);
            },'json');
        }

        getAllCategory(id);

        $('.category-list').on('mouseenter','.first-category li',function () {
            var fid = $(this).data('fid');
            $(this).addClass('on').siblings().removeClass('on');
            $('.second-category-'+fid).show().siblings().hide();
            $('.third-category').find('div').hide();
        });
        $('.category-list').on('mouseenter','.second-category li',function () {
            var sid = $(this).data('sid');
            $(this).addClass('on').siblings().removeClass('on');
            $('.third-category-'+sid).show().siblings().hide();
        });

        $('.category-list').on('click','.third-category li',function () {
            var txt = '',
                fname = $(this).data('fname'),
                sname = $(this).data('sname'),
                name = $(this).text(),
                id = $(this).data('id');
            txt = fname + '>' + sname + '>' + name;
            $('#P-category-show').val(txt);
            $('#P-category').val(id);
            $(this).addClass('checked').closest('div').siblings().find('.checked').removeClass('checked');
        });

        //全部分类显示/隐藏
        $('.category-wrap').on('click',function () {
            $('#category-list').css({display:'flex'});
        }).on('mouseleave',function () {
            var id = $(this).find('#P-category').val();
            $('#category-list').css({display:'none'});
            getAllCategory(id);
        });
    }

//展示相同链接产品
    function showProductByUrl(content, callback) {
        common.showBox('相同链接产品', '800px', '550px', content, callback)
    };
//展示相同型号产品
    function showProductByModel(content, callback) {
        layer.open({
            title: '相同型号产品',
            btn: ['不归入，继续新建'],
            area: ['800px', '550px'],
            content: content,
            yes: callback
        })
    }

//新建产品
    function newProduct(callback) {
        common.confirm('不存在相似产品，是否进行新建', '', '', callback)
    };
//品牌
    function chooseBrand() {
        $('#product-brand').on('focus', function () {
            $('#brandList').removeClass('Z-block').html('');
            var data = '';
            if ($(this).val() != '') return;
            common.ajax('post', '/admin2/ajax/BrandList', data, 'json', function (replyData) {
                $('#brandList').html(template('brand-list-tpl', replyData.result)).addClass('Z-block');
            });
        }).on('paste', function (e) {
            $('#product-brand-id').val('');
            $('#brandList').html('');
            $('.quick-add-tag').removeClass('Z-block');
            var keyword = '';
            if (window.clipboardData && window.clipboardData.getData) { // IE
                keyword = window.clipboardData.getData('Text');
            } else {
                keyword = e.originalEvent.clipboardData.getData('Text');//e.clipboardData.getData('text/plain');
            }
            var data = {
                keyword: keyword
            };
            common.ajax('post', '/admin2/ajax/BrandList', data, 'json', function (replyData1) {
                if (replyData1.result.has == '0') {
                    $('.quick-add-tag').addClass('Z-block');
                    $('#brandList').html(template('brand-list-tpl', replyData1.result)).addClass('Z-block');
                } else {
                    $('#brandList').html(template('brand-list-tpl', replyData1.result)).addClass('Z-block');
                }
            });
        }).on('keyup', function (e) {
            var keycode = e.which || e.keycode;

            if (keycode != 38 && keycode != 40) {
                $('#product-brand-id').val('');
                $('#brandList').html('');
                $('.quick-add-tag').removeClass('Z-block');
                var keyword = $('#product-brand').val();
                var data = {
                    keyword: keyword
                };
                common.ajax('post', '/admin2/ajax/BrandList', data, 'json', function (replyData1) {
                    if (replyData1.result.has == '0') {
                        $('.quick-add-tag').addClass('Z-block');
                        $('#brandList').html(template('brand-list-tpl', replyData1.result)).addClass('Z-block');
                    } else {
                        $('#brandList').html(template('brand-list-tpl', replyData1.result)).addClass('Z-block');
                    }
                });
            }
        }).on('blur', function () {
            setTimeout(function () {
                $('#brandList').removeClass('Z-block');
            }, 500);
        }).on('keydown', function (e) {
            var keycode = e.which || e.keycode;
            var lis = $('#brandList').find('li');
            var liOn;
            lis.each(function (index) {
                if ($(this).hasClass('on')) {
                    liOn = $(this);
                }
            });

            //上键
            if (keycode == 38) {
                if (!liOn) {
                    liOn = lis.last();
                    liOn.addClass('on');
                } else if (liOn.text() == lis.first().text()) {
                    liOn.removeClass('on');
                    liOn = lis.last();
                    liOn.addClass('on');
                } else {
                    liOn.removeClass('on');
                    liOn = liOn.prev();
                    liOn.addClass('on');
                }
            }

            //下键
            if (keycode == 40) {
                if (!liOn) {
                    liOn = lis.first();
                    liOn.addClass('on');
                } else if (liOn.text() == lis.last().text()) {
                    liOn.removeClass('on');
                    liOn = lis.first();
                    liOn.addClass('on');
                } else {
                    liOn.removeClass('on');
                    liOn = liOn.next();
                    liOn.addClass('on');
                }
            }
            // enter
            if (keycode == 13) {
                if (liOn) {
                    var name = $(liOn).attr('data-name');
                    var value = $(liOn).attr('data-value');
                    $('#product-brand').val(name).focus();
                    $('#product-brand-id').val(value);
                } else {
                    $('.quick-add-tag').addClass('Z-block');
                }
                $('#brandList').trigger('blur');
            }
        });
        $('body').on('click', '.brand-item', function (e) {
            e.preventDefault();
            var name = $(this).attr('data-name');
            var value = $(this).attr('data-value');
            $('#product-brand').val(name).focus();
            $('#product-brand-id').val(value);
            $('.quick-add-tag').removeClass('Z-block');
            $('#brandList').trigger('blur');
        });
        $('#brandList').on('blur', function () {
            $('#brandList').removeClass('Z-block');
        });
    };
//验证
    function ajaxTest() {
        if ($('#Z-link-wrapper').find('.link-url').length <= 0) {
            layer.msg('请添加购买链接');
            return false;
        } else {
            if ($('.link-url').val().toString().trim().length <= 0) {
                $('.link-url').focus();
                layer.msg('请填写购买链接');
                return false;
            }
        }
        if ($('#link-name').val().toString().trim().length <= 0) {
            layer.msg('请输入产品名称');
            $('#link-name').focus();
            return false;
        }
        if ($('#link-image').find('li').length <= 0) {
            layer.msg('请上传产品图片');
            $('.Z-image-up-input').focus();
            return false;
        }

        if ($('P-category').val()=='') {
            layer.msg('请选择分类');
            return false;
        }
        if ($('#product-brand').val().toString().trim().length <= 0) {
            layer.msg('请输入产品品牌');
            $('#product-brand').focus();
            return false;
        }
        if ($('#product-model').val().toString().trim().length <= 0) {
            layer.msg('请输入产品型号');
            $('#product-model').focus();
            return false;
        }

        return true;
    };
//提交
    function submit(url) {
        if (!ajaxTest()) return;
        layer.msg('正在提交');
        var data = $('#formDataAjaxSend').serialize();
        common.ajax('post', url, data, 'json', function () {
            layer.msg('操作成功', function () {
                window.location = '/admin2/product/down';
            });
        })
    };

    return {
        getProduct: getProduct,
        categoryInit: categoryInit,
        showProductByUrl: showProductByUrl,
        showProductByModel: showProductByModel,
        newProduct: newProduct,
        findProduct: findProduct,
        chooseBrand: chooseBrand,
        submit: submit,
        initCategory:initCategory
    };

})
