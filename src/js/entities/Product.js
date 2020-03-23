'use strict';

class Product extends Element {
    constructor(dataObj) {
        super('div');
        this.dataObj = dataObj;
    }

    listView() {
        const img = new Element('img', this.element);
        img.attr({
            'src': this.dataObj.iconPath,
            'alt': `${this.dataObj.title} icon`
        });

        const price = new Element('span', this.element);
        price.html(`$${this.dataObj.price}`);

        const title = new Element('span', this.element);
        title.html(`${this.dataObj.title}`);

        return this.element;
    }

    expandedView() {
        const img = new Element('img', this.element);
        img.attr({
            'src': this.dataObj.imgPath,
            'alt': `${this.title} image`
        });

        const title = new Element('span', this.element);
        title.html(`${this.dataObj.title}`);

        const characteristics = new Element('ul', this.element);
        for (let key in this.dataObj.characteristics) {
            new Element('li', characteristics.getElement()).html(`${key.toUpperCase()} : ${this.dataObj.characteristics[key]}.`)
        }

        const price = new Element('span', this.element);
        price.html(`$${this.dataObj.price}`);

        return this.element;
    }
}

const data = {
    title: 'Custom Laptop Limited',
    price: '1000',
    iconPath: 'https://i.picsum.photos/id/985/200/300.jpg',
    imgPath: 'https://i.picsum.photos/id/924/200/300.jpg',
    characteristics: {
        cpu: 'Intel I-5',
        RAM: '8Gb',
        HD: '120Gb'
    }
};

const myProduct = new Product(data);
$('#products').appendChild(myProduct.expandedView());