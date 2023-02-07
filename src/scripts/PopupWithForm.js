import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, openedPopupSelector, formSubmitCallback) {
        super(popupSelector, openedPopupSelector)
        this.formSubmitCallback = formSubmitCallback;
        this.newInputValues = {};
        this.popupForm = this.popup.querySelector('.popup__form')
        this.formInputList = this.popupForm.querySelectorAll('.popup__input');
        this.submitButton = this.popupForm.querySelector('.popup__button-save');
    }
    
    _getInputValues() {
        this.formInputList.forEach(input => {
            this.newInputValues[input.name] = input.value;
        });
        return this.newInputValues;
    }

    _submitEvtHandler(e) {
        e.preventDefault();
        this.formSubmitCallback(this._getInputValues());
    }

    _setEventListeners() {
        super._setEventListeners();
        this.popupForm.addEventListener('submit', this._submitEvtHandler);
    }
   
    close() {
        super.close();
        this.popupForm.reset();
    }

    setBtnStatusSaving(isLoading) {
        if (isLoading) {
            this.submitButton.value = 'Сохранение...';
        } else {
            this.submitButton.value = 'Сохранить';
        }
    }
}