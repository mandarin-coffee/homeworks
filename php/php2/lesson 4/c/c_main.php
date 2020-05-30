<?php
include ('c_base.php');
class c_main extends c_base
{
    //
    // Конструктор.
    //

    public function action_index(){
        $this->title .= 'test';
        //$today = date();
        //$this->content = $this->Template('v/v_main.php', array());
    }


//    public function action_edit(){
//        $this->title .= '::Редактирование';
//
//        if($this->isPost())
//        {
//            text_set($_POST['text']);
//            header('location: index.php');
//            exit();
//        }
//
//        $text = text_get();
//        $this->content = $this->Template('v/v_main.php', array());
//    }
}