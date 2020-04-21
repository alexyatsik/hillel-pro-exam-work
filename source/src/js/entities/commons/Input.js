'use strict';

import Element from './Element';

export default class Input extends Element {
    constructor(name, parent) {
        super('input', parent);

        this.attr({
            'type': 'text',
            'name': name
        });
    }
}