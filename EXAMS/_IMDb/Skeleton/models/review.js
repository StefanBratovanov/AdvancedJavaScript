imdb = imdb || {};

(function (scope) {
    var reviewId = 0;

    function Review(author, content, date) {
        this._id = ++reviewId;
        this.author = author;
        this.content = content;
        this.date = date;
    }

    scope.getReview = function (author, content, date) {
        return new Review(author, content, date);
    };
}(imdb));
