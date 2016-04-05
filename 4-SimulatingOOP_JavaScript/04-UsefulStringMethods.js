String.prototype.startsWith = function (subString) {
    var startString = this.substring(0, subString.length);
    return startString === subString;
}

String.prototype.endsWith = function (subString) {
    var endString = this.substr(this.length - subString.length, subString.length);
    return endString === subString;
}

String.prototype.left = function (count) {
    if (this.length < count) {
        return this.toString();
    } else {
        return this.substring(0, count);
    }
}

String.prototype.right = function (count) {
    if (this.length < count) {
        return this.toString();
    } else {
        return this.substring(this.length - count);
    }
}

String.prototype.padLeft = function (count, character) {
    if (this.length >= count) {
        return this.toString();
    } else {
        var charasToPad = "",
            i;
        for (i = 0; i < count - this.length; i++) {
            charasToPad += character || " ";
        }

        return charasToPad + this.toString();
    }
}

String.prototype.padRight = function (count, character) {
    if (this.length >= count) {
        return this.toString();
    } else {
        var charasToPad = "";
        for (var i = 0; i < count - this.length; i++) {
            charasToPad += character || " ";
        }

        return this.toString() + charasToPad;
    }
}

String.prototype.repeat = function (count) {
    var result = "",
        i;
    for (i = 0; i < count; i++) {
        result += this;
    }

    return result;
}

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log('***************');
console.log(example.endsWith("poses."));
console.log(example.endsWith("example"));
console.log(example.startsWith("something else"));
console.log('***************');
console.log(example.left(9));
console.log(example.left(90));
console.log('***************');
console.log(example.right(9));
console.log(example.right(90));
var example = "abcdefgh";
console.log(example.left(5).right(2));
console.log('***************');
var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));
console.log('***************');
var hello = "hello";
console.log(hello.padRight(5) + "|");
console.log(hello.padRight(10) + "|");
console.log(hello.padRight(5, ".") + "|");
console.log(hello.padRight(10, ".") + "|");
console.log(hello.padRight(2, ".") + "|");
console.log('---------------');
var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));