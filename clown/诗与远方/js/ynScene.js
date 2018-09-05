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

$(".bt-qie").on("click",function(){
	$(".sum-box p").toggle();
	$(".sum-box span").toggle();
	
})


//定义函数以对象的形式调用
var gallery = new XyGallery("gallery",{width:5,height:4});

//定义手风琴插件代码
//初始化部分开始	
function XyGallery(id,option){
	//获取id为gallery的container容器
	var container = document.getElementById(id);
	//查找id为container对象的class属性中是否包含有gallery，如果没有就加上   
	if(container.className.indexOf("gallery")==-1) container.className += " gallery";
	//定义格子的状态，区分激活与默认两种形式描述
	var defaultOption = {
		activeWidth:340,
		activeHeight:400,
		defaultWidth:130,
		defaultHeight:40
	}
	//合并对象：花括号为目标对象，作为装载元素的容器，defaultOption和option是原生对象，当发生重复时 后者覆盖前者的
	option = Object.assign({},defaultOption,option);//js不支持默认参数
	//判断对象option是否有定义宽    做参数缺省的判断
	if(!option.width) throw "width not defined!";
	//throw【抛出异常，终止程序】
	if(!option.height) throw "height not defined!";
	//判断option是否同时满足width、height且属性值两值和不等于contaener子对象的长度
	if(option.width && option.height && option.width*option.height!=container.children.length) throw "width and height not match children length!";
//初始化部分结束		
	
//逻辑部分开始		
	var lastTime = new Date(0); 
	var runId = 0;
	//激活图片的方法
	var activePicture = function(index){
		//清除定时器
		clearTimeout(runId);
		//获取现在的时间
		var currentTime = new Date();
		//判断时间差是否小于.3s 如果小于让他执行.3s后继续操作
		if(currentTime - lastTime < 300){
			runId = setTimeout(function(){
				activePicture(index);
			},300);
			return;//阻止后续代码执行
		}
		lastTime = currentTime;
		
		
		//设置容器宽度
		container.style.width = (option.width-1)*option.defaultWidth+option.activeWidth+"px";
		//获取激活元素的对应下标   %取模
	//index转坐标	
		var cx = index%option.width;//0
		var cy = Math.floor(index/option.width);//0
		for(var y=0;y<option.height;y++){//4
			for(var x=0;x<option.width;x++){//5
	//将index转为坐标			
				//获取每个div的元素
				var cindex = y*option.width+x;
				var item = container.children[cindex];
				if(cx==x && cy==y){//如果为激活元素
					item.className = "active";
					item.style.width = option.activeWidth+"px";
					item.style.height = option.activeHeight+"px";
				}else if(cy==y){//如果与激活元素处于同一行
					item.className = "";
					item.style.width = option.defaultWidth+"px";
					item.style.height = option.activeHeight+"px";
				}else if(cx==x){//如果与激活元素处于同一列
					item.className = "";
					item.style.width = option.activeWidth+"px";
					item.style.height = option.defaultHeight+"px";
				}else{
					item.className = "";
					item.style.width = option.defaultWidth+"px";
					item.style.height = option.defaultHeight+"px";
				}
			}
		}
	}
	
	//调用激活的方法
	activePicture(0);//激活下标为0的图片 0
	
	//鼠标移入图片的时候，对应图片会激活
	Array.prototype.forEach.call(container.children,function(item,index){
		//mouseover   mouseout
		//mouseenter  mouseleave
		item.addEventListener("mouseenter",function(){
			activePicture(index);
		})
	});
	
	
	return {
		active:activePicture
	};
}


$("img.lazy").lazyload(
	{treshold:-10}
);
$(" .ctn-all .nav li").on("click",function(){
	var index = $(this).index();
	
	$(this).addClass("active").siblings().removeClass("active");
	var bUl = $(".ctn-all .bd>ul").eq(index).css({"display":"block"}).siblings().css({"display":"none"});
	console.log(bUl)
//              		$(bUl).toggle()
})

//置顶相关
$(window).on("scroll",function(){
	var $top =$(this).scrollTop()
	var $retop = $(".rightMenuBox").offset().top
	if($top>50){
		$(".rightMenuBox").stop(true).animate({bottom:50-$top},300);
	}else{
		$(".rightMenuBox").stop(true).animate({bottom:-200},300);
	}
});
$(".backTop").on("click",function(){
	//$("html,body").scrollTop(0);
	$("html,body").stop(true).animate({scrollTop:0},300);
});

