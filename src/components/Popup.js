
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popupSelector.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  _handleEscClose(event) {
      if (event.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(event) {
    if (event.target.classList.contains('popup') || event
    .target.classList.contains('popup__close-button')) {
    this.close();
    }
  }

  setEventListeners() {
    this._popupSelector
    .addEventListener('click', this._handleOverlayClose.bind(this));
  }
}
