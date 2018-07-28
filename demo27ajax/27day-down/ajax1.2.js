function ajax(params) {
    var _default = {
        method: 'GET', // 请求方式
        url: null, // 请求地址
        data: null, // 请求数据
        timeout: 1000,
        dataType: 'json',
        success: function() {},
        errro: function() {} // 成功
    }
    for(var i in params) {
        // 将传进来的值，遍历赋值给默认值，如果你传进来，会替换默认值，不传即为默认值
        _default[i] = params[i];
    }
    var xhr = new XMLHttpRequest(); //ie兼容
    //  如果你是get请求的话，把_default.data里面的属于，以键值对的形式，拼接在url里面
    for(var item in  _default.data) {
        // url拼接完成的
        // -> 判断是否含有参数
        // ？？？？ 如何实现？
        _default.url += '?' + Date.now();
        // 解决ie-get请求缓存问题
        
    }
    xhr.open(_default.method, _default.url,true);
    if (_default.dataType == 'json') {
        _default.data = JSON.stringify(_default.data);
    }
    _default.data = _default.method == 'GET' ? null : _default.data;
    xhr.send(_default.data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var json = xhr.responseText;
            json = _default.dataType == 'json' ? JSON.parse(json) : json;
            _default.success(json);
            
        }
    }
}