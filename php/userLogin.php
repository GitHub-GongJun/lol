<?php
header('Content-Type:text/html;charset=utf-8');
$url = $_GET['url'];

$username = $_GET['username'];
// $userid = $_GET['userid'];
$userid = 112233;
$password = $_GET['password'];
$phone = $_GET['phone'];
$code = $_GET['code'];

$link = mysqli_connect('localhost','root','rootroot','lol_index');
if (!$link) {
    die('连接失败:'.mysqli_connect_error());
}
echo 'OK！数据库连接成功！';
mysqli_set_charset( $link, "utf8" );
//执行sql语句
$sql = "INSERT INTO newQQ (username,userid,password,phone,code) VALUES ('$username','$userid','$password','$phone','$code')";
// $result = mysqli_query($link, $sql);//增加

$sql = "select * from newQQ";//查询
//$sql = "select * from newQQ where name='泳池派对周边新品'";
$result = mysqli_query($link, $sql);//返回值是资源类型

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