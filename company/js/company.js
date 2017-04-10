

$(function(){

	$('#remove').bind('click',function(){
		$('#fix').fadeOut('slow');
	});



	//cookie验证
	$('#function .company').hide();
	if($.cookie('user')){
		$('#function .login').hide();
		$('#function .company').show();
		$('#company_name').html($.cookie('user'));
	}else{
		$('#function .login').show();
		$('#function .company').hide();
	}

	//删除cookie
	$('#out').bind('click',function(){
		$.cookie('user',null);
		$.removeCookie('user');
		$('#function .login').show();
		$('#function .company').hide();
		// window.location.href="../company/company.html";
	});


	//获取当前的本地时间戳
	var myDate=new Date().getTime();


	//热门人才接口
	$.ajax({
		url: 'http://site2.91miaopin.com/api/webapp/index',
		type: 'GET',
		dataType: 'jsonp',
		data: {
			url: 'http://site2.91miaopin.com/api/Resumeapi/findresume',
			sign: $.md5('123456Lankebaov1.0'),
			client: 'android',
			st: myDate
		},
		beforeSend: function(jqXHR,settings){},
		success: function(response,status,xhr){
			if(response){
				var html='';
				$.each(response.data,function(index,value){
					html+=	'<div class="info">'+
								'<div class="left"><img src="http://91lkb.oss-cn-hangzhou.aliyuncs.com/'+value.photo+'" alt=""></div>'+
								'<div class="center">'+
									'<h3>'+value.title+'</h3>'+
									'<p>'+value.functional_title+'</p>'+
									'<p><span>'+value.city+'-'+value.area+'</span>&nbsp;&nbsp;<span>'+value.workingyear_title+'</span>&nbsp;&nbsp;<span>'+value.degree_title+'</span></p>'+
								'</div>'+
								'<div class="right">'+
									'<h3>'+value.salary_title+'</h3>'+
								'</div>'+
							'</div>';
				});

				$('#hot_talent').append(html);
			}
		},
		error: function(xhr,errorText,errorTypes){
			alert('错误！');
		}

	});

});















































