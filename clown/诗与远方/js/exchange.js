var vm = new Vue({
	el:".hot-vue",
	data:{
		msg:"",
		flag:"",
		dateA:""
	},
	methods:{
		cliB(){
			var a = new Date()
			if(this.msg){
				console.log((a.getMonth()+1))
	//			this.dateA =a.getFullYear+"-"+ (a.getMonth()+1)+"-"+a.getDate;
				this.flag=this.msg
				$(".pinT").append("<p>"+this.flag+"</p><span>"+this.dateA+"</span>")
				this.msg=""
			}
		}
	}
})


$("._j_mdd_see_more").on("click",function(){
	$(this).siblings("._j_open_mdd_item").toggle()
})
$(".ctn-tab li").on("click",function(){
	var index=0;
	index=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".ctn-tab .tab").eq(index).css({'display':"block"}).siblings(".tab").css({"display":"none"});
})

//	轮播计时器
var index;
var a;
var wid = $(".slideshow").width();//容器宽度
$(".sli-btn>li").hover(function(){//事件触发
	clearTimeout(a);
	index = $(this).index();//;初始化下标
	carousel();
},function(){
	index = $(this).index();
	timeout()
})
function timeout(){
	 a = setTimeout(function(){
		if(index<3){
			carousel();
			timeout();
		}else{
			index=0;
			carousel();
			timeout();
		}
	},1000)
}
timeout()
function carousel(){
	$(".sli-btn>li").eq(index).addClass("active").siblings("li").removeClass("active");
	$(".sli-img").animate({left:-index*wid},300)
//						console.log("我是下标"+index+"的"+$(".sli-img").position().left);	
	index++;
}
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
//				$("#mymodal").modal({
////					show:false;//初始化时是否显示
////					keyboard:true;//按esc键关闭  在modal上写tabindex="-1"
////					backdrop:"static"//设置为"static"点击不关闭
//				})