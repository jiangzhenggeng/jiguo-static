$(function () {
    var style = 'box-sizing: border-box !important;position:fixed; bottom:0; left:0; width: 100%; height: 100%;';
    var windArr = []; //保存所有窗口id
    var randomIdFormDom = null;//表单对象

    var loading = false;
    var loading_2 = false;

    var award = null;

    function openWindow(message) {
        layer.open({
            content: message
            ,skin: 'msg'
            ,time: 2
        });
    }

    function _innerTops(selector) {
        var obj = window.rormDom.find(selector),
            val = obj.val();
        if(val==''){
            obj.focus();
            obj.next().show();
            return false;
        }
        return true;
    }

    function verification(rormDom,award) {
        window.rormDom = rormDom;

        if(!_innerTops('#company_name')) return false;
        if(!_innerTops('#offer_name')) return false;
        if(!_innerTops('#related_introduction')) return false;
        if(!_innerTops('#reason')) return false;
        if(!_innerTops('#company_introduction')) return false;

        if(!_innerTops('#company_url')) return false;

        if(!_innerTops('#financing')) return false;
        if(!_innerTops('#name')) return false;

        var obj = $(rormDom).find('#phone'),
            val = obj.val();
        if( !/^1[\d]{10}/.test(val) ){
            obj.focus();
            obj.next().show();
            return false;
        }

        //if(_innerTops('#weixin')) return false;

        var obj = $(rormDom).find('#email'),
            val = obj.val();
        if( !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val) ){
            obj.focus();
            obj.next().show();
            return false;
        }

        //创业人物
        if(award==5){
            if(!_innerTops('#figure_name')) return false;
            if(!_innerTops('#figure_introduce')) return false;
        }
        //新锐公司
        if(award==3){
            if(!_innerTops('#company_name')) return false;
        }

        return true;
    }

    function verificationCeo(rormDom,award) {

        window.rormDom = rormDom;

        if(!_innerTops('#name')) return false;

        var obj = $(rormDom).find('#phone'),
            val = obj.val();
        if( !/^1[\d]{10}/.test(val) ){
            obj.focus();
            obj.next().show();
            return false;
        }

        var obj = $(rormDom).find('#email'),
            val = obj.val();
        if( !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val) ){
            obj.focus();
            obj.next().show();
            return false;
        }
        //if(_innerTops('#weixin')) return false;

        if(type==1){
            if(!_innerTops('#media')) return false;
        }

        if(award==2){
            if(!_innerTops('#company_name')) return false;
            if(!_innerTops('#company_url')) return false;
        }

        if(!_innerTops('#job')) return false;
        return true;
    }


    var body =  $('body');

    window.openApply = function(_this,_award ){
        var scrollTop = $(window).scrollTop();
        var randomId = 'randomId'+String(Math.random()).replace('.','');
        award = _award;

        var id = layer.open({
            type: 1,
            content: '<form id="'+randomId+'" style="height:100%">'+tplEngine($('#apply-box-input-step2-tpl').html(),{data:{
                award: award
            }})+'</form>',
            style: style,
            anim: 'right',
            success:function (l,o) {
                randomIdFormDom = $(l).find('#'+randomId);
                award = award;
                $('html,body').addClass('over');
            },
            end:function () {
                randomIdFormDom = null;
                $('html,body').removeClass('over');
                $(window).scrollTop(scrollTop);
            }
        });
        windArr.push(id);
    };


    body.on('click','[data-apply]',function () {

        var scrollTop = $(window).scrollTop();
        var id = layer.open({
            type: 1,
            content: tplEngine($('#apply-box-input-step1-tpl').html(),{}),
            anim: 'right',
            style: style,
            success:function () {
                $('html,body').addClass('over');
            },end:function () {
                $('html,body').removeClass('over');
                $(window).scrollTop(scrollTop);
            }
        });
        windArr.push(id);

    }).on('click','.step1',function (event) {

        var randomId = 'randomId'+String(Math.random()).replace('.','');

        award = $(this).val();

        var id = layer.open({
            type: 1,
            content: '<form id="'+randomId+'" style="height:100%">'+tplEngine($('#apply-box-input-step2-tpl').html(),{data:{
                award: award
            }})+'</form>',
            anim: 'right',
            style: style,
            success:function (l,o) {
                randomIdFormDom = $(l).find('#'+randomId);
                award = award;
                $('html,body').addClass('over');
            },
            end:function () {
                randomIdFormDom = null;
                $('html,body').removeClass('over');
            }
        });
        windArr.push(id);
    }).on('touchstart','.apply-close',function () {
        //关闭所有窗口
        layer.closeAll();
        $(window).unbind('touchmove.default');
    }).on('click','.apply-close-all',function () {
        layer.closeAll();
        $(window).unbind('touchmove.default');
    }).on('touchstart','.apply-back',function () {
        $(window).unbind('touchmove.default');
        //返回窗口
        if(windArr.length){
            layer.close(windArr.pop());
        }else{
            layer.closeAll();
        }
    }).on('click','.apply-submit[data-step-all]',function () {

        //提交数据
        if(loading){
            openWindow('数据提交中...');
            return;
        }

        if(!verification(randomIdFormDom,award)){
            return;
        }

        var timer = setTimeout(function () {
            loading = false;
        },5000);

        loading = true;
        //提交数据到服务器
        $.post('http://gtic.zhidx.com/awards2017/apply.php',randomIdFormDom.serialize(),function (replayData) {
            if(replayData.status==0){
                openWindow('报名成功');

                var id = layer.open({
                    type: 1,
                    content: tplEngine($ ('#apply-box-input-step3-tpl').html(),{}),
                    anim: 'right',
                    style: style
                });
                windArr.push(id);
                return;
            }else{
                openWindow(replayData.message || '系统错误');
            }

            if(timer)clearTimeout(timer);
            loading = false;
        },'json');
    }).on('focus','[data-input-box]',function () {
        $(this).next().hide();
    });

    var type = null;

    body.on('click','[data-review]',function () {

        var _type = $(this).attr('data-val');
        var scrollTop = $(window).scrollTop();

        if(_type){
            var randomId = 'randomId'+String(Math.random()).replace('.','');
            type = _type;
            var id = layer.open({
                type: 1,
                content: '<form id="'+randomId+'" style="height:100%">'+tplEngine($('#apply-box-review-step2-tpl').html(),{data:{
                    type:type
                }})+'</form>',
                anim: 'right',
                style: style,
                success:function (l,o) {
                    randomIdFormDom = $(l).find('#'+randomId);
                    type = type;
                    $('html,body').addClass('over');
                },
                end:function () {
                    randomIdFormDom = null;
                    $('html,body').removeClass('over');
                    $(window).scrollTop(scrollTop);
                }
            });
        }else{
            var id = layer.open({
                type: 1,
                content: tplEngine($('#apply-box-review-step1-tpl').html(),{}),
                anim: 'right',
                style: style,
                success:function (l,o) {
                    $('html,body').addClass('over');
                },
                end:function () {
                    $('html,body').removeClass('over');
                    $(window).scrollTop(scrollTop);
                }
            });
        }
        windArr.push(id);

    }).on('click','.review-step',function () {
        var randomId = 'randomId'+String(Math.random()).replace('.','');
        type = $(this).val();

        var id = layer.open({
            type: 1,
            content: '<form id="'+randomId+'" style="height:100%">'+tplEngine($('#apply-box-review-step2-tpl').html(),{data:{
                type:type
            }})+'</form>',
            anim: 'right',
            style: style,
            success:function (l,o) {
                randomIdFormDom = $(l).find('#'+randomId);
                type = type;
                $('html,body').addClass('over');
            },
            end:function () {
                randomIdFormDom = null;
                $('html,body').removeClass('over');
            }
        });
        windArr.push(id);
    }).on('click','.apply-submit[data-jury]',function () {
        //提交数据
        if(loading_2){
            openWindow('数据提交中...');
            return;
        }
        if(!verificationCeo(randomIdFormDom,type)){
            return;
        }

        var timer = setTimeout(function () {
            loading_2 = false;
        },5000);

        loading_2 = true;
        //提交数据到服务器
        $.post('http://gtic.zhidx.com/awards2017/apply_jury.php',randomIdFormDom.serialize(),function (replayData) {
            if(replayData.status==0){
                openWindow('报名成功');
                var id = layer.open({
                    type: 1,
                    content: tplEngine($ ('#apply-box-input-step3-tpl').html(),{}),
                    anim: 'right',
                    style: style
                });
                windArr.push(id);
                return;
            }else{
                openWindow(replayData.message || '系统错误');
            }
            if(timer)clearTimeout(timer);
            loading_2 = false;
        },'json');
    }).on('click','.editorSignUp,.awardsSignUp',function () {
        $(this).parent().find('.on').removeClass('on');
        $(this).addClass('on');
    });

});