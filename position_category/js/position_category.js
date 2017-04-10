

$(function(){

	$('#choose .left li').bind('tap',function(){
		$(this).css('background','#fff').css('color','#f7a63d').siblings().css('background','#ddd').css('color','#333');
	});
	
	$('#choose .right li').bind('tap',function(){
		$(this).css('background','#f7a63d').css('color','#fff').siblings().css('background','#fff').css('color','#666');
	});
	
	
	$('#choose .right ul').hide();
	$('#choose .right ul:nth-of-type(1)').fadeIn('slow');
	$.each($('#choose .right ul'),function(index,value){
		$.each($('#choose .left li'),function(index,value){
			$('#choose .left li').eq(index).bind('tap',function(){
				$('#choose .right ul').eq(index).fadeIn('slow').siblings().hide();
			});
		});
	});
	
	

});













































