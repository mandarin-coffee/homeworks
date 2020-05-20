<?php
include "base.php";
class good3 extends base {
    private $title = 'Арбуз';

    private $price = 100;
    private $weigth = 7;

    public function getFullPrice(){
        echo $this->title."<br>".$this->price * $this->weigth;
    }

}