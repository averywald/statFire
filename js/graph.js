
// creates plotly data visualization from json
function graph(o) {
    var data = [{
        x: ['orb', 'drb', 'ast'],
        y: [o.orb, o.drb, o.ast],
        type: 'bar'
    }];
    var layout = [{
        title: o.name
    }];
    Plotly.plot('plots', data, layout);
}