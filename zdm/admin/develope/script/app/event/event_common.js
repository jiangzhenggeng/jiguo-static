define([
    'app/common'
],function (common) {

    //上传多图
    event.initUploadifyFn('#Z-uploadify-box','Z-uploadify-box','Z-uploadify-file-btn',null,{
        'onUploadSuccess':function(file,data,response){
            data = $.parseJSON(data);
            var html = '<li>' +
                '<img src="'+data.url+'">' +
                '<input type="hidden" name="event[img_fileid][]" value="'+data.fileid+'">' +
                '<div class="Z-delete" onclick="deleteProductImageNow(this)"></div>' +
                '</li>';
            $('#'+this.settings.queueID).find('#'+file.id).replaceWith(html);

        }
    });

    //上传banner图
    event.initUploadifyFn('#Z-uploadify-banner','Z-uploadify-banner','Z-uploadify-banner-btn',null,{
        'onUploadSuccess':function (obj,data,respone) {
            data = $.parseJSON(data);
            data.url = data.url.replace('/640','/original');
            var html = '<li><img src="'+data.url+'">\
                    <input type="hidden" name="event[banner_fileid]" value="'+data.fileid+'"></li>';
            $('#'+this.settings.queueID).html(html);
        },
        multi:false
    });


    //上传封面图图
    event.initUploadifyFn('#Z-uploadify-fengmian','Z-uploadify-fengmian','Z-uploadify-fengmian-btn',null,{
        'onUploadSuccess':function (obj,data,respone) {
            data = $.parseJSON(data);

            var html = '<li><img src="'+data.url+'">' +
                '<input type="hidden" name="event[fileid]" value="'+data.fileid+'">' +
                '</li>';
            $('#'+this.settings.queueID).html(html);
        },
        multi:false
    });

    //初始化日历选择器
    common.dateUi('#deadline','#endtime');
    common.dateUi('#starttime');

    /*********************
     //初始化编辑器
     *********************/
    var _editor_desciption = event.createEditerJiguo('brief');
    var _editor_detail = event.createEditerJiguo('detail');
});