'use strict';

function windowHandler() {
    const cart = new Cart();
    init();
}

function modalWindowCloseHandler(){
    $nD('.modal-window-wrapper');
    document.body.classList.remove('body-modal-window');
}

function productHandler() {
    const db = getLocalStorage('internetStorageDb');
    for (let element of db[this.dataset.cat]) {
        if (element.id === this.dataset.id) {
            const currentItem = new Product(element, this.dataset.cat);
            new Modal(currentItem.getTitle(), currentItem.expandedView());
        }
    }
}

function productAddToCartHandler() {
    const form = document.forms.productQuantityForm;
    const userQuantity = document.forms.productQuantityForm.productQuantity.value;
    form.classList.remove('error');
    if (userQuantity <= 0) {
        form.classList.add('error');
        return;
    }

    const item = {
        id: this.parentElement.dataset.id,
        quantity: userQuantity
    }

    addItemToLocalStorage('cart', item);
    $nD('.modal-window-wrapper');
    document.body.classList.remove('body-modal-window');
}

function cartRemoveButtonHandler() {
    for (let i = 0; i < itemsInCart.length; i++) {
        if (this.dataset.id === itemsInCart[i].id) {
            itemsInCart.splice([i], 1);
            $nD(`tr[data-id="${this.dataset.id}"]`);
        }
    }
    console.log(itemsInCart);
}