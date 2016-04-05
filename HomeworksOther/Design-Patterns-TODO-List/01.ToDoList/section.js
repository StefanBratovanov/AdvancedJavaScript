var toDoList = toDoList || {};

(function (scope) {
    function checkTitle(title) {
        if (!title) {
            throw new Error('The section should have a title');
        }
    }

    function Section(title) {
        checkTitle(title);
        this._title = title;
        this._item = scope._createItem('internal');
    }

    Section.prototype.getElement = function () {
        var section = document.createElement('section'),
            div = document.createElement('div'),
            heading = document.createElement('h2'),
            input = document.createElement('input'),
            button = document.createElement('button');

        heading.innerHTML = this._title;
        div.className = 'listContainer';

        input.type = 'text';
        input.placeholder = 'Add item...';
        input.name = 'itemName';

        button.innerHTML = '+';
        button.name = 'addItemButton';
        button.addEventListener('click', this._item.addToDOM);
        button.addEventListener('click', function (){
            input.value = '';
        });

        div.appendChild(heading);
        section.appendChild(div);
        section.appendChild(input);
        section.appendChild(button);

        this._element = section;
    };

    Section.prototype.addToDOM = function(event) {
        var parent = event.target.parentNode,
            title = parent.querySelector('input[name=section]').value,
            wrapper = document.querySelector('#section-wrapper'),
            section = new Section(title);

        Section.prototype.getElement.call(section);

        wrapper.appendChild(section._element);
        wrapper.style.border = '1px solid black';
    };

    scope._createSection = function (title) {
        return new Section(title);
    }

})(toDoList);