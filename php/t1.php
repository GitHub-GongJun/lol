<?php
header('Content-Type');
echo "echo";
echo "<br>";
print("print");
print_r("print_r");
var_dump("var_dump");
$str1 = 'abc';
echo "123 $str1";
echo '12ac'.$str1;
//heredoc结构字符串 
$str3 = <<<fuck
    qwerqwrqwer<br>
    $str1 fff<br>
    aa$str1 aa
fuck;//不能缩进
echo $str3;

//作用域
$x = 10;
$y = 100;
function fn(){
    global $x;
    // echo("<p>$x</p>");
    echo "<br>$x";//10
    $x = 20;
    echo "<br>$x";//20
}
// fn();
echo "<br>$x";//20;

function fn2(){
    echo "<br>{$GLOBALS['y']}";//100
}
// fn2();

//数组
//索引数组
$arr1 = ['a','b','c'];
echo '<pre>';//代码显示
print_r($arr1);

$arr2 = array('a',123,true,'b');
echo '<pre>';//代码显示
print_r($arr2);
var_dump($arr2);

//关联数组
$arr3 = array(
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
);
echo $arr3['key1'];
echo '<br>';
echo count($arr3);

foreach($arr2 as $val){
    echo "$val<br>";
};
foreach($arr3 as $key=>$val){
    // echo "$key-----$val<br>";
    echo $key.'-----'.$val.'<br>';
};

//二维数组
$arr4 = [];
$arr4[] = array(1,2,3);
$arr4[] = array('a','b','c');
// echo '<pre>';//代码显示
print_r($arr4);

echo json_encode($arr1); //'["a","b","c"]' //转成json字符串


// $GLOBALS
// $_REQUEST 变量是一个数组，内容是GET或POST方法发送的键值
// $_GET 变量是一个数组，内容是由 GET 方法发送的键值
// $_POST 变量是一个数组，内容是由 POST 方法发送的键值
echo '<br>$_GET的值为<br>';
print_r($_GET);
echo $_GET['a'];
?>