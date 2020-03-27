'use strict';

class Feedback extends Component {
    constructor(itemId, parent) {
        super(parent);
        this.itemId = itemId;
        this.feedbacks = this.getFeedbacksFromLS() || `There isn't any feeback`;

        this.addClass('feedback-component');

        const author = new Input('feedbackAuthor', this.element);
        author.attr({
            'placeholder': 'Enter your name'
        });

        const description = new Element('textarea', this.element);
        description.attr({
            'placeholder': 'Enter the feedback'
        });

    }

    getFeedbacksFromLS() {
        const db = getLocalStorage('feedbacks');

        for (let element of db) {
            if (element.id === this.itemId) {
                return element.feedbacks;
            }
        }
        return false;
    }

    addFeedback(author, description) {
        const feedback = {
            author,
            description
        }

        addItemToFeedbacksInLS(this.itemId, feedback);
    }

    getFeedbacks() {
        return this.feedbacks;
    }


}
