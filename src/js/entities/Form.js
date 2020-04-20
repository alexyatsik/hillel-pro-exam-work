'use strict';

class Form extends Element {
    constructor() {
        super('form', $nR('.modal-window'));
        this.addClass('confirm-form');
        this.attr({'name' : 'form'});
        this.drawForm();
    }

    drawForm = () => {
        this.createFormElement('first-name','First name*: ', 'input-first-name', 'firstName', 'Enter your first name');
        this.createFormElement('last-name', 'Last name*: ', 'input-last-name', 'lastName', 'Enter your last name');
        this.createFormElement('phone', 'Phone*: ', 'input-phone', 'phone', '0**-**-**-***');
        this.createFormElement('email', 'E-Mail*: ', 'input-mail', 'email', 'john@gmail.com');
        this.createFormElement('country', 'Country*: ', 'input-country', 'country', 'Enter your country');
        this.createFormElement('city', 'City*: ', 'input-city', 'city', 'Enter your city');
        this.createFormElement('postal-code', 'Postal code*: ', 'input-postal', 'postalCode', 'Enter your postal code');
        this.createFormElement('street', 'Street*: ', 'input-street', 'street', 'Enter your street');
        this.createFormElement('house', 'House Nr.*: ', 'input-house', 'house', 'Enter your house number');
        const confirmBtn = new Button('Confirm', $nR('.confirm-form'));
        confirmBtn.addClass('input-button');
        confirmBtn.attr({'id' : 'confirm-button'});
        confirmBtn.click(this.validation)
    }

    createFormElement(idName, titleText, inputSecondClass, name, placeholder){
        const wrap = new Component($nR('.confirm-form'));
        wrap.addClass('form-item-wrap');
        const errorMessage = new Element('p', wrap);
        errorMessage.addClass('error-message');
        errorMessage.addClass('error-message-hidden');
        errorMessage.attr({'id' : idName})
        errorMessage.html('Incorrect data or empty field *');
        const inputWrap = new Component(wrap);
        inputWrap.addClass('input-wrap');
        const title = new Element('span', inputWrap);
        title.addClass('form-span');
        title.html(titleText);
        const input = new Element('input', inputWrap);
        input.addClass('input');
        input.addClass(inputSecondClass);
        input.attr({'name' : name});
        input.attr({'placeholder' : placeholder});
    }

    validation = () => {
        let isValidated = false;

        function isValid(key, value){
            return expressions[key].test(value);
        }

        const expressions = {
            'first name' : /^[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,}-[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/,
            'last name' : /^[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,}-[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/,
            'phone' : /^[0][1-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/,
            'e-mail' : /^\w{1,}@[a-z]{1,}.[a-z]{1,}$/,
            'country' : /^[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,}-[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$|^[A-Z]{1,}$|^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/,
            'city' : /^[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,}-[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/,
            'postal code' : /^[0-9]{1,}$/,
            'street' : /^[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,}-[A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$|^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/,
            'house number' : /^\w{1,}$|^\w{1,} \w{1,}$/,
        }

        const elements = document.form.elements;
        const isFirstNameValid = isValid('first name', elements.firstName.value);
        const isLastNameValid = isValid('last name', elements.lastName.value);
        const isPhoneValid = isValid('phone', elements.phone.value);
        const isEmailValid = isValid('e-mail', elements.email.value);
        const isCountryValid = isValid('country', elements.country.value);
        const isCityValid = isValid('city', elements.city.value);
        const isPostalCodeValid = isValid('postal code', elements.postalCode.value);
        const isStreetValid = isValid('street', elements.street.value);
        const isHouseNumberValid = isValid('house number', elements.house.value);

        function check(valid,id,elClass){
            if(!valid){
                document.querySelector(id).classList.remove('error-message-hidden');
                document.querySelector(elClass).classList.add('error-input');
                isValidated = false;
            } else {
                document.querySelector(id).classList.add('error-message-hidden');
                document.querySelector(elClass).classList.remove('error-input');
                isValidated = true;
            }

            return isValidated;
        }

        check(isFirstNameValid,'#first-name','.input-first-name');
        check(isLastNameValid,'#last-name','.input-last-name');
        check(isPhoneValid,'#phone','.input-phone');
        check(isEmailValid,'#email','.input-mail');
        check(isCountryValid,'#country','.input-country');
        check(isCityValid,'#city','.input-city');
        check(isPostalCodeValid,'#postal-code','.input-postal');
        check(isStreetValid,'#street','.input-street');
        check(isHouseNumberValid,'#house','.input-house');

        if(isValidated){
            new Modal('Order completed', new DeliveryConfirmed(elements.firstName.value,elements.lastName.value).getElement());
        }
    }

    init() {
        return this.element;
    }
}