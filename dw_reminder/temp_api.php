 
 <?php

$data = array();
 
 function getWeater() {
     $data = array();
 //weater
 $url = "http://api.openweathermap.org/data/2.5/weather?q=Bangkok&lang=th&APPID=0d407646e61ed219b5a3a6ceb216be86&units=metric";

 $contents = @file_get_contents($url);
 $clima = json_decode($contents, true);
 if($clima['cod'] == 200){
 foreach($clima['weather'] as $data) {
  $tempDes =  $data['description'];
  $tempIcon = $data['icon'];

 }

 $temp = $clima['main']['temp'];
 }else{
     $temp = 0;
     $tempDes = '';
     $tempIcon = '';
  
}

 $data =  array(     'temp' => $temp,
     'tempicon' => $tempIcon,
     'tempdes' => $tempDes,
 );
 return $data;
 }

$data = getWeater();
 echo json_encode($data,JSON_UNESCAPED_UNICODE);

 ?>