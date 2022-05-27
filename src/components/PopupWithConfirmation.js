import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor(formSubmit, popupSelector) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._textButton = this._submitButton.textContent;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  loadConfirmButton(loading) {
    if (loading) {
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = this._textButton;
    }
  }

  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._formSubmit(this._card);
    });
    super.setEventListeners();
  }
}
