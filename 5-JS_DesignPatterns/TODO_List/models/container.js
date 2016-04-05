var models = models || {};

(function (scope) {
    function Container(title) {
        this.title = title;
        this._sections = [];

    }

    Container.prototype.addSection = function (section) {
        this._sections.push(section);
    }

    Container.prototype.getSections = function () {
        return this._sections;
    }

    Container.prototype.addToDOM = function (selector) {
        var wrapper = document.querySelector(selector),
            container = document.createElement('div'),
            h1Title = document.createElement('h1'),
            footer = document.createElement('footer'),
            sectionInput = document.createElement('input'),
            sectionButton = document.createElement('button'),
            self = this;

        
        container.setAttribute('id', 'container');

        h1Title.innerHTML = this.title;
        container.appendChild(h1Title);

        var divSections = document.createElement('div');
        divSections.setAttribute('id', 'sections');
        container.appendChild(divSections);
        //Add sections
        this._sections.forEach(function (section) {
            section.addToDOM('#sections');
        });


        sectionInput.setAttribute('type', 'text');
        sectionInput.setAttribute('id', 'section-input');

        sectionButton.setAttribute('id', 'section-button');
        sectionButton.innerText = 'Add section';

        footer.appendChild(sectionInput);
        footer.appendChild(sectionButton);

        container.appendChild(footer);
        wrapper.appendChild(container);

        sectionButton.addEventListener('click', function (ev) {
            var sectionTitle = document.getElementById('section-input').value,
                section = new scope.Section(sectionTitle);

            self.addSection(section);
            section.addToDOM('#sections');
        });
        
        wrapper.addEventListener('change', function (ev) {
            ev.target
        })
    }

    scope.Container = Container;

}(models));