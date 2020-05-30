<?php
include('m/connectDB.php');
if($_POST) {
    $i = $_POST['GOODS'];

    $str = '';
    $Catalog = $getConnect->tablePrint($i);
    $result = [];
    foreach($Catalog as $item){
        $str = "<span class=\"catalog-item\" data-id=\"$item.id\">";
        $str = "<p> $item.title</p>";
        $str = "<img src=\"img/$item.pic\" width=\"350px\">";
        $str = "<p> $item.price руб</p>";
        $str = "<a href='#' class='buy-btn'>Купить</a>";
    }
    $result['html'] = $str;
    echo json_encode($result);
}