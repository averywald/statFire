<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- css link -->
    <link rel="stylesheet" href="stylesheets/styles.css">
    <link rel="stylesheet" href="stylesheets/toolbar.css">
    <link rel="stylesheet" href="stylesheets/links.css">
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
            <button class="navBar" id="teams">teams</button>
            <button class="navBar" id="players">players</button>
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
        <div id="leftPanel"></div>
        <div id="content">
            <div id="toolBar">
                <button class="tools" id="clearGraph">clear</button>
                <button class="tools">yo</button>
                <button class="tools">yo</button>
                <button class="tools">yo</button>
                <button class="tools">yo</button>
            </div>
            <div id="plotModules">
                <div class="module" id="plots"></div>
                <div class="module" id="bios"></div>
            </div>
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