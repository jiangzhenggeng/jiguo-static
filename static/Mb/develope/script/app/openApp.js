/**
 +----------------------------------------------------------
 //文章页跳转app
 +----------------------------------------------------------
 */

define(['jquery', 'layer'], function ($, layer) {
	return {
		init: function () {
			var appDownloadShow1 = $('.show-app-down-warp').css('bottom', -60);
			var appDownloadShow2 = $('.app-down-touch-show');
			if (!appDownloadShow2.length) {
				appDownloadShow2 = $('.event-opera')
			}
			var _bottom = appDownloadShow2.height() + 10;
			var start = 0, end = 0;

			setTimeout(function () {
				appDownloadShow1.animate({
					bottom: _bottom
				});
			});

			// var _touchstartTimer_ = null;
			// window.addEventListener('touchstart', function (e) {
			// 	start = e.touches[0].clientY;
			// 	_touchstartTimer_ = null;
			// }, false);
			//
			// window.addEventListener('touchmove', function (e) {
			// 	if ( Math.abs(end - start) >15 && !_touchstartTimer_) {
			// 		appDownloadShow1.stop(false, true).animate({
			// 			bottom: -60
			// 		});
			// 		_touchstartTimer_ = true;
			// 	}
			// }, false);
			//
			// window.addEventListener('touchend', function (e) {
			// 	setTimeout(function () {
			// 		if ( Math.abs(end - start) >15 ) {
			// 			appDownloadShow1.stop(false, true).animate({
			// 				bottom: _bottom
			// 			});
			// 		}
			// 	}, 500)
			// }, false);

			//分享
			$('[data-article-share]').click(function () {
				var shareTpl = $('#share-tpl');
				if (shareTpl.length) {
					var id = layer.open({
						type: 1,
						anim: 'up',
						shade: 'background-color: rgba(0,0,0,.3)',
						style: 'position:fixed; bottom:0;left:0; width: 100%; width: 100%!important;',
						content: shareTpl.html(),
						success: function (l, i) {
							setTimeout(function () {
								$(l).find('.share-query').attr('onclick', 'layer.close(' + id + ')');
							}, 100);
						}
					});
				}
			});
		}
	}
});