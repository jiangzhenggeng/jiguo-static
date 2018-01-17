/**
 * Created by jiguo on 17/4/19.
 */
/**
 * Created by wuhongshan on 2017/4/13.
 */
define(['jquery', 'layer', 'template', 'app/common', 'app/event'], function ($, layer, template, common, event) {
    //        全选
    function chooseBox() {
        $("[data-checkbox]").on('click', function () {
            var id = $(this).attr("data-checkbox");
            _this = $(this).find("input[type=checkbox]")[0];
            if (_this.checked) {
                $("#" + id + " :checkbox").prop("checked", true);
            } else {
                $("#" + id + " :checkbox").prop("checked", false);
            }
        });

        $(".checkbox-wrap").on('click', 'input[type=checkbox]', function () {
            var _checkedList = $(this).closest('.checkbox-wrap');
            var id = _checkedList.attr('id');
            var allCheckboxNum = _checkedList.find('input[type=checkbox]').length;
            var checkedNum = _checkedList.find('input[type=checkbox]:checked').length;
            if (checkedNum == allCheckboxNum) {
                $("[data-checkbox=" + id + "]").find('input[type=checkbox]').prop("checked", true);
            } else {
                $("[data-checkbox=" + id + "]").find('input[type=checkbox]').prop("checked", false);
            }
        });

    }

    //       报名时间、活动时间
    function changeTime() {
        $('#start').on('blur', function () {
            setTime('#start', '#deadline', '#applyday');
            setTime('#deadline', '#end', '#eventday');
        });

        $('#deadline').on('blur', function () {
            setTime('#deadline', '#end', '#eventday');
            setDays('#start', '#deadline', '#applyday');
        });

        $('#end').on('blur', function () {
            setDays('#deadline', '#end', '#eventday');
        });

        $('#applyday').on('blur', function () {
            setTime('#start', '#deadline', '#applyday');
            setTime('#deadline', '#end', '#eventday');
        });

        $('#eventday').on('blur', function () {
            setTime('#deadline', '#end', '#eventday');
        });

    }

    //      格式化时间
    function fmt(d) {
        var d = d || new Date(),
            year = d.getFullYear(),
            day = d.getDate(),
            month = +d.getMonth() + 1,
            hour = d.getHours(),
            minute = d.getMinutes(),
            second = d.getSeconds(),
            f = year + "-" + formate(month) + "-" + formate(day) + " " + formate(hour) + ":" + formate(minute) + ":" + formate(second);
        return f;
    }

    function formate(d) {
        return d > 9 ? d : '0' + d;
    }

    //      设置时间
    function setTime(starttime, endtime, day, def) {
        var et,
            st = $(starttime).val(),
            day = $(day).val(),
            etDom = $(endtime);

        if (day % 1 > 0 || isNaN(day)) {
            layer.msg('请输入整天数');
            return;
        }
        if (st == '') {
            return;
        }
        //兼容safari时间格式
        if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") == -1) {
            st = st.replace(/-/g, "/");
        }
        day = day || def;
        et = new Date(st);
        et.setDate(et.getDate() + parseInt(day));
        et = fmt(et);
        etDom.val(et);
    }

    //      设置试用天数
    function setDays(starttime, endtime, daysDom) {
        var aDate1,
            aDate2,
            oDate1,
            oDate2,
            iDays,
            sDate1 = $(starttime).val(),
            sDate2 = $(endtime).val(),
            daysDom = $(daysDom);

        aDate1 = sDate1.split("-");
        aDate2 = sDate2.split("-");
        aDate1[2] = aDate1[2].substr(0, 2);
        aDate2[2] = aDate2[2].substr(0, 2);
        //兼容safari时间格式
        if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") == -1) {
            oDate1 = new Date(aDate1[1] + '/' + aDate1[2] + '/' + aDate1[0]);    //转换为12-18-2006格式
            oDate2 = new Date(aDate2[1] + '/' + aDate2[2] + '/' + aDate2[0]);
        } else {
            oDate1 = new Date(aDate1[1] + '-' + aDate1[2] + '-' + aDate1[0]);    //转换为12-18-2006格式
            oDate2 = new Date(aDate2[1] + '-' + aDate2[2] + '-' + aDate2[0]);
        }
        iDays = parseInt(Math.abs(oDate2 - oDate1) / 1000 / 60 / 60 / 24);   //把相差的毫秒数转换为天数
        daysDom.val(iDays);
    };

    //       批量填入原价、库存及折扣价
    function batch() {
        $("#batch").on('click', function () {
            if ($(this).hasClass('Z-gray-btn')) {
                return;
            }
            var discount = $("#discount").val();
            var cost_dis = $("#cost_discount").val();
            var inventory = $("#inventory").val();
            var old_price = $("#old-price").val();
            var price, cost_spec;
            if (inventory == '' || !(Math.floor(inventory) == inventory)) {
                layer.msg('请填入正确的库存');
                return;
            }
            if (!old_price) {
                layer.msg('请填入正确的原价');
                return;
            }
            if ($("#discount").length > 0) {
                if (!((discount > 0 && discount < 10 && discount != '') && (cost_dis >= 0 && cost_dis < 10 && cost_dis != ''))) {
                    layer.msg('请填入正确的折扣');
                    return;
                }
                price = ((old_price * 100) * (discount * 100) / 100000).toFixed(2);
                $(".price b").text(price);
                $(".price").find("[type=hidden]").val(price);

                cost_spec = ((old_price * 100) * (cost_dis * 100) / 100000).toFixed(2);
                $(".cost").find("input").val(cost_spec);
            }
            $("[data-editdiscount]").val(inventory);
            $("[data-editoldprice]").val(old_price);
            allInventory();
        });

        $("body").on('keyup', "[data-editdiscount]", function () {
            var inventory = $(this).val();
            if (!(Math.floor(inventory) == inventory)) {
                layer.msg('请填入正确的库存');
                return;
            }
            allInventory();
        });

        $("body").on('keyup', "[data-editcost]", function () {
            var cost = $(this).val();
            if (isNaN(cost)) {
                layer.msg('请填入正确的成本价');
                return;
            }
            allInventory();
        });

        $("body").on('keyup', "[data-editoldprice]", function () {
            var price, cost_spec,
                old_price = $(this).val(),
                discount = $("#discount").val(),
                cost_dis = $("#cost_discount").val();
            minPrice();

            if ($("#discount").length <= 0) {
                return;
            }
            price = ((old_price * 100) * (discount * 100) / 100000).toFixed(2);
            $(this).closest('tr').find('.price b').text(price);
            $(this).closest('tr').find('.price').find("[type=hidden]").val(price);

            cost_spec = ((old_price * 100) * (cost_dis * 100) / 100000).toFixed(2);
            $(this).closest('tr').find('.cost').find("input").val(cost_spec);

            allInventory();
        });

    }

    //总数量&总成本
    function allInventory() {
        var allNum = 0, allCost = 0;
        $("[data-editdiscount]").each(function () {
            var num_spec = parseInt($(this).val());
            if ($("#discount").length <= 0) {
                allNum += num_spec;
            } else {
                var cost_spec = parseFloat($(this).closest('tr').find('.cost input').val());
                allCost += cost_spec * num_spec;
                allNum += num_spec;
            }
        });
        allCost = allCost.toFixed(2);
        //没有成本价时成本显示为0
        if (isNaN(allCost)) allCost = 0;

        $(".allNum").html(allNum);
        $("#buying_num").val(allNum);

        $(".allCost").html(allCost);
        $("#cost").val(allCost);

        minPrice();
    }

    //最小价格
    function minPrice() {
        var minPrice,
            priceArr = [],
            flag = true;
        $("[data-editoldprice]").each(function () {
            if (isNaN(Number($(this).val())) && $(this).val() != '') {
                layer.msg('请输入正确的商品原价');
                flag = false;
                return false;
            }
            if ($(this).val() == '') {
                flag = false;
                return false;
            }
            priceArr.push($(this).val());
        });
        if (!flag) {
            return;
        }
        minPrice = Math.min.apply(null, priceArr);
        $("#showprice").val(minPrice);
    }

    //备注选项
    function addmodel() {
        $('body').on('click', '[data-delmodelitem]', function () {
            $(this).closest('li').remove();
        })
            .on('click', '[data-addmodelitem]', function () {
                var name = "[spec_remarks][" + event.randomID() + "]";
                var html = '<li class="modelitem"><input type="text" name="' + name + '" placeholder="请填写规格名称"><span data-delmodelitem>x</span></li>';
                $(this).before(html);
                $(this).prev().find('input').trigger('focus');
            })
    }

    //开启预约
    function isReserve() {
        $('#is_reserve').click(function () {
            //手动使checkbox失效
            if ($(this).prop('readonly')) return false;
            if ($(this).is(':checked')) {
                $('#reserve_time').show();
            } else {
                $('#reserve_time').hide();
            }
        })
    }

    function testForm() {
        var flag = false;

        if ($("[name=buying_name]").val() == "") {
            layer.msg("请填写正确的玩法名称");
            $("[name=buying_name]").trigger('focus');
            return false;
        }

        if (event.getLen($("[name=buying_name]").val()) > 6) {
            layer.msg("玩法名称不超过6个字");
            $("[name=buying_name]").trigger('focus');
            return false;
        }

        if ($("[name='[user_group][]']:checked").length <= 0) {
            layer.msg("请选择用户级别");
            $("[name=user_group]").trigger('focus');
            return false;
        }

        if ($("#platform :checked").length <= 0) {
            layer.msg("请选择参与平台");
            $("#platform input").trigger('focus');
            return false;
        }

        if ($("[name=starttime]").val() == "") {
            layer.msg("请选择报名开始时间");
            $("[name=starttime]").trigger('focus');
            return false;
        }

        if ($("[name=endtime]").val() == "") {
            layer.msg("请选择报名截止时间");
            $("[name=endtime]").trigger('focus');
            return;
        }

        if ($("#is_reserve").is(':checked')) {
            var reserve_push_title = $("#reserve_push_title").val();
            if (event.getLen(reserve_push_title) > 7.5 || reserve_push_title == '') {
                layer.msg("推送标题不能为空且不能超过7.5个字符");
                $("#reserve_push_title").trigger('focus');
                return;
            }
        }

        if ($('#type').val() == 2 && $('#discount').val() == '') {
            layer.msg("请填写折扣");
            $("#discount").trigger('focus');
            return;
        }

        if (!($('#type').val() == 1 && $('#event-model-list').attr('data-nospec') == 1)) {
            $("[data-editdiscount]").each(function () {
                if ($(this).val() == "") {
                    layer.msg("请填写库存数量");
                    $(this).trigger('focus');
                    flag = true;
                    return false;
                }
            });
            if (flag) {
                return false;
            }
            $("[data-editoldprice]").each(function () {
                if ($(this).val() == "") {
                    layer.msg("请填写原价");
                    $(this).trigger('focus');
                    flag = true;
                    return false;
                }
            });
            if (flag) {
                return false;
            }
        }
        if (!$('#event-model-list').attr('data-nospec') == 1) {
            if ($('#buying_num').val() <= 0) {
                layer.msg("请正确填写库存数量");
                $('#inventory').trigger('facus');
                return false;
            }
        }
        if ($("[name=buying_price]").val() == "") {
            layer.msg("请填写押金");
            $("[name=buying_price]").trigger('focus');
            return false;
        }

        if ($("[name=quantifier]").val() == "") {
            layer.msg("请填写单位");
            $("[name=quantifier]").trigger('focus');
            return false;
        }

        if ($("[name=pay_back]").val() == "") {
            layer.msg("请填写描述");
            $("[name=pay_back]").trigger('focus');
            return false;
        }

        if ($("[name=explain]").val() == "") {
            layer.msg("请填写押金说明");
            $("[name=explain]").trigger('focus');
            return false;
        }

        if ($("[name=tips]").val() == "") {
            layer.msg("请填写试用贴士");
            $("[name=tips]").trigger('focus');
            return false;
        }

        if ($('#event-model-list').attr('data-nospec') == 1 &&
            $('.model-list-wrap').find(".modelitem input").length > 0) {
            var modelDataList = {};
            //判断型号是否添加正确
            $('.model-list-wrap').find(".modelitem input").each(function () {
                var modelItem = $(this).val();
                var modelName = $(this).prop('name');
                if (!modelItem || event.getLen(modelItem) > 8) {
                    layer.msg('请填写正确的备注规格');
                    $(this).trigger('focus');
                    flag = true;
                    return false;
                }
                modelDataList[modelName] = modelItem;
            });
            if (!event.testRepeat(modelDataList)) {
                layer.msg('备注规格不能重复');
                flag = true;
            }
            if (flag) {
                return false;
            }
        }

        if ($("[name=detail]").val() == "") {
            layer.msg("请填写活动介绍");
            $("[name=detail]").trigger('focus');
            return false;
        }

        return true;
    }


    return {
        initCheckBox: chooseBox,
        initInventory: allInventory,
        batch: batch,
        testForm: testForm,
        changeTime: changeTime,
        addmodel: addmodel,
        isReserve: isReserve
    }
});