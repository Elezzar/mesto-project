import "../pages/index.css";

import {
  buttonProfileEditForm,
  buttonAddCardForm,
  buttonEditAvatar,
  formCard,
  formProfile,
  formAvatar,
  userNameInput,
  userPersonInput,
  settings,
  serverAuthorization,
} from "./constants.js";

import Api from "./Api.js";

import FormValidator from "./FormValidator.js";

import Section from "./Section.js";

import Card from "./Card.js";

import PopupWithImage from "./PopupWithImage.js";

import PopupWithForm from "./PopupWithForm.js";

import UserInfo from "./UserInfo.js";

let userId = "";

const formCardValidator = new FormValidator(settings, formCard);
const formProfileValidator = new FormValidator(settings, formProfile);
const formAvatarValidator = new FormValidator(settings, formAvatar);

const api = new Api(serverAuthorization);

const imagePopup = new PopupWithImage("popup-image", "popup_opened");

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__avatar",
  ".profile__person"
);

const section = new Section({}, ".elements");

const avatarPopup = new PopupWithForm(
  "popup-avatar",
  "popup_opened",
  (values) => {
    api
      .changeUserAvatar(values)
      .then((res) => {
        userInfo.setUserInfo(res);
        avatarPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarPopup.setBtnStatus(false);
      });
  }
);

const profilePopup = new PopupWithForm(
  "popup-profile",
  "popup_opened",
  (values) => {
    const profileData = {};
    profileData.name = values.profilename;
    profileData.about = values.profileperson;
    api
      .sendProfileData(profileData)
      .then((res) => {
        userInfo.setUserInfo(res);
        profilePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profilePopup.setBtnStatus(false);
      });
  }
);

const cardPopup = new PopupWithForm("popup-card", "popup_opened", (values) => {
  const cardData = {};
  cardData.name = values.cardname;
  cardData.link = values.imgurl;
  api
    .addNewCard(cardData)
    .then((res) => {
      section.addItem(createCard(res, userId));
      cardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardPopup.setBtnStatus(false);
    });
});

function deleteCard(card, id) {
  api.deleteCard(id)
    .then(() => {
      card.remove();
      card = null;
    })
    .catch((err) => {
      console.log(err);
    })
}

function putLike(id, button, likeCounter) {
  api.placeLikeOnCard(id)
    .then((res)=>{
    button.classList.add("element__button-heart_active");
    likeCounter.textContent = res.likes.length;
    })
    .catch((err) => {
      console.log(err);
    })
}

function deleteLike(id, button, likeCounter) {
  api.deleteLikeFromCard(id)
    .then((res)=>{
      button.classList.remove("element__button-heart_active");
      likeCounter.textContent = res.likes.length;
    })
    .catch((err) => {
      console.log(err);
    })
}

function createCard(card, id) {
  const item = new Card(card, id, ".card-template", {
    likeHandler: putLike,
    deleteHandler: deleteLike,
    clickHandler: (link, name) => {
      imagePopup.open(link, name);
    },
    cardDelete: deleteCard,
  });
  const cardElement = item.generateCard();
  return cardElement;
}

formCardValidator.enableValidation();
formProfileValidator.enableValidation();
formAvatarValidator.enableValidation();

profilePopup.setEventListeners();
avatarPopup.setEventListeners();
imagePopup.setEventListeners();
cardPopup.setEventListeners();

buttonEditAvatar.addEventListener("click", function () {
  avatarPopup.open();
});

buttonProfileEditForm.addEventListener("click", function () {
  const infoObject = userInfo.getUserInfo();
  userNameInput.value = infoObject.name;
  userPersonInput.value = infoObject.about;
  profilePopup.open();
});

buttonAddCardForm.addEventListener("click", function () {
  cardPopup.open();
});

Promise.all([api.getProfileData(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    userId = user._id;
    cards.forEach((card) => {
      section.renderItems(createCard(card, user._id));
    });
  })

  .catch((err) => {
    console.log(err);
  });

