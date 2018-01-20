(function () {
	var tpl = '<div class="snow-container" style="display: none">\n' +
		'\t<div class="snow foreground"></div>\n' +
		'\t<div class="snow foreground layered"></div>\n' +
		'\t<div class="snow middleground"></div>\n' +
		'\t<div class="snow middleground layered"></div>\n' +
		'\t<div class="snow background"></div>\n' +
		'\t<div class="snow background layered"></div>\n' +
		'\t</div>'
	var snow = document.createElement('div')
	snow.innerHTML = tpl
	document.getElementsByTagName('body')[0].appendChild(snow)
})()
