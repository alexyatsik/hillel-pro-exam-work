'use strict';

function windowHandler() {
    init();
}

function productsHandler() {
    if (
        event.target.parentElement.classList.contains('product') ||
        event.target.classList.contains('product')) {
            console.log(new Product().expandedView());
    }
}