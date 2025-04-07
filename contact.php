<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Configura la dirección de correo electrónico de destino
    $to = "prana.studio24@gmail.com"; // Aquí va tu correo
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $name\nEmail: $email\nMensaje: $message";

    // Asegurarse de que el correo proviene del usuario
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje, nos pondremos en contacto contigo pronto.";
    } else {
        echo "Error al enviar el mensaje, intenta nuevamente más tarde.";
    }
}
?>
