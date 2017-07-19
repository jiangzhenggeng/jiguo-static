$(function () {
    //报名
    enroll('#media');
    enroll('#headPart');
    enroll('#part');
    changeHeight('#form-media');
    changeHeight('#form-part');
    submit('#form-media');
    submit('#form-part');

})

//关闭
function close(doc) {
    $('.report-item .close').on('click', function () {
        doc.find('input').val('');
        doc.find('.err').addClass('opacity');
        doc.addClass('display')
        $('.errInfo').addClass('display');
        $('.succeed').addClass('display');
        $('.report-box').addClass('display');
        $('.report-item').addClass('display');
    })
}
//报名
function enroll(target) {
    $(target).on('click', function () {
        $('.report-item').removeClass('display');
        $('.report-box').removeClass('display');
        var targetName = /\w+/.exec(target),
            boxClass = '.' + targetName + '-box';
        if(boxClass=='.headPart-box'){
            boxClass='.part-box';
        }
        $(boxClass).removeClass('display');
        close($(boxClass));
    })
}
//提交  target为form ID
function submit(target) {
    var targetName = target.split('-')[1],
        box = '.' + targetName + '-box';
    $('' + target + ' button[data-submit]').on('click', function () {

        if (target == '#form-media') {
            var name = $('#mediaName'),
                tel = $('#mediaTel'),
                weixin = $('#mediaWeixin'),
                email = $('#mediaEmail'),
                company = $('#mediaCompany'),
                place = $('#mediaPlace'),
                area = null;
        } else {
            var name = $('#partName'),
                tel = $('#partTel'),
                weixin = $('#partWeixin'),
                email = $('#partEmail'),
                company = $('#partCompany'),
                place = $('#partPlace'),
                area = $('#partArea'),
                areaValue = area.val().trim();

        }
        var nameValue = name.val().trim(),
            telValue = tel.val().trim(),
            weixinValue = weixin.val().trim(),
            emailValue = email.val().trim(),
            companyValue = company.val().trim(),
            placeValue = place.val().trim(),

            regName = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{2,})$/,
            regTel = /^1(3|4|5|7|8)[0-9]{9}$/,
            regWeixin = /^[a-zA-Z\d_]{1,}$/,
            regEmail = /^[\w\-\.]{1,50}@[\w\-]{1,50}(\.[\w\-]{1,50})+$/,
            regCompany = typeof companyValue === 'string',
            regPlace = typeof placeValue === 'string',
            regArea = typeof areaValue === 'string';

        $('.err').addClass('opacity');
        if (name && nameValue.length !== 0) {
            if (!regName.test(nameValue)) {
                name.siblings('.err').removeClass('opacity');
                name.focus();
                return false;
            }
        } else {
            name.siblings('.err').removeClass('opacity').html('<i></i>请输入姓名');
            return false;
        }
        if (tel && telValue.length !== 0) {
            if (!regTel.test(telValue)) {
                tel.siblings('.err').removeClass('opacity');
                tel.focus();
                return false;
            }
        } else {
            tel.siblings('.err').removeClass('opacity').html('<i></i>请输入手机号');
            return false;
        }
        if ( weixinValue.length == 0) {
            weixin.siblings('.err').removeClass('opacity').html('<i></i>请输入微信');
            return false;
        }
        if (email && emailValue.length !== 0) {
            if (!regEmail.test(emailValue)) {
                email.siblings('.err').removeClass('opacity');
                email.focus();
                return false;
            }
        } else {
            email.siblings('.err').removeClass('opacity').html('<i></i>请输入邮箱');
            return false;
        }

        if (company && companyValue.length !== 0) {
            if (!regCompany) {
                company.siblings('.err').removeClass('opacity');
                company.focus();
                return false;
            }
        } else {
            company.siblings('.err').removeClass('opacity').html('<i></i>请输入公司');
            return false;

        }
        if (place && placeValue.length !== 0) {
            if (!regPlace) {
                place.siblings('span').removeClass('opacity');
                place.focus();
                return false;
            }
        } else {
            place.siblings('.err').removeClass('opacity').html('<i></i>请输入职位');
            return false;
        }
        if (target == '#form-part') {
            if (area && areaValue.length <= 0) {
                if(!regArea){
                    area.siblings('span').removeClass('opacity');
                    area.focus();
                    return false;
                }

            }
        }

        $.ajax({
            type: "post",
            url: "../../apply.php",
            data: $(target).serialize(),
            dataType: "json",
            success: function (data) {
                if (data.status == 0) {
                    $(box).addClass('display');
                    tel.siblings('.err').addClass('opacity');
                    $('.succeed').removeClass('display');
                    setTimeout(function(){
                        $('.close').trigger('click');
                        $("html,body").animate({scrollTop: 0}, 0);
                    },2000)
                }
                if (data.status != 0) {
                    if(data.status==-2){
                        tel.siblings('.err').removeClass('opacity').html('<i></i>'+data.message+'');
                    }
                }
            }
        })
    })
}
//键盘调起事件
function changeHeight(target) {
    $(''+target+' input').each(function () {
        $(this).on('focus',function () {
            $('body').css({'height':0});
        })
        $('.close').on('click',function () {
            $('body').css({'height':'auto'});
        })
    });
}