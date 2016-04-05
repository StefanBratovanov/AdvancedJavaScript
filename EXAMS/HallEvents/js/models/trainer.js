var app = app || {};

(function (scope) {

    function Trainer(name, workHours) {
        scope.employee.call(this, name, workHours);

        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.extend(scope.employee);

    Trainer.prototype.addFeedback = function (feedback) {
        if (feedback.substring) {
            this.feedbacks.push(feedback);
        }
        else {
            throw new Error("The feedback is not string.");
        }
    };


    Trainer.prototype.addCourse = function (course) {
        //if (!(course instanceof Course )) {
        //    throw new Error("Invalid Organiser object");
        //}

        this.courses.push(course);
    };

    scope.trainer = Trainer;
    return Trainer;

}(app));

