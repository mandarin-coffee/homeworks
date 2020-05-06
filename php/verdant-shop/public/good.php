<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Турсы Calvin Klein</title>
    <link rel="stylesheet" href="style/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,200,300,400,500,600,700,800,900&display=swap&subset=cyrillic"
          rel="stylesheet">
    <script src="https://kit.fontawesome.com/7829bd51fc.js" crossorigin="anonymous"></script>
</head>
<body>
<?php include "../server/config.php";
?>
<div id="app">
    <header>
        <?php include "../teamplates/header.php" ?>
    </header>
    <main>
        <?php
        while ($data = mysqli_fetch_assoc($res)) :
        if($data['id'] == $_GET['id']) :
        ?>
            <div class="fullDesc">
                <div class="gridWrap">
                    <img src="img/<?= $data['picture'];?>" alt="">
                    <div class="title"><?= $data['title'];?></div>
                    <div class="fulldesc"><?= $data['full_desc'];?></div>
                    <div class="price">Цена: <?= $data['price'];?> &#36;</div>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>
        <?php endif; endwhile;?>

    </main>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script src="js/cartComponent.js"></script>
<script src="js/productsComponent.js"></script>
<script src="js/shop.js"></script>
<script src="js/hide.js"></script>
</body>
</html>
