var models = models || {};

(function (scope) {
    var id = 0;

    function User(username, fullName, balance) {
        this._id = ++id;
        this.username = username;
        this.fullName = fullName;
        this._balance = balance;
        this._shoppingCart = new scope._ShoppingCart()
        //this._shoppingCart = scope.getShoppingCart()
    }

    User.prototype.addItemToCart = function (item) {
        this._shoppingCart.addItem(item)
    };

    scope.getUser = function (username, fullName, balance) {
        return new User(username, fullName, balance);
    };
}(models));
