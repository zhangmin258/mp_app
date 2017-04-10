

$(function(){

	$('#nav li').bind('click',function(){
		$(this).css('color','#f7a63d').css('border-bottom','#f7a63d solid 2px').siblings().css('color','#333').css('border','none');
	});
	
	$('#hot_position .hot_position:nth-of-type(1)').show();
	
	$.each($('#hot_position .hot_position'),function(index,value){
		$.each($('#nav li'),function(index,value){
			$('#nav li').eq(index).bind('click',function(){
				$('#hot_position .hot_position').eq(index).show().siblings(this).hide();
			});
		});
	});

});















































