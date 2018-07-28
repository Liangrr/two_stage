<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            *{ padding: 0; }
            .menulist{ list-style:none; width:800px; border: 1px solid #ddd; border-bottom: none; }
            .menulist li { font-family: "微软雅黑"; border-bottom: dashed 1px gray; padding: 5px;font-weight: 600; }
            .menulist li span {
                font-weight:400;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <ul class="menulist">
            <?php 
                // 索引数组
                // $arr = array("一", "二", "三", "四");
                // var_dump($arr["0"]);
                // // 关联数组
                // $arr2 = array("name" =>"xiaolan", "age" => "18");
                // var_dump($arr2["name"]);
                //假设我们从数据库取得了数据，存入了一个数组当中
                $json = file_get_contents('json/news.json');
                // 这个是把json字符串转成json对象
                $json = json_decode($json);
                // 打印包含数据类型
                // var_dump($json);
                // 打印数组形式
                // print_r($json);
                // 数组
                // 把json对象转换成字符串
                // $json = json.encode($json);
                // for($i = 0; $i < count($json); $i++) {

                // }
                foreach($json as $key => $value) {
                    // 字符串拼接，与js相同，把+换成.
                    echo "<li>标题：".$value->title."<span>北京时间：".$value->time."</span></li>";
                }
            ?>
        </ul>
        <script>
        
        </script>
    </body>
</html>
