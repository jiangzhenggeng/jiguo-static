/**
 * Created by jiguo on 17/4/11.
 */
define(['jquery','ueditor','zeroclipboard'],function ($,UE,zcl) {
    var url='/protected/extensions/editor/php/controller.php?uid=11&code=c20ad4d76fe97759aa27a0c99bff6710';
    /*********************
     //编辑器增加图片远程抓取按钮
     *********************/
    UE.registerUI('catchbutton',function(editor,uiName){
        var me = this;
        //注册按钮执行时的command命令，使用命令默认就会带有回退操作
        editor.registerCommand(uiName, {
            execCommand: function() {
                me.fireEvent("catchRemoteImage");
            }
        });

        //创建一个button
        var btn = new UE.ui.Button({
            //按钮的名字
            name: uiName,
            //提示
            title: '图片远程抓取',
            //点击时执行的命令
            onclick: function() {
                //这里可以不用执行命令,做你自己的操作也可
                editor.execCommand(uiName);
            }
        });
        //当点到编辑内容上时，按钮要做的状态反射
        editor.addListener('selectionchange', function() {
            var state = editor.queryCommandState(uiName);
            if (state == -1) {
                btn.setDisabled(true);
                btn.setChecked(false);
            } else {
                btn.setDisabled(false);
                btn.setChecked(state);
            }
        });
        //因为你是添加button,所以需要返回这个button
        return btn;

    });

    function createEditer(id){
        window.ZeroClipboard = zcl;
        var _editor = UE.getEditor(id,{
            serverUrl:url,
            onready:function(){
                var tipsHtml = '<div class="tooltip" style="display: none;"><div class="tooltip_inner"></div><i class="tooltip_arrow"></i></div>';
                $('body').append(tipsHtml);
                var tooltip = $('.tooltip');
                $('.edui-toolbar > .edui-box').hover(function(event){
                    tooltip.show().find('.tooltip_inner').html($(this).find('[title]').eq(0).attr('title'));

                    var offset = $(this).offset() ,
                        left = offset.left - tooltip.width()/2 + $(this).width()/2 ,
                        top = offset.top - $(this).height()/2 - 15;
                    tooltip.css('left',left).css('top',top);
                },function(){
                    tooltip.hide();
                });
            }
        });

        return _editor;
    };
    function setContent(id,content) {
        var _editor = UE.getEditor(id,{
            serverUrl:url,
        });
        //判断图片地址是否在本地
        _editor.addListener("afterSetContent afterPaste",function(a,b){
            function _matchImgCheck($string){
                if($string=='')return true;
                var notSrc = [],
                    imgAddrList = ['pic.jiguo.com','s1.jiguo.com'];

                $string.replace(/<img[^>]*src\s*=(\'|\")(.+?)\1/ig,function(match_all,match_target,src,resource){
                    var _src = src;
                    src = src.toLocaleLowerCase();
                    //排除自己服务器绝对地址
                    if(src.substr(0,1)=='/' && src.substr(0,2)!='//'){
                        return;
                    }
                    //排除自己服务器相对地址
                    if(src.substr(0,8)!='https://' && src.substr(0,7)!='http://'){
                        return;
                    }
                    var $is_pass = false;
                    for (var i=0 ; i < imgAddrList.length; i++ ){
                        //如果不是自己的服务器地址
                        if(src.indexOf(imgAddrList[i])!==-1){
                            $is_pass = true;
                        }
                    }
                    if($is_pass===false){
                        notSrc.push(_src);
                    }
                });
                return notSrc;
            }
            var notSrc = _matchImgCheck(this.getContent());
            if(notSrc.length){
                $(this.document).find('head').append('<style>.edui-image-not-jiguo-zdm-addr{border:5px solid red;}</style>');
                $(this.body).find('img[src]').each(function () {
                    for(var i=0 ; i < notSrc.length ;i++){
                        if($(this).attr('src')==notSrc[i]){
                            $(this).addClass('edui-image-not-jiguo-zdm-addr');
                        }
                    }
                });
            }
        });
        _editor.setContent(content);
    }
    return{
        init:createEditer,
        setContent:setContent
    }
});
