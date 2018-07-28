<?php
//	自定义浏览器content-type为json
	header("Content-type: application/json");
//	$username = $_GET['username'];
	$json = file_get_contents('php://input');
    $json = json_decode($json);
    $username = $json -> username;
	$conn = new mysqli('localhost','root','','db_user','3306');
	$sql = "select * from tb_student where username='$username'";
    $conn->query("SET CHARACTER SET 'utf8'");//读库 
	$result = $conn -> query($sql);
	$row = $result -> fetch_assoc();
	if($row){
		$json = array("msg" => "", "code"=> "200", "data" => $row);
	}else{
		$json = array("msg" => "获取数据失败", "code"=> "0");
	}
	
	echo json_encode($json);
	
	$conn -> close();
?>