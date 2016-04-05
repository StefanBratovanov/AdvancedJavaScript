var Geometry2D = Geometry2D || {};

Geometry2D.Triangle = (function () {
    var Triangle = function (x, y, color, x1, y1, x2, y2) {
        Geometry2D.Shape.call(this, x, y, color);
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
    };

    Triangle.extend(Geometry2D.Shape);

    Triangle.prototype.toString = function () {
        return 'Triangle: ' + Geometry2D.Shape.prototype.toString.call(this) +
            '; x1: ' + this._x1 +
            '; y1: ' + this._y1 +
            '; x2: ' + this._x2 +
            '; y2: ' + this._y2;
    };

    return Triangle;
})();