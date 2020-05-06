<?php
const SERVER = "Localhost";
const LOGIN = "root";
const PASS = "root";
const GOODS = "goods";

$connect = mysqli_connect(SERVER, LOGIN, PASS, GOODS) or die("Ошибка ссоединения с базой данных");

$sql = "select * from goods";

$res = mysqli_query($connect, $sql);

