<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>管理员页面</title>
</head>
<body>
  <a href="add_student.php">添加新学员</a>
  <table border="1">
    <thead>
      <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>成绩</td>
        <td>备注</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
        <?php
         header("Content-type: text/html; charset=UTF-8");
         $coon = new mysqli('localhost', 'root', '', 'db_student_admin', '3306');
         $sql = "select * from student_score";
         $coon->query("SET CHARACTER SET 'utf8'");//读库 
         $result = $coon -> query($sql);
         $rows = $result -> fetch_all();
         // 遍历数据
         foreach($rows as $key => $value) {
             $arr = array("<tr>");
             // 遍历每一条数据
             foreach($value as $item) {
                //  var_dump($item);
                array_push($arr, "<td>$item</td>");
            }
            // 删除，修改时，需要数据id
            array_push($arr, "<td><a href='del.php?id=$value[0]'>删除</a>
                                <a href='add_student.php?id=$value[0]'>修改</a>
                            </td></tr>");
             echo join($arr);
            //  var_dump($value["0"]);
           
         }
        //  var_dump($rows);
        ?>
    </tbody>
  </table>
</body>
</html>