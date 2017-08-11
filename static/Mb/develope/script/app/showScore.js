/**
 +----------------------------------------------------------
 //评分
 +----------------------------------------------------------
 */

define([
    'jquery',
    'global.fun',
],function ($,global){

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
                <svg width="'+this.width+'px" height="'+this.width+'px" viewbox="0 0 '+this.width+' '+this.width+'">\
                    <defs>\
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">\
                            <stop offset="0%" stop-color="#FA9161" />\
                            <stop offset="100%" stop-color="#F7561C" />\
                        </linearGradient>\
                    </defs>\
                    <circle cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" stroke="#e5e5e5" fill="none"></circle>\
                    <circle id="'+id+'" stroke="url(#grad1)" fill="none" stroke-dasharray="'+this.curr_percent+'px '+this.perimeter+'px" cx="'+this.cx_cy.cx+'px" cy="'+this.cx_cy.cy+'px" r="'+this.r+'px" stroke-width="'+this.stroke_width+'px" transform="matrix(0,-1,1,0,0,'+this.width+')"></circle>\
                    <g id="g1-'+id+'" style="display:'+(this.curr_percent?'block':'none')+'">\
                        <text font-size="32" font-weight="400" fill="#000000">\
                            <tspan id="score-'+id+'" x="32" y="61">0.0</tspan>\
                        </text>\
                        <text font-size="12" font-weight="normal" fill="#767676">\
                            <tspan id="desc-'+id+'" x="32" y="80"></tspan>\
                        </text>\
                     </g>\
                     <g id="g2-'+id+'" style="display:'+(this.curr_percent?'none':'block')+'">\
                        <text id="您还未评分">\
                            <tspan x="22" y="63">您还未评分</tspan>\
                        </text>\
                    </g>\
                </svg>';
        this.box.html(tpl);

        this.circle = $('#'+id);
        this.score = $('#score-'+id);
        this.desc = $('#desc-'+id);
        this.g1 = $('#g1-'+id);
        this.g2 = $('#g2-'+id);
    }
    createScorCircle.prototype = {
        setScor:function (score,time) {
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
            function exec() {
                var curr_now = new Date().getTime(),
                    _this = this,
                    timeer = null;
                if( curr_now<now + time ){
                    _this._setScor( _this._getCurrScore(time,curr_now - now , score) );
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
            this.circle.attr({
                'stroke-dasharray':Math.ceil( _score * this.perimeter )+'px '+this.perimeter+'px',
                'stroke-linecap':'round'
            });
            this.score.html( (_score * 10).toFixed(1));
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
            this.desc.html( desc );
        },
        _getCurrScore:function (allTime,dfTime,score) {
            return dfTime / allTime * score;
        }
    };

    return {
        createScorCircle:createScorCircle
    }

});

