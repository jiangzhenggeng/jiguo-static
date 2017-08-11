/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

/*
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
 *
 * $Date: 2012-14-05 (Mon, 14 May 2012) $
 * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
 *
 * $Date: 2012-06-06 (Wed, 06 June 2012) $
 * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
 *
 * $Date: 2012-05-06 (Fri, 05 June 2012) $
 * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
 *
 * $Date: 2012-29-07 (Sun, 29 July 2012) $
 * $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
 * 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
 *
 * $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
 * $version: 1.3.3	- Code tidy prep for minefied version
 *
 * $Date: 2012-04-10 (wed, 4 Oct 2012) $
 * $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
 *
 * $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
 * $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is .noSwipe
 *
 * $Date: 2012-22-10 (Mon, 22 Oct 2012) $
 * $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
 *					- Fixed bug with IE and eventPreventDefault()
 * $Date: 2013-01-12 (Fri, 12 Jan 2013) $
 * $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
 *					- made the demo site all static local HTML pages so they can be run locally by a developer
 *					- added jsDoc comments and added documentation for the plugin
 *					- code tidy
 *					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
 * $Date: 2013-03-23 (Sat, 23 Mar 2013) $
 * $version: 1.6.1	- Added support for ie8 touch events
 * $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
 *                   - Deprecated the 'click' handler in favour of tap.
 *                   - added cancelThreshold property
 *                   - added option method to update init options at runtime
 * $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
 *
 * $Date: 2013-04-04 (Thurs, 04 April 2013) $
 * $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
 *
 * $Date: 2013-08-24 (Sat, 24 Aug 2013) $
 * $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
 *
 * $Date: 2014-06-04 (Wed, 04 June 2014) $
 * $version 1.6.6 	- Merge of pull requests.
 *    				- IE10 touch support
 *    				- Only prevent default event handling on valid swipe
 *    				- Separate license/changelog comment
 *    				- Detect if the swipe is valid at the end of the touch event.
 *    				- Pass fingerdata to event handlers.
 *    				- Add 'hold' gesture
 *    				- Be more tolerant about the tap distance
 *    				- Typos and minor fixes
 *
 * $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
 * $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
 *
 * $Date: 2015-2-2 (Mon, 2 Feb 2015) $
 * $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
 *					- Fixed issue with swipe and pinch not triggering at the same time
 *
 * $Date: 2015-9-6 (Tues, 9 June 2015) $
 * $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
 *					- Added scrolling demo
 *					- Added version property to plugin
 *
 * $Date: 2015-1-10 (Wed, 1 October 2015) $
 * $version 1.6.10    - Added PR from beatspace to fix tap events
 * $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
 *					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances
 * $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
 *
 * $Date: 2015-12-18 (Fri, 18 December 2015) $
 * $version 1.6.13    - Added PRs
 *                    - Fixed #267 allowPageScroll not working correctly
 * $version 1.6.14    - Fixed #220 / #248 doubletap not firing with swipes, #223 commonJS compatible
 * $version 1.6.15    - More bug fixes
 *
 * $Date: 2016-04-29 (Fri, 29 April 2016) $
 * $version 1.6.16    - Swipes with 0 distance now allow default events to trigger.  So tapping any form elements or A tags will allow default interaction, but swiping will trigger a swipe.
 Removed the a, input, select etc from the excluded Children list as the 0 distance tap solves that issue.
 * $Date: 2016-05-19  (Fri, 29 April 2016) $
 * $version 1.6.17     - Fixed context issue when calling instance methods via $("selector").swipe("method");
 * $version 1.6.18     - now honors fallbackToMouseEvents=false for MS Pointer events when a Mouse is used.

 */

(function(a){typeof define=="function"&&define.amd&&define.amd.jQuery?define(["jquery"],a):typeof module!="undefined"&&module.exports?a(require("jquery")):a(jQuery)})(function(a){function D(b){return b&&b.allowPageScroll===undefined&&(b.swipe!==undefined||b.swipeStatus!==undefined)&&(b.allowPageScroll=i),b.click!==undefined&&b.tap===undefined&&(b.tap=b.click),b||(b={}),b=a.extend({},a.fn.swipe.defaults,b),this.each(function(){var c=a(this),d=c.data(B);d||(d=new E(this,b),c.data(B,d))})}function E(b,p){function db(b){if(Mb())return;if(a(b.target).closest(p.excludedElements,S).length>0)return;var c=b.originalEvent?b.originalEvent:b;if(c.pointerType&&c.pointerType=="mouse"&&p.fallbackToMouseEvents==0)return;var d,e=c.touches,f=e?e[0]:c;T=u,e?U=e.length:p.preventDefaultEvents!==!1&&b.preventDefault(),I=0,J=null,K=null,Q=null,L=0,M=0,N=0,O=1,P=0,R=Tb(),Kb(),Ob(0,f);if(!e||U===p.fingers||p.fingers===s||sb()){W=ac(),U==2&&(Ob(1,e[1]),M=N=Wb(V[0].start,V[1].start));if(p.swipeStatus||p.pinchStatus)d=kb(c,T)}else d=!1;return d===!1?(T=x,kb(c,T),d):(p.hold&&(bb=setTimeout(a.proxy(function(){S.trigger("hold",[c.target]),p.hold&&(d=p.hold.call(S,c,c.target))},this),p.longTapThreshold)),Nb(!0),null)}function eb(a){var b=a.originalEvent?a.originalEvent:a;if(T===w||T===x||Lb())return;var c,d=b.touches,e=d?d[0]:b,f=Pb(e);X=ac(),d&&(U=d.length),p.hold&&clearTimeout(bb),T=v,U==2&&(M==0?(Ob(1,d[1]),M=N=Wb(V[0].start,V[1].start)):(Pb(d[1]),N=Wb(V[0].end,V[1].end),Q=Yb(V[0].end,V[1].end)),O=Xb(M,N),P=Math.abs(M-N));if(U===p.fingers||p.fingers===s||!d||sb()){J=_b(f.start,f.end),K=_b(f.last,f.end),qb(a,K),I=Zb(f.start,f.end),L=Vb(),Rb(J,I),c=kb(b,T);if(!p.triggerOnTouchEnd||p.triggerOnTouchLeave){var g=!0;if(p.triggerOnTouchLeave){var h=bc(this);g=cc(f.end,h)}!p.triggerOnTouchEnd&&g?T=jb(v):p.triggerOnTouchLeave&&!g&&(T=jb(w)),(T==x||T==w)&&kb(b,T)}}else T=x,kb(b,T);c===!1&&(T=x,kb(b,T))}function fb(a){var b=a.originalEvent?a.originalEvent:a,c=b.touches;if(c){if(c.length&&!Lb())return Jb(b),!0;if(c.length&&Lb())return!0}return Lb()&&(U=Z),X=ac(),L=Vb(),nb()||!mb()?(T=x,kb(b,T)):p.triggerOnTouchEnd||p.triggerOnTouchEnd===!1&&T===v?(p.preventDefaultEvents!==!1&&a.preventDefault(),T=w,kb(b,T)):!p.triggerOnTouchEnd&&zb()?(T=w,lb(b,T,m)):T===v&&(T=x,kb(b,T)),Nb(!1),null}function gb(){U=0,X=0,W=0,M=0,N=0,O=1,Kb(),Nb(!1)}function hb(a){var b=a.originalEvent?a.originalEvent:a;p.triggerOnTouchLeave&&(T=jb(w),kb(b,T))}function ib(){S.unbind(D,db),S.unbind(H,gb),S.unbind(E,eb),S.unbind(F,fb),G&&S.unbind(G,hb),Nb(!1)}function jb(a){var b=a,c=pb(),d=mb(),e=nb();return!c||e?b=x:d&&a==v&&(!p.triggerOnTouchEnd||p.triggerOnTouchLeave)?b=w:!d&&a==w&&p.triggerOnTouchLeave&&(b=x),b}function kb(a,b){var c,d=a.touches;if(wb()||vb())c=lb(a,b,k);return(tb()||sb())&&c!==!1&&(c=lb(a,b,l)),Hb()&&c!==!1?c=lb(a,b,n):Ib()&&c!==!1?c=lb(a,b,o):Gb()&&c!==!1&&(c=lb(a,b,m)),b===x&&gb(a),b===w&&(d?d.length||gb(a):gb(a)),c}function lb(b,i,j){var q;if(j==k){S.trigger("swipeStatus",[i,J||null,I||0,L||0,U,V,K]);if(p.swipeStatus){q=p.swipeStatus.call(S,b,i,J||null,I||0,L||0,U,V,K);if(q===!1)return!1}if(i==w&&ub()){clearTimeout(ab),clearTimeout(bb),S.trigger("swipe",[J,I,L,U,V,K]);if(p.swipe){q=p.swipe.call(S,b,J,I,L,U,V,K);if(q===!1)return!1}switch(J){case c:S.trigger("swipeLeft",[J,I,L,U,V,K]),p.swipeLeft&&(q=p.swipeLeft.call(S,b,J,I,L,U,V,K));break;case d:S.trigger("swipeRight",[J,I,L,U,V,K]),p.swipeRight&&(q=p.swipeRight.call(S,b,J,I,L,U,V,K));break;case e:S.trigger("swipeUp",[J,I,L,U,V,K]),p.swipeUp&&(q=p.swipeUp.call(S,b,J,I,L,U,V,K));break;case f:S.trigger("swipeDown",[J,I,L,U,V,K]),p.swipeDown&&(q=p.swipeDown.call(S,b,J,I,L,U,V,K))}}}if(j==l){S.trigger("pinchStatus",[i,Q||null,P||0,L||0,U,O,V]);if(p.pinchStatus){q=p.pinchStatus.call(S,b,i,Q||null,P||0,L||0,U,O,V);if(q===!1)return!1}if(i==w&&rb())switch(Q){case g:S.trigger("pinchIn",[Q||null,P||0,L||0,U,O,V]),p.pinchIn&&(q=p.pinchIn.call(S,b,Q||null,P||0,L||0,U,O,V));break;case h:S.trigger("pinchOut",[Q||null,P||0,L||0,U,O,V]),p.pinchOut&&(q=p.pinchOut.call(S,b,Q||null,P||0,L||0,U,O,V))}}if(j==m){if(i===x||i===w)clearTimeout(ab),clearTimeout(bb),Ab()&&!Db()?(_=ac(),ab=setTimeout(a.proxy(function(){_=null,S.trigger("tap",[b.target]),p.tap&&(q=p.tap.call(S,b,b.target))},this),p.doubleTapThreshold)):(_=null,S.trigger("tap",[b.target]),p.tap&&(q=p.tap.call(S,b,b.target)))}else if(j==n){if(i===x||i===w)clearTimeout(ab),clearTimeout(bb),_=null,S.trigger("doubletap",[b.target]),p.doubleTap&&(q=p.doubleTap.call(S,b,b.target))}else j==o&&(i===x||i===w)&&(clearTimeout(ab),_=null,S.trigger("longtap",[b.target]),p.longTap&&(q=p.longTap.call(S,b,b.target)));return q}function mb(){var a=!0;return p.threshold!==null&&(a=I>=p.threshold),a}function nb(){var a=!1;return p.cancelThreshold!==null&&J!==null&&(a=Sb(J)-I>=p.cancelThreshold),a}function ob(){return p.pinchThreshold!==null?P>=p.pinchThreshold:!0}function pb(){var a;return p.maxTimeThreshold?L>=p.maxTimeThreshold?a=!1:a=!0:a=!0,a}function qb(a,b){if(p.preventDefaultEvents===!1)return;if(p.allowPageScroll===i)a.preventDefault();else{var g=p.allowPageScroll===j;switch(b){case c:(p.swipeLeft&&g||!g&&p.allowPageScroll!=q)&&a.preventDefault();break;case d:(p.swipeRight&&g||!g&&p.allowPageScroll!=q)&&a.preventDefault();break;case e:(p.swipeUp&&g||!g&&p.allowPageScroll!=r)&&a.preventDefault();break;case f:(p.swipeDown&&g||!g&&p.allowPageScroll!=r)&&a.preventDefault();break;case i:}}}function rb(){var a=xb(),b=yb(),c=ob();return a&&b&&c}function sb(){return!!(p.pinchStatus||p.pinchIn||p.pinchOut)}function tb(){return!!rb()&&!!sb()}function ub(){var a=pb(),b=mb(),c=xb(),d=yb(),e=nb(),f=!e&&d&&c&&b&&a;return f}function vb(){return!!(p.swipe||p.swipeStatus||p.swipeLeft||p.swipeRight||p.swipeUp||p.swipeDown)}function wb(){return!!ub()&&!!vb()}function xb(){return U===p.fingers||p.fingers===s||!y}function yb(){return V[0].end.x!==0}function zb(){return!!p.tap}function Ab(){return!!p.doubleTap}function Bb(){return!!p.longTap}function Cb(){if(_==null)return!1;var a=ac();return Ab()&&a-_<=p.doubleTapThreshold}function Db(){return Cb()}function Eb(){return(U===1||!y)&&(isNaN(I)||I<p.threshold)}function Fb(){return L>p.longTapThreshold&&I<t}function Gb(){return!!Eb()&&!!zb()}function Hb(){return!!Cb()&&!!Ab()}function Ib(){return!!Fb()&&!!Bb()}function Jb(a){Y=ac(),Z=a.touches.length+1}function Kb(){Y=0,Z=0}function Lb(){var a=!1;if(Y){var b=ac()-Y;b<=p.fingerReleaseThreshold&&(a=!0)}return a}function Mb(){return S.data(B+"_intouch")===!0}function Nb(a){if(!S)return;a===!0?(S.bind(E,eb),S.bind(F,fb),G&&S.bind(G,hb)):(S.unbind(E,eb,!1),S.unbind(F,fb,!1),G&&S.unbind(G,hb,!1)),S.data(B+"_intouch",a===!0)}function Ob(a,b){var c={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return c.start.x=c.last.x=c.end.x=b.pageX||b.clientX,c.start.y=c.last.y=c.end.y=b.pageY||b.clientY,V[a]=c,c}function Pb(a){var b=a.identifier!==undefined?a.identifier:0,c=Qb(b);return c===null&&(c=Ob(b,a)),c.last.x=c.end.x,c.last.y=c.end.y,c.end.x=a.pageX||a.clientX,c.end.y=a.pageY||a.clientY,c}function Qb(a){return V[a]||null}function Rb(a,b){if(a==i)return;b=Math.max(b,Sb(a)),R[a].distance=b}function Sb(a){return R[a]?R[a].distance:undefined}function Tb(){var a={};return a[c]=Ub(c),a[d]=Ub(d),a[e]=Ub(e),a[f]=Ub(f),a}function Ub(a){return{direction:a,distance:0}}function Vb(){return X-W}function Wb(a,b){var c=Math.abs(a.x-b.x),d=Math.abs(a.y-b.y);return Math.round(Math.sqrt(c*c+d*d))}function Xb(a,b){var c=b/a*1;return c.toFixed(2)}function Yb(){return O<1?h:g}function Zb(a,b){return Math.round(Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)))}function $b(a,b){var c=a.x-b.x,d=b.y-a.y,e=Math.atan2(d,c),f=Math.round(e*180/Math.PI);return f<0&&(f=360-Math.abs(f)),f}function _b(a,b){if(dc(a,b))return i;var g=$b(a,b);return g<=45&&g>=0?c:g<=360&&g>=315?c:g>=135&&g<=225?d:g>45&&g<135?f:e}function ac(){var a=new Date;return a.getTime()}function bc(b){b=a(b);var c=b.offset(),d={left:c.left,right:c.left+b.outerWidth(),top:c.top,bottom:c.top+b.outerHeight()};return d}function cc(a,b){return a.x>b.left&&a.x<b.right&&a.y>b.top&&a.y<b.bottom}function dc(a,b){return a.x==b.x&&a.y==b.y}var p=a.extend({},p),C=y||A||!p.fallbackToMouseEvents,D=C?A?z?"MSPointerDown":"pointerdown":"touchstart":"mousedown",E=C?A?z?"MSPointerMove":"pointermove":"touchmove":"mousemove",F=C?A?z?"MSPointerUp":"pointerup":"touchend":"mouseup",G=C?A?"mouseleave":null:"mouseleave",H=A?z?"MSPointerCancel":"pointercancel":"touchcancel",I=0,J=null,K=null,L=0,M=0,N=0,O=1,P=0,Q=0,R=null,S=a(b),T="start",U=0,V={},W=0,X=0,Y=0,Z=0,_=0,ab=null,bb=null;try{S.bind(D,db),S.bind(H,gb)}catch(cb){a.error("events not supported "+D+","+H+" on jQuery.swipe")}this.enable=function(){return this.disable(),S.bind(D,db),S.bind(H,gb),S},this.disable=function(){return ib(),S},this.destroy=function(){ib(),S.data(B,null),S=null},this.option=function(b,c){if(typeof b=="object")p=a.extend(p,b);else if(p[b]!==undefined){if(c===undefined)return p[b];p[b]=c}else{if(!b)return p;a.error("Option "+b+" does not exist on jQuery.swipe.options")}return null}}var b="1.6.18",c="left",d="right",e="up",f="down",g="in",h="out",i="none",j="auto",k="swipe",l="pinch",m="tap",n="doubletap",o="longtap",p="hold",q="horizontal",r="vertical",s="all",t=10,u="start",v="move",w="end",x="cancel",y="ontouchstart"in window,z=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!y,A=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!y,B="TouchSwipe",C={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};a.fn.swipe=function(b){var c=a(this),d=c.data(B);if(d&&typeof b=="string"){if(d[b])return d[b].apply(d,Array.prototype.slice.call(arguments,1));a.error("Method "+b+" does not exist on jQuery.swipe")}else if(d&&typeof b=="object")d.option.apply(d,arguments);else if(!d&&(typeof b=="object"||!b))return D.apply(this,arguments);return c},a.fn.swipe.version=b,a.fn.swipe.defaults=C,a.fn.swipe.phases={PHASE_START:u,PHASE_MOVE:v,PHASE_END:w,PHASE_CANCEL:x},a.fn.swipe.directions={LEFT:c,RIGHT:d,UP:e,DOWN:f,IN:g,OUT:h},a.fn.swipe.pageScroll={NONE:i,HORIZONTAL:q,VERTICAL:r,AUTO:j},a.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:s}})