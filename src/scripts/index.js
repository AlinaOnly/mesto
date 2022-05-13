
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';


//const
const profilePopup = document.querySelector('#profilePopup');
const buttonProfileOpen = document.querySelector('.profile__edit-button');
const buttonProfileClose = profilePopup.querySelector('.popup__close-button');

const profileForm = profilePopup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__username');
const profileJob = document.querySelector('.profile__job');
const inputName = profilePopup.querySelector('.popup__form-el_type_name');
const inputJob = profilePopup.querySelector('.popup__form-el_type_job');

const buttonCardAdd = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('#cardPopup');
const newCardForm = cardPopup.querySelector('.popup__form');
const cardSubmit = cardPopup.querySelector('#newCardAddForm');
const buttonCardClose = cardPopup.querySelector('.popup__close-button');
const formInputName = cardPopup.querySelector('.popup__form-el_type_title');
const formInputLink = cardPopup.querySelector('.popup__form-el_type_link');

const elementsCard = document.querySelector('.elements');

const imagePopup = document.querySelector('#imagePopup');
const imageView = imagePopup.querySelector('.popup__image');
const imageText = imagePopup.querySelector('.popup__image-text');
const buttonImageClose = imagePopup.querySelector('.popup__close-button');

const initialCards = [
  {
    name: 'Сальвадор Дали',
    link: 'https://images.unsplash.com/photo-1647902861692-8ea4c447a6b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Я',
    link: 'https://images.unsplash.com/photo-1553366735-4f37c7dfa0a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Папуг',
    link: 'https://images.unsplash.com/photo-1645781893238-5b592576d187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Не понимаю, что происходит',
    link: 'https://images.unsplash.com/photo-1647976196024-c7811ee50ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Куда спрятал?',
    link: 'https://images.unsplash.com/photo-1649512725739-3703ea05f143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Big Floppa',
    link: 'https://images.unsplash.com/photo-1643579296072-c78054cbb51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3N3xKcGc2S2lkbC1Ia3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];

const objFormElement = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-el',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__form-el_type_error',
  errorClass: 'popup__input-error_visible'
};


//open & close popup
function openPopup(popup) {
  popup.classList.add('popup_open');
  popup.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', closeEscButton);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
  popup.removeEventListener('click', closeOverlay);
  document.removeEventListener('keydown', closeEscButton);
}

function closeOverlay(event) {
  if (event.target.classList.contains('popup') || event
    .target.classList.contains('popup__close-button')) {
    closePopup(event.currentTarget);
  }
}

function closeEscButton(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open');
    closePopup(openedPopup);
  }
}

function openProfilePopup() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  profileValidation.resetValidation();
  openPopup(profilePopup);
}

function openImagePopup(src, name) {
  imageView.src = src;
  imageView.alt = name;
  imageText.textContent = name;
  openPopup(imagePopup);
}


//form validation
const profileValidation = new FormValidator(objFormElement, profileForm);
profileValidation.enableValidation();
const photoValidation = new FormValidator(objFormElement, newCardForm);
photoValidation.enableValidation();

function submitFormProfile(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(profilePopup);
}


//create card
function createCards(data, cardTemplate, openImagePopup) {
  const card = new Card(data, cardTemplate, openImagePopup);
  return card.generateCard();
}

initialCards.forEach((item) => {
  const cardElement = new createCards(item, '.cards-template', openImagePopup);
  elementsCard.append(cardElement);
});

function renderCards(item) {
  const cardElement = new createCards(item, '.cards-template', openImagePopup);
  elementsCard.prepend(cardElement);
}

function addNewPhoto(event) {
  event.preventDefault();
  const newInputTitle = formInputName.value;
  const newInputLink = formInputLink.value;
  renderCards({ name: newInputTitle, link: newInputLink });

  closePopup(cardPopup);
}


//listeners
buttonProfileOpen.addEventListener('click', openProfilePopup);
buttonProfileClose.addEventListener('click', () => {
  closePopup(profilePopup);
});

buttonCardAdd.addEventListener('click', () => {
  cardSubmit.reset();
  photoValidation.resetValidation();
  openPopup(cardPopup);
});

buttonCardClose.addEventListener('click', () => {
  closePopup(cardPopup);
});

profilePopup.addEventListener('submit', submitFormProfile);
cardSubmit.addEventListener('submit', addNewPhoto);

buttonImageClose.addEventListener('click', () => {
  closePopup(imagePopup);
});

