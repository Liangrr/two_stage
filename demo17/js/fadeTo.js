	
//	定义一个通用的淡入淡出函数，传四个参数
	function fadeTo(element,target,time,callback){
//		清除定时器,保持只有一个
		clearInterval(element.timer)
//		获取初始值，乘以一百是防止精度丢失
		var init = getStyle(element,'opacity')*100;
		target *= 100;
		if (init==target) {
			return
		}
		var speed = target > init ? 10:-10;
//		time是总时间,_time是每次的时间,((target-init)/speed)是执行次数
		var _time = time / ((target - init)/speed);
		
		element.timer = setInterval(function(){
			var opacity = getStyle(element,'opacity')*100;
			
			if (opacity==target) {
				clearInterval(element.timer);
				if (callback) {
					callback(element);
				}
			}else{
				element.style.opacity = (opacity+speed)/100;
			}
			
		},_time);
	}
	
	function fadeIn(element,time,callback){
		fadeTo(element,1,time,callback)
	}
	function fadeOut(element,time,callback){
		fadeTo(element,0,time,callback)
	}
	
	function getStyle(ele,attr){
		return	window.getComputedStyle?window.getComputedStyle(ele,null)[attr]:ele.currentStyle[attr];
	}