import '../pages/index.css';

import { areaCards, 
  nameProfile, 
  personProfile, 
  buttonProfileEditForm, 
  buttonAddCardForm, 
  popupProfileEditForm, 
  buttonClosePopupProfile, 
  containerProfileEditForm, 
  userNameInput,
  userProfileInput,
  formCard,
  popupAddCardForm,
  buttonCloseAddCardForm,
  containerAddCardForm,
  nameImageCardInput,
  urlImageCardInput, 
  popupFullSizeImage, 
  buttoneCloseImageFullSize } from './constants.js'

import { openPopup, closePopup } from './utils.js'

import { createCard, renderCard } from './card.js'

import { enableValidation } from './validate.js'


/*          ***функции***          */


/**внесение данных из popup профиля*/
function handleSubmitProfileForm (evt) {
  evt.preventDefault();
  
  //присвоение данных атрибутам
  nameProfile.textContent = userNameInput.value;
  personProfile.textContent = userProfileInput.value;

  closePopup(popupProfileEditForm);
};


/**создание пользовательской карточки с данными из popup с карточкой*/
function handleSubmitCardForm (evt) {
  evt.preventDefault();

  /**переменная с данными для карточки от пользователя */
  const newUserCard = createCard({name: nameImageCardInput.value, link: urlImageCardInput.value});
  
  areaCards.prepend(newUserCard);
  
  closePopup(popupAddCardForm);
  formCard.reset();
};



/*          ***вызовы функций***          */

//создание карточек из массива
renderCard();

//редактирование профиля после заполнение формы
containerProfileEditForm.addEventListener('submit', handleSubmitProfileForm);

//создание карточки после заполнения формы
containerAddCardForm.addEventListener('submit', handleSubmitCardForm);

//закрытие модального окна с полноразмерным изображением по кнопке "крестик"
buttoneCloseImageFullSize?.addEventListener('click', function() {
  closePopup(popupFullSizeImage)
});

//окрытие модального окна редактирования профиля по кнопке "редактирования"
buttonProfileEditForm?.addEventListener('click', function() {
  openPopup(popupProfileEditForm);
});

//закрытие модального окна редактирования профиля по кнопке "крестик"
buttonClosePopupProfile?.addEventListener('click', function() {
  closePopup(popupProfileEditForm);
});

//открытие модального окна создания новой карточки по кнопке "плюс"
buttonAddCardForm?.addEventListener('click', function() {
  openPopup(popupAddCardForm);
});

//закрытие модального окна создания новой карточки по кнопке "крестик"
buttonCloseAddCardForm?.addEventListener('click', function() {
  closePopup(popupAddCardForm);
});


enableValidation({
  formSelector: '.popup__form', //форма попапа 
  inputSelector: '.popup__input', //инпут в форме
  submitButtonSelector: '.popup__button-save', //кнопка "сохранить" в попапе
  inactiveButtonClass: 'popup__button-save_inactive', //состояние "неактивной" кнопки
  inputErrorClass: 'popup__input_type_error', //состояние инпута, не прошедшего валидацию
  errorClass: 'popup__input-error_active' //спан с сообщением ошибки 
}); 