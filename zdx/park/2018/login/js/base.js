/**
 * Created by jiangzg on 2016/11/18.
 */
var windowHeight = $(window).height(),
    windowWigth = $(window).width();

$('head').append('<style>.window-height{height:' + windowHeight + 'px;}</style>');
$('head').append('<style>.window-width{width:' + windowWigth + 'px;}</style>');
$('head').append('<style>.muenu-item{height:' + (windowHeight - 100) + 'px;}</style>');


function tplEngine(tpl, data) {
    if (typeof tpl !== 'string' || tpl == '') {
        return data ? '' : function () {
        };
    }

    var _match = null,
        start_index = 0,
        LEFT_DELIMITER = '<%',
        RIGHT_DELIMITER = '%>',
        function_body = null;

    //HTML转义
    this._encodeHTML = function (source) {
        return String(source)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\\/g, '&#92;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    //转义影响正则的字符
    this._encodeReg = function (source) {

        return String(source).replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
    };

    //构造函数头部
    function_body = 'var _encodeHTML=' + this._encodeHTML + ';\nvar r=[];\nvar fn = (function(__data__){\n',
        function_body += "var _template_varName='';\n";
    function_body += "for(var __name__ in __data__){\n";
    function_body += "_template_varName+=('var '+__name__+'=__data__[\"'+__name__+'\"];');\n";
    function_body += "};\neval(_template_varName);\n";

    //取得分隔符
    var _left_ = LEFT_DELIMITER;
    var _right_ = RIGHT_DELIMITER;

    //对分隔符进行转义，支持正则中的元字符，可以是HTML注释 <!  !>
    var _left = this._encodeReg(_left_);
    var _right = this._encodeReg(_right_);
    //创建匹配规则
    var _RegExp = new RegExp(_left + '([^(' + _left + '|' + _right + ')].*?)' + _right, 'g');
    tpl.replace(_RegExp, function (match_all, match_target, index, resource) {
        //构造函数体
        function_body += 'r.push("' + tpl.substr(start_index, index - start_index).replace(new RegExp("[\\r\\t]", "g"), "").replace(/"/g, '\\"').replace(/\n/g, '\\n') + '");\n';
        var _match_target = match_target.toString().replace(/(^\s*)|(\s*$)/g, '');
        if (match_target.substr(0, 1) == '=') {
            //如果是变量并且不转意
            function_body += 'r.push(typeof(' + _match_target.substr(1) + ') === "undefined"?"":' + _match_target.substr(1) + ');\n';
        } else if (match_target.substr(0, 1) == '@') {
            //如果是函数
            function_body += 'r.push(' + _match_target.substr(1) + ');\n';
        } else if (match_target.substr(0, 3).toLowerCase() == ':v=') {
            //如果是变量并且转意
            function_body += 'r.push(typeof(' + _match_target.substr(3) + ') === "undefined"?"":_encodeHTML(' + _match_target.substr(3) + '));\n';
        } else if (match_target.substr(0, 3).toLowerCase() == ':u=') {
            //如果是变量并且进行URL编码
            function_body += 'r.push(typeof(' + _match_target.substr(3) + ') === "undefined"?"":encodeURI(' + _match_target.substr(3) + '));\n';
        } else {
            //直接是js代码
            function_body += _match_target + '\n';
        }
        start_index = index + match_all.length;
        return '';
    });
    //模板最后一个标签遗留下的部分
    function_body += 'r.push("' + tpl.substr(start_index).replace(new RegExp("[\\r\\t]", "g"), "").replace(/"/g, '\\"').replace(/\n/g, '\\n') + '");\n';
    function_body += '})(__template_data__);';
    //合并函数体
    function_body += 'return r.join("");';
    //构造一个后台函数
    var fn = new Function('__template_data__', function_body);
    if (data != undefined) {
        return fn(data);
    } else {
        return fn;
    }
}


function _tips(message) {
    $('body').find('.in-tips').remove();
    $('body').append(' <div class="in-tips"><div class="in-tips-inner">' + message + '</div></div>');
    $('.in-tips').show();
    $('.in-tips').find('.in-tips-inner').html(message);
    setTimeout(function () {
        $('.in-tips').hide();
    }, 2000);
}

function _tips2(obj, type, hideall) {
    var o = obj.next('.item-tips');
    if (hideall) {
        o.find('> * ').hide();
        return true;
    }
    o.find('img').show();
    if (!type) {
        o.find('.no-data').show();
    } else {
        o.find('.error').show();
    }
}

$(function () {
    function _v(form_data) {
        var _name = form_data.find('#name'),
            _name_val = _name.val().replace(/\s/, '');

        if (_name_val == '') {
            _tips2(_name);
            _name.focus();
            return false;
        } else if (_name_val.length < 2 || _name_val.length > 20) {
            _tips2(_name, true);
            _name.focus();
            return false;
        }

        var _phone = form_data.find('#phone'),
            _phone_val = _phone.val().replace(/\s/, '');
        if (_phone_val.length != 11) {
            if (_phone_val.length > 0) {
                _tips2(_phone, true);
            } else {
                _tips2(_phone, false);
            }
            _phone.focus();
            return false;
        }

        var _email = form_data.find('#email');
        if(_email.length>0){
            var _email_val = _email.val().replace(/\s/, '');
            if (!/^[\w\-_\.]{1,60}@[\w\-_]{1,10}(\.[\w\-_]{1,10})+$/.test(_email_val)) {
                if (_email_val.length > 0) {
                    _tips2(_email, true);
                } else {
                    _tips2(_email, false);
                }
                _email.focus();
                return false;
            }
        }


        var _company = form_data.find('#company');
        if(_company.length>0){
            var _company_val = _company.val().replace(/\s/, '');
            if (_company_val.length <= 0 || _company_val.length > 60) {
                _tips2(_company, false);
                _company.focus();
                return false;
            }
        }


        var _job = form_data.find('#job');
        if(_job.length>0){
            var _job_val = _job.val().replace(/\s/, '');
            if (_job_val.length <= 0 || _job_val.length > 60) {
                _tips2(_job, false);
                _job.focus();
                return false;
            }
        }


        var _article = form_data.find('#article');
        if (_article.length > 0) {
            var _article_val = _article.val().replace(/\s/, '');
            if (_article_val.length <= 0 || _article_val.length > 60) {
                _tips2(_article, false);
                _article.focus();
                return false;
            }
        }
        return true;
    }

    function _success(title) {

        var k_dialog_window_id = (function () {
            return 'random_id_' + Math.random().toString().replace('.', '');
        })();
        var html = tplEngine($('#k_dialog_window_tpl').html(), {
            k_dialog_window_id: k_dialog_window_id,
            k_dialog_window_content: tplEngine($('#k_dialog_success_tpl').html(), {
                title: title
            }),
        });
        $('body').append(html);
        var k_dialog_window_id_obj = $('#' + k_dialog_window_id),
            submit = $(k_dialog_window_id_obj).find('#submit-data');

        k_dialog_window_id_obj.find('.k_dialog_close').click(function () {
            $(this).remove('click');
            submit.remove('click');
            k_dialog_window_id_obj.remove();
        });
        setTimeout(function () {
            k_dialog_window_id_obj.remove();
            $(window).scrollTop(0);
        },3000)
    }

    function _submit(selecter, title, media, url) {

        $(selecter).click(function () {
            var k_dialog_window_id = (function () {
                return 'random_id_' + Math.random().toString().replace('.', '');
            })();
            var html = tplEngine($('#k_dialog_window_tpl').html(), {
                k_dialog_window_id: k_dialog_window_id,
                k_dialog_window_content: tplEngine($('#k_dialog_body_tpl').html(), {
                    media: media,
                    title: title,
                    url: url
                }),
            });

            $('body').append(html);
            var k_dialog_window_id_obj = $('#' + k_dialog_window_id),
                submit = $(k_dialog_window_id_obj).find('#submit-data');

            k_dialog_window_id_obj.find('.k_dialog_close').click(function () {
                $(this).remove('click');
                submit.remove('click');
                k_dialog_window_id_obj.remove();
            });

            submit.click(function (e) {
                e.preventDefault();
                var form_data = $(k_dialog_window_id_obj).find('#applyForm').serialize();
                if (!_v($(k_dialog_window_id_obj).find('#applyForm'))) {
                    return;
                }
                $('.animate-rotate').removeClass('none');

                $.post(url, form_data, function (replayData) {
                    $('.animate-rotate').addClass('none');
                    if (replayData.status == 0) {
                        k_dialog_window_id_obj.remove();
                        var media = media || 1;

                        _success(media == 1 ? '报名成功' : '注册成功');
                    } else {
                        _tips(replayData.message || '系统错误');
                    }
                }, 'json');
            });

        });
    }

    var _submit_url_ = 'apply.php';
    _submit('#k_dialog_table_window2', '科技公园媒体入驻申请', 2, _submit_url_);
    _submit('#k_dialog_table_window1', '科技公园展商入驻申请', 1, _submit_url_);

    $('body').on('keyup', 'input[class="text"]', function () {
        _tips2($(this), false, true);
    });



    if(windowWigth<768){
        $('.inner-title').text('商家入住申请');
    }
});





