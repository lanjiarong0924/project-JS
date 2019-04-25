<?php
header("Content-type:text/html;charset=utf-8");    //设置编码

$servername = "localhost";
$username = "root";
$password = "root";

$conn = new mysqli($servername,$username,$password);
if($conn->connect_error) {
    die("连接失败： " . $conn->connect_error);
}

$sql ="CREATE DATABASE myDB";
if($conn -> query($sql) === TRUE) {
    echo "数据库创建成功";
}else{
    echo "Error creating database: " . $conn->error;
}

$conn->close()
?>