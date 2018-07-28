<?php
    // 获取用户名
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $mark = isset($_POST["mark"])?$_POST["mark"] : "";
    //1.建立连接
    // ip地址，用户名， 密码， 连接的数据源， 端口号， 默认是3306
    $conn= new mysqli('localhost','root','','db_student_admin','3306');
    //2.定义sql语句
    //sql语句很容易报错，在工具中写好sql语句，再复制进来
    $sql="SELECT * from user_info WHERE username = '$username'";
    $sql_insert = "INSERT INTO user_info (username, password, mark) VALUES ('$username', '$pwd', ' $mark')";
    // 打印sql语句，排错
    // echo $sql_insert;
    //3. 设置字符编码
    // 功能：在读取数据或者写入数据的时候，可能是中文，所以要设置字符编码
    $conn->query("SET CHARACTER SET 'utf8'");//读库   
    $conn->query("SET NAMES 'utf8'");//写库  
    //4.发送SQL语句
    $result = $conn -> query($sql);
    //5.获取查询结果，返回数据
    $row = $result -> fetch_assoc();
    var_dump($row);
    // fetch_all() 获取所有数据，以数组的形式
    // fetch_array() 以一个关联数组，有索引，有key，或者两者皆有的方式抓取一行结果。
    // fetch_object()  以对象返回结果集的当前行。
    // fetch_row() 以枚举数组方式返回一行结果
    // fetch_assoc() 以一个关联数组方式抓取一行结果。
    // 其他方式获取所有数据
    // $arr=array();//定义空数组
    // 获取所有数据
    // while($row =$result -> fetch_assoc()){
    //   //array_push(要存入的数组，要存的值)
    //   array_push($arr,$row);
    // }
    }
    // 关闭数据库
    $conn -> close();
  ?>