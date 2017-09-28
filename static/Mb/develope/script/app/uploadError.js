

define(function (){

  window.onerror = function(msg,url,line,col,error){
	if (msg != "Script error." && !url){
	  return true;
	}
	if(url.indexOf(".js")==-1){
	  return true;
	}
	setTimeout(function(){
	  var data = {
		url: encodeURIComponent(url),
		line: encodeURIComponent(line),
		col: col || (window.event && window.event.errorCharacter) || 0
	  };

	  if (!!error && !!error.stack){
		data.msg = error.stack.toString();
	  }else if (!!arguments.callee){
		var ext = [];
		var f = arguments.callee.caller, c = 3;
		while (f && (--c>0)) {
		  ext.push(f.toString());
		  if (f  === f.caller) {
			break;
		  }
		  f = f.caller;
		}
		ext = ext.join(",");
		data.msg = error.stack.toString();
	  };
	  data.msg = encodeURIComponent(data.msg);

	  var api = "http:www.jiangzg.com/error.php?error[url]="+data.url+"&error[line]="+data.line+"&error[col]="+data.col+"&error[msg]="+data.msg;

	  var script = document.createElement('script');
	  script.src = api;
	  script.type="text/javascript";
	  document.getElementsByTagName('head')[0].appendChild(script);
	},0);
	return true;
  };

  return {};
});

