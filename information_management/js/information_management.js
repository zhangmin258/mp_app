

$(function(){

	//公司地址
	$('#company_address').bind('tap',function(){
		var cityPicker=new mui.PopPicker({
			layer:3  //一行显示3个，三级联动
		});
		cityPicker.setData(cityData3);
		cityPicker.show(function(item){
			$('#company_address').val(item[0].text+'-'+item[1].text+'-'+item[2].text);
		});
	});
	
	//公司性质
	$('#company_nature').bind('tap',function(){
		var company_nature=new mui.PopPicker({
			layer:1  //一行显示1个，1级联动
		});
		company_nature.setData(companyNature);
		company_nature.show(function(item){
			$('#company_nature').val(item[0].text);
		});
	});

});













































