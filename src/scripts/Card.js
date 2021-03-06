
export class Card {
  constructor(data, cardTemplate, openImagePopup) {
    this._name = data.name;
    this._src = data.link;
    this._cardTemplate = cardTemplate;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector('.element__photo');
    this._image.src = this._src;
    this._image.alt = this._name;

    this._text = this._element.querySelector('.element__text')
    .textContent = this._name;

    this._cardDelete = this._element.querySelector('.element__trash-button');
    this._likeToggle = this._element.querySelector('.element__heart-button');

    this._setEventListeners();
    return this._element;
  }

  _deleteCard() {
    this._element.remove();
  }

  _handleHeartClick() {
    this._likeToggle.classList.toggle('element__heart-active');
  }

  _setEventListeners() {
    this._likeToggle.addEventListener('click', () => {
      this._handleHeartClick();
    });

    this._cardDelete.addEventListener('click', () => {
      this._deleteCard();
    });

    this._image.addEventListener('click', () => {
      this._openImagePopup(this._src, this._name);
    });
  }
}



