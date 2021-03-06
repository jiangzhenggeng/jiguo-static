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
    'app/tplEngine',
    'app/common'
],function (
    $,global,layer,unitTool,jqueryRaty,tplEngine,common
){
    var TOTAL_SCORE = 10;

    function createScorCircle(box,width,curr_percent) {
        this.width = width || 112;
        this.stroke_width = 10;
        this.box = $(box);
        this.perimeter = Math.ceil(Math.PI * (this.width - this.stroke_width));
        this.curr_percent = curr_percent || this.perimeter;

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
                        <circle id="'+id+'" stroke="url(#grad1)" fill="none" stroke-dasharray="'+this.perimeter+'px '+this.perimeter+'px" stroke-dashoffset="'+this.curr_percent+'px" cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" transform="translate(86, 86) rotate(-90.000000) translate(-86.000000, -86.000000)"></circle>\
                    </svg>\
                    <div class="user-circle-score">\
                        <div id="g1-'+id+'" style="display:'+(this.curr_percent?'table-cell':'none')+'">\
                            <div id="score-'+id+'" style="font-size:32px;font-weight:400;color:#000">0.0</div>\
                            <div id="desc-'+id+'" style="font-size:12px;font-weight:normal;color:#767676"></div>\
                        </div>\
                        <div id="g2-'+id+'" style="display:'+(this.curr_percent?'none':'table-cell')+'">您还未评分</div>\
                    </div>\
                 </div>';
        this.box.html(tpl);

        this.circle = $('#'+id);
        this.score = $('#score-'+id);
        this.desc = $('#desc-'+id);
        this.g1 = $('#g1-'+id);
        this.g2 = $('#g2-'+id);
    }
    createScorCircle.prototype = {
        setScor:function (score,time) {
            if( score==this.start_score ) return;
            var time = time || 800;
            var now = new Date().getTime();
            var dr = 13;

            if( score>0 ){
                this.g1.css('display','table-cell');
                this.g2.css('display','none');
            }else{
                this.g1.css('display','none');
                this.g2.css('display','table-cell');
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
                'stroke-dashoffset':Math.ceil( (1 - _score * TOTAL_SCORE / 10 ) * this.perimeter ) +'px',
                'stroke-linecap':'round'
            });
            var s = (_score * TOTAL_SCORE).toFixed(1);
            this.score.html( s );
            this.desc.html( this._getScoreDesc( _score ) );
            //console.log( Math.ceil( _score * this.perimeter )+'px '+this.perimeter+'px',_score)
        },
        _getCurrScore:function (allTime,dfTime,score,start_score) {
            return start_score + dfTime / allTime * ( score - start_score );
        },
        _getScoreDesc:function ( _score ) {
            var score = (_score * TOTAL_SCORE);
            var desc = '';
            if( score<6 ){
                desc = '';
            }else if(score<7){
                desc = '尚需努力';
            }else if(score<8){
                desc = '用心之作';
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
            }
            return desc;
        },
        init:function () {
            var userScoreCacheFn = tplEngine.init( $('#report-score-tpl').html() );
            var rightUserScoreCacheFn = tplEngine.init( $('#right-report-score-tpl').html() );
            var _require_self_ = this;
            var scrollFlag = true;

            function showBar(right) {
                if(right=='right'){
                    var box = $('#right-report-score-wrap .show-line');
                }else{
                    var box = $('.show-line');
                }
                box.find('[data-animate][data-width]').each(function () {
                    var _this = $(this);
                   _this.animate({width:_this.attr('data-width') * 10 + '%' });
                });
            }
            $.get('/api/article/GetBlogScore',{
                blogid:blogid
            },function (replayDate) {
                if(replayDate.resultCode!=0){
                    layer.msg(replayDate.errorMsg||'获取评分错误');
                    return;
                }

                var submitScore = {
                    play_score:0,
                    profession_score:0,
                    video_score:0,
                    pic_score:0
                };
                var hasVideo = true;
                if(replayDate.result.video==0){
                    hasVideo = false;
                    TOTAL_SCORE = 9.7;
                }
                var html = userScoreCacheFn({
                        data:replayDate.result,
                        submitScore:submitScore
                    }),
                    rightHtml = rightUserScoreCacheFn({data:replayDate.result}),
                    wrapBox = $('#report-score-wrap'),
                    rightWrapBox = $('#right-report-score-wrap');
                wrapBox.html(html);
                rightWrapBox.html(rightHtml);
                //文章评分显示
                if(replayDate.result.score_num>0){
                    rightWrapBox.closest('.right-inner-query').show();
                }
                if(replayDate.result.is_show_score==1 && !(replayDate.result.has_can_score!=1 && replayDate.result.score_num<=0)){
                    wrapBox.closest('#article-score-warp').show();
                }

                showBar('right');
                //已经评分啦
                if( replayDate.result.has_can_score!=1 ){
                    var show_percent_line = $('.userscore');
                    if(show_percent_line.length){
                        $(window).on('scroll.userscore',function () {
                            if(!scrollFlag) return;
                            var offsetTop = show_percent_line.offset().top;
                            if( $(window).scrollTop() + $(window).height() + 60 > offsetTop ){
                                scrollFlag = false;
                                showBar();
                            }
                        }).trigger('scroll.userscore');
                    }
                }else{
                    var createScorCircle = new _require_self_.createScorCircle($('.show-percent-circle').eq(0),172);

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
                            common.login();
                        });
                    }
                    icon_box.each(function (i,el) {
                        var _readOnly = readOnly || $(this).parent().parent().hasClass('no-video');
                        $(el).raty({
                            readOnly:_readOnly,
                            number:5,
                            starOff:_readOnly?require.toUrl('../style/images/score/xing_3.svg'):require.toUrl('../style/images/score/xing_1.svg'),
                            starOn:_readOnly?require.toUrl('../style/images/score/xing_3.svg'):require.toUrl('../style/images/score/xing_2.svg'),
                            score: function() {
                                return $(this).attr('data-number');
                            },
                            mouseover: function (score) {
                                if(_readOnly) return;
                                $(this).next().html( _require_self_.getXingDesc(score) ).addClass('orange');
                            },
                            mouseout: function (score) {
                                if(_readOnly) return;
                                if($(this).attr('data-number')>0){
                                    $(this).next().html( _require_self_.getXingDesc(score) );
                                }else{
                                    $(this).next().html( '请评分' ).removeClass('orange');
                                }
                            },
                            click: function(score) {
                                if( !window.URL['uid'] ){
                                    common.login();
                                    return;
                                }
                                var p = $(this).attr('data-p');
                                var has_score = p * score;
                                $(this).attr('data-score',has_score * 2);
                                $(this).attr('data-number',score);
                                $(this).next().html( _require_self_.getXingDesc(score) ).addClass('orange');
                                if(($('.user-score-icon-desc.orange').length>=4 && hasVideo)||
                                    ($('.user-score-icon-desc.orange').length>=3 && !hasVideo)){
                                    $('.sub-score-btn').addClass('on');
                                }
                                setShowScore();
                                submitScore[ $(this).attr('data-submit-key') ] = score * 2;
                            }
                        });
                    });

                    user_submit_score.on('click','.sub-score-btn',function () {
                        if( !window.URL['uid'] ){
                            common.login();
                            return;
                        }
                        if(($('.user-score-icon-desc.orange').length<4 && hasVideo)||
                            ($('.user-score-icon-desc.orange').length<3 && !hasVideo)){
                            layer.msg('请先评分');
                            return;
                        }
                        submitScore.blogid = blogid;
                        $.get('/api/Score/Score',submitScore,function (replayData2) {
                            if( replayData2.resultCode!=0 ){
                                layer.msg(replayData2.errorMsg||'获取评分错误');
                                return;
                            }
                            var html = userScoreCacheFn({data:replayData2.result}),
                                rightHtml = rightUserScoreCacheFn({data:replayData2.result});
                            wrapBox.html(html);
                            rightWrapBox.closest('.right-inner-query').show();
                            rightWrapBox.html(rightHtml);
                            showBar();
                            user_submit_score.off('click');
                        },'json');
                    });
                }

            },'json');
        }
    }

});

