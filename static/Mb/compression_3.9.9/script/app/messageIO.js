define(["require","jquery","socket.io"],function(require,$,io){function _pushNotification(userssid){var url="http://io.jiguo.com:2126";for(var i=0;i<document.scripts.length;i++){var scriptSrc=document.scripts[i].src;if(scriptSrc.indexOf("/script/require.js")>-1&&scriptSrc.indexOf("/static/Mb/develope/script/require.js")>-1){url="http://msg.jiguo.com:2126";break}}var socket=io(url);socket.on("connect",function(){socket.emit("login",userssid)}),socket.on("h5-news",function(msg){eval("msg = "+msg);var tempFunc=function(a,b,c){parseInt(a)>99?html="99":html=a,$(b).find(">.badge").remove(),c=="tips"?$(b).append('<em class="badge"></em>'):$(b).append('<em class="badge number">'+html+"</em>")};if(msg!=null){var html=0;if(msg.type=="news")typeof msg.num!="undefined"&&parseInt(msg.num)>0?tempFunc(msg.num,"[data-badge-warp]"):parseInt(msg.num)==0&&typeof msg.tips!="undefined"&&parseInt(msg.tips)>0&&tempFunc(msg.tips,"[data-badge-warp]","tips");else if(msg.type=="broadcast"){var unreadNum;$("[data-badge-warp] .number")&&(unreadNum=$("[data-badge-warp] .number").html());if(typeof unreadNum!="undefined")return!1;tempFunc(msg.tips,"[data-badge-warp]","tips")}}})}return{init:_pushNotification}})