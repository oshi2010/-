//下拉菜单
	$("#xiala").hover(function(){
		$(".xiala").eq(0).fadeIn().show();
	},function(){
		$(".xiala").eq(0).hide();
	});
	//下拉菜单2
	$("#xiala2").hover(function(){
		$(".xiala").eq(1).fadeIn().show();
	},function(){
		$(".xiala").eq(1).hide()
	});
//轮播图效果
		var index = -1;
		var idx = index;
		var len = $(".silde").children().length;
		function slide(){
				var liWidth = $(".silde").find("li").eq(0).width();
				index++;
				var idx = index;
				var timeSlide = 4000;
				var time = 300;
				if(index==4){
					index = 0;
					var timeSlide = 0;
					var time = 0;
				}
				if(index==3){
					idx=0;
				}
				$(".silde").stop(true).animate({left:-index*liWidth},time);
				$(".silde-page").find("li").eq(idx).addClass("on").siblings().removeClass("on");
			setTimeout(slide,timeSlide);
		}
		slide();//调用slide播放
		//鼠标悬浮到轮播图的时候停止轮播，然后离开继续轮播
	
		//鼠标点击silde-page li的时候
		$(".silde-page li").on("click",function(){
			var liWidth = $(".silde").find("li").eq(0).width();
			index = $(this).index();
			$(".silde").stop(true).animate({left:-index*liWidth});
			$(this).addClass("on").siblings().removeClass("on");
		});