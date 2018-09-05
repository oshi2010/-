$(function(){
	
    $("img.lazy").lazyload(
    	{treshold:-50}
    );

//轮播图
	$('#myCarousel').carousel({
				interval:5000,
//				//pause:"hover"
//				//wrap:true
			});
	
//置顶相关
	$(window).on("scroll",function(){
		var $top =$(this).scrollTop()
		var $retop = $(".rightMenuBox").offset().top
		if($top>50){
			$(".rightMenuBox").stop(true).animate({bottom:50-$top},0);
		}else{
			$(".rightMenuBox").stop(true).animate({bottom:-200},100);
		}
		
	});
	$(".backTop").on("click",function(){
		//$("html,body").scrollTop(0);
		$("html,body").stop(true).animate({scrollTop:0},300);
	});
	
})
