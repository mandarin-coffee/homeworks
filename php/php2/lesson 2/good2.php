<?php
include "base.php";
class good2 extends base {
    private $title = 'Телефон';
    private $price = 3000;
    private $amount = 5;

    public function getFullPrice(){
        echo $this->title."<br>".$this->price * $this->amount;
    }

}