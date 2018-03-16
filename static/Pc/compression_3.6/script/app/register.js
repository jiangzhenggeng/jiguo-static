define(["jquery","app/common","app/countdown"],function(a,b,c){function d(){layer.ready();var b=!0;a(".getcode").click(function(){var d=a("[data-tel]").val();if(!/^1[2-9][0-9]{9}$/.test(d)){layer.tips("请正确填写手机号码",a("[data-tel]")),a("[data-tel]").focus();return}var f=a("[data-img-code]").val();if(f==""){layer.tips("请输入图片验证码",a("[data-img-code]")),a("[data-img-code]").focus();return}if(b==0){layer.msg("手机验证码已发送");return}b=!1,a.get("/api/validation/tel",{tel:d,vcode:f,action:action},function(d){if(d.resultCode!=0){layer.msg(d.errorMsg),d.resultCode==-2&&e.trigger("click"),b=!0;return}var f=a(".getcode");c.run({dom:".getcode",tplFn:function(a,c,d,e,g){f.html(e+"秒重新发送"),g<=0&&(f.html("发送验证码"),b=!0)}})},"json").fail(function(){console.log(arguments),layer.msg("请求失败"),b=!0})}),a(".save-warp .btn").click(function(){var b=K.trim(a("[data-tel]").val()),c=K.trim(a("[data-img-code]").val()),d=K.trim(a("[data-phone-code]").val());if(!/^1[2-9][0-9]{9}$/.test(b)){layer.tips("请正确填写手机号码",a("[data-tel]"));return}if(c==""){layer.tips("请输入图片验证码",a("[data-img-code]")),a("[data-img-code]").focus();return}if(d==""){layer.tips("请输入手机验证码",a("[data-phone-code]")),a("[data-phone-code]").focus();return}a.get(postUrl,{tel:b,vcode:c,code:d},function(a){if(a.resultCode!=0){layer.msg(a.errorMsg);return}window.location=callUrl},"json")})}var e;return a(function(){e=a("[data-register-img-code]"),e.attr("src",e.attr("src")),e.click(function(){a(this).attr("src",e.attr("src").split("?")[0]+"?"+Math.random())})}),{init:d,setRegisterPassword:function(){layer.ready(),a(".save-warp .btn").click(function(){var b=K.trim(a("[data-username]").val()),c=K.trim(a("[data-password]").val()),d=K.trim(a("[data-repassword]").val());if(b==""){layer.tips("请填写用户名",a("[data-username]"));return}if(c==""){layer.tips("请填写密码",a("[data-password]"));return}if(c!=d){layer.tips("两次输入的密码不相同",a("[data-repassword]"));return}a.get("/api/user/name",{username:b,passwd:c},function(a){if(a.resultCode!=0){layer.msg(a.errorMsg);return}window.location="/"},"json")})},changePassword:function(){layer.ready(),a(".save-warp .btn").click(function(){var c=K.trim(a("[data-password]").val()),d=K.trim(a("[data-repassword]").val());if(c==""){layer.tips("请填写密码",a("[data-password]"));return}if(c!=d){layer.tips("两次输入的密码不相同",a("[data-repassword]"));return}a.get("/api/user/mobile",{passwd:c},function(a){if(a.resultCode!=0){layer.msg(a.errorMsg);return}layer.msg("密码修改成功",function(){b.login()})},"json")})}}})