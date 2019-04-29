
// getters ====================================================================

// ajax request to json file - returning object of all NBA teams' data
function getTeams() {
    var teams = [];
    $.getJSON('assets/data/nbaTeams.json', (data) => {
        $.each(data.league.standard, (key, val) => {
            if (val.isNBAFranchise) {
                teams.push(val);
            }
        });
    });
}

// ajax request - returns all players on a team as objects
function getRoster(tricode) {
    $.getJSON('assets/data/nbaStats.json', (data) => {
        $.each(data, (k, v) => {
            if (v.team == tricode) {
                console.log(v);
            }
        });
    });
}

// ajax request - returns specific player as object
function getPlayer(player) {
    $.getJSON('assets/data/nbaStats.json', (data) => {
        $.each(data, (k, v) => {
            if (v.name == player) {
                console.log(v);
            }
        });
    });
}

function graph(team) {
    var data = [{
        x: ['Raptors', 'Bucks', 'Warriors'],
        y: [24.4, 31.2, 44.4],
        type: 'bar'
    }]; 
    Plotly.newPlot('plots', data);
}