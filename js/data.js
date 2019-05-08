
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
    // console.log($("#rightPanel").children().length);
    if ($("#rightPanel").children().length == 0) {
        $("#rightPanel").append("<p class='linkHeader'>Players</p>");
        roster.forEach(p => {
            $("#rightPanel").append("<button class='link' id=\" " + p.name + " \">" + p.name + "</button>");
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
            console.log(p);
        }
    });
    displayRoster(roster);
}

// function findTeam(team, data) {
//     let t = {};
//     data.forEach(o => {
//         if (o.tricode == team) {
//             t = o;
//         }
//     });
//     graphTeam(t);
// }

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