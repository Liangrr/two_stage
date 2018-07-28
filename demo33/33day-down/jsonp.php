<?php
    $fn = $_GET['cb'];
    // ------ 省略20行，操作数据库，返回json数据
    $json = json_encode($json);
    echo fn.'('.$json.')';
?>
