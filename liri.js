var command = process.argv[2];
var query = process.argv[3];

// concert-this

var concertThis = function() {

    var axios = require("axios");
var moment = require("moment");

var concertArgs = process.argv;

var artist = "";

for (var i = 2; i < concertArgs.length; i++) {

    if (i > 2 && i < concertArgs.length) {
      artist = artist + "+" + concertArgs[i];
    }
    else {
      artist += concertArgs[i];
  
    }
  }

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(queryUrl)
.then(function(response) {
        console.log("Venue Name: " + response.data[0].venue.name);
        console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country);
        
        var rawDate = response.data[0].datetime;
        JSON.stringify(rawDate);
        var dateFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var convertedDate = moment(rawDate, dateFormat);
        var formattedDate = convertedDate.format("MM/DD/YYYY");

        console.log("Event Date: " + formattedDate);
})

.catch(function(error) {

});
};




// spotify-this-song

var spotifyThisSong = function() {

    // var keys = require("./keys.js");

    // var spotify = new Spotify(keys.spotify);
};




// movie-this

var movieThis = function() {

    var movieArgs = process.argv;


var movieName = "";

for (var i = 2; i < movieArgs.length; i++) {

    if (i > 2 && i < movieArgs.length) {
      movieName = movieName + "+" + movieArgs[i];
    }
    else {
      movieName += movieArgs[i];
  
    }
  }

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryUrl)
.then(function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Year Released: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Actors: " + response.data.Actors);
})

.catch(function(error) {

});

};


require("dotenv").config();


if(command === "concert-this") {
	concertThis(query);
} else if(command === "spotify-this-song") {
	spotifyThisSong(query);
} else if(command === "movie-this") {
	movieThis(query);
} else if(command === "do-what-it-says") {
    
    // do-what-it-says
    var fs = require("fs");

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
} else if(command === undefined) {
	console.log("LIRI needs a command to run.");
} else {
	console.log("Error. Please try again.");
}