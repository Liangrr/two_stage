function startMove(element,target,time,attr,callback){
	clearInterval(element.timer);
	callback = callback || function(){}
	var init = parseInt(getStyle(element,attr));
	if (init==target) {
		return
	}
	var speed = target > init ? 10 : -10 ;
	var _time = time/((target - init)/speed);
	
	element.timer = setInterval(function(){
		var _init = parseInt(getStyle(element,attr))+speed;
		if ((target > init && _init > target)||(target < init && _init < target)) {
			clearInterval(element.timer);
			_init = target;
			element.style[attr] = _init + 'px';
			if (callback) {
				callback(element);
			}
		} else{
			element.style[attr] = _init + 'px';
		}
	},_time);
	
}

function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}
