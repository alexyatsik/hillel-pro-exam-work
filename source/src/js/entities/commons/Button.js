'use strict';

import Element from './Element';

export default class Button extends Element {
    constructor(value, parent) {
        super('input', parent);

        this.value = value;
        this.attr({
            'type': 'button',
            'value': this.value
        });
        this.addClass('input-button');
    }
}