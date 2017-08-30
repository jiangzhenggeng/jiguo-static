/**
 * Created by jiangzgg on 17/5/11.
 */

define([
    'jquery',
    'layer',
    'app/common',
    'lib/html2canvas',
    'app/tplEngine'
],function (
    $,layer,common,_,tplEngine
) {
    common.upImage('wxcode_share_pic','wxcode_share_pic',false);

    function dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], {type: mimeString});
    }

    function savaFile(data,filename) {
        var save_link=document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href=data;
        save_link.download=filename;
        var event=document.createEvent('MouseEvents');
        event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null);
        save_link.dispatchEvent(event);
    }

    function _init2(callback) {
        var wrap=document.getElementById('wxcode-share-inner'),
            w = wrap.offsetWidth,
            h = wrap.offsetHeight;
        var canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        var context = canvas.getContext("2d");
        var cenX= parseInt($(wrap).parent().css('left'));
        var cenY= parseInt($(wrap).parent().css('top'));
        context.translate(-cenX,-cenY);

        html2canvas(wrap, {
            canvas:canvas,
            onrendered: function(canvas) {
                var imageData = canvas.toDataURL("image/png",1).replace("image/jpeg",'image/octet-stream'),
                    filename = new Date().getDate()+String(Math.random()).replace('0.','')+'.png';

                //savaFile(imageData,filename);

                var fd = new FormData();
                var blob = dataURItoBlob(imageData);
                fd.append('file', blob,filename);
                common.upload(fd,$('#Z-image-up-wxcode_share_pic'),'wxcode_share_pic',false,function () {

                });
                (callback||function () {})();
            }
        });
    }

    function throttle(method,context){
        method.tId && clearTimeout( method.tId );
        method.tId = setTimeout(function(){
            method.call(context);
        },0);
    }

    function _init() {
        var fengmianObj = $('#Z-image-up-fengmian'),
            cacheFn = tplEngine.init( $('#wxcode-share-inner-tpl').html() ),
            tplBox = $('#wxcode-share-inner'),
            sharePicUl = $('#Z-image-up-wxcode_share_pic'),
            sharePicUlOffsetTop = sharePicUl.offset().top;

        var freeObj = $('#add-event-free-block');
        var payObj = $('#add-event-pay-block');
        var create = false;

        var throttleFn = function () {
            if(create){
              return;
            }
            var tips = layer.msg('正在生成小程序分享图',{
              time:999999
            });
            create = true;
            setTimeout(function () {
              create = false;
            },5000);

            var btn_text,left_top,left_bottom,right_top,right_bottom;

            btn_text = '';
            left_top = '';
            left_bottom = '';
            right_top = '';
            right_bottom = '';

            //仅仅免费试用
            if(
                freeObj.find('input[type=hidden]').length>5 &&
                payObj.find('input[type=hidden]').length<=0
            ){

              btn_text = '立即申请';
              left_top = freeObj.find('input[name*="buying_name"]').val();
              right_top = '限'+freeObj.find('input[name*="buying_num"]').val()+freeObj.find('input[name*="quantifier"]').val();
              left_bottom = '免费';
              right_bottom = '原价 ￥' + freeObj.find('input[name*="buying_price"]').val();
              //专享
              if(
                  freeObj.find('input[name*="all_user"]').val()==1 ||
                  freeObj.find('input[name*="all_platform"]').val()==1
              ){
              }else{
              }
            }
            //折扣个数大于1
            else if(payObj.find('.Z-card-title').length>1){
              btn_text = '立即试用';
              var oTb = payObj.find('.Z-card-list-box').first(),
                  discount = oTb.find('input[name*="discount"]').val(),total = 0;

              payObj.find('.Z-card-list-box').each(function () {
                //非app专享
                if( $(this).find('input[name*="[pc]"]').val()==1 && $(this).find('input[name*="[h5]"]').val()==1){
                  var val = $(this).find('input[name*="discount"]').val();
                  if(val && discount>val){
                    oTb = $(this);
                    discount = val;
                  }
                  var num = parseInt($(this).find('input[name*="\[model\]"][name*="\[buying_num\]"]').val());
                  if(!isNaN(num) && num>0 ){
                    total += num;
                  }
                }
              });
              if(total>0){
                discount = String(discount||'').replace(/\.0+$/,'');
                left_top = discount+'折试用起';
                right_top = '限'+total+oTb.find('input[name*="quantifier"]').val();
                left_bottom = '￥'+oTb.find('.yan-number.Z-red').html();
                right_bottom = '原价 ' + oTb.find('.card-number .Z-gray').html();
              }

            } else{
              //非app专享
              if( payObj.find('input[name*="[pc]"]').val()==1 && payObj.find('input[name*="[h5]"]').val()==1 ) {
                btn_text = '立即试用';
                var oTb = payObj.find('.Z-card-list-box').first(),
                    discount = String(oTb.find('input[name*="discount"]').val() || '').replace(/\.0+$/, '');
                left_top = discount + '折试用';
                right_top = '限' + oTb.find('input[name*="\[buying_num\]"]').filter(function () {
                  if( $(this).attr('name').indexOf('model')==-1){
                    return true;
                  }
                  return false;
                }).val() + oTb.find('input[name*="quantifier"]').val();
                left_bottom = '￥' + oTb.find('.yan-number.Z-red').html();
                right_bottom = '原价 ' + oTb.find('.card-number .Z-gray').html();
              }
            }

            if(!btn_text||!left_top||!left_bottom||!right_top||!right_bottom){
              $('#Z-image-up-wxcode_share_pic').html('<input type="hidden" name="wxcode_share_pic" value="">');
              layer.msg('没有小程序分享图');
              return;
            }else{
              var html = cacheFn({
                share_cover:fengmianObj.find('input[name="fileid"]').val(),
                btn_text: btn_text,
                left_top:left_top,
                left_bottom:left_bottom,
                right_top:right_top,
                right_bottom:right_bottom
              });
              tplBox.html( html ).find('img').load(function () {
                _init2(function () {
                  layer.close(tips);
                  create = false;
                });
              });
            }
        };

        $('body').on('click','[data-create-wxcode-share-pic]',function () {
          if(  !$('#Z-image-up-fengmian').find('img').val() ){
            throttle(throttleFn,this);
          }else{
            layer.msg('请上传封面图');
          }
        });
    }

    return{
        init:_init,
    }
});
