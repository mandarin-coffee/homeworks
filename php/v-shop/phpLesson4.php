<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 20px; justify-items: center; align-items: center;">

<?php
$files = scandir("images/small");
$filesBig = scandir("images/big");

for($i = 2; $i < count($files); $i++): ?>
     <a href='images/big/<?= $files[$i]?>'target="_blank"><img style="width: 400px" src="images/small/<?= $files[$i]?>"></a>
<?php
endfor;
?>
</div>