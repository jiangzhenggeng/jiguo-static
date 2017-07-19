define([
    'app/event',
    'app/common'
],function (event,common,ueditor) {

    function addFreeEvent(originData) {
        var formId = randomID();
        originData = originData || {};
        originData = {
            deposit:originData.deposit || '',
            num:originData.num || '',
            quantifier:originData.quantifier || '台',
            extend2:html_decode(originData.extend2) || ''
        };

        var layerId = layer.open({
            title: '添加免费试用',
            btn:['保存'],
            area:['465px'],
            content: '\
            <form id="'+formId+'">\
                <div class="layer-event-add-block-warp">\
                    <div class="Z-row">\
                        <span class="Z-name">押金：</span><input value="'+originData.deposit+'" name="deposit" class="Z-input Z-w-327">\
                    </div>\
                    <div class="Z-row">\
                        <span class="Z-name">数量：</span><input value="'+originData.num+'" name="num" class="Z-input Z-w-115">\
                        <span class="Z-name" style="text-align: right">单位：</span><input value="'+originData.quantifier+'" name="quantifier" class="Z-input Z-w-115">\
                    </div>\
                    <div class="Z-row">\
                        <span class="Z-name">描述：</span><textarea name="extend2" class="Z-input Z-w-327">'+originData.extend2+'</textarea>\
                    </div>\
                </div>\
            </form>',
            yes:function () {
                var FormObj = $('#'+formId) ,
                    data = {
                        deposit:FormObj.find('[name=deposit]').val().toString().replace(/[^\d\.]/g,''),
                        num:FormObj.find('[name=num]').val().toString().replace(/[^\d]/g,''),
                        quantifier:FormObj.find('[name=quantifier]').val(),
                        extend2:html_encode(FormObj.find('[name=extend2]').val()),
                    };
                if(data.deposit==''){
                    layer.msg('请填写押金');
                    return;
                }
                if(data.num==''){
                    layer.msg('请填数量');
                    return;
                }
                if(data.quantifier==''){
                    layer.msg('请填写单位');
                    return;
                }
                if(data.extend2==''){
                    layer.msg('请填写描述');
                    return;
                }
                $('#add-event-free-block').html( newTplEngine($('#add-event-free-block-tpl').html(),{data:data}) );
                layer.close(layerId);
            }
        });
    }

});