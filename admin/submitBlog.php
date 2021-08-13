<?php 
    include 'check_con.php';

    $blog = $_POST['blog'];
    date_default_timezone_set('Asia/Kolkata');
    $doo = date('d-m-Y h:i:sa');

    // echo $blog;

         $sql = "INSERT INTO blog(blog,dop) VALUES (  '".$blog."', '".$doo."')";

         if (mysqli_query($conn,$sql))
         {    
            
             header('location:index.php');
         }
         else 
         {
                 echo "Error: " . $sql . "<br>" . mysqli_error($conn);
         }
    
?>