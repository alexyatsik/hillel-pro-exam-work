'use strict';

function windowHandler() {
    init();
}

function productsHandler() {
    if (event.target.parentElement.classList.contains('product')) {
            console.log(event.target.parentElement.dataset.id);
    }

    if (event.target.classList.contains('product')) {
        console.log(event.target.dataset.id);
    }
}