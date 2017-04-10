

$(function(){

	$('#remove').bind('click',function(){
		$('#fix').fadeOut('slow');
	});



	
	
	//获取当前的本地时间
	var myDate = new Date().getTime();
	


	//热门职位
	$.ajax({
		url: 'http://site2.91miaopin.com/api/webapp/index',
		type: 'GET',
		dataType: 'jsonp',
		data: {
			url: 'http://site2.91miaopin.com/api/Positionapi/findposition',
			sign: $.md5('123456Lankebaov1.0'),
			client: 'android',
			st: myDate
		},
		success: function(response,status,xhr){
			if(response){
				var html='';
				$.each(response.data,function(index,value){
					html+= '<div class="info">'+
								'<div class="left"><img src="http://91lkb.oss-cn-hangzhou.aliyuncs.com/'+value.logo+'" alt=""></div>'+
								'<div class="center">'+
									'<h3>'+value.company_title+'</h3>'+
									'<p>'+value.functional_title+'</p>'+
									'<p>'+value.time+'</p>'+
								'</div>'+
								'<div class="right"><h3>'+value.salary_title+'</h3></div>'+
							'</div>';
				});
				$('#hot_position').append(html);
			}
		},
		error: function(xhr,errorText,errorTypes){
			alert('错误！');
		}
	});



	//cookie验证
	$('#function .user').hide();
	if($.cookie('user')){
		$('#function .user').show();
		$('#function .login').hide();
		$('#user_name').html($.cookie('user'));
	}else{
		$('#function .login').show();
		$('#function .user').hide();
		
	}
	//删除cookie
	$('#out').bind('click',function(){
		$.cookie('user',null);
		$.removeCookie('user');
		$('#function .login').show();
		$('#function .user').hide();
		// window.location.href='../shouye/shouye.html';
	});


	




	

	







});















































