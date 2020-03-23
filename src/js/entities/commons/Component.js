'use strict';

class Component extends Element {
    constructor(parent) {
        super('div', parent);

        this.addClass('component');
    }
}