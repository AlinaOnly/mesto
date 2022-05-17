import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsForm = this._form.querySelectorAll('.popup__form-el');
  }

  _getInputValues() {
    const inputValues = {};
    this._inputsForm.forEach(input => {
        inputValues[input.name] = input.value;
      });
    return inputValues;
  }

  setInputValues(values) {
    this._inputsForm.forEach((input) => {
      input.value = values[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
     event.preventDefault();
     this._formSubmit(this._getInputValues());
     this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
