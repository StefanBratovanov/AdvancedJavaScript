var models = models || {};

(function (scope) {
    var id = 0;

    function CustomerReview(customer, content, rating, createdOn) {
        this._id = ++id;
        this.customer = customer;
        this.content = content;
        this.rating = rating;
        this.createdOn = createdOn;
    }

    scope.getCustomerReview = function (customer, content, rating, createdOn) {
        return new CustomerReview(customer, content, rating, createdOn);
    };

}(models));
