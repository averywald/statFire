
// scrapes NBA player stats and outputs to csv file

// npm dependencies
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

// npm arguments
const args = process.argv.slice(2);

// csv header string
// const csvHeader = 'name, pos, age, team, games, gs, mp, fg, fga, fgp, 3p, 3pa, 3pPct, 2p, 2pa, 2pPct, efgPct, ft, fta, ftPct, orb, drb, trb, ast, stl, blk, tov, pf, pts';

// https://www.basketball-reference.com/leagues/NBA_2019_per_game.html

// url to scrape
request(args[0], (error, response, html) => {

    // no errors and successful connection
    if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);

        // header attrs array
        // const tableHeader = [];
        // scrape($, 'thead > tr > th', tableHeader);

        // stats array
        const stats = [];
        // grab data from html
        scrape($, 'tr.full_table > td, tr.full_table > th', stats);
        
        // create write stream to output to file
        var stream = fs.createWriteStream(args[1]);
        stream.once('open', (fs) => {

            // write csv header to top line of file
            // stream.write(tableHeader);

            // for each item in stats array
            stats.forEach((val) => {

                // format output as line per player
                if (val.match(/\w \w/g) || val.match(/\w.\w. \w/g)) {
                    // write to new line
                    stream.write('\n' + val);
                } else {
                    // write data in line
                    stream.write(', ' + val);                                 
                }

            });

            // close write stream
            stream.end();

        });
    } else {
        throw error;
    }

});

function scrape($, selector, bucket) {
    $(selector).each(function (i, elem) {
        // store in array
        bucket[i] = $(this).text();
    });
}