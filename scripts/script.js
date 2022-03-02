let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.popup-open');
let closePopup = popup.querySelector('.popup__close-button');
let submitForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__username');
let profileJob = document.querySelector('.profile__job');
let nameInput = popup.querySelector('.popup__username');
let jobInput = popup.querySelector('.popup__job');

function togglePopup() {
  popup.classList.toggle('popup__open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    togglePopup();
  }
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup();
}

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
submitForm.addEventListener('submit', formSubmitHandler);
