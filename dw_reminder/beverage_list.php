<?php
 


include("connect.php");

 $db_data = array();
 $sql = "SELECT * FROM tbl_beverage ";

 $result = $conn->query($sql);

 if ( $result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        $db_data[] = $row;
    }
    echo json_encode($db_data);
}else{
   
        $db_data[] = null;
    
    echo json_encode($db_data);
}
 mysqli_close($conn);
?>