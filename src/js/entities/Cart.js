'use strict';

class Cart extends Element {
    constructor() {
        super('div', $nR('#cart'))

        $nD('#cart-image-button');

        this.attr({'id': 'cart-wrap'});
        this.addClass('component', 'cart-wrap');

        this.createImageButton({
            'id': 'cart-image-button',
            'type': 'image',
            'src': 'src/images/cart-icon.png'
        }); 
        const imageButton = $nR('#cart-image-button');
        imageButton.addEventListener('click',this.showCartInterface);

        this.createImageCounterBox();         
    }

    createImageButton(attributes) {
        let button = new Element('input', $nR('#cart-wrap'));
        button.attr(attributes);
        return button;
    }

    createImageCounterBox() {
        const itemsQuantity = getLocalStorage('cart').length;
        $nD('#cart-counter');
        const counterBox = new Element('div', $nR('#cart-wrap'));
        counterBox.addClass('cart__counter-box');
        counterBox.attr({'id': 'cart-counter'});
        counterBox.html(itemsQuantity);                         
    }

    createElementAttr(tagName,parent,className,attributes = null){
        const element = new Element(tagName, parent);  
        element.addClass(className);
        element.attr(attributes);
        return element;
    }

    showCartInterface = () => {   
        let totalOrderSum = 0;

        const cartContent = this.createElementAttr('div',$nR('#cart-wrap'),'cart__content-box',{'id': 'cart-contentBox'});
        const dataBase = getLocalStorage('internetStorageDb');
        const cartItemList = this.createElementAttr('table',cartContent,'cart__item-list',{'id': 'cart-itemList'});
        const cartHeadRow = this.createElementAttr('tr',cartItemList,'cart__cell--heading');
        const cartHeadProductName = this.createElementAttr('th',cartHeadRow,'cart__cell--heading');
        cartHeadProductName.html('Product Name');
        const cartHeadProductQuantity = this.createElementAttr('th',cartHeadRow,'cart__cell--heading');
        cartHeadProductQuantity.html('Quantity');
        const cartHeadProductPrice = this.createElementAttr('th',cartHeadRow,'cart__cell--heading');
        cartHeadProductPrice.html('Price');
        const cartHeadProductTotalPrice = this.createElementAttr('th',cartHeadRow,'cart__cell--heading');
        cartHeadProductTotalPrice.html('Total Price');

        const cartConfirmOrder = new Button('Checkout', cartContent);
        cartConfirmOrder.addClass('input-button');
        cartConfirmOrder.attr({'id': 'cart__order-button'});
        $nR('#cart__order-button').addEventListener('click', () => {
            new Modal('Checkout', new Form().init());
        })

        const itemsInCart = getLocalStorage('cart');
        
        for (let i = 0; i < itemsInCart.length; i++) {
            const cartItemRow = this.createElementAttr('tr', cartItemList,'cart__item-li',{'data-id': `${itemsInCart[i].id}`});
            const cartItemCellName = this.createElementAttr('td', cartItemRow,'cart__item-cell--name');
            cartItemCellName.html(`${itemsInCart[i].title}`);
            const cartItemCellQuantity = this.createElementAttr('td', cartItemRow,'cart__item-cell--quantity');
            const cartItemNumberSelector = this.createElementAttr('input', cartItemCellQuantity,'cart__input-quantity',{'id': `${itemsInCart[i].id}`, 'type': 'number', 'value': `${itemsInCart[i].quantity}`, 'min': '1'});
            const cartItemCellPrice = this.createElementAttr('td', cartItemRow,'cart__item-cell--price');
            cartItemCellPrice.html(`${itemsInCart[i].price}$`);
            itemsInCart[i].totalPrice = itemsInCart[i].price * $nR('.cart__input-quantity').value;
            const cartItemCellTotalPrice = this.createElementAttr('td', cartItemRow,'cart__item-cell--total-price',{'data-id': `${itemsInCart[i].id}`});
            cartItemCellTotalPrice.html(`${itemsInCart[i].totalPrice}$`);
            totalOrderSum += itemsInCart[i].totalPrice;     
            const cartItemCellButton = this.createElementAttr('td', cartItemRow,'cart__item-cell--button');
            const cartItemRemoveButton = new Button('Remove', cartItemCellButton);
            cartItemRemoveButton.addClass('input-button--service');
            cartItemRemoveButton.attr({'data-id': `${itemsInCart[i].id}`});
            cartItemRemoveButton.click(cartRemoveButtonHandler);
        }

        const totalOrderRow = this.createElementAttr('tr', cartContent,'cart__item--total-order-sum');
        totalOrderRow.html(`Total order price: ${totalOrderSum}`);                          

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