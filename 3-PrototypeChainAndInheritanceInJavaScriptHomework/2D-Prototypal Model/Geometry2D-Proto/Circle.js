var Geometry2D = Geometry2D || {};

Geometry2D.circle = (function () {
    var circle = Geometry2D.shape.extends({
        init: function init(x, y, color, radius) {
            this._super.init.call(this, x, y, color);
            this._radius = radius;

            return this;
        },
        toString: function () {
            return 'Circle: ' + this._super.toString.call(this) + '; radius: ' + this._radius;
        }
    });

    return circle;
})();

