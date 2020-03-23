'use strict';

class Element {
    constructor(tag, parent = null) {
       this.element = document.createElement(tag);

       this.append(parent);
    }

    append(parent) {
        if (parent) {
            parent.appendChild(this.element);
        }
    }

    html(value) {
        this.element.innerHTML = value;
    }

    attr(obj) {
        for (let key in obj) {
            this.element.setAttribute(key, obj[key]);
        }
    }

    getElement() {
        return this.element;
    }
}

