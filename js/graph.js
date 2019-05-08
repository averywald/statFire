
// creates plotly data visualization from json
function graphPlayer(o) {
    var data = [{
        name: o.name,
        x: ['3-pointers', '2-pointers', 'assists'],
        y: [o['3p'], o['2p'], o.ast],
        type: 'bar'
    }];
    Plotly.plot('plots', data);
}

function graphAccuracy(o) {
    var data = [{
        name: o.name,
        x: [],
        y: [],
        type: 'pie'
    }];
    Plotly.plot('plots', data);
}