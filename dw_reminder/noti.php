<?php
 


include("connect.php");

 $db_data = array();

 $u_id = $_GET['u_id'];

 $sql = "SELECT * FROM tbl_users JOIN tbl_noti_type ON tbl_users.u_noti_type = tbl_noti_type.n_t_id WHERE tbl_users.u_id = '".$u_id."' ";

 $result = $conn->query($sql);

 if ( $result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        $db_data = $row['n_t_val'];
    }
    echo json_encode($db_data);
}else{
        $db_data = null;
    
    echo json_encode($db_data);
}
 mysqli_close($conn);
?>