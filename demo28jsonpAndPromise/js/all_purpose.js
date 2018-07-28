	
	//随机生成6位验证码(至少包含一个数字和一个字母)
	function ranSixNumLet(){
		//	定义装有数字的数组
			var num = [];
		//	定义装有字母的数组
			var letter = [];
		//	定义装有数字和字母的数组
			var arrAll = [];
		//	从ascii获取数字并且加到num数组
			for (var i=48;i<58;i++) {
				num.push(String.fromCharCode(i));
			}
		//	从ascii获取字母并且加到letter数组	
			for (var j=97;j<123;j++) {
				letter.push(String.fromCharCode(j));
		//		这里是获取到的字母进行大写转换再加入letter数组
				letter.push(String.fromCharCode(j).toUpperCase());
			}
		//	num数组与letter数组合并并且赋给arrAll
			arrAll = num.concat(letter);
		//	定义一个随机六位数,首先规定首个为数字
		//	并且调用随机值函数,范围是该数组的长度-1，这里是数字
			var randomArr = num[randomMax_Min(num.length-1)];
		//	并且调用随机值函数,范围是该数组的长度-1，这里是字母	
			randomArr = randomArr + letter[randomMax_Min(letter.length-1)];
		//	上面获取俩位了,这里循环获取四位
			for (var k=0;k<4;k++) {
		//	并且调用随机值函数,范围是该数组的长度-1，这里是数字和字母		
				randomArr += arrAll[randomMax_Min(arrAll.length-1)];
			}	
		return '你的六位验证码(至少包含一个字母和一个数字):'+randomArr;
	}
	
	//打乱数组
	function fixArr(arr){
//		定义一个新的数组来装 从旧数组中获取的元素
		var arrLoad = [];
//		定义获取数组时的长度
		var length =  arr.length;
//		循环刚获取数组的长度的次数
		for (var i=0;i<length;i++) {
//			定义一个获取数组长度内的随机数，这里因为下面的spice删除操作，
//			必须用arr.length来进行更新数组长度的变化，如果使用获取时的
//			固定长度,那么有可能获取到undefined,就是数组已经被删除的元素的位置
			var ran = randomMax_Min(arr.length,0);
//			把获取到的数组内的元素加到新的数组来
			arrLoad.push(arr[ran]);
//			获取完后进行删除操作,删除从第ran个开始,删除一个
			arr.splice(ran,1);
		}
//		返回新的数组
		return arrLoad;
	}
//	随机rgb颜色值，采用字符串拼接方法
	function ranRGB(){
		var color = '#';
//		rgb取值范围数组
		var str = '0123456789abcdef';
		for (var i=0;i<6;i++) {
//			每循环一次,把前面的加上后面随机生成的值拼接
			color = color + str[randomMax_Min(str.length-1)];
		}
		return color;
	}
	
//	随机数
	function randomMax_Min(max,min){
//		如果最小值为空,则返回0
		min = min ||0;
//		对随机数的范围进行四舍五入取整
		return Math.round(min+Math.random()*(max-min));
	}
	
//	调用时间差
	function getGap(time1,time2){
		
		var timeGap = Math.abs(time1.getTime()-time2.getTime());
		var second = parseInt(timeGap/1000)%60;
		var minute = parseInt((timeGap/1000)/60)%60;
		var hour = parseInt(((timeGap/1000)/60)/60)%24;
		var day = parseInt((((timeGap/1000)/60)/60)/24)%31;
		 return day+'天'+hour+'时'+minute+'分'+second+'秒' ;
	}
//	获取当前时间 天时分秒
	function getDate(){
		var time = new Date();
		var second = time.getSeconds();
		var minute = time.getMinutes();
		var hour = time.getHours();
//		var day = time.getDay();
		 return +hour+'时'+minute+'分'+second+'秒' ;
	}