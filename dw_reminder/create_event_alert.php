<?php
include("connect.php");



$u_id = $_GET['u_id'];

$time = $_GET['time'];


date_default_timezone_set("Asia/Bangkok");
$date_create = date("Y-m-d H:i:s");




$deleteEvent="DROP EVENT IF EXISTS drink_alert";



$result1 = $conn->query($deleteEvent);

$insertquery="CREATE EVENT drink_alert
ON SCHEDULE
  EVERY '".$time."' SECOND
COMMENT 'drink alert.'
DO
INSERT INTO tbl_alert (u_id, a_t, a_datetime)
VALUES ('$u_id', '1', CURDATE()) ";


$result2 = $conn->query($insertquery);
if($result1 && $result2){
   echo 'OK';
}else{
    echo 'NOT OK';
}

?>

