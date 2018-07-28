<?php
    header("Content-type: text/html; charset=UTF-8");
     
    $id = $_GET['id'];
     
    $coon = new mysqli('localhost', 'root', '', 'db_user', '3306');
     
    $sqlDel = "DELETE FROM tb_student WHERE id=$id;";
     
    $coon->query("SET CHARACTER SET 'utf8'");//读库 
   	$resDel = $coon -> query($sqlDel);
   	
    echo "<script>
	    alert('删除成功');
	    location.href =  'manager.php';
	    </script>";
 
?>