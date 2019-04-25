<?php
header("Content-type:text/html;charset=utf-8");    //设置编码

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myDB";

$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error) {
    die("连接失败： " . $conn->connect_error);
}

$sql ="CREATE TABLE Login (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
    )";
if($conn -> query($sql) === TRUE) {
    echo "Table Login created successfully";
}else{
    echo "创建数据表错误: " . $conn->error;
}

$conn->close()
?>