//事件兼容
function getEvent(e){
	e = e || window.event
//	 event对象的属性target
	var tar = e.target || e.srcElement;
	return 
}
//阻止冒泡行为
	event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
//阻止浏览器默认行为
	event.preventDefault ? event.preventDefault() : event.returnValue = false;

//obj的values兼容
if(!Object.values) {
	Object.values = function values(O) {
		return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
	};
}
//obj的entries兼容
if(!Object.entries) {
	Object.entries = function entries(O) {
		return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [
			[k, O[k]]
		] : []), []);
	};
}