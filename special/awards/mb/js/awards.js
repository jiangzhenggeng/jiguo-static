$(function(){
	var ele=document.documentElement||document.body||window.body;
	ele.style.fontSize=innerWidth/7.5+"px";
	window.onresize=function(){
		ele.style.fontSize=innerWidth/7.5+"px";
	}

	//点击出现当前奖项的详细内容
	var awardsTypeText={
		"年度变革力量":"GTIC AWARDS年度大奖<br/>「年度变革力量」<br/>对最具创新性、最具颠覆性、最有影响力的「X」<br/>授予最高荣誉，颁奖范围不限于产品、团队、商业应<br/>用和创业者。<br/>(不开放提交)<br/>",
		"年度工业设计奖":"设计之美，不单在于外观的赏心悦目，更在于触动<br/>内心的力量。这一奖项授予那些拥有令人难以抵<br/>抗的工业设计之美的产品。<br/>",
		"年度创新产品奖":"唯有创新，<br/>才具有长久的生命力，<br/>对创造产品之不同的追求，<br/>当成为公司的本能，<br/>激励前行<br/>",
		"年度新锐公司":"永远不要低估初创公司的能量，<br/>如同从来不要看轻年轻人。<br/>因为今天的新锐，<br/>未来或许就是下一只独角兽。<br/>",
		"年度商业应用奖":"一切源于技术，<br/>一切又不能止于技术，<br/>技术需要回归到对商业应用的摸索和开发上。<br/>年度商业应用奖授予那些<br/>找到商业应用空间的技术。<br/>",
		"年度创业人物":"怀揣改变世界的勇气，<br/>却也要承受难以想象的压力，<br/>生存、突围是所有创业者每天都要面临的问题。<br/>在已然过去的2016年，<br/>究竟谁能从智能时代新一轮创业热潮中突围而出？<br/>"
	}
	$('.awardsType').on('click','li',function(){
		var awardsName=$(this).find('.awardsName').text();

		$('.awardsIntroName').text(awardsName);
		if(awardsName=="年度变革力量"){
			$('.signUp').css({"display":"none"});
		}else{
			$('.signUp').css({"display":"block"});
		}
		$.each(awardsTypeText,function(i,elem){
			if(i==awardsName){
				$('.awardsIntroMid p').html(elem)

			}
		});

		// $(window).bind('touchmove.default',function (e) {
		// 	e.preventDefault();
		// });

		switch (awardsName){
			case "年度工业设计奖":
				$(".signUp").attr("onclick","window.openApply(this,1)");
				break;
			case "年度创新产品奖":
				$(".signUp").attr("onclick","window.openApply(this,2)");
				break;
			case "年度新锐公司":
				$(".signUp").attr("onclick","window.openApply(this,3)");
				break;
			case "年度商业应用奖":
				$(".signUp").attr("onclick","window.openApply(this,4)");
				break;
			case "年度创业人物":
				$(".signUp").attr("onclick","window.openApply(this,5)");
				break;
			default:
				break;
		}
		var o = $('.awardsIntro');
		o.css({"display":"flex"});
		$(window).scrollTop(o.offset().top);
	})

	//关闭当前奖项的详细内容
	$(".closeAwardsIntro").click(function(){
		$('.awardsIntro').css({"display":"none"});
		$(window).unbind('touchmove.default');
	})

	//打开菜单按钮
	$(".menu").click(function(){
		if(!$(this).hasClass("closeMenu")){
			var shadeHeight=innerHeight;

			$(this).addClass("closeMenu");
			$(".shade").css({"height":shadeHeight,"display":"flex"});
		}else{
			$(this).removeClass("closeMenu");
			$(".shade").css({"display":"none"});
		}
	})

	//点击菜单栏跳转到制定位置
	$(".awardsMenu").on("click","li[data-class]",function(){
		var targetClass=".";
		targetClass+=$(this).attr("data-class");
		var targetHeight=$(targetClass).position().top-$(".nav").height();

		$(this).css({"color":"#5077f2"});
		var that=this;
		setTimeout(function(){
			$(that).css({"color":"#fff"});
			$(".menu").click();
			//$(window).scrollTop(targetHeight);
			$("html,body").animate({scrollTop:targetHeight},300);
		},30)

	})

	//点击下一页
	$(".next").click(function(){
		var secondPageHeight=$(".selectionProcess").position().top-$(".nav").height();
		$("html,body").animate({scrollTop:secondPageHeight},300);
		//$(window).scrollTop(secondPageHeight);
	})
})
