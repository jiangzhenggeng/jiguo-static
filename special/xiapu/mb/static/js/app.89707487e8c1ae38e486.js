webpackJsonp([0],{"+BAe":function(t,i,e){"use strict";function a(t){e("9NjQ")}var n=e("0jQe"),s=e("P/OT"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,"data-v-7c6667bb",null);i.a=c.exports},"+p9J":function(t,i,e){"use strict";i.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},"/uBL":function(t,i,e){t.exports=e.p+"static/img/47775.43084f9.jpg"},"0jQe":function(t,i,e){"use strict";var a=e("7t+N"),n=e.n(a);i.a={data:function(){return{blog:[]}},created:function(){var t=this;n.a.get("http://www.jiguo.com/api/article/GetXiaPuArticle",function(i){var e=[];i.forEach(function(t){e.push({url:"http://www.jiguo.com/article/article/"+t.blogid+".html",title:t.title,cover:"http://s1.jiguo.com/"+t.cover+"/640?imageView2/1/w/364/h/274/q/100",zan:t.praise||0,comment:t.reply||0,username:t.author,userface:t.avatar+"/230x230"})}),t.blog=e,t.$nextTick(function(){window.hasAnimate=n()(".k-animate:not(.into-k-animate),.k-animate-2:not(.into-k-animate)")})},"jsonp")}}},"2NXm":function(t,i,e){"use strict";function a(t){e("Db1g")}var n=e("Ued4"),s=e("IY3V"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,null,null);i.a=c.exports},"3UkJ":function(t,i,e){t.exports=e.p+"static/img/img-1@3x.4fa3936.jpg"},"3nNj":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swiper__box"},[e("swiper",{attrs:{options:t.swiperOption}},t._l(t.bannerData,function(t){return e("swiper-slide",{key:t.url},[e("common-item",{staticClass:"swiper-slide",attrs:{title:t.title,url:t.url,cover:t.cover}})],1)})),t._v(" "),e("div",{staticClass:"swiper-button swiper-button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button swiper-button-next"})],1)},n=[],s={render:a,staticRenderFns:n};i.a=s},"5pBQ":function(t,i,e){t.exports=e.p+"static/img/47761.87fe215.jpg"},"5reh":function(t,i,e){"use strict";e.d(i,"a",function(){return a});var a="PAGE_LOADING_QUERY"},"64IA":function(t,i,e){t.exports=e.p+"static/img/img-72@3x.0c5e1a9.jpg"},"79+5":function(t,i,e){"use strict";i.a={props:{title:{type:String}}}},"7KhL":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"header__nav-box"},[a("div",{ref:"header__nav-wrap",staticClass:"header__nav-wrap"},[t._m(0),t._v(" "),a("div",{staticClass:"header__menu",on:{click:t.openMenu}},[a("img",{attrs:{src:e("t6Kk")}})])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show_menu,expression:"show_menu"}],staticClass:"header__show-menu"},[a("div",{staticClass:"header__menu-close",on:{click:t.closeMenu}},[a("img",{attrs:{src:e("f/Oc")}})]),t._v(" "),a("div",{staticClass:"header-menu-item-box"},[a("ul",[a("li",{staticClass:"on",on:{click:function(i){t.scrollPagePosition(i,"index")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("首页")])]),t._v(" "),a("li",{on:{click:function(i){t.scrollPagePosition(i,"sjjh")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("升级计划")])]),t._v(" "),a("li",{on:{click:function(i){t.scrollPagePosition(i,"sqty")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("申请体验")])]),t._v(" "),a("li",{on:{click:function(i){t.scrollPagePosition(i,"rmxp")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("热门新品")])]),t._v(" "),a("li",{on:{click:function(i){t.scrollPagePosition(i,"tybg")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("体验报告")])]),t._v(" "),a("li",{on:{click:function(i){t.scrollPagePosition(i,"tysp")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("体验视频")])]),t._v(" "),a("li",{on:{click:function(i){t.scrollPagePosition(i,"hdhg")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("活动回顾")])])])])])])],1)},n=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"header__logo"},[a("img",{attrs:{src:e("ePMN")}})])}],s={render:a,staticRenderFns:n};i.a=s},"7LpV":function(t,i,e){"use strict";var a=e("Dd8w"),n=e.n(a),s=e("7t+N"),o=e.n(s);i.a={data:function(){return{event:!1}},created:function(){var t=this;o.a.get("http://www.jiguo.com/api/event/GetXiaPuEvent",function(i){var e=[];i.forEach(function(t){var i={title:t.deadline_desc||""};e.push(n()({},t,{url:"http://m.jiguo.com/mb/event/index/"+t.eventid+".html",title:t.title,cover:"http://s1.jiguo.com/"+t.fileid+"/640?imageView2/1/w/640/h/320/q/100",status:i}))}),t.event=e,t.$nextTick(function(){window.hasAnimate=o()(".k-animate:not(.into-k-animate),.k-animate-2:not(.into-k-animate)")})},"jsonp")},methods:{}}},"7Q67":function(t,i,e){t.exports=e.p+"static/img/47936.25542d2.jpg"},"7oBO":function(t,i,e){"use strict";var a="undefined"!=typeof window;a&&(window.Swiper=e("gsqX")),i.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,i=function(){if(!t.swiper&&a){delete t.options.notNextTick;var i=!1;for(var e in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(e)&&t.options[e]&&(i=!0,t.defaultSwiperClasses[e]=t.options[e]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};i?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?i():this.$nextTick(i)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},"8iRZ":function(t,i,e){t.exports=e.p+"static/img/48121.675bfa6.jpg"},"8plM":function(t,i,e){"use strict";function a(t){e("Sxa5")}var n=e("yVGj"),s=e("OAYl"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,"data-v-416a1530",null);i.a=c.exports},"99IU":function(t,i,e){t.exports=e.p+"static/img/47753.20acad1.jpg"},"9MY+":function(t,i,e){t.exports=e.p+"static/img/47942.d3ba44c.jpg"},"9NjQ":function(t,i){},"9yAA":function(t,i,e){t.exports=e.p+"static/img/47723.61abd3f.jpg"},AYCl:function(t,i,e){"use strict";function a(t){e("j4R9")}var n=e("awUX"),s=e("3nNj"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,null,null);i.a=c.exports},Airf:function(t,i,e){t.exports=e.p+"static/img/47862.5538149.jpg"},An5A:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mask__box"},[e("a",{attrs:{href:t.url}},[e("div",{staticClass:"mask__cover",class:t.type},[e("img",{attrs:{src:t.cover}})]),t._v(" "),t.title?e("div",{staticClass:"mask__bg"},[t._v(t._s(t.title))]):t._e()])])},n=[],s={render:a,staticRenderFns:n};i.a=s},"B/tv":function(t,i,e){"use strict";var a={},n="",s=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;n=t.name||t.toString(),a[n]&&clearTimeout(a[n]),a[n]=setTimeout(function(){t.call(i)},e)},o=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;n=t.name||t.toString();var a=null,s=new Date;return function(){var n=this,o=arguments,r=new Date;a&&clearTimeout(a),r-s>=e?(t.apply(n,o),s=r):a=setTimeout(function(){t.apply(n,o)},i)}};i.a={throttle:s,debounce:o}},C8yb:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swiper__box"},[e("swiper",{attrs:{options:t.swiperOption}},t._l(t.bannerData,function(t){return e("swiper-slide",{key:t.url},[e("common-item",{staticClass:"swiper-slide",attrs:{title:t.title,url:t.url,cover:t.cover}})],1)})),t._v(" "),e("div",{staticClass:"swiper-button swiper-button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button swiper-button-next"})],1)},n=[],s={render:a,staticRenderFns:n};i.a=s},CUaX:function(t,i,e){"use strict";function a(t){e("d/H/")}var n=e("kK6p"),s=e("C8yb"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,null,null);i.a=c.exports},Db1g:function(t,i){},Dwnj:function(t,i){},Dznz:function(t,i,e){t.exports=e.p+"static/img/47867.9e8af28.jpg"},Fbzd:function(t,i,e){t.exports=e.p+"static/img/47752.6418abb.jpg"},G6G6:function(t,i){},Ge3A:function(t,i){},Gvzr:function(t,i,e){t.exports=e.p+"static/img/47901.24ec539.jpg"},HRPa:function(t,i,e){t.exports=e.p+"static/img/48025.8d00ee8.jpg"},"Ha7+":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"mask__box"},[a("div",{staticClass:"video__item-box"},t._l(t.video,function(i){return a("div",{staticClass:"video__item k-animate-2",on:{click:function(e){t.playVideo(i)}}},[a("iframe",{staticClass:"iframe",attrs:{src:i.url}}),t._v(" "),a("div",{staticClass:"video__item-over"},[a("img",{staticClass:"cover",attrs:{src:i.cover}}),t._v(" "),a("img",{staticClass:"video",attrs:{src:""+e("k+6c")}}),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(i.title))])])])})),t._v(" "),a("transition",{attrs:{name:"user__tys-show-modal"}},[t.curr_url?a("div",{staticClass:"video__item-mask",on:{click:t.videoClose}},[a("iframe",{staticClass:"iframe",style:"height:"+t.height+"px",attrs:{src:t.curr_url}}),t._v(" "),a("div",{staticClass:"video__item-close",on:{click:t.videoClose}},[a("img",{attrs:{src:e("f/Oc")}})]),t._v(" "),a("div",{staticClass:"show-title"},[t._v(t._s(t.curr_title))])]):t._e()])],1)},n=[],s={render:a,staticRenderFns:n};i.a=s},HxxQ:function(t,i,e){t.exports=e.p+"static/img/48354.99ee0a0.jpg"},IY3V:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticStyle:{"background-color":"#fff"},attrs:{id:"index"}},[a("header-nav",{staticClass:"element-bg"}),t._v(" "),a("div",{staticClass:"banner__box k-animate element-bg"},[a("a",{attrs:{href:"http://m.jiguo.com/mb/api/cps?url="+encodeURIComponent("https://sale.jd.com/m/act/vkFE0zDxpN.html")}},[a("img",{attrs:{src:t.headerBanner}})])]),t._v(" "),a("div",{ref:"element-body",staticClass:"k-animate-2 element-bg",staticStyle:{overflow:"hidden"}},[a("div",{staticClass:"k-animate-2",attrs:{id:"sjjh"}},[a("common-title",{attrs:{title:"夏普双十一理想生活升级计划"}}),t._v(" "),a("common-item",{attrs:{title:"夏普电视",url:"https://mall.jd.com/index-1000003257.html",cover:""+e("jKD2")}})],1),t._v(" "),a("div",{staticClass:"mgt4 k-animate-2"},[a("common-item",{attrs:{title:"夏普冰箱",url:"https://mall.jd.com/index-628105.html",cover:""+e("hqlI"),type:"larg"}})],1),t._v(" "),a("div",{staticClass:"mgt4 k-animate-2"},[a("common-item",{attrs:{title:"夏普洗衣机",url:"https://mall.jd.com/index-628105.html",cover:""+e("b1xF"),type:"larg"}})],1),t._v(" "),a("div",{staticClass:"mgt4 k-animate-2"},[a("common-img",{attrs:{url:"javascript:;",cover:""+e("OAf4")}})],1),t._v(" "),a("div",{staticClass:"mgt4",attrs:{id:"sqty"}},[a("common-title",{attrs:{title:"夏普双十一爆款产品免费体验"}}),t._v(" "),a("event-list")],1),t._v(" "),a("div",{staticClass:"index__new-product k-animate-2",attrs:{id:"rmxp"}},[a("common-title",{attrs:{title:"夏普热门新品"}}),t._v(" "),a("common-xinpin")],1),t._v(" "),a("div",{staticClass:"index__blog-tyd k-animate-2",attrs:{id:"tybg"}},[a("common-title",{attrs:{title:"极果首席体验师热门体验报告"}}),t._v(" "),a("div",{staticClass:"index__four-pox"},[a("common-blog")],1)],1),t._v(" "),a("div",{staticClass:"index__blog-tyd",attrs:{id:"tysp"}},[a("common-title",{staticClass:"k-animate-2",attrs:{title:"夏普电视体验视频"}}),t._v(" "),a("div",{staticClass:"index__four-pox"},[a("common-my-video")],1)],1),t._v(" "),a("div",{staticClass:"index__event-hg k-animate-2",attrs:{id:"hdhg"}},[a("common-title",{attrs:{title:"夏普电视往期爆品试用活动回顾"}}),t._v(" "),a("div",{staticClass:"index__footer-swiper"},[a("common-swiper-2")],1)],1),t._v(" "),a("div",{staticClass:"index__event-swiper k-animate-2"},[a("common-title",{attrs:{title:"夏普电视时尚体验趴回顾"}}),t._v(" "),a("div",{staticClass:"index__footer-swiper"},[a("common-footer-swiper")],1)],1),t._v(" "),a("common-footer")],1)],1)},n=[],s={render:a,staticRenderFns:n};i.a=s},IcnI:function(t,i,e){"use strict";var a=e("7+uW"),n=e("NYxO"),s=e("mUbh"),o=e("ukYY");a.a.use(n.b);var r={show:!0};i.a=new n.b.Store({state:r,actions:s,mutations:o.a})},ImgD:function(t,i){},Iy5J:function(t,i){},JjAs:function(t,i,e){"use strict";function a(t){e("SujV")}var n=e("7LpV"),s=e("Ndl7"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,"data-v-0a2bb196",null);i.a=c.exports},K55d:function(t,i,e){"use strict";var a=e("7t+N"),n=e.n(a);i.a={data:function(){return{blog:[]}},created:function(){var t=this;n.a.get("http://www.jiguo.com/api/article/GetXiaPuXinPin",function(i){var e=[];i.forEach(function(t){e.push({url:"http://www.jiguo.com/article/article/"+t.blogid+".html",title:t.title,cover:"http://s1.jiguo.com/"+t.cover+"/640?imageView2/1/w/364/h/274/q/100"})}),t.blog=e,t.$nextTick(function(){window.hasAnimate=n()(".k-animate:not(.into-k-animate),.k-animate-2:not(.into-k-animate)")})},"jsonp")}}},KI4P:function(t,i,e){t.exports=e.p+"static/img/img-15@3x.7af68e1.jpg"},KIoY:function(t,i,e){t.exports=e.p+"static/img/47676.1b7768f.jpg"},L7xm:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.blog.length?e("div",{staticClass:"index__four-pox-type-2"},t._l(t.blog,function(i){return e("div",{staticClass:"index__four-item k-animate-2"},[e("a",{attrs:{href:i.url}},[e("div",{staticClass:"index__four-item-img"},[e("img",{attrs:{src:i.cover}})]),t._v(" "),e("div",{staticClass:"index__four-item-text"},[e("div",{staticClass:"index__four-item-inner"},[t._v(t._s(i.title))])])])])})):t._e()},n=[],s={render:a,staticRenderFns:n};i.a=s},LB3p:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{class:t.slideClass},[t._t("default")],2)},n=[],s={render:a,staticRenderFns:n};i.a=s},M93x:function(t,i,e){"use strict";function a(t){e("ImgD")}var n=e("xJD8"),s=e("NxgC"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,null,null);i.a=c.exports},"N+zL":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("+p9J"),n=e("LB3p"),s=e("VU/8"),o=s(a.a,n.a,!1,null,null,null);i.default=o.exports},NHdK:function(t,i){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0nNjRweCcgaGVpZ2h0PSc2NHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIKICAgICBjbGFzcz0idWlsLXJpcHBsZSI+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+CiAgICA8Zz4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0xcyIga2V5VGltZXM9IjA7MC4zMzsxIgogICAgICAgICAgICAgICAgIHZhbHVlcz0iMTsxOzAiPjwvYW5pbWF0ZT4KICAgICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSIjZmU1MzQxIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTFzIiBrZXlUaW1lcz0iMDswLjMzOzEiCiAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz0iMDsyMjs0NCI+PC9hbmltYXRlPgogICAgICAgIDwvY2lyY2xlPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwcyIga2V5VGltZXM9IjA7MC4zMzsxIgogICAgICAgICAgICAgICAgIHZhbHVlcz0iMTsxOzAiPjwvYW5pbWF0ZT4KICAgICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSIjZmU1MzQxIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiIGtleVRpbWVzPSIwOzAuMzM7MSIKICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPSIwOzIyOzQ0Ij48L2FuaW1hdGU+CiAgICAgICAgPC9jaXJjbGU+CiAgICA8L2c+Cjwvc3ZnPg=="},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("7+uW"),n=e("M93x"),s=e("YaEn"),o=e("IcnI"),r=e("e5RB"),c=e("v2ns");e.n(c);a.a.config.productionTip=!1,a.a.use(r.a),new a.a({el:"#app",router:s.a,store:o.a,template:"<App/>",components:{App:n.a}})},Ndl7:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"event__list-wrap"},t._l(t.event,function(i){return e("div",{key:i.eventid,staticClass:"event__list-item k-animate-2"},[e("a",{attrs:{href:i.url}},[e("div",{staticClass:"event__img-wrap"},[e("div",{staticClass:"event__img-box"},[e("img",{attrs:{src:i.cover}})]),t._v(" "),e("div",{staticClass:"event__mask-cover"})]),t._v(" "),e("div",{staticClass:"stream-bottom"},[e("div",{staticClass:"stream-title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"stream-text"},[e("span",{staticClass:"ft14"},[e("em",{staticClass:"ft18 colfff mgr10"},[t._v(t._s(i.follownum))]),t._v("人参与")]),t._v(" "),e("span",{class:"ft14 fr mgt4"},[t._v(t._s(i.status.title))])])])])])}))},n=[],s={render:a,staticRenderFns:n};i.a=s},NxgC:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content-wrap"},[e("loading",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]}),t._v(" "),e("router-view")],1)},n=[],s={render:a,staticRenderFns:n};i.a=s},OAYl:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"index__nwe1"},[e("a",{attrs:{href:t.url}},[e("img",{attrs:{src:t.cover}})])])},n=[],s={render:a,staticRenderFns:n};i.a=s},OAf4:function(t,i,e){t.exports=e.p+"static/img/img-60@3x.611a9a5.jpg"},OsYZ:function(t,i,e){t.exports=e.p+"static/img/47926.f518ac5.jpg"},OzsK:function(t,i,e){t.exports=e.p+"static/img/48014.65b5a8b.jpg"},"P/OT":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.blog.length?e("div",{staticClass:"blog__box"},t._l(t.blog,function(i){return e("div",{staticClass:"blog__item k-animate-2"},[e("a",{attrs:{href:i.url}},[e("div",{staticClass:"blog__cover"},[e("img",{attrs:{src:i.cover}})]),t._v(" "),e("div",{staticClass:"blog__bottom-desc"},[e("div",{staticClass:"blog__title"},[e("div",{staticClass:"blog__title-inner"},[t._v(t._s(i.title))])]),t._v(" "),e("div",{staticClass:"blog__query"},[e("div",{staticClass:"blog__user-info"},[e("div",{staticClass:"blog__user-face"},[e("img",{attrs:{src:i.userface}})]),t._v(" "),e("div",{staticClass:"blog__user-name"},[t._v(t._s(i.username))])]),t._v(" "),e("div",{staticClass:"blog__user-zan-comment"},[e("div",{staticClass:"blog__zan"},[e("i",{staticClass:"icon icon-zan"}),t._v(" "),e("span",{staticClass:"blog__zan-num"},[t._v(t._s(i.zan))])]),t._v(" "),e("div",{staticClass:"blog__comment"},[e("i",{staticClass:"icon icon-comment"}),t._v(" "),e("span",{staticClass:"blog__comment-num"},[t._v(t._s(i.comment))])])])])])])])})):t._e()},n=[],s={render:a,staticRenderFns:n};i.a=s},RNpw:function(t,i,e){"use strict";function a(t){e("ZRUw")}var n=e("TfKA"),s=e("An5A"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,"data-v-65f4065c",null);i.a=c.exports},SS1Z:function(t,i){},SujV:function(t,i){},Sxa5:function(t,i){},TdX2:function(t,i,e){t.exports=e.p+"static/img/47859.88ebbf8.jpg"},TfKA:function(t,i,e){"use strict";i.a={props:{title:{type:String,default:""},url:{type:String,default:"javascript:;"},cover:{type:String},type:{type:[String],default:"larg"}}}},U0ej:function(t,i,e){t.exports=e.p+"static/img/47664.9184886.jpg"},Ued4:function(t,i,e){"use strict";var a=e("Dd8w"),n=e.n(a),s=e("7t+N"),o=e.n(s),r=e("NYxO"),c=e("zDBE"),l=e("XSEm"),u=e("RNpw"),m=e("8plM"),p=e("bg0g"),v=e("AYCl"),g=e("yf5L"),d=e("+BAe"),f=e("wknz"),w=e("CUaX"),h=e("3UkJ"),C=e.n(h),A=e("JjAs");i.a={data:function(){return{headerBanner:C.a}},created:function(){var t=this,i=new Image;i.onload=function(){t.hidePageLoading(),o()(window).on("scroll",function(){o()(t.$refs["element-body"]).hasClass("k-animate-2")&&setTimeout(function(){o()(t.$refs["element-body"]).removeClass("k-animate-2").removeClass("into-k-animate").addClass("no-animate").addClass("no-all-animate")},500)})},i.src=C.a},components:{HeaderNav:c.a,CommonTitle:l.a,CommonItem:u.a,CommonImg:m.a,CommonFooter:p.a,CommonMyVideo:g.a,CommonFooterSwiper:v.a,CommonBlog:d.a,CommonXinpin:f.a,CommonSwiper2:w.a,EventList:A.a},methods:n()({},e.i(r.c)(["hidePageLoading"]))}},XSEm:function(t,i,e){"use strict";function a(t){e("z3fL")}var n=e("79+5"),s=e("cZGn"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,"data-v-58fb8839",null);i.a=c.exports},YaEn:function(t,i,e){"use strict";var a=e("7+uW"),n=e("/ocq"),s=e("2NXm");a.a.use(n.a),i.a=new n.a({routes:[{path:"/",component:s.a},{path:"*",redirect:"/"}]})},YvSp:function(t,i,e){t.exports=e.p+"static/img/47769.3a3fc63.jpg"},Z96F:function(t,i,e){t.exports=e.p+"static/img/47705.7651af0.jpg"},ZRUw:function(t,i){},awUX:function(t,i,e){"use strict";var a=e("7+uW"),n=e("F3EI"),s=e.n(n),o=e("RNpw"),r=e("KI4P"),c=(e.n(r),e("k+hH")),l=e.n(c),u=e("oVjW"),m=e.n(u),p=e("8iRZ"),v=e.n(p),g=e("HRPa"),d=e.n(g),f=e("/uBL"),w=e.n(f),h=e("xN3W"),C=e.n(h),A=e("ex4D"),I=e.n(A),_=e("Z96F"),j=e.n(_),b=e("nFws"),x=e.n(b),M=e("OzsK"),y=e.n(M),k=e("wY7b"),N=e.n(k),D=e("KIoY"),S=e.n(D),z=e("Airf"),O=e.n(z),U=e("kZML"),E=e.n(U),Z=e("tA23"),P=e.n(Z),T=e("uAGw"),B=e.n(T),Q=e("o8xw"),R=e.n(Q),L=e("HxxQ"),Y=e.n(L),G=e("7Q67"),V=e.n(G),W=e("YvSp"),H=e.n(W),X=e("9yAA"),F=e.n(X),K=e("OsYZ"),J=e.n(K),q=e("Fbzd"),$=e.n(q),tt=e("Gvzr"),it=e.n(tt),et=e("uZAz"),at=e.n(et),nt=e("99IU"),st=e.n(nt),ot=e("9MY+"),rt=e.n(ot),ct=e("U0ej"),lt=e.n(ct),ut=e("wO3+"),mt=e.n(ut),pt=e("Dznz"),vt=e.n(pt),gt=e("TdX2"),dt=e.n(gt),ft=e("uoL2"),wt=e.n(ft),ht=e("5pBQ"),Ct=e.n(ht);a.a.use(s.a),i.a={props:{bannerData:{type:Array,default:function(){return[{title:"不一样的线下活动---AQUOS夏普旷视系列电视体验趴",url:"http://www.jiguo.com/article/article/47853.html",cover:l.a},{title:"夏普旷视AQUOS电视，你值得一看！！",url:"http://www.jiguo.com/article/article/47857.html",cover:m.a},{title:"一台电视就是一套家庭影院 | AQUOS 夏普旷视系列电视时尚体验趴体验",url:"http://www.jiguo.com/article/article/48121.html",cover:v.a},{title:"极果线下爬梯之夏普旷世系列电视时尚体验趴",url:"http://www.jiguo.com/article/article/48025.html",cover:d.a},{title:"王者归来",url:"http://www.jiguo.com/article/article/47775.html",cover:w.a},{title:"极果线下趴——欢乐多~AQUOS夏普旷视新品发布会",url:"http://www.jiguo.com/article/article/47944.html",cover:C.a},{title:"尽享时尚、追忆过去——极果&AQUOS夏普旷世系列电视体验趴",url:"http://www.jiguo.com/article/article/47777.html",cover:I.a},{title:"被极致外形吸引，被色彩和音效打动，电视就买这样的",url:"http://www.jiguo.com/article/article/47705.html",cover:j.a},{title:"美食、美女、好产品一个都不能少——记极果首次线下时尚体验趴",url:"http://www.jiguo.com/article/article/47697.html",cover:x.a},{title:"极果线下趴—汇集多位大咖 带你体验夏普旷视系列新品",url:"http://www.jiguo.com/article/article/48014.html",cover:y.a},{title:"身临其境、完美邂逅。AQUOS夏普旷视S60线下体验趴",url:"http://www.jiguo.com/article/article/47806.html",cover:N.a},{title:"你的家值得一台更好的电视，AQUOS夏普旷视系列电视极果体验趴",url:"http://www.jiguo.com/article/article/47676.html",cover:S.a},{title:"聚会，见证王者归来",url:"http://www.jiguo.com/article/article/47862.html",cover:O.a},{title:"原来电视多得是你不知道的功能！AQUOS夏普旷视系列电视体验趴",url:"http://www.jiguo.com/article/article/47751.html",cover:E.a},{title:"极果线下第一趴----AQUOS夏普旷视系列电视",url:"http://www.jiguo.com/article/article/47946.html",cover:P.a},{title:"极果的首趴——果真旷世不框视",url:"http://www.jiguo.com/article/article/47821.html",cover:B.a},{title:"难得的线下体验，各路大神和极果小编现身",url:"http://www.jiguo.com/article/article/47787.html",cover:R.a},{title:"AQUOS夏普旷视系列电视线下体验趴  一个美好的周末",url:"http://www.jiguo.com/article/article/48354.html",cover:Y.a},{title:"重返那些年——极果AQUOS夏普旷视系列电视线下体验趴回顾",url:"http://www.jiguo.com/article/article/47936.html",cover:V.a},{title:"极果 X AQUOS夏普旷视系列电视线下体验趴",url:"http://www.jiguo.com/article/article/47769.html",cover:H.a},{title:"AQUOS夏普旷视系列电视VS极果，北京极客线下PARTY（视频花絮）",url:"http://www.jiguo.com/article/article/47723.html",cover:F.a},{title:"我与极果君的旷世之约",url:"http://www.jiguo.com/article/article/47926.html",cover:J.a},{title:"我的极果时尚体验之旅",url:"http://www.jiguo.com/article/article/47752.html",cover:$.a},{title:"极果组局电视趴 AQUOS夏普带你体验旷世不框视",url:"http://www.jiguo.com/article/article/47901.html",cover:it.a},{title:"与情怀相关：那些年我们追过的电视剧 - AQUOS夏普旷视系列电视线下体验趴",url:"http://www.jiguo.com/article/article/47860.html",cover:at.a},{title:"全面满足家用及专业需求的旗舰电视——AQUOS夏普旷视系列电视极果体验趴",url:"http://www.jiguo.com/article/article/47753.html",cover:st.a},{title:"旷世之作，共享影音饕餮盛宴！",url:"http://www.jiguo.com/article/article/47942.html",cover:rt.a},{title:"收获多：AQUOS夏普旷视系列电视线下活动，干货和美女一样都不少",url:"http://www.jiguo.com/article/article/47664.html",cover:lt.a},{title:"极果AQUOS夏普旷视系列电视线下时尚体验趴，给你电视想不到的薄",url:"http://www.jiguo.com/article/article/47691.html",cover:mt.a},{title:"我来帝都看电视----AQUOS夏普旷视系列电视极果大网线下面基趴",url:"http://www.jiguo.com/article/article/47867.html",cover:vt.a},{title:"一个注定不凡的午后，跳出边“框”看“视”界，极果AQUOS夏普旷视系列电视线下体验欢聚趴",url:"http://www.jiguo.com/article/article/47859.html",cover:dt.a},{title:"终于等到你，一场久等的线下体验趴",url:"http://www.jiguo.com/article/article/47947.html",cover:wt.a},{title:"时尚体验趴嗨到爆！环球小姐加特林怒怼渣电视 | 极果 x 夏普",url:"http://www.jiguo.com/article/article/47761.html",cover:Ct.a}]}},swiperOption:{type:Object,default:function(){return{prevButton:".swiper-button-prev",nextButton:".swiper-button-next",loop:!1}}}},components:{CommonItem:o.a},mounted:function(){}}},b1xF:function(t,i,e){t.exports=e.p+"static/img/img-7@3x.3d2abdf.jpg"},bg0g:function(t,i,e){"use strict";function a(t){e("kCI0")}var n=e("xZFn"),s=e("VU/8"),o=a,r=s(null,n.a,!1,o,"data-v-3b02c2fd",null);i.a=r.exports},cZGn:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"common__title-box"},[e("div",{staticClass:"common__title"},[e("span",{staticClass:"t1"},[t._v("[")]),t._v(" "),e("span",{staticClass:"t2"},[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"t3"},[t._v("]")])]),t._v(" "),e("div",{staticClass:"common__title-line"})])},n=[],s={render:a,staticRenderFns:n};i.a=s},"d/H/":function(t,i){},e4rN:function(t,i,e){"use strict";var a=e("7t+N"),n=e.n(a);i.a={props:{video:{type:Array,default:function(){return[{url:"http://v.qq.com/iframe/player.html?vid=x0566c1wlw2&auto=0",cover:e("j+OQ"),title:"AQUOS夏普旷视S60"},{url:"http://v.qq.com/iframe/player.html?vid=k0567c1i56m&auto=0",cover:e("64IA"),title:"iPhone那么薄的电视"},{url:"http://v.qq.com/iframe/player.html?vid=z0566aq8fev&auto=0",cover:e("p4Hq"),title:"60英寸超窄边框电视"},{url:"http://v.qq.com/iframe/player.html?vid=e0540kzyfa0&auto=0",cover:e("ilS/"),title:"极果夏普时尚体验趴"}]}}},data:function(){return{curr_url:"",height:2*window.innerWidth/3,curr_title:""}},watch:{curr_url:function(t){var i=this;t?(["mousewheel","DOMMouseScroll","touchmove"].forEach(function(t){window.addEventListener(t,i._preventDefault,{passive:!1})}),n()(window).data("data-tempscrollTop",n()(window).scrollTop()),n()(window).scrollTop(0)):(["mousewheel","DOMMouseScroll","touchmove"].forEach(function(t){window.removeEventListener(t,i._preventDefault)}),n()(window).scrollTop(n()(window).data("data-tempscrollTop")||0))}},methods:{playVideo:function(t){this.curr_url=t.url,this.curr_title=t.title},videoClose:function(){this.curr_url="",this.curr_title=""},_preventDefault:function(t){return t.preventDefault(),t.stopPropagation(),!1}}}},e5RB:function(t,i,e){"use strict";var a=e("qqiS"),n={install:function(t){t.component("loading",a.a)}};i.a=n},ePMN:function(t,i,e){t.exports=e.p+"static/img/logo@3x.21665a8.png"},ex4D:function(t,i,e){t.exports=e.p+"static/img/47777.3d03f2e.jpg"},"f/Oc":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABMJJREFUeAHl3M9qE0EYAPCZNVsPlaItFIUitgcVRB/AqjQXoR71DQr6GvY5FOoT6NGAlxZpfQBFUA+taGlLoAqFXrqx4/dtd8Ka3ezOTOb7djfuIZvM/pn5fpmd2UySkSJZDufuPhVCrgglbkkpfkBy59L05Kr8+O5Y7zOOa3Xn4eTvX8erENuyUuKqkOKzEGptZvfDS4xX4sPh3OJrodRjfJ5epJQ7rVb4aOr7xpd0+rg8P7q2dLPXi94qpeYzMUn5ZmZ364mMa44SLzI76AQpD8JW2B43JMSJetE6VIzLOtTMWopnQXxZZbakEuAEeCI8YSq10U+NcOII5UqAbU5ptGOEZI4DKmATJA1yqRFWxabXJCscEEEbuMREp1wn2aPBSDFOdLJR2OZkIToy6eY+5bbk2QPOUhrWcNvWHAwSevBtuM25E+B9TisUy5ByMMwjk96gmuSCAxZ7rQm5jDbxfRACHM0v3ogiYVcFa16TXHHCCdme2t78hi7YBsXL1M7W1zAUS6C3r9NK1zWuST5wMP5+DdIYSU3CG6grOq10XbOa5AsH484AYWKTkXziDAVqKpJvnEKgpiFR4JQCNQWJCscIaCQk6BWxd8RzUC2UOFjm3EY6LxjnhpsQyfHebS99n5MXazrNGAgPqhMSBw7GbAVUFyQuHCegqpE4cZyBqkLixhkJiBupCpyRgbiQqsLxAkSNVCUOxtYf7sAXrksyVNK2HiqJxDoCDMu3ahwsl3U3PywYTE8Csh0q2YdxqPbgHbfzuSbkkh7sKiqr6TavQL6Q6oKD8XgHGhUJj4ehX/ta6LnmYDlwIQHCE7vUgkCK7qnCo8Vs/GjyAEPE8NnK62WVzpYMCDNxQUoXrvQ5MQ7mTwqEGZAhMeCwAJEgMeGwAXlFYsRhBfKCxIzDDqSR/kTqPfRW5j0VHihENzwf3Pd5E3h22uJHLx81irPIbk268uyGghT8nQ58mUneqQwWgRWo36PZ3OckJT5VahZvIPEcg0FQvmZ7R/o4Nl9p50WO7VDOZ7e8XX2ksQB5w9ERMyKRA3nHYUYiBSLDYUQia6QdcbrQW3V1/KVraM+oG24SICccbFfgPudcKB5YjkySInm/xJxxUkMWzucg6N28AjkHlsLRl5XzuTwjeQNyDigHp05IXoAocOqCNDIQJU4dkEYCcsZxaCc489JvDK6dgaoocBV5OgFVUVD9rnLnbQ3EXUANk15zlsEKiLNgaZC851xlMQbiKlAexrA0jjIZAXEUZBhCWTp12UqBqAtQBmCynbKMhUCUGZsEbrMPVVmHAlFlaBO07b4UZc4FosjINljX/X2XPTNg5jsD10Bdj4t/DggjBL4G3f6pQU3HSaMeLdy7Hp0o/A+uzT8nM18p9YHGCUdD+UCKgcYRxxeS68QCmaqoC1THtUtNwqmBYGKB2wFOLmQ560KjcPANw1+E4O8YbRpuNEEb7MWWjd91xq98jctkuKMLEtoE8bRUJpk0GEeHZ4uENgGMKcKcXSXLGODoCK2QwAYuMbWmD85djxGOjs8cSa3F3XzhJG8wM8zg/yh0Rk1fY+/WO1EdaJAXMrHoSd70hvQ0gXDZ/YTGqXNx5sLz/3GaQCnkq+ndzXjiu79T4OBPSdubtwAAAABJRU5ErkJggg=="},hqlI:function(t,i,e){t.exports=e.p+"static/img/img-5@3x.9fde1dd.jpg"},"ilS/":function(t,i,e){t.exports=e.p+"static/img/img-74@3x.53c2f95.jpg"},"j+OQ":function(t,i,e){t.exports=e.p+"static/img/img-71@3x.7f73479.jpg"},j4R9:function(t,i){},jKD2:function(t,i,e){t.exports=e.p+"static/img/img-2@3x.23768a8.jpg"},"k+6c":function(t,i){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzdweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzcgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjEgKDQ0NDYzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lvIDlp4tAM3g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaVBob25lLTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjMuMDAwMDAwLCAtMjUzNC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0i5byA5aeLIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjMuMDAwMDAwLCAyNTM0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LjUsMCBDOC4yODA5NTIzNywwIDAsOC4wNTcxNDI4NCAwLDE4IEMwLDI3Ljk0Mjg1NzIgOC4yODA5NTIzNywzNiAxOC41LDM2IEMyOC43MTI1MjIsMzYgMzcsMjcuOTQyODU3MiAzNywxOCBDMzcsOC4wNTcxNDI4NCAyOC43MTI1MjIsMCAxOC41LDAgWiBNMTguNSwzMy43NjUwNzk0IEM5LjU1MzQzOTE3LDMzLjc2NTA3OTQgMi4yOTcwMDE3NywyNi43MDQ3NjE5IDIuMjk3MDAxNzcsMTcuOTkzNjUwOCBDMi4yOTcwMDE3Nyw5LjI4ODg4ODg5IDkuNTUzNDM5MTcsMi4yMjIyMjIyNCAxOC41LDIuMjIyMjIyMjQgQzI3LjQ0NjU2MDgsMi4yMjIyMjIyNCAzNC43MDk1MjM4LDkuMjg4ODg4ODkgMzQuNzA5NTIzOCwxNy45OTM2NTA4IEMzNC43MDI5OTgyLDI2LjcwNDc2MTkgMjcuNDQ2NTYwOSwzMy43NjUwNzk0IDE4LjUsMzMuNzY1MDc5NCBaIE0xMy44NTM3OTE5LDI0Ljc2MTkwNDggTDI1LjQzMDE1ODcsMTcuNzg0MTI3IEwxMy44NTM3OTE5LDExLjI1NzE0MjkgTDEzLjg1Mzc5MTksMjQuNzYxOTA0OCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},"k+hH":function(t,i,e){t.exports=e.p+"static/img/47853.faad9a9.jpg"},kCI0:function(t,i){},kK6p:function(t,i,e){"use strict";var a=e("7+uW"),n=e("F3EI"),s=e.n(n),o=e("RNpw"),r=e("KI4P");e.n(r);a.a.use(s.a),i.a={props:{bannerData:{type:Array,default:function(){return[{url:"http://www.jiguo.com/event/index/1381.html",cover:"http://s1.jiguo.com/beecb74c-05c5-45e0-94c3-79b257c43ea7/640?imageView2/1/w/640/h/400/q/100",title:"夏普旷视系列电视"},{url:"http://www.jiguo.com/event/index/985.html",cover:"http://s1.jiguo.com/26ad56a4-a75d-4ba3-8253-d9f1ed38dcc6/640?imageView2/1/w/640/h/400/q/100",title:"夏普50/60吋互联网电视"}]}},swiperOption:{type:Object,default:function(){return{prevButton:".swiper-button-prev",nextButton:".swiper-button-next",loop:!1}}}},components:{CommonItem:o.a},mounted:function(){}}},kZML:function(t,i,e){t.exports=e.p+"static/img/47751.e923aa0.jpg"},lyOF:function(t,i){},mUbh:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),e.d(i,"showPageLoading",function(){return n}),e.d(i,"hidePageLoading",function(){return s});var a=e("5reh"),n=function(t){(0,t.commit)(a.a,{show:!0})},s=function(t){(0,t.commit)(a.a,{show:!1})}},mz9q:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},n=[],s={render:a,staticRenderFns:n};i.a=s},nFws:function(t,i,e){t.exports=e.p+"static/img/47697.c22aaff.jpg"},o8xw:function(t,i,e){t.exports=e.p+"static/img/47787.d77b4e1.jpg"},oVjW:function(t,i,e){t.exports=e.p+"static/img/47857.62216ce.jpg"},p4Hq:function(t,i,e){t.exports=e.p+"static/img/img-73@3x.e5290ed.jpg"},pYmz:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("7oBO"),n=e("mz9q"),s=e("VU/8"),o=s(a.a,n.a,!1,null,null,null);i.default=o.exports},pc75:function(t,i,e){"use strict";var a=e("7t+N"),n=e.n(a);i.a={data:function(){return{show_menu:!1}},watch:{show_menu:function(){var t=this;["mousewheel","DOMMouseScroll","touchmove"].forEach(this.show_menu?function(i){window.addEventListener(i,t._preventDefault,{passive:!1})}:function(i){window.removeEventListener(i,t._preventDefault)})}},methods:{closeMenu:function(){this.show_menu=!1},openMenu:function(){this.show_menu=!0},_preventDefault:function(t){return t.preventDefault(),t.stopPropagation(),!1},scrollPagePosition:function(t,i){n()(t.currentTarget).parent().find(".on").removeClass("on"),n()(t.currentTarget).addClass("on"),this.scrollEl=n()("#"+i);var e=n()(this.$refs["header__nav-wrap"]).height();this.scrollEl.length&&(this.htmlBody=this.htmlBody||n()("html,body"),this.htmlBody.animate({scrollTop:this.scrollEl.offset().top-e}),this.show_menu=!1)}}}},qqiS:function(t,i,e){"use strict";function a(t){e("Iy5J")}var n=e("wIRj"),s=e("VU/8"),o=a,r=s(null,n.a,!1,o,null,null);i.a=r.exports},t6Kk:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA8CAYAAADFXvyQAAAAAXNSR0IArs4c6QAAAglJREFUeAHt3L1OAkEQB/CZvUPiJ2L8jh3qa2hnaa2x19ha+BTaabQ3liZ22tn4EiqdAT8SiRg1xuPWmUMjgssLzH8bjplt9sftsdllYJJWyRXXyadb7KnkiZzGrDYmSj3TDbHbnf6sHXKGk6YHVkG6jtu5Da7EhSvyNNe1o9Uk0zVXo0LD+rQKff463RxwQjwkE4ucY+KXcBfbGbVxxP7SNkOX0YsNP+ZH55MkufDkp7p0NZeSu6caxbkFeQ4RPQ/NjLy9v65670uyForMabQMWNZADWYu9/X2Hxfqt08tKVxCAAIQgAAEIAABCEAAAhCAAAQgAAEIGBDINsx0nPf58RI1klLqvekNM8fcoCguT3w8lNWFH8bGBpLa5xF5v6wBtG8B5tO4mFvTc7E9Od7YBEyngEyvfQWqCtBkZxoRAbrjSlQQH7SQgOlfcoRQWuNyskp3rQFc/wqojd5BJ78hXLUJnLhopGeb5CutLYG3YqI2chc1GxaKTYf2heKPD14hAAEIQAACEIAABCAAAQhAAAIQgAAEbAhkG2bfpQgrUoowi1KEv6UIKGYJTAQtZonjeFFLMs+kcmwp0M92mOlcTlaH61IKNWhb4v/RZwV1wPkfR6NqoweHabiL7YzauKyI3rZDcPRiU5aaVbcb7GE9wW7H6d8vSPHzBmkRPaabMMgjh+lKTdTmC7WrmLHIvaATAAAAAElFTkSuQmCC"},tA23:function(t,i,e){t.exports=e.p+"static/img/47946.b2eb275.jpg"},uAGw:function(t,i,e){t.exports=e.p+"static/img/47821.67b200c.jpg"},uZAz:function(t,i,e){t.exports=e.p+"static/img/47860.aa611b7.jpg"},ukYY:function(t,i,e){"use strict";var a=e("bOdI"),n=e.n(a),s=e("5reh"),o=n()({},s.a,function(t,i){var e=i.show;t.show=e||!1});i.a=o},uoL2:function(t,i,e){t.exports=e.p+"static/img/47947.ac52bc2.jpg"},v2ns:function(t,i){},wIRj:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"page-loading"},[a("img",{staticClass:"page-loading-img",attrs:{src:e("NHdK")}})])}],s={render:a,staticRenderFns:n};i.a=s},"wO3+":function(t,i,e){t.exports=e.p+"static/img/47691.424c8a8.jpg"},wY7b:function(t,i,e){t.exports=e.p+"static/img/47806.e9e1ac6.jpg"},wknz:function(t,i,e){"use strict";function a(t){e("G6G6")}var n=e("K55d"),s=e("L7xm"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,"data-v-ba15ab7a",null);i.a=c.exports},xJD8:function(t,i,e){"use strict";var a=e("Dd8w"),n=e.n(a),s=e("NYxO"),o=e("7t+N"),r=e.n(o),c=e("B/tv");i.a={computed:n()({},e.i(s.a)(["show"])),mounted:function(){window.hasAnimate=r()(".k-animate:not(.into-k-animate),.k-animate-2:not(.into-k-animate)");var t=r()(window).height(),i=c.a.debounce(function(){var i=r()(window).scrollTop();window.hasAnimate.filter(function(){return!r()(this).hasClass("into-k-animate no-animate")&&(!(i+t>r()(this).offset().top)||!r()(this).hasClass("no-all-animate")&&(r()(this).addClass("into-k-animate"),!1))})},30,50);r()(window).off("scroll.into.animate").on("scroll.into.animate",function(){i()}).trigger("scroll.into.animate")}}},xN3W:function(t,i,e){t.exports=e.p+"static/img/47944.d9c6359.jpg"},xZFn:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"footer__text"},[t._v("\n  Copyright © 2017 极果 All rights reserved. 京ICP备14052927号\n")])},n=[],s={render:a,staticRenderFns:n};i.a=s},yVGj:function(t,i,e){"use strict";i.a={props:{url:{type:String,default:"javascript:;"},cover:{type:String}}}},yf5L:function(t,i,e){"use strict";function a(t){e("lyOF"),e("Ge3A")}var n=e("e4rN"),s=e("Ha7+"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,"data-v-6fa8f0ab",null);i.a=c.exports},z3fL:function(t,i){},zDBE:function(t,i,e){"use strict";function a(t){e("Dwnj"),e("SS1Z")}var n=e("pc75"),s=e("7KhL"),o=e("VU/8"),r=a,c=o(n.a,s.a,!1,r,"data-v-dbf64e70",null);i.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.89707487e8c1ae38e486.js.map