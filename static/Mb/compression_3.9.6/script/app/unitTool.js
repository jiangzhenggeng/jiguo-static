define(["require","jquery","layer"],function(a,b,c){return{isArray:function(a){return Object.prototype.toString.call(a)==="[object Array]"},isString:function(a){return Object.prototype.toString.call(a)==="[object String]"},isNumber:function(a){return Object.prototype.toString.call(a)==="[object Number]"},isFunction:function(a){return Object.prototype.toString.call(a)==="[object Function]"},isNull:function(a){return Object.prototype.toString.call(a)==="[object Null]"},isRegExp:function(a){return Object.prototype.toString.call(a)==="[object RegExp]"},has:function(a,b){if(Object.prototype.toString.call(a)==="[object Array]"){for(var c in a)if(c==b)return!0;return!1}if(Object.prototype.toString.call(a)==="[object Object]")return b in a},getLength:function(a){if(this.isArray(a))return a.length;var b=0;for(var c in a)b++;return b},msg:function(a,b){return c.open({skin:"msg",time:b||2,content:a})}}})