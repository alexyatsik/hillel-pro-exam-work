'use strict';

import Categories from './entities/Categories';
import Product from './entities/Product';
import ProductsList from './entities/ProductsList';

import { addToLocalStorage } from './utils';
import dbJson from '../../db';

export default function init() {
    const db = dbJson.data;
    addToLocalStorage('internetStorageDb', db.categories);

    const products = [];

    for (let key in db.categories) {
        for (let element of db.categories[key]) {
            products.push(new Product(element, key));
        }
    }
    new ProductsList(products).init();
    new Categories();
}