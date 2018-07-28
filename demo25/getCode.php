<ul>
<?php
	header('Content-Type:text/html;charset=UTF-8');
	$football = file_get_contents("json/football.json");
	$foot = json_decode($football);
	foreach($foot as $value){
		echo "<li>$value->name<br/>$value->content</li>";	
	};
	
	$person = file_get_contents('json/person.json');
	$per = json_decode($person);
	echo '<br/';
	foreach($per as $value){
		echo ("<li>姓名:$value->name&nbsp;&nbsp;&nbsp;"
		."年龄:$value->age&nbsp;&nbsp;&nbsp;"
		."性别:$value->sex&nbsp;&nbsp;&nbsp;"
		."手机:$value->phone&nbsp;&nbsp;&nbsp;"
		."地址:$value->address&nbsp;&nbsp;&nbsp;"
		."QQ:$value->qq&nbsp;&nbsp;&nbsp;"
		."</li>");
	};
	
?>
</ul>