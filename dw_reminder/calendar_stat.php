<?php

include("connect.php");

$u_id = $_GET['u_id'];
$date = $_GET['date'];



$data = array();


date_default_timezone_set("Asia/Bangkok");




// function getWeater() {
//     $data = array();
// //weater
// $url = "http://api.openweathermap.org/data/2.5/weather?q=Bangkok&lang=th&APPID=e9a4626db2de79a64f25df61b2784f84&units=metric";

// $contents = @file_get_contents($url);
// $clima = json_decode($contents, true);
// if($clima['cod'] == 200){
// foreach($clima['weather'] as $data) {
//  $tempDes =  $data['description'];

// }

// $temp = $clima['main']['temp'];
// }else{
//     $temp = 0;
//     $tempDes = '';
  
// }

// $data =  array(
//     'temp' => $temp,
//     'tempdes' => $tempDes,
// );
// return $data;

// }

function getIsExcer($u_id,$date) {
    $data = array();
    $conn = mysqli_connect("localhost", "root", "", "dw_reminder");

    $sql = "SELECT * FROM tbl_excer_log JOIN tbl_users ON tbl_excer_log.u_id = tbl_users.u_id WHERE tbl_excer_log.u_id = '".$u_id."' AND DATE(tbl_excer_log.e_l_datetime) = '".$date."' ";
    $result = mysqli_query($conn, $sql);
    $count = $result->num_rows;


    

    if($count > 0){
        $data[] =  array(
            'isexcer' => true,
            'count' => $count,
        );
    }else{
        $data[] =  array(
            'isexcer' => false,
            'count' => $count,
        );
    }
    return $data;

      }



      function getIsExcerTarget($u_id,$date) {
        $data = null;
        $conn = mysqli_connect("localhost", "root", "", "dw_reminder");
        $sql = "SELECT SUM(tbl_excer_log.e_l_hour * tbl_excer_log.e_l_volume) as total FROM tbl_excer_log JOIN tbl_users ON tbl_excer_log.u_id = tbl_users.u_id WHERE tbl_excer_log.u_id = '".$u_id."' AND DATE(tbl_excer_log.e_l_datetime) = '".$date."' ";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $total = $row['total'];
        $data = $total;

        return $data;
    
          }



      function getTargetExcer($u_id) {
        $data = null;
        $conn = mysqli_connect("localhost", "root", "", "dw_reminder");
        
        $sql = "SELECT 	u_weight FROM tbl_users WHERE u_id = '".$u_id."' ";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $u_weight = $row['u_weight'];
   
        return $data;
    
        }

        $isExcer = getIsExcer($u_id,$date);

        $isExcerTarget =  getIsExcerTarget($u_id,$date);


function getTarget($u_id,$isExcer,$isExcerTarget) {
    $data = null;
    $conn = mysqli_connect("localhost", "root", "", "dw_reminder");
    
    $sql = "SELECT 	u_weight FROM tbl_users WHERE u_id = '".$u_id."' ";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $u_weight = $row['u_weight'];
    if($isExcer){
        $oritarget =  $u_weight * 2.2 * 30 / 2;
        $data = $oritarget + $isExcerTarget;

    }else{
        $data = $u_weight * 2.2 * 30 / 2 ;

    }

    return $data;

    }



    function getDrinkProgress($u_id,$date) {
        $data = null;
        $conn = mysqli_connect("localhost", "root", "", "dw_reminder");
    
        $sql = "SELECT SUM(tbl_drink_log.d_l_volume) as total FROM tbl_drink_log JOIN tbl_users ON tbl_drink_log.u_id = tbl_users.u_id WHERE tbl_drink_log.u_id = '".$u_id."' AND tbl_drink_log.d_l_datetime = '".$date."' ";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $total = $row['total'];


        $data = $total;
    
        return $data;
    
        }




        function getdatalog($u_id,$date) {

            $dataProgram = array();   
       
           
            $conn = mysqli_connect("localhost", "root", "", "dw_reminder");
 

            $result = mysqli_query($conn, "SELECT * FROM tbl_drink_log JOIN tbl_beverage ON tbl_drink_log.b_id = tbl_beverage.b_id JOIN tbl_users ON tbl_drink_log.u_id = tbl_users.u_id WHERE tbl_drink_log.u_id = '".$u_id."' AND tbl_drink_log.d_l_datetime = '".$date."' ORDER BY tbl_drink_log.d_l_datetime desc");
           
           
                 if ($result->num_rows >0) {
            
            
                   while($row[] = $result->fetch_assoc()) {
                   
                  $dataProgram = $row;
                   
                   
                   }
                   
                  } else {
                   $dataProgram = [];
                  }
           
           
           
           
                 return  $dataProgram;
           
                 }



$db_data[] = array(
    'target' => getTarget($u_id,$isExcer,$isExcerTarget),
    'isexcer' => getIsExcer($u_id,$date),
    'isprogress' => getDrinkProgress($u_id,$date),
    //'temp' => getWeater(),
    'datalog' => getdatalog($u_id,$date),
);


echo json_encode($db_data);

?>