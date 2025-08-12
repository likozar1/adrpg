<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect and sanitize input
    $name     = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email    = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone    = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $message  = nl2br(htmlspecialchars(trim($_POST['message'] ?? '')));
    $terms    = isset($_POST['termsCheck']) ? 'Yes' : 'No';
    $vouchers = $_POST['vouchers'] ?? [];

    // Sanitize and format voucher list
    $cleanVouchers = array_map('htmlspecialchars', $vouchers);
    $voucherList = !empty($cleanVouchers) ? implode("<br>", $cleanVouchers) : 'N/A';

    // Email recipient and subject
    $to = "info@pustolovski-park-postojna.si";
    $subject = "Novo naročilo darilnega bona";

    // Build HTML email body
    $body = "
        <html>
        <head>
          <meta charset='UTF-8'>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <h2>Novo naročilo darilnega bona</h2>
          <p><span class='label'>Ime in priimek:</span> $name</p>
          <p><span class='label'>Email naslov:</span> $email</p>
          <p><span class='label'>Telefonska številka:</span> $phone</p>
          <p><span class='label'>Izbrani darilni bon(i):</span><br>$voucherList</p>
          <p><span class='label'>Sporočilo:</span><br>$message</p>
          <p><span class='label'>Pogoji sprejeti:</span> $terms</p>
        </body>
        </html>
    ";

    // Email headers
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Naročila <info@pustolovski-park-postojna.si>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: success-en.html");
        exit;
    } else {
        header("Location: error-en.html");
        exit;
    }
} else {
    header("Location: error-en.html");
    exit;
}
?>
