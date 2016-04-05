var app = app || {};

(function (scope) {

        function Employee(name, workHours) {
            this.setName(name);
            this.setWorkHours(workHours);
        }

        Employee.prototype.getName = function () {
            return this._name;
        };

        Employee.prototype.setName = function (name) {
            var regex = /[a-zA-Z ]+/;

            if (!regex.test(name)) {
                throw new Error("Only letters and whitespace can be used in the name");
            }

            this._name = name;
        };

        Employee.prototype.getWorkHours = function () {
            return this._workHours;
        };

        Employee.prototype.setWorkHours = function (number) {

            var regex = /^\d+$/;

            if (!regex.test(number)) {
                throw new Error("Only digits in the work hours ");
            }

            this._workHours = number;
        };

    //scope._Employee = Employee;
    scope.employee = Employee;

    return Employee;

}(app));

