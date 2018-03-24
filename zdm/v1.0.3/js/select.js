// JavaScript Document


/*********************
 select框样式绑定函数
 *********************/
function dataZselectBind(obj) {
    obj.each(function (index, element) {
        index += 9999;
        var _selfObject_ = $(this);
        $(this).attr('tabindex', index).removeAttr('data-Z-select')
        //获得焦点时下拉菜单
            .focus(function () {
                var self = $(this).find('.Z-select-list');
                self.css('display', 'block');
            })
            .on('click', '.Z-select-selected,.Z-select-arrow', function () {
                var self = $(this).parent().find('.Z-select-list');
                self.css('display', 'block');
            })
            //失去焦点时收起下拉菜单
            .blur(function () {
                $(this).find('.Z-select-list').css('display', 'none');
            })
            //设置选择的值
            .on('click', 'li', function () {
                __setVal($(this));
            });

        function __setVal(_this,init) {
            var currVal = _this.attr('data-value'),
                currHtml = _this.find('span').html(),
                self = _this.parent().parent().parent(),
                multiple = self.data('multiple') !== undefined,
                name = self.find('input[data-Z-select-value]').attr('name');
            //判断多选
            if (multiple) {
                var valueHtml = '',
                    isSelected = _this.attr('data-selected') === '',//是否已经被选中
                    isAll = _this.attr('data-value') === '',//是否点击的是全部
                    isAllSelected = _this.parent().find('li[data-selected]').first().attr('data-value') === '';//全部是否被选中
                if (!isSelected) {
                    if(isAll){
                        _this.parent().find('li[data-selected]').removeAttr('data-selected');
                    }else if(isAllSelected){
                        _this.parent().find('li[data-selected]').first().removeAttr('data-selected');
                    }
                    _this.attr('data-selected', '');
                } else if(!init){//初始化时不清除选中状态
                    _this.removeAttr('data-selected');
                }
                self.find('input[data-Z-select-value]').remove();
                self.find('.Z-select-list ul li[data-selected]').each(function (i, el) {
                    var thisHtml = $(this).find('span').html(),
                        thisValue = $(this).data('value'),
                        input = '';
                    //全选时禁用input
                    if(isAll){
                        input = '<input data-Z-select-value value="' + thisValue + '" name="' + name + '" type="hidden" disabled/>';
                    }else{
                        input = '<input data-Z-select-value value="' + thisValue + '" name="' + name + '" type="hidden"/>';
                    }
                    if (i === 0) {
                        valueHtml += thisHtml;
                    } else {
                        valueHtml += ('，' + thisHtml);
                    }
                    self.append(input);
                });
                self.find('.Z-select-selected').find('span').html(valueHtml);
                _selfObject_.trigger('change', [_selfObject_, _this]);
            } else {
                self.find('.Z-select-selected').find('span').html(currHtml);
                self.find('input[data-Z-select-value]').val(currVal);
                self.find('.Z-select-list').css('display', 'none');
                _this.parent().find('li[data-selected]').removeAttr('data-selected');
                _this.attr('data-selected', '');
                _selfObject_.trigger('change', [_selfObject_, _this]);
            }
        }

        var selected = $(this).find('.Z-select-list ul li[data-selected]');
        if (selected.length) {
            if(_selfObject_.data('multiple') !== undefined){
                selected.each(function () {
                    __setVal($(this),true);
                });
            }else{
                __setVal(selected);
            }
        } else {
            var defaultVal = $(this).find('input[data-Z-select-value]').val();
            var optionLi = $(this).find('.Z-select-list ul li');
            var isSelect = false;
            optionLi.each(function () {
                if (!isSelect && defaultVal == $(this).attr('data-value')) {
                    __setVal($(this));
                    isSelect = true;
                }
            });
            if (!isSelect) {
                __setVal($(this).find('.Z-select-list ul li').first());
            } else {
                _selfObject_.trigger('change', [_selfObject_, _selfObject_.find('li[data-selected]')]);
            }
        }
    });
}


