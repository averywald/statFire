
function handleInput(input) {
    getPlayer(input);

    // revise
}

// onload driver
$(document).ready(function() {

// ============================================================================
    // home button - manage home page link relative to login portal
    $("#title").click(() => {
        if (window.location.href == 'http://localhost:5501/access.php') {
            window.location.replace('/access.php');
        } else window.location.replace('http://localhost:5501/index.php');
    });

    // login/logout redirects
    $("#login").click(() => window.location.replace('/login/login.php'));
    $("#logout").click(() => window.location.replace('/login/logout.php'));
// ============================================================================
    // click search icon to open search bar panel
    $("#search").click(() => $("#searchDiv").slideToggle('swing'));
    $("#searchButton").click(() => {
        let val = $("#searchBar").val();
        handleInput(val);
    });

    $("#teams").click(() => {
        getAllTeams();
    });
// ============================================================================
    // click github icon to open up statFire repo in new tab
    $("#github").click(() => {
        let win = window.open('https://www.github.com/averywald/statFire');
        if (win) win.focus();
        else alert('please allow popups to view github repo');
    });
// ============================================================================
    $("#clearGraph").click(() => {

        // revise
        Plotly.deleteTraces('plots', 0);
    });
// ============================================================================

    $("#leftPanel").on('click', '.link', () => {

        let jqID = "#" + event.target.id;
        $(jqID).toggleClass('active');

        if ($(jqID).hasClass('active')) {
            let team = event.target.id;
            console.log(team);
            getRoster(team);
        } else {
            $("#rightPanel").empty();
        }

    });

    $("#rightPanel").on('click', '.link', () => {
       handleInput(event.target.innerHTML);
    })

});