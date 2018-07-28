// 元素 距离，设置时间（多久完成这个运动， 默认单位时毫秒） 回掉函数
function speedUp(ele, distance, callback) {
    
}
function speedDown(ele, distance, callback) {

}
function speedLeft(ele, distance, callback) {
    
}
// 运动到哪里（绝对位置）
function speedRight(ele, distance, time, callback) {
    clearInterval(ele.timer);
    callback = callback || function(){};
    // 计算两者之差
    var _dis = distance - ele.offsetLeft;
    var speed = 2;
    // setInterval要执行多少次
    var count = _dis / speed;
    // 每一次执行的时间
    var _time =  time / count
    console.log(_time);
    ele.timer = setInterval(function() {
        // 每次执行，获取运动对象距离左边边框的距离
        var left = ele.offsetLeft;
        // 判断运动后的距离，是否大于最大距离（防止抖动）
        var maxSpeed = left + speed
        if(maxSpeed > distance) {
            // 向右运动时，超过最大距离，停止运动
            ele.style.left = distance + 'px';
            clearInterval(timer)
            callback()
        } else {
            ele.style.left = maxSpeed + 'px';
        }
    }, _time)
}

function startMove(ele,target,time,attr,callback){
	clearInterval(ele.timer);
	callback = callback || function(){}
	var init = parseInt(getStyle(ele,attr));
	if (init==target) {
		return
	}
	var speed = target > init ? 10 : -10 ;
	var _time = time/((target - init)/speed);
	
	ele.timer = setInterval(function(){
		var _init = parseInt(getStyle(ele,attr))+speed;
		if ((target > init && _init > target)||(target < init && _init < target)) {
			clearInterval(ele.timer);
			_init = target;
			ele.style[attr] = _init + 'px';
			if (callback) {
				callback(ele);
			}
		} else{
			ele.style[attr] = _init + 'px';
		}
	},_time);
	
}

// 运动多少距离(相对位置)
function speedRightTo(ele, distance, time, callback) {
    distance += ele.offsetLeft
    speedRight(ele, distance, time, callback);
}
function getStyle(ele, attr) {
    return window.getComputedStyle ? window.getComputedStyle(ele, null)[attr] : ele.currentStyle[attr];
}
// 淡入淡出
// 通用方法
// target 改变后的目标值
// 动画执行时间
// callback 回掉函数
// target: 目标值
function fadeTo(element, target, time, callback) {
    clearInterval(element.timer);
    // 防止精度丢失
    target *= 100;
    // 定义透明度初始值
    var init = getStyle(element, 'opacity') * 100;
    if(init == target) {
        return ;
    }
    var speed = target > init ? 10 : -10
    var _time =time / ((target - init) / speed);
    console.log(_time);
    // 多少毫秒执行一次
    element.timer = setInterval(function() {
        var opacity = getStyle(element, 'opacity') * 100;
        if( opacity == target) {
            clearInterval(element.timer);
            if(callback) {
                callback(element);
            }
        } else {
            element.style.opacity = (opacity + speed) / 100 
        }
    }, _time)
}
// 淡出
function fadeOut(element, time, callback) {
    fadeTo(element, 0, time, callback);
}
// 淡入
function fadeIn(element, time, callback) {
    fadeTo(element, 1, time, callback);
}

// 修改宽度
function setWidth(element, target, time, callback) {
    // 获取原本宽度
    clearInterval(element.timer)
    var init = element.offsetWidth
    var speed = target - init > 0 ? 1 : -1;
    var _time = time / ((target - init) / speed);
    element.timer = setInterval(function() {
        var width = element.offsetWidth
        if (width == target) {
            clearInterval(element.timer);
            if(callback) {
                callback()
            }
        } else {
            element.style.width = width + speed + 'px'
        }
    }, _time)
}