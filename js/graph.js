
// add clear button for each entity graphed
function addTool(c, n) {
    let name;
    if (n[0] == ' ') name = n.substr(1);
    else name = n;
    $("#toolBar").append('<button class="tool ' + c + '" id="' + name + '">' + name + '</button>');
}

// creates plotly data visualization from json
function standardGraph(o, container, n = undefined) {
    // check if n arg was provided
    let name = (_.isUndefined(n)) ? o.name: n;
    // plotly.js data var
    var data = [{
        name: name,
        x: [
            'points', 'field goals', 'fg attempts', '3-pointers',
            '3p attempts', '2-pointers', '2p attempts', 'free throws',
            'ft attempts', 'off rebounds', 'def rebounds', 'assists',
            'steals', 'blocks', 'turnovers', 'personal fouls'
        ],
        y: [
            o.pts,  o.fg, o.fga, o['3p'],
            o['3pa'], o['2p'], o['2pa'], o.ft,
            o.fta, o.orb, o.drb, o.ast,
            o.stl, o.blk,  o.tov, o.pf
        ],
        type: 'bar'
    }];
    // generate graph
    Plotly.plot(container, data, {responsive: true});
    // add clear button for entity to toolbar
    addTool(container, name);
}