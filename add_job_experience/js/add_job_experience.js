

$(function(){

	//起始时间
	$('#start_time').bind('tap',function(){
		var datePicker=new mui.DtPicker({
			type: 'date',  //类型，只显示年月日
			beginDate: new Date(1900, 00, 01),//设置开始日期 
    		endDate: new Date(2020, 11, 30)//设置结束日期
		});
		datePicker.show(function(item){
			$('#start_time').val(item.text);
		});
	});
	
	//结束时间
	$('#end_time').bind('tap',function(){
		var datePicker=new mui.DtPicker({
			type: 'date',  //类型，只显示年月日
			beginDate: new Date(1900, 00, 01),//设置开始日期 
    		endDate: new Date(2020, 11, 30)//设置结束日期
		});
		datePicker.show(function(item){
			$('#end_time').val(item.text);
		});
	});
	
	
	$('#save').bind('tap',function(){
		var school_name=$('#school_name').val();
		var major_name=$('#major_name').find('option:selected').text();
		var xueli=$('#xueli').find('option:selected').text();
		var start_time=$('#start_time').val();
		var end_time=$('#end_time').val();
//		$('form').submit({
//			url:'../edit_education_experience/edit_education_experience.html',
//          type:'POST',
//          data:{
//          	school_name:'school_name',
//				major_name:'major_name',
//				xueli:'xueli',
//				start_time:'start_time',
//				end_time:'end_time'
//          },
//          success:function(data,status,xhr){
//          	alert(data);
//          }
//		});
	});

});













































