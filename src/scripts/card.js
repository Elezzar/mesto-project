import { popupFullSizeImage, imageFullSize, nameImageFullSize, cardTemplate } from './constants.js'

import { openPopup } from './utils.js'

import { deleteCard, putLike, deleteLike } from './api.js'




/**создание карточки*/
function createCard(card, user) {

  /**скелет карточки из template */
  const cardElement = cardTemplate.cloneNode(true);

  /**изображение в карточке */
  const imageCard = cardElement.querySelector('.element__img');
  /**название изображения в карточке */
  const nameImageCard = cardElement.querySelector('.element__name');
  /**счетчик лайков */
  const likeCount = cardElement.querySelector('.element__like-count');
  
  //присвоение данных атрибутам
  imageCard.src = card.link;
  imageCard.alt = card.name;
  nameImageCard.textContent = card.name;
  likeCount.textContent = card.likes.length;



  //реализация лайка
  /**кнопка переключения лайка */
  const buttonToggleLikeStatus = cardElement.querySelector('.element__button-heart');
  
  /**смена статуса лайка */
  function toggleLikeStatus() {
    buttonToggleLikeStatus.classList.toggle('element__button-heart_active');
  };

 
  if (card.likes.length !== 0) {
    card.likes.forEach((like) => {
      if (like._id.includes(user._id)) {
        buttonToggleLikeStatus.classList.add('element__button-heart_active');
      } else {
        buttonToggleLikeStatus.classList.remove('element__button-heart_active');
      }
    });
  } else {
    buttonToggleLikeStatus.classList.remove('element__button-heart_active');
  }

  
  buttonToggleLikeStatus.addEventListener('click', function(element) {
    if (element.target.classList.contains('element__button-heart_active')) {
      deleteLike(card._id)
      .then((card) => {
        likeCount.textContent = card.likes.length;
        toggleLikeStatus()
      })

      .catch((err) => {
      console.log(err);
      })

    } else { 

      putLike(card._id)
      .then((card) => {
        likeCount.textContent = card.likes.length;
        toggleLikeStatus()
      })

      .catch((err) => {
      console.log(err);
      })
    }
  });
  



  //удаление карточки
  /**кнопка удаления */
  const buttonTrash = cardElement.querySelector('.element__button-trash');
 
  /**ближайший родитель к кнопке удаления */
  const itemRemove = buttonTrash.closest('.element');
  
  if (card.owner._id === user._id ) {
    buttonTrash.classList.add('element__button-trash_visible');
  }

  //вызов функции удаления карточки
  buttonTrash.addEventListener('click', function () {
    deleteCard(card._id)
    .then(() => {
      itemRemove.remove();
    })
  
    .catch((err) => {
      console.log(err);
    })
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



export { createCard }