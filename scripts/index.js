
const profilePopup = document.querySelector('#profilePopup');
const buttonProfileOpen = document.querySelector('.profile__edit-button');
const buttonProfileClose = profilePopup.querySelector('.popup__close-button');
const buttonProfileSubmit = profilePopup.querySelector('#profileSubmitForm');

const profileName = document.querySelector('.profile__username');
const profileJob = document.querySelector('.profile__job');
const inputName = profilePopup.querySelector('.popup__form-el_type_name');
const inputJob = profilePopup.querySelector('.popup__form-el_type_job');

const buttonCardAdd = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('#cardPopup');
const cardSubmit = cardPopup.querySelector('#newCardAddForm');
const buttonCardClose = cardPopup.querySelector('.popup__close-button');
const formInputName = cardPopup.querySelector('.popup__form-el_type_title');
const formInputLink = cardPopup.querySelector('.popup__form-el_type_link');

const elementsCard = document.querySelector('.elements');

const imagePopup = document.querySelector('#imagePopup');
const imageView = imagePopup.querySelector('.popup__image');
const imageText = imagePopup.querySelector('.popup__image-text');
const buttonImageClose = imagePopup.querySelector('.popup__close-button');

const cardTemplate = document.querySelector('.cards-template');

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

function openPopup(popup) {
  popup.classList.add('popup_open');
  closeOverlay(popup);
  closeEscButton(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
}

function closeOverlay(popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
}

function closeEscButton(popup) {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
    closePopup(popup);
    }
  });
}

function openPropfilePopup() { 
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(profilePopup);
} 

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(profilePopup);
}

function createCards(element) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const imageElementCard = cardElement.querySelector('.element__photo');

  cardElement.querySelector('.element__text').textContent = element.name;
  imageElementCard.alt = element.name;
  imageElementCard.src = element.link;

  cardElement.querySelector('.element__heart-button').addEventListener('click', (event) => {
     event.target.classList.toggle('element__heart-active');
  });

  cardElement.querySelector('.element__trash-button').addEventListener('click', (event) => {
     event.target.closest('.element').remove();
  });

  imageElementCard.addEventListener('click', (event) => {
    imageView.src = event.target.src;
    imageView.alt = event.target.alt;
    imageText.textContent = event.target.alt;
    openPopup(imagePopup);
  });
  return cardElement;
}

function renderCards(element) {
  elementsCard.prepend(createCards(element));
}

function addNewPhoto(event) {
  event.preventDefault();
  const newInputTitle = formInputName.value;
  const newInputLink = formInputLink.value;
  renderCards({ name: newInputTitle, link: newInputLink });
  closePopup(cardPopup);
  cardSubmit.reset(formInputName, formInputLink);
}

buttonProfileOpen.addEventListener('click', openPropfilePopup);
buttonProfileClose.addEventListener('click', () => {
  closePopup(profilePopup);
});

buttonCardAdd.addEventListener('click', () => {
  openPopup(cardPopup);
});

buttonCardClose.addEventListener('click', () => {
  closePopup(cardPopup);
});

profilePopup.addEventListener('submit', formSubmitHandler);
cardSubmit.addEventListener('submit', addNewPhoto);

buttonImageClose.addEventListener('click', () => {
  closePopup(imagePopup);
});

initialCards.forEach(renderCards); 


