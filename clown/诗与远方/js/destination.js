//百度搜索
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
					//将百度的data里的s数据赋值给当前的arr数组
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
			//鼠标按住下键时
			down:function(){
				this.noIndex++;
				if(this.noIndex>this.arr.length-1){
					this.noIndex = 0;
				}
			},
			//键盘按住时
			up:function(){
				this.noIndex--;
				if(this.noIndex<0){
					this.noIndex = this.arr.length-1;
				}
			},
		},		
	});
	
	//下拉菜单
	$("#xiala").hover(function(){
		$(".xiala").eq(0).fadeIn().show();
	},function(){
		$(".xiala").eq(0).hide()
	});
	//下拉菜单2
	$("#xiala2").hover(function(){
		$(".xiala").eq(1).fadeIn().show();
	},function(){
		$(".xiala").eq(1).hide()
	});
	
	//选项卡切换JQ
	
			$("#remen .on").hover(function(){
					//console.log($(this).index());
					var $i = $(this).index();
					$(this).siblings().removeClass("active");
					$(this).addClass("active");
					var i = $i/2;
					//console.log(i)
					$(".col").eq(i).siblings().css("display","none");
					$(".col").eq(i).css("display","block")
				}
				)
			
		

	/*瀑布流效果*/
	$(function(){
		var $wrap = $('#wrap');
		var $li = $("#wrap li");
		var index = -1;
		//动态显示图片
		function show(num){
			index++;//0
			var $div = createDiv(index);//创建div
			if(!$div) return;
			var i = getShort();//获取需要追加在li的最小的索引
			$div.fadeIn(1000);//让div淡入一下
			$li.eq(i).append($div);//在最小索引的li上面追加div
			var $oImg = $div.find("img");//获取div里面的img对象（jquery）
			$oImg.load(function(){//图片加载完毕的时候
				if(index<num){//与num进行比较，如果不满足递归执行函数
					show(num);
				}
			});
		}
		
		show(10);//调用显示图片的方法
		
		//获取最小的索引
		function getShort(){
			var minIndex = 0;
			var minLiHeight = $li.eq(0).height();
			for(var i=1;i<$li.length;i++){
				var otherLiHeight = $li.eq(i).height();
				if(otherLiHeight<minLiHeight){
					minLiHeight = otherLiHeight;
					minIndex = i;
				}
			}
			return minIndex;
		}
		
		//滚动窗口的时候
		$(window).on("scroll",function(){
			//获取最小li所在的高度
			var i = getShort();
			var minLiHeight = $li.eq(i).height()+$wrap.offset().top;
			var winHeight = $(window).height();
			var scrollTop = $(window).scrollTop();
//					console.log(minLiHeight,winHeight+scrollTop);sole
			if(minLiHeight < winHeight+scrollTop){
				//加载5张图片
				var num = index+4;
				show(num);
			}
		});
		
		//创建div元素
		function createDiv(index){
			if(imgData[index]){
				var divDom = "<div class='detail'>"						+
				"<div class='imgbox'>"+
				"<a href='"+imgData[index].dz+"'><img src='"+imgData[index].src+"' alt='' /></a>"+
				"<div class='timebox'>"+
				"<a href='#' class='dec'>"+imgData[index].dec+"<p>"+imgData[index].time+"</p></a>"+
				"</div>"+
				"</div>"+
				"</div>";
				return $(divDom);
			}
		}
	});
	
	
	//置顶相关
	$(window).on("scroll",function(){
		var $top =$(this).scrollTop()
		var $retop = $(".rightMenuBox").offset().top
		if($top>150){
			$(".rightMenuBox").css("display","block");
		}else{
			$(".rightMenuBox").css("display","none");
		}
	});
	$(".backTop").on("click",function(){
		//$("html,body").scrollTop(0);
		$("html,body").stop(true).animate({scrollTop:0},300);
	});
	
	
	/*下拉效果*/
	$("#xia").on("click",function(){
				//$("html,body").scrollTop(0);
				$("html,body").stop(true).animate({scrollTop:688},300);
			});