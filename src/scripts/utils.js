/**страница - для закрытия модальных окон по клику на overlay */
const body = document.querySelector('.body'); // в modal

/**контент страницы*/
const content = document.querySelector('.page');  // modal

/**зона для карточек*/
const areaCards = content?.querySelector('.elements'); // в index, cards

/**имя пользователя в профиле на странице*/
const nameProfile = content?.querySelector('.profile__name'); // в index
/**занятие/профессия пользователя в профиле на странице*/
const personProfile = content?.querySelector('.profile__person'); // в index
/**кнопка вызова popup с формой редактирования профиля*/
const buttonProfileEditForm = content?.querySelector('#button-edit'); // в index
/**кнопка вызова popup с формой для добавления новой карточки*/
const buttonAddCardForm = content?.querySelector('#button-card'); // в index

/**popup с формой редактирования профиля*/
const popupProfileEditForm = content?.querySelector('#popup-profile'); // в index
/**кнопка закрытия popup с редактированием профиля*/
const buttonClosePopupProfile = content?.querySelector('#close-button'); // в index
/**контейнер с формой внутри popup редактирования профиля*/
const containerProfileEditForm = content?.querySelector('#profile-form'); // в index
/**поле ввода имени пользователя*/
const userNameInput = content?.querySelector('#profile-name'); // в index
/**поле ввода занятия/профессии пользователя*/
const userProfileInput = content?.querySelector('#profile-person'); // в index

/**форма новой карточки */
const formCard = document.forms.newCardInfo;
/**popup с формой для добавления новой карточки*/
const popupAddCardForm = content?.querySelector('#popup-card'); // в index
/**кнопка закрытия popup для добавления новой карточки*/
const buttonCloseAddCardForm = content?.querySelector('#close-button-card'); // в index
/**контейнер с формой внутри popup добавления карточки*/
const containerAddCardForm = content?.querySelector('#card-form'); // в index
/**поле ввода названия изображения новой карточки*/
const nameImageCardInput = content?.querySelector('#card-name'); // в index
/**поле ввода ссылки на изображение новой карточки*/
const urlImageCardInput = content?.querySelector('#img-url'); // в index


/**popup с полноразмерным изображением*/
const popupFullSizeImage = content?.querySelector('#popup-image'); // в index, cards
/**полноразмерное изображение в popup*/
const imageFullSize = popupFullSizeImage?.querySelector('.popup__image'); // в cards
/**название изображения в popup*/
const nameImageFullSize = popupFullSizeImage?.querySelector('.popup__image-name'); // в cards
/**кнопка закрытия popup с полноразмерным изображением*/
const buttoneCloseImageFullSize = content?.querySelector('#popup-image-closed'); //в index



/**template со скелетом карточек*/
const cardTemplate = content?.querySelector('.card-template')?.content; // в cards

export { body, 
  content, 
  areaCards,
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
  imageFullSize, 
  nameImageFullSize, 
  buttoneCloseImageFullSize,
  cardTemplate }