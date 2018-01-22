
define([
	'jquery',
	'http://cdn.jiguo.com/static/search-animate/fireworks/jquery.fireworks.js',
	'css!http://cdn.jiguo.com/static/search-animate/fireworks/fireworks.css',
	'css!http://cdn.jiguo.com/static/search-animate/snow/style.css',
	'http://cdn.jiguo.com/static/search-animate/snow/index.js'
], function ($) {
	var submitBtn = $('[data-search-page-submit]')
	var keywordInput = $('[name=keyword]')
	var body = $('body')

	submitBtn.click(function (e) {
		var keywordInputVal = ''
		keywordInput.each(function () {
			if (!keywordInputVal) {
				keywordInputVal = $(this).val()
			}
		})

		var regxMatch = keywordInputVal.match(/cmd:(.*)/i)
		if (!regxMatch || !regxMatch[1]) {
			return
		}
		e.preventDefault()
		var cmds = regxMatch[1].split('|')
		for (var i = 0; i < cmds.length; i++) {
			execCommand(cmds[i])
		}
		var $this = $(this)
		$this.val('执行成功').html('执行成功')
		setTimeout(function () {
			$this.val('搜索').html('搜索')
		},3000)
	})

	function execCommand(cmd) {


		if (cmd.indexOf('关闭下雪') > -1) {
			$('.snow-container').hide(360)
		} else if (cmd.indexOf('下雪') > -1) {
			$('.snow-container').show(360)
		}

		if (cmd.indexOf('抖动') > -1) {
			body.addClass('opr-texiao-shake')
			setTimeout(function () {
				body.removeClass('opr-texiao-shake')
			}, 2200)
		}
		if (cmd.indexOf('跳动') > -1) {
			body.addClass('opr-texiao-jump')
			setTimeout(function () {
				body.removeClass('opr-texiao-jump')
			}, 2200)
		}

		if (cmd.indexOf('超级旋转') > -1) {
			body.addClass('opr-texiao-rotate-plus')
			body.css({
				transformOrigin: '50% ' + $(window).height() / 2 + 'px'
			})
			setTimeout(function () {
				body.removeClass('opr-texiao-rotate-plus')
			}, 3200)
		} else if (cmd.indexOf('旋转') > -1) {
			body.addClass('opr-texiao-rotate')
			body.css({
				transformOrigin: '50% ' + $(window).height() / 2 + 'px'
			})
			setTimeout(function () {
				body.removeClass('opr-texiao-rotate')
			}, 3200)
		}

		if (cmd.indexOf('翻转') > -1) {
			body.addClass('opr-texiao-rotateY')
			setTimeout(function () {
				body.removeClass('opr-texiao-rotateY')
			}, 5200)
		}

		if (cmd.indexOf('关闭全屏') > -1) {
			var element = document.documentElement
			if (element.exitFullscreen) {
				element.exitFullscreen();
			} else if (element.msExitFullscreen) {
				element.msExitFullscreen();
			} else if (element.mozCancelFullScreen) {
				element.mozCancelFullScreen();
			} else if (element.webkitCancelFullScreen) {
				element.webkitCancelFullScreen();
			}
		} else if (cmd.indexOf('全屏') > -1) {
			var element = document.documentElement
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullScreen();
			}
		}

		if (cmd.indexOf('烟花') > -1) {
			var fireworks = $('#fireworks-htmleaf-container')
			if(!fireworks.length){
				body.append('<div id="fireworks-htmleaf-container"></div>')
				fireworks = $('#fireworks-htmleaf-container')
			}
			fireworks.fireworks({
				sound: false,
				opacity: 0.9,
				width: '100%',
				height: '100%'
			});
		}
	}
})