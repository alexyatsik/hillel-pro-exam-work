'use strict';

//import Product from './entities/Product';
//import ProductsList from './entities/ProductsList';
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

/*function init_old() {
    fetch('../../db.json')
        .then(res => {
            return res.json();
        })
        .then(res => {
            const db = res.data;
            addToLocalStorage('internetStorageDb', db.categories);
            /*const products = [];

            for (let key in db.categories) {
                for (let element of db.categories[key]) {
                    products.push(new Product(element, key));
                }
            }
            new ProductsList(products).init();*//*

            const categoryObj = {};
            for(let key in db){
                categoryObj.category = db[key];
            }
            new Categories(categoryObj.category);
        })
        .catch(err => {
            console.log('rejected', err);
        })
}*/