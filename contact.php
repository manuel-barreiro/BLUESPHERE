<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$formcontent="
    Nombre: $name \n
    E-mail: $email \n
    Mensaje: $message
";

$recipient = "bluesphereambientalsa@gmail.com";

$subject = "Consulta BLUESPHERE - $name";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>