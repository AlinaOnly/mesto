let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let submitForm = popup.querySelector('.popup__form');
let profileName = document.querySelector('.profile__username');
let profileJob = document.querySelector('.profile__job');
let nameInput = popup.querySelector('.popup__form-el_type_name');
let jobInput = popup.querySelector('.popup__form-el_type_job');

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

openPopup.addEventListener('click', openedPopup);

closePopup.addEventListener('click', closedPopup);

submitForm.addEventListener('submit', formSubmitHandler);
