(function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return typeof a=="string"?a.split(" "):a}function e(a,b){var c=t.elements;typeof c!="string"&&(c=c.join(" ")),typeof a!="string"&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function g(a,c,d){c||(c=b);if(s)return c.createElement(a);d||(d=f(c));var e;return d.cache[a]?e=d.cache[a].cloneNode():n.test(a)?e=(d.cache[a]=d.createElem(a)).cloneNode():e=d.createElem(a),e.canHaveChildren&&!m.test(a)&&!e.tagUrn?d.frag.appendChild(e):e}function h(a,c){a||(a=b);if(s)return a.createDocumentFragment();c=c||f(a);var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;for(;g<i;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return t.shivCSS&&!o&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||i(a,d),a}var k="3.7.3",l=a.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,n=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o,p="_html5shiv",q=0,r={},s;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",o="hidden"in a,s=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){o=!0,s=!0}})();var t={elements:l.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:k,shivCSS:l.shivCSS!==!1,supportsUnknownElements:s,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),typeof module=="object"&&module.exports&&(module.exports=t)})(typeof window!="undefined"?window:this,document)