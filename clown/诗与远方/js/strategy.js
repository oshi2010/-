//头部导航
//设置导航条获取焦点时字体颜色橙色
$(".header-list>.community-nav ").focus(function(){
	$(".community").toggle();
}).blur(function(){
	$(".community").toggle();
	})

//搜素

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
					
				

/*菜单导航部分*/
$(".all-list").children("li").hover(function(){
	//鼠标移入的时候所在li 添加hover
	$(this).addClass("hover").siblings().removeClass("hover");
	$(this).find(".menu-panel").show().css({"background":"#ff9d00","color":"#fff"}).siblings().find(".menu-panel").hide();
	$(this).css("background","#ff9d00").siblings().css("background","transparent")
},function(){
	$(this).removeClass("hover");
	$(this).find(".menu-panel").hide();
	$(this).css("background","transparent")
})

//设置轮播图初始化和自动轮播
		$("#mycarousel").carousel({
			interval:2000
})
		
//轮播下面的搜索框		
var vm = new Vue({
el:"#box",
data:{
	arr:[],
	flag:false,
	msg:"",
	nowIndex:-1
},
methods:{
	//按住键盘下键的时候
	down:function(){
		this.nowIndex++;
		if(this.nowIndex > this.arr.length-1){
			this.nowIndex = 0;
		}
	},
	//按住键盘上键的时候
	up:function(){
		this.nowIndex--;
		if(this.nowIndex < 0){
			this.nowIndex = this.arr.length-1;
		}
	},
	search:function(){
		var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
		this.$http.jsonp(url,{params:{wd:this.msg},jsonp:"cb"}).then(function(res){
				this.arr = res.data.s;
				if(this.arr.length>0){
					this.flag = true;
				}else{
					this.flag = false;
				}
			});
		}
	}
});


//右侧置顶
$(window).on("scroll",function(){
	var $top =$(this).scrollTop()
	var $retop = $(".rightMenuBox").offset().top
	if($top>100){
		$(".rightMenuBox").stop(true).animate({bottom:100-$top},0);
	}else{
		$(".rightMenuBox").stop(true).animate({bottom:-200},100);
	}
});
$(".backTop").on("click",function(){
	//$("html,body").scrollTop(0);
	$("html,body").stop(true).animate({scrollTop:0},300);
});


//攻略部分事件委托
$(".recom-strategy").on("mouseover",".strategy-box",function(){
	//鼠标移动过的元素都会变浅柠檬色
	/*$(this).css({"font-size":"20px","color":"black"})*/
	/*$(this).css('background-color','orange') */
	$(this).addClass("red")
	var target = $(event.target);
    target.css("background-color","lemonchiffon");
	
})
$(".recom-strategy").on("mouseout",".strategy-box",function(){
	
		var target = $(event.target);
	target.css("background-color","transparent");
})

//调用广告位插件
var control = $(".test").imgList(3000);
control.start(0)












