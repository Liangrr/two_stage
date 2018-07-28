//上下左右原理一致,注释一个即可
//向上运动函数，传四个参数，分别是元素，距离，时间，回调函数
function speedUp(ele,distance,time,callback){
//	保持只有一次定时器
	clearInterval(timer);
//	假设不传回调函数，返回默认
	callback = callback || function(){}
//	向上运动 top是负数,取负值
	var speed = -1;
//	求出当前位置与开始位置的间隔
	var _dis = distance - ele.offsetTop;
	var count = _dis / speed;
	var _time = time / count;
//	设定一个定时器
	timer = setInterval(function(){
//		获取距离顶部的高度
		var top = ele.offsetTop;
//		取得最大值,这里top加speed避免左右摆浮
		var maxSpeed = top + speed;
//		如果小于外界传来的距离,进行跳出
		if (maxSpeed<distance) {
//			清除定时器
			clearInterval(timer);
//			定时执行完成后返回目标高度
			ele.style.top = distance + 'px';
//			调用回调函数
			callback()
		}else{
//			只要不符合目标距离都会执行此代码,直到达到目标距离才不执行
			ele.style.top = top + speed + 'px';
		}
//		定时器的时间，毫秒
	},_time);
}

//function speedUp2(ele,distance,time,callback){
//	distance += ele.offsetTop;
//	speedUp(ele,distance,time,callback);
//}

//向下运动
function speedDown(ele,distance,time,callback){
	clearInterval(timer);
	callback = callback || function(){}
	var _dis = distance - ele.offsetTop;
	var count = _dis / speed;
	var _time = time / count;
	var speed = 1;
	timer = setInterval(function(){
		var top = ele.offsetTop;
		var maxSpeed = top + speed;
		if (maxSpeed>distance) {
			clearInterval(timer);
			ele.style.top = distance + 'px';
			callback()
		}else{
			ele.style.top = top + speed + 'px';
		}
	},_time);
}
//向左运动
function speedLeft(ele,distance,time,callback){
	clearInterval(timer);
	callback = callback || function(){}
	var _dis = distance - ele.offsetLeft;
	var count = _dis / speed;
	var _time = time / count;
	var speed = -1;
	var left = ele.offsetLeft;
	timer = setInterval(function(){
		var left = ele.offsetLeft;
		var maxSpeed = left + speed;
		if (maxSpeed<distance) {
			clearInterval(timer);
			ele.style.left = distance + 'px';
			callback()
		}else{
			ele.style.left = left + speed + 'px';
		}
	},_time);
}
//向右运动
function speedRight(ele,distance,time,callback){
	clearInterval(timer);
	callback = callback || function(){}
	var _dis = distance - ele.offsetLeft;
	var count = _dis / speed;
	var _time = time / count;
	var speed = 1;
	timer = setInterval(function(){
		var left = ele.offsetLeft;
		var maxSpeed = left + speed;
		if (maxSpeed>distance) {
			clearInterval(timer);
			ele.style.left = distance + 'px';
			callback()
		}else{
			ele.style.left = left + speed + 'px';
		}
	},_time);
}
