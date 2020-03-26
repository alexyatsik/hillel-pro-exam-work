'use strict';

function windowHandler() {
    $nR('body').classList.add('body-modal-window');
    const content2 = 'Some new content';
    new Modal(content2);
}

function modalWindowCloseHandler(){
    $nD('.modal-window');
    $nR('body').removeAttribute('class','body-modal-window');
}