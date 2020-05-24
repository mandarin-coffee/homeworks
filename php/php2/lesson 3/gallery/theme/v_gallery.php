<?php
/**
 * Шаблон редактора
 * ================
 * $text - текст статьи
 */
?>

<?php include "admin/config.php";
$sql = "select * from gallery";

$res = mysqli_query($connect, $sql);?>
<div class="gallery">
    <div class="galleryPic">
        <?php while ($data = mysqli_fetch_assoc($res)): ?>
            <a href="<?= $data['pathbig'] ?>/<?= $data['name'] ?>" target='_blank'><img src="<?= $data['path'] ?>/<?= $data['name'] ?> "></a>
        <?php endwhile;?>
    </div>
</div>