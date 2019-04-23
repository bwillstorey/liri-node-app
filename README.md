# liri-node-app

## Contributors
@bwillstorey

## Technology
- Javascript, Node, Axios for Bands in Town API & OMDB API, Node Spotify API, Moment.js, DotEnv
- Live Demo: https://drive.google.com/file/d/1YV18_w9P9uV0l4oonvcgiGziptZNd65J/view?usp=sharing

## About
A node application named 'LIRI' developed using Node. The application has 4 primary modularized functions:
- concert-this: the 'concert-this' argument calls the Bands in Town API to search for the next 3 concerts for a band entered by the user returning venue name, venue location, and event date (converted using Moment)
- spotify-this-song: the 'spotify-this-song' argument calls the Spotify API to search Spotify using the user entered song and returns the 3 best matching song results including artist name, song name, song preview, and album name
- movie-this: the 'movie-this' argument calls the OMDB API to search for a matching movie title and returns primary information about that movie including title, year released, IMDB rating, Rotten Tomatoes rating, country, language, plot, and actors
- do-what-it says: the 'do-what-it-says' argument reads the 'random.txt' file defining arguments based of the comma delimited to run one of the preceding 3 functions with the corresponding user input

## Contributing Guidelines
All contributions and suggestions are welcome! For direct contributions, please fork the repository and file a pull request.

## Contact
#### Developer/Full-stack Web Software Developer
- Homepage: https://brianstorey.me
- email: bwillstorey@gmail.com
- LinkedIn: https://www.linkedin.com/in/brianstorey/
- AngelList: https://angel.co/brian-storey
