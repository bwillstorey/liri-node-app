
// concert-this

var axios = require("axios");
var moment = require("moment");

function concert (artist) {

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl)
    .then(function(response) {

        for (var i = 0; i < 3; i++) {
            console.log("\n------------------------");
            console.log(response.data[i].venue.name);
            console.log("Venue Name: " + response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
        
            var convertedDate = moment(response.data[i].datetime).format("MM/DD/YYYY");

            console.log("Event Date: " + convertedDate);
        }
    })

    .catch(function(error) {
        console.log(error);
    });
}

module.exports = concert;