var models = models || {};

(function (scope) {
    var id = 0;

    function Category(name) {
        this._id = ++id;
        this.name = name;
        this._categories = [];
        this._items = [];
    }

    Category.prototype.addCategory = function (category) {
        this._categories.push(category);
    };

    Category.prototype.getCategories = function () {
        return this._categories;
    };

    Category.prototype.addItem = function (item) {
        this._items.push(item);
    };

    Category.prototype.getItems = function () {
        return this._items;
    };

    scope.getCategory = function (name) {
        return new Category(name);
    };
}(models));
