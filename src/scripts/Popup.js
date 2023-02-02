export default class Popup {
    constructor(popupSelector, openedPopupSelector) {
        this.popupSelector = popupSelector;
        this.openedPopupSelector = openedPopupSelector;
        this.popup = document.querySelector(popupSelector);
        this.popupCloseButton = this.popup.querySelector('.popup__button-close')
    }
    _closeOnEsc() {
        if (evt.key === 'Escape') {
            this.close();
        };
    }
    _closeOnOverlayClick() {
        if (element.target.classList.contains(this.popupSelector)) {
            this.close();
        };
    }
    _setEventListeners() {
        body.addEventListener('mousedown', this._closeOnOverlayClick);
        body.addEventListener('keydown', this._closeOnEsc);
        this.popupCloseButton.addEventListener('click', this.close)
    }
    _removeEventListeners() {
        body.removeEventListener('mousedown', this._closeOnOverlayClick);
        body.removeEventListener('keydown', this._closeOnEsc);
        this.popupCloseButton.removeEventListener('click', this.close)
    }
    open() {
        this.popup.classList.add(this.openedPopupSelector);
        this._setEventListeners();
    }
    close() {
        this.popup.classList.remove(this.openedPopupSelector);
        this._removeEventListeners();
    }

}