

define(['jquery','cookie'],function ($){

    $('.Z-menu').on('click','li > a ',function () {
        var dl = $(this).next('dl');

        if(dl.css('display')=='none'){
            dl.slideDown(180);
            $.cookie('Zmenu_'+$(this).parent().index(),'show');
        }else{
            dl.slideUp(180);
            $.cookie('Zmenu_'+$(this).parent().index(),'hide');
        }
    }).find('li').each(function () {
        if($.cookie('Zmenu_'+$(this).index())=='show'){
            $(this).find('dl').show();
        }
    }).find('dd.on').each(function () {
        $.cookie('Zmenu_'+$(this).parent().parent().index(),'show');
        $(this).parent().show();
    });

});