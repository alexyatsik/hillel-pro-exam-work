'use strict';

class Button extends Element {
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