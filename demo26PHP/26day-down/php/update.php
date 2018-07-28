<?php
    header("Content-type: text/html; charset=UTF-8");
    include "../php_class/db_class.php";
    $id = $_POST["id"];
    $username = $_POST['username'];
    $score = $_POST['score'];
    $mark = isset($_POST['mark'])?$_POST['mark']: null;
    $sql = "update student_score set student_name = '$username', score = $score, mark = '$mark' where id = ".$id;
    var_dump($sql);
    $coon = new db();
    $result =  $coon->query($sql, null);
    if($result) {
        echo "<script> 
                location.href = 'manager.php';
                </script>";
    } else {
        echo "<script> 
            alert('修改失败，请重新修改！！');
            location.href = 'add_student.php';
        </script>";
    }
?>