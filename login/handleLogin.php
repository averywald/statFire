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

            // unset error session vars
            unset($_SESSION['errorMessage']);

            // redirect to main page
            header('Location: ../access.php');
            exit;

        } else if ($username != 'test' && $password == 'pass') {
            $_SESSION['errorMessage'] = 'incorrect username';
            redirect();
        } else if ($username == 'test' && $password != 'pass') {
            $_SESSION['errorMessage'] = 'incorrect password for user \'test\'';
            redirect();
        }
        else {
            $_SESSION['errorMessage'] = 'incorrect username / password';
            redirect();
        }

    } else {
        // throw error
    }

    // redirect to login page
    function redirect() {
        header('Location: ../index.php#content');
        exit;
    }

?>