<?php
include_once('theme/v_main.php');
include_once('view.php');

// Информация для отображения.
$title = 'Gallery';

// Внутренний шаблон.
$content = view_include(
    'theme/v_gallery.php'
);
// Внешний шаблон.
$page = view_include(
    'theme/v_main.php',
    array('title' => $title, 'content' => $content));

// Вывод.
echo $page;
