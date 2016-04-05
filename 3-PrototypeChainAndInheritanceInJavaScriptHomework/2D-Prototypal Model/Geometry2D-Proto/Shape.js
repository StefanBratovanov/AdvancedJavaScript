var Geometry2D = Geometry2D || {};

Geometry2D.shape = (function () {
    var shape = {
        init: function init(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
            
            return this;
        },
        toString: function () {
            return 'x: ' + this._x + ', y: ' + this._y + '; color: ' + this._color;
        }
    };
    
    return shape;
})();

Object.prototype.extends = function (properties) {
    function f() {};
    f.prototype = Object.create(this);
    
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    
    f.prototype._super = this;
    return new f();
};