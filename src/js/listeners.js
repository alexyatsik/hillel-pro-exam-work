'use strict';

function windowHandler() {
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
}