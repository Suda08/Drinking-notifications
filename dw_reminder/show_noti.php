<?php
 


include("connect.php");

 $db_data = array();

 $u_id = $_GET['u_id'];

 $sql = "SELECT COUNT(*) as nber FROM tbl_alert JOIN tbl_users USING(u_id) WHERE u_id ='".$u_id."' ";
 $result = mysqli_query($conn, $sql);
 $row = mysqli_fetch_assoc($result);
 $total = $row['nber'];

 echo json_decode($total);


 mysqli_close($conn);
?>