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

            const filters = [];
            for(let key in db.categories){
                for(let elem of db.categories[key]){
                    const characteristics = elem.characteristics;
                    filters.push(characteristics)
                }
            }
            new Filter(filters).init();
        })
        .catch(err => {
            console.log('rejected', err);
        })
}