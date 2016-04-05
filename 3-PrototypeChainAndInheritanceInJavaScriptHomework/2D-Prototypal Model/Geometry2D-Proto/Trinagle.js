var Geometry2D = Geometry2D || {};

Geometry2D.trinagle = (function () {
    var trinagle = Geometry2D.shape.extends({
        init: function init(x, y, color, x1, y1, x2, y2) {
            this._super.init.call(this, x, y, color);
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;

            return this;
        },
        toString: function () {
            return 'Triangle: ' + this._super.toString.call(this) +
                '; x1: ' + this._x1 +
                '; y1: ' + this._y1 +
                '; x2: ' + this._x2 +
                '; y2: ' + this._y2;
        }
    });

    return trinagle;
})();