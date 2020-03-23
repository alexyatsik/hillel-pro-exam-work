'use strict';

class ProductsList extends Element {
    constructor(products) {
        super('div');
        this.products = products || [];
    }
}