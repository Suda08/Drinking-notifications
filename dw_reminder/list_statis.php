<?php

include("connect.php");

 $db_data = array();

 $u_id = $_GET['u_id'];

 $sql = "SELECT sum(d_l_volume) sumdrink, u_id, tbl_beverage.*
 FROM tbl_drink_log 
 INNER JOIN tbl_beverage ON tbl_drink_log.b_id = tbl_beverage.b_id where u_id = '$u_id' GROUP BY b_id";

 $result = $conn->query($sql);

 if ( $result->num_rows > 0) {
    while($row[] = $result->fetch_assoc()){
       
        $db_data = $row;
    }
}else{
        $db_data = null;
        
}
echo json_encode($db_data);
 mysqli_close($conn);
?>