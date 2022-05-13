
import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import { initialCards, objFormElement, profilePopup, buttonProfileOpen,
  profileForm, profileName, profileJob,
  buttonCardAdd, cardPopup, newCardForm, imagePopup} from '../utils/constants.js';


const defaultCardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCards(item, '.cards-template', handleCardClick);
    defaultCardList.addItem(cardElement);
  }
}, '.elements');

const userInfo = new UserInfo(profileName, profileJob);

const cardPopupOpen = new PopupWithImage(imagePopup);
cardPopupOpen.setEventListeners();

const infoPopupProfile = new PopupWithForm(profilePopup, submitFormProfile);
infoPopupProfile.setEventListeners();

const infoPopupCard = new PopupWithForm(cardPopup, submitCards);
infoPopupCard.setEventListeners();

const profileValidation = new FormValidator(objFormElement, profileForm);
profileValidation.enableValidation();

const photoValidation = new FormValidator(objFormElement, newCardForm);
photoValidation.enableValidation();

function createCards(data, cardSelector) {
  const card = new Card (data, cardSelector, handleCardClick);
  return card.generateCard();
}

function submitCards(item) {
  const cards = createCards(item, '.cards-template', handleCardClick);
  defaultCardList.prependItems(cards);
  infoPopupCard.close();
}

function submitFormProfile(inputs) {
  userInfo.setUserInfo(inputs);
  infoPopupProfile.close();
}

function handleCardClick(src, name) {
  cardPopupOpen.open(src, name);
}

buttonProfileOpen.addEventListener('click', () => {
  infoPopupProfile.setInputValues(userInfo.getUserInfo());
  infoPopupProfile.open();
  profileValidation.resetValidation();
});

buttonCardAdd.addEventListener('click', () => {
  infoPopupCard.open();
  photoValidation.resetValidation();
});

defaultCardList.renderItems();



