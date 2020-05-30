<?php
include('m/connectDB.php');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"></script>
</head>
<body>


<div class="catalog-list">
    <?php $id = $_GET['goods'] ? $_GET['goods'] : 0;
    $catalog = $getConnect->getTable($id);
    foreach ($catalog as $item) : ?>
        <span class="catalog-item" data-id="<?= $item['id']?>">
            <p><?= $item['title']?></p>
            <img src="img/<?= $item['pic']?>" width="350px">
            <p><?= $item['price']?> руб</p>
            <a href='#' class='buy-btn'>Купить</a>
        </span>
    <?php endforeach;  ?>
    <script>
        $(function () {
            $('#jsShowMore').click(function (e) {
                e.preventDefault();
                let goods = $('.catalog-list .catalog-item').last().attr('data-id');
                console.log(goods);
                $.ajax({
                    type: 'POST',
                    url: 'ajax.php',
                    data: {GOODS: goods},
                    success: function (data) {
                        let result = JSON.parse(data);
                        $('.catalog-list').append(result.html);
                    }
                });
            });
        });
    </script>
</div>
<a id="jsShowMore" href="" data-goods=5>Показать еще</a>

</body>
</html>