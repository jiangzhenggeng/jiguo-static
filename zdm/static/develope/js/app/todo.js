/**
 * Created by wuhongshan on 2017/4/13.
 */
define(['jquery', 'layer', 'template', 'app/common'], function ($, layer, template, common) {
    function lookHistory(data) {
        var historyList = template('history-list-tpl', data.result);
        var num = data.result.win_num;
        var amount = data.result.win_amount || 0;
        var str = '共中签' + num + '次，中签总金额' + amount + '元';
        common.showBox(str, '800px', '500px', historyList, function () {

        });
    };

    function publish(mid) {
        common.confirm('请确认有充足货源再发布？', '/admin2/work/PublishApply', {mid: mid});
    };

    function publishno(mid) {
        common.confirm('确定发布未中签消息吗？', '/admin2/work/PublishFailedMessage', {mid: mid});
    };

    function addUser(mid) {
        common.ajax('post', '/admin2/work/GetMetaSpec', {meta_id: mid}, 'json', function (replyData) {
            common.showBox('强制添加', '660px', '600px', template('user-list-tpl', replyData.result), function () {

//                    选型号
                $('body').on('click', '#spec .meta-type', function () {
                    $(this).addClass('on').siblings().removeClass('on');
                });
                if (replyData.result.no_spec == 1 && replyData.result.display_spec_remarks != 1) {
                    $('#spec').find('span').trigger('click');
                }
//                    查用户
                $('#authorBtn').on('click', function () {
                    var username = $(this).prev().val().trim();
                    common.ajax('post', '/admin2/ajax/GetUserInfo', {
                        username: username
                    }, 'json', function (data) {
                        $('#userBox').html(template('user-tpl', data));
                    })
                });
                //选用户
                chooseUser();

            });
        });
    }

    function chooseUser() {
        $('body').on('click', '[data-choose-author]', function () {
            if (!$('#spec div').hasClass('on')) {
                layer.msg('请选择型号');
                return false;
            } else {
                var storage_id = $('#spec .on input').val();
            }
            var display_spec_remarks = $('#spec').attr('data-display-spec-remarks');
            var uid = $(this).next().val().trim();
            var data = {
                storage_id: storage_id,
                uid: uid
            };
            if (display_spec_remarks == 1) {
                var spec_remarks = $('#spec .on input').val()
                storage_id = $('#spec [name=storage_id]').val();
                data = {
                    storage_id: storage_id,
                    spec_remarks: spec_remarks,
                    uid: uid
                };
            }
            common.ajax('post', '/admin2/work/EventAddApply', data, 'json', function () {

                layer.closeAll();
                layer.msg('操作成功', function () {
                    window.location.reload();
                })
            })
        })
    }

    function deleteUser(id, dom) {
        layer.confirm('您确定取消吗？', {
            bth: ['确定', '取消'],
        }, function () {
            common.ajax('post', '/admin2/work/RemoveApplyUser', {id: id}, 'json', function () {
                layer.msg('操作成功', function () {
                    window.location.reload();
                })
            })
        });
    };

    function changeDeposit(val, id) {
        layer.prompt({
            title: '请填写押金',
            value: val
        }, function (text, index) {
            var data = {
                deposit: text,
                id: id
            };
            common.ajax('post', '/admin2/work/ChangeDeposit', data, 'json', function () {
                layer.close(index);
                layer.msg('操作成功', function () {
                    window.location.reload();
                })
            });
        })
    };

    //全选反选
    function pass(options) {
        var options = $.extend({
            chooseBtn: '#chooseAll',
            checkboxes: '#todo-list .icon',
            operaBtn: '#operaAll',
            operaAttr: 'data-opera',
            warningAttr: 'data-warning',
        }, options)
        var len = $(options.checkboxes).length;
        var i = 0;
        $(options.chooseBtn).on('change', function () {
            $(options.checkboxes).prop('checked', $(this).is(':checked'));
            if ($(options.chooseBtn).is(':checked')) {
                i = len;
                $(options.operaBtn).removeAttr(options.warningAttr).attr(options.operaAttr, '');
            } else {
                i = 0;
                $(options.operaBtn).removeAttr(options.operaAttr).attr(options.warningAttr, '');
            }
        });
        $('body').on('change', options.checkboxes, function () {
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

    //  加入黑名单
    function addBlackList(uid) {
        var html = template('add-black-list-tpl', {uid: uid});
        layer.open({
            type: 1,
            title: '加入黑名单',
            btn: ['确定', '取消'],
            area: ['600px', '480px'],
            content: html,
            success: function (layero, index) {
                //  弹框成功
                var reason = '', time = '', isOther = false;
                layero.find('#B-reason .icon').click(function () {
                    if ($('[name="data[send_type]"]:checked').val() == 5) {
                        layero.find('.reason-wrapper').show();
                        reason = layero.find('.reason-wrapper textarea').val();
                        isOther = true;
                        getMsg(isOther);
                    } else {
                        layero.find('.reason-wrapper').hide();
                        reason = $(this).parent().text();
                        isOther = false;
                        getMsg(isOther);
                    }

                });
                layero.find('#B-time .icon').click(function () {
                    time = $(this).parent().text();
                    getMsg(isOther);
                });
                layero.find('#B-msg .icon').click(function () {
                    if ($('[name="data[is_send_msg]"]:checked').val() == 1) {
                        layero.find('.msg-box').show();
                    } else {
                        layero.find('.msg-box').hide();
                    }
                });

                function getMsg(isOther) {
                    isOther = isOther;
                    if (!isOther) {
                        var msg = 'hi~ 亲爱的果主，面带悲伤的通知您，您被雪藏了，惩罚时间“' + time + '”。为什么？谁让你违反试用规则“' + reason + '”呢！若有不服，请联系极果工作人，欢迎辩解~（迷人微笑.jpg）';
                    } else {
                        var msg = 'hi~ 亲爱的果主，面带悲伤的通知您，您被雪藏了。为什么？谁让你违反极果平台规则！若有不服，请联系极果工作人，欢迎辩解~（迷人微笑.jpg）';
                    }
                    layero.find('.msg-wrapper').html(msg);
                    layero.find('[name="data[send_msg]"]').val(msg);
                }
            },
            yes: function (index, layero) {
                //  点击确认按钮
                if (!testForm(layero)) return false;
                var data = layero.find('form').serialize();
                var load_id = layer.load();
                $.get('/admin/user/AddBlackList', data, function (replyData) {
                    layer.close(load_id);
                    layer.msg(replyData.errorMsg || '操作成功', {time: 1000}, function () {
                        window.location.reload();
                    })
                }, 'json');
            }
        })
    }

    //   表单提交
    function testForm(layero) {
        if (layero.find('#B-reason .icon:checked').length <= 0) {
            layer.msg('请选择加入黑名单理由');
            return false;
        }
        if (layero.find('#B-reason .icon:checked').val() == 5) {
            if (layero.find('[name="data[other_msg]"]').val() == '') {
                layer.msg('请填写加入黑名单理由');
                return false;
            }
        }
        if (layero.find('#B-time .icon:checked').length <= 0) {
            layer.msg('请选择黑名单时效');
            return false;
        }git
        return true;
    }

    //  取消黑名单
    function cancelBlackList(uid) {
        var html = template('cancel-black-list-tpl', {uid: uid});
        layer.confirm(html, {
            title: '取消黑名单',
            bth: ['确定', '取消'],
            area: ['600px'],
            success: function (layero, index) {
                layero.find('.icon').click(function () {
                    if ($('[name=is_send_msg]:checked').val() == 1) {
                        layero.find('.msg-box').show();
                    } else {
                        layero.find('.msg-box').hide();
                    }
                })
            }
        }, function (index, layero) {
            var data = layero.find('form').serialize();
            var load_id = layer.load();
            $.get('/admin/user/CancelBlackList', data, function (replyData) {
                layer.close(load_id);
                layer.msg(replyData.result || '操作成功', {time: 1000}, function () {
                    window.location.reload();
                })
            }, 'json');
        });
    }

    return {
        lookHistory: lookHistory,
        publish: publish,
        publishno: publishno,
        addUser: addUser,
        deleteUser: deleteUser,
        changeDeposit: changeDeposit,
        pass: pass,
        addBlackList: addBlackList,
        cancelBlackList: cancelBlackList
    }
});