var app = app || {};

(function (scope) {

        function Hall(name, capacity) {
            this.setName(name);
            this.setCapacity(capacity);
            this.parties = [];
            this.lectures = [];
        }

        Hall.prototype.getName = function () {
            return this._name;
        };

        Hall.prototype.setName = function (name) {
            var regex = /[a-zA-Z ]+/;

            if (!regex.test(name)) {
                throw new Error("Only letters and whitespace can be used in the name");
            }

            this._name = name;
        };

        Hall.prototype.getCapacity = function () {
            return this._capacity;
        };

        Hall.prototype.setCapacity = function (number) {

            var regex = /^\d+$/;

            if (!regex.test(number)) {
                throw new Error("Only digits in the Capacity ");
            }

            this._capacity = number;
        };
        Hall.prototype.addEvent = function (event) {
            this.parties.push(event);
        };

    scope.hall = Hall;

    return Hall;

}(app));

