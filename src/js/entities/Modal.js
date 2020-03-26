class Modal extends Component {
    constructor(title,content){
        super(document.body);
        this.addClass('modal-window-wrapper');

        this.modalWindow = new Element('div',this.element);
        this.modalWindow.addClass('modal-window');

        this.modalWindowTitle = new Element('h2',this.modalWindow);
        this.modalWindowTitle.html(title);
        this.modalWindowTitle.addClass('modal-window__title');

        this.modalWindowContent = new Element('p',this.modalWindow);
        this.modalWindowContent.html(content);
        this.modalWindowContent.addClass('modal-window__content');

        this.closeBtn = new Button('X', this.modalWindow);
        this.closeBtn.attr({'id': 'close-btn'});
        this.closeBtn.click(modalWindowCloseHandler);
    }
}