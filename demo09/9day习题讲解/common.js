// 获取一个区间范围的随机数
function maxRandom(max, min) {
	min = min || 0
	return Math.round(min + Math.random() * (max - min))
}
// 生成一个16进制的随机颜色
function returnColor () {
	var color = '#';
	var str = '0123456789abcdef';
	for(var i = 0; i < 6; i++) {
		//同过随机数从str里获取某一个字节
		// maxRandom函数是帮我们返回一个有范围的随机数,该函数有返回值
		// 因为我们默认maxRandom最小值是0, 只需要传一个参数,就是最大值,返回一个0-最大值的随机数
		color += str[maxRandom(str.length - 1)]
	}
	return color
	
}

// 写一个函数，传入一个节点，删除
function removeNode (node) {
	var fatherNode = node.parentNode
	fatherNode.removeChild(node)
}
//打乱数组
function fixArr(arr) {
	var bool = typeof arr
	if(bool === 'string') {
		arr = arr.split('')
	}
	var newArr = []
	var length = arr.length
	for (var i = 0; i < length; i++) {
		var _random = maxRandom(arr.length - 1);
		// 如果你不把选中的删除，理论上存在无限循环
		newArr.push(arr[_random])
		arr.splice(_random, 1)
		// 删除一个元素后，arr长度少一
	}
	if(bool === 'string') {
		newArr = newArr.join('')
	}
	return newArr
}