
// onload driver
$(document).ready(function() {

    // home button
    $("#title").click(() => {
        // be sure to add correct server URL
        window.location.replace('/index.php');
    });

    // click search icon to open search bar panel
    $("#search").click(() => {
        $("#searchDiv").slideToggle('swing');
    });

    // click github icon to open up statFire repo in new tab
    $("#github").click(() => {
        let win = window.open('https://www.github.com/averywald/statFire');
        if (win) win.focus();
        else alert('please allow popups to view github repo');
    });

    $("#basketBall").click(() => {
        getTeams();
        graph();
    });

    $("#haha").click(() => {
        // $(this).next().slideToggle('swing');
    });

});