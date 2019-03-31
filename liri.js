
var concerts = require("concert.js");
var spotify = require("spotify.js");
var movies = require("movie.js");
var doWhatItSays = require("do-what-it-says.js");

var parameters = process.argv;


function search (command, input) {

    if(command === "concert-this") {
        concerts(input);
    } else if(command === "spotify-this-song") {
        spotify(input);
    } else if(command === "movie-this") {
        movies(input);
    } else if(command === "do-what-it-says") {
        doWhatItSays(search);
    } else if(command === undefined) {
        console.log("LIRI needs a command to run.");
    } else {
        console.log("Error. Please try again.");
    }
    
}

search(parameters[2], parameters.slice(3).join("+"));
