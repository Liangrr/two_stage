
<?php
  header("Content-type: application/json");
  $username = $_GET["username"];
  $coon = new mysqli('localhost', 'root', '', 'db_user', '3306');
  $sql = "select * from tb_student where username = '$username'";
  $coon->query("SET CHARACTER SET 'utf8'");//读库 
  $result = $coon -> query($sql);
  $row = $result -> fetch_assoc();
  if($row) {
    $json = array("msg" => "", "code"=> "200", "data" => $data);
  } else {
    $json = array("msg" => "获取数据失败", "code"=> "0");
  }
  echo json_encode($json);
  // $arr = array();
  // $rows = $result -> fetch_all();
  // while ($rows = $result -> fetch_assoc()) {
  //   array_push($arr, $rows);
  // }
  // function createJson($data,$status=true) {
  //   if($status) {
  //     $json = array("msg" => "", "code"=> "200", "data" => $data);
  //   } else {
  //     $json = array("msg" => "获取数据失败", "code"=> "0");
  //   }
  //   echo json_encode($json);
  // }
  // createJson($arr);
?>