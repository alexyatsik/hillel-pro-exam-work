'use strict';

function $nR(selector) {
    const elem = document.querySelector(selector);

    return elem || false;
}

function $nD(selector) {
    const elem = $nR(selector);
    if (elem) {
        elem.remove();
    }
}

function getLocalStorage(lsName) {
    return JSON.parse(localStorage.getItem(lsName)) || false;
}

function addToLocalStorage(lsName, item) {
    localStorage.setItem(lsName, JSON.stringify(item));
}

function addItemToLocalStorage(lsName, item) {
    let db = getLocalStorage(lsName);
    if (!db) {
        db = [item];
    } else {
        for (let element of db) {
            if (element.id === item.id) {
                element.quantity = parseInt(element.quantity) + parseInt(item.quantity);
                addToLocalStorage(lsName, db);
                return;
            } 
        }
        db.push(item);
    }
    addToLocalStorage(lsName, db);
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const itemsInCart = [                                           // (FOR TESTING) items that get to the cart
    { id: '123', name: 'Custom Laptop Limited', price: '1000' },
    { id: '124', name: 'Custom Camera 100500GPX', price: '1000' },
];