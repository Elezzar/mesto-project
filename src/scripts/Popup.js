export default class Popup {
  constructor(popupSelector, openedPopupSelector) {
    this.openedPopupSelector = openedPopupSelector;
    this.popup = document.getElementById(popupSelector);
    this.popupCloseButton = this.popup.querySelector(".popup__button-close");
    this._closeOnEsc = this._closeOnEsc.bind(this);
    this._closeOnOverlayClick = this._closeOnOverlayClick.bind(this);
}

  _closeOnEsc(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closeOnOverlayClick(evt) {
    if (evt.target.classList.contains(this.openedPopupSelector)) {
      this.close();
    }
  }

  setEventListeners() {
    this.popupCloseButton.addEventListener("click", this.close.bind(this));
  }
  
  open() {
    document.addEventListener("keydown", this._closeOnEsc);
    document.addEventListener("mousedown", this._closeOnOverlayClick);
    this.popup.classList.add(this.openedPopupSelector);
  }

  close() {
    this.popup.classList.remove(this.openedPopupSelector);
    document.removeEventListener("keydown", this._closeOnEsc);
    document.removeEventListener("mousedown", this._closeOnOverlayClick);
  }
}