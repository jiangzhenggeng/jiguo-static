$(function(){
	//全屏滚动设置
	var url="apply.php";

			$('#fullpage').fullpage({
				controlArrows: false,
				navigation:true,
				navigationColor:'#858585',
				navigationTooltips:['GTIC AWARDS 2017','评选流程','获奖名单','联系我们'],
				scrollOverflow: true,
				afterLoad: function(anchorLink, index){
					if(index=='1'){
						$("#fp-nav ul li .fp-tooltip").css({'color':'#fff'});
					}
					if(index=='2'){
						$("#fp-nav ul li .fp-tooltip").css({'color':'#444'});
					}
					if(index=='3'){
						$("#fp-nav ul li .fp-tooltip").css({'color':'#fff'});
					}
					if(index=='4'){
						$("#fp-nav ul li .fp-tooltip").css({'color':'#444'});
					}
				}
			});

	//点击滚到下一页
	$('.next').click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	$('.awardsSencondPage').click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	$('.awardsThreePage').click(function(){
		$.fn.fullpage.moveTo(3,0);
	});
	$('.awardsFourPage').click(function(){
		$.fn.fullpage.moveTo(4,0);
	});
	$('.awardsFivePage').click(function(){
		$.fn.fullpage.moveTo(5,0);
	});
	//点击出现当前奖项的详细内容
	var awardsTypeText={
		"年度变革力量":"GTIC AWARDS年度大奖<br/>对最具创新性、最具颠覆性、最有影响力的「X」<br/>授予最高荣誉，评奖范围不限于产品、团队、商业应<br/>用和创业者。(不开放提交)",
		"年度工业设计奖":"设计之美，不单在于外观的赏心悦目，更在于触动<br/>内心的力量。这一奖项授予那些拥有令人难以抵<br/>抗的工业设计之美的产品。<br/>",
		"年度创新产品奖":"唯有创新，<br/>才具有长久的生命力，<br/>对创造产品之不同的追求，<br/>当成为公司的本能，<br/>激励前行。<br/>",
		"年度新锐公司":"永远不要低估初创公司的能量，<br/>如同从来不要看轻年轻人。<br/>因为今天的新锐，<br/>未来或许就是下一只独角兽。<br/>",
		"年度商业应用奖":"一切源于技术，<br/>一切又不能止于技术，<br/>技术需要回归到对商业应用的摸索和开发上。<br/>年度商业应用奖授予那些<br/>找到商业应用空间的技术。<br/>",
		"年度创业人物":"怀揣改变世界的勇气，<br/>却也要承受难以想象的压力，<br/>生存、突围是所有创业者每天都要面临的问题。<br/>在已然过去的2016年，<br/>究竟谁能从智能时代新一轮创业热潮中突围而出？<br/>"
	}
	$('.awardsType').on('click','li',function(){
		var awardsName=$(this).find('.awardsName').text();
		var awardsIntroLeft=$(this).position().left;
		$('.awardsIntroName').text(awardsName);
		if(awardsName=="年度变革力量"){
			$('.signUp').css({"display":"none"});
		}else{
			$('.signUp').css({"display":"block"});
		}
		$.each(awardsTypeText,function(i,elem){
			if(i==awardsName){
				$('.awardsIntroMid p').html(elem);
			}
		})
		$('.awardsIntro').css({"left":awardsIntroLeft-1,"display":"flex"});
	})
	//关闭当前奖项的详细内容
	$(".closeAwardsIntro").click(function(){
		$('.awardsIntro').css({"display":"none"});
	})
	//评审招募报名程序
	$('.editorSignUp').click(function(){
		var shadeHeight=innerHeight;
		$('.shade').css({"display":"flex","height":innerHeight});
		resetjurySignUpPage();
		$('.jurySignUpPage').css({"display":"block"});
		$(".CEOJuryTitle").css({"display":"none"});
		$(".editorJuryTitle").css({"display":"none"});
		$(".jurySignUpCurrent").css({"display":"flex"});
	});
	
	//切换评审选项
	$(".jurySignUpMid").on("click","p",function(){
		$(this).addClass("checked").siblings().removeClass("checked");
		$(".jurySignUpPage input").val("");
		$(".jurySignUpPage").find(".tips").removeClass("wrong true").text("");
	})
	
	//重置评审报名程序样式
	
	function resetjurySignUpPage(){
		$(".jurySignUpPage .nextStep").css({"display":"block"});
		$(".jurySignUpPage .nextStep").text("下一步");
		$(".jurySignUpPage .prevStep").css({"display":"none"});
		$(".jurySignUpPage").addClass("firstPage").removeClass("secondPage threePage");
		$(".jurySignUpMid").css({"display":"block"});
		$(".JuryPage").css({"display":"none"});
		$(".awardsSignUpPage").css({"display":"none"});
		$('.jurySignUpPage').css({"display":"none"});
//		$('.jurySignUpMid p').eq(0).addClass("checked").siblings().removeClass("checked");
		$(".jurySignUpPage input").val("");
		$(".jurySignUpPage").find(".tips").removeClass("wrong true").text("");
		$(".jurySignUpPage .successSubmit").css({"display":"none"});
	}
	
	//点击下一步
	$(".jurySignUpPage .nextStep").click(function(){
		//第二页
		if($(this).text()=="下一步"){
			if(!$(".jurySignUpPage p").hasClass("checked")){
				alert("请选择您需要参加的评审团！");
				return;
			}
			$(this).text("提交");
			$(".jurySignUpPage .prevStep").css({"display":"block"});
			$(".jurySignUpPage").addClass("secondPage").removeClass("firstPage");
			$(".jurySignUpMid").css({"display":"none"});
			$(".CEOJuryTitle").css({"display":"none"});
			$(".editorJuryTitle").css({"display":"none"});
			$(".jurySignUpCurrent").css({"display":"flex"});
			if($(".checked").text()=="加入CEO评审团"){
				$(".CEOJuryPage").css({"display":"block"});
			}else{
				$(".editorJuryPage").css({"display":"block"});
			}
			
		//第三页
		}else{
			var that=this;
			testJuryForm(that);
			
		}
		
	})
	
	//点击评审报名前一步
	
	$(".jurySignUpPage .prevStep").click(function(){
		if($(".jurySignUpPage").hasClass("secondPage")){
			$(".jurySignUpPage").addClass("firstPage").removeClass("secondPage");
			$(".jurySignUpPage .nextStep").text("下一步");
			$(".jurySignUpPage .prevStep").css({"display":"none"});
			if($(".checked").text()=="加入CEO评审团"){
				$(".CEOJuryPage").css({"display":"none"});
			}else{
				$(".editorJuryPage").css({"display":"none"});
			}
			$(".jurySignUpMid").css({"display":"block"});
		}
	})
	
	//直接点击CEO报名
	$(".CEOJury").click(function(){
		resetJurySignUp();
		if($(".successSubmit").css("display")=="none"){
			$(".CEOEnter").addClass("checked").siblings().removeClass("checked");
			$(".CEOJuryPage").css({"display":"block"});
			$(".CEOJuryTitle").css({"display":"block"});
			$(".editorJuryTitle").css({"display":"none"});
			$(".jurySignUpCurrent").css({"display":"none"});
		}
	});
	
	//直接点击主编报名
	$(".editorJury").click(function(){
		resetJurySignUp();
		if($(".successSubmit").css("display")=="none"){
			$(".editorEnter").addClass("checked").siblings().removeClass("checked");
			$(".editorJuryPage").css({"display":"block"});
			$(".CEOJuryTitle").css({"display":"none"});
			$(".editorJuryTitle").css({"display":"block"});
			$(".jurySignUpCurrent").css({"display":"none"});
		}
	});
	
	//重置快捷点击评审报名页面样式
	function resetJurySignUp(){
		var shadeHeight=innerHeight;
		$('.shade').css({"display":"flex","height":innerHeight});
		$(".jurySignUpPage .nextStep").css({"display":"block"});
		$(".jurySignUpPage .nextStep").text("提交");
		$(".jurySignUpPage .prevStep").css({"display":"block"});
		$(".jurySignUpPage").addClass("secondPage").removeClass("firstPage threePage");
		$(".jurySignUpMid").css({"display":"none"});
		$(".JuryPage").css({"display":"none"});
		$(".awardsSignUpPage").css({"display":"none"});
		$('.jurySignUpPage').css({"display":"block"});
		$(".jurySignUpPage").find(".tips").removeClass("wrong true").text("");
		$(".jurySignUpPage .successSubmit").css({"display":"none"});
	}
	
	
	
	//奖项报名程序
	
	$('.awardsSignUp').click(function(){
		var shadeHeight=innerHeight;
		$('.shade').css({"display":"flex","height":innerHeight});
		resetAwardsSignUp();
		//$(".awardsSignUpType li").eq(0).addClass("awardsChecked").siblings().removeClass("awardsChecked");
		$(".jurySignUpPage").css({"display":"none"});
		$('.awardsSignUpPage').css({"display":"block"});
	});
	
	//点击切换奖项选项
	
	$(".awardsSignUpPage").on("click","li",function(){
		$(this).addClass("awardsChecked").siblings().removeClass("awardsChecked");
		$(".awardsSignUpPage input").val("");
		$(".awardsSignUpPage textarea").val("");
		$(".awardsSignUpPage").find(".tips").removeClass("wrong true").text("");
	})
	
	//点击下一步
	$(".awardsSignUpPage .nextStep").click(function(){
		//第二页
		if($(this).text()=="下一步"&&$(".awardsSignUpPage").hasClass("firstPage")){
			if(!$(".awardsSignUpType li").hasClass("awardsChecked")){
				alert("请选择您的参选奖项！");
				return;
			}
			$(".prevStep").css({"display":"block"});
			$(".awardsSignUpPage").addClass("secondPage").removeClass("firstPage");
			$(".awardsSignUpType").css({"display":"none"});
			if($(".awardsChecked").text()=="年度工业设计奖"||$(".awardsChecked").text()=="年度创新产品奖"||$(".awardsChecked").text()=="年度商业应用奖"){
				$(".productPage").css({"display":"block"});
				$(".newCompany").css({"display":"none"});
				$(".pioneeringPeople").css({"display":"none"});
			}else if($(".awardsChecked").text()=="年度新锐公司"){
				$(".productPage").css({"display":"none"});
				$(".newCompany").css({"display":"block"});
				$(".pioneeringPeople").css({"display":"none"});
			}else if($(".awardsChecked").text()=="年度创业人物"){
				$(".productPage").css({"display":"none"});
				$(".newCompany").css({"display":"none"});
				$(".pioneeringPeople").css({"display":"block"});
			}
		//第三页
		}else if($(this).text()=="下一步"&&$(".awardsSignUpPage").hasClass("secondPage")){
			var that=this;
			testAwardsFormSecond(that);
			
		}else if($(this).text()=="完成信息并提交"){
			var that=this;
			testAwardsFormThree(that);
		}
	})
	
	//点击奖项报名前一页
	$(".awardsSignUpPage .prevStep").click(function(){
		if($(".awardsSignUpPage .nextStep").text()=="完成信息并提交"&&$(".awardsSignUpPage").hasClass("threePage")){
			$(".awardsSignUpPage").addClass("secondPage").removeClass("threePage");
			$(".moreInfor").css({"display":"none"});
			$(".awardsSignUpPage .nextStep").text("下一步");
			if($(".awardsChecked").text()=="年度工业设计奖"||$(".awardsChecked").text()=="年度创新产品奖"||$(".awardsChecked").text()=="年度商业应用奖"){
				$(".productPage").css({"display":"block"});
				$(".newCompany").css({"display":"none"});
				$(".pioneeringPeople").css({"display":"none"});
			}else if($(".awardsChecked").text()=="年度新锐公司"){
				$(".productPage").css({"display":"none"});
				$(".newCompany").css({"display":"block"});
				$(".pioneeringPeople").css({"display":"none"});
			}else if($(".awardsChecked").text()=="年度创业人物"){
				$(".productPage").css({"display":"none"});
				$(".newCompany").css({"display":"none"});
				$(".pioneeringPeople").css({"display":"block"});
			}
		//第三页
		}else if($(".awardsSignUpPage .nextStep").text()=="下一步"){
			$(".awardsSignUpPage").addClass("firstPage").removeClass("secondPage");
			$(".productPage").css({"display":"none"});
			$(".newCompany").css({"display":"none"});
			$(".pioneeringPeople").css({"display":"none"});
			$(".awardsSignUpPage .prevStep").css({"display":"none"});	
			$(".awardsSignUpType").css({"display":"block"});	
		}
	})
	
	//直接点击奖项进行报名
	
	$(".signUp").click(function(){
		var awardsIntroName=$(this).closest(".awardsIntro").find(".awardsIntroName").text();
		$(".awardsSignUpType li").each(function(i,elem){
			if($(elem).text()==awardsIntroName){
				$(this).addClass("awardsChecked").siblings().removeClass("awardsChecked");
			}
		})
		resetAwardsSignUp();
		$(".closeAwardsIntro").click();
		$('.awardsSignUp').click();
		$(".awardsSignUpPage .nextStep").click();
	})
	
	//加载第三页样式变化
	function awardsthreePageStyle(that){
		$(".awardsSignUpPage").addClass("threePage").removeClass("secondPage");
		$(that).text("完成信息并提交");
		$(".productPage").css({"display":"none"});
		$(".newCompany").css({"display":"none"});
		$(".pioneeringPeople").css({"display":"none"});
		$(".moreInfor").css({"display":"block"});
		$(".awardsSignUpPage .nextStep").css({"display":"block"});
	}
	
	//重置奖项报名样式
	function resetAwardsSignUp(){
		$(".productPage").css({"display":"none"});
		$(".newCompany").css({"display":"none"});
		$(".pioneeringPeople").css({"display":"none"});
		$(".moreInfor").css({"display":"none"});
		$(".awardsSignUpType").css({"display":"block"});
		$(".awardsSignUpPage .nextStep").css({"display":"block"});
		$(".awardsSignUpPage .prevStep").css({"display":"none"});
		$(".awardsSignUpPage .successSubmit").css({"display":"none"});
		$(".awardsSignUpPage").addClass("firstPage").removeClass("secondPage threePage");
		$(".awardsSignUpPage .nextStep").text("下一步");
		$(".awardsSignUpPage input").val("");
		$(".moreInfor input").val("");
		$(".awardsSignUpPage textarea").val("");
		$(".awardsSignUpPage").find(".tips").removeClass("wrong true").text("");
		$(".CEOJuryTitle").css({"display":"none"});
		$(".editorJuryTitle").css({"display":"none"});
		$(".jurySignUpCurrent").css({"display":"flex"});
	}
	
	//关闭报名程序
	$(".closeSignUp").click(function(){
		$('.shade').css({"display":"none"});
	})
	
	//表单提交验证
	
	//奖项表单验证
	
	//奖项第二页表单验证
	
	function testAwardsFormSecond(that){
		var r_offer_name=/^[0-9a-zA-Z\u4e00-\u9fa5\.]*$/;
		var r_company_url=/http:\/\/[\w-]*(\.[\w-]*)+/ig;
		var r_name=/[a-zA-Z\u4e00-\u9fa5]{2,}/;
		var r_phone=/^[1][0-9][0-9]{9}$/;
		var r_weixin=/^[a-zA-Z\d_]{5,}$/;
		var r_email=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		switch ($(".awardsChecked").text()){
				
				case "年度新锐公司":
					var company_name=$(".newCompany .name input").val();
					var reason=$(".newCompany .reason textarea").val();
					var company_introduction=$(".newCompany .intro textarea").val();
					var company_url=$(".newCompany .companyNet input").val();
					var financing=$(".newCompany .progress input").val();
					
					testValue(".newCompany .name",company_name,r_offer_name);
					testValue(".newCompany .intro",company_introduction);
					testValue(".newCompany .companyNet",company_url);
					testValue(".newCompany .progress",financing);
					testValue(".newCompany .reason",reason);
					if(!$(".newCompany .tips").hasClass("wrong")){
						
						awardsthreePageStyle(that);
						
					}
					break;
				case "年度创业人物":
					var figure_name=$(".pioneeringPeople .name input").val();
					var figure_introduce=$(".pioneeringPeople .intro textarea").val();
					var reason=$(".pioneeringPeople .reason textarea").val();
					var company_introduction=$(".pioneeringPeople .companyIntro textarea").val();
					var company_url=$(".pioneeringPeople .companyNet input").val();
					var financing=$(".pioneeringPeople .progress input").val();
					var company_introduction=$(".pioneeringPeople .companyIntro textarea").val();
					testValue(".pioneeringPeople .name",figure_name,r_name);
					testValue(".pioneeringPeople .intro",figure_introduce);
					testValue(".pioneeringPeople .reason",reason);
					testValue(".pioneeringPeople .companyIntro",company_introduction);
					testValue(".pioneeringPeople .companyNet",company_url);
					testValue(".pioneeringPeople .progress",financing);
					
					if(!$(".pioneeringPeople .tips").hasClass("wrong")){
						
						awardsthreePageStyle(that);
						
					}
					break;
				default:
					var offer_name=$(".productPage .name input").val();
					var related_introduction=$(".productPage .intro textarea").val();
					var reason=$(".productPage .reason textarea").val();
					var company_introduction=$(".productPage .companyIntro textarea").val();
					var company_url=$(".productPage .companyNet input").val();
					var financing=$(".productPage .progress input").val();
					
					testValue(".productPage .name",offer_name,r_offer_name);
					testValue(".productPage .intro",related_introduction);
					testValue(".productPage .reason",reason);
					testValue(".productPage .companyIntro",company_introduction);
					testValue(".productPage .companyNet",company_url);
					testValue(".productPage .progress",financing);
					if(!$(".productPage .tips").hasClass("wrong")){
						
						awardsthreePageStyle(that);
						
					}
					break;
			}
	}
	
	//奖项第三页表单验证
	function testAwardsFormThree(that){
		
		var r_offer_name=/^[0-9a-zA-Z\u4e00-\u9fa5\.]*$/;
		var r_company_url=/http:\/\/[\w-]*(\.[\w-]*)+/ig;
		var r_name=/[a-zA-Z\u4e00-\u9fa5]{2,}/;
		var r_phone=/^[1][0-9][0-9]{9}$/;
		var r_weixin=/^[a-zA-Z\d_]{5,}$/;
		var r_email=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			//获取公共联系人部分表单
			var name=$(".moreInfor .contact input").val();
			var phone=$(".moreInfor .phone input").val();
			var weixin=$(".moreInfor .weChat input").val();
			var email=$(".moreInfor .workEmail input").val();
			
			//测试公共联系人部分表单
			testValue(".moreInfor .contact",name,r_name);
			testValue(".moreInfor .phone",phone,r_phone);
			testValue(".moreInfor .weChat",weixin,r_weixin);
			testValue(".moreInfor .workEmail",email,r_email);
					
			switch ($(".awardsChecked").text()){
				case "年度新锐公司":
					var company_name=$(".newCompany .name input").val();
					var reason=$(".newCompany .reason textarea").val();
					var company_introduction=$(".newCompany .intro textarea").val();
					var company_url=$(".newCompany .companyNet input").val();
					var financing=$(".newCompany .progress input").val();
					if(!$(".newCompany .tips").hasClass("wrong")&&!$(".moreInfor .tips").hasClass("wrong")){
					
						var gtic_sub={
							company_name:company_name,
							reason:reason,
							company_introduction:company_introduction,
							company_url:company_url,
							financing:financing,
							name:name,
							phone:phone,
							weixin:weixin,
							email:email,
							award:3
						}
						
						$.post(url,{"gtic_sub":gtic_sub},function(res){
							if(res.status==0){
								successAwardsPage();
							}else{
								alert(res.message);
							}
						},"json");
						
					}
					break;
				case "年度创业人物":
					var figure_name=$(".pioneeringPeople .name input").val();
					var figure_introduce=$(".pioneeringPeople .intro textarea").val();
					var reason=$(".pioneeringPeople .reason textarea").val();
					var company_introduction=$(".pioneeringPeople .companyIntro textarea").val();
					var company_url=$(".pioneeringPeople .companyNet input").val();
					var financing=$(".pioneeringPeople .progress input").val();
					var company_introduction=$(".pioneeringPeople .companyIntro textarea").val();
					
					if(!$(".pioneeringPeople .tips").hasClass("wrong")&&!$(".moreInfor .tips").hasClass("wrong")){
						
						var gtic_sub={
							figure_name:figure_name,
							figure_introduce:figure_introduce,
							reason:reason,
							company_introduction:company_introduction,
							company_url:company_url,
							financing:financing,
							name:name,
							phone:phone,
							weixin:weixin,
							email:email,
							award:5
						}
						$.post(url,{"gtic_sub":gtic_sub},function(res){
							if(res.status==0){
								successAwardsPage();
							}else{
								alert(res.message);
							}
						},"json");
						
					}
					break;
				default:
					var offer_name=$(".productPage .name input").val();
					var related_introduction=$(".productPage .intro textarea").val();
					var reason=$(".productPage .reason textarea").val();
					var company_introduction=$(".productPage .companyIntro textarea").val();
					var company_url=$(".productPage .companyNet input").val();
					var financing=$(".productPage .progress input").val();
					if(!$(".productPage .tips").hasClass("wrong")&&!$(".moreInfor .tips").hasClass("wrong")){
						var gtic_sub={
							offer_name:offer_name,
							related_introduction:related_introduction,
							reason:reason,
							company_introduction:company_introduction,
							company_url:company_url,
							financing:financing,
							name:name,
							phone:phone,
							weixin:weixin,
							email:email
							
						}	
						
						if($(".awardsChecked").text()=="年度工业设计奖"){
							gtic_sub.award=1;
							
							$.post(url,{"gtic_sub":gtic_sub},function(res){
							if(res.status==0){
								successAwardsPage();
							}else{
								alert(res.message);
							}
						},"json");
						
						}else if($(".awardsChecked").text()=="年度创新产品奖"){
							gtic_sub.award=2;
							
							$.post(url,{"gtic_sub":gtic_sub},function(res){
							if(res.status==0){
								successAwardsPage();
							}else{
								alert(res.message);
							}
						},"json");
							
						}else if($(".awardsChecked").text()=="年度商业应用奖"){						
							gtic_sub.award=4;
							
							$.post(url,{"gtic_sub":gtic_sub},function(res){
							if(res.status==0){
								successAwardsPage();
							}else{
								alert(res.message);
							}
						},"json");
							
						}
						
					}
					break;
			}
	}
	
	function testJuryForm(that){
		var gtic_sub=[];
		var r_offer_name=/^[0-9a-zA-Z\u4e00-\u9fa5\.]*$/;
		var r_company_url=/http:\/\/[\w-]*(\.[\w-]*)+/ig;
		var r_name=/[a-zA-Z\u4e00-\u9fa5]{2,}/;
		var r_phone=/^[1][0-9][0-9]{9}$/;
		var r_weixin=/^[a-zA-Z\d_]{5,}$/;
		var r_email=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		switch ($(".checked").text()){
				case "加入CEO评审团":
					var name=$(".CEOJuryPage .name input").val();
					var phone=$(".CEOJuryPage .phone input").val();
					var email=$(".CEOJuryPage .email input").val();
					var weixin=$(".CEOJuryPage .weChat input").val();
					var company_name=$(".CEOJuryPage .companyName input").val();
					var company_url=$(".CEOJuryPage .net input").val();
					var job=$(".CEOJuryPage .position input").val();
					testValue(".CEOJuryPage .name",name,r_name);
					testValue(".CEOJuryPage .phone",phone,r_phone);
					testValue(".CEOJuryPage .email",email,r_email);
					testValue(".CEOJuryPage .weChat",weixin,r_weixin);
					testValue(".CEOJuryPage .companyName",company_name);
					testValue(".CEOJuryPage .net",company_url);
					testValue(".CEOJuryPage .position",job);
					
				
					
					if(!$(".CEOJuryPage .tips").hasClass("wrong")){
					
						var gtic_sub={
							name:name,
							phone:phone,
							email:email,
							weixin:weixin,
							company_name:company_name,
							company_url:company_url,
							job:job,
							type:2
						}
						

						$.post('apply_jury.php',{"gtic_sub":gtic_sub},function(res){
							if(res.status==0){
								successJuryPage();
							}else{
								alert(res.message);
							}
						},"json");
						
					}
					break;
				case "加入主编评审团":
					var name=$(".editorJuryPage .name input").val();
					var phone=$(".editorJuryPage .phone input").val();
					var email=$(".editorJuryPage .email input").val();
					var weixin=$(".editorJuryPage .weChat input").val();
					var media=$(".editorJuryPage .media input").val();
					var job=$(".editorJuryPage .position input").val();
					testValue(".editorJuryPage .name",name,r_name);
					testValue(".editorJuryPage .phone",phone,r_phone);
					testValue(".editorJuryPage .email",email,r_email);
					testValue(".editorJuryPage .weChat",weixin,r_weixin);
					testValue(".editorJuryPage .media",media);
					testValue(".editorJuryPage .position",job);
					
				
					
					if(!$(".editorJuryPage .tips").hasClass("wrong")){
						
						var gtic_sub={
							name:name,
							phone:phone,
							email:email,
							weixin:weixin,
							media:media,
							job:job,
							type:1
						}


						$.post('apply_jury.php',{"gtic_sub":gtic_sub},function(res){
							if(res.status==0){
								successJuryPage();
							}else{
								alert(res.message);
							}
						},"json");
						
					}
					break;
					default:
					break;
		}
	}
	
	//成功提交颁奖报名数据
	function successAwardsPage(){
		$(".productPage").css({"display":"none"});
		$(".newCompany").css({"display":"none"});
		$(".pioneeringPeople").css({"display":"none"});
		$(".moreInfor").css({"display":"none"});
		$(".awardsSignUpPage .nextStep").css({"display":"none"});
		$(".awardsSignUpPage .prevStep").css({"display":"none"});
		$(".awardsSignUpPage .successSubmit").css({"display":"block"});
		$(".awardsSignUpPage input").val("");
		$(".awardsSignUpPage textarea").val("");
		$(".awardsSignUpPage").find(".tips").removeClass("wrong true").text("");
	}
	//成功提交评审团报名数据
	function successJuryPage(){
		$(".jurySignUpPage").addClass("threePage").removeClass("secondPage");
		$(".JuryPage").css({"display":"none"});
		$(".jurySignUpPage .nextStep").css({"display":"none"});
		$(".jurySignUpPage .prevStep").css({"display":"none"});
		$(".jurySignUpPage .successSubmit").css({"display":"block"});
		$(".jurySignUpPage input").val("");
		$(".jurySignUpPage").find(".tips").removeClass("wrong true").text("");
	}
	
	
	//测试表单数据是否异常
	function testValue(selector,value,regExp){
		
		if(regExp){

			if(!regExp.test(value)){
				$(selector).find(".tips").addClass("wrong").removeClass("true").text("错误");
			}else{
				$(selector).find(".tips").addClass("true").removeClass("wrong").text("");
			}
		}else{
			if(typeof value!="string"){
				$(selector).find(".tips").addClass("wrong").removeClass("true").text("错误");
			}else{
				$(selector).find(".tips").addClass("true").removeClass("wrong").text("");
			}
		}
		if(value==""){
			$(selector).find(".tips").addClass("wrong").removeClass("true").text("未填写");
			
		}
	}
})
