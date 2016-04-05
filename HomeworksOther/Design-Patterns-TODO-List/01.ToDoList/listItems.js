var toDoList = toDoList || {};

(function (scope) {
    function checkContent(content) {
        if (!content) {
            throw new Error('The item should have content');
        }
    }

    function Item(content) {
        checkContent(content);
        this._content = content;
    }

    Item.prototype.getElement = function () {
        var div = document.createElement('div'),
            checkbox = document.createElement('input'),
            label = document.createElement('label');

        checkbox.type = 'checkbox';

        label.innerHTML = this._content;

        div.appendChild(checkbox);
        div.appendChild(label);

        this._element = div;
    };

    Item.prototype.addToDOM = function (event) {
        var parent = event.target.parentNode,
            title = parent.querySelector('input[name=itemName]').value,
            container = parent.querySelector('.listContainer'),
            item = new Item(title),
            previous;

        previous = container.lastElementChild.lastElementChild;
        if (previous) {
            previous.style.borderBottom = '1px solid black';
        }

        item.getElement();

        container.appendChild(item._element);
    };

    scope._createItem = function (content) {
        return new Item(content);
    }
})(toDoList);