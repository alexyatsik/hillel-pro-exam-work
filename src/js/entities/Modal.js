class Modal extends Component {
    constructor(content){
        super(document.body);
        
        this.addClass('component','modal-window');
        this.closeBtn = new Button('X', this.element);
        this.closeBtn.attr({'id': 'close-btn'});
        this.closeBtn.click(modalWindowCloseHandler);

        const contentBox = new Component(this.element).html(content);
    }
}