imdb = imdb || {};

(function (scope) {

    function Theatre(name, length, rating, country, isPuppet) {
        scope._Movie.call(this, name, length, rating, country);
        this.isPuppet = isPuppet || false;
    }

    Theatre.extend(scope._Movie);

    //scope.Theatre = Theatre;
    scope.getTheatre = function (name, length, rating, country, isPuppet) {
        return new Theatre(name, length, rating, country, isPuppet);
    };
}(imdb));
