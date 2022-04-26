
export class FormValidator {
  constructor(objFormElement, formElement) {
    this._objFormElement = objFormElement;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement
    .querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._objFormElement.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._objFormElement.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement
    .querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._objFormElement.inputErrorClass);
    errorElement.classList.remove(this._objFormElement.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
    } else {
    this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
  this._inputList = Array.from(this._formElement
  .querySelectorAll(this._objFormElement.inputSelector));

  this._buttonElement = this._formElement
  .querySelector(this._objFormElement.submitButtonSelector);

  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
   });
  }

  _hasInvalidInput() {
   return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
   });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._objFormElement.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._objFormElement.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  enableValidation() {
   this._setEventListeners();
  }
}


