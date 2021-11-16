<?php


include("connect.php");

           $username = $_GET["username"];  
           $password = $_GET["password"];  
           $query = "SELECT * FROM tbl_users WHERE u_username = '$username' LIMIT 1";  
           $result = mysqli_query($conn, $query);  
           if(mysqli_num_rows($result) > 0)  
           {  
                while($row = mysqli_fetch_array($result))  
                {  
                     if(password_verify($password, $row["u_password"]))  
                     {  
                        $Success = 'success';
                        $id= $row["u_id"];
                        $output =  array('u_id'=> $id ,'onLogin'=>$Success);
                        $SuccessMSG = json_encode($output);
                    echo $SuccessMSG; 
                     }  
                     else  
                     {  
                        $Success = 'fail';
                        $output =  array('u_id'=> Null ,'onLogin'=>$Success);
                        $SuccessMSG = json_encode($output);
                    echo $SuccessMSG; 
                     }  
                }  
           }  
           else  
           {  
            $Success = 'fail';
            $output =  array('u_id'=> Null ,'onLogin'=>$Success);
            $SuccessMSG = json_encode($output);
        echo $SuccessMSG; 
           }  