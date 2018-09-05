$(function(){
				$(".sale li").hover(function(){
					var $descHeight = $(this).find(".sale-desc").height();
					var top = $(this).height() - $descHeight;
					$(this).find(".sale-desc").css("top",top);
				},function(){
					$(this).find('.sale-desc').css({
						top:230
					});
				});
			});
			
			//轮播图
			$('#myCarousel').carousel({
				interval:1000,
				//pause:"hover"
				//wrap:true
			});

			//此事件在slide方法调用之后立即触发
			/*$("#myCarousel").on("slide.bs.carousel",function(){
				//alert("slide");
			});
			
			//在一张图片结束轮播之后触发
			$("#myCarousel").on("slid.bs.carousel",function(){
				//alert("slid");
			});*/
			
			//vue
			var vm = new Vue({
				el:"#target",
				directives:{
					focus:{
						//inserted  代表插入到dom的时候
						inserted:function(el,binding,vnode){
							el.focus();
							//console.log(binding.value.color);
							//console.log(binding.value.background);
							el.style.background = binding.value.background;
							el.style.color = binding.value.color;
//							console.log(binding.expression);
						}
					}
				},
				data:{
					//任务数据
					targetArr:[
						{des:"黑白配：国庆想去云南有一起的么？可配合你的计划，最好去苍山洱海、大理丽江。",bol:false,edit:false},
						{des:"诺曼底：元旦九寨沟约么？淡季可以两天进沟旺季只能进沟一次，再次进沟需要再次购票，而且价格奇高。所以元旦去最好了...",bol:false,edit:false},
						{des:"绿毛虫：重阳节爬梧桐山，登高看美景",bol:false,edit:false}
					],
					msg:"",
					msg2:{
						color:"black",
						background:"#ccc",
						
					}
				},
				methods:{
					add:function(){
						//往数组targetArr里面添加条目
						this.targetArr.push({des:this.msg,bol:false,edit:false});
						//清空msg
						this.msg = "";
					},
					edit:function(index){
						//更改具体项的edit为true
						this.targetArr[index].edit = true;
					},
					unfinish:function(){
						//如何实现未完成的条数？
						//遍历targetArr,获取每一项的bol为false的个数返回即可
						var num = 0;
						this.targetArr.forEach(function(item){
							if(!item.bol){//如果是未完成的话
								num++;
							}
						});
						return num;
					},
					
					finish:function(){//点击完成的时候
						var tempArr = this.targetArr;
						this.targetArr = [];
						for(var i=0;i<tempArr.length;i++){
							if(!tempArr[i].bol){//代表未完成的
								this.targetArr.push(tempArr[i]);
							}
						}
					}
				}
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
			
			
			