var imdb = imdb || {};

(function (scope) {

    function loadHtml(selector, data) {
        var container = document.querySelector(selector),
            moviesContainer = document.getElementById('movies'),
            detailsContainer = document.getElementById('details'),
            genresUl = loadGenres(data);

        container.appendChild(genresUl);

        genresUl.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                var genreId,
                    genre,
                    moviesHtml;

                genreId = parseInt(ev.target.getAttribute('data-id'));
                genre = data.filter(function (genre) {
                    return genre._id === genreId;
                })[0];

                moviesHtml = loadMovies(genre.getMovies());
                moviesContainer.innerHTML = moviesHtml.outerHTML;
                moviesContainer.setAttribute('data-genre-id', genreId);
            }
        });


        moviesContainer.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI' || ev.target.parentElement.tagName === 'LI') {

                var movieIdStr = ev.target.getAttribute('data-id') || ev.target.parentElement.getAttribute('data-id');
                var movieId = parseInt(movieIdStr);

                var allMovies = [];

                var moviesArrByGender = data.map(function (genre) {    //moviesArr = [Array[6], Array[4], Array[7]]
                    return genre._movies;
                });

                moviesArrByGender.forEach(function (mArr) {
                    allMovies = allMovies.concat(mArr);                 //allMovies = Array[17]
                });

                var movie = allMovies.filter(function (movie) {
                    return movie._id === movieId;
                })[0];


                var detailsHtml = loadDetails(movie.getActors(), movie.getReviews())
                detailsContainer.innerHTML = detailsHtml.outerHTML;
                detailsContainer.setAttribute('data-movie-id', movieIdStr);
            }
        });

        // Task 3 - Add event listener for delete button (delete movie button or delete review button)

        moviesContainer.addEventListener('click', function (ev) {
            if (ev.target.getAttribute('class').indexOf("delete-movie") > -1) {

                var movieIdStr = ev.target.getAttribute('data-id');
                var movieId = parseInt(movieIdStr);
                var genreIdStr = moviesContainer.getAttribute('data-genre-id');
                var genreId = parseInt(genreIdStr);

                var genre = data.filter(function (genre) {
                    return genre._id === genreId;
                })[0];

                genre.deleteMovieById(movieId);

                //remove from DOM:
                var movieLiElement = ev.target.parentElement;
                movieLiElement.parentElement.removeChild(movieLiElement);
                detailsContainer.innerHTML = '';
            }
        });

        detailsContainer.addEventListener('click', function (ev) {
            if (ev.target.getAttribute('class').indexOf('delete') > -1) {

                var movieId = parseInt(detailsContainer.getAttribute('data-movie-id'));
                var reviewId = parseInt(ev.target.getAttribute('data-id'));

                var allMovies = [];
                var moviesArrByGender = data.map(function (genre) {    //moviesArr = [Array[6], Array[4], Array[7]]
                    return genre._movies;
                });

                moviesArrByGender.forEach(function (mArr) {
                    allMovies = allMovies.concat(mArr);                 //allMovies = Array[17]
                });

                var movie = allMovies.filter(function (movie) {
                    return movie._id === movieId;
                })[0];

                movie.deleteReviewById(reviewId);

                // Remove review from DOM
                var reviewLiElement = ev.target.parentElement;
                reviewLiElement.parentElement.removeChild(reviewLiElement);
            }
        });


    }

    function loadGenres(genres) {
        var genresUl = document.createElement('ul');
        genresUl.setAttribute('class', 'nav navbar-nav');
        genres.forEach(function (genre) {
            var liGenre = document.createElement('li');
            liGenre.innerHTML = genre.name;
            liGenre.setAttribute('data-id', genre._id);
            genresUl.appendChild(liGenre);
        });

        return genresUl;
    }

    function loadMovies(movies) {
        var moviesUl = document.createElement('ul');
        movies.forEach(function (movie) {
            var liMovie = document.createElement('li');
            liMovie.setAttribute('data-id', movie._id);

            liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
            liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
            liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
            liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
            liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
            liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
            liMovie.innerHTML += '<button class="delete-movie" data-id="' + movie._id + '">Delete movie</button>';

            moviesUl.appendChild(liMovie);
        });

        return moviesUl;
    }

    function loadDetails(actors, reviews) {
        var detailsDIV = document.createElement('div');
        detailsDIV.innerHTML += '<h3>Actors</h3>';

        var actorsUl = document.createElement('ul');
        actors.forEach(function (actor) {
            var liActor = document.createElement('li');
            liActor.setAttribute('data-id', actor._id);

            liActor.innerHTML = '<h4>' + actor.name + '</h4>';
            liActor.innerHTML += '<div><strong>Bio:</strong>' + actor.bio + '</div>';
            liActor.innerHTML += '<div><strong>Born:</strong>' + actor.born + '</div>';

            actorsUl.appendChild(liActor);
        });
        detailsDIV.appendChild(actorsUl);

        detailsDIV.innerHTML += '<h3>Reviews</h3>';

        var reviewsUl = document.createElement('ul');
        reviews.forEach(function (review) {
            var liReview = document.createElement('li');
            liReview.setAttribute('data-id', review._id);

            liReview.innerHTML = '<h4>' + review.author + '</h4>';
            liReview.innerHTML += '<div><strong>Content:</strong>' + review.content + '</div>';
            liReview.innerHTML += '<div><strong>date:</strong>' + review.date + '</div>';
            liReview.innerHTML += '<button class="delete" data-id="' + review._id + '">Delete review</button>';

            reviewsUl.appendChild(liReview);
        });
        detailsDIV.appendChild(reviewsUl);

        return detailsDIV;
    }

    scope.loadHtml = loadHtml;
}(imdb));

