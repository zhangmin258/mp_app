

$(function(){


	//获取当前的本地时间戳
	var myDate = new Date().getTime();

	//验证登录接口
	$('form').validate({
		//验证成功后，用ajax提交登录表单
		submitHandler: function(form){
			$('#user_pass').val($.md5($('#user_pass').val()));   //密码加密
			$('form').ajaxSubmit({
				url: 'http://site2.91miaopin.com/api/webapp/index',
				type: 'POST',
				dataType: 'json',
				data: {
					url: 'http://site2.91miaopin.com/api/Welcome/login',
					sign: $.md5('123456Lankebaov1.0'),
					client: 'android',
					st: myDate,
					data: JSON.stringify($('form').serializeObject())   //表单序列化，并且转换成json格式 
				},
				beforeSubmit: function(formData,jqForm,options){},
				success: function(responseText,statusText){
					if(responseText.code=='200'){
						layer.msg(responseText.message,{
							shade: [0.3,'black'],
						});
						var user=$('form input[name=name]').val();
						$.cookie('user',user,{    //设置cookie的值
							path: '/'
						});
						setTimeout(function(){
							if(responseText.data.logintype=='user'){
								window.location.href="../shouye/shouye.html";
							}else if(responseText.data.logintype=='company'){
								window.location.href="../company/company.html";
							}
						},3000);
					}else if(responseText.code=='400'){
						layer.msg(responseText.message,{
							shade: [0.3,'black'],
						});
					}
				}
			});
		},

		rules: {
			name: {
				required: true
			},
			password: {
				required: true
			}
		},
		messages: {
			name: {
				required: '手机号/邮箱不得为空！'
			},
			password: {
				required: '密码不得为空！'
			}
		}
	});





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















































