<?php
header('Content-Type:text/html;charset=utf-8');
$url = $_GET['url'];
$name = $_GET['name'];

//1连接数据库
//mysqli_connect('主机（域名/ip）','数据库用户名','数据库密码','数据库名')
$link = mysqli_connect('localhost','root','rootroot','main_banner');
// print_r($link); //检查是否连接成功
if (!$link) {
    die('连接失败:'.mysqli_connect_error());
}
echo 'OK！数据库连接成功！';

//2设置编码
mysqli_set_charset( $link, "utf8" );

//3执行sql语句

$sql = "INSERT INTO index_banner (name,url) VALUES ('$name','$url')";
$result = mysqli_query($link, $sql);//增加

$sql = "select * from index_banner";//查询
//$sql = "select * from index_banner where name='泳池派对周边新品'";
$result = mysqli_query($link, $sql);//返回值是资源类型

// 4.解析数据: mysqli_fetch_assoc($result)，没有数据则返回null
$rows = [];
while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
};
// print_r($rows); // 二维数组

if (!$rows) {
    print(mysqli_error($link));//打印错误
    exit();
}

$rowslength = count($rows); // 获取数组长度

// var_dump($rowslength); // int

if($rowslength > 0){ // 有数据
    echo json_encode($rows,JSON_UNESCAPED_UNICODE); // 返回json字符串数据
}else{
    echo '暂无数据！';
}

//关闭数据库
mysqli_close($link); 

?>