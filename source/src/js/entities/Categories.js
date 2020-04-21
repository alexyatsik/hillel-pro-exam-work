'use strict';

import Element from './commons/Element';
import Component from './commons/Component';
import Filter from './Filter';

import { $nR, capitalize, getLocalStorage } from '../utils';

export default class Categories extends Component {
    constructor() {
        super($nR('#category'));
        this.addClass('categories');
        this.availableCategories = this.getAvailableCategories();

        this.createCategoryList();
    }

    getAvailableCategories() {
        const db = getLocalStorage('internetStorageDb');
        const availableCategories = [];
        for (let key in db) {
            availableCategories.push(key);
        }
        return availableCategories;
    }

    createCategoryList() {
        const categoryList = new Element('ul', this.element);
        categoryList.addClass('categories__list');
        categoryList.click(() => {
            new Filter(event.target.textContent.toLowerCase());
        });

        for (let elem of this.availableCategories) {
            const li = new Element('li', categoryList);
            li.addClass('categories__item-li');
            li.html(capitalize(elem));
        }
    }
}