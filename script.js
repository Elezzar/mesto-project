/*          ***переменные***          */

const content = document.querySelector('.page');
const elements = content?.querySelector('.elements');
const cardTemplate = content?.querySelector('.card-template')?.content;
const popupProfile = content?.querySelector('#popup-profile');
const buttonEdit = content?.querySelector('#button-edit');
const closeButton = content?.querySelector('#close-button');
const buttonCard = content?.querySelector('#button-card');
const popupCard = content?.querySelector('#popup-card');
const closeButtonCard = content?.querySelector('#close-button-card');
const formElement = content?.querySelector('#profile-form');
const nameInput = content?.querySelector('#profile-name');
const jobInput = content?.querySelector('#profile-person');
const formCard = content?.querySelector('#card-form');
const nameCard = content?.querySelector('#card-name');
const imgUrl = content?.querySelector('#img-url');
const popupImageZone = content?.querySelector('#popup-image');
const popupImage = popupImageZone?.querySelector('.popup__image');
const popupText = popupImageZone?.querySelector('.popup__image-name');

/*массив с изображениями и названиями*/
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


/*          ***вызовы функций***          */


initialCards.forEach(createCard);

buttonEdit?.addEventListener('click', function() {
  openPopup()
});

closeButton?.addEventListener('click', function() {
  closePopup()
});

buttonCard?.addEventListener('click', function() {
  openPopupCard()
});

closeButtonCard?.addEventListener('click', function() {
  closePopupCard()
});

formElement.addEventListener('submit', formSubmitHandler);

formCard.addEventListener('submit', cardImgSubmitHandler);


/*          ***функции***          */

/*создание карточки*/
function createCard(element) {

  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.element__img').src = element.link;
  cardElement.querySelector('.element__img').alt = element.name;
  cardElement.querySelector('.element__name').textContent = element.name;

  //реализация лайка
  const likeButton = cardElement.querySelector('.element__button-heart');
  likeButton.addEventListener('click', function toggleLikeButton() {
    likeButton.classList.toggle('element__button-heart_active');
  });

  //удаление карточки
  const trashButton = cardElement.querySelector('.element__button-trash');
  trashButton.addEventListener('click', function () {
    const removeItem = trashButton.closest('.element');
    removeItem.remove();
  });

  //открытие изображения на полный экран
  cardElement.querySelector('.element__img').addEventListener('click', function(evt) {
      popupImageZone?.classList.add('popup_opened');
        
      const popupImageClosed = content?.querySelector('#popup-image-closed');
    
      popupImageClosed?.addEventListener('click', function() {
      popupImageZone?.classList.remove('popup_opened')
    });    

      popupImage.src = evt.target.src;
      popupImage.alt = evt.target.alt;
      popupText.textContent = evt.target.alt;
    });
  
elements?.append(cardElement);
};


/*открытие/закрытие popup с редактированием профиля*/
function openPopup() {
  popupProfile?.classList.add('popup_opened');
};

function closePopup() {
  popupProfile?.classList.remove('popup_opened');
};


/*открытие/закрытие popup с созданием новой карточки*/
function openPopupCard() {
  popupCard?.classList.add('popup_opened');
};

function closePopupCard() {
  popupCard?.classList.remove('popup_opened');
};

/*внесение данных из popup профиля*/
function formSubmitHandler (evt) {
    evt.preventDefault();

    const profileName = content?.querySelector('.profile__name');
    const profilePerson = content?.querySelector('.profile__person');

    profileName.textContent = nameInput.value;
    profilePerson.textContent = jobInput.value;

    closePopup();
};


/*внесение данных из popup с карточкой*/
function cardImgSubmitHandler (evt) {
  evt.preventDefault();

  initialCards.unshift({name: nameCard.value, link: imgUrl.value});

  elements?.querySelectorAll('.element').forEach(function (elm) {
    elm.remove();
  });

  closePopupCard();

  initialCards.forEach(createCard);
};