<?php
     include "../php_class/db_class.php";
    $username = $_POST['username'];
    $score = $_POST['score'];
    $mark = isset($_POST['mark'])?$_POST['mark']: null;
    $sql = "INSERT into student_score (student_name, score, mark) VALUES ('$username', $score, '$mark')";
    // var_dump($sql);
    $coon = new db();
    $result =  $coon->query($sql, null);
    if($result) {
        echo "<script> 
                location.href = 'manager.php';
                </script>";
    } else {
        echo "<script> 
            alert('插入失败，请重新添加！！');
            location.href = 'add_student.php';
        </script>";
    }
?>