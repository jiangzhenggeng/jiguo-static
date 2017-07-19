

define(['jquery'],function ($){
    /*********************
     select框样式绑定函数
     *********************/
    function dataZselectBind(obj){
        $(obj).each(function(index, element) {
            index += 9999;
            $(this).attr('tabindex',index).removeAttr('data-Z-select')
            //获得焦点时下拉菜单
                .focus(function(){
                    var self = $(this).find('.Z-select-list');
                    self.css('display','block');
                })
                .on('click','.Z-select-selected,.Z-select-arrow',function(){
                    var self = $(this).parent().find('.Z-select-list');
                    self.css('display','block');
                })
                //失去焦点时收起下拉菜单
                .blur(function(){
                    $(this).find('.Z-select-list').css('display','none');
                })
                //设置选择的值
                .on('click','li',function(){
                    __setVal($(this));
                });

            function __setVal(_this) {
                var currVal = _this.attr('data-value'),
                    currHtml = _this.find('span').html(),
                    self = _this.parent().parent().parent();

                self.find('.Z-select-selected').find('span').html(currHtml);
                self.find('input[data-Z-select-value]').val(currVal);
                self.find('.Z-select-list').css('display','none');
                _this.parent().find('li[data-selected]').removeAttr('data-selected');
                _this.attr('data-selected','');
            }
            var selected = $(this).find('.Z-select-list ul li[data-selected]');
            if(selected.length){
                __setVal(selected);
            }else{
                __setVal($(this).find('.Z-select-list ul li').first());
            }
        });
    }

    return {
        init:dataZselectBind
    };
});