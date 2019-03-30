// concert-this
var axios = require("axios");
var moment = require("moment");

var nodeArgs = process.argv;

var artist = "";

for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
      artist = artist + "+" + nodeArgs[i];
    }
    else {
      artist += nodeArgs[i];
  
    }
  }

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// console.log(queryUrl);

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


// spotify-this-song


// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);


// movie-this


// do-what-it-says

require("dotenv").config();
