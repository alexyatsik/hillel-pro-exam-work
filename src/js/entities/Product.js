'use strict';

class Product extends Element {
    constructor(dataObj, category) {
        super('div');
        this.dataObj = dataObj;
        this.category = category;

        this.addClass('product');
        this.element.dataset.id = this.dataObj.id;
        this.element.dataset.cat = this.category;
        this.click(productHandler);
    }

    listView() {
        const img = new Element('img', this.element);
        img.attr({
            'src': this.dataObj.iconPath,
            'alt': `${this.dataObj.title} icon`
        });
        img.addClass('product__image');

        const price = new Element('span', this.element);
        price.html(`$${this.dataObj.price}`);
        price.addClass('product__price');

        const title = new Element('span', this.element);
        title.html(`${this.dataObj.title}`);
        title.addClass('product__title');

        const wrapper = new Element('div').getElement();
        this.append(wrapper);

        return wrapper;
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
            new Element('li', characteristics.getElement()).html(`${capitalize(key)} : ${this.dataObj.characteristics[key]}.`)
        }

        const price = new Element('span', this.element);
        price.html(`$${this.dataObj.price}`);

        return this.element;
    }
}

