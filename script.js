// @ts-check


const content = document.querySelector('.page');


//карточи и взаимодействие с кнопками внутри карточек:
const elements = content?.querySelector('.elements');

const cardTemplate = content?.querySelector('.card-template')?.content;

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


initialCards.forEach(createCard);



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

elements?.append(cardElement);
};




//popup с профилем:

const popupProfile = content?.querySelector('#popup-profile');

function openPopup() {
  popupProfile?.classList.add('popup_opened');
};

function closePopup() {
  popupProfile?.classList.remove('popup_opened');
};

const buttonEdit = content?.querySelector('#button-edit');

buttonEdit?.addEventListener('click', function() {
  openPopup()
});

const closeButton = content?.querySelector('#close-button');

closeButton?.addEventListener('click', function() {
  closePopup()
});


//popup с данными о месте:

const buttonCard = content?.querySelector('#button-card');

const popupCard = content?.querySelector('#popup-card');

function openPopupCard() {
  popupCard?.classList.add('popup_opened');
};

buttonCard?.addEventListener('click', function() {
  openPopupCard()
});

const closeButtonCard = content?.querySelector('#close-button-card');

function closePopupCard() {
  popupCard?.classList.remove('popup_opened');
};

closeButtonCard?.addEventListener('click', function() {
  closePopupCard()
});


// формы и передача данных
// popup форма профиля

const formElement = content?.querySelector('#profile-form');

const nameInput = content?.querySelector('#profile-name');
const jobInput = content?.querySelector('#profile-person');

function formSubmitHandler (evt) {
    evt.preventDefault();

    const profileName = content?.querySelector('.profile__name');
    const profilePerson = content?.querySelector('.profile__person');

    profileName.textContent = nameInput.value;
    profilePerson.textContent = jobInput.value;

    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);




//popup форма добавления картинок

const formCard = content?.querySelector('#card-form');

const nameCard = content?.querySelector('#card-name');
const imgUrl = content?.querySelector('#img-url');

function cardImgSubmitHandler (evt) {
    evt.preventDefault();

    const newCard = {name: nameCard.value, link: imgUrl.value};

    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.element__img').src = newCard.link;
    cardElement.querySelector('.element__img').alt = newCard.name;
    cardElement.querySelector('.element__name').textContent = newCard.name;
  
    //реализация лайка
    const likeButton = cardElement.querySelector('.element__button-heart');
    likeButton.addEventListener('click', function () {
      likeButton.classList.toggle('element__button-heart_active');
    });
  
    //удаление карточки
    const trashButton = cardElement.querySelector('.element__button-trash');
    trashButton.addEventListener('click', function () {
      const removeItem = trashButton.closest('.element');
      removeItem.remove();
    });
    closePopupCard();

    elements?.prepend(cardElement);    
};

formCard.addEventListener('submit', cardImgSubmitHandler);






//popup с картинкой

const popupImageZone = content?.querySelector('#popup-image');

const popupImage = popupImageZone?.querySelector('.popup__image');
const popupText = popupImageZone?.querySelector('.popup__image-name');

const cardsImage = elements?.querySelectorAll('.element__img'); 



cardsImage?.forEach(element => {
  element.addEventListener('click', function(evt) {
    popupImageZone?.classList.add('popup_opened');
        
    const popupImageClosed = content?.querySelector('#popup-image-closed');
    
    popupImageClosed?.addEventListener('click', function() {
      popupImageZone?.classList.remove('popup_opened')
    });    

    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupText.textContent = evt.target.alt;
  });
});










/*function cardImgSubmitHandler (evt) {
  evt.preventDefault();

  const newCard = {name: nameCard.value, link: imgUrl.value};
    
  

  initialCards.unshift(newCard); 
  
  console.log(initialCards);
 
  closePopupCard();

};*/