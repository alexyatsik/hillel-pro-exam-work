'use strict';

function windowHandler() {
    const title = 'MAIN TITLE';
    const content = 'Here is some important Content'
    new Modal(title,content);
    $nR('body').classList.add('body-modal-window');
}

function modalWindowCloseHandler(){
    $nD('.modal-window-wrapper');
    $nR('body').removeAttribute('class','body-modal-window');
}