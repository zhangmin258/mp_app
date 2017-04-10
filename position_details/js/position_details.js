

$(function(){

	$('#remove').bind('click',function(){
		$('#fix').fadeOut('slow');
	});


	//获取当前的本地时间
	var myDate = new Date().getTime();
	
	//职位详情
	$.ajax({
		url: 'http://site2.91miaopin.com/api/webapp/index',
		type: 'GET',
		dataType: 'jsonp',
		data: {
			url: 'http://site2.91miaopin.com/api/Postdetailapi/index',
			sign: $.md5('123456Lankebaov1.0'),
			client: 'android',
			st: myDate
		},
		success: function(response,status,xhr){
			
		},
		error: function(xhr,errorText,errorTypes){
			alert('错误！');
		}
	});
	
	

});















































