<?php
 


include("connect.php");

 $db_data = array();

 $u_id = $_GET['u_id'];

 $sql = "SELECT * FROM tbl_users  WHERE tbl_users.u_id = '".$u_id."' ";

 $result = $conn->query($sql);

 if ( $result->num_rows > 0) {
    while($row[] = $result->fetch_assoc()){
        $sql1 = "SELECT * FROM tbl_users  WHERE tbl_users.u_id = '".$u_id."' ";
        $result1 = mysqli_query($conn, $sql1);
        $row1 = mysqli_fetch_assoc($result1);
        
        $u_id = $row1['u_id'];
        $u_username = $row1['u_username'];
        $u_gender = $row1['u_gender'];
        $u_weight = $row1['u_weight'];
        $u_noti_type = $row1['u_noti_type'];
        $db_data = $row;


    $output = array('all' => $db_data,
                    'u_id' => $u_id,
                    'u_username' => $u_username,
                    'u_gender' => $u_gender,
                    'u_weight' => $u_weight,
                    'u_noti_type' => $u_noti_type 
                );


    }
    echo json_encode($output);
}else{
        $db_data[] = null;
        
    
    echo json_encode($db_data);
}
 mysqli_close($conn);
?>