'use strict';

class Cart extends Element {
    constructor(parent) {
        super('div', $nR('#cart'))

        this.attr({'id': 'cart-wrap'});
        this.addClass('component', 'cart-wrap');

        this.createImageButton({
            'id': 'cart-image-button',
            'type': 'image',
            'src': 'src/images/cart-icon.png'
        }); 
        const imageButton = $nR('#cart-image-button');
        imageButton.addEventListener('click',this.showCartInterface);

        let itemsQuantity = 1;                                         // (FOR TESTING) items' quantity in the cart
        this.createImageCounterBox(itemsQuantity);                     // takes the value of items' quantity in the cart

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
        counterBox.html(itemsQuantity);                                 // takes the value of items' quantity in the cart
        if ((itemsQuantity === 0) || (itemsQuantity === undefined)) {
            counterBox.html('');
            $nR('#cart-counter').classList.remove('cart__counter-box');
        }
    }

    showCartInterface = () => {   
        let totalOrderSum = 0;

        const cartContent = new Element('div', $nR('#cart-wrap'));       // $nR('.modal-window') => $nR('#cart-wrap') = WTF ?!
        cartContent.addClass('cart__content-box');
        cartContent.attr({'id': 'cart-contentBox'});
                    
        const dataBase = getLocalStorage('internetStorageDb');

        const cartItemList = new Element('table', cartContent);
        cartItemList.attr({'id': 'cart-itemList'});
        cartItemList.addClass('cart__item-list');

        const cartHeadRow = new Element('tr', cartItemList);
        cartHeadRow.addClass('cart__cell--heading');

        const cartHeadProductName = new Element('th', cartHeadRow);
        cartHeadProductName.addClass('cart__cell--heading');
        cartHeadProductName.html('Product Name');

        const cartHeadProductQuantity = new Element('th', cartHeadRow);
        cartHeadProductQuantity.addClass('cart__cell--heading');
        cartHeadProductQuantity.html('Quantity');

        const cartHeadProductPrice = new Element('th', cartHeadRow);
        cartHeadProductPrice.addClass('cart__cell--heading');
        cartHeadProductPrice.html('Price');

        const cartHeadProductTotalPrice = new Element('th', cartHeadRow);
        cartHeadProductTotalPrice .addClass('cart__cell--heading');
        cartHeadProductTotalPrice.html('Total Price');

        // const totalOrderRow = new Element('tr', cartContent);
        // totalOrderRow.addClass('cart__item--total-order-sum');
        // totalOrderRow.html(`Total order price: ${totalOrderSum}`);

        const cartConfirmOrder = new Button('Checkout', cartContent);
        cartConfirmOrder.attr({'id': 'cart__order-button'});
        cartConfirmOrder.addClass('input-button');
        $nR('#cart__order-button').addEventListener('click', () => {
            new Form();
        })
        
        for (let i = 0; i < itemsInCart.length; i++) {
            const cartItemRow = new Element('tr', cartItemList);         // $nR('#cart-itemList')
            cartItemRow.attr({'data-id': `${itemsInCart[i].id}`})
            cartItemRow.addClass('cart__item-li');

            const cartItemCellName = new Element('td', cartItemRow);
            cartItemCellName.addClass('cart__item-cell--name');
            cartItemCellName.html(`${itemsInCart[i].name}`);

            const cartItemCellQuantity = new Element('td', cartItemRow);
            cartItemCellQuantity.addClass('cart__item-cell--quantity');

            const cartItemNumberSelector = new Element('input', cartItemCellQuantity);
            cartItemNumberSelector.attr({'id': `${itemsInCart[i].id}`, 'type': 'number', 'value': '2', 'min': '1'});
            cartItemNumberSelector.addClass('cart__input-quantity');

            const cartItemCellPrice = new Element('td', cartItemRow);
            cartItemCellPrice.addClass('cart__item-cell--price');
            cartItemCellPrice.html(`${itemsInCart[i].price}$`);

            itemsInCart[i].totalPrice = itemsInCart[i].price * $nR('.cart__input-quantity').value;

            const cartItemCellTotalPrice = new Element('td', cartItemRow);
            cartItemCellTotalPrice.addClass('cart__item-cell--total-price');
            cartItemCellTotalPrice.attr({'data-id': `${itemsInCart[i].id}`});
            cartItemCellTotalPrice.html(`${itemsInCart[i].totalPrice}$`);

            totalOrderSum += itemsInCart[i].totalPrice;     ///////////////////////////////////////

            const cartItemCellButton = new Element('td', cartItemRow);
            cartItemCellButton.addClass('cart__item-cell--button');

            const cartItemRemoveButton = new Button('Remove', cartItemCellButton);
            cartItemRemoveButton.addClass('input-button--service');
            cartItemRemoveButton.attr({'data-id': `${itemsInCart[i].id}`});
            
            cartItemRemoveButton.click(cartRemoveButtonHandler);
        }

        const totalOrderRow = new Element('tr', cartContent);                               ///////////////////////////////////////
        totalOrderRow.addClass('cart__item--total-order-sum');                              ///////////////////////////////////////
        totalOrderRow.html(`Total order price: ${totalOrderSum}`);                          ///////////////////////////////////////

        let inputsCollection = document.querySelectorAll('.cart__input-quantity');
        let itemTotalPriceCollection = document.querySelectorAll('.cart__item-cell--total-price');
       
        inputsCollection.forEach(item => {
            item.addEventListener('input', event => {                                  
                let target = event.target;
                let totalSum;
                let totalSumOrder = 0;

                itemsInCart.forEach(item => {
                    if (target.id === item.id) {
                        totalSum = item.price * target.value;
                        item.totalPrice = totalSum;
                    }
                    totalSumOrder += item.totalPrice;
                })

                totalOrderRow.html(`Total order price: ${totalSumOrder}`); 

                itemTotalPriceCollection.forEach(cell => {
                    if (target.id === cell.dataset.id) {
                        cell.innerHTML = `${totalSum}$`;
                    }
                })
            });
        });
        
        new Modal('Cart', cartContent.getElement());
    }
}