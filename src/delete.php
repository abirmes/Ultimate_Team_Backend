<?php
require_once "conn.php";
$id=$_GET['id'];
$sql = "DELETE FROM Players WHERE id =$id;";
// mysqli_query($conn , $sql);
if(mysqli_query($conn , $sql)){
    header("location: afficher.php ");
}

 ?>