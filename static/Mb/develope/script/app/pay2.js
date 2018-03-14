/**

 */
define(['jquery', 'app/unitTool'], function ($, tool) {
	function weixinPay(data, orderid,payData) {
		data = data || {}
		$.get('/api/order/Pay', data, function (replyData) {
			window.isPaying = false;
			if (replyData.status == 0) {
				if(replyData.url){
					window.location = replyData.url;
				} else if(replyData.status == -7) {
					var addressId = layer.open({
						content: '还没有收件人信息，现在去填写？',
						btn: ['<span style="color: #fe5341;font-weight: bold">去填写</span>', '暂不填写'],
						yes: function () {
							layer.closeAll(addressId)
							$('#order-add-address-btn-wrap').trigger('click')
						}
					});
				}else{
					__pay(payData,orderid);
				}
			} else {
				tool.msg(replyData.message);
			}
		}, 'json')
	}

	function __pay(data, orderid) {
		WeixinJSBridge.invoke(
			'getBrandWCPayRequest',
			data,
			function (res) {
				if (res.err_msg == "get_brand_wcpay_request:ok") {
					$.get('/api/order/IsSuccess', {
						orderid: orderid
					}, function (replyData) {
						if (replyData.status == 0) {
							tool.msg('支付成功');
							window.location.href = 'http://m.jiguo.com/mb/pay/myorder.html?orderid=' + orderid;
						}
					}, 'json');
				} else if (res.err_msg == "get_brand_wcpay_request:cancel") {
					tool.msg('支付取消');
				} else if (res.err_msg == "get_brand_wcpay_request:fail") {
					tool.msg('支付失败');
				} else {
					tool.msg('未知错误');
				}
			});
	}

	function aliPay(data) {
		data = data || {}
		$.get('/api/order/Pay', data, function (replyData) {
			window.isPaying = false;
			if (replyData.status == 0) {
				tool.msg('正在支付...', 9999);
				window.location = replyData.url;
			} else if(replyData.status == -7) {
				var addressId = layer.open({
					content: '还没有收件人信息，现在去填写？',
					btn: ['<span style="color: #fe5341;font-weight: bold">去填写</span>', '暂不填写'],
					yes: function () {
						layer.closeAll(addressId)
						$('#order-add-address-btn-wrap').trigger('click')
					}
				});
			} else {
				tool.msg(replyData.message);
			}
		}, 'json')


	}

	return {
		weixinPay: weixinPay,
		aliPay: aliPay
	}
})