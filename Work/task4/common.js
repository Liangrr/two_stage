// 1 + 1/2 - 1/3 + 1/4 + .....+ 1/88 - 1/99 + 1/100
//function getSum() {
//	var sum = 1
//	for(var i = 1; i <= 100; i++) {
//		if(i % 2 == 0)
//			sum += 1/i
//		else
//			sum -= 1/i
//		console.log('123')
//	}
//	return sum
//}
// 求1-10000 的和
	function getSum(num) {
//		var num = 1000 // 浏览器默认帮我们做了
		var sum = 0
		for(var i = 1; i <= num; i ++) {
			sum += i;
		}
		return sum
	}
	
// 调用函数，返回该式子的和
