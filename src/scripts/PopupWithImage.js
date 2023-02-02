import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, openedPopupSelector) {
        super(popupSelector, openedPopupSelector)
        this.image = this.popup.querySelector('.popup__image')
        this.imageText = this.popup.querySelector('.popup__image-name')
    }
    open({imageSrc, text}) {
        this.image.src = imageSrc;
        this.imageText.textContent = text;
        super.open();
    }
}