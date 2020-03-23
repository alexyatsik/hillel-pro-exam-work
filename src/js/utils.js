'use strict';

function $(selector) {
    const elem = document.querySelector(selector);

    return elem || false;
}