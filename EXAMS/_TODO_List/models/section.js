var todoList = todoList || {};

(function (scope) {
    function Section(title) {
        this.title = title;
    }

    Section.prototype.addToDOM = function (selector) {

    };


    scope.createSection = function (title) {
        return new Section(title);
    };

}(todoList));