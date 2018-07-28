//封装的ajax,把所有参数通过对象的形式传进来
function ajax(params){
//	给予默认的值
	var _default = {
		method:'GET',
		url:null,
		data:null,
		dataType: 'json',
		success:function(){},
		fail:function(){}
	}
//	把传进来的对象的属性进行赋給默认的对象,如果没有,就取默认的		
	for(var i in params){
		_default[i] = params[i];
	}
//	创建一个实例XMLHttpRequest
	var xhr = new XMLHttpRequest();
//	写一个正则判断是否存在?
	var reg = /[?]+/g;
//	forin循环遍历对象_default的data属性
	for(var item in _default.data) {
//		如果有?,则直接拼接字符串_default.data下的属性
//		login.html?username=abc123&pwd=123456
		if (reg.test(_default.url)) {
//			item是属性,_default.data[item]是属性值
			_default.url += '&' + item + '=' + _default.data[item] ;
		}else{
//			没有?则加上再执行拼接
//			加上Date.now是为了避免缓存,每次访问不同地址
			_default.url += '?' + Date.now();
			_default.url += '' + item + '=' + _default.data[item] ;
		}
	}
// 	open这里有三个参数分别是请求的类型（”get”、”post”等）、请求的URL和表示是否异步发送请求的布尔值。
	xhr.open(_default.method,_default.url,true);
//	如果传进来的是json类型
	if (_default.dataType == 'json') {
//			转为json字符串类型
            _default.data = JSON.stringify(_default.data);
        }
//		请求类型是否为get,为get则为null
        _default.data = _default.method == 'GET' ? null : _default.data;
//  post发送json内容,get发送null
    xhr.send(_default.data);	
//  readystate是否发现改变
	return new Promise(function(resolved,rejected){
		xhr.onreadystatechange = function(){
	//		状态值为4(响应内容解析完成),status(200 OK：表示客户端请求成功)
			if (xhr.readyState === 4 && xhr.status===200) {
	//			获取响应值
				var json = xhr.responseText;
	//			判断是否是json类型
	            json = _default.dataType == 'json' ? JSON.parse(json) : json;
				resolved(json);
	//			if (json.code == 200) {
	//				_default.success('成功');
	//			}else{
	//				_default.fail('失败');
	//			}
			}
		}		
	})

}

//	不封装的ajax
//function ajax(url){
//	var xhr = new XMLHttpRequest();
//	xhr.open('GET',''+url,true);
//	xhr.send(null);
//	xhr.onreadystatechange = function(){
//		if (xhr.readyState === 4 && xhr.status===200) {
//			var json = xhr.responseText;
//          json = JSON.parse(json);
//			console.log(json)
//			if (json.code == 200) {
//				alert('用户存在！');	
//			}else{
//				alert('用户不存在！');	
//			}
//		}
//	}
//}