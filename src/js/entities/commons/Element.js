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

    getElement() {
        return this.element;
    }
}

