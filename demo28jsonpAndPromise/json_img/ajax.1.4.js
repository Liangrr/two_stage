
// 获取XMLHttpRequest对象的兼容模式（获取手机）
var getXHR = function () {
    var flag = false, xhr = null, ary = [function () {
        return new XMLHttpRequest;
    }, function () {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }, function () {
        return new ActiveXObject("Msxml2.XMLHTTP");
    }, function () {
        return new ActiveXObject("Msxml3.XMLHTTP");
    }];
    for (var i = 0, len = ary.length; i < len; i++) {
        var temp = ary[i];
        try {
            xhr = temp();
            getXHR = temp;
            flag = true;
            break;
        } catch (e) {
            
        }
    }
    if (!flag) {
        throw new Error("your browser is not support ajax~");
        }
        return xhr;
    };
    
    function ajax(params) {
        var _default = {
            method: 'GET', // 请求方式
            url: null, // 请求地址
            data: null, // 请求数据
            timeout: 1000,
            dataType: 'json'
        }
        for(var i in params) {
            // 将传进来的值，遍历赋值给默认值，如果你传进来，会替换默认值，不传即为默认值
            _default[i] = params[i];
        }
        // 【这里使用兼容方式，获取对象】
        var xhr = getXHR(); //ie兼容
        //  如果你是get请求的话，把_default.data里面的属于，以键值对的形式，拼接在url里面
        for(var item in  _default.data) {
            // url拼接完成的
            // -> 判断是否含有参数
            if(_default.url.indexOf('?') == -1) {
                _default.url += '?' + Date.now();
            } else {
                _default.url += '&' + Date.now();
            }
            // 解决ie-get请求缓存问题
            
        }
        xhr.open(_default.method, _default.url,true);
        if (_default.dataType == 'json') {
            _default.data = JSON.stringify(_default.data);
        }
        _default.data = _default.method == 'GET' ? null : _default.data;
        xhr.send(_default.data);
        // -> 把异步的地方用promise包裹起来
        return new Promise(function(resolved, reject){
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4 && xhr.status === 200) {
                    var json = xhr.responseText;
                    json = _default.dataType == 'json' ? JSON.parse(json) : json;
                    resolved(json);
                    // _default.success(json);
                    
                }
            }
        })
    }