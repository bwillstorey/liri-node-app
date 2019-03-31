
// spotify-this-song

    require("dotenv").config();
    var keys = require("./keys.js");
    var reqSpotify = require("node-spotify-api");
    var runSpotify = new reqSpotify(keys.spotify);


function spotify (song) {
    
    runSpotify.search({
        type: "track",
        query: song,
    })
    .then(function(response) {

        if (song === undefined) {
            song = "the sign";
        }
        else {
            spotify("the sign");
        }

    })

    .catch(function(error) {
        console.log(error);
    });

}

module.exports = spotify;