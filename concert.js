
// concert-this

var axios = require("axios");
var moment = require("moment");

function concertThis (artist) {

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(queryUrl)
.then(function(response) {
        console.log(response.data);


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
    console.log(error);
});
}

module.exports = concert;