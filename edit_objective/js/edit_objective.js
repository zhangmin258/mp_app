

$(function(){

	//职位选择器
	$('#showPosition').bind('tap',function(){
		var positionPicker=new mui.PopPicker({
			layer:2  //一行显示２个，二级联动
		});
		positionPicker.setData(positionData);
		positionPicker.show(function(item){
			$('#showPosition').val(item[0].text+'-'+item[1].text);
		});
	});

});













































