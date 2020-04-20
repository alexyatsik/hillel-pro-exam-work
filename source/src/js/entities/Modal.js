'use strict';

import Component from './commons/Component';
import Element from './commons/Element';
import Button from './commons/Button';

import { $nD } from '../utils';
import { modalWindowCloseHandler } from '../listeners';

export default class Modal extends Component {
    constructor(title, content){
        super(document.body);
        $nD('.modal-window-wrapper');

        document.body.classList.add('body-modal-window');
        this.addClass('modal-window-wrapper');

        this.modalWindow = new Element('div',this.element);
        this.modalWindow.addClass('modal-window');

        /*this.closeBtn = new Button('X', this.modalWindow);
        this.closeBtn.attr({'class': 'close-btn'});
        this.closeBtn.click(modalWindowCloseHandler);*/

        this.modalWindowTitle = new Element('h2',this.modalWindow);
        this.modalWindowTitle.html(title);
        this.modalWindowTitle.addClass('modal-window__title');

        this.modalWindowContent = new Element('div', this.modalWindow);
        //this.modalWindowContent.html(content);
        this.modalWindowContent.getElement().appendChild(content);
        this.modalWindowContent.addClass('modal-window__content');

        this.closeBtn = new Button('Close', this.modalWindow);
        this.closeBtn.addClass('close-btn');
        this.closeBtn.click(modalWindowCloseHandler);
    }
}