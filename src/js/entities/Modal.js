class Modal extends Component {
    constructor(title, content){
        super(document.body);
        $nD('.modal-window-wrapper');

        this.addClass('modal-window-wrapper');

        document.querySelector('.modal-window-wrapper').addEventListener('click', (event)=>{
            let target = event.target;
            if(target.classList.contains('modal-window-wrapper')){
                modalWindowCloseHandler();
            }
        });

        this.modalWindow = new Element('div',this.element);
        this.modalWindow.addClass('modal-window');

        this.modalWindowTitle = new Element('h2',this.modalWindow);
        this.modalWindowTitle.html(title);
        this.modalWindowTitle.addClass('modal-window__title');

        this.modalWindowContent = new Element('div', this.modalWindow);
        this.modalWindowContent.getElement().appendChild(content);
        this.modalWindowContent.addClass('modal-window__content');

        this.closeBtn = new Button('Close', this.modalWindow);
        this.closeBtn.addClass('close-btn');
        this.closeBtn.click(modalWindowCloseHandler);
    }
}