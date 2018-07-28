
<?php
header('Content-Type: text/html; charset=UTF-8');
// 开启数据库
//1.建立连接
$conn=mysql_connect('localhost','root','');
// 连接数据源
mysql_select_db("blog", $conn);
//2.定义sql语句
    $sql='select  *  from comment_atlas LIMIT 0,20';
    // 设置字符编码
    mysql_query('set names utf8');
//3.发送SQL语句
    $result=mysql_query($sql);
    $arr=array();//定义空数组
    while($row =mysql_fetch_array($result)){
      //var_dump($row);
          //array_push(要存入的数组，要存的值)
      array_push($arr,$row);
  }
  $json = array("data" => $arr, "msg" => '', "code" => "200");
    echo json_encode($json);
//4.关闭连接
   mysql_close($conn);
?>