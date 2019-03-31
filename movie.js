
// movie-this

var movieThis = function(movieName) {

    var movieArgs = process.argv;

    if(movieName === undefined) {
		movieName = "mr nobody";
	}
    
    // var movieName = "";

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