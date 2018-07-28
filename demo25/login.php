<table border="1" cellspacing="0" class="_table">
	<!--id,name,sex,age,grade,username,password-->
	<tr><td>ID号</td><td>姓名</td><td>性别</td><td>年龄</td>
		<td>成绩</td><td>账号</td><td>删改</td></tr>
</table>
<?php
	header('Content-Type:text/html;charset=UTF-8');
	    // 获取用户名
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];	
//  $mark = isset($_POST["mark"])?$_POST["mark"] : "";
    //1.建立连接
    // ip地址，用户名， 密码， 连接的数据源， 端口号， 默认是3306
    $conn = new mysqli('localhost','root','','db_user','3306');

    //2.定义sql语句
    //sql语句很容易报错，在工具中写好sql语句，再复制进来
    $sqlU="SELECT * from tb_student WHERE username = '$username'";
    
    // 打印sql语句，排错
    // echo $sql_insert;
    //3. 设置字符编码
    // 功能：在读取数据或者写入数据的时候，可能是中文，所以要设置字符编码
    $conn->query("SET CHARACTER SET 'utf8'");//读库   

//  //4.发送SQL语句
    $result = $conn -> query($sqlU);
//  //获取查询结果，返回数据
    $rowU = $result -> fetch_assoc();
//	如果查询结果不为空，则证明能在数据库找到账户
    if($rowU != null){
//  	上面判断账号，这里判断密码是否正确
    	if($rowU['password'] == $pwd){
//  		正确的话输出某某某登录成功
    		echo "<script>
    				alert('".$rowU['name']."登录成功！')
    			</script>";
    		$select_tb = "SELECT * from tb_student";
//  		执行这个语句
    		$select_tb2 = $conn -> query($select_tb);
//  		拿到查询到的数据
    		$tb_all = $select_tb2 -> fetch_all();
//			进行第一步解析，key拿到是第几条数据的序号，value是array
    		foreach($tb_all as $key => $value){
    			echo "<script>
    					var _tr = document.createElement('tr');
    				</script>";
//  			第二步解析，key拿到的是第几个属性的序号，value2是属性值
				foreach($value as $value2){
					echo "<script>
    					var _td	= document.createElement('td');
    					_td.innerHTML = '$value2';
    					_tr.appendChild(_td);
    				</script>";
				}
				echo "<script>
    					var _table = document.querySelector('._table');
    					var delBtn = document.createElement('button');
    					var updateBtn = document.createElement('button');
    					getStyle(delBtn);
    					getStyle(updateBtn);
    					delBtn.innerHTML = '删除';
    					updateBtn.innerHTML = '修改';
    					_tr.appendChild(delBtn);
    					_tr.appendChild(updateBtn);
    					_table.appendChild(_tr);
    					function getStyle(e){
							e.style.cursor = 'pointer';
    						e.style.width = 50 + 'px';
    						e.style.height = 25 + 'px';
    					}
    				</script>";
    		}
    	}else {
//  		否则提示密码错误
            echo "<script>
                    alert('密码错误！');
                    window.location.href = 'login.html';
                </script>";
       }
//  如果账户为空，默认注册
	}else if($rowU == null){
//		插入数据语句
		$sql_insert = "INSERT INTO tb_student (name,sex,age,grade,username,password)".
		" VALUES ('angry', '女',18,'78','$username','$pwd')";
//		编码执行时把中文改utf-8
		$conn -> query("SET NAMES 'utf8'");//写库  
//		执行插入数据到数据库
		$charu = $conn -> query($sql_insert);
//		返回提示注册成功
		echo "<script>
                    alert('注册成功！');
                    window.location.href = 'login.html';
               </script>";
	}
    

    
    // fetch_all() 获取所有数据，以数组的形式
    // fetch_array() 以一个关联数组，有索引，有key，或者两者皆有的方式抓取一行结果。
    // fetch_object()  以对象返回结果集的当前行。
    // fetch_row() 以枚举数组方式返回一行结果
    // fetch_assoc() 以一个关联数组方式抓取一行结果。
    // 其他方式获取所有数据
    // $arr=array();//定义空数组
    // 获取所有数据
    // while($row =$result -> fetch_assoc()){
    //   //array_push(要存入的数组，要存的值)
    //   array_push($arr,$row);
    // }
 
    // 关闭数据库
	$conn -> close();
?>
