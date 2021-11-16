<?php
 
 include("connect.php");



$u_id = $_GET['u_id'];
$b_id = $_GET['b_id'];
$d_l_volume = $_GET['d_l_volume'];
$d_l_datetime = $_GET['d_l_datetime'];

date_default_timezone_set("Asia/Bangkok");
$date_create = date("Y-m-d H:i:s");

$time_create = date("H:i:s");

 $insertTrip = "INSERT INTO tbl_drink_log (u_id,b_id,d_l_volume,d_l_datetime,d_l_time)
 VALUES ('$u_id','$b_id','$d_l_volume','$date_create','$time_create')";

 $result = $conn->query($insertTrip);



 $insertTrip2 = "DELETE FROM tbl_alert
 WHERE a_id = ( SELECT a_id FROM tbl_alert WHERE u_id = '".$u_id."'  LIMIT 1 )";

 $result2 = $conn->query($insertTrip2);


 if($result && $result2){
    $mes = 'success';
    echo json_encode($mes);

 }else{
    $mes = 'fail';
    echo json_encode($mes);
 }


 ?>