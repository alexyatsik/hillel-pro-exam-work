'use strict';

function windowHandler() {
    const title = 'MAIN TITLE'; // TEST
    const content = 'Here is some important Content'; // TEST
    new Modal(title,content);
    $nR('body').classList.add('body-modal-window');
}

function modalWindowCloseHandler(){
    $nD('.modal-window-wrapper');
    $nR('body').removeAttribute('class','body-modal-window');
}