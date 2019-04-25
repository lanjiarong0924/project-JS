

<?php


header("Content-type:text/html;charset=utf-8");    //设置编码

session_start();
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myDB";
$name = $_POST["username"];
$pwd = $_POST["password"];



 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

/* create a prepared statement */
if ($stmt = $conn->prepare("select id,name,password from Login where name= ?")) {

    /* bind parameters for markers */
    $stmt->bind_param('s', $name);

    /* execute query */
    $stmt->execute();


    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        if($pwd !=$row['password'] || $name !=$row['name']){

            echo "<script>alert('密码错误，请重新输入');location='login.html'</script>";
            exit;
            }
            else{
                $_SESSION['name']=$row['name'];
                
                echo($row['name']);
            }

    }

    /* close statement */
    $stmt->close();
}

/* close connection */
$conn->close();
?>