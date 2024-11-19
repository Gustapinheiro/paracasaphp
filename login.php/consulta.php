<?php

$user = $_GET['user'];
$pass = $_GET['pass'];

include_once "conexao.php";


$query1 = "SELECT * FROM users3 where user='$user' and pass = MD5('$pass');";
$result1 = mysqli_query($link, $query1) ; 
$res1 = mysqli_fetch_row($result1);

if(!$res1){ 
    
    mysqli_free_result($result1);
  
    mysqli_close($link);
    echo 0;
    return 0;
}else{
    
    mysqli_free_result($result1);
    
    mysqli_close($link);
    echo 1;
    return 0;
}

?> 