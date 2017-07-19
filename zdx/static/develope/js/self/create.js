/**
 * Created by wuhongshan on 2017/6/3.
 */
define(['jquery', 'layer', 'self/common', 'template','self/drag'], function ($, layer, common, template,drag) {
    // 验证
    function test() {
        var title = $('#xcxTitle');
        var title1 = $('#xcxTitle1');
        var title2 = $('#xcxTitle2');
        var title3 = $('#xcxTitle3');
        var num = $('#num');



        if (common.length(title.val().trim()) <= 0 || common.length(title.val().trim()) > 38) {
            title.focus();
            layer.msg('小程序标题请介于1-38字');
            return false;
        }
        if (common.length(title1.val().trim()) <= 0 || common.length(title1.val().trim()) > 32) {
            title1.focus();
            layer.msg('主标题请介于1-32字');
            return false;
        }
        if (common.length(title2.val().trim()) <= 0 || common.length(title2.val().trim()).length > 32) {
            title2.focus();
            layer.msg('副标题请介于1-32字');
            return false;
        }
        if (common.length(title3.val().trim()) <= 0 || common.length(title3.val().trim()) > 32) {
            title2.focus();
            layer.msg('PC标题请介于1-32字');
            return false;
        }
        if (num.val().trim().length <= 0) {
            layer.msg('请填写期数');
            num.focus();
            return false;
        }
        return true;
    }

    // 左边展示
    function showLeft(id, callback) {

        $.get('/zhidx/content/list', {classid: id}, function (replyData) {
            if (replyData.success = 'true') {
                for (var q = 0; q < replyData.result.length; q++) {
                    if ($.inArray(parseInt(replyData.result[q].id), window.sendIdArray) < 0) {
                        replyData.result[q].show = true;
                    } else {
                        replyData.result[q].show = false;
                    }
                }
                $('#left-list').html(template('left-list-tpl', replyData));
                $('#selectTitle').val(id);
                if (callback) {
                    callback();
                }
                common.pass();
            } else {
                layer.msg('参数错误');
            }

        }, 'json');
    }

    // 加入右边
    function showRight(option) {
        var options = $.extend({
            parentDom: '#right',
            parentItemDom: '.right-item',
            data: null
        }, option);
        if ($.inArray(parseInt(options.data.classId), window.sendSourceArray) < 0) {
            $(options.parentDom).append(template('right-list-tpl', {data: options.data}));
            window.sendSourceArray.push(parseInt(options.data.classId));
            for (var x = 0; x < options.data.result.length; x++) {
                window.sendIdArray.push(parseInt(options.data.result[x].id));
            }
        } else {
            var num = null;
            $.each(window.sendSourceArray, function (k, v) {
                if (options.data.classId == v) {
                    num = k;
                }
                return num;
            });
            $($(options.parentItemDom)[num]).append(template('right-list-item-tpl', {data: options.data}));
            for (var x = 0; x < options.data.result.length; x++) {
                window.sendIdArray.push(parseInt(options.data.result[x].id));
            }
        }
    }

    function init() {
        //展示左边列表
        var classid = $('#selectTitle').val();
        showLeft(classid);
        // 获取class分类
        window.category = [];
        $('#selectTitle option').each(function (i, v) {
            var classid = $(this).val();
            var classname = $(this).text();
            window.category.push({
                classid: classid,
                classname: classname,
            })
        });
        //左侧刷新
        $('#refresh').click(function () {
            showLeft($('#selectTitle').val(), function () {
                $('.joininfo').removeAttr('data-opera').attr('data-warning', '');
                $('#chooseAll').prop('checked',false);
                layer.msg('刷新成功');
            });
        });
        // 选择class
        $('#selectTitle').on('change', function () {
            showLeft($(this).val(), function () {
                $('.joininfo').removeAttr('data-opera').attr('data-warning', '');
            });
        });
        // 加早报
        $('body').on('click', '[data-warning]', function () {
            common.confirm('你还没有选中内容', '', '', function () {
                layer.closeAll();
            });
        });
        $('body').on('click', '[data-opera]', function () {

            var result = [];
            var className = $('#selectTitle').find('option:selected').text();
            var classId = $('#selectTitle').val();

            $('#left-list .icon:checked').each(function (k, v) {
                var parent = $(this).parent().parent();
                var classid = parent.data('parentid');
                var id = parent.data('id');
                var title = parent.data('title');
                result[k] = {
                    classid: classid,
                    id: id,
                    title: title
                };
                $(this).attr('disabled', true);
            });
            layer.closeAll();
            showRight({
                data: {
                    result: result,
                    className: className,
                    classId: classId
                }
            });
            $('.icon').prop('checked', false);
        });

        // 右侧删除
        $('body').on('click', '.Z-delete', function () {
            var id = $(this).next('input').val();
            var liDom=$(this).parent();
            var liDoms=liDom.parent().find('.drag-dom');
            var classid = liDom.siblings('input').val();
            window.sendIdArray = window.sendIdArray.filter(function (v) {
                return v != id;
            });
            if(liDoms.length<=1){
                var parent=liDom.parent().parent();
                parent.remove();
                window.sendSourceArray = window.sendSourceArray.filter(function (val) {
                    return val != classid;
                });
            }else{
                liDom.remove();
            }
            showLeft(classid);

        });
        // 公布
        $('#publish').on('click', function () {
            if (!test()) return false;
            var data = $('#creatForm').serialize();
            common.ajax('post', '/zhidx/content/push', data, 'json', function () {
                layer.msg('操作成功', function () {
                    window.location = '/zhidx/article/down';
                });
            });
        });
    };
    return {
        init: init,
        showLeft: showLeft,
        showRight: showRight
    }
})