/**
 +----------------------------------------------------------
 // ipad适配
 +----------------------------------------------------------
 */

define(['jquery'], function ($) {
	function _init() {
		if (!/iPad/.test(window.navigator.userAgent)) {
			return true;
		}
		$('html').css('overflow-x', 'hidden')
		$(window).unbind('orientationchange');
		$(window).bind('orientationchange', function (e) {
			var windW = 1080
			var scale = (window.outerWidth - 40) / windW
			$('.banner').find('.main').css({
				'box-sizing': 'border-box',
				'padding-left': 0,
				'padding-right': 0,
			})
			$('.banner').find('.next-prev').css({
				'min-width': 1080
			})

			$('meta[name=viewport]').remove();
			$('head').append('<meta name="viewport" content="width=' + windW + ',initial-scale=' + scale + ',minimum-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no">');
		}).trigger('orientationchange');
	}

	return {
		init: _init
	}
});
