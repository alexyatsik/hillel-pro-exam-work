'use strict';

class Input extends Element {
    constructor(name, parent) {
        super('input', parent);

        this.attr({
            'type': 'text',
            'name': name
        });
    }
}