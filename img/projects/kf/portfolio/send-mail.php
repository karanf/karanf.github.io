<?php
//echo "true";
//define the recipient email address as a constant
define('RECIPIENT','karanf@gmail.com');

//catch the $_POST vars
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
//set the subject
$subject = "Email from Website Contact Form";
	
//set email body and headers
$body = $message."\n\n";
$body.= $name." <$email>";
$headers = "From: $name <$email>";

//send email
if(mail(RECIPIENT, $subject, $body, $headers)){	
	echo "true";
} else {
	echo "false";
} //end if else	
?>