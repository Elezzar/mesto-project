/**страница - для закрытия модальных окон по клику на overlay */
const body = document.querySelector('.body');

/**контент страницы*/
const content = document.querySelector('.page');

/**кнопка вызова popup с формой редактирования профиля*/
const buttonProfileEditForm = content.querySelector('#button-edit'); // в index
/**кнопка вызова popup с формой для добавления новой карточки*/
const buttonAddCardForm = content.querySelector('#button-card'); // в index

/**форма новой карточки */
const formCard = document.forms.newCardInfo;// addProfileInfo, addAvatar

/**кнопка открытия модального окна изменения аватара */
const buttonEditAvatar = content.querySelector('.profile__button-edit-avatar'); //в index

/**форма профиля */
const formProfile = document.forms.addProfileInfo;
/**форма аватара */
const formAvatar = document.forms.addAvatar;

const settings = {
  inputSelector: ".popup__input", //инпут в форме
  submitButtonSelector: ".popup__button-save", //кнопка "сохранить" в попапе
  inactiveButtonClass: "popup__button-save_inactive", //состояние "неактивной" кнопки
  inputErrorClass: "popup__input_type_error", //состояние инпута, не прошедшего валидацию
  errorClass: "popup__input-error_active", //спан с сообщением ошибки
};

const serverAuthorization = {
  url: "https://nomoreparties.co/v1/plus-cohort-17",
  headers: {
    authorization: "f024cd52-7e5f-4d9c-952d-ed65a4f031f6",
    "Content-Type": "application/json",
  },
};


export { body, 
  buttonProfileEditForm,
  buttonAddCardForm,
  formCard,
  formProfile,
  formAvatar,
  buttonEditAvatar,
  settings,
  serverAuthorization
  }
