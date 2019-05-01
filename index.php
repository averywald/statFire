<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- css link -->
    <link rel="stylesheet" href="stylesheets/styles.css">
    <!-- fontAwesome cdn -->
    <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
        integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
        crossorigin="anonymous"></script>
    <!-- jQuery cdn -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- plotly.js cdn -->
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

    <script src="js/data.js"></script>
    <script src="js/graph.js"></script>
    <script src="js/actions.js"></script>
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
        <div class="tb-wrapper" id="nav">
            <button class="navBar" id="baseBall">
                <i class="fas fa-baseball-ball"></i>
            </button>
            <button class="navBar" id="basketBall">
                <i class="fas fa-basketball-ball"></i>
            </button>
            <button class="navBar" id="footBall">
                <i class="fas fa-football-ball"></i>
            </button>
            <button class="navBar" id="hockey">
                <i class="fas fa-hockey-puck"></i>
            </button>
            <button class="navBar" id="search">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div class="tb-wrapper" id="signin">
            <button class="navBar" id="login">
                login
            </button>
        </div>
    </div>
    <div id="searchDiv" style="display: none;">
        <input type="text" name="searchBar" id="searchBar" placeholder="search players, teams, etc.">
    </div>
    <div id="mainWrapper">
        <div id="leftPanel">
            <button class="link"></button>
            <!-- <button class="link" id="haha">
                link
                <i class="fas fa-caret-right"></i>
            </button>
            <div class="accordion" style="display: none;">
                <button class="accordion-item">wasssssuuh</button>
                <button class="accordion-item">wasssssuuh</button>
                <button class="accordion-item">wasssssuuh</button>
                <button class="accordion-item">wasssssuuh</button>
            </div> -->
        </div>
        <div id="content">
            <!--  -->
            <div id="plots"></div>
            <div id="new"></div>
        </div>
        <div id="rightPanel"></div>
    </div>
    <div id="footer">
        <button class="navBar" id="github">
            <i class="fab fa-github"></i>
            check out statFire's source code and project status on github
        </button>
    </div>
</body>
</html>