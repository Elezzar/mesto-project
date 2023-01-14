import { body, content } from './utils.js'


/*          ***закрытие/открытие модальных окон***        */

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

export { openPopup, closePopup }