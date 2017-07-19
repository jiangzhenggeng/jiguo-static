function addPayEvent(originData,editId) {
    var formId = randomID();
    originData = originData || {};
    originData = {
        buying_name:html_decode(originData.buying_name) || '付费试用',
        price:originData.price || '',
        buying_price:originData.buying_price || '',
        pay_back:html_decode(originData.pay_back) || '',
        num:originData.num ||'',
        quantifier:originData.quantifier || '台'
    };

    var layerId = layer.open({
        title: '添加付费试用',
        btn:['保存'],
        area:['465px'],
        content: '\
            <form id="'+formId+'">\
                <div class="layer-event-add-block-warp">\
                    <div class="Z-row">\
                        <span class="Z-name">名称：</span><input value="'+originData.buying_name+'" name="buying_name" class="Z-input Z-w-327">\
                    </div>\
                    <div class="Z-row">\
                        <span class="Z-name">总价：</span><input value="'+originData.price+'" name="price" class="Z-input Z-w-327">\
                    </div>\
                    <div class="Z-row">\
                        <span class="Z-name">返现：</span><input value="'+originData.buying_price+'" name="buying_price" class="Z-input Z-w-327">\
                    </div>\
                    <div class="Z-row">\
                        <span class="Z-name">数量：</span><input value="'+originData.num+'" name="num" class="Z-input Z-w-115">\
                        <span class="Z-name" style="text-align: right">单位：</span><input value="'+originData.quantifier+'" name="quantifier" class="Z-input Z-w-115">\
                    </div>\
                    <div class="Z-row">\
                        <span class="Z-name">描述：</span><textarea name="pay_back" class="Z-input Z-w-327">'+originData.pay_back+'</textarea>\
                    </div>\
                </div>\
            </form>',
        yes:function () {
            var FormObj = $('#'+formId) ,
                data = {
                    buying_name:FormObj.find('[name=buying_name]').val(),
                    price:FormObj.find('[name=price]').val().toString().replace(/[^\d\.]/g,''),
                    buying_price:FormObj.find('[name=buying_price]').val().toString().replace(/[^\d\.]/g,''),
                    pay_back:html_encode(FormObj.find('[name=pay_back]').val()),
                    num:html_encode(FormObj.find('[name=num]').val()).toString().replace(/[^\d]/g,''),
                    quantifier:html_encode(FormObj.find('[name=quantifier]').val())
                };

            if(data.buying_name==''){
                layer.msg('请填写名称');
                return;
            }
            if(data.price==''){
                layer.msg('请填写总价');
                return;
            }
            if(data.buying_price==''){
                layer.msg('请填写返现金额');
                return;
            }
            if(data.pay_back==''){
                layer.msg('请填写描述');
                return;
            }
            if(data.num==''){
                layer.msg('请填写数量');
                return;
            }
            if(data.quantifier==''){
                layer.msg('请填写单位');
                return;
            }

            if(editId){
                $(editId).replaceWith(newTplEngine($('#add-event-pay-block-tpl').html(),{data:data}));
            }else {
                $('#add-event-pay-block .Z-card-list-add').before( newTplEngine($('#add-event-pay-block-tpl').html(),{data:data}) );
            }
            layer.close(layerId);

        }
    });
}
function deletePayEvent(selector) {
    //询问框
    var id = layer.confirm('你确定删除吗？', {
        btn: ['删除','取消'] //按钮
    }, function(){
        $(selector).remove();
        layer.close(id);
    });
}