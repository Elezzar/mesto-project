import { areaCards, popupFullSizeImage, imageFullSize, nameImageFullSize, cardTemplate } from './utils.js'

import { openPopup } from './modal.js'

import { initialCards } from './cards.js'


/**создание карточки*/
function createCard(element) {

  /**скелет карточки из template */
  const cardElement = cardTemplate.cloneNode(true);

  /**изображение в карточке */
  const imageCard = cardElement.querySelector('.element__img');
  /**название изображения в карточке */
  const nameImageCard = cardElement.querySelector('.element__name');

  //присвоение данных атрибутам
  imageCard.src = element.link;
  imageCard.alt = element.name;
  nameImageCard.textContent = element.name;

  //реализация лайка
  /**кнопка переключения лайка */
  const buttonToggleLikeStatus = cardElement.querySelector('.element__button-heart');
  
  /**смена статуса лайка */
  function toggleLikeStatus() {
    buttonToggleLikeStatus.classList.toggle('element__button-heart_active');
  };

  buttonToggleLikeStatus.addEventListener('click', function() {
    toggleLikeStatus()
  });

  //удаление карточки
  /**кнопка удаления */
  const buttonTrash = cardElement.querySelector('.element__button-trash');
  /**ближайший родитель к кнопке удаления */
  const itemRemove = buttonTrash.closest('.element');

  /**удаление карточки */
  function removeCard() {
    itemRemove.remove();
  };

  buttonTrash.addEventListener('click', function () {
    removeCard()
  });

  //открытие изображения на полный экран
  imageCard.addEventListener('click', function(evt) {

    //присвоение данных атрибутам
    imageFullSize.src = evt.target.src;
    imageFullSize.alt = evt.target.alt;
    nameImageFullSize.textContent = evt.target.alt;

    openPopup(popupFullSizeImage);
    });
 
return cardElement;
};

/**создание карточек из массива initialCards*/
function renderCard() {
  areaCards.prepend(...initialCards.map(createCard));
};

export { createCard, renderCard }