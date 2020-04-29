<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>php Lesson 5</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php include "admin/config.php";
$sql = "select * from gallery";

$res = mysqli_query($connect, $sql);

//while ($data = mysqli_fetch_assoc($res)){
//    echo "Картинки имеют имена имеет имя ".$data['name']."<br>";
//    echo "<a href='#' target='_blank'><img src='images/small/".$data['name']."'></a>";
//
//}
?>
<div class="gallery">
    <div class="galleryPic">
        <?php
            while ($data = mysqli_fetch_assoc($res)){
        //    echo "Картинки имеют имена имеет имя ".$data['name']."<br>";
              echo "<a href='".$data['pathbig']."/".$data['name']."' target='_blank'><img src='".$data['path']."/".$data['name']."'></a>";
        } ?>
    </div>
</div>


<!--<div class="gallery">-->
<!--    <div class="galleryPic">-->
<!--        --><?php
//        $files = scandir("images/small");
//        $filesBig = scandir("images/big");
//
//
//        for ($i = 2; $i < count($files); $i++): ?>
<!--            <a href='images/big/--><?//= $files[$i] ?><!--' target="_blank"><img src="images/small/--><?//= $files[$i] ?><!--"></a>-->
<!--        --><?php //endfor; ?>
<!--    </div>-->
<!--</div>-->
</body>
</html>

