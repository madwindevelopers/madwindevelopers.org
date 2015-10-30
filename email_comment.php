<?php
 
if(isset($_POST['email_comments'])) {
 
     
 
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['name']) ||
       
        !isset($_POST['subject']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['comments'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $name = $_POST['name']; // required
    
    $email_from = $_POST['email']; // required
    
    $subject = $_POST['subject']; // required
 
    $comments = $_POST['comments']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
 
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
 
  }
    
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$subject)) {
 
    $error_message .= 'The Subject you entered does not appear to be valid.<br />';
 
  }
 
 
  if(strlen($comments) < 2) {
 
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 

	$combinedComment = "\nName: " . $name . "\nEmail: " . $email_from . "\nSubject: " . $subject . "\nComment: " . $comments . "\n=================================================\n"; 

	$file = fopen("comment_list", "a") or die("Unable to open file!");

	fwrite($file, $combinedComment);

	$message = "WEBSITE_COMMENT;$email_from";
	$command = "bash -c \"java -jar GmsSender.jar '$message'\"";
	$output = shell_exec($command);     

	fclose($file);
 
    }
 
 
?>
 
 
 
 
 
 
<h1>Thank you for contacting us. We will be in touch with you very soon. </h1>
 
 
 
<?php
 
#}
 
?>
