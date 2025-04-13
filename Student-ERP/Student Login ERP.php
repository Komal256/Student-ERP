<?php
session_start();
include 'db.php'; // Ensure db.php contains a valid $conn = new mysqli(...);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (empty($username) || empty($password)) {
        die("Please enter both username and password.");
    }

    $stmt = $conn->prepare("SELECT * FROM students WHERE username = ?");
    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Successful login
            $_SESSION['username'] = $user['username'];
            $_SESSION['name'] = $user['name'];
            header("Location: dashboard.php"); // redirect to dashboard
            exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "User not found.";
    }

    $stmt->close();
}
?>