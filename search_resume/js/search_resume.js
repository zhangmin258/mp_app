

$(function(){

	//求职状态
	$('.more').click(function(){
		if($('.more2').hasClass('grade-w-roll')){
			$('.more2').removeClass('grade-w-roll');
			$(this).removeClass('current');
			$('#tab').attr('style',' ');
		}else{
			$('.more2').addClass('grade-w-roll');
			$(this).addClass('current');
			$('.all_position').removeClass('current');
			$('.salary_range').removeClass('current');
			$('.xueli').removeClass('current');
			$('#tab').attr('style','position: fixed; top: 0;');
		}
	});
	
//	$.each($('.more-w li'), function(index,value){
//		$.each($('.more-t'), function(index,value){
//			$('.more-w li').eq(index).click(function(){
//				$('.more-t').eq(index).css('left','50%').siblings('.more-t').css('left','100%');
//				$('.more-w li').eq(index).css('background','#eee').siblings('.more-w li').css('background','#fff');
//			});
//		});	
//	});
	
	$('.more-w li:nth-of-type(1)').css('color','#f7a63d');
	$('.more-w li').click(function(){
		$(this).css('color','#f7a63d').siblings(this).css('color','#333');
	});
	
	$('.more2 input').click(function(){
		alert('数据搜索中...');
		setTimeout(function(){
			$('.more2').removeClass('grade-w-roll');
			$('.more').removeClass('current');
			$('#tab').attr('style',' ');
		},1000);
	});
	
	
	//学历
	$('.xueli').click(function(){
		if($('.edu').hasClass('grade-w-roll')){
			$('.edu').removeClass('grade-w-roll');
			$(this).removeClass('current');
			$('#tab').attr('style',' ');
		}else{
			$('.edu').addClass('grade-w-roll');
			$(this).addClass('current');
			$('.all_position').removeClass('current');
			$('.salary_range').removeClass('current');
			$('.more').removeClass('current');
			$('#tab').attr('style','position: fixed; top: 0;');
		}
	});
	
	$('.edu-w li:nth-of-type(1)').css('color','#f7a63d');
	$('.edu-w li').click(function(){
		$(this).css('color','#f7a63d').siblings().css('color','#333');
	});
	
	$('.edu input').click(function(){
		alert('数据搜索中...');
	});
	
	
	//工作经验
	$('.salary_range').click(function(){
		if($('.range').hasClass('grade-w-roll')){
			$('.range').removeClass('grade-w-roll');
			$(this).removeClass('current');
			$('#tab').attr('style',' ');
		}else{
			$('.range').addClass('grade-w-roll');
			$(this).addClass('current');
			$('.all_position').removeClass('current');
			$('.xueli').removeClass('current');
			$('.more').removeClass('current');
			$('#tab').attr('style','position: fixed; top: 0;');
		}
	});
	
	$('.range-w li:nth-of-type(1)').css('color','#f7a63d');
	$('.range-w li').click(function(){
		$(this).css('color','#f7a63d').siblings().css('color','#333');
	});
	
	$('.range input').click(function(){
		alert('数据搜索中...');
		setTimeout(function(){
			$('.range').removeClass('grade-w-roll');
			$('.salary_range').removeClass('current');
			$('#tab').attr('style',' ');
		},1000);
	});
	
	
	//所有简历
	$('.all_position').click(function(){
		if($('.grade-eject').hasClass('grade-w-roll')){
			$('.grade-eject').removeClass('grade-w-roll');
			$(this).removeClass('current');
			$('#tab').attr('style',' ');
		}else{
			$('.grade-eject').addClass('grade-w-roll');
			$(this).addClass('current');
			$('.more').removeClass('current');
			$('.salary_range').removeClass('current');
			$('.xueli').removeClass('current');
			$('#tab').attr('style','position: fixed; top: 0;');
		}
	});
	
	$.each($('.grade-w li'), function(index,value){
		$.each($('.grade-t'), function(index,value){
			$('.grade-w li').eq(index).click(function(){
				$('.grade-t').eq(index).css('left','50%').siblings('.grade-t').css('left','100%');
				$('.grade-w li').eq(index).css('background','#eee').siblings().css('background','#fff');
			});
		});
	});


	
	$('.grade-t li:nth-of-type(1)').css('color','#f7a63d');
	$('.grade-t li').click(function(){
		$(this).css('color','#f7a63d').siblings(this).css('color','#333');
	});
	
	$('.grade-eject input').click(function(){
		alert('数据搜索中...');
	});
	
	

	//判断页面是否有弹出
	
	//求职状态
	$('.more').click(function(){
		if($('.edu').hasClass('grade-w-roll') || $('.range').hasClass('grade-w-roll') || $('.grade-eject').hasClass('grade-w-roll')){
			$('.edu').removeClass('grade-w-roll');
			$('.range').removeClass('grade-w-roll');
			$('.grade-eject').removeClass('grade-w-roll');
		}
	});
	
	//学历
	$('.xueli').click(function(){
		if($('.more2').hasClass('grade-w-roll') || $('.range').hasClass('grade-w-roll') || $('.grade-eject').hasClass('grade-w-roll')){
			$('.more2').removeClass('grade-w-roll');
			$('.range').removeClass('grade-w-roll');
			$('.grade-eject').removeClass('grade-w-roll');
		}
	});
	
	//工作经验
	$('.salary_range').click(function(){
		if($('.more2').hasClass('grade-w-roll') || $('.edu').hasClass('grade-w-roll') || $('.grade-eject').hasClass('grade-w-roll')){
			$('.more2').removeClass('grade-w-roll');
			$('.edu').removeClass('grade-w-roll');
			$('.grade-eject').removeClass('grade-w-roll');
		}
	});
	
	//所有简历
	$('.all_position').click(function(){
		if($('.more2').hasClass('grade-w-roll') || $('.edu').hasClass('grade-w-roll') || $('.range').hasClass('grade-w-roll')){
			$('.more2').removeClass('grade-w-roll');
			$('.edu').removeClass('grade-w-roll');
			$('.range').removeClass('grade-w-roll');
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



});















































