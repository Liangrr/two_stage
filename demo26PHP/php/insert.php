<?php
	include "db_class.php";
	header("Content-type:text/html;charset=utf8");
	
	$id = $_POST['id'];
	$name = $_POST['name'];
	$sex = $_POST['sex'];
	$age = $_POST['age'];
	$grade = $_POST['grade'];
	$username = $_POST['username'];
	$pwd = $_POST['password'];
	
	$sql = "INSERT INTO tb_student (name,sex,age,grade,username,".
		" password)VALUES ('$name', '$sex',$age,'$grade','$username','$pwd')";
	
	$conn = new db();

	$result = $conn -> query($sql,null);
	var_dump($result);
	if($result){
		echo "<script>
			alert('插入成功！')
			location.href = 'manager.php';
		</script>";
	}else{
		echo "<script>
			alert('插入失败!')
			location.href = 'add_student.php';
		</script>";
	}
	
?>