// ajax async javascript and xml
        // xml 可拓展标记语言， 根据你自己定义的标签规律，来获取数据
        // ajax作用：
        // 客户端js发起向服务端进行数据交互
        function ajax(val) {
            // 拥有手机
            var xhr = new XMLHttpRequest();
            // 知道手机号
            xhr.open('GET', 'get.php?username=' + val, true);
            // 三个参数： 请求方式，请求地址， 是否异步(true: 是异步)；
            // 拨打打电话号码
            xhr.send(null);
            // send里面就是请求主体， 没有就写null， 一般post 请求的请求内容在请求主体
            // 等待响应
            xhr.onreadystatechange = function() {
                // xhr.readyState
                // 0 UNSENT 当前的请求还未发送
                // 1 OPENED 起始工作已经完成，等待发送 
                // 2 HEADERS_RECEIVED  请求发送
                // 3 LOADING 服务端正在处理你的响应
                // 4:DONE 响应结束，数据返回给客户端
                if(xhr.readyState === 4 && xhr.status === 200) {
                    var json = xhr.responseText;
                    json = JSON.parse(json);
                    if(json.code == 200) {
                        // 用户名存在
                    } else {
                        // 用户名不存在
                    }

                }
            }
            // 通了
        }