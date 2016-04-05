var Geometry2D = Geometry2D || {};

Geometry2D.Segment = (function () {
    var Segment = function (x, y, color, x1, y1) {
        Geometry2D.Shape.call(this, x, y, color);
        this._x1 = x1;
        this._y1 = y1;
    }

    Segment.extend(Geometry2D.Shape);

    Segment.prototype.toString = function () {
        return 'Segment: ' + Geometry2D.Shape.prototype.toString.call(this) +
            '; x1: ' + this._x1 +
            '; y1: ' + this._y1 ;
    }

    return Segment;
})();