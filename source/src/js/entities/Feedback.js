'use strict';

import Component from './commons/Component';
import Element from './commons/Element';
import Input from './commons/Input';
import Button from './commons/Button';

import { getLocalStorage, $nD, addItemToFeedbacksInLS } from '../utils';

export default class Feedback extends Component {
    constructor(itemId, parent) {
        super(parent);
        this.itemId = itemId;
        this.feedbacks = this.getFeedbacksFromLS() || null;

        this.addClass('feedback-component');

        this.init();
    }

    init() {
        this.addFeedbackInterface();
        this.showFeedbacksInterface();
    }

    getFeedbacksFromLS() {
        const db = getLocalStorage('feedbacks');
        if (!db) {
            return false;
        }

        for (let element of db) {
            if (element.id === this.itemId) {
                return element.feedbacks;
            }
        }
    }

    addFeedbackInterface() {
        const form = new Element('form', this.element);
        form.attr({
            'id': 'feedbackForm'
        })

        const tip = new Element('div', form);
        tip.addClass('feedback-tip');
        tip.html(`
            * First, Second/Last name<br />
            ** Must be at least 10 symbols
        `);

        const author = new Input('feedbackAuthor', form);
        author.attr({
            'placeholder': '* John Doe'
        });

        const description = new Element('textarea', form);
        description.attr({
            'placeholder': '** Enter the feedback',
            'name': 'feedbackDescription'
        });

        const addFeedbackBtn = new Button('Add feedback', form);
        addFeedbackBtn.attr({
            'data-id': this.itemId
        });
        addFeedbackBtn.click(this.addFeedback);
    }

    addFeedback() {
        const form = document.forms.feedbackForm;
        const feedback = {
            author: form.feedbackAuthor.value,
            description: form.feedbackDescription.value
        }

        if (!isInputCorrect({ author: form.feedbackAuthor, description: form.feedbackDescription })) {
            return;
        }

        addItemToFeedbacksInLS(this.dataset.id, feedback);

        $nD('.modal-window-wrapper');
        document.body.classList.remove('body-modal-window');

        function isInputCorrect(inputsObj) {
            let isInputCorrect = true;

            const regExp = {
                author: /^[A-Z][a-z]{1,30} [A-Z][a-z]{1,30}$/,
                description: /^.{10,}$/
            }

            for (let key in inputsObj) {
                if (!regExp[key].test(inputsObj[key].value)) {
                    isInputCorrect = false;
                }
            }

            return isInputCorrect;
        }
    }

    showFeedbacksInterface() {
        $nD('.product-feedbacks');
        
        const root = new Element('div', this.element);
        root.addClass('product-feedbacks');

        new Element('div', root).html('Feedbacks: ');

        if (!this.feedbacks) {
            root.html(`There isn't any feedback`);
            return;
        }
        
        const slides = [];
        for (let element of this.feedbacks) {
            const feedbackWrapper = new Element('div');

            const author = new Element('div', feedbackWrapper);
            author.addClass('feedback-author');
            author.html(`Author: ${element.author}`);

            const description = new Element('div', feedbackWrapper);
            description.addClass('feedback-description');
            description.html(`Feedback: ${element.description}`);

            slides.push(feedbackWrapper);
        }

        let currentSlide = 0;
        const wrapper = new Element('div', root);
        wrapper.addClass('feedback-wrapper');
        const prev = new Button('<', wrapper);
        const content = new Element('div', wrapper);
        content.html(slides[currentSlide].getElement().innerHTML);
        const next = new Button('>', wrapper);

        root.getElement().addEventListener('click', event => {
            switch (event.target.value) {
                case next.value:
                    if (currentSlide === slides.length - 1) {
                        break;
                    }
                    currentSlide++;
                    break;
                case prev.value: 
                    if (currentSlide === 0) {
                        break;
                    }
                    currentSlide--;
                    break;
            }
            content.html(slides[currentSlide].getElement().innerHTML);
        });
    }

    getFeedbacks() {
        return this.feedbacks;
    }
}
