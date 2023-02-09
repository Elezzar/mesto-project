export default class Card {
  constructor(
    card,
    userId,
    template,
    { likeHandler, deleteHandler, clickHandler, cardDelete }
  ) {
    this._cardData = card;
    this._currentUserId = userId;
    this._templateSelector = template;
    this._likes = card.likes.length;
    this._handleLikeDelete = deleteHandler;
    this._handleLikeClick = likeHandler;
    this._handleCardClick = clickHandler;
    this._cardDeleteHandler = cardDelete;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _deleteCard() {

    this._cardDeleteHandler(this._cardData._id).then(() => {
      this._card.remove();
      this._card = null;
    });
  }

  _isLiked() {
    return this._isLiked;
  }

  _setLike() {
    if (this._isLiked) {
      this._handleLikeDelete(this._cardData._id).then((res) => {
        this._likeBtn.classList.remove("element__button-heart_active");
        this._isLiked = false;
        this._likeCounter.textContent = res.likes.length;
      });
    } else {
      this._handleLikeClick(this._cardData._id).then((res) => {
        this._likeBtn.classList.add("element__button-heart_active");
        this._isLiked = true;
        this._likeCounter.textContent = res.likes.length;
      });
    }
  }

  _setTrashBtnState() {
    if (this._cardData.owner._id === this._currentUserId) {
      this._trashBtn.classList.add("element__button-trash_visible");
    }
  }

  _setLikeState() {
    if (this._cardData.likes.some((item) => item._id === this._currentUserId)) {
      this._likeBtn.classList.add("element__button-heart_active");
      this._isLiked = true;
    }
  }

  _setEventListeners() {
    this._trashBtn.addEventListener("click", () => this._deleteCard());
    this._likeBtn.addEventListener("click", () => this._setLike());
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({
        imageSrc: this._cardData.link,
        text: this._cardData.name,
      });
    });
  }

  generateCard() {
    this._card = this._getTemplate();

    this._cardImage = this._card.querySelector(".element__img");
    this._cardHeading = this._card.querySelector(".element__name");
    this._likeCounter = this._card.querySelector(".element__like-count");
    this._likeBtn = this._card.querySelector(".element__button-heart");
    this._trashBtn = this._card.querySelector(".element__button-trash");
    this._isLiked =
      this._cardData.likes.filter((item) => {
        return item._id == this._currentUserId;
      }).length > 0;

    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this._cardHeading.textContent = this._cardData.name;
    this._likeCounter.textContent = this._likes;

    this._setTrashBtnState();
    this._setLikeState();
    this._setEventListeners();

    return this._card;
  }
}