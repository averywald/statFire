
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
    // clear both side panels
    if (total) $('.panel').empty();
    // just empty right panel
    else $('#rightPanel').empty();
}

function removeTools(id) {
    $("#toolBar").children('.' + id).remove();
}

// show the correct plot model based on current active tab
function showModule(manualTab = undefined) {
    // get string for jquery selector of active tab
    let tab = (manualTab) ? '#' + manualTab : '#' + $("#tabWrapper").find('.tab.active').attr('id') + 'Plot';
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
        if (window.location.href == 'http://ec2-52-14-240-140.us-east-2.compute.amazonaws.com/access.php') {
            window.location.replace('/access.php');
        } else window.location.replace('http://ec2-52-14-240-140.us-east-2.compute.amazonaws.com/index.php');
    });

    // logout redirect
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
    $("#teams").click((e) => {
        manageActives('.linker', e.target);
        if ($("#teams").hasClass('active')) {
            manageClear(true);
            // display teams list in left panel
            getAllTeams();
        }
    });

    // manage positions list
    $("#positions").click((e) => {
        manageActives('.linker', e.target);
        if ($("#positions").hasClass('active')) {
            manageClear(true);
            // display positions list in left panel
            getPositions();
        } 
    });

// tabs =======================================================================

    $(".tab").click((e) => {
        manageActives('.tab', e.target);
        showModule();
    });

// toolbar ====================================================================

    // clear graph of active tab
    $("#clearGraph").click(() => {
        // get the module id
        let target = $("#tabWrapper > .active").attr('id') + 'Plot';
        // clear graph on corresponding module
        Plotly.purge(target);
        // remove tool buttons on active tab
        removeTools(target);
    });

    // open up tab corresponding to the button clicked
    $("#toolBar").on('click', '.tool', (e) => {
        // get linked module id from clicked button
        let target = $(e.target).attr('class').split(' ')[1];
        // further split string to get target tab id
        let t = target.split('P')[0];
        // activate the corresponding tab
        manageActives('.tab', '#' + t);
        // show the corresponding module
        showModule();
    });

// panels =====================================================================

    // open roster for team clicked
    $("#leftPanel").on('click', '.link', (e) => {
        // clear previous / all rosters
        manageClear();
        // activate team button on left panel
        manageActives('#leftPanel > .link', e.target);
        // if position navbar button is active
        if ($(e.target).attr('class') == 'link position active') {
            // activate position average tab
            manageActives('.tab', '#posAvg');
            // generate players at selected position
            getPlayersByPosition(e.target.id);
        } else {
            // activate team average tav
            manageActives('.tab', '#teamAvg');
            // generate team roster in right side panel
            getRoster(e.target.id);
        }
        // activate respective module
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