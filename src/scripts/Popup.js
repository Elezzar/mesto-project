export default class Popup {
  constructor(popupSelector, openedPopupSelector) {
    this.openedPopupSelector = openedPopupSelector;
    this.popup = document.getElementById(popupSelector);
    this.popupCloseButton = this.popup.querySelector(".popup__button-close");
    console.log(this.popupCloseButton);
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

  _setEventListeners() {
    document.addEventListener("keydown", this._closeOnEsc.bind(this));
    this.popupCloseButton.addEventListener("click", this.close.bind(this));
    this.popup.addEventListener("click", (evt) => {
      if (evt.target === this.popup) {
        this.close();
      }
  });
}

  open() {
    this.popup.classList.add(this.openedPopupSelector);
    this._setEventListeners();

  }
  close() {
    this.popup.classList.remove(this.openedPopupSelector);
    document.removeEventListener("keydown", this._closeOnEsc.bind(this));
  }
}