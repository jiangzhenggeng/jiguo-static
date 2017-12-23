/**
 * Created by wuhongshan on 2017/6/3.
 */
define(['jquery'], function ($) {

    function init() {
        //每条拖动
        $('body').off('mousedown.t mouseup.t').on('mousedown.t', '#right .drag-dom', function () {
            var that = this;
            var selectEle = null;
            var dragEle = null;
            var targetEle=$(that).parent().find('.drag-dom');
            $(this).attr('draggable', true);
            $('body').off('selectstart').on('selectstart', that, function () {
                return false;
            });
//            开始拖拽效果
            $('body').off('dragstart.b dragstart.t').on('dragstart.t', that,function (e) {
                $(that).addClass('drag-red');
                selectEle = e.target || e.srcElement;
                dragEle = $(selectEle);
            });
//            拖拽结束
            $('body').off('dragend.b dragend.t').on('dragend.t',that, function () {
                $('.drag-dom').removeClass('drag-red').attr('draggable', false);
                selectEle = null;
                dragEle = null;
            });
            //    拖拽到目标元素上移动时
            targetEle.off('dragover.b dragover.t').on('dragover.t', function (e) {
                //拖动时一直运行
                e.preventDefault();
            });
//    拖拽元素进入目标元素头上
            targetEle.off('dragenter.b dragenter.t').on('dragenter.t', function () {
                $this=$(this);
                var index=$(that).parent().find('.drag-dom').index(this);
                if(index==0){
                    $this.before(selectEle);
                }else{
                    $this.after(selectEle);
                }
            });
//    拖拽元素进入目标元素上头，松开时
            targetEle.off('drop.b drop.t').on('drop.t', function () {
                selectEle = null;
                dragEle = null;
            });
        }).on('mouseup.t', '#right .drag-dom',function () {
            $(this).attr('draggable',false);
        });


        //块级拖动
        $('body').off('mousedown.b mouseup.b').on('mousedown.b', '.Z-block-title', function () {
            var selectEle = null;
            var dragEle = null;
            var that = $(this).parent().parent()[0];
            $(that).attr('draggable', true);
            $('body').off('selectstart').on('selectstart', that, function () {
                return false;
            });
//            开始拖拽效果
            $('body').off('dragstart.t dragstart.b').on('dragstart.b',that, function (e) {
                $(that).addClass('drag-red');
                selectEle = e.target || e.srcElement;
                dragEle = $(selectEle);
            });
//            拖拽结束
            $('body').off('dragend.t dragend.b').on('dragend.b',that, function () {
                $('.Z-dragblock').removeClass('drag-red').attr('draggable', false);
                selectEle = null;
                dragEle = null;
            });
            //    拖拽到目标元素上移动时
            $('body').off('dragover.t dragover.b').on('dragover.b', '.Z-dragblock', function (e) {
                //拖动时一直运行
                e.preventDefault();
            });
//    拖拽元素进入目标元素头上
            $('body').off('dragenter.t dragenter.b').on('dragenter.b', '.Z-dragblock', function () {
                $this=$(this);
                var index=$('.Z-dragblock').index(this);
                if(index==0){
                    $this.before(selectEle);
                }else{
                    $this.after(selectEle);
                }
            });
//    拖拽元素进入目标元素上头，松开时
            $('body').off('drop.t drop.b').on('drop.b', '.Z-dragblock', function () {
                selectEle = null;
                dragEle = null;
            });
        }).on('mouseup.b', '.Z-block-title',function () {
            $(this).attr('draggable',false);
        });
    }

    return {
        init:init
    }
})