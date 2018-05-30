define(['jquery'], function ($) {
	let eventsList = [
		'mousewheel',
		'DOMMouseScroll',
		'touchmove'
	]

	function preventDefault(e) {
		e.preventDefault()
		e.stopPropagation()
		return false
	}

	function stopScrollEvent(obj) {
		let dom = obj || window
		eventsList.forEach(function (item) {
			dom.addEventListener(item, preventDefault, {passive: false})
		})
		return function () {
			eventsList.forEach(function (item) {
				dom.removeEventListener(item, preventDefault)
			})
		}
	}

	return {
		stopScrollEvent: stopScrollEvent
	}
})