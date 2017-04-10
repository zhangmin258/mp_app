

$(function(){

	

	//获取当前的本地时间戳
	var myDate = new Date().getTime();
	
	//验证忘记密码接口
	$('form').validate({
		submitHandler: function(form){
			$('form').ajaxSubmit({
				url: 'http://site2.91miaopin.com/api/webapp/index',
				type: 'POST',
				dataType: 'json',
				data: {
					url: 'http://site2.91miaopin.com/api/Telphoneapi/index',
					sign: $.md5('123456Lankebaov1.0'),
					client: 'android',
					st: myDate,
					data: JSON.stringify($('form').serializeObject())   //表单序列化，并且转换成json格式
				},
				beforeSubmit: function(formData,jqForm,options){},
				success: function(responseText,statusText){
					if(responseText.code=='400'){
						layer.msg(responseText.message,{
							shade: [0.3,'black'],
						});
					}else if(responseText.code=='200'){
						layer.msg(responseText.message,{
							shade: [0.3,'black'],
						});
						setTimeout(function(){
							window.location.href="../login/login.html";
						},2000);
					}
				}
			});
		},
		rules: {
			tel: {
				required: true,
				minlength: 11,
				isMobile: true
			},
			code: {
				required: true,
				digits: true     //正整数
			},
			password: {
				required: true,
				minlength: 6
			},
			repassword: {
				equalTo: '#pass'
			}
		},
		messages: {
			tel: {
				required: '手机号码不得为空！',
				minlength: jQuery.format('手机号码不得少于{0}位！'),
				isMobile: '请正确填写您的手机号码!'
			},
			code: {
				required: '验证码不得为空！',
				digits: '请输入正确格式的验证码！'
			},
			password: {
				required: '密码不得为空！',
				minlength: jQuery.format('密码不得少于{0}位！')
			},
			repassword: {
				equalTo: '请再次确认您的密码！'
			}
		}

	});


	//手机验证码接口
	$('#gain').bind('click',function(){
		$.ajax({
			url: 'http://site2.91miaopin.com/api/webapp/index',
			type: 'POST',
			dataType: 'json',
			data: {
				url: 'http://site2.91miaopin.com/api/Telphoneapi/send',
				sign: $.md5('123456Lankebaov1.0'),
				client: 'android',
				st: myDate,
				data: JSON.stringify($('form').serializeObject())
			},
			beforeSend: function(jqXHR,settings){},
			success: function(response,status,xhr){
				if(response.code=='200'){
					layer.msg(response.message,{
						shade: [0.3,'black'],
						time: 3000,
					});
					
				}else if(response.code=='400'){
					layer.msg(response.message,{
						shade: [0.3,'black'],
						time: 3000,
					});
				}
			}
		});
	});








	
	// 手机号码验证
	jQuery.validator.addMethod("isMobile", function(value, element) {
	    var length = value.length;
	    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
	    return this.optional(element) || (length == 11 && mobile.test(value));
	}, "请正确填写您的手机号码!");


	//jQuery序列化后的表单值转换成Json
	$.fn.serializeObject = function(){
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
		    if (o[this.name] !== undefined) {
		        if (!o[this.name].push) {
		            o[this.name] = [o[this.name]];
		        }
		        o[this.name].push(this.value || '');
		    } else {
		        o[this.name] = this.value || '';
		    }
		});
		return o;
	}



















});















































