define(["jquery","app/md5","app/tplEngine"],function(a,b,c){function d(){a.post("/api/user/islogin",{},function(d){if(d.success=="true"&&d.result.login==1){var e=d.result.user.uid,f=c.init(a("#loagin-old-header-tpl").html(),d.result),g=c.init(a("#loagin-new-header-tpl").html(),d.result);window.URL.login=window.URL.uid=e,window.URL.uploadCode=b.init(parseInt(e)+1+""),a(".header .login").html(f),a(".nav-warp .nav-user").html(g)}},"json")}return{init:d}})