function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attr in json){
			//先判断是否是透明度
			var iCur;
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}

			//算速度
			

			var speed = (json[attr] - iCur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			if(json[attr] != iCur){
				bStop = false;
			}


			if(attr == "opacity"){
				obj.style.opacity = (iCur+speed)/100;
				obj.style.filter = "alpha(opacity:"+(iCur+speed)+")"
			}else{
				obj.style[attr] = iCur+speed+'px';
			}
		}

		if(bStop){
			clearInterval(obj.timer);
			fn&&fn();
		}
	},30)
}

