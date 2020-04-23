<?php
$i = 0;
while ($i <= 100) {
    if (!($i % 3)) {
        echo $i . ' ';
    }
    $i++;
}

echo "<hr>";

$i = 0;
do {
    if ($i < 1) {
        echo $i . ' ноль <br>';
    } elseif ($i % 2) {
        echo $i . " нечетное число <br>";
    } else {
        echo $i . " четное число <br>";
    }
    $i++;
} while ($i <= 10);

echo "<hr>";

$cities = ["Удмуртия" =>
    "Ижевск",
    "Глазов",
    "Воткинск",
    "Московская область" =>
        "Москва",
    "Мытищи",
    "Дубники",
    "Кировская область" =>
        "Киров",
    "Кирово-Чепецк",
    "Котельнич"];

foreach ($cities as $key => $city) {
    echo "$key: $city <br>";
}

echo "<hr>";
function linkList(){
    $links = ["home", "archive", "contact"];
    $list = "<ul>";

    foreach ($links as $link) {
        $list .= "<li><a href=\"#\"></a>$link</li>";
    }
    $list .= "</ul>";

    echo $list;
}

echo linkList();
