'use strict';

function windowHandler() {
<<<<<<< HEAD
    const cart = new Cart;
=======
    init();
}

function productHandler() {
    const db = getLocalStorage('internetStorageDb');
    for (let element of db[this.dataset.cat]) {
        if (element.id === this.dataset.id) {
            //new Modal(new Product(element).expandedView());
            console.log('Modal window must be called');
        }
    }
>>>>>>> 2502d29515588020b836293bceed01be069e0ec6
}