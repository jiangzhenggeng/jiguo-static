define(["require","jquery"],function(a,b){function c(a){this.options=b.extend({tplFn:"",intDiff:60,callback:b.loop,dom:null,isglobal:!1},a),this.options.dom=b(this.options.dom),c.prototype.run=function(){var a=0,b=0,c=0,d=0,e=this.options;e.intDiff--,e.intDiff>0&&(a=Math.floor(e.intDiff/86400),b=Math.floor(e.intDiff/3600)-a*24,c=Math.floor(e.intDiff/60)-a*24*60-b*60,d=Math.floor(e.intDiff)-a*24*60*60-b*60*60-c*60),c<=9&&(c="0"+c),d<=9&&(d="0"+d);if(typeof e.tplFn=="function")e.tplFn(a,b,c,d,e.intDiff);else{var f=(a>0?a+"天":"")+(b>0?b+"时":"")+c+"分"+d+"秒";e.dom.html(f)}if(e.intDiff<=0){e.isglobal?e.callback():e.callback.call(e.dom);return}var g=this;setTimeout(function(){g.run()},1e3)}}return{run:function(a){var b=new c(a);b.run()}}})