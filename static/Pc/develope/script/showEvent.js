/**
 +----------------------------------------------------------
 //首页优化文件
 +----------------------------------------------------------
 */

define([
    'require',
    'global.fun',
    'app/common',
    'app/hotEvent',
    'layer',
    'app/unitTool',
    'app/tplEngine',
    'app/countdown',
    'cookie',
], function (require, global, common, hotEvent, layer, unitTool, tplEngine, countdown, _) {

    function _init() {
        //试用,鼠标放在卡片上出现特效
        hotEvent.init();

        //ajax加载数据
        var dom = $('#eventAjaxLoad');
        var changeDom = $('#change-type');
        var a = changeDom.find('a');
        a.click('click', function () {
            changeDom.find('.on').removeClass('on');
            $(this).parent().addClass('on');
            dom.html('');
            $('.loading-more-warp').hide();
            $('.click-loading').show();

            hotEvent.ajaxLoad({
                url: '/api/event/EventList',
                boxDom: dom,
                data: {
                    type: type,
                    act: $(this).attr('data-type')
                }
            });
        }).first().trigger('click');
    }

    return {
        listAll: _init,
        show: function () {
            //试用,鼠标放在卡片上出现特效
            hotEvent.init();
            //ajax加载热门试用数据
            new hotEvent.ajaxLoad({
                url: '/api/event/HotEvent',
                boxDom: $('#eventHotAjaxLoad'),
                tplDom: $('#loading-data-list-tpl'),
                firWarp: 'no',
                data: {
                    id: eventid
                },
                size: 4,
            });
        },
        applyUser: function () {
            //点击展开按钮
            $('#event-apply-user-list').on('click', 'p.open-btn', function () {
                var p = $(this).parent().parent();
                p.find('.show-open-part').hide();
                p.find('.show-open-all').show();
            });
        },
        clickApply: function () {
            //弹出用户申请框
            layer.ready();
            var flag = false;
            $('body').on('click', '[data-event-apply-input-box]', function (e) {
                e.preventDefault();
                var _this = this;
                if ((typeof popularize == 'undefined') && !window.URL['login']) {
                    common.login();
                    return;
                }
                if ($(_this).attr('data-alert')) {
                    return;
                }
                if (flag) return;//防止多次点击
                flag = true;
                //获取用户手机号
                $.post('/api/user/GetUserTel', {}, function (rd) {
                    var meta_id = $(_this).closest('[data-metaid]').attr('data-metaid'),
                        applydata = {mobile: rd.result};
                    //加载型号信息
                    $.post('/api/event/GetStorageList', {meta_id: meta_id}, function (replayData) {
                        var o = '',
                            id = K.randomId(),
                            html = $('#event-apply-input-tpl').html(),
                            remark = $(_this).attr('data-remark'),
                            is_remarks = $(_this).attr('data-is_remarks');
                        applydata.remark = remark;
                        applydata.data = replayData.result;

                        var lId = layer.open({
                            type: 1,
                            title: false,
                            closeBtn: 0,
                            shadeClose: false,
                            area: ['510px'],
                            content: '<div id="' + id + '">' + tplEngine.init(html, applydata) + '</div>',
                            success: function (layero, index) {
                                var Obj = $(layero).find('#apply-event-form-data');
                                var subFlag = false;
                                flag = false;
                                setTimeout(function () {
                                    $(layero).find('.apply-input-close').attr('onClick', 'layer.close(\'' + lId + '\')');
                                });
                                //选择型号
                                $(layero).find('.apply-model-wrap').on('click', 'li:not(.disabled-btn)', function () {
                                    if (!$(this).hasClass('checked')) {
                                        var storageid = $(this).find('span').attr('data-storageid');
                                        var no_spec = $(this).closest('.apply-model-list').attr('data-no_spec');
                                        if (no_spec == 1) {
                                            var html = '<input name="spec_remarks" value="' + storageid + '" type="hidden">';
                                        } else {
                                            var html = '<input name="storage_id" value="' + storageid + '" type="hidden">';
                                        }
                                        $(this).addClass('checked').siblings().removeClass('checked');
                                        $(this).append(html).siblings().find('input').remove();
                                    }
                                });
                                //只有一个可选型号
                                if ($(layero).find('.apply-model-btn:not(.disabled-btn)').length <= 1) {
                                    $(layero).find('.apply-model-btn:not(.disabled-btn)').trigger('click');
                                }

                                $(layero).find('.btn').click(function () {
                                    if (Obj.find('.apply-model-btn').length > 0) {
                                        if (Obj.find('.apply-model-btn.checked').length == 0) {
                                            layer.msg('请选择产品型号');
                                            return;
                                        }
                                    }
                                    if (Obj.find('[name=comment]').val() == '') {
                                        layer.msg('请填写申请理由');
                                        return;
                                    }
                                    if (Obj.find('input[name=tel]').val().length != 11) {
                                        layer.msg('请填写正确的手机号码');
                                        return;
                                    }
                                    if((is_remarks==1) && (Obj.find('[name=remark]').val() == '')){
                                        layer.msg('请填写备注信息');
                                        return;
                                    }
                                    if(Obj.find('[name=remark]').val().length>30){
                                        layer.msg('备注信息不能超过30个字');
                                        return;
                                    }
                                    if (Obj.find('input[name=username]').length && Obj.find('input[name=username]').val() == '') {
                                        layer.msg('请填写用户名');
                                        return;
                                    }
                                    if (!Obj.find('#agreement').prop('checked')) {
                                        layer.msg('未勾选同意用户协议');
                                        return;
                                    }
                                    if (subFlag) return;
                                    subFlag = true;
                                    var applyUrlAPI = window.applyUrlAPI ? window.applyUrlAPI : '/api/event/Apply';
                                    var applyStatus = Obj.find('input[name=status]');
                                    var formData = Obj.serialize();
                                    if (!applyStatus.is(":checked")) {
                                        formData += "&status=-1";
                                    }
                                    $.post(applyUrlAPI, formData, function (replayData) {
                                        subFlag = false;
                                        if (replayData.resultCode == 0) {
                                            var opt = {
                                                title: '申请成功!',
                                                desc: '扫码关注极果试用服务号，我们将在试用名单审<br>核公布后，第一时间给您的微信下发通知！',
                                                callback: function () {
                                                    layer.closeAll();
                                                    window.location.reload();
                                                }
                                            };
                                            layer.close(lId);
                                            common.layerWx(opt);
                                        } else {
                                            layer.msg(replayData.errorMsg);
                                        }
                                    }, 'json');
                                });

                            }
                            , end: function () {

                            }
                        });

                    }, 'json');
                }, 'json');

            });
        },
        //请求右侧卡片数据
        requestCardData: function () {
            var cachrFun = tplEngine.init($('#event-buy-right-card-tpl').html());

            $.get('/api/event/EventSide', {
                id: eventid
            }, function (replayData) {
                if (unitTool.getLength(replayData.result)) {
                    var html = cachrFun({data: replayData.result});
                    $('.event-buy-right-card').html(html);

                    var countdownObj = $('[data-countdown]');
                    if (countdownObj.length) {
                        countdownObj.each(function () {
                            if ($(this).attr('data-unq')) {
                                //开抢倒计时
                                if ($(this).attr('data-countdown') > 0) {
                                    var tBox = $(this).closest('.card-time');
                                    var h = $('#' + $(this).attr('data-unq'));
                                    var is_reserve = (h.attr('data-reserve') !== undefined);//可以预约
                                    var reserved = h.hasClass('c-green');//已预约
                                    var appVip = (h.attr('data-appvip') !== undefined);//app专享且可预约
                                    if (!is_reserve && !reserved) {
                                        h.addClass('gray');
                                    }
                                    h.attr('_href', h.attr('href')).attr('href', 'javascript:;').attr('target', '_self');
                                }
                                countdown.run({
                                    intDiff: $(this).attr('data-countdown'),
                                    overTime: $(this).attr('data-reservetime'),
                                    dom: $(this),
                                    callback: function () {
                                        //倒计时结束开放购买
                                        if (appVip) {
                                            //app专享的放出二维码
                                            var parent_wrap = h.parent();
                                            parent_wrap.hide();
                                            parent_wrap.next().show();
                                        } else {
                                            //非app专享的直接放出购买地址
                                            if (!is_reserve && !reserved) {
                                                h.removeClass('gray').addClass('red');
                                            } else if (reserved) {
                                                h.removeClass('c-green').addClass('red');
                                            }
                                            h.attr('href', h.attr('_href')).attr('target', '_blank').html('立即试用');
                                        }
                                        tBox.remove();
                                    },
                                    overCallBack: function () {
                                        location.reload();
                                    }
                                });
                            } else {
                                //支付倒计时
                                countdown.run({
                                    intDiff: $(this).attr('data-countdown'),
                                    dom: $(this),
                                    isglobal: true,
                                    callback: function () {
                                        window.location.reload();
                                    }
                                });
                            }
                        });
                    }
                } else {
                    //window.location.reload();
                }
                //微店二维码购买交互
                $('.event-buy-right-card').on('mouseenter', '[data-show-intro]', function () {
                    $(this).find('.intro.alert-show').show();
                }).on('mouseleave', '[data-show-intro]', function () {
                    $(this).find('.intro.alert-show').hide();
                }).find('[data-show-intro]').click(function () {
                    layer.ready(function () {
                        layer.msg('请在手机上扫码申请');
                    });
                });
            }, 'json');
        }
        //请求顶部焦点图数据
        , requestBannerData: function () {
            $.get('/api/event/IndexEventBanner', {
                id: eventid
            }, function (replayData) {
                if (unitTool.getLength(replayData.result)) {
                    var box = $('.event-banner-get-data');
                    if (replayData.result.residueTime) {
                        box.find('.event-banner-get-time').html('申请截止: ' + replayData.result.residueTime);
                    } else {
                        box.find('.event-banner-get-time').html('&nbsp;');
                    }
                    box.find('.btn').attr('class', 'btn ' + replayData.result.status)
                        .html(replayData.result.buying_status);
                    //'data-event-apply-input-box'
                    if (('isapply' in replayData.result) && replayData.result.isapply) {
                        box.find('.btn').attr(replayData.result.isapply, '');
                    }
                    if (('url' in replayData.result) && replayData.result.url) {
                        box.find('.btn').attr('href', replayData.result.url);
                    }
                    box.fadeIn(500);
                } else {
                    //window.location.reload();
                }
            }, 'json');
        }
        //获取试用名单
        , getEventUserList: function () {
            var userListWrap = $('.autor-list-wrap');
            $.get('/api/event/Roster', {
                id: eventid
            }, function (replayData) {
                if (replayData.result.num > 0) {
                    var html = tplEngine.init($('#use-apply-list-tpl').html(), {data: replayData.result.meta_list});
                    $('#use-apply-list').html(html);
                    setTimeout(function () {
                        if (userListWrap.height() > 230) {
                            $('#use-apply-list').addClass('hidden-list');
                            $('.look-all-wrap').show();
                        }
                    });
                    $('.event-user-list-warp').fadeIn(250);
                }
            }, 'json');
            $('.look-more').click(function () {
                $(this).hide();
                $('.pack-up').show();
                userListWrap.removeClass('hidden-list');
            });
            $('.pack-up').click(function () {
                $(this).hide();
                $('.look-more').show();
                userListWrap.addClass('hidden-list');
            });
        }
        //加载体验报告
        , getEventBlogList: function (limit) {
            new hotEvent.ajaxLoad({
                url: '/api/event/EventLinkBlog',
                boxDom: $('#blogAjaxLoad'),
                tplDom: '#event-load-blog-tpl',
                firWarp: '.event-blog-list',
                limit: limit,
                triggerType: 'click',
                dataChange: function (data, options) {
                    data.result = data.result.blog;
                    return data;
                },
                size: 3,
                data: {
                    id: eventid
                }
            });
        }
        //试用细则弹窗
        , getEventIntro: function () {
            $('body').on('click', '[data-metaintro]', function () {
                var metaId = $(this).closest('[data-metaid]').attr('data-metaid');
                var layerId = layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 0,
                    scrollbar: false,
                    shadeClose: false,
                    area: ['510px', '550px'],
                    content: '\
                    <div class="event-apply-input-box">\
                        <div class="apply-input-header mb10">\
                            <h3>试用细则</h3>\
                            <div class="apply-input-close icon" data-closelayer></div>\
                        </div>\
                        <div class="event-intro-wrap ft14 pdt5"></div>\
                     </div>',
                    success: function (layero, index) {
                        $.post('/api/event/GetMetaDetail', {'meta_id': metaId}, function (replayData) {
                            if (replayData.success) {
                                $(layero).find('.event-intro-wrap').html(replayData.result);
                            } else {
                                layer.msg(replayData.errorMsg || '操作失败');
                            }
                        }, 'json');
                        setTimeout(function () {
                            $(layero).find('[data-closelayer]').attr('onClick', 'layer.close(\'' + layerId + '\')');
                        });
                    }
                })
            })
        }
        //弹出等级不服toast
        , alertTips: function () {
            $('body').on('click', '[data-alert]', function () {
                if (!window.URL['login']) {
                    return;
                }
                var _this = this;
                $.post('/api/user/islogin', {}, function (replayData) {
                    if (replayData.success == 'true') {
                        if (replayData.result.login == 1) {
                            layer.msg($(_this).attr('data-alert'));
                        } else {
                            common.login();
                        }
                    }
                }, 'json');

            });
        }
        //折扣预约
        , reserve: function () {
            var flag = false;
            $('body').on('click', '[data-reserve]', function () {
                if (!window.URL['login']) {
                    return;
                }
                if(flag) return;
                flag = true;
                var mid = $(this).closest('[data-metaid]').attr('data-metaid');
                $.get('/api/event/EventReserve?platform=pc', {mid: mid}, function (replayData) {
                    //已关注服务号，预约成功
                    if (replayData.resultCode == 0) {
                        var htmlOkTpl = tplEngine.init($('#event-reserve-success-tpl').html(), {});
                        layer.open({
                            type: 1,
                            title: false,
                            closeBtn: 0,
                            area: ['300px'],
                            shadeClose: false,
                            content: '<div id="' + K.randomId() + '">' + htmlOkTpl + '</div>',
                            success: function (layero, index) {
                                flag = false;
                                layero.on('click', '.layer-msg-close-wrap', function () {
                                    layer.close(index);
                                    location.reload();
                                })
                            }
                        });
                    } else if (replayData.resultCode == -100) {
                        //未关注服务号，引导关注服务号
                        $.get('/api/event/GetReserveQrcode?platform=pc', {mid: mid}, function (rd) {
                            flag = false;
                            if (rd.resultCode == 0) {
                                var opt = {
                                    title: '',
                                    qrcode: rd.result,
                                    desc: '<font class="gray">微信扫码关注 <font class="c00">【极果试用】</font><br>服务号完成预约</font>',
                                    callback: function () {
                                        layer.closeAll();
                                        location.reload();
                                    }
                                };
                                common.layerWx(opt);
                            } else {
                                layer.msg(rd.errorMsg);
                            }
                        }, 'json');
                    } else {
                        layer.msg(replayData.errorMsg);
                    }
                }, 'json');
            });
        }

    };
});
