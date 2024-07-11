<?php
// Recibir datos del formulario
$email = $_POST['email'];
$apodo = $_POST['apodo'];
$password = $_POST['password'];

// Generar un código de verificación único
$verifCode = md5(uniqid(rand(), true));

// Guardar datos en una base de datos (ejemplo básico)
// Aquí deberías usar un sistema seguro para almacenar contraseñas, como bcrypt
// Ejemplo: $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Enviar correo electrónico de verificación
$to = $email;
$subject = 'Verificación de correo electrónico';
$message = 'Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico: ';
$message .= 'http://tuweb.com/verificar_email.php?email=' . urlencode($email) . '&code=' . urlencode($verifCode);
$headers = 'From: tuweb@example.com';

mail($to, $subject, $message, $headers);

// Redirigir a una página de confirmación
header('Location: confirmacion_registro.html');
exit;
?>
