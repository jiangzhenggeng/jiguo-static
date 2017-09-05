define(['jquery','app/md5','app/tplEngine'],function ($,md5,tplEngine) {
    function getLoginStatus() {
        $.post('/api/user/islogin',{},function (replayData) {
            if(replayData.success=='true'){
                if(replayData.result.login==1){
                    var uid = replayData.result.user.uid;
                    var old_header_html = tplEngine.init($('#loagin-old-header-tpl').html(),replayData.result);
                    var new_header_html = tplEngine.init($('#loagin-new-header-tpl').html(),replayData.result);
                    window.URL['login'] = window.URL['uid'] = uid;
                    window.URL['uploadCode'] = md5.init(parseInt(uid)+1+'');
                    $('.header .login').html(old_header_html);
                    $('.nav-warp .nav-user').html(new_header_html);
                }
            }
        },'json');
    }

   return {
       init : getLoginStatus
   }
});