define([
    'require',
    'jquery',
    'lib/tplEngine',
    'ueditor',
    'ueditor.config_event',
    'uploadify',
],function (require,$,TplEngine){
    
    function eventFactory() {}

    eventFactory.prototype = {
        /**
         * 获取活动订单数量,报告数量等
         * @param selecter
         */
        getEventBlogOrderDitailList: function (selecter,tplBox) {
            function __getData(elem) {
                $.get(window.URL['eventEventInfo'],{
                    id:elem.attr('data-eventid')
                },function (replayData) {
                    elem.find('[data-event-list-warp]').html(tplFnCache({data:replayData.data}));
                },'json');
            }
            var tplFnCache = TplEngine.newTplEngine($(tplBox).html());
            $(selecter).find('[data-event-list]').each(function (elem,index) {
                __getData($(this));
            });
        }
        ,
        initUploadifyFn : function (selector,boxid,btnid,coverid,options) {
            $(selector).uploadify($.extend({
                'formData'     : {
                    'timestamp' : '1467180227',
                    'token'     : '50638c1f0d92428c0c0c5b0e55abdfbb',
                    'type'     : 'jiguo'
                },
                itemTemplate:'<li id="${fileID}" class="item-li-list">' +
                '<a href="javascript:$(\'#${instanceID}\').uploadify(\'cancel\', \'${fileID}\')">&times;</a>' +
                '<img style="margin-top:40px;" src="'+window.URL['uploadifyUploadLoadImgUrl']+'">' +
                '</li>',
                width:148,
                height:92,
                'buttonText':'+',
                'queueID':boxid,
                'id'	 :btnid,
                'swf'      : window.URL['uploadifyUploadSwfUrl'],
                'uploader' : window.URL['uploadifyUploadUrl'],
                'onUploadSuccess':function(file,data,response){
                    data = $.parseJSON(data);

                    var html = '<li>' +
                        '<img src="'+data.url+'">' +
                        '<input type="hidden" name="product[pic][]" value="'+data.url+'">';
                    if(coverid!=null){
                        html += '<div class="Z-delete" onclick="deleteProductImageNow(this)"></div>' +
                            '<div class="Z-cover-setting" onclick="settingProductImageCover(&quot;#'+coverid+'\&quot;,this)">封面</div> ' ;
                    }
                    html += '</li>';

                    $('#'+this.settings.queueID).find('#'+file.id).replaceWith(html);
                },
                removeCompleted:false,
                preserve_relative_urls: true,
            },options));

        },


        /**
         * 创建极果试用编辑器
         * @param id
         * @returns {*}
         */
        createEditerJiguo:function (id){
            var _editor = UE.getEditor(id,{
                serverUrl:window.URL['editorUploadUrlJiGuo'],
                onready:function(){
                    var tipsHtml = '<div class="tooltip" style="display: none;"><div class="tooltip_inner"></div><i class="tooltip_arrow"></i></div>';
                    $('body').append(tipsHtml);
                    var tooltip = jQuery('.tooltip');
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
        },

        /**
         * 强制添加
         */
        mandatoryAddEventUser:function (eventid){
            var scrollId = randomID();
            layer.open({
                title: '强制添加',
                scrollbar:false,
                area:['660px','500px'],
                content: '\
                <div class="layer-event-add-user-search">\
                    <spa>用户昵称或UID :</spa>\
                    <input placeholder="必须填入用户昵称或UID" id="key'+scrollId+'" class="Z-input Z-w-370">\
                    <button id="search-btn'+scrollId+'" type="button" class="Z-btn Z-w-110 Z-right">查询</button>\
                </div>\
                <div id="'+scrollId+'" class="layer-event-add-user-list">\
                    <ul></ul>\
                </div>',

                success:function (layero, index) {
                    var scrollBox = layero.find('#'+scrollId),
                        scrollBoxUl = scrollBox.find('ul'),
                        is_loading = true,
                        p = 0,
                        html = '';

                    window._getQiangzhiData = function (fille) {
                        is_loading = false;
                        $.get('/admin/event/GetUserInfo',{
                            p:p,
                            size:14,
                            username:$('#key'+scrollId).val(),
                            id:eventid
                        },function (replayData) {

                            replayData = replayData.data;

                            html = '';
                            for(var i in replayData){
                                html += '\
                                    <li>\
                                        <div class="Z-user-face-box">\
                                            <img src="http://pic.jiguo.com/200717/0/avatar'+replayData[i].uid+'/50x50">\
                                        </div>\
                                        <span class="layer-name">'+replayData[i].username+'</span>';
                                if(replayData[i].pass==1){
                                    html += '<a class="layer-query already-add"></a>';
                                }else {
                                    html += '<a class="layer-query" onclick="mandatoryAddEventUserQuery('+eventid+','+replayData[i].uid+',this)"></a>';
                                }

                                html += '</li>';
                            }
                            if(fille){
                                if(html==''){
                                    html = '<span class="Z-red">没有数据...</span>';
                                }
                                scrollBoxUl.html(html);
                            }else {
                                scrollBoxUl.append(html);
                            }
                            if(replayData.length){
                                p++;
                                is_loading = true;
                            }else {
                                is_loading = false;
                            }
                        },'json');
                    }

                    layero.find('#'+scrollId).scroll(function () {
                        if(is_loading && scrollBoxUl.height()<scrollBox.scrollTop()+scrollBox.height()+40){
                            window._getQiangzhiData();
                        }else{
                            return;
                        }
                    });

                    $('#key'+scrollId).keypress(function () {
                        p=0;
                        is_loading = true;
                        window._getQiangzhiData(true);
                    });

                    $('#search-btn'+scrollId).click(function () {
                        p=0;
                        is_loading = true;
                        window._getQiangzhiData(true);
                    });

                    window._getQiangzhiData();
                }

            });
        },

        /**
         * 强制添加2
         */
        mandatoryAddEventUserQuery:function (eventid,uid,obj){
            eventUserApplyListPass(null,eventid,uid,'yes',obj);
        },

        /**
         * 点击通过按钮
         * @param selecter
         */
        eventUserApplyListPass:function (selecter,id,uid,constraint,obj) {
            if(!constraint) constraint = '';
            var time = 1000;

            layer.prompt({
                title:'填写押金'
            },function(yajin){
                if(!/^(\d+)|(\d+\.\d+)$/.test(yajin.toString())){
                    layer.msg('押金填写错误');
                    return;
                }
                var win_id = new_alert('处理中',200000);
                $.get(window.URL['eventPassPublish'],{
                    id:id,
                    uid:uid,
                    deposit:yajin,
                    constraint:constraint
                },function (replayData) {
                    new_alert.close(win_id);
                    if(replayData.status==0){
                        new_alert(replayData.message,time);
                        if(selecter){
                            $(selecter).find('.apply-list-query').html('<span class="Z-gray">已通过</span>');
                            window.location.reload();
                        }
                        if(obj)
                            $(obj).addClass('already-add');

                    }else if(typeof replayData.message!='undefined'){
                        new_alert(replayData.message,time);
                    }else {
                        new_alert('系统错误',time);
                    }
                },'json');
            });
        },


        /**
         * 取消用户资格
         * @param selecter
         * @param uid
         * @param obj
         */
        deleteEventUserApplyListPass: function (eventid,uid,obj) {

            layer.confirm('确定取消试用资格吗？', {
                btn: ['确定','关闭'] //按钮
            }, function(){
                var win_id = new_alert('处理中',200000),
                    time = 1000;
                $.get(window.URL['eventCancelEvent'],{
                    id:eventid,
                    uid:uid
                },function (replayData) {
                    new_alert.close(win_id);
                    if(replayData.status==0){
                        new_alert(replayData.message,time);
                        window.location.reload();
                    }else if(typeof replayData.message!='undefined'){
                        new_alert(replayData.message || '系统错误',time);
                    }else {
                        new_alert('系统错误',time);
                    }
                },'json');
            });
        },

        /**
         * 删除活动
         * @param eventid
         */
        deleteEventList:function (eventid) {
            callAllEventList(eventid,'你确定删除该活动吗,删除不可恢复?',['删除','取消']);
        },
        /**
         * 上线活动
         * @param eventid
         */
        upDownEventList:function (eventid) {
            callAllEventList(eventid,'你确定上线该活动吗?',['上线','取消'],window.URL['eventUpstart']);
        },
        /**
         * 下线活动
         * @param eventid
         */
        DownEventList:function (eventid) {
            callAllEventList(eventid,'你确定下线该活动吗?',['下线','取消'],window.URL['eventUpstart']);
        },
        /**
         * 设置头条
         * @param eventid
         */
        setEventListTouTiao:function (eventid) {
            callAllEventList(eventid,'你确定设置该活动为头条吗?',['设置','取消'],window.URL['eventHead']);
        },


        /**
         * 删除活动
         * @param eventid
         */
        callAllEventList:function (eventid,message,btn,url) {
            layer.confirm(message, {
                btn: btn //按钮
            }, function(){
                $.get(url || window.URL['eventDelete'],{
                    id:eventid
                },function (replayData) {
                    if(replayData.status==0){
                        layer.msg(replayData.message);
                        window.location.reload();
                    }else if(typeof replayData.message!='undefined'){
                        layer.msg(replayData.message || '系统错误');
                    }else {
                        layer.msg('系统错误');
                    }
                },'json');
            });
        },


        /**
         * 活动关联产品,获取产品列表
         */
        getProductListLinkEvent:function (){
            var scrollId = randomID();
            var w_id = layer.open({
                title: '产品列表',
                scrollbar:false,
                area:['610px','480px'],
                content: '\
                <div class="layer-event-link-product-search">\
                    <spa>关键词:</spa>\
                    <input id="key'+scrollId+'" class="Z-input Z-w-370">\
                    <button id="search-btn'+scrollId+'" type="button" class="Z-btn Z-w-110 Z-right">搜索</button>\
                </div>\
                <div id="'+scrollId+'" class="layer-event-link-product-list">\
                    <ul></ul>\
                </div>',
                success:function (layero, index) {
                    var scrollBox = layero.find('#'+scrollId),
                        scrollBoxUl = scrollBox.find('ul'),
                        is_loading = true,
                        p = 0,
                        html = '';

                    window._getData = function (fille) {
                        is_loading = false;
                        $.get(window.URL['eventGetproduct'],{
                            p:p,
                            size:10,
                            name:$('#key'+scrollId).val()
                        },function (replayData) {

                            replayData = replayData.data;

                            html = '';
                            for(var i in replayData){
                                html += '<li>\
                                    <div class="product-pic Z-left">\
                                        <img src="'+replayData[i].fileid.replace('/640','/100x100')+'">\
                                    </div>\
                                    <div class="product-desc">\
                                        <p>'+replayData[i].name+'</p>\
                                        <div><a class="blue" href="http://www.jiguo.com/product/index/'+replayData[i].id+'.html" target="_blank">查看</a><a class="blue" href="javascript:__addLinkProduct__(\''+html_encode(replayData[i].name)+'\','+replayData[i].id+',\''+w_id+'\');">关联</a></div>\
                                    </div>\
                                </li>';
                            }
                            if(fille){
                                if(html==''){
                                    html = '<span class="Z-red">没有数据...</span>';
                                }
                                scrollBoxUl.html(html);
                            }else {
                                scrollBoxUl.append(html);
                            }
                            if(replayData.length){
                                p++;
                                is_loading = true;
                            }else {
                                is_loading = false;
                            }
                        },'json');
                    }

                    layero.find('#'+scrollId).scroll(function () {
                        if(is_loading && scrollBoxUl.height()<scrollBox.scrollTop()+scrollBox.height()+40){
                            window._getData();
                        }else{
                            return;
                        }
                    });

                    $('#key'+scrollId).keypress(function () {
                        p=0;
                        is_loading = true;
                        window._getData(true);
                    });

                    $('#search-btn'+scrollId).click(function () {
                        p=0;
                        is_loading = true;
                        window._getData(true);
                    });

                    window._getData();
                }
            });
        },

        __addLinkProduct__:function (productname,pid,w_id) {
            $('#__addLinkProduct__').html('(1) '+productname+'<input data-goods_id name="event[goods_id]" value="'+pid+'" type="hidden">');
            layer.close(w_id);
        },

        /**
         * 更具产品id载入纤细介绍
         * @param editorObj
         * @private
         */
        __addLinkProductLoadDital__:function (editorObj) {
            var o = $('#__addLinkProduct__').find('input[type=hidden][data-goods_id]');
            if(o.length<=0 || o.val()=='' ){
                layer.alert('请先关联产品',{
                    btn: ['确定']
                });
                return;
            }
            var pid = o.val();
            $.get(window.URL['eventGetProductDetail'],{
                id:pid
            },function (replayData) {
                editorObj.setContent(replayData.data);
            },'json');
        },


        /**
         * 载入模板
         * @param editorObj
         * @private
         */
        __loadTemplateTips__:function (editorObj) {
            $.get(window.URL['eventGetTpl'],function (replayData) {
                editorObj.setContent(replayData.data);
            },'json');
        },
        /**
         * 修改模板
         * @param editorObj
         * @private
         */
        __changeTemplateTips__:function () {
            var editId = randomID(),
                editerObj = null;
            var w_id = layer.open({
                title: '修改模板',
                scrollbar:false,
                btn: ['确定'],
                area:['900px','545px'],
                content: '<textarea id="'+editId+'" style="height:260px;"></textarea>',
                success:function (layero, index) {
                    editerObj = createEditerJiguo(editId);
                    $.get(window.URL['eventGetTpl'],function (replayData) {
                        editerObj.setContent(replayData.data);
                    },'json');
                },
                yes:function () {

                    var c = editerObj.getContent();
                    if(c==''){
                        layer.alert('请先填写模板内容',{
                            btn: ['确定']
                        });
                        return;
                    }
                    $.post(window.URL['eventGetTpl'],{
                        content:c
                    },function (replayData) {
                        editerObj.destroy();
                        setTimeout(function () {
                            layer.close(w_id);
                            if(replayData.status==0){
                                layer.msg('设置成功');
                                return;
                            }
                            layer.msg('设置失败');
                        })
                    },'json');
                }
            });
        },

        /**
         * 表单提交
         * @param formSelecter
         */
        submitEventData:function (formSelecter) {
            if(!formDataValidata(formSelecter)){
                return;
            }

            var time = 3000;
            var tips = new_alert('数据提交中...');
            $.ajax({
                url:$(formSelecter).attr('action'),
                data:$(formSelecter).serialize(),
                dataType:'json',
                type:'post',
                timeout:30000,
                success:function (replayData,status) {
                    if(replayData.status==0){
                        new_alert(replayData.message,time);
                        setTimeout(function () {
                            window.location = $(formSelecter).attr('callurl');
                        },3000);
                        window.close();
                    }else {
                        new_alert('系统错误',time);
                    }
                },
                complete: function(xhr,status){
                    new_close(tips);
                    xhr.responseText = $.parseJSON(xhr.responseText);
                    if(status=='timeout'){
                        new_alert('数据提交超时！',time);
                    } else if(status=='error'){
                        new_alert(xhr.responseText.message,time);
                    }
                }
            });
        },

        /**
         * 表单验证
         */
        formDataValidata :function (formSelecter) {
            formSelecter = $(formSelecter);

            var time = 1000;
            if(formSelecter.find('#title').val().toString().trim()==''){
                new_alert('请填写试用名称',time);
                return;
            }
            if(formSelecter.find('#Z-uploadify-fengmian li').find('[type=hidden]').length<=0){
                new_alert('请上传封面图片',time);
                return;
            }
            if(formSelecter.find('#Z-uploadify-box li').find('[type=hidden]').length<=0){
                new_alert('请上传试用图片',time);
                return;
            }
            if(formSelecter.find('#Z-uploadify-banner li').find('[type=hidden]').length!=1){
                new_alert('请正确上传Banner图,且只能为一张图片',time);
                return;
            }

            var starttime = formSelecter.find('#starttime').val().trim();
            var regExp = new RegExp(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
            if(starttime=='' || !regExp.test(starttime)){
                new_alert('请正确设置报名时间',time);
                return;
            }
            var deadline = formSelecter.find('#deadline').val().trim();
            if(deadline=='' || !regExp.test(deadline)){
                new_alert('请正确设置开始时间',time);
                return;
            }
            var endtime = formSelecter.find('#endtime').val().trim();
            if(endtime=='' || !regExp.test(endtime)){
                new_alert('请正确设置结束时间',time);
                return;
            }
            if(formSelecter.find('#add-event-free-block > .Z-card-list-box:not(.Z-card-list-add)').length<=0){
                new_alert('请添加免费试用卡片',time);
                return;
            }
            if(formSelecter.find('#__addLinkProduct__').find('input[data-goods_id]').val()==''){
                new_alert('请关联产品',time);
                return;
            }
            if(formSelecter.find('#brief').html()==''){
                new_alert('请填写产品介绍',time);
                return;
            }
            if(formSelecter.find('#Z-introduce').html()==''){
                new_alert('请填写活动介绍',time);
                return;
            }
            return true;
        },

        /**
         * 获取活动订单数量,报告数量等
         * @param selecter
         */
        getEventBlogOrderDitailList:function (selecter,tplBox) {

            function __getData(elem) {
                $.get(window.URL['eventEventInfo'],{
                    id:elem.attr('data-eventid')
                },function (replayData) {
                    elem.find('[data-event-list-warp]').html(tplFnCache({data:replayData.data}));
                },'json');
            }
            var tplFnCache = newTplEngine($(tplBox).html());
            $(selecter).find('[data-event-list]').each(function (elem,index) {
                __getData($(this));
            });
        }
    };
    return new eventFactory();
});
