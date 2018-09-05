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

				
//定制旅行部分
//定制列表定制按钮部分

var vm = new Vue({
				el:"#tab-label",
				data:{
					infos:[
						{name:"个人定制",bol:true},
						{name:"企业定制",bol:false},
						
					]
				},
				methods:{
					fn:function(index){
						console.log(index);
						for(var i=0;i<this.infos.length;i++){
							this.infos[i].bol = false;
						}
						this.infos[index].bol = true;
					}
				}
			});
//点击input下拉菜单

  window.onload = function () {
        /* window意思是窗口     onload是加载     意思是页面加载完毕后，才执行里面的js ，所以可以放在顶端*/
        var inputDom = document.getElementById("input");
        /* 获取ul对象*/
        var ulDom = document.getElementById("ul");
        

        inputDom.ondblclick= function () {
            ulDom.style.display = "block";
        }
        /*点击input框时，ul的display属性赋值为“block”，下同理*/
        inputDom.onclick = function () {
            ulDom.style.display = "none";
        }
    }

//鼠标点击选中后会出现图标
$(".info-need").find("a").on('click',function(){
	$(this).addClass("cur")
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


		