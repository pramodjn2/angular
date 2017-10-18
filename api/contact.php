<?php
include('config.php');
$post = $_POST;
$email = $post['email'];
$password = $post['password'];
if($email == ''){
	$msg = array('status' => 0, 'error' => __LINE__, 'message'=> 'Email is required'); 
}else if($password == ''){
	$msg = array('status' => 0, 'error' => __LINE__, 'message'=> 'Password is required'); 
}else{
	$sql = "INSERT INTO user (email, password) VALUES ('".$email."', '".$password."')";
	if (mysqli_query($con, $sql)) {
		$msg = array('status' => 1, 'message'=> 'Login successfully'); 
	} else {
		$msg = array('status' => 0, 'message'=> "Error: " . $sql . "<br>" . mysqli_error($con)); 
	}
}
echo json_encode($msg); die;
?>