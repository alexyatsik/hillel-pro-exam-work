'use strict';

import Element from './Element';

export default class Component extends Element {
    constructor(parent) {
        super('div', parent);

        this.addClass('component');
    }
}