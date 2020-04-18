'use strict';

function init() {
    fetch('../../db.json')
        .then(res => {
            return res.json();
        })
        .then(res => {
            const db = res.data;
            addToLocalStorage('internetStorageDb', db.categories);
            const products = [];

            for (let key in db.categories) {
                for (let element of db.categories[key]) {
                    products.push(new Product(element, key));
                }
            }
            new ProductsList(products).init();


            const categoryObj = {};
            for(let key in db){
                categoryObj.category = db[key];
            }
            new Categories(categoryObj.category);
            // new Filter(categoryObj.category.computers); // Remove ".computers" later !
        })
        .catch(err => {
            console.log('rejected', err);
        })
}