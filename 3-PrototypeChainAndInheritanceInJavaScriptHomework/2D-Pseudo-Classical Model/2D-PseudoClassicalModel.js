var shape = new Geometry2D.Shape(1, 1, "#ccc")
var circle = new Geometry2D.Circle(5, 18.5, "#000", 0.5)
var triangle = new Geometry2D.Triangle(-5, 1.5, "#aaa", 0.5, 2, -15, -20.6)
var rectangle = new Geometry2D.Rectangle(0, 10, "#bbb", -17.7, 5.5)
var line = new Geometry2D.Line(0, 10, "#fff", -2, 3.33)
var segment = new Geometry2D.Segment(50, 200, "#ccc", 55.5, 100)


console.log(shape.toString());
console.log(circle.toString());
console.log(triangle.toString());
console.log(rectangle.toString());
console.log(line.toString());
console.log(segment.toString());