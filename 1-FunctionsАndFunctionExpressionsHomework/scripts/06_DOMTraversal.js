function traverse(selector) {
    var element = document.querySelector(selector);
    var result = "";

    traverseNode(element, "");

    function traverseNode(node, spacing) {
        spacing = spacing || "\t";
        result += spacing + node.nodeName.toLocaleLowerCase() + ": ";

        for (var i = 0; i < node.attributes.length; i++) {
            result += node.attributes[i].name + "=\"" + node.attributes[i].value + "\" ";
        }

        result += "\n";

        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + "\t");
            }
        }
    }

    console.log(result);
}

var selector = ".birds";
traverse(selector);
console.log('**********************');
var selector = ".mammals";
traverse(selector);