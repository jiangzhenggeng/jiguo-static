/**
 * Created by jiangzg on 2017/5/4.
 */
define([
	'app/downLoadErweima','jquery', 'index',
	'app/login', 'layer', 'app/tplEngine',
	'app/countdown', 'app/videoAdapt', 'app/lazyload',
	'app/function','cookie'
], function (
	downLoadErweima,$, index,
	login, layer, tplEngine,
	countdown, videoAdapt,
	lazyload,fc
) {


	var publiclistNum = -1

	function showErweimaFn() {
		downLoadErweima.loadErweima({
			title: '已售罄，下次记得早点来哦！',
			content: (downLoadErweima.isWeixin() ? '长安识别二维码' : '微信扫码') + '关注极果试用服务号，了解最新折扣试用信息，更快人一步！',
		})
	}
	function init(){
		var eventid=$('#eventid').val()||/(\d+)/.exec(window.location)[0];
		//公布名单
		function showPublishList() {
			var tpl=tplEngine.init($('#public-list-tpl').html());
			$.get('/api/event/publiclist/'+eventid+'.html',function (replyData) {
				if(replyData.success == 'true'){
					$('#public-list').append(tpl({data:replyData.result.meta_list}));
					timeDown($('#public-list').find('[data-down-time]'));
					publiclistNum = replyData.result.num
				}else{
					publiclistNum = 0
					$('#public-list').append('暂无数据')
				}
			},'json')
		}
		//玩法
		function showMetaList() {
			var tpl=tplEngine.init($('#meta-list-tpl').html());
			$.get('/api/event/eventtypelist/'+eventid+'.html',function (replyData) {
				if(replyData.success == 'true'){
					$('#meta-list').append(tpl({data:replyData.result}));
					$('[data-goApp]').removeAttr('data-login');
					timeDown($('#meta-list').find('[data-down-time]'));
					// url锚点
					var hash=window.location.href.split('#')[1];
					var top=0;
					if($('#'+hash+'').length>0){
						top=$('#'+hash+'').offset().top-55;
						$("html,body").animate({scrollTop: top}, 300);
					}

					//显示二维码
					var showErweima = true
					for(var k in replyData.result){
						//免费试用
						if( replyData.result[k].meta_type==1 || replyData.result[k].buying_num>0 ){
							showErweima = false
							break
						}
					}
					//轮询等待公布名单借口调用成功结果
					// showPublishList
					function run() {
						if(publiclistNum==-1){
							setTimeout(run,500)
						}else{
							if(publiclistNum<=0 && showErweima){
								showErweimaFn()
							}
						}
					}
					run()

				}else{
					$('#meta-list').append('暂无数据')
				}
			},'json')
		}
		//显示报告
		function showBlog() {
			var limit = 0;
			var html='';
			var tplWrapperCache = tplEngine.init($('#apply-report-wrapper-tpl').html());
			var tplFunCache = tplEngine.init($('#apply-report-list-tpl').html());
			function showReport() {
				$.get('/api/event/Getarticle.html', {
					id: eventid,
					limit: limit,
					size: 3
				}, function (replyData) {
					if (replyData.success == 'true') {
						if(replyData.result.data.length>0){
							if($('#apply-report-list li').length>0){
								html = tplFunCache({data: replyData.result.data});
								$('#apply-report-list').append(html);

							}else{
								html = tplWrapperCache({data: replyData.result.data});
								$('#apply-report-wrapper').append(html);
							}
						}

						if (replyData.result.data.length < 3) {
							$('.look-more-artical').removeClass('more').html('没有更多了~');
						}
						limit = replyData.limit;
					} else {
						$('#apply-report-list').append('<span class="error">数据错误</span>');
					}
				}, 'json');
			};

			showReport();
			$('body').on('click', '.more',function () {
				showReport();
			});
		}
		// 申请列表
		function showapplyList() {
			//申请列表
			window.__no_session_cache__ = true;
			new index.init({
				url: '/api/comment/geteventapply.html',
				size: 10,
				boxDom: '#apply-list',
				tplDom: '#apply-list-tpl',
				sendData: {
					id:eventid
				},
				callBack: function (self,len) {
					$('#apply-list .ugc:not([data-show])').each(function () {
						var dom = $(this).find('.line-num');
						if (dom&&(dom.position().top > $(this).height())) {
							$(this).attr('data-show','');
							$(this).after('<a href="javascript:;" class="look-more">展开</a>');
						}
					})
				}
			});
			$('body').on('click', '.look-more', function () {
				$(this).siblings('.ugc').removeClass('text-ellipsis-5');
				$(this).remove();
			});
		}
		//倒计时
		function timeDown(dom) {
			dom.each(function () {
				var time = parseInt($(this).text())+Date.parse(new Date()) / 1000;
				var $this = $(this);

				//测试=======start
				// if($this.data('reserve_time')){
				// 	time = new Date().getTime()/1000 + 15
				// }
				//测试=======end

				countdown.timeDown({
					dom: $this,
					intDiff: time,
					callback:function(){
						var parent=$this.parent();
						var btn=parent.siblings('.meta-btn').find('a');
						var href=btn.data('href')||'';
						var btn_text = btn.attr('data-bun-text') || '立即申请';
						btn.removeClass('gray')
							.addClass('red')
							.removeAttr('style')
							.text(btn_text);

						if(href){
							btn.attr('href',href)
						}
						parent.remove();
					},
					runing:function (op) {
						var reserve_time = $this.data('reserve_time')

						//测试=======start
						// if(reserve_time){
						// 	reserve_time = 10
						// }
						//测试=======end

						var time_left = $this.data('time_left')
						if(reserve_time && time_left ){
							if(reserve_time>op.time){
								var parent=$this.parent();
								var btn=parent.siblings('.meta-btn').find('a');
								var btn_text = btn.attr('data-bun-text') || '即将开始';
								var href = btn.data('href')||btn.attr('href')||'javascript:;'

								btn.removeAttr('data-reserve')

								//跳转app链接
								if(typeof btn.attr("data-goapp")!="undefined"){
									btn.removeClass('gray').addClass('red')
										.removeAttr('style')
										.attr('href',href)
										.text(btn_text);
								}else{
									btn.removeClass('red')
										.addClass('gray')
										.removeAttr('style')
										.attr('href','javascript:;')
										.text(btn_text);
								}
								btn.data('href',href)
							}
						}
					}
				})
			});
		}
		var WIN_W = $(window).width() - 24;
		var html = '<style>' +
			'.mian-stream li.large .stream-box .stream-img{height:' + (WIN_W * 320 / 640) + 'px !important;}' +
			'</style>';
		$('head').eq(0).append(html);
		// 内容展示更多
		$('.desc-more img').parent('p').css({'margin': 0});
		var eventDescHight=$(window).height()*2;
		$('.event-desc').height(eventDescHight);
		$('.read-more').on('click',function () {
			$(this).css('z-index',-100);
			$('.event-desc').height('auto');
		});
		$('.desc-more img').each(function () {
			$(this).height($(this).width()/$(this).data('width')*$(this).data('height'));
		});

		if($('.desc-more').height()<=eventDescHight){
			$('.read-more').trigger('click');
		}

		showBlog();
		showPublishList();
		showMetaList();
		showapplyList();
		//视频
		var width = $('body').width() - 24;
		videoAdapt.init({
			width: width
		});
//            判断登录
		$('body').on('click', '[data-login]', function () {
			if($(this).attr('href')=='javascript:;'){
				return;
			}
			login.login( $(this).attr('href') );
			return false;
		});
//            判断用户组
		$('body').on('click','[data-alert]',function (e) {
			e.preventDefault();
			if($(this).attr('href')=='javascript:;'){
				return;
			}
			var group = tplEngine.init($('#alert-tpl').html());
			var html = $(this).data('alert');
			var groupBox = layer.open({
				type: 1,
				anim: 'up',
				shade: 'background-color: rgba(0,0,0,.3)',
				style: 'width:75%;border-radius:5px',
				content: group({html: html}),
				success: function (l, i) {
					$('body').on('click', '.know-close', function () {
						layer.close(groupBox);
					});
				}
			});
		});
		//pc专享
		$('body').on('click', '[data-pc]', function (e) {
			e.preventDefault();
			var group = tplEngine.init($('#alert-tpl').html());
			var groupBox = layer.open({
				type: 1,
				anim: 'up',
				shade: 'background-color: rgba(0,0,0,.3)',
				style: 'width:75%;border-radius:5px',
				content: group({html: '请用电脑打开该试用进行申请'}),
				success: function (l, i) {
					$('body').on('click', '.know-close', function () {
						layer.close(groupBox);
					});
				}
			});
		});
		//            收藏
		$('body').on('click', '[data-like]', function () {
			if (!window.URL['login']) {
				login.login();
				return false;
			}
			var $that = $(this);
			if ($(this).hasClass('on')) {
				$.get('/api/praise/praise', {
					id_value:eventid,
					type: 6,
					status: -1
				}, function (replyData) {
					$that.removeClass('on').find('i').removeClass('on animate');
				}, 'json')
			} else {
				$.get('/api/praise/praise', {
					id_value:eventid,
					type: 6,
					status: 1
				}, function (replyData) {
					if (replyData.resultCode == '-100') {
						login.login();
					} else if (replyData.resultCode == '0') {
						$that.addClass('on').find('i').addClass('on animate');
					} else {
						layer.msg('操作失败~请稍后再试')
					}
				}, 'json')
			}
		});
//            分享
		$('body').on('click', '[data-share]', function () {
			fc.share();
		});
		//多个购买链接
		$('body').on('click', '[data-buy]', function () {
			fc.buy();
		});

		//预约
		$('body').on('click', '[data-reserve]', function (e) {
			e.preventDefault();
			if(!window.URL['login']){
				login.login();
				return false;
			}
			var mid = $(this).data('mid');
			var self = $(this)
			var layerid = layer.open({
				skin: 'msg',
				time: 999999,
				content: '预约中',
			});
			$.get('/api/event/EventReserve',{
				mid:mid
			},function (repalyData) {
				//预约成功
				if(repalyData.resultCode==0){
					self.html('<span style="color:#07B25F;font-size:14px">预约成功</span>')
					self.css({
						'border-color':'transparent'
					})
					return;
				}
				//未关注，预约失败
				else if(repalyData.resultCode==-100){

					downLoadErweima.loadErweima({
						title: '<span style="    color: #999;\n' +
						'    font-size: 12px;\n' +
						'    line-height: 18px;\n' +
						'    display: block;\n' +
						'    padding-bottom: 5px;">微信扫码关注<span style="color:#333">【极果试用】</span><br>服务号完成预约</span>',
						image: repalyData.result.url,
					})
				}
				//未登录
				else if(repalyData.resultCode==99){
					login.login();
				}else{
					layer.open({
						skin: 'msg',
						time: 2,
						content: repalyData.errorMsg || '预约失败',
					});
				}
			},'json').fail(function () {
				layer.open({
					skin: 'msg',
					time: 2,
					content: '预约失败',
				});
			}).always(function () {
				layer.close(layerid)
			});
		});

		window.onload=function(){
			//            锚点
			$('#goAnchor').on('click',function (e) {
				e.preventDefault();
				var meta_list = $('#meta-list > .meta-item');
				if( meta_list.length == 1 ){
					var aDom = meta_list.find('.meta-btn a[href]');
					var href = aDom.attr('href');
					if(href){
						$.removeCookie('request');
						$.cookie('request',encodeURIComponent( href ),'/');
						window.location = href+'?callbackurl='+encodeURIComponent( href );
						return;
					}
				}
				var top=$($(this).attr('href')).offset().top-52;
				$("html,body").animate({scrollTop: top}, 300);
			})

		}
	}

	return  {
		init:init
	}
})
