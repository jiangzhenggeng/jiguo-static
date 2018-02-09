define(['jquery', 'app/common', 'template', 'app/tplEngine', 'layer', 'lib/html2canvas'], function ($, common, template, tplEngine, layer) {

    //    随机id
    function randomID() {
        return 'random_id_' + Math.random().toString().replace('.', '');
    }

    function dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], {type: mimeString});
    }

    function savaFile(data, filename) {
        var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href = data;
        save_link.download = filename;
        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        save_link.dispatchEvent(event);
    }

    function _init2(callback) {
        var wrap = document.getElementById('share-img-box'),
            w = wrap.offsetWidth,
            h = wrap.offsetHeight;
        var canvas = document.createElement("canvas");
        canvas.width = w * 2;
        canvas.height = h * 2;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        var context = canvas.getContext("2d");
        var cenX = wrap.getBoundingClientRect().left * 2;
        var cenY = wrap.getBoundingClientRect().top * 2;
        context.translate(-cenX, -cenY);
        context.scale(2, 2);
        html2canvas(wrap, {
            canvas: canvas,
            onrendered: function (canvas) {
                var imageData = canvas.toDataURL("image/png", 1).replace("image/jpeg", 'image/octet-stream'),
                    filename = new Date().getDate() + String(Math.random()).replace('0.', '') + '.png';
                // savaFile(imageData,filename);

                var fd = new FormData();
                var blob = dataURItoBlob(imageData);
                fd.append('file', blob, filename);
                $.ajax({
                    type: 'post',
                    url: '/admin2/ajax/upload',
                    data: fd,
                    dataType: 'json',
                    processData: false,
                    contentType: false,
                    success: function (replayData) {
                        if (replayData.resultCode == 0) {
                            $('.share-img').attr('src', replayData.result.url);
                            $('#share_cover').val(replayData.result.fileid);
                        } else {
                            layer.msg(replayData.errorMsg);
                        }
                        (callback || function () {
                        })();
                    }
                });

            }
        });
    }

    //生成小程序分享图
    function _init() {
        var tplBox = $('#share-img-box');
        var create = false;
        var title, first_text, second_text;

        title = $('#share_title').val();
        first_text = $('#share_desc').val();
        second_text = $('#share_small_desc').val();

        if (title.trim().length <= 0) {
            layer.msg('请填写分享标题');
            return;
        }
        if (first_text.trim().length <= 0) {
            layer.msg('请填写第一行文案');
            return;
        }
        if (second_text.trim().length <= 0) {
            layer.msg('请填写第二行文案');
            return;
        }

        if (create) {
            return;
        }
        var tips = layer.msg('正在生成小程序分享图', {
            time: 999999
        });

        create = true;
        clearTimeout(timer1);
        var timer1 = setTimeout(function () {
            create = false;
        }, 5000);

        var data = {
            title: title,
            first_text: first_text,
            second_text: second_text
        };
        var html = tplEngine.init($('#coupon-wx-share-tpl').html(), data);
        tplBox.html(html).find('img').load(function () {
            _init2(function () {
                layer.close(tips);
                create = false;
                $('.share-title').html(data.title);
            });
        });
    }

    //表单检测
    function testForm() {
        var priceType = $('#price-type').find('input:checked').val();
        if ($('#name').val().length <= 0) {
            layer.msg('请输入名称');
            return false;
        }
        if (priceType==0){
            if ($('#price').val().length <= 0 || isNaN($('#price').val())) {
                layer.msg('请输入金额');
                return false;
            }
            var num = $('#num').val();
            if (num.length <= 0) {
                layer.msg('请输入券数量');
                return false;
            } else {
                if (num % 1 > 0 || num <= 0 || isNaN(num)) {
                    layer.msg('券数量请填写大于 0 的整数');
                    return false;
                }
            }
        }else{
            if($('#all-random-price').val()<=0){
                layer.msg('请添加至少一个随机金额');
                return false;
            }
        }

        if ($('#start_time').val().length <= 0) {
            layer.msg('请输入有效期开始时间');
            return false;
        }
        if ($('#push_day').val().length <= 0) {
            layer.msg('请输入push提醒时间');
            return false;
        }
        if ($('#ctitle').val().length <= 0) {
            layer.msg('请输入券标题');
            return false;
        }
        if ($('#cdesc').val().length <= 0) {
            layer.msg('请输入券简介');
            return false;
        }
        if ($('#cleftdesc').val().length <= 0) {
            layer.msg('请输入左侧文案');
            return false;
        }
        if ($('#crule').val().length <= 0) {
            layer.msg('请输入规则说明');
            return false;
        }
        if ($('#share_title').val().length <= 0) {
            layer.msg('请输入分享标题');
            return false;
        }
        if ($('#share_cover').val().length <= 0) {
            layer.msg('请生成小程序分享图');
            return false;
        }
        if (!testMoney()) return false;
        return true;
    }

    //检测可用金额
    function testMoney() {
        var num = $('#num').val(),
            event = $('#event').val(),
            price = $('#price').val(),
            sumMoney = price * num,
            allMoney = $('[data-allmoney]').data('allmoney'),
            limiteventmoney = $('[data-limiteventmoney]').data('limiteventmoney'),
            allRandomPrice = $('#all-random-price').val(),
            priceType = $('#price-type').find('input:checked').val();

        if(priceType ==0){
            if ((event != '' && sumMoney > limiteventmoney) || (event == '' && sumMoney > allMoney)) {
                $('html,body').animate({scrollTop: 0}, 160);
                layer.msg('超出可用余额');
                return false;
            }
        }else{
            if ((event != '' && allRandomPrice > limiteventmoney) || (event == '' && allRandomPrice > allMoney)) {
                $('html,body').animate({scrollTop: 0}, 160);
                layer.msg('超出可用余额');
                return false;
            }
        }
        return true;
    }

    //格式化时间
    function formatTime(time) {
        //兼容safari时间格式
        if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") == -1) {
            time = time.replace(/-/g, "/");
        }
        var mytime = new Date(time),
            y = mytime.getFullYear(),
            m = mytime.getMonth() + 1,
            d = mytime.getDate();
        return (y + '.' + m + '.' + d);
    }

    //添加随机金额
    function addPriceList() {
        var price = $('#ran-price').val(),
            num = $('#ran-num').val(),
            count_price = (price * num).toFixed(2),
            data = {
                price: price,
                num: num,
                count_price: count_price,
                randomID: randomID()
            };
        if (isNaN(price) || price == '' || isNaN(num) || num == '' || num % 1 > 0) {
            layer.msg('请填写正确的金额和数量');
            return;
        }
        var html = template('price-list-tpl', data);
        $('#ran-num').val('');
        $('#ran-price').val('').focus();
        $('#random-price-list').find('li.on').removeClass('on');
        $('#random-price-list').append(html);
        allRandomPrice();
        randomPriceListSort();
    }

    //随机金额排序
    function randomPriceListSort() {
        var rPriceList = $('#random-price-list li');
        rPriceList.sort(function (a, b) {
            var aPrice = $(a).find('[name*=price]').val(),
                bPrice = $(b).find('[name*=price]').val();
            return aPrice - bPrice;
        });
        $('#random-price-list').html(rPriceList);
    }

    //合计金额
    function allRandomPrice() {
        var allPrice = 0,
            rPriceList = $('#random-price-list li');
        rPriceList.each(function () {
            var count_price = $(this).find('input[name*=count_price]').val();
            allPrice += parseFloat(count_price);
        });
        allPrice = allPrice.toFixed(2);
        $('#all-price').html(allPrice);
        $('#all-random-price').val(allPrice);
    }

    return {
        //提交数据
        submitForm: function () {
            if (!testForm()) return;
            var lid = layer.load(3, {time: 20 * 1000});
            var data = $('#formData').serialize();
            $.ajax({
                type: 'post',
                url: '/admin2/coupon/InsertCouponPackage',
                data: data,
                dataType: 'json',
                timeout: 10000,
                complete: function (xhr, status) {
                    layer.close(lid);
                    if (status == 'timeout') {
                        layer.msg('提交超时');
                    } else {
                        var replyData = $.parseJSON(xhr.responseText);
                        if (replyData.success != 'true') {
                            layer.msg(replyData.errorMsg);
                        } else {
                            layer.msg(replyData.result, function () {
                                location.href = '/admin2/coupon/couponpackagelist';
                            });
                        }
                    }
                }
            })
        },
        //预览卡片
        showCard: function () {
            var ctitle = $('#ctitle').val(),
                cdesc = $('#cdesc').val(),
                price = $('#price').val(),
                cleftdesc = $('#cleftdesc').val(),
                crule = $('#crule').val(),
                startTime = '' || formatTime($('#start_time').val()),
                endTime = '' || formatTime($('#end_time').val()),
                data = {
                    ctitle: ctitle,
                    cdesc: cdesc,
                    price: price,
                    cleftdesc: cleftdesc,
                    crule: crule,
                    startTime: startTime,
                    endTime: endTime
                };
            //随机金额时预览金额显示为xx
            var priceType = $('#price-type').find('input:checked').val();
            if (priceType == 1) {
                data.price = 'xx';
            }
            var html = template('preview-card-tpl', data);
            $('.coupon-card-wrapper').html(html);
        },
        //更新券额
        updatePrice: function () {
            var _this = this;
            $('#price').bind('input propertychange', function () {
                var price = $(this).val();
                $('.coupon-money').text(price);
                _this.showCard();
            });
        },
        //更新卡片
        updateCard: function () {
            var _this = this;
            $('#price,#ctitle,#cdesc,#cleftdesc').bind('input propertychange', function () {
                _this.showCard();
            });
            $('#start_time,#end_time').blur(function () {
                _this.showCard();
            })
        },
        //生成小程序分享图
        createShareImg: function () {
            $('body').on('click', '[data-create-wxcode-share-pic]', function () {
                _init();
            });
        },
        //选择金额类型
        choosePriceType: function () {
            $('body').on('click', '#price-type .radiobox', function () {
                var val = $(this).find('input').val();
                if (val == 0) {
                    $('.random-price').hide();
                    $('.fixed-price').show();
                } else {
                    $('.random-price').show();
                    $('.fixed-price').hide();
                }
            });
        },
        //填写随机金额
        addRandomPrice: function () {
            $('body').on('click', '#add-random-price', function () {
                addPriceList();
            });
            $('#ran-num').keypress(function (e) {
                if (e.keyCode == 13) {
                    addPriceList();
                }
            });
            $('#random-price-list').on('mouseenter', function () {
                $(this).find('li.on').removeClass('on');
            });
        },
        //删除随机金额
        delRandomPrice: function () {
            $('body').on('click', '.del', function () {
                $(this).closest('li').remove();
                allRandomPrice();
            });
        }
    }
});