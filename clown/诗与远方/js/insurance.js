//导航

$(".header-list>.community-nav ").focus(function(){
	$(".community").toggle();
}).blur(function(){
	$(".community").toggle();
})
//搜索

var vm =new Vue({
	el:".search",
	data:{
		arrA:[],
		msgA:"",
		iteem:1111,
		a:0
	},
	methods:{
		searA:function(){
			
			var url="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
			this.$http.jsonp(url,{params:{wd:this.msgA},jsonp:"cb"}).then(function(ars){
				this.a++
				this.arrA=ars.data.s
				console.log(this.arrA)
				console.log(this.a)
			})
		}
	}
	
})
//综合保障区
					
$(".compre-insu").find(".thumbnail").on('click',function(){
	$(this).css("background","orange")
})

//轮播图初始化
$("#mycarousel").carousel({
	interval:2000,
})

//选项卡切换
$(function(){
	$(".tab-ctrl>a").on("mouseover",function(){
		//获取点击的索引
		var index=$(this).index();
		
		
		//让当前点击的a 添加类active,让同辈元素移除
		$(this).addClass("active").siblings().removeClass("active")
		//让对应index的con进行切换，让同辈con隐藏
		/*$(".content-bottom>div").eq(index).show().siblings().hide();*/
		$(".list-col .item").eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
	})
})

$(function(){
	$(".tab-ctrl-sec>a").on("mouseover",function(){
		//获取点击的索引
		var index=$(this).index();
		
		
		//让当前点击的a 添加类active,让同辈元素移除
		$(this).addClass("active").siblings().removeClass("active")
		//让对应index的con进行切换，让同辈con隐藏
		/*$(".content-bottom>div").eq(index).show().siblings().hide();*/
		$(".list-col-sec .item").eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
	})
})

$(function(){
	$(".tab-ctrl-third>a").on("mouseover",function(){
		//获取点击的索引
		var index=$(this).index();
		
		
		//让当前点击的a 添加类active,让同辈元素移除
		$(this).addClass("active").siblings().removeClass("active")
		//让对应index的con进行切换，让同辈con隐藏
		/*$(".content-bottom>div").eq(index).show().siblings().hide();*/
		$(".list-col-third .item").eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
	})
})

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
