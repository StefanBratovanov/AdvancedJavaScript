var app = app || {};

(function (scope) {

        function Lecture(options) {
            scope._Event.call(this, options);

            this.setCourse(options.course);
            this.setTrainer(options.trainer);
        }

        Lecture.extend(scope._Event);

        Lecture.prototype.getCourse = function () {
            return this._course;
        };

        Lecture.prototype.setCourse = function (course) {
            var courseObj = new scope.course(course);

            //if (!(courseObj instanceof Course)) {
            //    throw new Error("Invalid Course object");
            //}

            this._course = course;
        };

        Lecture.prototype.getTrainer = function () {
            return this._trainer;
        };

        Lecture.prototype.setTrainer = function (trainer) {
            //var setTrainerObj = new Trainer(trainer);

            //if (!(setTrainerObj instanceof Trainer)) {
            //    throw new Error("Invalid Trainer object");
            //}

            this._trainer = trainer;
        };


    scope.lecture = Lecture;
    return Lecture;

}(app));


