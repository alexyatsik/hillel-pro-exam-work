'use strict';

import Element from './commons/Element';
import { $nR } from '../utils';

export default class DeliveryConfirmed extends Element {
    constructor(firstName,lastName) {
        super('div', $nR('.modal-window__content'));
        this.showMessage(firstName,lastName);
    }

    showMessage =(firstName,lastName) =>{
        let text = new Element('div', this.element);
        text.addClass('final-message');
        text.html('go nahuy');
        text.html(`Dear ${firstName} ${lastName}, your order is processing, our support manager will contact you as soon as possiple.`);

    }

    init() {
        return this.element;
    }
}