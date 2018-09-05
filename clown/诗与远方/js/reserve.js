$(function(){
	//头部导航的下拉菜单开关
$(".header-list>.community-nav ").focus(function(){
		$(".community").toggle();
	}).blur(function(){
		$(".community").toggle();
	})
	
	
	
	
	
	
//	头部搜索的vue实例、

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



var vm = new Vue({
el:"#container",
props:["selDate"],
data:{
	priceArr:[//价格
		{room:"内舱房",price:1260},
		{room:"海景房",price:1388},
		{room:"阳台房",price:1666},
		{room:"套房",price:1888},
		{room:"豪华阳台房",price:1988},
		{room:"满60周岁特惠内舱房",price:1348}
	],
	dat:"",//日期
	mathArr:[2,3,4],//最小数量
	flag:"",//具体数量
	total:"- -",//总价
	priceI:"",
	mathI:"",
	},
	updated(){//数据更新后。。。
		if(this.dat && this.flag && this.priceI){
			$(".goumai").css({color:"orange"})
		console.log(111)
			this.total=this.priceI.price*this.flag
		}
	},
	methods:{
		//点击加减数量
		add(){
			this.flag++
		},
		sub(){
			if(this.flag<this.mathI+1){
				this.flag=this.mathI
				if(this.dat && this.flag){
//					console.log(111)
//					this.total=this.priceI.price*this.flag
					$("#mymodal").modal({})
//					alert ("日期【"+this.dat+"】的成人每单最少购买"+this.mathI+"份")
				}
			}else{
				this.flag--
			}
		},
		math(item,index){
//			this.mathIndex=index
			this.flag=item;
			this.mathI=item;
			
//			console.log("数量："+this.mathIndex )
//			console.log(this.flag)
	//						alert(item)
		},
		price(item,index){
			this.priceI=item
			console.log("价格："+this.priceI )
		},
		date(){}
		}
	})


$(".ui-selProp").on("click","li",function(){
//				console.log($(this).index())
$(this).css({border:'1px solid orange'}).siblings().css({border:"1px solid #A6A6A6"})
})
var a=111
lay('#version').html('-v'+ laydate.v);//这是一个日历插件初始化部分
laydate.render({
	elem: '#test1' ,
 	format:"yyyy年MM月dd日",
	showBottom: false,
	theme: '#ffa500',
	done:function(value){	
		vm.dat=value
	},
});
$('#myCarousel').carousel({
		interval:2000,
		pause:"hover"
//		wrap:true
	});

//懒加载初始化
$(".lazy").lazyload({
	effect:"fadeIn",//渐变	
	threshold:300,
//	"fadeIn ":"slideDown"//下滑动
//	event:"mouseover",//mouseover点击加载
	//把阀值设置成300 意思就是当图片没有看到之前先load 200像素。
	});
//置顶相关
$(window).on("scroll",function(){
	var $top =$(this).scrollTop()
//	console.log($top)
	var $retop = $(".rightMenuBox").offset().top
	if($top>50){
		$(".rightMenuBox").stop(true).animate({bottom:50-$top},0);
	}else{
		$(".rightMenuBox").stop(true).animate({bottom:-200},100);
	}
});

$(".buy").on("click",function(){
//			var sto = window.localStorage;
//////			console.log(sto.aaa!=undefined)
//			if(sto.user!=undefined){
////
//				document.getElementsByTagName("form")[0].submit();
//			}else {
//				$("#mymodal").modal("show")
//				function Check1(){  
//					return false;
//				};
//				console.log(Check1())
//			
//		}
	})

//点击移动到。。。
$(".backTop").on("click",function(){
	//$("html,body").scrollTop(0);
	$("html,body").stop(true).animate({scrollTop:0},300);
});
	var $tabT=$(".nav-tab ul").offset().top;
$(window).on("scroll",function(){
	if($(window).scrollTop()>$tabT){
		$(".nav-tab ul").css({position:"fixed",top:'0'})
	}else{
		$(".nav-tab ul").css({position:"relative"})
	}
});
var $tab1=$(".tab-img").offset().top;
$(".nav-tab ul").on("click","li",function(){
	if($(this).index()==0){
		$("html,body").animate({scrollTop:$tab1-70})
	}else if($(this).index()==1){
		$("html,body").animate({scrollTop:4240})
	}else if($(this).index()==2){
		$("html,body").animate({scrollTop:5450})
	}else if($(this).index()==3){
		$("html,body").animate({scrollTop:14750})
		}
	})
})
