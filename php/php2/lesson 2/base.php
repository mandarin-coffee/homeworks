<?php
abstract class base{
    private $title;

    public function getTitle()
    {
        return $this->title;
    }
    abstract function getFullPrice();

    function render (){
        echo ($this->title);
    }
}