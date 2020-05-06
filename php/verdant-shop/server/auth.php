<?php

$connect = mysqli_connect("localhost", "root", "root", "goods");
$login = (!empty($_POST['login'])) ? strip_tags($_POST['login']) : "";
$pass = (!empty($_POST['pass'])) ? strip_tags($_POST['pass']) : "";

$sql = "select id from users where login='$login' and pass = '$pass'";
$res = mysqli_query($connect,$sql) or die("Error:".mysqli_error($connect));

if(mysqli_num_rows($res)>0){
    setcookie("login",$login);
    setcookie("pass",$pass);
    header("Location: cabinet.php?success=true");
}
else {
    header("Location: cabinet.php?success=false");
}
