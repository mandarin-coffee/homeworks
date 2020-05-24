<?php
const SERVER = "Localhost";
const LOGIN = "root";
const PASS = "root";
const DB = "gallery";

$connect = mysqli_connect(SERVER, LOGIN, PASS, DB) or die("Ошибка ссоединения с базой данных");