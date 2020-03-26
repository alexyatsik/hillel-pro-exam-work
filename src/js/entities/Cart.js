'use strict';

class Cart extends Element {
    constructor(parent) {
        super('div', $nR('#cart'))

        // this.append($nR('#cart'));
        this.attr({'id': 'cart-wrap'});
        this.addClass('component', 'cart-wrap');

        this.createImageButton({
            'id': 'cart-image-button',
            'type': 'image',
            'src': 'src/images/cart-icon.png'
        }); 
        const imageButton = $nR('#cart-image-button');
        imageButton.addEventListener('click', this.showCartInterface);

        let itemsQuantity = 3;                       // (FOR TESTING) items' quantity in the cart
        this.createImageCounterBox(itemsQuantity);   // takes the value of items' quantity in the cart
    }

    createImageButton(attributes) {
        let button = new Element('input', $nR('#cart-wrap'));
        button.attr(attributes);
        return button;
    }

    createImageCounterBox(itemsQuantity) {
        const counterBox = new Element('div', $nR('#cart-wrap'));
        counterBox.addClass('cart__counter-box');
        counterBox.attr({'id': 'cart-counter'});
        counterBox.html(itemsQuantity);             // takes the value of items' quantity in the cart
        if ((itemsQuantity === 0) || (itemsQuantity === undefined)) {
            counterBox.html('');
            $nR('#cart-counter').classList.remove('cart__counter-box');
        }
    }

    showCartInterface() {
        console.log('Hello There');
    }
}