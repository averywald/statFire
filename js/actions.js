
function handleInput(input) {
    getPlayer(input);

    // revise
}

// activate single tab at a time
function manageActives(containter, target) {
    // give target element class of active
    $(target).addClass('active');
    // remove active class from all others in container
    $(containter).not($(target)).removeClass('active');
}

// clears the side panels
function manageClear(total = false) {
    if (total) $('.panel').empty();
    else $('#rightPanel').empty();
}

// show the correct plot model based on current active tab
function showModule() {
    // get string for jquery selector of active tab
    let tab = '#' + $("#tabWrapper").find('.tab.active').attr('id') + 'Plot';
    // send non-active tabs below in z-index
    $(".plot").not($(tab)).css('z-index', '0');
    // send active tab to top of z-index
    $(tab).css('z-index', '90');
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

    // logout redirects
    $("#logout").click(() => window.location.replace('index.php'));

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

// tabs =======================================================================

    $("#clearGraph").click(() => {

        // revise
        Plotly.purge('');
    });

    $(".tab").click((e) => {
        manageActives('.tab', e.target);
        showModule();
    });

// panels =====================================================================

    // open roster for team clicked
    $("#leftPanel").on('click', '.link', (e) => {
        // clear previous / all rosters
        manageClear();
        // generate team roster in right
        getRoster(e.target.id);
        // activate team button on left panel
        manageActives('#leftPanel > .link', e.target);
        // activate team average tab
        manageActives('.tab', '#teamAvg');
        // activate team avg module
        showModule();
    });

    // handle player stat visualization
    $("#rightPanel").on('click', '.link', (e) => {

        // revise - implem manageActives() ???
        $(e.target).toggleClass('active');
        if ($(e.target).hasClass('active')) getPlayer(e.target.innerHTML);
        else Plotly.deleteTraces('plots', 0);

        // activate totals tab
        manageActives('.tab', '#totals');
        // activate totals module
        showModule();
    });

// footer =====================================================================

    // click github icon to open up statFire repo in new tab
    $("#github").click(() => {
        let win = window.open('https://www.github.com/averywald/statFire');
        if (win) win.focus();
        else alert('please allow popups to view github repo');
    });

});