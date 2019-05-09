
function handleInput(input) {
    getPlayer(input);

    // revise
}

function manageActives(target, containter) {
    $(target).addClass('active');
    $(containter).not($(target)).removeClass('active');
}

function manageClear(total = false) {
    if (total) $('.panel').empty();
    else $('#rightPanel').empty();
}

// onload driver
$(document).ready(function() {

// navbar =====================================================================

    // home button - manage home page link relative to login portal
    $("#title").click(() => {
        if (window.location.href == 'http://localhost:5501/access.php') {
            window.location.replace('/access.php');
        } else window.location.replace('http://localhost:5501/index.php');
    });

    // login/logout redirects
    $("#login").click(() => window.location.replace('/login/login.php'));
    $("#logout").click(() => window.location.replace('/login/logout.php'));

    // click search icon to open search bar panel
    $("#search").click(() => {
        $("#search").toggleClass('active');
        $("#searchDiv").slideToggle('swing');
    });

    // execute search
    $("#searchButton").click(() => {

        // revise
        // implement php search????

        let val = $("#searchBar").val();

        // clean
        handleInput(val);
    });

    // manage teams list
    $("#teams").click(() => {
        $("#teams").toggleClass('active');
        if ($("#teams").hasClass('active')) getAllTeams();
        else manageClear(true);
    });

// footer =====================================================================

    // click github icon to open up statFire repo in new tab
    $("#github").click(() => {
        let win = window.open('https://www.github.com/averywald/statFire');
        if (win) win.focus();
        else alert('please allow popups to view github repo');
    });

// tabs =======================================================================

    $("#clearGraph").click(() => {

        // revise
        Plotly.purge('plots');
    });

    $(".tab").click((e) => {
        manageActives(e.target, '.tab');
    });

// panels =====================================================================

    // open roster for team clicked
    $("#leftPanel").on('click', '.link', (e) => {
        manageActives(e.target, '#leftPanel > .link');
        // clear previous / all rosters
        manageClear();
        if ($(e.target).hasClass('active')) {
            getRoster(e.target.id);
        }
        // $("#teamAvg").addClass('active');
        manageActives('#teamAvg', '.tab');
    });

    // handle player stat visualization
    $("#rightPanel").on('click', '.link', (e) => {
        $(e.target).toggleClass('active');
        if ($(e.target).hasClass('active')) getPlayer(e.target.innerHTML);
        else Plotly.deleteTraces('plots', 0);
        manageActives('#totals', '.tab');
    });

});