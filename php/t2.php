<?php
/*接口文档
url:http://127.0.0.1/lol/php/t2.php
method:get
参数
    1. user 用户账号
    2. pass 密码
返回：用户账号/密码
{user:1234,pass:abcd}
*/ 
header('Content-Type:text/html;charset=utf-8');
$username = $_GET['user'];
$password = $_GET['pass'];
if($username=='admin' && $password=='123456'){
    // echo "{\"err\":1,\"msg\":\"登录成功\"}";
    echo "<script>alert(123)</script>";
}else{
    echo "{\"err\":0,\"msg\":\"登录失败\"}";
};
// echo "{\"user\":$username,\"pass\":$password}";
?>