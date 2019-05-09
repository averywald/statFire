<?php

    session_start();
    // destroy session variables
    session_destroy();

    // redirect to login page
    header('Location: /login/login.php');
    exit;
    
?>