<?php

	header("Content-type: text/html; charset=UTF-8");
	include "db_class.php";
	
	$id = $_POST['id'];
	$name = $_POST['name'];
	$sex = $_POST['sex'];
	$age = $_POST['age'];
	$grade = $_POST['grade'];
    $username = $_POST['username'];
    $pwd = $_POST['password'];

    $sql = "UPDATE tb_student SET name = '$name',sex = '$sex', age = '$age', grade = '$grade', username = '$username', password = '$pwd' WHERE id=".$id;
    $conn = new db();
    
    $result = $conn -> query($sql,null);

    if($result){
		echo "<script>
			alert('修改成功！')
			location.href = 'manager.php';
		</script>";
	}else{
		echo "<script>
			alert('修改失败!')
			location.href = 'add_student.php';
		</script>";
	}
	
    
?>