define(["jquery","touchSlide"],function(a){return{init:function(b){var c=a.extend(!0,{slideCell:"#banner-inner",titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",interTime:"4000",autoPlay:!0,autoPage:!0},b);TouchSlide(c)}}})