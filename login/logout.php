<?php

    session_start();
    // destroy session variables
    session_destroy();

    // redirect to login page
    header('Location: ../index.php');
    exit;
    
?>