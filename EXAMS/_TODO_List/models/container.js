var todoList = todoList || {};

(function (scope) {
    function Container(title) {
        this.title = title;
    }

    Container.prototype.addToDOM = function (selector) {
        var wrapper = document.querySelector(selector);
        var heading = document.createElement('h2');
        var sections = document.createElement('section');
        var input = document.createElement('input');
        var addSectionButton = document.createElement('button');

        heading.innerHTML = this.title;
        sections.id = "sections";
        input.type = 'text';
        input.placeholder = 'Title';
        input.id = 'input-section';
        addSectionButton.innerHTML = "New section";
        addSectionButton.name = "addSectionButton";

        wrapper.appendChild(heading);
        wrapper.appendChild(sections);
        wrapper.appendChild(input);
        wrapper.appendChild(addSectionButton);
    };


    scope.createContainer = function (title) {
        return new Container(title);
    };

}(todoList));
