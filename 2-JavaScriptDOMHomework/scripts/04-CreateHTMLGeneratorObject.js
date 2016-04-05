HTMLGenerator = {
    createParagraph: function (id, text) {
        var parent = document.getElementById(id);
        var paragraph = document.createElement('p');

        if (parent) {
            paragraph.innerText = text;
            parent.appendChild(paragraph);
        } else {
            console.log("no such element with id: " + id);
        }
    },
    createDiv: function (id, divClass) {
        var parent = document.getElementById(id);
        var div = document.createElement("div");
        
        if (parent) {
            div.className = divClass;
            parent.appendChild(div);
        }
    },
    createLink: function createLink(id, text, url) {
        var parent = document.getElementById(id);
        var link = document.createElement("a");
        
        if (parent) {
            link.innerText = text;
            link.href = url;
            parent.appendChild(link);
        }
    }
}

HTMLGenerator.createParagraph('wrapper', 'JS JS JS');
HTMLGenerator.createDiv('wrapper', 'section');
HTMLGenerator.createDiv('rocker', 'section');
HTMLGenerator.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
