/**страница - для закрытия модальных окон по клику на overlay */
const body = document.querySelector('.body'); // в modal

/**контент страницы*/
const content = document.querySelector('.page');  // modal

/**зона для карточек*/
const areaCards = content.querySelector('.elements'); // в index, cards

/**профиль */
const profile = content.querySelector('.profile'); //в index
/**изображение аватара профиля */
const profileAvatar = content.querySelector('.profile__avatar'); //в index

/**кнопка сохранения данных профиля */
const buttonEditProfile = content.querySelector('#buttonEditProfile'); //в index
/**имя пользователя в профиле на странице*/
const nameProfile = content.querySelector('.profile__name'); // в index
/**занятие/профессия пользователя в профиле на странице*/
const personProfile = content.querySelector('.profile__person'); // в index
/**кнопка вызова popup с формой редактирования профиля*/
const buttonProfileEditForm = content.querySelector('#button-edit'); // в index
/**кнопка вызова popup с формой для добавления новой карточки*/
const buttonAddCardForm = content.querySelector('#button-card'); // в index

/**popup с формой редактирования профиля*/
const popupProfileEditForm = content.querySelector('#popup-profile'); // в index
/**контейнер с формой внутри popup редактирования профиля*/
const containerProfileEditForm = content.querySelector('#profile-form'); // в index
/**поле ввода имени пользователя*/
const userNameInput = content.querySelector('#profile-name'); // в index
/**поле ввода занятия/профессии пользователя*/
const userProfileInput = content.querySelector('#profile-person'); // в index

/**форма новой карточки */
const formCard = document.forms.newCardInfo;
/**popup с формой для добавления новой карточки*/
const popupAddCardForm = content.querySelector('#popup-card'); // в index
/**контейнер с формой внутри popup добавления карточки*/
const containerAddCardForm = content.querySelector('#card-form'); // в index
/**поле ввода названия изображения новой карточки*/
const nameImageCardInput = content.querySelector('#card-name'); // в index
/**поле ввода ссылки на изображение новой карточки*/
const urlImageCardInput = content.querySelector('#img-url'); // в index
/**кнопка сохранения новой карточки */
const buttonCreateCard = content.querySelector('#buttonCreateCard'); //в index


/**popup с полноразмерным изображением*/
const popupFullSizeImage = content.querySelector('#popup-image'); // в cards
/**полноразмерное изображение в popup*/
const imageFullSize = popupFullSizeImage.querySelector('.popup__image'); // в cards
/**название изображения в popup*/
const nameImageFullSize = popupFullSizeImage.querySelector('.popup__image-name'); // в cards


/**кнопка сохранения нового аватара */
const buttonAddAvatar = content.querySelector('#buttonAddAvatar'); //в index
/**поле ввода ссылки на изображение нового аватара */
const avatarUrl = content.querySelector('#avatar-url'); //в index
/**popup с формой для добавления нового аватара */
const popupAvatar = content.querySelector('#popup-avatar'); //в index   
/**кнопка открытия модального окна изменения аватара */
const buttonEditAvatar = content.querySelector('.profile__button-edit-avatar'); //в index

/**контейнер с формой внутри popup редактирования аватара */
const containerAddAvatarForm = content.querySelector('#avatar-form');

/**все кнопки закрытия на крестик */
const buttonsClose = content.querySelectorAll('.popup__button-close');



/**template со скелетом карточек*/
const cardTemplate = content.querySelector('.card-template').content; // в cards

export { body, 
  content, 
  areaCards,
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
  popupFullSizeImage,
  imageFullSize, 
  nameImageFullSize, 
  buttonAddAvatar,
  avatarUrl,
  popupAvatar,
  buttonEditAvatar,
  containerAddAvatarForm,
  buttonsClose,
  cardTemplate }