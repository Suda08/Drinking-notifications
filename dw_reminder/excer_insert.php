<?php

include("connect.php");


date_default_timezone_set("Asia/Bangkok");


$u_id = $_GET['u_id'];
$e_l_type = $_GET['e_l_type'];
$e_l_level = $_GET['e_l_level'];
$e_l_hour = $_GET['e_l_hour'];




//weater
$url = "http://api.openweathermap.org/data/2.5/weather?q=Bangkok&lang=th&APPID=0d407646e61ed219b5a3a6ceb216be86&units=metric";

$contents = @file_get_contents($url);
$clima = json_decode($contents, true);
if($clima['cod'] == 200){
foreach($clima['weather'] as $data) {
 $tempDes =  $data['description'];

}

$temp = $clima['main']['temp'];
}else{

    $temp = 0;
    $tempDes = '';
  
}



//$temp = 30;






function calVol($e_l_type,$e_l_level,$temp)
{
    $volume = 0;
//indoor
    if($e_l_type == 0){

        switch ($e_l_level) {
            
            case 0:   
                if($temp >= 49 ){
                    $volume = 1300;
                }else if($temp >= 46){
                    $volume = 1000;
                }else if($temp >= 41){
                    $volume = 1000;
                }else if($temp >= 36){
                    $volume = 900;
                }else{
                    $volume = 500;
                }
              break;
            case 1:
                if($temp >= 49 ){
                    $volume = 1900;
                }else if($temp >= 46){
                    $volume = 1700;
                }else if($temp >= 41){
                    $volume = 1500;
                }else if($temp >= 36){
                    $volume = 1300;
                }else{
                    $volume = 1000;
                }
              break;
            case 2:
                if($temp >= 49 ){
                    $volume = 1900;
                }else if($temp >= 46){
                    $volume = 1700;
                }else if($temp >= 41){
                    $volume = 1500;
                }else if($temp >= 36){
                    $volume = 1300;
                }else{
                    $volume = 1000;
                }
              break;
            default:
                $volume = null;
          }
    
    }else{
    

        switch ($e_l_level) {
        case 0:   
            if($temp >= 49 ){
                $volume = 1700;
            }else if($temp >= 46){
                $volume = 1500;
            }else if($temp >= 41){
                $volume = 1300;
            }else if($temp >= 36){
                $volume = 1200;
            }else{
                $volume = 900;
            }
          break;
        case 1:
            if($temp >= 49 ){
                $volume = 2000;
            }else if($temp >= 46){
                $volume = 2000;
            }else if($temp >= 41){
                $volume = 1900;
            }else if($temp >= 36){
                $volume = 1700;
            }else{
                $volume = 1300;
            }
          break;
        case 2:
            if($temp >= 49 ){
                $volume = 2000;
            }else if($temp >= 46){
                $volume = 2000;
            }else if($temp >= 41){
                $volume = 2000;
            }else if($temp >= 36){
                $volume = 2000;
            }else{
                $volume = 1800;
            }
          break;
        default:
            $volume = null;
      }
    
       
    
    }

return $volume;


}


$vol = calVol($e_l_type,$e_l_level,$temp);



date_default_timezone_set("Asia/Bangkok");
$date_create = date("Y-m-d");


 $insertTrip = "INSERT INTO tbl_excer_log (u_id,e_l_type,e_l_level,e_l_hour,e_l_volume,e_l_datetime)
 VALUES ('$u_id','$e_l_type','$e_l_level','$e_l_hour','$vol','$date_create')";

 $result = $conn->query($insertTrip);

 if($result){
    $mes = 'success';
    echo json_encode($mes);

 }else{
    $mes = 'fail';
    echo json_encode($mes);
 }

//echo calVol($e_l_type,$e_l_level,$temp);












  

?>