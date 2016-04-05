function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = firstName + " " + lastName;
    return this;
}

var person = new Person("Peter", "Jackson");

console.log(person.firstName);
console.log(person.lastName);
console.log(person.name);
