'use strict';

class Quantifier extends Component {
    constructor(name, parent) {
        super(parent); 
        const form = new Element('form', this);
        form.attr({
            'id': `${name}Form`,
        });
        new Input(name, form)
        .attr({
            'placeholder': 'Quantity',
            'value': '1',
        });
    }
}