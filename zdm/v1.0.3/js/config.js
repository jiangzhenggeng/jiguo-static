/**
 * Created by jiangzg on 2017/10/23.
 */

var js = document.scripts, script, jsPath;
for (var i = 0; i < js.length; i++) {
	if (js[i].src && js[i].src.indexOf('js/require.js') > 0) {
		script = js[i];
		jsPath = script.src;
		break;
	}
}

require.config({
	baseUrl: jsPath.substring(0, jsPath.lastIndexOf("/") + 1),
	paths: {
		'cropper': 'cropper/cropper',
	},
	shim: {
		'cropper': {
			deps: ['css!cropper/cropper']
		}
	}
});