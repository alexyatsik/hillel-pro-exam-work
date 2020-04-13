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
        imageButton.addEventListener('click', this.showCartInterface);

        let itemsQuantity;                                              // (FOR TESTING) items' quantity in the cart
        this.createImageCounterBox(itemsQuantity);                      // takes the value of items' quantity in the cart
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

    showCartInterface(itemsQuantity) {   
        const cartContent = new Element('div', $nR('#cart-wrap'));      // $nR('.modal-window') => $nR('#cart-wrap') = WTF ?!
        cartContent.addClass('cart__content-box');
        cartContent.attr({'id': 'cart-contentBox'});
                  
        // const itemsInCart = [                                           // (FOR TESTING) items that get to the cart
        //     { id: '123', name: 'Custom Laptop Limited', price: '1000' },
        //     { id: '124', name: 'Custom Camera 100500GPX', price: '1000' },
        // ];                     

        const dataBase = getLocalStorage('internetStorageDb');

        const cartItemList = new Element('table', cartContent);
        cartItemList.attr({'id': 'cart-itemList'});
        cartItemList.addClass('cart__item-list');

        for (let i = 0; i < itemsInCart.length; i++) {
            const cartItemRow = new Element('tr', cartItemList);        // $nR('#cart-itemList')
            cartItemRow.attr({'data-id': `${itemsInCart[i].id}`})
            cartItemRow.addClass('cart__item-li');

            const cartItemCellName = new Element('td', cartItemRow);
            cartItemCellName.addClass('cart__item-cell--name');
            cartItemCellName.html(`${itemsInCart[i].name}`);

            const cartItemCellQuantity = new Element('td', cartItemRow);
            cartItemCellQuantity.addClass('cart__item-cell--quantity');
            const cartItemNumberSelector = new Element('input', cartItemCellQuantity);
            cartItemNumberSelector.attr({'id': `${itemsInCart[i].id}`, 'type': 'number', 'value': '1', 'min': '1'});
            cartItemNumberSelector.addClass('cart__input-quantity');

            const cartItemCellPrice = new Element('td', cartItemRow);
            cartItemCellPrice.addClass('cart__item-cell--price');
            cartItemCellPrice.html(`${itemsInCart[i].price} $`);

            const cartItemCellButton = new Element('td', cartItemRow);
            cartItemCellButton.addClass('cart__item-cell--button');

            const cartItemRemoveButton = new Button('Remove', cartItemCellButton);
            cartItemRemoveButton.addClass('input-button--service');
            cartItemRemoveButton.attr({'data-id': `${itemsInCart[i].id}`});
            // console.log(itemsInCart[i].id);
            
            cartItemRemoveButton.click(cartRemoveButtonHandler);
        }

        // for (let i = 0; i < itemsInCart.length; i++) {                                       // ХУЛИ НЕ РАБОТАЕТ?
        //     const cartItemListLi = new Element('li', $nR('#cart-itemList'));                 // ХУЛИ НЕ РАБОТАЕТ?
        //     cartItemListLi.addClass('cart__item-li');                                        // ХУЛИ НЕ РАБОТАЕТ?
        //     for (let key in itemsInCart[i]) {                                                // ХУЛИ НЕ РАБОТАЕТ?
        //         const cartItemListSpan = new Element('span', cartItemListLi.getElement());   // ХУЛИ НЕ РАБОТАЕТ?
        //         cartItemListSpan.html(`${key} : ${element[key]}`);                           // ХУЛИ НЕ РАБОТАЕТ?
        //     }                                                                                // ХУЛИ НЕ РАБОТАЕТ?
        // });                                                                                  // ХУЛИ НЕ РАБОТАЕТ?

        // itemsInCart.forEach(element => {                                                     // ХУЛИ НЕ РАБОТАЕТ?
        //     const cartItemListLi = new Element('li', $nR('#cart-itemList'));                 // ХУЛИ НЕ РАБОТАЕТ?
        //     cartItemListLi.addClass('cart__item-li');                                        // ХУЛИ НЕ РАБОТАЕТ?
        //     itemsQuantity++;                                                                 // ХУЛИ НЕ РАБОТАЕТ?
        //     console.log(element);                                                            // ХУЛИ НЕ РАБОТАЕТ?
        //     for (let key in element) {                                                       // ХУЛИ НЕ РАБОТАЕТ?
        //         const cartItemListSpan = new Element('span', $nR('li'));                     // ХУЛИ НЕ РАБОТАЕТ?
        //         cartItemListSpan.html(`${key} : ${element[key]}`);                           // ХУЛИ НЕ РАБОТАЕТ?
        //     }                                                                                // ХУЛИ НЕ РАБОТАЕТ?
        // });                                                                                  // ХУЛИ НЕ РАБОТАЕТ?
        
        new Modal('Cart', cartContent.getElement());
    }
}

// 1. Вытаскиваем инфу про товары в корзине
// 2. Вытаскиваем из ЛокалСториджа базу данных
// 3. Запускаем циклб который сравнивает id текущего товара с id товарами 
// - первый цикл находит товар
// - второрй подставляет
// забираем имяб цена и кол-во из корзины => формируем обьект, с которого спиздим инфу и выводим на его основе инфу куда-то

// формируем div, в котором будет выводиться инфа ^
// в нем li 

// const characteristics = new Element('ul', this.element);
// for (let key in this.dataObj.characteristics) {
//     new Element(
//         'li', 
//         characteristics.getElement()
//     ).html(
//         `${capitalize(key)} : ${this.dataObj.characteristics[key]}.`
//     );
// }