var app = app || {};

(function (scope) {

        function Course(name, numberOfLectures) {

            this.setName(name);
            this.setNumberOfLectures(numberOfLectures);
        }

        Course.prototype.getName = function () {
            return this._name;
        };

        Course.prototype.setName = function (name) {
            var regex = /[a-zA-Z ]+/;

            if (!regex.test(name)) {
                throw new Error("Only letters and whitespace can be used in the name");
            }

            this._name = name;
        };

        Course.prototype.getNumberOfLectures = function () {
            return this._numberOfLectures;
        };

        Course.prototype.setNumberOfLectures = function (number) {

            var regex = /^\d+$/;

            //if (!regex.test(number)) {
            //    throw new Error("Only digits in the Number Of Lectures ");
            //}

            this._numberOfLectures = number;
        };

    scope.course = Course;

    return Course;

}(app));


