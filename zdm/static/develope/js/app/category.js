/**
 */
define(['jquery'], function ($) {
    /**
     * 初始化产品分类
     */
    function dataCategoryInitSub(trigger,moreName) {
        var obj = $('[data-category]:not([data-category-init])');
        obj.bind('change',function () {
            var _this = $(this);
            var parentid = _this.val();

            $.get('/admin/ajax/GetProductCategory',{
                parentid:parentid
            },function (replayData) {
                //删除所有子分类
                _this.nextAll('[data-category]').remove();

                if(replayData.length<=0){
                    _this.attr('name',_this.attr('data-name'));
                    return;
                }

                var html = '<option value="-1">选择分类</option>' , selected = '';

                for ( var i in replayData ){
                    html += '<option value="'+replayData[i].id+'">'+replayData[i].name+'</option>';
                }
                var _name = _this.attr('name') || _this.attr('data-name');
                html = '<select class="Z-w-110" data-category name="'+_name+'">'+html+'</select>';
                moreName || _this.attr('data-name',_name).removeAttr('name');
                _this.after(html);
                dataCategoryInitSub(true,moreName);

            },'json');
        });
        obj.attr('data-category-init','init');
        if(trigger)obj.trigger('change');
    }



    /**
     * 初始化产品分类2
     */
    function dataCategoryInit(selectid,moreName) {
        moreName = moreName || false;

        $.get('/admin/ajax/GetAllCategory',{
            id:selectid || 0
        },function (replayData) {
            // window.global.categoryData = replayData;
            function createTreeSelect(categoryData,_this,auto){

                //删除所有子分类
                _this.nextAll('[data-category]').remove();

                if(categoryData==null)return ;

                _this.attr('data-category-init','init');

                var html = '<option value="-1">选择分类</option>' , selected = '', childerData = null , prevId = null;

                if(!auto){
                    prevId = _this.prev().val();
                }
                for ( var i in categoryData ){
                    selected = '';
                    if(categoryData[i].disabled==1 && auto){
                        selected = 'selected';
                        childerData = categoryData[i].child;
                    }
                    html += '<option '+selected+' value="'+categoryData[i].id+'">'+categoryData[i].name+'</option>';
                }

                if(childerData==null && typeof categoryData[0].child != 'undefined' && categoryData[0].child.length){
                    childerData = categoryData[0].child;
                }
                var fieldName = '';
                if(childerData==null || moreName) fieldName = ' name="'+_name+'" ';

                html = '<select class="Z-w-110" '+fieldName+' data-category data-name="'+_name+'">'+html+'</select>';

                _this.remove();

                parentWarp.append(html);

                createTreeSelect(childerData,$('[data-category]',html),auto);

            }

            var parentWarp = $('[data-top]:not([data-category-init])').parent();

            var _name = $('[data-top]:not([data-category-init])').attr('name');
            createTreeSelect(replayData,$('[data-top]:not([data-category-init])'),true);

            dataCategoryInitSub(false,moreName)

        },'json');
    }

    return {
        dataCategoryInit: dataCategoryInit
    }
})