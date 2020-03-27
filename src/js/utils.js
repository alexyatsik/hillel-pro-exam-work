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

function addItemToCartInLS(lsName, item) {
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

function addItemToFeedbacksInLS(itemId, feedback) {
    const DB_NAME = 'feedbacks'
    let db = getLocalStorage(DB_NAME);
    if (!db) {
        db = [{ 
                id: itemId,
                feedbacks: [feedback]
        }];
    } else {
        for (let element of db) {
            if (element.id === itemId) {
                element.feedbacks.push(feedback);
                break;
            }
        }
    }
    addToLocalStorage(DB_NAME, db);
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

