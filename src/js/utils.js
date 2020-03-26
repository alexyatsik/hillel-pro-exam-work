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

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

