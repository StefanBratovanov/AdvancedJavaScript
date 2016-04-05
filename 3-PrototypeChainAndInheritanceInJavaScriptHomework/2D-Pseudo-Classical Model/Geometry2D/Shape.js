var Geometry2D = Geometry2D || {};

Geometry2D.Shape = (function () {
    var Shape = function (x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
    };

    Shape.prototype.toString = function () {
        return 'x: ' + this._x + ', y: ' + this._y + '; color: ' + this._color;
    };

    return Shape;
})();