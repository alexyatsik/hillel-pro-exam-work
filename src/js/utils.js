'use strict';

function $(selector) {
    const elem = document.querySelector(selector);

    return elem || false;
}

function $nD(selector) {
    const elem = $(selector);
    if (elem) {
        elem.remove();
    }
}

function getLocalStorage(lsName) {
    return JSON.parse(localStorage.getItem(lsName)) || false;
}

function init() {
    fetch('../../db.json')
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('rejected', err);
        })
}