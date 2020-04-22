'use strict';

import Component from './commons/Component';
import Element from './commons/Element';
import Product from './Product';
import ProductsList from './ProductsList';

import { $nR, capitalize, getLocalStorage, $nD } from '../utils';

export default class Filter extends Component {
    constructor(category) {
        super($nR('#filter'));
        $nD('#filter-component');
        this.addClass('filter');
        this.attr({
            'id': 'filter-component'
        });

        this.currentCategory = category;
        this.categoryProducts = this.getCategoryProducts(category);

        this.init();
        this.showFilters();

        this.click(() => {
            if (event.target.classList.contains('filter-item__value')) {
                event.target.classList.toggle('clicked-filter');
                this.init();
            }
        });
    }

    getCategoryProducts(category) {
        const db = getLocalStorage('internetStorageDb');
        for (let key in db) {
            if (key = category) {
                return db[key];
            }
        }
    }

    init() {
        const productList = [];
        const clicked = document.querySelectorAll('li.clicked-filter');
        if (!clicked.length) {
            for (let elem of this.categoryProducts) {
                productList.push(new Product(elem, this.currentCategory));
            }
        } else {

            const clickedFilters = [];
            for (let i = 0; i < clicked.length; i++) {
                clickedFilters.push({
                    [clicked[i].parentElement.parentElement.previousElementSibling.textContent.toLowerCase()]: clicked[i].textContent 
                });
            }

            const clikedProducts = this.getFilteredProducts(clickedFilters);

            for (let elem of clikedProducts) {
                productList.push(new Product(elem, this.currentCategory));
            }
        }
        
        new ProductsList(productList).init();
    }

    

    getFilteredProducts(filters) {
        const arr = new Set();

        for (let filter of filters) {
            for (let key in filter) {
                for (let elem of this.categoryProducts) {
                    if (elem.characteristics[key] === filter[key]) {
                        arr.add(elem);
                    }
                }
            }
        }

        return Array.from(arr);
    }

    getUniqueCharacteristics() {
        const characteristics = new Set();
        for (let elem of this.categoryProducts) {
            for (let key in elem.characteristics) {
                characteristics.add(key);
            }
        }
        
        return Array.from(characteristics);
    }

    getFilters(characteristic) {
        const filters = new Set();
        for (let elem of this.categoryProducts) {
            filters.add(elem.characteristics[characteristic]);
        }

        return Array.from(filters);
    }

    showFilters() {
        const characteristics = this.getUniqueCharacteristics();
        const ul = new Element('ul', this.element);
        ul.addClass('filter-item__list');
        for (let elem of characteristics) {
            const uniqueFiltersList = this.getFilters(elem);

            const title = new Element('li', ul);
            title.html(capitalize(elem));
            title.addClass('filter-item__head');

            const filters = new Element('li', ul);
            const filtersList = new Element('ul', filters);
            filtersList.addClass('filter-item__list');
            for (let elem of uniqueFiltersList) {
                const li = new Element('li', filtersList);
                li.addClass('filter-item__value');
                li.html(capitalize(elem));
            }
        }
    }
}