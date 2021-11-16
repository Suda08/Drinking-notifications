<?php
 
include("connect.php");



$u_id = $_GET['u_id'];

$data = array();



function getdata($x,$u_id){

$val = null;

$conn = mysqli_connect("localhost", "root", "", "dw_reminder");

$sql = "SELECT SUM(d_l_volume) as valuee , DAYOFWEEK(d_l_datetime) as dayy FROM tbl_drink_log
WHERE week(d_l_datetime)=week(now()) AND tbl_drink_log.u_id = '".$u_id."' GROUP by d_l_datetime HAVING dayy = '".$x."'";

$result = $conn->query($sql);

$row = mysqli_fetch_array($result);

$val = isset($row['valuee']) ? $row['valuee'] : 0;


return $val;


}


$checksql ="SELECT SUM(d_l_volume) as valuee , DAYOFWEEK(d_l_datetime) as dayy FROM tbl_drink_log
WHERE week(d_l_datetime)=week(now()) AND tbl_drink_log.u_id = '".$u_id."' GROUP by d_l_datetime";


$result2 = $conn->query($checksql);


if ( $result2->num_rows > 0) {


for ($x = 1; $x <= 7; $x++) {



    $data[] =  array(
        'val' =>  getdata($x,$u_id),
        'dayofweek' => $x,
    );



}
echo  json_encode($data);
}else{


    $data = null;

    echo  json_encode($data);
}


 mysqli_close($conn);
?>