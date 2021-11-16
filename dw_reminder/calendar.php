<?php
include 'connect.php';


$u_id = $_GET["u_id"];

$data = array();

$sql = "SELECT d_l_datetime FROM tbl_drink_log where u_id = '".$u_id ."' group by d_l_datetime";

$result = $conn->query($sql);

// function getdata($u_id,$day) {

//    $data = array();   
//    $conn = mysqli_connect("localhost", "root", "", "dw_reminder");
   
//          $result = mysqli_query($conn, "SELECT * FROM `tbl_drink_log` JOIN tbl_users ON tbl_drink_log.u_id = tbl_users.u_id WHERE tbl_drink_log.d_l_datetime = '".$day."' AND tbl_drink_log.u_id = '".$u_id."' ");
   
   
//          if ($result->num_rows >0) {
    
//           $data = array('selected'=> true);
           
//           } else {
//             $data = array('selected'=> false);
//           }
   
//          return  $data;
   
//          }


         function getdataTrue($u_id,$day) {
          $data = array(); 
        
          $data = array('selected'=> true);

          return $data;
         }



         $data = array('selected'=> true);


if ($result->num_rows >0) {
 
 
    while($row = $result->fetch_assoc()){
 
        $db_data[$row["d_l_datetime"]] = getdataTrue($u_id,$row["d_l_datetime"]);
 
 $json = json_encode($db_data);
 
 }
 
} else {
$json = 'null';
}
 echo $json;


$conn->close();
?>