var shape = Object.create(Geometry2D.shape).init(10, 15, "#bbb");
var circle = Object.create(Geometry2D.circle).init(0, 5, "#aaa", 3);
var rectangle = Object.create(Geometry2D.rectangle).init(0, 10, "#bbb", -17.7, 5.5);
var triangle = Object.create(Geometry2D.trinagle).init(-5, 1.5, "#aaa", 0.5, 2, -15, -20.6)
var line = Object.create(Geometry2D.line).init(0, 10, "#7c1d1d", -2, 5.15)
var segment = Object.create(Geometry2D.segment).init(50, 200, "#ccc", 55.5, 100)


console.log(shape.toString());
console.log(circle.toString());
console.log(rectangle.toString());
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());