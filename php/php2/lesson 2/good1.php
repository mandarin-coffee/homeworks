<?php
include "base.php";
class good1 extends base {
    private $title = 'Фильм "Мстители: Финал"';
    private $price = 1500;
    private $amount = 3;

    public function getFullPrice(){
        echo $this->title."<br>".$this->price * $this->amount;
    }

}