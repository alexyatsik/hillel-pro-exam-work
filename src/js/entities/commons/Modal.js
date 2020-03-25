class Modal extends Element {
    constructor(){
        super('div', $('#modal'));
        
        this.addClass('component','modal-window');
        this.html('Here is some Modal Window with some content!');
        this.closeBtn = new Button('X', $('.modal-window'));
        this.closeBtn.attr({'id': 'close-btn'});
    }
}