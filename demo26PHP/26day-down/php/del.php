<?php
    include "../php_class/db_class.php";
    $id = $_GET["id"];
    $sql = "DELETE from student_score where id = ".$id;
    // 
    // var_dump($sql);
    $coon = new db();
    $result =  $coon->query($sql, null);
    var_dump($result);
?>