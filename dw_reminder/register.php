<?php
 
 include("connect.php");



$email = $_GET['email'];
$username = $_GET['username'];
$password = $_GET['password'];
$gender = $_GET['gender'];
$weight = $_GET['weight'];
$s_n = $_GET['s_n'];
$e_n = $_GET['e_n'];
$n_t = $_GET['n_t'];


$hashed_password = password_hash($password, PASSWORD_DEFAULT);


 $insertTrip = "INSERT INTO tbl_users (u_email,u_username,u_password,u_gender,u_weight,
 u_noti_start,u_noti_end,u_noti_type)
 VALUES ('$email','$username','$hashed_password','$gender','$weight'
 ,'$s_n','$e_n','$n_t')";
 
 $result = $conn->query($insertTrip);


 if($result){
     echo 'success';
 }else{

    echo 'fail';
 }


 ?>