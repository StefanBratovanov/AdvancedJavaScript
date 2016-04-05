function add(x) {
    var sum = x;

    function innerAdd(y) {
        sum += y;
        return innerAdd;
    }

    innerAdd.toString = function () {
        return sum;
    }

    return innerAdd;
}

console.log(add(4)(2)(8));
console.log(add(1));
console.log(add(2)(3));
console.log(add(1)(1)(1)(1)(1));
console.log(add(1)(0)(-1)(-1));

var addTwo = add(2);
console.log(addTwo);
var addTwo = add(2); 
console.log(addTwo(3));
var addTwo = add(2); 
console.log(addTwo(3)(5));
console.log(addTwo + 1000);

