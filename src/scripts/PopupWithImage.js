import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, openedPopupSelector) {
        super(popupSelector, openedPopupSelector)
        this.image = this.popup.querySelector('.popup__image')
        this.imageText = this.popup.querySelector('.popup__image-name')
        console.log(this.popup)
    }
    open({imageSrc, text}) {
        super.open()
        this.image.src = imageSrc;
        this.imageText.textContent = text;
        this.image.alt = text;
    }
}