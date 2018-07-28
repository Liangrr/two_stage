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
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method, _default.url,true);
    if (_default.dataType == 'json') {
        _default.data = JSON.stringify(_default.data);
    }
    xhr.send(_default.data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var json = xhr.responseText;
            json = _default.dataType == 'json' ? JSON.parse(json) : json;
            _default.success(json);
            
        }
    }
    // 通了
}