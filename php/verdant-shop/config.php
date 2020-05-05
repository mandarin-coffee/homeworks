<?php
const SERVER = "Localhost";
const LOGIN = "root";
const PASS = "root";
const DB = "goods";

$connect = mysqli_connect(SERVER, LOGIN, PASS, DB) or die("Ошибка ссоединения с базой данных");

$sql = "select * from goods";

$res = mysqli_query($connect, $sql);