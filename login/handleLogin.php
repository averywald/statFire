<?php

    session_start();

    // submit button pressed
    if (isset($_POST['submitButton'])) {

        // get form values
        $username = $_POST['username'];
        $password = $_POST['password'];

        // check for correct login credentials
        if ($username == 'test' && $password == 'pass') {

            // set session variables
            $_SESSION['username'] = $username;
            $_SESSION['password'] = $password;

            // redirect to main page
            header('Location: ../access.php');
            exit;

        } else {

            header('Location: ../index.php');
            exit;

        }

    } else {
        // throw error
    }

?>