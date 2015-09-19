      <!-- invite script -->
<?php
 
if(isset($_POST['email_invite'])) {
 
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if( !isset($_POST['email_invite'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $email_from = $_POST['invite_email']; // required
    $error_message = ""; 
    $file = 'email_list';

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 

 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $file = fopen("email_list", "a") or die("Unable to open file!");

    $add_email = $email_from;

    $emailsraw = file_get_contents("email_list");

    $emailarray = explode(";", $emailsraw);

    $writeNewEmail = TRUE;

    foreach ($emailarray as $value) {
	if ($add_email == $value) {
		$writeNewEmail = FALSE;
		$error_message = "Email already on the list";
		break;
	}
    }
    if ($writeNewEmail == TRUE) {
        $add_email = $add_email . ";";
	fwrite($file, $add_email);
    }

    fclose($file);
if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 

 
?>
 
Thank you for joining the mailing list.
 
 
<?php
 
?>
