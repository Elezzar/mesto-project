import '../pages/index.css';

import { getProfile, 
  getCards, 
  editProfile,
  changeUserAvatar, 
  createNewCard } from './api.js'

import { areaCards, 
  profile,
  profileAvatar,
  buttonEditProfile,
  nameProfile, 
  personProfile, 
  buttonProfileEditForm, 
  buttonAddCardForm, 
  popupProfileEditForm, 
  containerProfileEditForm, 
  userNameInput,
  userProfileInput,
  formCard,
  popupAddCardForm,
  containerAddCardForm,
  nameImageCardInput,
  urlImageCardInput, 
  buttonCreateCard,
  buttonAddAvatar,
  avatarUrl,
  popupAvatar,
  buttonEditAvatar,
  containerAddAvatarForm, 
  buttonsClose,
  } from './constants.js'


import { createCard } from './card.js'

import { FormValidator } from './FormValidator.js'


const serverAuthorization = {
  serverUrl: 'https://nomoreparties.co/v1/plus-cohort-17',
  headers: {
    authorization: 'f024cd52-7e5f-4d9c-952d-ed65a4f031f6',
    'Content-Type': 'application/json',
  },
};


Promise.all([getProfile(), getCards()])
.then(([user, cards]) => {
  profile.id = user._id;
  nameProfile.textContent = user.name;
  personProfile.textContent = user.about;
  profileAvatar.src = user.avatar;

  cards.forEach(card => {
    areaCards.append(createCard(card, user._id));
  });

  console.log(profile)
})

  .catch((err) => {
    console.log(err);
})


/*          ***функции***          */


/**внесение данных из popup профиля*/
function handleSubmitProfileForm (evt) {
  evt.preventDefault();

  buttonEditProfile.textContent = 'Сохранение...';
  
  editProfile(userNameInput.value, userProfileInput.value)
  .then((user) => {
    nameProfile.textContent = user.name;
    personProfile.textContent = user.about;

    closePopup(popupProfileEditForm);
  })

  .catch((err) => {
    console.log(err);
  })

  .finally(() => {
    buttonEditProfile.textContent = 'Сохранить';
  })
};


/**добавление аватара пользователя*/
function handleUserAvatarForm (evt) {
  evt.preventDefault();

  buttonAddAvatar.textContent = 'Сохранение...';

  changeUserAvatar(avatarUrl.value)
  .then((user) => {
    profileAvatar.src = user.avatar;
    closePopup(popupAvatar)
  }) 

  .catch((err) => {
    console.log(err);
  })

  .finally(() => {
    buttonAddAvatar.textContent = 'Сохранить';
  })
} 


/**создание пользовательской карточки с данными из popup с карточкой*/
function handleSubmitCardForm (evt) {
  evt.preventDefault();

  buttonCreateCard.textContent = 'Создание...';

  createNewCard(nameImageCardInput.value, urlImageCardInput.value)
    .then((card) => {
      areaCards.prepend(createCard(card, card.owner));
      closePopup(popupAddCardForm);
      formCard.reset();
    })

    .catch((err) => {
      console.log(err);
    })

    .finally(() => {
      buttonCreateCard.textContent = 'Создать';
    })  
};



/*          ***вызовы функций***          */

//редактирование профиля после заполнение формы
containerProfileEditForm.addEventListener('submit', handleSubmitProfileForm);

//создание карточки после заполнения формы
containerAddCardForm.addEventListener('submit', handleSubmitCardForm);

//создание аватара после заполнения формы
containerAddAvatarForm.addEventListener('submit', handleUserAvatarForm);

//окрытие модального окна редактирования профиля по кнопке "редактирования"
buttonProfileEditForm?.addEventListener('click', function() {
  openPopup(popupProfileEditForm);
  userNameInput.value = nameProfile.textContent;
  userProfileInput.value = personProfile.textContent;
});

//открытие модального окна создания новой карточки по кнопке "плюс"
buttonAddCardForm?.addEventListener('click', function() {
  openPopup(popupAddCardForm);
});

//открытие модального окна изменения аватара
buttonEditAvatar?.addEventListener('click', function() {
  openPopup(popupAvatar);
});

//закрытие всех попапов на крестик
buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopup(popup);
  })
})


enableValidation({
  formSelector: '.popup__form', //форма попапа 
  inputSelector: '.popup__input', //инпут в форме
  submitButtonSelector: '.popup__button-save', //кнопка "сохранить" в попапе
  inactiveButtonClass: 'popup__button-save_inactive', //состояние "неактивной" кнопки
  inputErrorClass: 'popup__input_type_error', //состояние инпута, не прошедшего валидацию
  errorClass: 'popup__input-error_active' //спан с сообщением ошибки 
}); 