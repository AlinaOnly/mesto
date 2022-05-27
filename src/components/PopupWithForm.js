import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsForm = this._form.querySelectorAll('.popup__form-el');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._textButton = this._submitButton.textContent;
  }

  setInputValues(values) {
    this._inputsForm.forEach((input) => {
      input.value = values[input.name];
    });
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputsForm.forEach((input) => {
        this._inputValues[input.name] = input.value;
      });
    return this._inputValues;
  }

  loadButton(loading) {
    if (loading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = this._textButton;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._formSubmit(this._getInputValues());
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}
