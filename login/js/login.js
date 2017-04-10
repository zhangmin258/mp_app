

$(function(){

	$('#login').bind('click',function(){
		layer.msg('正在登陆中，请稍后...',{
			shade: [0.3,'black'],
		});
		setTimeout(function(){
			layer.msg('登陆成功！',{
				time: 2000,
				icon: 6,
				shade: [0.3,'black'],
				skin: 'layer-ext-moon'
			});
		},2000);
	});



});















































