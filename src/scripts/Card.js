export default class Card {
  constructor(
    card,
    userId,
    template,
    { likeHandler, deleteHandler, clickHandler }
  ) {
    this._cardData = card;
    this._currentUserId = userId;
    this._template = template;
    this._likes = card.likes.length;
    this._handleCardDelete = deleteHandler;
    this._handleLikeClick = likeHandler;
    this._handleCardClick = clickHandler;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _deleteCard() {
    this._card.remove();
    this._card = null;
  }

  _isLiked() {
    return this._isLiked;
  }

  _setLike(card) {
    this._isLiked =
      card.likes.filter((item) => {
        return item._id == this._currentUserId;
      }).length > 0;
    this._likeCounter.textContent = card.likes.length;

    if (this._isLiked) {
      this._likeBtn.classList.add("element__button-heart_active");
    } else {
      this._likeBtn.classList.remove("element__button-heart_active");
    }
    this._toggleLikeContainer(card);
  }

  _setTrashBtnState() {
    if (this._cardData.owner._id === this._currentUserId) {
      buttonTrash.classList.add("element__button-trash_visible");
    }
  }

  /* 
  _toggleLikeContainer(data) {
    if (data.likes.length === 1)
      this._likeCounter.classList.add('cards__like-counter_active'); //
    else if (data.likes.length === 0) {
      this._likeCounter.classList.remove('cards__like-counter_active');
    }
  } */

  _setLikeState() {
    // if (this._likes.length > 0) {
    //   this._likeCounter.classList.add("cards__like-counter_active");
    // }
    if (this._likes.some((item) => item._id === this._currentUserId)) {
      this._likeBtn.classList.add("element__button-heart_active");
      this._isLiked = true;
    }
  }

  _setEventListeners() {
    this._trashBtn.addEventListener("click", () => this._handleCardDelete());
    this._likeBtn.addEventListener("click", () => this._handleLikeClick());
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }

  generateCard() {
    this._card = this._getTemplate();

    this._cardImage = this._card.querySelector(".element__img");
    this._cardHeading = this._card.querySelector(".element__name");
    this._likeCounter = this._card.querySelector(".element__like-count");
    this._likeBtn = this._card.querySelector(".element__button-heart");
    this._trashBtn = this._card.querySelector(".element__button-trash");

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

/**создание карточки*/
function createCard(card, user) {
  /**изображение в карточке */
  const imageCard = cardElement.querySelector(".element__img");
  /**название изображения в карточке */
  const nameImageCard = cardElement.querySelector(".element__name");
  /**счетчик лайков */
  const likeCount = cardElement.querySelector(".element__like-count");

  //присвоение данных атрибутам
  imageCard.src = card.link;
  imageCard.alt = card.name;
  nameImageCard.textContent = card.name;
  likeCount.textContent = card.likes.length;

  //реализация лайка
  /**кнопка переключения лайка */
  const buttonToggleLikeStatus = cardElement.querySelector(
    ".element__button-heart"
  );

  /**смена статуса лайка */
  function toggleLikeStatus() {
    buttonToggleLikeStatus.classList.toggle("element__button-heart_active");
  }

  if (card.likes.length !== 0) {
    card.likes.forEach((like) => {
      if (like._id.includes(user)) {
        buttonToggleLikeStatus.classList.add("element__button-heart_active");
      } else {
        buttonToggleLikeStatus.classList.remove("element__button-heart_active");
      }
    });
  } else {
    buttonToggleLikeStatus.classList.remove("element__button-heart_active");
  }

  buttonToggleLikeStatus.addEventListener("click", function (element) {
    if (element.target.classList.contains("element__button-heart_active")) {
      deleteLike(card._id)
        .then((card) => {
          likeCount.textContent = card.likes.length;
          toggleLikeStatus();
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      putLike(card._id)
        .then((card) => {
          likeCount.textContent = card.likes.length;
          toggleLikeStatus();
        })

        .catch((err) => {
          console.log(err);
        });
    }
  });

  //удаление карточки
  /**кнопка удаления */
  const buttonTrash = cardElement.querySelector(".element__button-trash");

  /**ближайший родитель к кнопке удаления */
  const itemRemove = buttonTrash.closest(".element");

  if (card.owner._id === user) {
    buttonTrash.classList.add("element__button-trash_visible");
  }

  //вызов функции удаления карточки
  buttonTrash.addEventListener("click", function () {
    deleteCard(card._id)
      .then(() => {
        itemRemove.remove();
      })

      .catch((err) => {
        console.log(err);
      });
  });

  //открытие изображения на полный экран
  imageCard.addEventListener("click", function (evt) {
    //присвоение данных атрибутам
    imageFullSize.src = evt.target.src;
    imageFullSize.alt = evt.target.alt;
    nameImageFullSize.textContent = evt.target.alt;

    openPopup(popupFullSizeImage);
  });

  return cardElement;
}
