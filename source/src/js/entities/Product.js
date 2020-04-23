'use strict';

import Component from './commons/Component';
import Element from './commons/Element';
import Button from './commons/Button';
import Quantifier from './Quantifier';

import { productHandler, productAddToCartHandler, callFeedbacksHandler } from '../listeners';
import { capitalize } from '../utils';

export default class Product extends Component {
    constructor(dataObj, category) {
        super();
        this.dataObj = dataObj;
        this.category = category;

        this.element.dataset.id = this.dataObj.id;
        this.element.dataset.cat = this.category;
        this.element.dataset.title = this.dataObj.title;
        this.element.dataset.price = this.dataObj.price;
    }

    listView() {
        this.addClass('product');
        this.click(productHandler);

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

        const cardContentWrap = new Element('div', this.element);
        cardContentWrap.addClass('card-content-wrap');

        const img = new Element('img', cardContentWrap);
        img.attr({
            'src': this.dataObj.imgPath,
            'alt': `${this.title} image`,
            'class': 'card-image',
        });

        const cardDescriptionWrap = new Element('div', cardContentWrap);
        cardDescriptionWrap.addClass('card-description-wrap');

        const characteristics = new Element('ul', cardDescriptionWrap);
        characteristics.addClass('card-characteristics');

        for (let key in this.dataObj.characteristics) {
            new Element(
                'li', 
                characteristics.getElement()
            ).html(
                `${capitalize(key)} : ${this.dataObj.characteristics[key]}.`
            );
        }

        const price = new Element('span', cardDescriptionWrap);
        price.html(`Price: ${this.dataObj.price}$`);
        price.addClass('card-price');

        const quatifier = new Element('p', cardDescriptionWrap);
        quatifier.html('Quantity: ');
        new Quantifier('productQuantity', quatifier);

        const feedbacks = new Button('Feedbacks', cardDescriptionWrap);
        feedbacks.attr({
            'data-id': this.dataObj.id,
            'data-cat': this.category,
            'data-title': this.getTitle()
        });
        feedbacks.click(callFeedbacksHandler);
        
        const addButton = new Button('Add to cart', this.element);
        addButton.addClass('add-button');
        addButton.click(productAddToCartHandler);
        return this.element;
    }

    getTitle() {
        return this.dataObj.title;
    }
}

