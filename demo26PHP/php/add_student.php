<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
	<?php
		include "db_class.php";
		header("Content-type: text/html; charset=UTF-8");
		$conn = new db();
		
		$url = "insert.php";
		$id = isset($_GET['id'])?$_GET['id']:null;
		$name = null;
		$sex = null;
		$age = null;
		$grade = null;
		$username = null;
		$pwd = null;
		
		if($id){
			$url = 'update.php';
            $sql = "select * from tb_student where id = $id";
			$result = $conn -> query($sql,2);
			var_dump($result['name']);
			$name = $result['name'];
			$sex = $result['sex'];
			$age = $result['age'];
			$grade = $result['grade'];
			$username = $result['username'];
			$pwd = $result['password'];
		}
		
//		    <!--id,name,sex,age,grade,username,password-->

		echo	"<form action='$url' method='POST'>
			    <input type='hidden' placeholder='id' name='id'  value='$id' />
		        <input type='text' placeholder='姓名' name='name' value='$name'/> <br/>
		        <input type='text' placeholder='性别' name='sex'  value='$sex' /> <br/>
		        <input type='text' placeholder='年龄' name='age'  value='$age' /> <br/>
		        <input type='text' placeholder='分数' name='grade'value='$grade'/> <br/>
		        <input type='text' placeholder='账号' name='username'  value='$username' /> <br/>
		        <input type='text' placeholder='密码' name='password'  value='$pwd'/> <br/>
		    	<input type='submit' />
		  </form>";
    ?>

   
</body>
</html>