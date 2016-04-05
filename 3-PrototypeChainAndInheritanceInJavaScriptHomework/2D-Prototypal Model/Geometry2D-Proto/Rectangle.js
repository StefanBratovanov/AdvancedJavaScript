var Geometry2D = Geometry2D || {};

Geometry2D.rectangle = (function () {
    var rectangle = Geometry2D.shape.extends({
        init: function init(x, y, color, width, height) {
            this._super.init.call(this, x, y, color);
            this._width = width;
            this._height = height;

            return this;
        },
        toString: function () {
             return 'Rectangle: ' + this._super.toString.call(this) +
            '; width: ' + this._width +
            '; height: ' + this._height;
        }
    });

    return rectangle;
})();