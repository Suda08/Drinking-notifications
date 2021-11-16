<?php
 


include("connect.php");

 $db_data = array();

 $u_id = $_GET['u_id'];

 $sql = "SELECT SUM(d_l_volume) as sum FROM tbl_drink_log
 WHERE week(d_l_datetime)=week(now()) AND tbl_drink_log.u_id = '".$u_id."' ";

 $result = $conn->query($sql);

 if ( $result->num_rows > 0) {
    while($row[] = $result->fetch_assoc()){
        $sql1 = "SELECT SUM(d_l_volume) as sum FROM tbl_drink_log
        WHERE week(d_l_datetime)=week(now()) AND tbl_drink_log.u_id = '".$u_id."' ";
        $result1 = mysqli_query($conn, $sql1);
        $row1 = mysqli_fetch_assoc($result1);
        
        $db_data = $row1['sum'];
    }
}else{
        $db_data[] = null;
        
}
echo json_encode($db_data);
 mysqli_close($conn);
?>