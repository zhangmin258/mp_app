

$(function(){

	//城市3级联动
	$('#work_address').bind('tap',function(){
		var cityPicker=new mui.PopPicker({
			layer:3  //一行显示3个，三级联动
		});
		cityPicker.setData(cityData3);
		cityPicker.show(function(item){
			$('#work_address').val(item[0].text+'-'+item[1].text+'-'+item[2].text);
		});
	});
	

});













































