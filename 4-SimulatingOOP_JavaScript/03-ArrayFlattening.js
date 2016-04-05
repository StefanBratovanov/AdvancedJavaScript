Array.prototype.flatten = function () {
    var result = [],
        self = this;

    flattenArray(self);

    function flattenArray(array) {
        var i;
        for (i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flattenArray(array[i]);
            } else {
                result.push(array[i]);
            }
        }
    }

    return result;
}

var array = [1, 2, 3, 4];
console.log(array.flatten());
console.log('***********');
var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed
console.log('***********');
var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
console.log(array); // Not changed