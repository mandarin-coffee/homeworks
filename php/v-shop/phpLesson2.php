<?php
$a = rand(-100, 100);
$b = rand(-100, 100);

if($a>=0 && $b>=0){
    $c =  $a - $b;
    echo $c;
} elseif($a<0 && $b<0){
    $c = $a * $b;
    echo $c;
} elseif(($a<0 && $b>0) || ($a>0 && $b<0)){
    $c = $a + $b;
    echo $c;
}

echo "<hr><br>";

$a = rand(0, 15);

switch($a){
    case(0):
        echo "0 ";
    case(1):
        echo "1 ";
    case(2):
        echo "2 ";
    case(3):
        echo "3 ";
    case(4):
        echo "4 ";
    case(5):
        echo "5 ";
    case(6):
        echo "6 ";
    case(7):
        echo "7 ";
    case(8):
        echo "8 ";
    case(9):
        echo "9 ";
    case(10):
        echo "10 ";
    case(11):
        echo "11 ";
    case(12):
        echo "12 ";
    case(13):
        echo "13 ";
    case(14):
        echo "14 ";
    case(15):
        echo "15 ";
}

echo "<hr><br>";

function sum($a,$b){
    return $a+$b;
};
function diff($a,$b){
    return $a-$b;
};
function div($a,$b){
    return $a*$b;
};
function mult($a,$b){
    return $a/$b;
};
echo sum(rand(1,10), rand(1,10))." ";
echo diff(rand(1,10), rand(1,10))." ";
echo div(rand(1,10), rand(1,10))." ";
echo mult(rand(1,10), rand(1,10))." ";

echo "<hr><br>";

function mathOperation($arg1, $arg2, $operation){
    switch ($operation){
        case(sum):
            echo sum(rand(1,10), rand(1,10));
            break;
        case(diff):
            echo diff(rand(1,10), rand(1,10));
            break;
        case(div):
            echo div(rand(1,10), rand(1,10));
            break;
        case(mult):
            echo mult(rand(1,10), rand(1,10));
            break;
    }
}

echo mathOperation(rand(1,10), rand(1,10), "sum").' ';
echo mathOperation(rand(1,10), rand(1,10), "diff").' ';
echo mathOperation(rand(1,10), rand(1,10), "div").' ';
echo mathOperation(rand(1,10), rand(1,10), "mult").' ';