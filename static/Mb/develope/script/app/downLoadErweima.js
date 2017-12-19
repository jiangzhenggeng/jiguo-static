define(['require', 'jquery', 'layer', 'app/tplEngine'], function (require, $, layer, tplEngine) {
	var close_64 = require.toUrl('../../style/ext_img/close_64.svg')
	var erweimaUrl = require.toUrl('../../style/ext_img/qrcode_for_gh_f6020f09743b_430.jpg')

	var _tpl = '<div class="attention-wrap">\n' +
		'        <div class="close" data-attention><img src="' + close_64 + '"/></div>\n' +
		'        <div class="ft16 mb10"><%= title %></div>\n' +
		'        <div>\n' +
		'            <div class="ft12"><%= content %></div>\n' +
		'            <div class="attention-erweima">\n' +
		'                <img src="' + erweimaUrl + '"/>\n' +
		'            </div>\n' +
		'        </div>\n' +
		'    </div>';

	function saveAs(Url) {
		var blob = new Blob([''], {type: 'application/octet-stream'});
		var url = URL.createObjectURL(blob);
		var a = document.createElement('a');
		a.href = Url;
		a.download = Url.replace(/(.*\/)*([^.]+.*)/ig, "$2").split("?")[0];
		var e = document.createEvent('MouseEvents');
		e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		a.dispatchEvent(e);
		URL.revokeObjectURL(url);
	}

	function isWeixin() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	}

	function _downLoadErweima(option) {
		option.close = option.close || function (){}
		var layerOptions = {
			content: tplEngine.init(_tpl, {
				title: option.title,
				content: option.content,
			}),
			skin: 'attention',
			shadeClose: false,
			success: function (l) {
				$(l).find('[data-attention]').click(function () {
					layer.close(layerId)
					option.close()
				})
			}
		}
		if (!isWeixin()) {
			layerOptions.btn = '保存二维码至手机'
			layerOptions.yes = function () {
				saveAs(erweimaUrl);
			}
		}
		var layerId = layer.open(layerOptions);
	}

	return {
		saveAs: saveAs,
		loadErweima: _downLoadErweima,
		isWeixin: isWeixin
	}
})

