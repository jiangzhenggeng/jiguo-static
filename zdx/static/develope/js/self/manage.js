/**
 * Created by wuhongshan on 2017/6/2.
 */
define(['jquery','layer','template','self/common'],function ($,layer,template,common) {
    function test() {
        if($('#name').val().trim().length<=0){
            layer.msg('请填写姓名');
            $('#name').focus();
            return false;
        }
        if($('#tel').val().trim().length<=0){
            layer.msg('请填写帐号');
            $('#tel').focus();
            return false;
        }
        if($('#password').val().trim().length<=0){
            layer.msg('请填写密码');
            $('#password').focus();
            return false;
        }
        return true;
    }
    function manageInit(option) {
        var options=$.extend({
            width:'500px',
            height:'200px',
            template:null,
            addurl:null,
            deleteurl:null,
            fun : null
        },option);
        //新增用户
        $('#add').on('click',function (e) {
            e.preventDefault();
            var title=$(this).data('title');
            common.showBox(title,options.width,options.height,template(options.template,{}),options.fun);
        });
        //新增分类
        $('body').off('click.send').on('click.send','#send',function (e) {
            e.preventDefault();
            if($(this).data('classify')){//如果包含 classify 属性,表示由分类管理模块调用
                var data=$('#formSend').serialize();
                common.ajax('post', options.addurl, data, 'json', function () {
                    layer.msg('操作成功', function () {
                        layer.closeAll();
                        window.location.reload();
                    })
                })
            }else {
                if (!test()) return;
                var data=$('#formSend').serialize();
                common.ajax('post',options.addurl,data,'json',function () {
                    layer.msg('操作成功',function () {
                        layer.closeAll();
                        window.location.reload();
                    })
                })

            }

        });
        //编辑
        $('body').off('click.edit').on('click.edit','[data-edit]',function (e) {
            e.preventDefault();
            if($(this).data('classify')) {//如果包含 classify 属性,表示由分类管理模块调用
            var name = $(this).parent().parent().data('name');
            var id = $(this).parent().parent().data('id');
                var templateData = {
                    name: name,
                    id:id
                };
            }else {
                var title = $(this).data('title');
                var name = $(this).parent().parent().data('name');
                var tel = $(this).parent().parent().data('tel');
                var uid = $(this).parent().parent().data('id');
                var avatar = $(this).parent().parent().data('avatar');
                var motto = $(this).parent().parent().data('motto');
                var templateData = {
                    name: name,
                    tel: tel,
                    uid: uid,
                    avatar : avatar,
                    motto : motto
                };
            }
            common.showBox(title,options.width,options.height,template(options.template,templateData),options.fun);
        });
        //删除
        $('body').off('click.delete').on('click.delete','[data-delete]',function (e) {
            e.preventDefault();
            var deleteData = $(this).parent().parent().data('id');
            if (deleteData) {
                if ($(this).data('classify')) {
                    common.confirm('你确定删除吗？', options.deleteurl, {id: deleteData});
                } else {
                    common.confirm('你确定删除吗？', options.deleteurl, {uid: deleteData});
                }
            }else{
               $(this).parent().remove();
            }
        });

    }
    return {
        manageInit:manageInit
    }
})