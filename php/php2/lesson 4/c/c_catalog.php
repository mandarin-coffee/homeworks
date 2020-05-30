<?php
class c_catalog extends c_base
{
    //
    // Конструктор.
    //

    public function action_index(){
        $this->title .= 'catalog';
        $text = text_get();
        //$today = date();
        $this->content = $this->Template('v/v_index.php', array('text' => $text));
    }


    public function action_edit(){
        $this->title .= '::Редактирование';

        if($this->isPost())
        {
            text_set($_POST['text']);
            header('location: index.php');
            exit();
        }

        $text = text_get();
        $this->content = $this->Template('v/v_edit.php', array('text' => $text));
    }
}