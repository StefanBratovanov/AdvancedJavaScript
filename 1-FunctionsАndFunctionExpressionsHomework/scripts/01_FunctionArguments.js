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

printArgsInfo(2, 3, 2.5, -110.5564, false)
console.log("*********************");
printArgsInfo(null, undefined, "", 0, [], {})
console.log("*********************");
printArgsInfo([1, 2], ["string", "array"], ["single value"])
console.log("*********************");
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {
    name: "Peter",
    age: 20
})
console.log("*********************");
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]])

//printArgsInfo.call()
//printArgsInfo.call(null, undefined, 17, {'N':205}, ["?", true], false);
//console.log("**********************");
//printArgsInfo.apply()
//printArgsInfo.apply(null, [null, undefined, 17, {'N':205}, ["?", true], false]);


