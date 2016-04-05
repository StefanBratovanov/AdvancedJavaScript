var toDoList = toDoList || {};

(function (scope) {
    function Container(title) {
        this._title = title;
        this._section = scope._createSection('internal');
    }

    Container.prototype.getElement = function () {
        var container = document.createElement('section'),
            heading = document.createElement('h1'),
            sectionWrapper = document.createElement('section'),
            input = document.createElement('input'),
            button = document.createElement('button');

        heading.innerHTML = this._title;
        sectionWrapper.id = 'section-wrapper';
        container.id = 'list-wrapper';

        input.type = 'text';
        input.placeholder = 'Title';
        input.name = 'section';

        button.innerHTML = 'New section';
        button.addEventListener('click', this._section.addToDOM);
        button.addEventListener('click', function (){
            input.value = '';
        });


        container.appendChild(heading);
        container.appendChild(sectionWrapper);
        container.appendChild(input);
        container.appendChild(button);

        this._element = container;
    };

    Container.prototype.addToDOM = function () {
        var body = document.body;
        this.getElement();

        body.appendChild(this._element);
    };

    scope._createToDoList = function (title) {
        return new Container(title);
    }

})(toDoList);

