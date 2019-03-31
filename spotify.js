
// spotify-this-song

    require("dotenv").config();
    var keys = require("./keys.js");
    var reqSpotify = require("node-spotify-api");
    var runSpotify = new reqSpotify(keys.spotify);


function spotify (song) {
    
    if (song === "") {
        return spotify("the sign");
    }

    runSpotify.search({
        type: "track",
        query: song,
    })
    .then(function(response) {
        // console.log(response.tracks.items[0]);

        for (var i = 0; i < 3; i++) {
            var resp = response.tracks.items[i];
            
            console.log("\n------------------------");
            console.log("Artist: " + resp.album.artists[0].name);
            console.log("Song Name: " + resp.name);
            console.log("Preview: " + resp.preview_url);
            console.log("Album: " + resp.album.name);
        }
    })

    .catch(function(error) {
        console.log(error);
    });

}

module.exports = spotify;