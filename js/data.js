
// getters ====================================================================

// ajax request to json file - returning object of all NBA teams' data
function getTeams() {
    var teams = [];
    $.getJSON('assets/data/nbaTeams.json', (data) => {
        $.each(data.league.standard, (_key, val) => {
            if (val.isNBAFranchise) {
                teams.push(val);
            }
        });
    });
}

// ajax request - returns all players on a team as objects
function getRoster(tricode) {
    let roster = [];
    $.getJSON('assets/data/nbaStats.json', (data) => {
        $.each(data, (_k, v) => {
            if (v.team == tricode) {
                roster.push(v);
            }
        });
    });
    return roster;
}

// getPlayer() callback - handles json parsing
function gp(player, data) {
    let obj = {};
    data.forEach(o => {
        if (o.name == player) {
            obj = o;
        }
    });
    graph(obj);
}

// ajax request - returns specific player as object
function getPlayer(player) {
    $.ajax({
        url: 'assets/data/nbaStats.json',
        dataType: 'json',
        method: 'GET',
        success: function(data) {
            gp(player, data);
        },
        error: () => console.log('error')
    });
}

// ============================================================================

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