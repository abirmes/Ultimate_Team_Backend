<?php

define("SERVERNAME", "db");
define("USERNAME", "myuser");
define("PASSWORD", "mypassword");
define("DATABASE", "FUTBackend");

$conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DATABASE);

// if (!$connection) {
//     die("Connection Failed!");
// }



?>