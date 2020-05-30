<?php
class database{
    const Host = 'localhost';
    const User = 'root';
    const Pass = 'root';
    const DB = 'les4';

    protected $DB = self::DB;

    public function connect(){
        $connect = mysqli_connect( self::Host, self::User, self::Pass, self::DB);
        return $connect;
    }

    public function getTable($id){
        $getTable = mysqli_query($this->connect(), "SELECT * FROM goods WHERE id>$id limit 5");

        $goods = [];
        while ($row = mysqli_fetch_assoc($getTable)){
            $goods[] = $row;
        }

        return $goods;
    }
}

$getConnect = new database();
$getConnect->connect();