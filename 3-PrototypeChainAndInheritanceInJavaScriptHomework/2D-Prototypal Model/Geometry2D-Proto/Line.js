var Geometry2D = Geometry2D || {};

Geometry2D.line = (function () {
    var line = Geometry2D.shape.extends({
        init: function init(x, y, color, x1, y1) {
            this._super.init.call(this, x, y, color);
            this._x1 = x1;
            this._y1 = y1;

            return this;
        },
        toString: function () {
            return 'Line: ' + this._super.toString.call(this) +
                '; x1: ' + this._x1 +
                '; y1: ' + this._y1;
        }
    });

    return line;
})();