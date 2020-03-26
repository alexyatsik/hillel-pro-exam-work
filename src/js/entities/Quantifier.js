'use strict';

class Quantifier extends Element {
    constructor(name, parent) {
        super('div', parent); 
        const form = new Element('form', this);
        form.attr({
            'id': `${name}Form`
        });
        new Input(name, form)
        .attr({
            'placeholder': 'Quantity'
        });
    }
}