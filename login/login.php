
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- css link -->
    <link rel="stylesheet" href="../stylesheets/index.css">
    <link rel="stylesheet" href="../stylesheets/login.css">
    <!-- fontAwesome cdn -->
    <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
        integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
        crossorigin="anonymous"></script>
    <!-- jQuery cdn -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- plotly.js cdn -->
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

    <script src="../js/actions.js"></script>
    <title>statFire</title>
</head>
<body>
    <div id="titleBar">
        <div class="tb-wrapper">
            <button id="title">
                statFire
                <i class="fas fa-fire"></i>
            </button>
        </div>
    </div>
    <div id="mainWrapper">
        <div id="content">
            <form action="handleLogin.php" method="POST">
                <input type="text" name="username" class="inputField" placeholder="username">
                <span style="display: none;" class="error" id="username">incorrect username</span>
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