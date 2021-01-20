<?php
$to = 'wjhalloran@gmail.com';
$subject = 'Rental Reservation Request';

// Contact Information Variables
$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$name = $fname . " " . $lname;
$email = $_POST['email'];
$address = $_POST['address1'];
$address2 = $_POST['address2'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];


/* Selected Items
$selectedItems  = 'None';
if(isset($_POST['screensize']) && is_array($_POST['screensize']) && count($_POST['screensize']) > 0){
    $selectedItems = implode(', ', $_POST['screensize']);
}
$items .= "Selected Items: \n" . $selectedItems;
*/

// Email Message
$message = "Request from " . $name . "\n\n" . 
			"Customer Information: \n" . 
			"Name: " . $name . "\n" . 
			"Email: " . $email . "\n" . 
			"\nAddress: \n" . 
			$address . "\n" . 
			$address2 . "\n" . 
			$city . ", " . $state . " " . $zip . "\n" . 

$headers = "Customer Inquiry";

if (mail($to, $subject, $message, $headers)) {
header('Location: thank-you.php');
exit;
} else {
   echo "ERROR";
}

?>