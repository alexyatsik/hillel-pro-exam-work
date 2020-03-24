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