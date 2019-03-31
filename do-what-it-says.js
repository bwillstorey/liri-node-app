
// do-what-it-says

var fs = require("fs");

function doWhatItSays(func) {

    fs.readFile("random.txt", "utf-8", function(error, data) {

        var dataArr = data.split(",");
        func(dataArr[0], dataArr[1]);
    
    });
}

module.exports = doWhatItSays;