
import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js';

import { objFormElement, buttonProfileOpen,
  profileForm, profileAvatar, profileName, profileJob,
  buttonCardAdd, newCardForm, avatarForm, buttonAvatar} from '../utils/constants.js';


//экземпляр класса api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: '78c755b0-7a3d-4a90-beb4-a117ea5bb0bb',
    'Content-Type': 'application/json'
  }
});


//Промис и обработка ошибок
Promise.all([api.getInfoUser(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    defaultCardList.renderItems(cardData);
  }).catch((err) => {
    console.log(err);
  });


//экземпяры классов
const defaultCardList = new Section({
  renderer: createCards,
  }, '.elements'
);

const userInfo = new UserInfo({
  userName: profileName, userJob: profileJob,  userAvatar: profileAvatar} );

const cardPopupOpen = new PopupWithImage('#imagePopup');
cardPopupOpen.setEventListeners();

const infoPopupProfile = new PopupWithForm('#profilePopup', submitFormProfile);
infoPopupProfile.setEventListeners();

const infoPopupCard = new PopupWithForm('#cardPopup', submitCards);
infoPopupCard.setEventListeners();

const avatarPopupChange = new PopupWithForm('#avatarPopup', submitAvatar);
avatarPopupChange.setEventListeners();

const confirmDeleteImagePopup = new PopupWithConfirmation(submitDeleteImage, '#deleteImagePopup');
confirmDeleteImagePopup.setEventListeners();


//валидация
const profileValidation = new FormValidator(objFormElement, profileForm);
profileValidation.enableValidation();

const photoValidation = new FormValidator(objFormElement, newCardForm);
photoValidation.enableValidation();

const avatarValidation = new FormValidator(objFormElement, avatarForm);
avatarValidation.enableValidation();


//функионал
function createCards(data) {
  const card = new Card (
    data, handleCardClick,
    handleLikeCounter, handleTrashCard,
    '.cards-template',
    userInfo.returnMyUserId()
    );
  return card.generateCard();
}

function submitAvatar(avatar) {
  avatarPopupChange.loadButton(true);
  api.changeAvatar(avatar)
  .then((res) => {
    userInfo.setUserInfo(res);
    avatarPopupChange.close();
  })
  .finally(() => {
    avatarPopupChange.loadButton(false);
  })
  .catch((err) =>
    console.log((err)));
}

function submitDeleteImage(card) {
  confirmDeleteImagePopup.loadConfirmButton(true);
  api.deleteInitialCards(card.cardId)
  .then(() => {
    card.deleteCard();
    confirmDeleteImagePopup.close();
  })
  .finally(() => {
    confirmDeleteImagePopup.loadConfirmButton(false);
  })
  .catch((err) =>
    console.log((err)));
}

function submitFormProfile(data) {
  infoPopupProfile.loadButton(true);
  api.editInfoUser(data)
  .then((res) => {
    userInfo.setUserInfo(res);
    infoPopupProfile.close();
  })
  .finally(() =>
    infoPopupProfile.loadButton(false))
  .catch((err) =>
    console.log((err)));
}

function handleCardClick(src, name) {
  cardPopupOpen.open(src, name);
}

function submitCards(data) {
  infoPopupCard.loadButton(true);
  api.postInitialCards(data)
  .then((res) => {
    defaultCardList.addItem(createCards(res));
    infoPopupCard.close();
  })
  .finally(() => {
    infoPopupCard.loadButton(false);
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleTrashCard(card) {
  confirmDeleteImagePopup.open(card);
}

function handleLikeCounter(card) {
  if (card.myLike) {
    api.deleteLike(card.cardId)
    .then((res) => {
      card.removeHeartClick(res.likes.length);
    })
    .catch((err) =>
      console.log((err)));
  } else {
    api.addLike(card.cardId)
    .then((res) => {
      card.addHeartClick(res.likes.length);
    })
    .catch((err) =>
      console.log((err)));
  }
}

//батоны
buttonProfileOpen.addEventListener('click', () => {
  infoPopupProfile.setInputValues(userInfo.getUserInfo());
  profileValidation.resetValidation();
  infoPopupProfile.open();
});

buttonCardAdd.addEventListener('click', () => {
  photoValidation.resetValidation();
  infoPopupCard.open();
});

buttonAvatar.addEventListener('click', () => {
  avatarValidation.resetValidation();
  avatarPopupChange.open();
});




