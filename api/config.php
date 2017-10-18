<?php
$con = mysqli_connect("localhost","root","","angular_db");

// Check connection
if (mysqli_connect_errno())
  {
  	  $msg = array('status' => 0, 'error' => __LINE__, 'message'=> "Failed to connect to MySQL: " . mysqli_connect_error());
  echo json_encode($msg); die;
  }
?>