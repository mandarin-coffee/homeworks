<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Турсы Calvin Klein</title>
    <link rel="stylesheet" href="../public/style/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,200,300,400,500,600,700,800,900&display=swap&subset=cyrillic"
          rel="stylesheet">
    <script src="https://kit.fontawesome.com/7829bd51fc.js" crossorigin="anonymous"></script>
</head>
<body>
<?php include "../server/config.php"; ?>
<div id="app">
    <header>
        <?php include "../teamplates/header.php" ?>
    </header>
    <main>
        <?php
        if ($_GET['success'] && $_COOKIE['login']):?>
            <h1>Ваша учетная запись подтверждена!</h1>
        <?php endif; ?>

        <form method="post" action="auth.php">
            <p>Введите логин</p>
            <input type="text" name="login" value="<?= $_COOKIE['login'] ?>">
            <p>Введите логин</p>
            <input type="password" name="pass" value="<?= $_COOKIE['pass'] ?>"><br><br>
            <input type="submit" value="Войти">
        </form>
    </main>
</div>
</body>
</html>
