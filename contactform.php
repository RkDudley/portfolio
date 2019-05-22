<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailForm = $_POST['mail'];
    $phoneNum = $_POST['phone'];
    $messege = $_POST['messege'];
}

$mailTo = "momokojung01@hotmail.com"; // might not be able to send to gmail account
$header = "From: ".$mailForm;
$txt = "You have recieve an email from ".$name.".\n\n".$messege;

mail($mailTo, $subject, $txt, $header, $phoneNum);
header("Location: contact.php?mailSend");

 ?>
