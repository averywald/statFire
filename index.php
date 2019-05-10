<?php
    session_cache_expire();
    // begin session
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- css link -->
    <link rel="stylesheet" href="../stylesheets/index.css">
    <link rel="stylesheet" href="../stylesheets/blurb.css">
    <link rel="stylesheet" href="../stylesheets/login.css">
    <!-- fontAwesome cdn -->
    <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
        integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
        crossorigin="anonymous"></script>
    <!-- jQuery cdn -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->

    <script src="../js/actions.js"></script>
    <title>statFire - home</title>
</head>
<body>
    <div id="titleBar">
        <div class="tb-wrapper">
            <a href="http://ec2-52-14-240-140.us-east-2.compute.amazonaws.com">
                statFire
                <i class="fas fa-fire"></i>
            </a>
        </div>
        <div class="tb-wrapper">
            <a href="index.php#content">
                log in
                <i class="fas fa-caret-square-down"></i>
            </a>
        </div>
    </div>
    <div id="mainWrapper">
        <div id="intro">
            <h1>welcome to statFire</h1>
            <h2>a lightweight yet powerful data visualization tool</h2>
        </div>
        <div class="parallax">
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolorem, ab fuga accusantium similique amet iusto culpa inventore qui consequuntur.</h2>
        </div>
        <!-- <div class="blurb"> </div>
        <div class="parallax"></div> -->
        <div id="content">
            <form action="/login/handleLogin.php" method="POST">
                <?php
                    if (isset($_SESSION['errorMessage'])) {
                        echo '<p>' . $_SESSION['errorMessage'] . '</p>';
                    }
                ?>
                <input type="text" name="username" class="inputField" placeholder="username">
                <input type="password" name="password" class="inputField" placeholder="password">
                <span style="display: none;" class="error" id="password">incorrect password</span>
                <input type="submit" name="submitButton" id="submitButton" value="log in">
            </form>
        </div>
    </div>
    <div id="footer">
        <button class="navBar" id="github">
            <i class="fab fa-github"></i>
            check out statFire's source code and project status on github
        </button>
    </div>
</body>
</html>