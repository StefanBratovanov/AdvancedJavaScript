function createParagraph(id, text) {
    var parent = document.getElementById(id);
    var paragraph = document.createElement('p');

    if (parent) {
        paragraph.innerText = text;
        parent.appendChild(paragraph);
    }
    else{
        console.log("no such element with id: " + id);
    }
}

createParagraph('wrapper', 'JS shait')
createParagraph('wrapper', 'Gimme some more Shit')
createParagraph('oi', 'OiOiOi')