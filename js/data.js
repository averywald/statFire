
const positions = ['PG', 'SG', 'SF', 'PF', 'C'];

// ajax request 
//      - gateway to filter functions
//      - passes ajax response data to callback
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

function findPlayer(player, data) {
    let obj = {};
    data.forEach(o => {
        if (o.name == player) {
            obj = o;
        }
    });
    graphPlayer(obj);
}

function findRoster(code, data) {
    let roster = [];
    data.forEach(p => {
        // account for space in tricode on json file (????)
        if (p.team == ' ' + code) {
            roster.push(p);
        }
    });
    average(roster, '3p');
    yo(roster);
    displayRoster(roster);
}

function yo(roster) {
    roster.forEach(obj => {
        // LoDash returns in alphanumeric order
        roster[obj] = _.pick(obj, [
            'fg',
            'fga',
            'fgp',
            '3p',
            '3pa',
            '3pPct',
            '2p',
            '2pa',
            '2pPct',
            'efgPct',
            'ft',
            'fta',
            'ftPct',
            'orb',
            'drb',
            'ast',
            'stl',
            'blk',
            'tov',
            'pf',
            'pts'
            ]);
    });
    console.log(roster);
    var avgs = roster.reduce((mean, obj) => {
        Object.keys(obj).forEach(key => {
            mean[key] = (mean[key] || 0) + obj[key] / roster.length;
        });
        return mean;
    }, {});

    graphPlayer(avgs);
}

function average(roster, param) {
    let avg = roster.reduce((acc, player) => acc + player[param], 0) / roster.length;
    // console.log(avg);
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

// function getAllPlayers() {
// }

// get single player stats
function getPlayer(player) {
    request(player, findPlayer);
}

function getRoster(tricode) {
    request(tricode, findRoster);
}

// ajax request to json file - returning object of all NBA teams' data
// function getTeam(team) {
//     // request(team, );
// }

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