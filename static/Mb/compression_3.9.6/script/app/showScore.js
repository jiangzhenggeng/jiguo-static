define(["jquery","global.fun","layer","app/unitTool","app/jqueryRaty","app/tplEngine"],function(a,b,c,d,e,f){function h(b,c,d){this.width=c||112,this.stroke_width=10,this.box=a(b),this.perimeter=Math.ceil(Math.PI*(this.width-this.stroke_width)),this.curr_percent=d||this.perimeter,this.r=(this.width-this.stroke_width)/2,this.cx_cy={cx:this.width/2,cy:this.width/2};var e="id-"+Math.random().toString().replace(".",""),f='                <div class="user-circle-score-wrap" width="'+this.width+'px" height="'+this.width+'px">                    <svg width="'+this.width+'px" height="'+this.width+'px" viewbox="0 0 '+this.width+" "+this.width+'">                        <defs>                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">                                <stop offset="0%" stop-color="#FA9161" />                                <stop offset="100%" stop-color="#F7561C" />                            </linearGradient>                        </defs>                        <circle cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" stroke="#e5e5e5" fill="none"></circle>                        <circle id="'+e+'" stroke="url(#grad1)" fill="none" stroke-dasharray="'+this.perimeter+"px "+this.perimeter+'px" stroke-dashoffset="'+this.curr_percent+'px" cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" transform="translate(56, 56) rotate(-90.000000) translate(-56.000000, -56.000000)"></circle>                    </svg>                    <div class="user-circle-score">                        <div id="g1-'+e+'" style="display:'+(this.curr_percent?"block":"none")+'">                            <div id="score-'+e+'" style="font-size:32px;font-weight:400;color:#000">0.0</div>                            <div id="desc-'+e+'" style="font-size:12px;font-weight:normal;color:#767676"></div>                        </div>                        <div id="g2-'+e+'" style="display:'+(this.curr_percent?"none":"block")+'">您还未评分</div>                    </div>                 </div>';this.box.html(f),this.circle=a("#"+e),this.score=a("#score-"+e),this.desc=a("#desc-"+e),this.g1=a("#g1-"+e),this.g2=a("#g2-"+e),this.animate=!1}var g=10;return h.prototype={setScor:function(a,b){function f(){var g=(new Date).getTime(),h=this;e&&clearTimeout(e),g<c+b?(h._setScor(h._getCurrScore(b,g-c,a,this.start_score||0)),e=setTimeout(function(){f.call(h)},d)):(e&&clearTimeout(e),h._setScor(a))}if(a==this.start_score)return;var b=b||800,c=(new Date).getTime(),d=13;if(!(a>0)){this.g1.hide(),this.g2.show();return}this.g1.show(),this.g2.hide();var e=null;f.call(this)},_setScor:function(a){this.start_score=a,this.circle.attr({"stroke-dashoffset":Math.ceil((1-a*g/10)*this.perimeter)+"px","stroke-linecap":"round"});var b=(a*g).toFixed(1);this.score.html(b),this.desc.html(this._getScoreDesc(a))},_getCurrScore:function(a,b,c,d){return d+b/a*(c-d)},_getScoreDesc:function(a){var b=a*g,c="";return b<6?c="":b<8?c="用心之作":b<9?c="干货好文":b<=10&&(c="顶级神作"),c}},{createScorCircle:h,getXingDesc:function(a){var b="";return a==1?b="太差了":a==2?b="不太好":a==3?b="一般般":a==4?b="比较好":a==5?b="很出色":b="请打分",b},init:function(){function h(){function i(a,b,c,d){return(d+b/a*(c-d)).toFixed(1)}function j(){var a=(new Date).getTime();h&&clearTimeout(h);if(a<f+d){var k=i(d,a-f,c,0);b.html(k),e=k,h=setTimeout(function(){j()},g)}else h&&clearTimeout(h),b.html(c),e=c}var b=a("[data-my-score]"),c=b.attr("data-my-score");if(e==c)return;a(".show-line").find("[data-animate][data-width]").each(function(){var b=a(this);setTimeout(function(){b.css("width",b.attr("data-width")*10+"%")},30)});var d=1200,f=(new Date).getTime(),g=13,h=null;j()}var b=f.init(a("#user-score-tpl").html()),c=this,e=0;a.get("/api/article/GetBlogScore",{blogid:blogid},function(e){if(e.resultCode!=0){d.msg(e.errorMsg||"获取评分错误");return}var f={play_score:0,profession_score:0,video_score:0,pic_score:0};e.result.video==0&&(g=9,f.video_score=1e-7);var i=!1,j=b({data:e.result,submitScore:f}),k=a(".user-percent-score-content");k.html(j);if(e.result.score_num){var l=a(".show-percent-line");l.length&&a(window).on("scroll.userscore",function(){var b=l.offset().top;a(window).scrollTop()+a(window).height()-60>b&&(a(window).off("scroll.userscore"),h())}).trigger("scroll.userscore")}if(e.result.has_can_score&&e.result.my_score<=0){var m=new c.createScorCircle(a(".show-percent-circle").eq(0)),n=a(".user-score-icon-box"),o=a(".user-submit-score");function p(){var b=0,c=0;n.each(function(){c=parseFloat(a(this).attr("data-score")),b+=c}),m.setScor(b/10)}var q=!1;window.URL.uid||(q=!0,k.on("click",".user-score-icon-box img",function(){window.location="/mb/user/login.html"})),n.each(function(){var b=q||a(this).parent().parent().hasClass("no-video");a(this).raty({readOnly:b,number:5,starOff:b?require.toUrl("../style/images/score/xing_3.svg"):require.toUrl("../style/images/score/xing_1.svg"),starOn:b?require.toUrl("../style/images/score/xing_3.svg"):require.toUrl("../style/images/score/xing_2.svg"),score:function(){return a(this).attr("data-number")},click:function(b){if(!window.URL.uid){window.location="/mb/user/login.html";return}var d=a(this).attr("data-p"),e=d*b;a(this).attr("data-score",e*2),a(this).attr("data-number",b),a(this).next().html(c.getXingDesc(b)),p(),f[a(this).attr("data-submit-key")]=b*2;for(var g in f){if(f[g]==0){i=!1;break}i=!0}i?o.find(".btn").removeClass("gray").addClass("red"):o.find(".btn").removeClass("red").addClass("gray")}})}),o.on("click",".btn",function(){if(!window.URL.uid){window.location="/mb/user/login.html";return}if(!i){d.msg("请先评分");return}f.blogid=blogid,a.get("/api/Score/Score",f,function(c){if(c.resultCode!=0){d.msg(c.errorMsg||"获取评分错误");return}var e=b({data:c.result});k.html(e),h(),o.off("click"),a("html,body").animate({scrollTop:k.offset().top-52})},"json")})}},"json")}}})