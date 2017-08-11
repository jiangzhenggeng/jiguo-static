define(["jquery","global.fun","layer","app/unitTool","app/jqueryRaty","app/tplEngine"],function(a,b,c,d,e,f){function g(b,c,d){this.width=c||112,this.stroke_width=10,this.box=a(b),this.perimeter=Math.ceil(Math.PI*(this.width-this.stroke_width)),this.curr_percent=d||0,this.r=(this.width-this.stroke_width)/2,this.cx_cy={cx:this.width/2,cy:this.width/2};var e="id-"+Math.random().toString().replace(".",""),f='                <div class="user-circle-score-wrap" width="'+this.width+'px" height="'+this.width+'px">                    <svg width="'+this.width+'px" height="'+this.width+'px" viewbox="0 0 '+this.width+" "+this.width+'">                        <defs>                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">                                <stop offset="0%" stop-color="#FA9161" />                                <stop offset="100%" stop-color="#F7561C" />                            </linearGradient>                        </defs>                        <circle cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" stroke="#e5e5e5" fill="none"></circle>                        <circle id="'+e+'" stroke="url(#grad1)" fill="none" stroke-dasharray="'+this.curr_percent+"px "+this.perimeter+'px" cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" transform="matrix(0,-1,1,0,0,'+this.width+')"></circle>                    </svg>                    <div class="user-circle-score">                        <div id="g1-'+e+'" style="display:'+(this.curr_percent?"block":"none")+'">                            <div id="score-'+e+'" style="font-size:32px;font-weight:400;color:#000">0.0</div>                            <div id="desc-'+e+'" style="font-size:12px;font-weight:normal;color:#767676"></div>                        </div>                        <div id="g2-'+e+'" style="display:'+(this.curr_percent?"none":"block")+'">您还未评分</div>                    </div>                 </div>';this.box.html(f),this.circle=a("#"+e),this.score=a("#score-"+e),this.desc=a("#desc-"+e),this.g1=a("#g1-"+e),this.g2=a("#g2-"+e),this.animate=!1}return g.prototype={setScor:function(a,b){function f(){var g=(new Date).getTime(),h=this;e&&clearTimeout(e),g<c+b?(h._setScor(h._getCurrScore(b,g-c,a,this.start_score||0)),e=setTimeout(function(){f.call(h)},d)):(e&&clearTimeout(e),h._setScor(a))}if(a==this.start_score)return;var b=b||800,c=(new Date).getTime(),d=13;if(!(a>0)){this.g1.hide(),this.g2.show();return}this.g1.show(),this.g2.hide();var e=null;f.call(this)},_setScor:function(a){this.start_score=a,this.circle.attr({"stroke-dasharray":Math.ceil(a*this.perimeter)+"px "+this.perimeter+"px","stroke-linecap":"round"});var b=(a*10).toFixed(1);this.score.html(b),this.desc.html(this._getScoreDesc(a))},_getCurrScore:function(a,b,c,d){return d+b/a*(c-d)},_getScoreDesc:function(a){var b=a*10,c="";return b<6?c="":b<8?c="良心之作":b<9?c="干货好文":b<=10&&(c="顶级神作"),c}},{createScorCircle:g,getXingDesc:function(a){var b="";return a==1?b="太差了":a==2?b="不太好":a==3?b="一般般":a==4?b="比较好":a==5&&(b="很出色"),b},init:function(){function e(){a(".show-line").find("[data-animate][data-width]").each(function(){var b=a(this);setTimeout(function(){b.css("width",b.attr("data-width")*10+"%")},30)})}var b=f.init(a("#user-score-tpl").html()),c=this;a.get("/api/article/GetBlogScore",{blogid:blogid},function(f){if(f.resultCode!=0){d.msg(f.errorMsg||"获取评分错误");return}var g={play_score:0,profession_score:0,video_score:0,pic_score:0},h=!1,i=b({data:f.result,submitScore:g}),j=a(".user-percent-score-content");j.html(i);if(f.result.my_score>0&&f.result.is_score||f.result.has_can_score!=1){var k=a(".show-percent-line");if(k.length){var l=k.offset().top;a(window).on("scroll.userscore",function(){a(window).scrollTop()+a(window).height()+60>l&&(e(),a(window).off("scorll.userscore"))}).trigger("scroll.userscore")}}else{var m=new c.createScorCircle(a(".show-percent-circle").eq(0)),n=a(".user-score-icon-box"),o=a(".user-submit-score");function p(){var b=0,c=0;n.each(function(){c=parseFloat(a(this).attr("data-score")),b+=c}),m.setScor(b/10)}var q=!1;window.URL.uid||(q=!0,j.on("click",".user-score-icon-box img",function(){window.location="/mb/user/login.html"})),n.raty({readOnly:q,number:5,starOff:require.toUrl("../style/images/score/xing_1.svg"),starOn:require.toUrl("../style/images/score/xing_2.svg"),score:function(){return a(this).attr("data-number")},click:function(b){if(!window.URL.uid){window.location="/mb/user/login.html";return}var d=a(this).attr("data-p"),e=d*b;a(this).attr("data-score",e*2),a(this).attr("data-number",b),a(this).next().html(c.getXingDesc(b)),p(),g[a(this).attr("data-submit-key")]=b*2;for(var f in g){if(g[f]==0){h=!1;break}h=!0}h?o.find(".btn").removeClass("gray").addClass("red"):o.find(".btn").removeClass("red").addClass("gray")}}),o.on("click",".btn",function(){if(!window.URL.uid){window.location="/mb/user/login.html";return}if(!h){d.msg("请先评分");return}g.blogid=blogid,a.get("/api/Score/Score",g,function(c){if(c.resultCode!=0){d.msg(c.errorMsg||"获取评分错误");return}var f=b({data:c.result});j.html(f),e(),o.off("click"),a("html,body").animate({scrollTop:j.offset().top-52})},"json")})}},"json")}}})