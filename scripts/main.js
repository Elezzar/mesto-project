/*          ***переменные***          */

/**страница - для закрытия модальных окон по клику на overlay */
const body = document.querySelector('.body');

/**контент страницы*/
const content = document.querySelector('.page'); 


/**имя пользователя в профиле на странице*/
const nameProfile = content?.querySelector('.profile__name');
/**занятие/профессия пользователя в профиле на странице*/
const personProfile = content?.querySelector('.profile__person'); 
/**кнопка вызова popup с формой редактирования профиля*/
const buttonProfileEditForm = content?.querySelector('#button-edit'); 
/**кнопка вызова popup с формой для добавления новой карточки*/
const buttonAddCardForm = content?.querySelector('#button-card'); 


/**зона для карточек*/
const areaCards = content?.querySelector('.elements'); 

/**форма профиля */
const formProfile = document.forms.profileInfo;

/**popup с формой редактирования профиля*/
const popupProfileEditForm = content?.querySelector('#popup-profile');
/**кнопка закрытия popup с редактированием профиля*/
const buttonClosePopupProfile = content?.querySelector('#close-button'); 
/**контейнер с формой внутри popup редактирования профиля*/
const containerProfileEditForm = content?.querySelector('#profile-form'); 
/**поле ввода имени пользователя*/
const userNameInput = content?.querySelector('#profile-name'); 
/**поле ввода занятия/профессии пользователя*/
const userProfileInput = content?.querySelector('#profile-person'); 


/**форма новой карточки */
const formCard = document.forms.newCardInfo;

/**popup с формой для добавления новой карточки*/
const popupAddCardForm = content?.querySelector('#popup-card'); 
/**кнопка закрытия popup для добавления новой карточки*/
const buttonCloseAddCardForm = content?.querySelector('#close-button-card'); 
/**контейнер с формой внутри popup добавления карточки*/
const containerAddCardForm = content?.querySelector('#card-form'); 
/**поле ввода названия изображения новой карточки*/
const nameImageCardInput = content?.querySelector('#card-name'); 
/**поле ввода ссылки на изображение новой карточки*/
const urlImageCardInput = content?.querySelector('#img-url'); 


/**popup с полноразмерным изображением*/
const popupFullSizeImage = content?.querySelector('#popup-image'); 
/**полноразмерное изображение в popup*/
const imageFullSize = popupFullSizeImage?.querySelector('.popup__image'); 
/**название изображения в popup*/
const nameImageFullSize = popupFullSizeImage?.querySelector('.popup__image-name'); 
/**кнопка закрытия popup с полноразмерным изображением*/
const buttoneCloseImageFullSize = content?.querySelector('#popup-image-closed'); 


/**template со скелетом карточек*/
const cardTemplate = content?.querySelector('.card-template')?.content; 



/*          ***функции***          */

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


/**внесение данных из popup профиля*/
function handleSubmitProfileForm (evt) {
  evt.preventDefault();
  
  //присвоение данных атрибутам
  nameProfile.textContent = userNameInput.value;
  personProfile.textContent = userProfileInput.value;

  closePopup(popupProfileEditForm);
  formProfile.reset();
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


/**закрытие модального окна через клавишу escape */
function closePressEsc (evt) {
  /** открытое модальное окно*/
  const openedPopup = content.querySelector('.popup_opened');

  if(evt.key === 'Escape'){
    openedPopup.classList.remove('popup_opened');
  };
};

/**закрытие модального окна через клик по overlay */
function closeClickOverlay (element) {
  if(element.target.classList.contains('popup')){
    element.target.classList.remove('popup_opened');
  };
};


/**открытие модального окна */
function openPopup(element) {
  element.classList.add('popup_opened');

  body.addEventListener('click', closeClickOverlay);
  body.addEventListener('keydown', closePressEsc);
};

/**закрытие модального окна */
function closePopup(element) {
  element.classList.remove('popup_opened');

  body.removeEventListener('click', closeClickOverlay);
  body.removeEventListener('keydown', closePressEsc);
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







/*          ***валидация***        */

/**форма в модальном окне */
const formElement = content.querySelector('.popup__form');
/**инпут в форме */
const formInput = formElement.querySelector('.popup__input');
/**спан с сообщением об ошибке */
// const formError = formElement.querySelector(`.${formInput.id}-error`);

/**добавление инпуту класса с ошибкой */
function showInputError(formElement, formInput, errorMessage) {
    /**спан с сообщением об ошибке */
    const formError = formElement.querySelector(`.${formInput.id}-error`);

  formInput.classList.add('popup__input_type_error');

  formError.textContent = errorMessage;
  formError.classList.add('popup__input-error_active');
};


/**удаление у инпута класса с ошибкой */
function hideInputError(formElement, formInput) {
  /**спан с сообщением об ошибке */
  const formError = formElement.querySelector(`.${formInput.id}-error`);

  formInput.classList.remove('popup__input_type_error');

  formError.classList.remove('popup__input-error_active');
  formError.textContent = '';
};


/**проверка валидности кода */
function isValid(formElement, formInput) {
    if (formInput.validity.patternMismatch) {
    // встроенный метод setCustomValidity принимает на вход строку и заменяет ею 
    //стандартное сообщение об ошибке
    formInput.setCustomValidity(formInput.dataset.errorMessage);
  } else {
    // если передать пустую строку, то будут доступны стандартные браузерные сообщения
    formInput.setCustomValidity("");
  }
  
    if (!formInput.validity.valid) {
    // поле не проходит валидацию
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    // поле проходит валидацию
    hideInputError(formElement, formInput);
  }
};


/**поиск невалидного инпута */
function hasInvalidInput(inputList) {
  // проходим по этому массиву инпутов методом some
  return inputList.some((formInput) => {
    // Если поле не валидно, колбэк вернёт true, Обход массива прекратится 
    //и вся функция hasInvalidInput вернёт true
    return !formInput.validity.valid;
  })
}; 


/**переключение кнопки при изменении валидности инпутов */
function toggleButtonState(inputList, formButton) {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    formButton.disabled = true;
    formButton.classList.add('popup__button-save_inactive');
  } else {
        // иначе сделай кнопку активной
    formButton.disabled = false;
    formButton.classList.remove('popup__button-save_inactive');
  }
}; 


/**функция обработки инпутов по валидации в форме */
function handleFormInputs(formElement) {
  /**массив инпутов в форме */
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  /**кнопка submit в форме */
  const formButton = formElement.querySelector('.popup__button-save');

  toggleButtonState(inputList, formButton);

  inputList.forEach((formInput) => {
    // каждому полю добавим обработчик события input
    formInput.addEventListener('input', () => {
      // вызовем isValid, передав ей форму и проверяемый элемент
      isValid(formElement, formInput);
      toggleButtonState(inputList, formButton);
    });
  });
};


/**функция обработки форм для валидации*/
function enableValidation() {
  /**массив форм */
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formElement) => {
    // вызовем handleFormInputs, передав ей элемент формы
    handleFormInputs(formElement);
  });
};



//вызываем функцию обработки форм для валидации
enableValidation(); 