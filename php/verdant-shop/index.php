<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,200,300,400,500,600,700,800,900&display=swap&subset=cyrillic"
          rel="stylesheet">
    <script src="https://kit.fontawesome.com/7829bd51fc.js" crossorigin="anonymous"></script>
    <title>Shop</title>
</head>
<body>
<?php include "config.php"; ?>
<div id="app">
    <header>
        <?php include "teamplates/header.php"?>
    </header>

    <main>
        <div class="container">
            <div class="gridContainer">
                <div class="catalogMenu"></div>
                <div class="products">
                    <?php
                    while ($data = mysqli_fetch_assoc($res)) : ?>
                        <div class="item">
                            <a href="good.php?id=<?= $data['id'];?>" style="text-decoration: none;">
                                <img src="img/<?= $data['picture'];?>" alt="">
                                <div class="title"><?= $data['title'];?></div>
                            </a>
                            <div class="minidesc"><?= $data['mini_desc'];?></div>
                            <div class="price"><?= $data['price'];?> &#36;</div>
                            <button class="buy-btn"
                                    @click="$parent.$emit('add-product', product)">Купить</button>
                        </div>
                    <?php endwhile;?>
                </div>

            </div>
        </div>
    </main>
</div>



<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script src="js/cartComponent.js"></script>
<script src="js/productsComponent.js"></script>
<script src="js/shop.js"></script>
<script src="js/hide.js"></script>
</body>
</html>