import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageView = this._popupSelector.querySelector('.popup__image');
    this._imageText = this._popupSelector.querySelector('.popup__image-text');
  }

  open(src, name) {
   this._imageView.src = src;
   this._imageView.alt = name;
   this._imageText.textContent = name;
   super.open();
  }
}
