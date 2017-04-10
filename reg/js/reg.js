

$(function(){

	$('#reg').bind('click',function(){
		layer.msg('正在注册中，请稍后...',{
			shade: [0.3,'black'],
		});
		setTimeout(function(){
			layer.msg('注册成功，请登陆！',{
				time: 2000,
				icon: 6,
				shade: [0.3,'black'],
				skin: 'layer-ext-moon',
			});
			setTimeout(function(){
//				location.href='../login/login.html';
			},2000);
		},2000);
	});

	
	
	$('button').bind('click',function(){
		$(this).css('color','#fff').css('background','#f7a63d').siblings().css('color','#333').css('background','#e3eaea');
	});
	
	

});















































