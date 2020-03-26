'use strict';

function windowHandler() {
    $nR('body').classList.add('body-modal-window');
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
            //new Modal(new Product(element).expandedView());
            console.log('Modal window must be called');
        }
    }
}