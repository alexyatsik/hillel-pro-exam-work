'use strict';

class Feedback extends Component {
    constructor(itemId, parent) {
        super(parent);
        this.itemId = itemId;
        this.feedbacks = this.getFeedbacksFromLS() || `There isn't any feeback`;

        this.addClass('feedback-component');

        const form = new Element('form', this.element);
        form.attr({
            'id': 'feedbackForm'
        })

        const author = new Input('feedbackAuthor', form);
        author.attr({
            'placeholder': 'Enter your name'
        });

        const description = new Element('textarea', form);
        description.attr({
            'placeholder': 'Enter the feedback',
            'name': 'feedbackDescription'
        });

        const addFeedback = new Button('Add feedback', form);
        addFeedback.attr({
            'data-id': this.itemId
        });
        addFeedback.click(this.addFeedback);
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

    addFeedback() {
        const form = document.forms.feedbackForm;
        const feedback = {
            author: form.feedbackAuthor.value,
            description: form.feedbackDescription.value
        }

        addItemToFeedbacksInLS(this.dataset.id, feedback);
    }

    getFeedbacks() {
        return this.feedbacks;
    }


}
