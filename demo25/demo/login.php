<?php
    header("Content-type: text/html; charset=UTF-8");
    // get 请求参数是放在url里面，数据内容是可见的
    // post  请求参数是放主体中， 发送数据量大
    // $_POST[] 里面是form表单数据
    $username = $_POST["username"];
    $password = $_POST["pwd"];
    // 获取用户表信息
    $json = file_get_contents('json/user_login.json');
    $json = json_decode($json);
    foreach($json as $key => $val) {
        if($username === $val->username) {
            if($password === $val->password) {
                echo "<script>alert('登陆成功')</script>";
            } else {
                echo "<script>
                        alert('登陆失败');
                        window.location.href = 'login.html';
                    </script>";
            }
            break;
        }
        // 确定你已经找到最后一条， 如果还没有终止循环，即用户名不存在
        if($key == count($json) - 1) {
            echo "<script>
                        alert('用户名不存在');
                        window.location.href = 'login.html';
                    </script>";
        }
    }
    echo "账号名称：$username, 密码是：$password";

?>