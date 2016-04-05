var models = models || {};

(function (scope) {
    var id = 0;

    function Item(title, description, price) {
        this._id = ++id;
        this.title = title;
        this.description = description;
        this.price = price;
        this._customerReviews = [];
    }

    Item.prototype.addCustomerReview = function (review) {
        this._customerReviews.push(review);
    };

    Item.prototype.getCustomerReview = function () {
        return this._customerReviews;
    };

    function UsedItem(title, description, price, condition) {
        scope._Item.call(this, title, description, price);
        this.condition = condition;
    }

    scope._Item = Item;

    UsedItem.extend(scope._Item);

    scope.getItem = function (title, description, price) {
        return new Item(title, description, price);
    };

    scope.getUsedItem = function (title, description, price, condition) {
        return new UsedItem(title, description, price, condition);
    };

}(models));
