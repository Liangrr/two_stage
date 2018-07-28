<?php
	header('Content-Type:text/html;charset=UTF-8');
	echo '<h1>hello word</h1>';
	$name = '定义变量';
	$arr = array('1','2','3','4');
	for($i=0;$i<count($arr);$i++){
		print('现在是第'+$i+'个');
	}
?>