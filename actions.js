

// onload driver
$(document).ready(function() {

    // click search icon to open search bar panel
    $("#search").click(() => {
        $("#searchDiv").slideToggle('swing');
    });

    // click github icon to open up statFire repo in new tab
    $("#github").click(() => {
        let win = window.open('https://www.github.com/averywald/statFire');
        if (win) win.focus();
        else alert('please allow popups to view github repo');
    })

    Plotly.plot('plots', [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
            margin: { t: 0 }
    });

});