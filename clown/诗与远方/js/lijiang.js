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
	
	//留言板
	var myDiv = document.getElementById("dome");
	var myIpt = document.getElementById("liuyan");
	var myBtn = document.getElementById("btn");
	var myC = document.getElementById("cuo");
		
		var time = new Date().toLocaleString();
		myBtn.onclick = function(){	
			var vul = myIpt.value;
			if(vul==""){
				myC.style.display="block";
			}else{
				myC.style.display="none";
				myDiv.innerHTML	+= "<p>"+myIpt.value + "</p>"+"<span>"+time+"</span>"+"</br>";
				myIpt.value = '';
			}
		}
		document.onkeydown = function(ev){
			var vul = myIpt.value;
			var myEv = ev||event;
			if(myEv.keyCode == 13|| myEv.ctrlKey){
			    if(vul==""){
					myC.style.display="block";
			    }else{
			    	myDiv.innerHTML	+= "<p>"+myIpt.value + "</p>"+"<span>"+time+"</span>"+"</br>";
		  			myIpt.value = '';
			   		myC.style.display="none";
			    }
			}	
		}
	
	
	//选项卡
	var aDoms = document.getElementsByClassName("b-top")[0].getElementsByTagName("a");
	var conDoms = document.getElementsByClassName("dt-content")[0].getElementsByClassName("a1");
	
	for(var i=0;i<conDoms.length;i++){				
		aDoms[i].index = i;
		aDoms[i].onclick = function(){
			for(var j=0;j<aDoms.length;j++){
				aDoms[j].className = "";
				conDoms[j].style.display = "none";
			}
			//让当前点击的aDom加class
			this.className = "on";
			//当前对应index的conDom显示
			conDoms[this.index].style.display = "block";
		}
	}
	
	
//横屏切换
		var ulW = $("#lr").width();
		var left = $("#lr").position().left;
		var liW = $("#lr li").width();
		var index = Math.round(left/liW);
	//点击右边
	$(".dt-right").on("click",function(){
		index--;
		$("#lr").stop(true).animate({left:index*liW},300);
		if(index<=-5){
			index=-1;
			setTimeout(function(){
				$("#lr").css("left",-liW);
			},320)
		}
	})
	//点击左
	$(".dt-left").on("click",function(){
		index++;
		$("#lr").stop(true).animate({left:index*liW},300);
		if(index>=0){
			index=-4;
			setTimeout(function(){
				$("#lr").css("left",-4*liW);
			},320)
		}
	})