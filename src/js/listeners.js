'use strict';

function windowHandler() {

}

function modalWindowOpenHandler(){
    $('body').classList.add('body-modal-window');
    $('#modal').innerText = '';
    new Modal();
}

function modalWindowCloseHandler(){
    $('body').classList.remove('body-modal-window');
    $('#modal').classList.add('modal-window__none');
}