const popup = document.querySelector('#popupProfile');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__close-button');
const submitForm = popup.querySelector('.popup__form');

const profileName = document.querySelector('.profile__username');
const profileJob = document.querySelector('.profile__job');
const nameInput = popup.querySelector('.popup__form-el_type_name');
const jobInput = popup.querySelector('.popup__form-el_type_job');

const photoAddButton = document.querySelector('.profile__add-button');
const popupAddsCards = document.querySelector('#popupAddsCards');
const submitFormSave = popupAddsCards.querySelector('.save');
const popupAddsClose = popupAddsCards.querySelector('.popup__close-button');

const elementsCard = document.querySelector('.elements');

const openImagePopup = document.querySelector('#openImage');
const imageView = openImagePopup.querySelector('.popup__image');
const imageText = openImagePopup.querySelector('.popup__image-text');
const popupImageClose = openImagePopup.querySelector('.popup__close-button');

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

function openedPopup() {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closedPopup() {
  popup.classList.remove('popup_open');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closedPopup();
}

function openedPopupCards() {
  popupAddsCards.classList.add('popup_open');
} 

function closedPopupCards() {
  popupAddsCards.classList.remove('popup_open');
} 

function openedImage() {
  openImagePopup.classList.add('popup_open');
}

function renderCards(element) {
  const cardTemplate = document.querySelector('.cards-template')
  .content.firstElementChild.cloneNode(true);
  
  

  cardTemplate.querySelector('.element__text').textContent = element.name;
  cardTemplate.querySelector('.element__photo').alt = element.name;
  cardTemplate.querySelector('.element__photo').src = element.link;

  elementsCard.prepend(cardTemplate);

  const imageOpen = document.querySelector('.element__photo');
  imageOpen.addEventListener('click', (event) => {
    imageView.src = event.target.src;
    imageView.alt = event.target.alt;
    imageText.textContent = event.target.alt;
    openedImage();
    console.log(cardTemplate);
  });
}

function closedImage() {
  openImagePopup.classList.remove('popup_open');
}

function addPhoto(event) {
  event.preventDefault();

  const formInputName = event.currentTarget
  .querySelector('.popup__form-el_type_name').value;
  const formInputLink = event.currentTarget
  .querySelector('.popup__form-el_type_link').value;

  renderCards({ name: formInputName, link: formInputLink });

  event.currentTarget.reset(formInputName, formInputLink);

  closedPopupCards();
}

initialCards.map(renderCards);

document.body.addEventListener("click", (event) => {
  const photoElement = event.target.closest('.element');
  
    if (!photoElement) {
      return;
    }
    if (event.target.classList.contains('element__heart-button')) {
      handleLike(photoElement);
    } else if (event.target.classList.contains('element__trash-button')) {
      removeCard(photoElement);
    }
});

function handleLike(photoElement) {
  const heartButton = photoElement.querySelector('.element__heart-button');
  heartButton.classList.toggle('element__heart-active');
}

function removeCard(photoElement) {
  photoElement.remove();
}

openPopup.addEventListener('click', openedPopup);
closePopup.addEventListener('click', closedPopup);

photoAddButton.addEventListener('click', openedPopupCards);
popupAddsClose.addEventListener("click", closedPopupCards);

submitForm.addEventListener('submit', formSubmitHandler);

submitFormSave.addEventListener('submit', addPhoto);

popupImageClose.addEventListener('click', closedImage);