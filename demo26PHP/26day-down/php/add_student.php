<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
    <?php
        include "../php_class/db_class.php";
        $coon = new db();
        // $result =  $coon->query($sql, null);
        // 获取id
        $id = isset($_GET['id']) ? $_GET['id'] : null;
        $url = "insert.php";
        $username = null;
        $score = null;
        $mark = null;
        // 通过id的有无，判断是添加还是修改
        if($id) {
            // 修改form表单跳转地址
            $url = 'update.php';
            // -> 修改
            // 通过id获取对应id的此条学生信息
            $sql = "select * from student_score where id = $id";
            $result =  $coon->query($sql, 2);
            $username = $result["student_name"];
            $score = $result["score"];
            $mark = $result["mark"];
            // 渲染到页面上
           
            // 修改传送地址
        }
        // -> 添加（没有额外的处理）
        echo "<form method='POST' action='$url'>
            <input type='hidden' placeholder='id' name='id' value='$id' />
            <input type='text' placeholder='学生姓名' name='username' value='$username' /> <br>
            <input type='text' placeholder='分数' name='score' value='$score' /> <br>
            <input type='text' placeholder='备注' name='mark' value='$mark' /> <br>
            <input type='submit'>
        </form>";
       

    
    
    ?>
    
</body>
</html>