var models = models || {};

(function (scope) {
    function Section(title) {
        this.title = title;
        this._items = [];
        this.id = 0;
    }


    Section.prototype.addItem = function (item) {
        this._items.push(item);
    }

    Section.prototype.getItems = function () {
        return this._items;
    }

    Section.prototype.addToDOM = function (selector) {
        var self = this;
        var sectonsWrapper = document.querySelector(selector);
        var section = document.createElement('section');
        var sectionTitle = document.createElement('h2');

        sectionTitle.innerText = this.title;
        section.appendChild(sectionTitle);

        //Add items
        var ul = document.createElement('ul');
        section.appendChild(ul);
        this._items.forEach(function (item) {
            item.addToDOM(ul);
        });

        var itemInput = document.createElement('input');
        itemInput.setAttribute('type', 'text');
        itemInput.setAttribute('class', 'item-input');

        var itemButton = document.createElement('button');
        itemButton.setAttribute('class', 'item-button');
        itemButton.innerText = 'Add item';

        section.appendChild(itemInput);
        section.appendChild(itemButton);

        sectonsWrapper.appendChild(section);

        itemButton.addEventListener('click', function (ev) {
            var content = this.parentElement.getElementsByClassName('item-input')[0].value;
            var item = new scope.Item(content);
            self.addItem(item);
            var ul = this.parentElement.getElementsByTagName('ul')[0];

            item.addToDOM(ul)
        })
    }

    scope.Section = Section;

}(models));