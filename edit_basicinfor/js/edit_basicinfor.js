

$(function(){

	//点击取消隐藏操作列表
	$('#cancel').bind('tap',function(){
		mui('#sheet').popover('toggle');
	});
	
	
	//出生日期
	$('#birthday').bind('tap',function(){
		var datePicker=new mui.DtPicker({
			type: 'date',  //类型，只显示年月日
			beginDate: new Date(1900, 00, 01),//设置开始日期 
    		endDate: new Date(2020, 11, 30)//设置结束日期
		});
		datePicker.show(function(item){
			$('#birthday').val(item.text);
		});
	});
	
	
	//城市3级联动
	$('#showCity').bind('tap',function(){
		var cityPicker=new mui.PopPicker({
			layer:3  //一行显示3个，三级联动
		});
		cityPicker.setData(cityData3);
		cityPicker.show(function(item){
			$('#showCity').val(item[0].text+'-'+item[1].text+'-'+item[2].text);
		});
	});

});


//获取手机的摄像头
mui.plusReady(function(){
	$('#btnPhoto').bind('tap',function(){
		var camera=plus.camera.getCamera();
		camera.captureImage(function(imageUrl){
			plus.io.resolveLocalFileSystemURL(imageUrl,function(entry){
				$('#imgPhoto').attr('src',entry.fullPath);
			});
		},function(e){
			alert(e.message);
		},{filename:"_doc/photo/"});
	});
});


//获取手机的相册，只能单张上传
mui.plusReady(function(){
	$('#btnImg').bind('tap',function(){
		plus.gallery.pick(function(file){
			plus.io.resolveLocalFileSystemURL(file,function(entry){
				$('#imgPhoto').attr('src',entry.fullPath);
			});
		},function(e){
			alert(e.message);
		},{});
	});
});










































