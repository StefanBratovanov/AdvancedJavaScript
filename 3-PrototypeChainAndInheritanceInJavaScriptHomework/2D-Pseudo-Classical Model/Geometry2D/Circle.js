var Geometry2D = Geometry2D || {};

Geometry2D.Circle = (function () {
    var Circle = function (x, y, color, radius) {
        Geometry2D.Shape.call(this, x, y, color);
        this._radius = radius;
    };

    Circle.extend(Geometry2D.Shape);
    
    Circle.prototype.toString = function () {
        return 'Circle: ' + Geometry2D.Shape.prototype.toString.call(this) + '; radius: ' + this._radius
    };
    
    return Circle;
})();