<?php
    $json = file_get_contents('php://input');
    $json = json_decode($json);
    $username = $json -> username;
    $pwd = $json -> pwd;
    $arr = array("msg" => "", "code" => "200");
    echo json_encode($arr);
?>