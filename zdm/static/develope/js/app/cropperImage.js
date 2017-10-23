/**
 * Created by jiangzg on 17/10/20.
 */

define(['jquery', 'cropper', 'layer'], function ($, Cropper, layer) {

	var croppers = null;

	return {
		init: function (dom, options, callback) {
			dom = $(dom).length ? $(dom) : null;

			callback = callback || function (replayData) {
				var item = replayData.result.pop();
				$(this).attr('src', 'http://s1.jiguo.com/' + item.fileid + '/640');
				$(this).closest('li').find('input[type="hidden"]').val(item.fileid);
			};
			options = $.extend(true, {
				boxWidth: 500 + 40 + 150 + 10,
				boxHeight: 500 + 100 + 45,
				aspectRatio: 0.5,
				preview: true
			}, options);
			if (!dom) return;

			if( !dom.data('original-src') ){
				dom.data('original-src',dom.attr('src') );
			}
			var src = dom.data('original-src');
			if( src.match(/https?:\/\/s1\.jiguo\.com\/([\w\-]+)\/?/i) ){
				src = 'http://s1.jiguo.com/' + src.match(/https?:\/\/s1\.jiguo\.com\/([\w\-]+)\/?/i)[1]
			}else{
				src = 'http://zdm.jiguo.com/admin/index/ShowImgTool?url='+encodeURIComponent(src);
			}

			var _this = this;
			var _id = 'id-' + String(Math.random()).replace('.', '');
			var preview = 'preview-' + _id;

			var fn = function () {
				var layerHandler = layer.open({
					title: '图片裁剪',
					type: 1,
					move: true,
					btn: ['确定', '取消'],
					area: [options.boxWidth + 'px', options.boxHeight + 'px'],
					content: '\
						<style>.note-warp.event-page-notice {display: flex;flex-direction: row;}</style>\
						<style>.layui-layer-content{border-bottom: 1px solid #eee;}#warp-' + _id + ' img{display: block};</style>\
            <div class="note-warp event-page-notice" id="warp-' + _id + '">\
            	<div style="flex: 1;width: 500px;height: 500px;"><img id="' + _id + '" src="' + src + '"/></div>\
							<div style="width:150px;height:' + (150 / options.aspectRatio) + 'px;margin-left: 10px;overflow: hidden;box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25), 0 0 0px 1px rgba(0, 0, 0, 0.11)" id="' + preview + '"></div>\
            </div>',
					yes: function (index, layero) {
						if (!croppers || croppers.dataUploading) return;
						croppers.dataUploading = true;

						var layerTimer2 = layer.msg('数据上传中...', {
							time: 9999999999
						});

						var canvas = croppers.getCroppedCanvas();
						canvas.toBlob(function (blob) {
							var formData = new FormData();

							formData.append('file0', blob, _id + '.jpg');

							var upUrl = 'http://zdm.jiguo.com/admin2/ajax/multipleupload';
							$.ajax(upUrl, {
								method: "POST",
								data: formData,
								processData: false,
								contentType: false,
								dataType: 'json',
								success: function (replayData) {
									if (replayData.resultCode == 0) {
										layer.close(layerHandler);
										callback.call(dom, replayData);
									} else {
										layer.msg(replayData.errorMsg || '上传错误', {
											time: 1500
										});
									}
								},
								error: function () {
									layer.msg('上传错误', {
										time: 1500
									});
								},
								complete: function () {
									croppers.dataUploading = false;
									layer.close(layerTimer2);
								}
							});
						});

					},
					success: function () {
						_this.createCropper($('#' + _id), options, callback, {
							preview: preview
						});
					}
				});
			}
			var _img = new Image();
			_img.onload = function () {
				layerTimer && layer.close(layerTimer)
				fn();
			};
			var layerTimer = layer.msg('数据加载中...', {
				time: 9999999999
			});
			_img.src = src;
		},
		createCropper: function (dom, options, callback, bop) {
			var preview = '#' + bop.preview;
			var cropper = new Cropper($(dom).get(0), {
				aspectRatio: options.aspectRatio,
				//自动裁剪区域最大
				autoCropArea: 1,
				//不允许调整裁剪框
				// cropBoxResizable: false,
				//不允许缩放图片
				// scalable: false,
				//不允许移动图片
				movable: false,
				//不允许鼠标滚动缩放
				// mouseWheelZoom: false,
				ready: function () {
					if (options.preview) {
						var clone = this.cloneNode();
						clone.className = ''
						clone.style.cssText = (
							'display: block;' +
							'width: 100%;' +
							'min-width: 0;' +
							'min-height: 0;' +
							'max-width: none;' +
							'max-height: none;'
						);
						this.previewDom = $(preview);
						this.previewDom.each(function () {
							$(this).html(clone.cloneNode());
						});
					}
				},

				crop: function (e) {

					var data = e.detail;
					var cropper = this.cropper;
					var imageData = cropper.getImageData();

					if (imageData) {
						var set = false;
						if (data.y < 0) {
							data.y = 0;
							set = 'y1';
						}
						if (data.y + data.height > imageData.naturalHeight) {
							data.y = imageData.naturalHeight - data.height;
							set = 'y2';
						}

						if (data.x < 0) {
							data.x = 0;
							set = 'x1';
						}
						if (data.x + data.width > imageData.naturalWidth) {
							data.x = imageData.naturalWidth - data.width;
							set = 'x2';
						}

						if ( data.height > imageData.naturalHeight) {
							data.height = imageData.naturalHeight;
							set = 'h';
						}

						if ( data.width > imageData.naturalWidth) {
							data.width = imageData.naturalWidth;
							set = 'w';
						}

						if (set) {
							cropper.timer && clearTimeout(cropper.timer)
							cropper.timer = setTimeout(function () {
								set = false;
								cropper.setData(data);
							}, 30);
							return;
						}
					}

					if (options.preview) {
						var previewAspectRatio = data.width / data.height;

						this.previewDom.each(function () {
							var elem = $(this).get(0);
							var previewImage = elem.getElementsByTagName('img').item(0);
							var previewWidth = elem.offsetWidth;
							var previewHeight = previewWidth / previewAspectRatio;
							var imageScaledRatio = data.width / previewWidth;

							elem.style.height = previewHeight + 'px';
							previewImage.style.width = imageData.naturalWidth / imageScaledRatio + 'px';
							previewImage.style.height = imageData.naturalHeight / imageScaledRatio + 'px';
							previewImage.style.marginLeft = -data.x / imageScaledRatio + 'px';
							previewImage.style.marginTop = -data.y / imageScaledRatio + 'px';
						});
					}
				}
			});

			croppers = cropper;

		}
	};

});


