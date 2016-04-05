function testContext() {
    console.log(this);
}

function anotherFunction() {
    testContext()
}

// 'this' refers to global context -> logs 'Window':
//testContext()

//same as calling from global scope: 'this' refers to global context -> logs 'Window':
//anotherFunction()

var testObject = {
    key: "Display all of me"
};

// logs the object testObject
//testContext.call(testObject);

//logs "testContext {}" - new instance of "testContext"
//new testContext();

var obj = {
    test: "shit",
    getTest: function () {
        return this.test
    }
}
// "this" refers to "obj" - the owner -> logs shit
console.log(obj.getTest())