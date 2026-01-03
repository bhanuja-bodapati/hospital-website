<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name  = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $mrn   = $_POST['mrn'] ?? '';
    $message = $_POST['message'] ?? '';

    if (!preg_match('/^[6-9][0-9]{9}$/', $phone)) {
        echo json_encode(["status" => "error", "message" => "Invalid phone number"]);
        exit;
    }

    $to = "bhanujabodapati@gmail.com";
    $subject = "New Appointment / Contact Request — MediCare Hospital";

    $body = "
    <html>
    <body>
      <h2>New Request from Website</h2>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Phone:</strong> $phone</p>
      <p><strong>Medical Record Number:</strong> $mrn</p>
      <p><strong>Message:</strong><br/>$message</p>
    </body>
    </html>
    ";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: noreply@medicare-hospital.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Mail sent successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send mail"]);
    }
}
?>
