//扩展imgList
$.fn.imgList = function(time){
//	this.find("img").hide().eq(0).show();
	//考虑到代码的问题，如果有多个广告位只会显示第一个图片，所以需要对每个广告位imgList进行单独的循环
	var controls = this.map(function(index,item){
		var runId = 0;
		var current = 0;
		var $imgs = $(item).addClass("imgList").find("img");
		var len = $imgs.length;
		var runTime = time || 1000;
		$imgs.hide().eq(0).show();
		//让图片逐一显示
		var showImg = function(i){
			$imgs.fadeOut().eq(i).fadeIn();
		}
		//循环播放
		var start = function(){
			if(runId==0){
				runId = setInterval(function(){
					if(current>=len-1) current = -1;
					showImg(++current);
				},runTime);
			}
		}
		//停止播放
		var stop = function(){
			clearInterval(runId);
			runId = 0;
		}
//		start();
		return {
			start:start,
			stop:stop
		}
	});
	
	//封装fn
	function fn(callback){
		for(var i=0;i<controls.length;i++){
			callback&&callback(controls[i]);
		}
	}
	
	return {
		start:function(index){
			if(index==undefined){
				fn(function(obj){
					obj.start();
				});
			}else{
				controls[index].start();
			}
		},
		stop:function(index){
			if(index==undefined){
				/*for(var i=0;i<controls.length;i++){
					controls[i].stop();
				}*/
				fn(function(obj){
					obj.stop();
				});
			}else{
				controls[index].stop();
			}
		}
	}
}