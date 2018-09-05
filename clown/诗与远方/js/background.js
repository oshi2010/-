/*百度搜索*/
	var vm = new Vue({
				el:"#ipt",
		data:{
			arr:[],
			flag:false,
			msg:"",
			noIndex:-1,
		},
		methods:{
			search:function(){
				var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
				this.$http.jsonp(url,{params:{wd:this.msg},jsonp:"cb"}).then(function(res){
					/*将百度的data里的s数据赋值给当前的arr数组*/
					this.arr = res.data.s;
					if(this.arr.length>0){
						this.flag=true;
					}else{
						this.flag=false;
					}
				},function(){
					alert("请求失败！")
				})
			},	
			/*鼠标按住下键时*/
			down:function(){
				this.noIndex++;
				if(this.noIndex>this.arr.length-1){
					this.noIndex = 0;
				}
			},
			/*键盘按住时*/
			up:function(){
				this.noIndex--;
				if(this.noIndex<0){
					this.noIndex = this.arr.length-1;
				}
			},
		},		
	});
	
	/*下拉菜单*/
	$("#xiala").hover(function(){
		$(".xiala").eq(0).fadeIn().show();
	},function(){
		$(".xiala").eq(0).hide()
	});
	/*下拉菜单2*/
	$("#xiala2").hover(function(){
		$(".xiala").eq(1).fadeIn().show();
	},function(){
		$(".xiala").eq(1).hide()
	});
	
	/*跳到该位置实现*/
	
	$("#tiao-1").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:435},200);
	});
	$("#tiao-2").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:2010},200);
	});
	$("#tiao-3").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:3400},200);
	});
	$("#tiao-4").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:4902},200);
	});
	$("#tiao-5").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:6212},300);
	});
	$("#tiao-6").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:7036},300);
	});
	$("#tiao-7").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:7940},300);
	});
	$("#tiao-8").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:8920},300);
	});


	/*置顶相关*/
	/*window.addEventListener("scroll",function(e){
		console.log(document.body.scrollTop);
	});*/
	$(window).on("scroll",function(e){
		var $top =$(this).scrollTop();
		var $retop = $(".rightMenuBox").offset().top;
		if($top>150){
			$(".rightMenuBox").css("display","block");
		}else{
			$(".rightMenuBox").css("display","none");
		};
		var thistop = $("body").height()-$top;
		if($top>9320){
			$top=9320;
		}
		$(".txt-content .txt-r").css("top",$top+60);
	});
	$(".backTop").on("click",function(){
		/*$("html,body").scrollTop(0);*/
		$("html,body").stop(true).animate({scrollTop:0},300);
	});