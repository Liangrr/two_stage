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
  <table border="1" cellspacing="0" style="text-align: center;">
    <thead>
      <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>性别</td>
        <td>年龄</td>
        <td>成绩</td>
        <td>账号</td>
        <td>密码</td>
        <td>按钮</td>
      </tr>
    </thead>
    <tbody>
        <?php
         include "db_class.php";
         header("Content-type: text/html; charset=UTF-8");
         
         $sql = "select * from tb_student";
         $conn = new db();
         $rows = $conn -> query($sql,1);

         // 遍历数据
         foreach($rows as $key => $value) {
             $arr = array("<tr>");
             // 遍历每一条数据
             foreach($value as $item) {
                array_push($arr, "<td>$item</td>");
            }
            array_push($arr, "<td><a href='del.php?id=$value[0]'>删除</a>
                                <a href='add_student.php?id=$value[0]'>修改</a>
                            </td></tr>");
             echo join($arr);
         }
         
        ?>
    </tbody>
  </table>
</body>
</html>