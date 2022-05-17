
export const profilePopup = document.querySelector('#profilePopup');
export const buttonProfileOpen = document.querySelector('.profile__edit-button');
//export const buttonProfileClose = profilePopup.querySelector('.popup__close-button');

export const profileForm = profilePopup.querySelector('.popup__form');
export const profileName = '.profile__username';
export const profileJob = '.profile__job';
//export const inputName = profilePopup.querySelector('.popup__form-el_type_name');
//export const inputJob = profilePopup.querySelector('.popup__form-el_type_job');

export const buttonCardAdd = document.querySelector('.profile__add-button');
export const cardPopup = document.querySelector('#cardPopup');
export const newCardForm = cardPopup.querySelector('.popup__form');
//export const cardSubmit = cardPopup.querySelector('#newCardAddForm');
//export const buttonCardClose = cardPopup.querySelector('.popup__close-button');
//export const formInputName = cardPopup.querySelector('.popup__form-el_type_title');
//export const formInputLink = cardPopup.querySelector('.popup__form-el_type_link');

export const elementsCard = document.querySelector('.elements');

export const imagePopup = document.querySelector('#imagePopup');
//export const imageView = imagePopup.querySelector('.popup__image');
//export const imageText = imagePopup.querySelector('.popup__image-text');
//export const buttonImageClose = imagePopup.querySelector('.popup__close-button');

export const initialCards = [
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

export const objFormElement = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-el',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__form-el_type_error',
  errorClass: 'popup__input-error_visible'
};
