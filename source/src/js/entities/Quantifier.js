'use strict';

import Component from './commons/Component';
import Element from './commons/Element';
import Input from './commons/Input';

export default class Quantifier extends Component {
    constructor(name, parent) {
        super(parent); 
        const form = new Element('form', this);
        form.attr({
            'id': `${name}Form`
        });
        new Input(name, form)
        .attr({
            'placeholder': 'Quantity',
            'value': '1',
        });
    }
}