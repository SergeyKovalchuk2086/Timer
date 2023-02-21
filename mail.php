<?php

$recepient = 'anevichkristina@gmail.com';
$siteName = "Подписка";

$name = trim($_POST["name"]);
$message = "Почта: $name;

$pagetitle = "Подписка на рассылку новостей \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
