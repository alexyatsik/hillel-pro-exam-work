'use strict';

class Element {
    constructor(tag, parent = null) {
       this.element = document.createElement(tag);

       this.append(parent);
    }

    append(parent) {
        if (parent) {
            if (parent instanceof Element) {
                parent = parent.getElement();
            } 
            parent.appendChild(this.element);
        }
    }

    html(value) {
        this.element.innerHTML = value;
    }

    addClass() {
        this.element.classList.add(...arguments);
    }

    attr(obj) {
        for (let key in obj) {
            this.element.setAttribute(key, obj[key]);
        }
    }

    click(handler) {
        this.element.addEventListener('click', handler, event);
    }

    getElement() {
        return this.element;
    }
}

