imdb = imdb || {};

(function (scope) {
    var genreId = 0;

    function Genre(name) {
        genreId++;
        this.name = name;
        this._movies = [];
        this._id = genreId;
    }

    Genre.prototype.addMovie = function (movie) {
        this._movies.push(movie);
    };

    Genre.prototype.getMovies = function () {
        return this._movies;
    };

    Genre.prototype.deleteMovieById = function (id) {
        var movie = this._movies.filter(function (movie) {
            return movie._id === id;
        });
        this.deleteMovie(movie);
    };

    Genre.prototype.deleteMovie = function (movie) {
        var movieIndex = this._movies.indexOf(movie);

        if (movieIndex !== -1) {
            this._movies.splice(movieIndex, 1)
        }
    };

    scope.getGenre = function (name) {
        return new Genre(name);
    };
}(imdb));