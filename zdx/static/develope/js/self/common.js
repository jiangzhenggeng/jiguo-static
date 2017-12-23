/**
 * Created by wuhongshan on 2017/6/2.
 */
define(['jquery', 'layer', 'laydate'], function ($, layer, laydate) {
    // 接口访问
    function ajax(type, url, data, dataType, callback) {
        $.ajax({
            type: type,
            url: url,
            data: data,
            dataType: dataType || 'JSON',
            success: function (replyData) {
                if (replyData.success != 'true') {
                    layer.msg(replyData.errorMsg || '系统错误');
                } else {
                    callback(replyData);
                }
            }
        })
    };
    // 时间初始化
    function layerTime(startId, endId) {
        var startObj = {
            elem: startId || '#start',
            format: 'YYYY-MM-DD hh:mm:ss',
            min: '1970-01-1 23:59:59', //设定最小日期为当前日期
            max: '2099-06-16 23:59:59', //最大日期
            istime: true,
            istoday: false,
            choose: function (datas) {
                endObj.min = datas; //开始日选好后，重置结束日的最小日期
                endObj.start = datas //将结束日的初始值设定为开始日
            },
        };
        var endObj = {
            elem: endId || '#end',
            format: 'YYYY-MM-DD hh:mm:ss',
            min: '1970-01-1 23:59:59',
            max: '2099-06-16 23:59:59',
            istime: true,
            istoday: false,
            choose: function (datas) {
                startObj.max = datas; //结束日选好后，重置开始日的最大日期
            },
        };
        laydate(startObj);
        laydate(endObj);
    };
    // 上线、下线、删除
    function confirm(msg, url, data, callback) {
        var msg = msg || '您确定吗？';
        layer.confirm(msg, {
            bth: ['确定', '取消'],
        }, function () {
            if (!callback) {
                ajax('post', url, data, 'JSON', function () {
                    layer.msg('操作成功', function () {
                        window.location.reload();
                    });
                });
            } else {
                callback();
            }

        });
    };
    function showBox(title, width, height, content, callback) {
        layer.open({
            type: 1,
            title: title,
            scrollbar: true,
            zIndex: 5,
            area: [width, height],
            content: content,
            success: callback
        })
    };
    function openUrl(title, width, height, url) {
        layer.open({
            title: title,
            type: 2,
            move: false,
            scrollbar: false,
            area: [width, height],
            content: url
        })
    }

    //删图
    function removeImage() {
        $('body').on('click', '[data-delete]', function () {
            $(this).parent().remove();
        });
    };
    //传图
    function upload(data, ul, input_name, multiple) {
        var upUrl = 'http://wx.zhidx.com/zhidx/ajax/upload';
        var xhr = new XMLHttpRequest();
        xhr.open('POST', upUrl);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var replyData = JSON.parse(xhr.responseText);
                    if (replyData.success != 'true') {
                        layer.msg(replyData.errorMsg);
                    } else {
                        $('#imgLoading').remove();
                        if (multiple) {
                            var imgHtml = '<li><img src="' + replyData.result.url + '"><span data-delete>x</span><div class="Z-cover-hover">封面</div><input type="hidden" name="' + input_name + '" value="' + replyData.result.fileid + '"></li>';
                            ul.append(imgHtml);
                        } else {
                            var imgHtml = '<li><img src="' + replyData.result.url + '"><span data-delete>x</span><input type="hidden" name="' + input_name + '" value="' + replyData.result.fileid + '"></li>';
                            ul.html(imgHtml);
                        }

                        removeImage();
                    }
                }
            }
        }
    };
    function upImage(dom, input_name, multiple) {
        $('#' + dom + '').find('input').change(function () {
            var fileList = $(this)[0].files;
            if (fileList.length <= 0) {
                return;
            }
            var html = '<li id="imgLoading"><img src="http://cdn.jiguo.com/p1/i/loading-icon.gif" class="img-loading"></li>';
            var ul = $(this).parent().prev();
            if (multiple) {
                ul.append(html);
            } else {
                ul.html(html);
            }
            var data = new FormData();
            data.append('file', fileList[0]);
            upload(data, ul, input_name, multiple);

        })
    };
    //全选反选
    function pass(options) {
        var options = $.extend({
            chooseBtn: '#chooseAll',
            checkboxes: '#left .icon',
            operaBtn: '.Z-content-middle  .joininfo',
            operaAttr: 'data-opera',
            warningAttr: 'data-warning',
        }, options)
        var len = $(options.checkboxes).length;
        var i = 0;
        $(options.chooseBtn).off('change').on('change', function () {
            var dom = $('#left').find('.icon:not([disabled])');
            dom.prop('checked', $(this).is(':checked'));
            if ($(options.chooseBtn).is(':checked')) {
                i = len;
                $(options.operaBtn).removeAttr(options.warningAttr).attr(options.operaAttr, '');
            } else {
                i = 0;
                $(options.operaBtn).removeAttr(options.operaAttr).attr(options.warningAttr, '');
            }
        });
        $('body').off('change').on('change', options.checkboxes, function () {
            var that = this;
            if (!$(that).prop('checked')) {
                i--;
                $(options.chooseBtn).prop('checked', false);
            } else {
                i++;
            }
            if (i == len) {
                $(options.chooseBtn).prop('checked', true);
                $(options.operaBtn).removeAttr(options.warningAttr).attr(options.operaAttr, '');
            }
            if (i >= 1) {
                $(options.operaBtn).removeAttr(options.warningAttr).attr(options.operaAttr, '');
            } else {
                $(options.operaBtn).removeAttr(options.operaAttr).attr(options.warningAttr, '');
            }

        })
    }

    //超出部分变红
    function testLength(dom, length) {
        $(dom).find('.Z-contenteditable').blur(function () {
            var str = $(this).text().trim();
            if (str.length > length) {
                var redStr = str.substring(length);
                var oldStr = str.substring(0, length);
                $(this).html(oldStr + '<span class="Z-red">' + redStr + '</span>');
            }
        });

    }

    //粘贴过滤
    function paste() {
        var content = null;
        if (window.clipboardData && window.clipboardData.getData) { // IE
            content = window.clipboardData.getData('Text');
        } else {
            content = e.originalEvent.clipboardData.getData('Text');//e.clipboardData.getData('text/plain');
        }
        return content;
    }

    //超过限制报红
    function CountWords(targetDom, length) {
        $(targetDom).parent().find('.length').text('');
        var title = $(targetDom).val();
        if (title === undefined) {
            return;
        }
        title = title.trim();
        var l = 0;
        var reg = /[\w\s\d\.]/;
        for (var i = 0; i < title.length; i++) {
            l += reg.test(title[i]) ? 0.5 : 1;
        }
        $(targetDom).parent().find('.length').text(l);
        if (l > length) {
            $(targetDom).parent().find('.length').addClass('Z-red');
        } else {
            $(targetDom).parent().find('.length').removeClass('Z-red');
        }
    }

    function testTitle(targetDom, length) {
        CountWords(targetDom, length);
        $(targetDom).keyup(function () {
            CountWords(targetDom, length);
        });
    }

    //计算长度
    function length(str) {
        var l = 0;
        var reg = /[\w\s\d\.]/;
        for (var i = 0; i < str.length; i++) {
            l += reg.test(str[i]) ? 0.5 : 1;
        }
        return l;
    }

    return {
        ajax: ajax,
        layerTime: layerTime,
        confirm: confirm,
        showBox: showBox,
        openUrl: openUrl,
        upImage: upImage,
        pass: pass,
        testLength: testLength,
        testTitle: testTitle,
        length: length
    }
})