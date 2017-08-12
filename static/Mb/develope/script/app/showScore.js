/**
 +----------------------------------------------------------
 //评分
 +----------------------------------------------------------
 */

define([
    'jquery',
    'global.fun',
    'layer',
    'app/unitTool',
    'app/jqueryRaty',
    'app/tplEngine'
],function (
    $,global,layer,unitTool,jqueryRaty,tplEngine
){

    function createScorCircle(box,width,curr_percent) {
        this.width = width || 112;
        this.stroke_width = 10;
        this.box = $(box);
        this.perimeter = Math.ceil(Math.PI * (this.width - this.stroke_width));
        this.curr_percent = curr_percent || 0;

        this.r = (this.width - this.stroke_width) / 2;
        this.cx_cy = {
            cx:this.width/2,
            cy:this.width/2,
        };
        var id = 'id-'+Math.random().toString().replace('.','');

        var tpl = '\
                <div class="user-circle-score-wrap" width="'+this.width+'px" height="'+this.width+'px">\
                    <svg width="'+this.width+'px" height="'+this.width+'px" viewbox="0 0 '+this.width+' '+this.width+'">\
                        <defs>\
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">\
                                <stop offset="0%" stop-color="#FA9161" />\
                                <stop offset="100%" stop-color="#F7561C" />\
                            </linearGradient>\
                        </defs>\
                        <circle cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" stroke="#e5e5e5" fill="none"></circle>\
                        <circle id="'+id+'" stroke="url(#grad1)" fill="none" stroke-dasharray="'+this.curr_percent+'px '+this.perimeter+'px" cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" transform="matrix(0,-1,1,0,0,'+this.width+')"></circle>\
                    </svg>\
                    <div class="user-circle-score">\
                        <div id="g1-'+id+'" style="display:'+(this.curr_percent?'block':'none')+'">\
                            <div id="score-'+id+'" style="font-size:32px;font-weight:400;color:#000">0.0</div>\
                            <div id="desc-'+id+'" style="font-size:12px;font-weight:normal;color:#767676"></div>\
                        </div>\
                        <div id="g2-'+id+'" style="display:'+(this.curr_percent?'none':'block')+'">您还未评分</div>\
                    </div>\
                 </div>';
        this.box.html(tpl);

        this.circle = $('#'+id);
        this.score = $('#score-'+id);
        this.desc = $('#desc-'+id);
        this.g1 = $('#g1-'+id);
        this.g2 = $('#g2-'+id);
        this.animate = false;
    }
    createScorCircle.prototype = {
        setScor:function (score,time) {
            if( score==this.start_score ) return;
            var time = time || 800;
            var now = new Date().getTime();
            var dr = 13;

            if( score>0 ){
                this.g1.show();
                this.g2.hide();
            }else{
                this.g1.hide();
                this.g2.show();
                return;
            }

            var timeer = null;
            function exec() {
                var curr_now = new Date().getTime(),
                    _this = this;

                timeer && clearTimeout(timeer);

                if( curr_now<now + time ){
                    _this._setScor( _this._getCurrScore(time,curr_now - now , score , this.start_score || 0 ) );
                    timeer = setTimeout(function () {
                        exec.call(_this);
                    },dr);
                }else{
                    timeer && clearTimeout(timeer);
                    _this._setScor( score );
                }
            }
            exec.call(this);

        },
        _setScor:function (_score) {
            this.start_score = _score;
            this.circle.attr({
                'stroke-dasharray':Math.ceil( _score * this.perimeter )+'px '+this.perimeter+'px',
                'stroke-linecap':'round'
            });
            var s = (_score * 10).toFixed(1);
            this.score.html( s );
            this.desc.html( this._getScoreDesc( _score ) );
            //console.log( Math.ceil( _score * this.perimeter )+'px '+this.perimeter+'px',_score)
        },
        _getCurrScore:function (allTime,dfTime,score,start_score) {
            return start_score + dfTime / allTime * ( score - start_score );
        },
        _getScoreDesc:function ( _score ) {
            var score = (_score * 10);
            var desc = '';
            if( score<6 ){
                desc = '';
            }else if(score<8){
                desc = '良心之作';
            }else if(score<9){
                desc = '干货好文';
            }else if(score<=10){
                desc = '顶级神作';
            }
            return desc;
        }
    };

    return {
        createScorCircle:createScorCircle,
        getXingDesc:function (score) {
            var desc = '';
            if( score==1 ){
                desc = '太差了';
            }else if(score==2){
                desc = '不太好';
            }else if(score==3){
                desc = '一般般';
            }else if(score==4){
                desc = '比较好';
            }else if(score==5){
                desc = '很出色';
            }else {
                desc = '请打分';
            }
            return desc;
        },
        init:function () {
            var userScoreCacheFn = tplEngine.init( $('#user-score-tpl').html() );
            var _require_self_ = this;
            var _first_score = 0;
            function showBar() {
                var score_box = $('[data-my-score]');
                var score = score_box.attr('data-my-score');
                if(_first_score==score) return;
                $('.show-line').find('[data-animate][data-width]').each(function () {
                    var _this = $(this);
                   setTimeout(function () {
                       _this.css('width',_this.attr('data-width') * 10 + '%' );
                   },30);
                });

                var time = 1200;
                var now = new Date().getTime();
                var dr = 13;
                var timeer = null;

                function _getCurrScore(allTime,dfTime,score,start_score) {
                    return (start_score + dfTime / allTime * ( score - start_score )).toFixed(1);
                }
                function exec() {
                    var curr_now = new Date().getTime();
                    timeer && clearTimeout(timeer);
                    if( curr_now<now + time ){
                        var curr_score = _getCurrScore(time,curr_now - now , score , 0 );
                        score_box.html( curr_score );
                        _first_score = curr_score;
                        timeer = setTimeout(function () {
                            exec();
                        },dr);
                    }else{
                        timeer && clearTimeout(timeer);
                        score_box.html( score );
                        _first_score = score;
                    }
                }
                exec();

            }
            $.get('/api/article/GetBlogScore',{
                blogid:blogid
            },function (replayDate) {
                if(replayDate.resultCode!=0){
                    unitTool.msg(replayDate.errorMsg||'获取评分错误');
                    return;
                }

                var submitScore = {
                    play_score:0,
                    profession_score:0,
                    video_score:0,
                    pic_score:0
                };

                var complete = false;

                var html = userScoreCacheFn({
                    data:replayDate.result,
                    submitScore:submitScore
                });
                var wrapBox = $('.user-percent-score-content');
                wrapBox.html(html);

                //已经评分啦
                if( replayDate.result.score_num ){
                    var show_percent_line = $('.show-percent-line');
                    if(show_percent_line.length){
                        $(window).on('scroll.userscore',function () {
                            var offsetTop = show_percent_line.offset().top;
                            if( $(window).scrollTop() + $(window).height() - 60 > offsetTop ){
                                $(window).off('scroll.userscore');
                                showBar();
                            }
                        }).trigger('scroll.userscore');
                    }
                }

                if( replayDate.result.has_can_score && replayDate.result.my_score<=0 ){

                    var createScorCircle = new _require_self_.createScorCircle($('.show-percent-circle').eq(0) );

                    var icon_box = $('.user-score-icon-box');
                    var user_submit_score = $('.user-submit-score');

                    function setShowScore() {
                        var total_score = 0, curr_score = 0;
                        icon_box.each(function () {
                            curr_score = parseFloat($(this).attr('data-score') );
                            total_score += curr_score;
                        });
                        createScorCircle.setScor(total_score/10);
                    }
                    var readOnly = false;
                    if( !window.URL['uid'] ){
                        readOnly = true;
                        wrapBox.on('click','.user-score-icon-box img',function () {
                            window.location = '/mb/user/login.html';
                        });
                    }
                    icon_box.raty({
                        readOnly:readOnly,
                        number:5,
                        starOff:require.toUrl('../style/images/score/xing_1.svg'),
                        starOn:require.toUrl('../style/images/score/xing_2.svg'),
                        score: function() {
                            return $(this).attr('data-number');
                        },
                        click: function(score) {
                            if( !window.URL['uid'] ){
                                window.location = '/mb/user/login.html';
                                return;
                            }
                            var p = $(this).attr('data-p');
                            var has_score = p * score;
                            $(this).attr('data-score',has_score * 2);
                            $(this).attr('data-number',score);
                            $(this).next().html( _require_self_.getXingDesc(score) );
                            setShowScore();
                            submitScore[ $(this).attr('data-submit-key') ] = score * 2;

                            for(var i in submitScore){
                                if(submitScore[i]==0){
                                    complete = false;
                                    break;
                                }
                                complete = true;
                            }
                            if(!complete){
                                user_submit_score.find('.btn').removeClass('red').addClass('gray');
                            }else{
                                user_submit_score.find('.btn').removeClass('gray').addClass('red');
                            }
                        }
                    });

                    user_submit_score.on('click','.btn',function () {
                        if( !window.URL['uid'] ){
                            window.location = '/mb/user/login.html';
                            return;
                        }
                        if( !complete ){
                            unitTool.msg('请先评分');
                            return;
                        }
                        submitScore.blogid = blogid;
                        $.get('/api/Score/Score',submitScore,function (replayData2) {
                            if( replayData2.resultCode!=0 ){
                                unitTool.msg(replayData2.errorMsg||'获取评分错误');
                                return;
                            }
                            var html = userScoreCacheFn({data:replayData2.result});
                            wrapBox.html(html);
                            showBar();
                            user_submit_score.off('click');
                            $('html,body').animate({
                                'scrollTop':wrapBox.offset().top - 52
                            });
                        },'json');
                    });
                }

            },'json');
        }
    }

});

