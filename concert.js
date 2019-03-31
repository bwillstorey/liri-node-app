
// concert-this

var axios = require("axios");
var moment = require("moment");

function concert (artist) {

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(queryUrl)
.then(function(response) {

    response.data.forEach(function(concert) {
        console.log("Venue Name: " + concert.venue.name);
        console.log("Venue Location: " + concert.venue.city + ", " + concert.venue.region + ", " + concert.venue.country);
    
        var convertedDate = moment(concert.datetime).format("MM/DD/YYYY");

        console.log("Event Date: " + convertedDate);
    });
})

.catch(function(error) {
    console.log(error);
});
}

module.exports = concert;