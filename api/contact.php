<?php
include('config.php');
$post = $_POST;

$name = $post['name'];
$email = $post['email'];
$mobile = $post['mobile'];
$subject = $post['subject'];
$message = $post['message'];

if($name == ''){
	$msg = array('status' => 0, 'error' => __LINE__, 'message'=> 'name is required'); 
}else if($email == ''){
	$msg = array('status' => 0, 'error' => __LINE__, 'message'=> 'email is required'); 
}else if($mobile == ''){
	$msg = array('status' => 0, 'error' => __LINE__, 'message'=> 'mobile is required'); 
}else if($subject == ''){
	$msg = array('status' => 0, 'error' => __LINE__, 'message'=> 'subject is required'); 
}else if($message == ''){
	$msg = array('status' => 0, 'error' => __LINE__, 'message'=> 'message is required'); 
}else{
	$time = time();
	$sql = "INSERT INTO contact (name, email, mobile, subject, message,create_dt) VALUES ('".$name."', '".$email."','".$mobile."','".$subject."','".$message."', '".$time."')";
	if (mysqli_query($con, $sql)) {
		$msg = array('status' => 1, 'message'=> 'Contact infomation send successfully'); 
	} else {
		$msg = array('status' => 0, 'message'=> "Error: " . $sql . "<br>" . mysqli_error($con)); 
	}
}
echo json_encode($msg); die;
?>