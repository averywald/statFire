
const positions = ['PG', 'SG', 'SF', 'PF', 'C'];

function average(roster, isTeam = false) {
    // check if averaging team or position
    let n = (isTeam) ? roster[0].team.slice(0, 4) : roster[0].pos.substr(1);
    // check for correct container to graph to
    let c = (isTeam) ? 'teamAvgPlot' : 'posAvgPlot';

    // filter relevant stats for each player
    roster.forEach(obj => {
        // LoDash returns in alphanumeric order
        roster[obj] = _.pick(obj, [
            'fg', 'fga', 'fgp', '3p', '3pa',
            '3pPct', '2p', '2pa', '2pPct',
            'efgPct', 'ft', 'fta', 'ftPct',
            'orb', 'drb', 'ast', 'stl',
            'blk', 'tov', 'pf', 'pts'
        ]);
    });
    // compile team averages of all stat categories
    var avgs = roster.reduce((mean, obj) => {
        Object.keys(obj).forEach(key => {
            mean[key] = (mean[key] || 0) + obj[key] / roster.length;
        });
        return mean;
    }, {});
    // display in graph
    standardGraph(avgs, c, n);
}

// ajax request with custom search target and callback to handle data
function request(target, callback) {
    $.ajax({
        url: 'assets/data/nbaStats.json',
        dataType: 'json',
        method: 'GET',
        success: (data) => {
            callback(target, data);
        },
        error: () => console.log('error')
    });
}

function displayPositions() {
    if ($("#leftPanel").children().length == 0) {
        $("#leftPanel").append("<p class='linkHeader'>Positions</p>");

        positions.forEach(p => {
            $("#leftPanel").append("<button class='link position' id=" + p + ">" + p + "</button>");
        });
    }
}

function displayRoster(roster) {
    if ($("#rightPanel").children().length == 0) {
        $("#rightPanel").append("<p class='linkHeader'>Players</p>");

        roster.forEach(p => {
            $("#rightPanel").append("<button class='link'>" + p.name + "</button>");
        });
    }
}

function displayTeams(teams) {
    if ($("#leftPanel").children().length == 0) {
        $("#leftPanel").append("<p class='linkHeader'>Teams</p>");

        teams.forEach(team => {
                $("#leftPanel").append("<button class='link' id=" + team.tricode + ">" + team.fullName + "</button>");
        });
    }
}

// filter functions ===========================================================
//      - called in request()
//      - filter ajax request
//      - graphs data appropriately

function findByPosition(position, data) {
    let players = data.filter((p) => {
        // account for dumb space in json value
        if (p.pos == ' ' + position) {
            return p;
        }
    });
    average(players);
    displayRoster(players);
}

function findPlayer(player, data) {
    let obj = {};
    data.forEach(o => {
        if (o.name == player) {
            obj = o;
        }
    });
    standardGraph(obj, 'totalsPlot');
}

function findRoster(code, data) {
    let roster = [];
    data.forEach(p => {
        // account for space in tricode on json file (????)
        if (p.team == ' ' + code) {
            roster.push(p);
        }
    });
    // graph team averages
    average(roster, true);
    // display players in the right panel
    displayRoster(roster);
}

function findTeams(data) {
    let teams = [];
    data.league.standard.forEach(o => {
        if (o.isNBAFranchise) {
            teams.push(o);
        }
    });
    displayTeams(teams);
}

// getters ====================================================================
//      - functions used in actions.js
//      - simplify ajax request interface

// get single player stats
function getPlayer(player) {
    request(player, findPlayer);
}

function getPlayersByPosition(pos) {
    request(pos, findByPosition);
}

// get list of positions to display
function getPositions() {
    displayPositions();
}

function getRoster(tricode) {
    request(tricode, findRoster);
}

function getAllTeams() {
    $.ajax({
        url: 'assets/data/nbaTeams.json',
        dataType: 'json',
        method: 'GET',
        success: (data) => {
            findTeams(data);
        },
        error: () => alert('error')
    });
}