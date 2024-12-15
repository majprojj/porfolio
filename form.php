<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitización de los datos del formulario
    $nombre = htmlspecialchars(trim($_POST['name']));
    $telefono = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $asunto = htmlspecialchars(trim($_POST['subject']));
    $mensaje = htmlspecialchars(trim($_POST['message']));

    // Validar que todos los campos requeridos estén llenos
    if (empty($nombre) || empty($telefono) || empty($email) || empty($asunto) || empty($mensaje)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    // Validar que el correo electrónico sea válido
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El correo electrónico no es válido.";
        exit;
    }

    // Configuración del correo
    $to = "majprogrammer@gmail.com"; // Cambia esto por tu dirección de correo real
    $subject = "Enviado desde formulario codigo.portafolios.marcojimenez.es: $asunto";
    $body = "Nombre: $nombre\n";
    $body .= "Teléfono: $telefono\n";
    $body .= "Correo: $email\n";
    $body .= "Asunto: $asunto\n";
    $body .= "Mensaje:\n$mensaje\n";
    $body .= "Enviado el: " . date('d/m/Y H:i:s');

    // Encabezados HTTP del correo
    $headers = "From: $nombre <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        // Redirigir a la página de éxito con el parámetro "redirected=true"
        header("Location: exito.html");
        exit;  // Asegúrate de que no se ejecute más código
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.";
    }
    
}
?>
