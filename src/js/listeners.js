'use strict';

function windowHandler() {
    init();
}

function modalWindowCloseHandler(){
    $nD('.modal-window-wrapper');
    $nR('body').removeAttribute('class','body-modal-window');
}

function productHandler() {
    const db = getLocalStorage('internetStorageDb');
    for (let element of db[this.dataset.cat]) {
        if (element.id === this.dataset.id) {
            const currentItem = new Product(element);
            new Modal(currentItem.getTitle(), currentItem.expandedView());
        }
    }
}