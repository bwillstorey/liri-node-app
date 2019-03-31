
// movie-this

var axios = require("axios");

function movie (movieName) {

    if (movieName === "") {
        return movie("mr nobody");
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
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

    })

    .catch(function(error) {
        console.log(error);
    });

}

module.exports = movie;