<?php

    // session_start();

    if ($_POST['username'] == 'test' && $_POST['password'] == 'pass') {
        setcookie('username', $_POST['username']);
        header('Location: ../access.php');
        exit;
    } else {
        header('Location: ../login/login.php');
        exit;
    }

?>