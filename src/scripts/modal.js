import { body, content } from './utils.js'


/*          ***закрытие/открытие модальных окон***        */

/**закрытие модального окна через клавишу escape */
function closePressEsc (evt) {
  if(evt.key === 'Escape'){
    /** открытое модальное окно*/
    const openedPopup = content.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

/**закрытие модального окна через клик по overlay */
function closeClickOverlay (element) {
  if(element.target.classList.contains('popup')){
    const openedPopup = content.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};


/**открытие модального окна */
function openPopup(element) {
  element.classList.add('popup_opened');

  body.addEventListener('mousedown', closeClickOverlay);
  body.addEventListener('keydown', closePressEsc);
};

/**закрытие модального окна */
function closePopup(element) {
  element.classList.remove('popup_opened');

  body.removeEventListener('mousedown', closeClickOverlay);
  body.removeEventListener('keydown', closePressEsc);
};

export { openPopup, closePopup }