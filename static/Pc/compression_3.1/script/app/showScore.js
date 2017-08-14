define(["jquery","global.fun","layer","app/unitTool","app/jqueryRaty","app/tplEngine","app/common"],function(a,b,c,d,e,f,g){function h(b,c,d){this.width=c||112,this.stroke_width=10,this.box=a(b),this.perimeter=Math.ceil(Math.PI*(this.width-this.stroke_width)),this.curr_percent=d||this.perimeter,this.r=(this.width-this.stroke_width)/2,this.cx_cy={cx:this.width/2,cy:this.width/2};var e="id-"+Math.random().toString().replace(".",""),f='                <div class="user-circle-score-wrap" width="'+this.width+'px" height="'+this.width+'px">                    <svg width="'+this.width+'px" height="'+this.width+'px" viewbox="0 0 '+this.width+" "+this.width+'">                        <defs>                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">                                <stop offset="0%" stop-color="#FA9161" />                                <stop offset="100%" stop-color="#F7561C" />                            </linearGradient>                        </defs>                        <circle cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" stroke="#e5e5e5" fill="none"></circle>                        <circle id="'+e+'" stroke="url(#grad1)" fill="none" stroke-dasharray="'+this.perimeter+"px "+this.perimeter+'px" stroke-dashoffset="'+this.curr_percent+'px" cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" transform="translate(86, 86) rotate(-90.000000) translate(-86.000000, -86.000000)"></circle>                    </svg>                    <div class="user-circle-score">                        <div id="g1-'+e+'" style="display:'+(this.curr_percent?"table-cell":"none")+'">                            <div id="score-'+e+'" style="font-size:32px;font-weight:400;color:#000">0.0</div>                            <div id="desc-'+e+'" style="font-size:12px;font-weight:normal;color:#767676"></div>                        </div>                        <div id="g2-'+e+'" style="display:'+(this.curr_percent?"none":"table-cell")+'">您还未评分</div>                    </div>                 </div>';this.box.html(f),this.circle=a("#"+e),this.score=a("#score-"+e),this.desc=a("#desc-"+e),this.g1=a("#g1-"+e),this.g2=a("#g2-"+e)}return h.prototype={setScor:function(a,b){function f(){var g=(new Date).getTime(),h=this;e&&clearTimeout(e),g<c+b?(h._setScor(h._getCurrScore(b,g-c,a,this.start_score||0)),e=setTimeout(function(){f.call(h)},d)):(e&&clearTimeout(e),h._setScor(a))}if(a==this.start_score)return;var b=b||800,c=(new Date).getTime(),d=13;if(!(a>0)){this.g1.css("display","none"),this.g2.css("display","table-cell");return}this.g1.css("display","table-cell"),this.g2.css("display","none");var e=null;f.call(this)},_setScor:function(a){this.start_score=a,this.circle.attr({"stroke-dashoffset":Math.ceil((1-a)*this.perimeter)+"px ","stroke-linecap":"round"});var b=(a*10).toFixed(1);this.score.html(b),this.desc.html(this._getScoreDesc(a))},_getCurrScore:function(a,b,c,d){return d+b/a*(c-d)},_getScoreDesc:function(a){var b=a*10,c="";return b<6?c="":b<8?c="用心之作":b<9?c="干货好文":b<=10&&(c="顶级神作"),c}},{createScorCircle:h,getXingDesc:function(a){var b="";return a==1?b="太差了":a==2?b="不太好":a==3?b="一般般":a==4?b="比较好":a==5&&(b="很出色"),b},init:function(){function h(b){if(b=="right")var c=a("#right-report-score-wrap .show-line");else var c=a(".show-line");c.find("[data-animate][data-width]").each(function(){var b=a(this);b.animate({width:b.attr("data-width")*10+"%"})})}var b=f.init(a("#report-score-tpl").html()),d=f.init(a("#right-report-score-tpl").html()),e=this;a.get("/api/article/GetBlogScore",{blogid:blogid},function(f){if(f.resultCode!=0){c.msg(f.errorMsg||"获取评分错误");return}var i={play_score:0,profession_score:0,video_score:0,pic_score:0},j=b({data:f.result,submitScore:i}),k=d({data:f.result}),l=a("#report-score-wrap"),m=a("#right-report-score-wrap");l.html(j),m.html(k),f.result.score_num>0&&m.closest(".right-inner-query").show(),f.result.is_show_score==1&&!(f.result.has_can_score!=1&&f.result.score_num<=0)&&l.closest("#article-score-warp").show(),h("right");if(f.result.has_can_score!=1){var n=a(".buy-item-warp");if(n.length){var o=n.offset().top;a(window).on("scroll.userscore",function(){a(window).scrollTop()+a(window).height()+60>o&&(h(),a(window).off("scorll.userscore"))}).trigger("scroll.userscore")}}else{var p=new e.createScorCircle(a(".show-percent-circle").eq(0),172),q=a(".user-score-icon-box"),r=a(".user-submit-score");function s(){var b=0,c=0;q.each(function(){c=parseFloat(a(this).attr("data-score")),b+=c}),p.setScor(b/10)}var t=!1;window.URL.uid||(t=!0,l.on("click",".user-score-icon-box img",function(){g.login()})),q.raty({readOnly:t,number:5,starOff:require.toUrl("../style/images/score/xing_1.svg"),starOn:require.toUrl("../style/images/score/xing_2.svg"),score:function(){return a(this).attr("data-number")},mouseover:function(b){a(this).next().html(e.getXingDesc(b)).addClass("orange")},mouseout:function(b){a(this).attr("data-number")>0?a(this).next().html(e.getXingDesc(b)):a(this).next().html("请评分").removeClass("orange")},click:function(b){if(!window.URL.uid){g.login();return}var c=a(this).attr("data-p"),d=c*b;a(this).attr("data-score",d*2),a(this).attr("data-number",b),a(this).next().html(e.getXingDesc(b)).addClass("orange"),a(".user-score-icon-desc.orange").length>=4&&a(".sub-score-btn").addClass("on"),s(),i[a(this).attr("data-submit-key")]=b*2}}),r.on("click",".sub-score-btn",function(){if(!window.URL.uid){g.login();return}if(a(".user-score-icon-desc.orange").length<4){c.msg("请先评分");return}i.blogid=blogid,a.get("/api/Score/Score",i,function(a){if(a.resultCode!=0){c.msg(a.errorMsg||"获取评分错误");return}var e=b({data:a.result}),f=d({data:a.result});l.html(e),m.closest(".right-inner-query").show(),m.html(f),h(),r.off("click")},"json")})}},"json")}}})