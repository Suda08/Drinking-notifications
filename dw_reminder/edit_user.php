<?php

include("connect.php");

$u_id = $_GET['u_id'];
$u_username = $_GET['u_username'];
$u_gender = $_GET['u_gender'];
$u_weight = $_GET['u_weight'];
$t_n = $_GET['u_noti_type'];


$sql = "UPDATE tbl_users SET u_username='$u_username',u_gender='$u_gender'
,u_weight='$u_weight',u_noti_type='$t_n' WHERE u_id = $u_id";

$result = $conn->query($sql);

if($result){

    $sql = "SELECT * FROM tbl_users JOIN tbl_noti_type ON tbl_users.u_noti_type = tbl_noti_type.n_t_id WHERE tbl_users.u_id = '".$u_id."'  ";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $n_t_val = $row['n_t_val'];
    $Success = 'success';
   $output =  array('n_t_val'=> $n_t_val ,'onUpdate'=>$Success);
   echo json_encode($output);

}else{
   $Success = 'fail';
   $output =  array('n_t_val'=> $n_t_val ,'onUpdate'=>$Success);
   echo json_encode($output);
}

 mysqli_close($conn);
?>