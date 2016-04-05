require.config({
    paths: {
        factory: 'factory',
        container: 'container',
        section: 'section',
        item: 'item',
        containers: 'containers'
    }
});

require(['factory', 'containers'], function (factory, containers) {
    var button = document.getElementById('new-container');

    button.addEventListener('click', function () {
        var name = document.getElementById('container-name').value,
            container = factory('container', name);
        
        containers.push(container);
        container.addToDom();
    });
});