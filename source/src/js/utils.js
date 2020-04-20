'use strict';

export function $nR(selector) {
    const elem = document.querySelector(selector);

    return elem || false;
}

export function $nD(selector) {
    const elem = $nR(selector);
    if (elem) {
        elem.remove();
    }
}

export function getLocalStorage(lsName) {
    return JSON.parse(localStorage.getItem(lsName)) || false;
}

export function addToLocalStorage(lsName, item) {
    localStorage.setItem(lsName, JSON.stringify(item));
}

export function addItemToCartInLS(lsName, item) {
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

export function deleteItemFromLS(lsName, id) {
    const db = getLocalStorage(lsName);

    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            db.splice(i, 1);
            break;
        }
    }

    addToLocalStorage(lsName, db);
}

export function addItemToFeedbacksInLS(itemId, feedback) {
    const DB_NAME = 'feedbacks'
    const composedFeedback = { 
        id: itemId,
        feedbacks: [feedback]
    }
    let db = getLocalStorage(DB_NAME);

    if (!db) {
        db = [composedFeedback];
    } else {
        let isNew = true;
        for (let element of db) {
            if (element.id === itemId) {
                isNew = false;
                element.feedbacks.push(feedback);
                break;
            } 
        }
        if (isNew) {
            db.push(composedFeedback);
        }
    }
    addToLocalStorage(DB_NAME, db);
}

/*export function db(action, item) {
    //const fs = require('fs');

    switch (action) {
        case 'get':
            return fs.readFile('../fb.json');
        case 'post':
            fs.appendFile('../fb.json', item);
            break;
    }
}*/

export function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}