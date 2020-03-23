'use strict';

class ProductsList extends Element {
    constructor(products) {
        super('div');
        this.addClass('product-list');

        this.products = products || [];
    }

    getHtml() {
        for (let i = 0; i < this.products.length; i++) {
            this.element.appendChild(this.products[i].listView());
        }

        return this.element;
    }
}

const data = {
    id: '123123',
    title: 'Custom Laptop Limited',
    price: '1000',
    iconPath: 'https://i.picsum.photos/id/985/200/300.jpg',
    imgPath: 'https://i.picsum.photos/id/924/200/300.jpg',
    characteristics: {
        cpu: 'Intel I-5',
        ram: '8Gb',
        hd: '120Gb'
    }
};

const myProduct = [
    new Product(data),
    new Product(data),
    new Product(data),
    new Product(data),
    new Product(data)
];

const myProductsList = new ProductsList(myProduct);

$('#products').appendChild(myProductsList.getHtml());