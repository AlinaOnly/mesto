
export class Card {
  constructor(data,
    handleCardClick, handleLikeCounter, handleTrashCard,
    cardSelector, userId) {
    this._name = data.name;
    this._src = data.link;
    this._ownerId = data.owner._id;
    this._myUserId = userId;
    this.cardId = data._id;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleLikeCounter = handleLikeCounter;
    this._handleTrashCard = handleTrashCard;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
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

    this._cardButtonTrash = this._element.querySelector('.element__trash-button');
    this._likeHeartButton = this._element.querySelector('.element__heart-button');
    this._likeCounter = this._element.querySelector('.element__heart-counter');

    this._likeCounter.textContent = this._likes.length;

    this.myLike = this._likes.some((like) => like._id === this._myUserId);

    if (this._ownerId !== this._myUserId) {
      this._cardButtonTrash.remove();
    }

    if (this._likes.some((like) => like._id === this._myUserId)) {
      this._likeHeartButton.classList.add('element__heart-active');
    }

    this._setEventListeners();
    return this._element;
  }

  addHeartClick(data) {
    this._likeHeartButton.classList.add('element__heart-active');
    this._likeCounter.textContent = data;
  }

  removeHeartClick(data) {
    this._likeHeartButton.classList.remove('element__heart-active');
    this._likeCounter.textContent = data;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeHeartButton.addEventListener('click', () => {
      this._handleLikeCounter(this, this.myLike);
    });

    this._cardButtonTrash.addEventListener('click', () => {
      this._handleTrashCard(this);
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._src, this._name);
    });
  }
}



