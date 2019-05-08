<?php

    session_start();
    unset($_SESSION['username']);
    unset($_SESSION['password']);
    header('Location: /login/login.php');
    exit;
    
?>