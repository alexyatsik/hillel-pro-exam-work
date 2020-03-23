'use strict';

const someSpan = new Element('span', $('#category'));
someSpan.html('Hello, World');
someSpan.attr({
    'attr': '11',
    'id': '12',
    'data-id': 'asdawd'
});

new Button('Test', $('#category'));