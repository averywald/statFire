

// onload driver
$(document).ready(function() {

    // click search icon to open search bar panel
    $("#search").click(() => {
        $("#searchDiv").slideToggle('swing');
    });

    Plotly.plot('plots', [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
            margin: { t: 0 }
    });

});