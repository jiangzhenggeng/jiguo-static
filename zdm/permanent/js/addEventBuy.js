(function(){
	if(typeof window.webkit != 'undefined' && typeof window.webkit.messageHandlers!='undefined'){
		window.webkit.messageHandlers.JiGuo.postMessage({
			'method':'jiguo',
			'param':window.location.host
		});
	}
})();