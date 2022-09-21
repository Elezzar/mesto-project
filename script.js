const content = document.querySelector('.page');

//переменная с данными для карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




//popup с профилем:

const popupProfile = content.querySelector('#popup-profile');

function openPopup() {
  popupProfile.classList.add('popup_opened');
};

function closePopup() {
  popupProfile.classList.remove('popup_opened');
};

const buttonEdit = content.querySelector('#button-edit');

buttonEdit.addEventListener('click', function() {
  openPopup()
});

const closeButton = content.querySelector('#close-button');

closeButton.addEventListener('click', function() {
  closePopup()
});



//popup с данными о месте:

const buttonCard = content.querySelector('#button-card');

const popupCard = content.querySelector('#popup-card');

function openPopupCard() {
  popupCard.classList.add('popup_opened');
};

buttonCard.addEventListener('click', function() {
  openPopupCard()
});

const closeButtonCard = content.querySelector('#close-button-card');

function closePopupCard() {
  popupCard.classList.remove('popup_opened');
};

closeButtonCard.addEventListener('click', function() {
  closePopupCard()
});


// popup с развернутой карточкой места:








//const buttonsHeart = content.querySelectorAll('.element__button-heart');
//const buttonHeart = Array.prototype.slice.call(buttonsHeart);

//function buttonLike() {
  //buttonHeart.classList.toggle('element__button-heart_active');
//};

//buttonHeart.forEach((item => {
  //item.classList.toggle('element__button-heart_active')
//}));

//buttonHeart.addEventListener('click', function() {
  //evt.forEach((item => {
    //item.classList.toggle('element__button-heart_active')
  //}));
//});
