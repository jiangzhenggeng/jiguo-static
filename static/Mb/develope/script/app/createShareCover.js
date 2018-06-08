/**
 * Created by jiangzg on 2017/5/4.
 */
define(['jquery', 'app/unitTool'], function ($, unitTool) {
	//判断是否是微信浏览器的函数
	function isWeiXin() {
		//window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
		var ua = window.navigator.userAgent.toLowerCase();
		//通过正则表达式匹配ua中是否含有MicroMessenger字符串
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	}

	function promisify() {
		return function (options) {
			options = options || {}
			return new Promise(function (resolve, reject) {
				var img = new Image()
				img.src = '/api/html/ShowImgTool?url=' + encodeURIComponent(options.src)
				img.onload = function () {
					resolve(img)
				}
				img.onerror = function () {
					reject(img)
				}
			})
		}
	}

	function rpxTopx(rpx) {
		return rpx * 3
	}

	function createShareCover(erweimaUrl) {
		return new Promise(function (resolve, reject) {
			var idC = 'share-canvasId' + String(Math.random()).replace('.', '')

			$('body').prepend('<canvas id="' + idC + '" width="' + rpxTopx(311) + '" height="' + rpxTopx(420) + '" style="position: fixed;left: -99999px"/>')
			var canvas = document.querySelector('#' + idC)
			const ctx = canvas.getContext("2d")
			ctx.fillStyle = '#ffffff'
			ctx.fillRect(0, 0, rpxTopx(311), rpxTopx(420))

			promisify()({
				src: 'https://s2.jiguo.com/46f9f0bb-9ade-465b-91b7-e7e15feac725'
			}).then(function (res) {
				ctx.drawImage(res, 0, 0, rpxTopx(311), rpxTopx(420))
				return promisify()({
					src: erweimaUrl //|| 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQEl8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAySjFlLWs5bzlhV1QxcHdPME5yYzgAAgRgJRlbAwQAjScA'
				})
			}).then(function (res) {
				ctx.drawImage(res, rpxTopx(102), rpxTopx(284), rpxTopx(106), rpxTopx(106))
				return promisify()({
					src: 'https://s2.jiguo.com/3bd66db1-a358-4f91-b78d-84e36a36b926'
				})
			}).then(function (res) {
				ctx.drawImage(res, rpxTopx(102 + 40), rpxTopx(284 + 40), rpxTopx(25), rpxTopx(25))
			}).then(function () {
				var id = 'share-canvasId' + String(Math.random()).replace('.', '')
				var strDataURI = canvas.toDataURL('image/png')
				var style = 'position: fixed;z-index: 9;left: 0;top: 0;width:100%;height:100%;'
				$('body').prepend('<div id="'+id+'"><div style="' + style + 'background: rgba(0,0,0,0.5)"><img src="' + strDataURI + '" style="width: 83%;margin: auto;display: block;margin-top: 30px;"/><a href="' + strDataURI + '" download="tupian" style="background: #F66039;height: 40px;width: 83%;color: #fff;font-size: 14px;line-height: 40px;text-align: center;display: block;margin: auto;margin-top: 30px">' + (isWeiXin() ? '长按图片识别二维码' : '保存二维码至相册') + '</a></div>' +
					'' +
					'<div id="' + id + '-close" style="background:#fff;box-shadow: 0 0 1px 1px #9a9a9a;border-radius: 50%;text-align: center;line-height: 24px;width: 24px;height: 24px;color: #ababab;position: fixed;right: 20px;top: 20px;z-index: 9;box-sizing: content-box;">x</div></div>')
					.on('click', '#' + id + '-close', function () {
						$('#' + id).remove()
					})

			}).catch(function (res) {
				reject(res)
			})
		})
	}

	function showFirstApplySempl() {
		return new Promise(function (resolve) {
			var id = 'share-canvasId' + String(Math.random()).replace('.', '')
			var str = '\
			<div id="' + id + '" style="background: rgba(0,0,0,0.5);left: 0;top: 0;width: 100%;height: 100%;z-index: 5;position: fixed;">\
				<div style="width:80%;background: #fff;border-radius:5px;position: absolute;left: 50%;top: 50%;transform: translateY(-50%) translateX(-50%);">\
					<div><img style="width: 85px;margin: 20px auto;display: block;" src="http://s1.jiguo.com/056a13fe-f162-4f3f-979b-75429b749223"/></div>\
					<div style="padding: 30px 30px;padding-top:5px;color: #999;font-size: 13px">\
						<p>“一键申请”玩法无需填写申请理由，试用名额将根据原创投稿质量、活跃度（申请记录、文章评论...）等维度筛选。</p>\
					</div>\
					<div id="' + id + '-btn" style="color: #FF5D44;text-align: center;line-height: 40px;border-top: 1px solid #ececec;">知道啦，继续申请</div>\
				</div>\
			</div>\
		\
			'
			$('body').append(str)
			$('body').on('click', '#' + id + '-btn', function () {
				resolve()
			}).on('click', '#' + id + '-close', function () {
				$('#' + id).remove()
			})
		})
	}

	function toApplySemplExec(jQueryDom) {
		var mid = jQueryDom.attr('data-mid')
		$.get('/api/event/apply', {
			mid: mid
		}, function (replayData) {
			if (replayData.resultCode == 0) {
				window.location = '/mb/event/apply/mid/' + mid + '.html?action=share-v2&attention=' + replayData.result.is_follow_service + '&erweimaUrl=' + encodeURIComponent(replayData.result.weixin_url)
			} else {
				unitTool.msg(replayData.errorMsg || '申请错误')
			}
		}, 'json')
	}

	return {
		createShareCover: createShareCover,
		showFirstApplySempl: showFirstApplySempl,
		toApplySemplExec: toApplySemplExec,
	}
})

























