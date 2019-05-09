<?php
    // if session variables not set
    if (!isset($_SESSION['username']) || !isset($_SESSION['password'])) {
        // redirect to login page
        header('Location: /login/login.php');
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- css link -->
    <link rel="stylesheet" href="stylesheets/styles.css">
    <link rel="stylesheet" href="stylesheets/tabs.css">
    <link rel="stylesheet" href="stylesheets/links.css">
    <!-- fontAwesome cdn -->
    <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
        integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
        crossorigin="anonymous"></script>
    <!-- jQuery cdn -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- plotly.js cdn -->
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <!-- LoDash cdn -->
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js"></script>

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
            <button class="navBar" id="teams">teams</button>
            <!-- <button class="navBar" id="players">players</button> -->
            <button class="navBar" id="search">search</button>
        </div>
        <div class="tb-wrapper" id="signin">
            <button class="navBar" id="logout">logout</button>
        </div>
    </div>
    <div id="searchDiv" style="display: none;">
        <input type="text" name="searchBar" id="searchBar" placeholder="search players">
        <button id="searchButton">
            <i class="fas fa-search"></i>
        </button>
    </div>
    <div id="mainWrapper">
        <div class="panel" id="leftPanel"></div>
        <div id="content">
            <div id="tabWrapper">
                <button class="tab" id="posAvg">pos avg</button>
                <button class="tab" id="teamAvg">team avg</button>
                <button class="tab" id="totals">totals</button>            
            </div>
            <div id="plotModules">
                <div id="toolBar">
                    <button class="tool" id="clearGraph">clear</button>
                </div>
                <div class="module" id="plots">
                    <div class="plot" id="totalsPlot" style="z-index: 0"></div>
                    <div class="plot" id="teamAvgPlot" style="z-index: 1"></div>
                    <div class="plot" id="posAvgPlot" style="z-index: 2"></div>
                </div>
            </div>
        </div>
        <div class="panel" id="rightPanel"></div>
    </div>
    <div id="footer">
        <button class="navBar" id="github">
            <i class="fab fa-github"></i>
            check out statFire's source code and project status on github
        </button>
    </div>
</body>
</html>