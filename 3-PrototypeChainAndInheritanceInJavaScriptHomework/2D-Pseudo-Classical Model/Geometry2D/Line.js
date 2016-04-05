var Geometry2D = Geometry2D || {};

Geometry2D.Line = (function () {
    var Line = function (x, y, color, x1, y1) {
        Geometry2D.Shape.call(this, x, y, color);
        this._x1 = x1;
        this._y1 = y1;
    }

    Line.extend(Geometry2D.Shape);

    Line.prototype.toString = function () {
        return 'Line: ' + Geometry2D.Shape.prototype.toString.call(this) +
            '; x1: ' + this._x1 +
            '; y1: ' + this._y1 ;
    }

    return Line;
})();