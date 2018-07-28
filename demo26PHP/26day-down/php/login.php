<?php
    header("Content-type: text/html; charset=UTF-8");
    $username = $_POST['username'];
    $pwd = $_POST['pwd'];
    // echo "用户名：$username, 密码：$pwd";
    $conn= new mysqli('localhost','root','','db_student_admin','3306');
    $sql = "SELECT * FROM user_info where username = '$username'";
    // 打印查看sql
    var_dump( $sql);
    //3.发送SQL语句
    $result = $conn -> query($sql);
    // var_dump($result);
    // 查询语句的时候，返回的object
    //取一行数据
    $row = $result -> fetch_assoc();
    // 查询到数据，返回关联数组
    // 查询不到，返回null
    var_dump($row);
    // 返回关联数组
    if($row) {
        if($pwd === $row['password']) {
            echo "<script>
            alert('登陆成功');
            location.href =  'manager.php';
            </script>";
        } else {
            echo "<script>
            alert('密码错误');
            location.href =  '../login.html';
            </script>";
        }
    } else {
        $sql_insert= "INSERT into user_info (username, password) VALUES ('$username', '$pwd')";
        // 插入，删除，修改，返回布尔值
        $result2 = $conn -> query($sql_insert);
        // var_dump($result2);
        if($result2) {
            echo "<script>
                    alert('注册成功');
                    location.href =  'manager.php';
                    </script>";
            // === 
        }
    }
    $conn->close();
?>