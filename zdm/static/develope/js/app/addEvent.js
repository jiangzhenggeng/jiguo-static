/**
 * Created by jiguo on 17/5/11.
 */

define(['jquery', 'layer', 'app/common', 'template', 'app/event'], function ($, layer, common, template, event) {

//      是否添加规格
    $("[name=no_spec]").on('click', function () {
        if ($("[name=no_spec]:checked").val() == 0) {
            $("#model-wrap").show();
            $("#model-list .no_spec").remove();
        } else {
            $("#model-wrap").hide();
            $("[data-editmodel]").before('<li class="Z-gray-btn Z-w-150 no_spec">无规格<input type="hidden" name="model[0]" value="无规格"></li>');
        }
    });

//      玩法模板选择
    function chooseTpl(edit) {
        $('[data-addEventPlay]').on('click', function () {
            if (edit == 'edit') {
                if (!isDisabled()) {
                    return;
                }
            }

            if (!isModel()) {
                return;
            }
            var url = $(this).attr("data-url");
            var playType = $(this).attr("data-addEventPlay");

            $("#event-tpl-box").show();
            $("#tpl-list").html('');
            if (playType == 1) {
                $(".title-wrap .Z-name").html("载入免费试用玩法模板：");
            } else {
                $(".title-wrap .Z-name").html("载入折扣试用玩法模板：");
            }

            $("#event-tpl-box .list-wrap").attr({"data-palytype": playType}).attr({"data-url": url});
            common.ajax('post', '/admin2/event/SearchTemplate', {type: playType}, 'json', function (replayData) {
                var tplData = replayData.result;
                var tplHtml = '';
                for (var i in tplData) {
                    tplHtml += '<li data-tplid="' + tplData[i].id + '">' + tplData[i].name + '</li>';
                }
                $("#tpl-list").html(tplHtml);

                //     选择模板
                $(".list-wrap li").bind('click', function () {
                    if ($(this).attr("data-checked") != undefined) {
                        $(this).removeAttr("data-checked");
                    } else {
                        $(this).attr({"data-checked": ""}).siblings().removeAttr("data-checked");
                    }
                });
            });
        });
    }

//     关闭选择模板
    $(".event-tpl-mask").on('click', '.close-event-tpl-page', function () {
        $(this).closest(".event-tpl-mask").hide();
    });


//     新建玩法
    function addTplPlay(edit) {
        $("[data-newplay]").on('click', function () {
            var playType = $(this).closest(".list-wrap").attr("data-palytype");
            var url = $(this).closest(".list-wrap").attr("data-url");
            var title = '';
            url += "?type=" + playType;
            playPage(playType, url);

        });
    }

//     载入模板
    function loadTplPlay(edit) {
        $("[data-tplplay]").on('click', function () {
            var _list = $(this).closest(".list-wrap");
            var playType = _list.attr("data-palytype");
            var url = $(this).closest(".list-wrap").attr("data-url");
            if (_list.find("li[data-checked]").length <= 0) {
                layer.msg("请选择一个你需要载入的模板");
                return;
            }
            var tplid = _list.find("li[data-checked]").attr("data-tplid");
            url += "?type=" + playType + "&id=" + tplid;
            if (edit == 'edit') {
                playPage(playType, url, edit);
            } else {
                playPage(playType, url, edit);
            }
        });
    }

//      修改玩法
    function editPlayer(edit) {
        $("body").on('click', '[data-editcard]', function () {

            //  判断是否有型号信息
            if (!isModel()) {
                return;
            }

            var title = '';
            var playFormData = [];
            var playType = $(this).closest("[data-playtype]").attr("data-playtype");
            var url = '/admin2/event/editEventType' + '?type=' + playType;
            var playForm = $(this).closest('.Z-card-list-box').find('[type=hidden]');
            var playId = $(this).closest('.Z-card-list-box').attr('data-playitemid');
            var modelItemList = getModelList();
            $(playForm).each(function (i, el) {
                playFormData[i] = {};
                var str = $(el).prop('name');
                str = str.match(/meta\[[\w]+\]\[(\S*)\]$/)[1];
                if (str.indexOf('[') >= 0) {
                    str = "[" + str + "]";
                }

                playFormData[i].name = str;
                playFormData[i].value = $(el).val();
            });


            if (playType == 1) {
                title = "免费试用玩法设置";
            } else {
                title = "折扣试用玩法设置";
            }

            layer.open({
                title: title,
                type: 2,
                move: false,
                scrollbar: false,
                area: ['910px', '600px'],
                content: url,
                success: function (layero, index) {
                    var o = '';
                    var user_group = [];

                    for (var i in modelItemList) {
                        o += "<tr><td>" + modelItemList[i] + "</td><td><input type='text' data-editdiscount name='" + i + "[buying_num]'></td><td class='price'><b></b><input type='hidden' name='" + i + "[price]'></td><td class='cost'><input type='text' data-editcost name='" + i + "[cost_spec]'></td><td><input type='text' data-editoldprice name='" + i + "[old_price]'></td></tr>";
                    }
                    var specList = {}, modelItemHtml = '';
                    var playBody = layer.getChildFrame('body', index);
                    var user_group_dom = playBody.find("[name='[user_group][]']");
                    playBody.find("#event-model-list tbody").html(o);
                    playBody.find("#formDataAjaxSend").attr('data-playid', playId);

                    //  把卡片数据遍历到玩法编辑页
                    for (var j in playFormData) {
                        var name = playFormData[j].name;
                        var value = playFormData[j].value;

                        if (name == '[user_group][]') {
                            user_group.push(value);
                        }
                        //跳过用户群组赋值
                        if (name.indexOf('user_group') >= 0) {
                            continue;
                        }
                        //编辑玩法时跳过用户群组赋值
                        if (edit == 'edit' && name == "all_user" && value == 0) {
                            continue;
                        }
                        //免费玩法的备注选项
                        if (name.indexOf('spec_remarks') >= 0) {
                            specList[name] = value;
                        }
                        //预约按钮赋值
                        if (name.indexOf('is_reserve') >= 0) {
                            playBody.find("#is_reserve").prop("checked", (value > 0));
                            continue;
                        }
                        //空值不赋值(显示默认值)
                        if (!value) {
                            continue;
                        }
                        playBody.find("[name='" + name + "']:not('[type=checkbox]'):not('[type=radio]')").val(value);
                        playBody.find("[name='" + name + "'][type=checkbox]").prop("checked", true);
                        //折扣玩法是否可用券赋值
                        var iscoupon = playBody.find("[name='" + name + "'][type=radio]");
                        iscoupon.each(function (item, index) {
                            if ($(this).val() == value) {
                                $(this).prop("checked", true);
                            }
                        });
                    }
                    user_group_dom.each(function () {
                        for (var k in user_group) {
                            if ($(this).val() == user_group[k]) {
                                $(this).prop("checked", true);
                            }
                        }
                    });

                    if (edit == 'edit') {
                        if (playBody.find('#platform [type=checkbox]:checked').length >= 4) {
                            playBody.find('[name=all_platform]').prop("checked", true);
                        }
                        // 有订单时限制修改型号信息
                        if (!isDisabled()) {
                            if ($("[name=no_spec]:checked").val() != 1) {
                                playBody.find('.Z-model-box input').attr('readonly', 'readonly').addClass('Z-gray');
                                playBody.find('#batch').addClass('Z-gray-btn');
                            }
                        }
                        // 活动上线后不能修改预约信息
                        if (isStart()) {
                            playBody.find('#is_reserve').attr('readonly', 'readonly');
                            playBody.find('[name=reserve_time]').closest('[data-z-select]').removeAttr('data-z-select').addClass('Z-gray');
                            playBody.find('#reserve_push_title').attr('readonly', 'readonly').addClass('Z-gray');
                        }
                    }
                    //折扣玩法
                    if (playType == 2) {
                        //  初始化折扣价
                        playBody.find("[data-editoldprice]").each(function (v, el) {
                            var price, cost_spec;
                            var discount = playBody.find("#discount").val();
                            var cost_dis = playBody.find("#cost_discount").val();
                            var old_price = $(el).val();
                            price = ((old_price * 100) * (discount * 100) / 100000).toFixed(2);
                            $(el).closest('tr').find('.price b').text(price);
                            $(el).closest('tr').find('.price').find("[type=hidden]").val(price);

                            // cost_spec=((old_price*100)*(cost_dis*100)/100000).toFixed(2);
                            // $(el).closest('tr').find('.cost').find("input").val(cost_spec);
                        });
                        //  初始化预约设置
                        var is_reserve = playBody.find("#is_reserve").is(':checked');
                        var reserve_time = playBody.find("[name=reserve_time]").val();
                        if (is_reserve) {
                            playBody.find("#reserve_time").show();
                            playBody.find("#reserve_time li").each(function () {
                                var dataValue = $(this).data('value');
                                if (reserve_time == dataValue) {
                                    common.setVal($(this));
                                }
                            })
                        }
                    }

                    //  初始化总库存
                    var allNum = 0, allCost = 0;
                    playBody.find("[data-editdiscount]").each(function () {
                        var num_spec = parseInt($(this).val());
                        if (playType == 1) {
                            allNum += num_spec;
                        } else {
                            var cost_spec = parseFloat($(this).closest('tr').find('.cost input').val());
                            allCost += cost_spec * num_spec;
                            allNum += num_spec;
                        }
                    });
                    allCost = allCost.toFixed(2);
                    if (isNaN(allCost)) allCost = 0;
                    playBody.find(".allNum").html(allNum);
                    playBody.find("#buying_num").val(allNum);

                    playBody.find(".allCost").html(allCost);
                    playBody.find("#cost").val(allCost);

                    //  添加无规格标识
                    if ($("[name=no_spec]:checked").val() == 1) {
                        playBody.find("#event-model-list").attr('data-nospec', '1');
                        playBody.find(".play-model-list-wrap").show();
                    } else {
                        playBody.find(".play-model-list-wrap").remove();
                    }
                    //添加无规格时的型号
                    for (var i in specList) {
                        modelItemHtml += '<li class="modelitem"><input type="text" value="' + specList[i] + '" name="' + i + '" placeholder="请填写规格名称"><span data-delmodelitem>x</span></li>';
                    }
                    playBody.find('[data-addmodelitem]').before(modelItemHtml);
                    hidePrice(playBody);

                }
            });
        });
    }

//       判断是否可修改
    function isDisabled() {
        if ($('#formDataAjaxSend').attr('data-disabled') == 'false') {
            return false;
        }
        return true;
    }

//       判断活动是否上线
    function isStart() {
        if ($('#formDataAjaxSend').attr('data-isstart') === '1') {
            return true;
        }
        return false;
    }

//        判断是否有型号信息
    function isModel() {
        if ($("[name=no_spec]:checked").val() == 0) {
            if ($('#model-list li').find('[type=hidden]').length <= 0) {
                layer.msg("请先添加型号信息");
                return false;
            }
        }
        return true;
    }

//        获取规格列表
    function getModelList() {
        var modelItemList = {};
        var modelListDom;
        if ($("[name=no_spec]:checked").val() == 0) {
            modelListDom = $(".Z-edit-model .Z-gray-btn:not(.Z-btn)");
        } else {
            modelListDom = $(".Z-edit-model .no_spec");
        }
        $(modelListDom).each(function () {
            var modelName = $(this).find('input').prop("name");
            var modelItem = $(this).text();
            modelName = modelName.replace(/model/g, '[model]');
            modelItemList[modelName] = modelItem;
        });
        return modelItemList;
    }

//        添加玩法
    function playPage(playType, url, edit) {
        var title = '';
        var modelItemList = getModelList();
        if (playType == 1) {
            title = "免费试用玩法设置";
        } else {
            title = "折扣试用玩法设置";
        }
        $(".event-tpl-mask").hide();

        layer.open({
            title: title,
            type: 2,
            move: false,
            scrollbar: false,
            area: ['910px', '600px'],
            content: url,
            success: function (layero, index) {
                var o = '';
                for (var i in modelItemList) {
                    o += "<tr><td>" + modelItemList[i] + "</td><td><input type='text' data-editdiscount name='" + i + "[buying_num]'></td><td class='price'><b></b><input type='hidden' name='" + i + "[price]'></td><td class='cost'><input type='text' data-editcost name='" + i + "[cost_spec]'></td><td><input type='text' data-editoldprice name='" + i + "[old_price]'></td></td></tr>";
                }

                var playBody = layer.getChildFrame('body', index);
                playBody.find("#event-model-list tbody").html(o);
                if (edit == 'edit') {
                    playBody.find("#formDataAjaxSend").attr("data-editplay", 'edit');
                }

                if ($("[name=no_spec]:checked").val() == 1) {
                    playBody.find("#event-model-list").attr('data-nospec', '1');
                    playBody.find(".play-model-list-wrap").show();
                }
                hidePrice(playBody);
            }
        });
    }

//         免费试用隐藏折扣价
    function hidePrice(playBody) {
        var type = playBody.find('#type').val();
        if (type == 1) {
            playBody.find('.price').text('-');
            playBody.find('.cost').css({'backgroundColor': '#ededed'}).html('-');
        }
    }

//          删除多余的型号
    function delModel() {
        if ($("[name=no_spec]:checked").val() == 0) {
            $('#model-list').find('li.no_spec').remove();
        } else {
            $('#model-list').find('li:not(.no_spec)').remove();
        }
    }

    return {
        chooseTpl: chooseTpl,
        addTplPlay: addTplPlay,
        loadTplPlay: loadTplPlay,
        editPlayer: editPlayer,
        isDisabled: isDisabled,
        getModelList: getModelList,
        delModel: delModel
    }
});
