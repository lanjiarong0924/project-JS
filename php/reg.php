<?php
header("Content-type:text/html;charset=utf-8");    //设置编码

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myDB";
$name = $_POST["name"];
$pwd = $_POST["pwd"];



 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

/* create a prepared statement */
if ($stmt = $conn->prepare("INSERT INTO Login (name, password)
VALUES ( ? , ?)")) {

    /* bind parameters for markers */
    $stmt->bind_param('ss', $name, $pwd);

    /* execute query */
    $result = $stmt->execute();

    if($result) {
        echo "<script>alert('您已注册成功，返回登录');location='../login.html'</script>";
        exit;

    }else{
        echo "<script>alert('您输入的用户名已存在,请重新注册！');location='reg.html'</script>";
        exit;
    }


    /* close statement */
    $stmt->close();
}

/* close connection */
$conn->close();
?>
