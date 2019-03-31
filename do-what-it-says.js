
// do-what-it-says

var fs = require("fs");
require("dotenv").config();

fs.readFile("random.txt", "utf-8", function(error, data) {
    var command;
    var query;

    if(data.indexOf(",") !== -1) {
        var dataArr = data.split(",");
        command = dataArr[0];
        query = dataArr[1];
    } else {
        command = data;
    }

    
    if(command === "concert-this") {
        concertThis(query);
    } else if(command === "spotify-this-song") {
        spotifyThisSong(query);
    } else if(command === "movie-this") {
        movieThis(query);
    } else { 
        console.log("Command from file is not a valid command! Please try again.");
    }
});