function printArgsInfo() {
    for (var index in arguments) {
        var value = arguments[index];
        var type = typeof (value);

        if (Array.isArray(value)) {
            type = "array";
        }

        console.log(value + " (" + type + ")");
    }
}


printArgsInfo.call()
printArgsInfo.call(null, undefined, 17, {'N':205}, ["?", true], false, null);
console.log("**********************");
printArgsInfo.apply()
printArgsInfo.apply(null, [null, undefined, 17, {'N':205}, ["?", true], false, null]);


