import "../pages/index.css";

import {
  buttonProfileEditForm,
  buttonAddCardForm,
  formCard,
  formProfile,
  formAvatar,
  buttonEditAvatar,
  settings,
  serverAuthorization
} from "./constants.js";

import Api from "./Api.js";

import FormValidator from "./FormValidator.js";

import Section from "./Section.js";

import Card from "./Card.js";

import PopupWithImage from "./PopupWithImage.js";

import PopupWithForm from "./PopupWithForm.js";

import UserInfo from "./UserInfo.js";





const formCardValidator = new FormValidator(settings, formCard);
const formProfileValidator = new FormValidator(settings, formProfile);
const formAvatarValidator = new FormValidator(settings, formAvatar);

formCardValidator.enableValidation();
formProfileValidator.enableValidation();
formAvatarValidator.enableValidation();

const api = new Api(serverAuthorization);

const imagePopup = new PopupWithImage("popup-image", "popup_opened");

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__avatar",
  ".profile__person",
  api.getProfileData.bind(api),
  api.sendProfileData.bind(api)
);

let userId = ''

const section = new Section({}, ".elements");

Promise.all([api.getProfileData(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    userId = user._id
    cards.forEach((card) => {
      const item = new Card(card, user._id, ".card-template", {
        likeHandler: api.placeLikeOnCard.bind(api),
        deleteHandler: api.deleteLikeFromCard.bind(api),
        clickHandler: (link, name) => {
          imagePopup.open(link, name);
        },
        cardDelete: (id)=>{api.deleteCard(id)} 
      });
      section.renderItems(item.generateCard());
    });
  })

  .catch((err) => {
    console.log(err);
  });

const avatarPopup = new PopupWithForm(
  "popup-avatar",
  "popup_opened",
  (values) => {
    api.changeUserAvatar(values).then((res) => {
      userInfo.setUserInfo(res);
      avatarPopup.close();
    });
  }
);

buttonEditAvatar.addEventListener("click", function () {
  avatarPopup.open();
});

const profilePopup = new PopupWithForm(
  "popup-profile",
  "popup_opened",
  (values) => {
    const profileData = {};
    profileData.name = values.profilename;
    profileData.about = values.profileperson;
    api.sendProfileData(profileData).then((res) => {
      console.log(res);
      userInfo.setUserInfo(res);
      profilePopup.close();
    });
  }
);

buttonProfileEditForm.addEventListener("click", function () {
  profilePopup.open();
});

const cardPopup = new PopupWithForm(
  "popup-card",
  "popup_opened",
  (values) => {
    const cardData = {};
    cardData.name = values.cardname;
    cardData.link = values.imgurl;
    api.addNewCard(cardData).then((res)=>{
      const newCard = new Card(res, userId, ".card-template", {
        likeHandler: api.placeLikeOnCard.bind(api),
        deleteHandler: api.deleteLikeFromCard.bind(api),
        clickHandler: (link, name) => {
          imagePopup.open(link, name);
        },
        cardDelete: (id)=>{api.deleteCard(id)} 
      });
      section.addItem(newCard.generateCard());
    })
    cardPopup.close()
  }
);

buttonAddCardForm.addEventListener("click", function () {
  cardPopup.open();
});