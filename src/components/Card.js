export default class Card {
  constructor (cardObject, templateSelector, userId, handleCardClick, handleCardDelete, handleLikeClick) {
    this._card = cardObject;
    this._name = this._card.name;
    this._link = this._card.link;
    this._id = this._card._id;
    this._likes = this._card.likes;
    this._ownerId = this._card.owner._id;
    this._alt = this._card.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;

  }

  _getTemplate = () => {
    return this._templateSelector.querySelector('.cards__item').cloneNode(true);
  }

  _setEventListeners = () => {
    this._element.querySelector('.cards__button-like').addEventListener('click', () => {
      this._handleLikeClick(this._id);
    })
    this._element.querySelector('.cards__button-remove').addEventListener('click', (evt) => this._handleCardDelete(this._id))
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._elementImage);
    })
  }

  removeCard = () => {
    this._element.remove();
    this._element = null;
  }

  isLiked = () => {
    console.log(this._likes.some(owner => owner._id === this._userId))
    return this._likes.some(owner => owner._id === this._userId);
  }

  updateLike = (data) => {
    this._likes = data.likes;
    this._likeCount.textContent = this._likes.length;
    if (this.isLiked()) {
      this._buttonLike.classList.add('cards__button-like_action');
    } else {
      this._buttonLike.classList.remove('cards__button-like_action');
    }
   }

  generateCard = () => {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.cards__image');
    this._elementTitle = this._element.querySelector('.cards__title');
    this._buttonDelete = this._element.querySelector('.cards__button-remove');
    this._buttonLike = this._element.querySelector('.cards__button-like');
    this._likeCount = this._element.querySelector('.cards__like-count');
    this._likeCount.textContent = this._likes.length;
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    if (this._ownerId === this._userId) {
      this._buttonDelete.classList.add('cards__button-remove_visible');
    }
    if (this.isLiked()) {
      this._buttonLike.classList.add('cards__button-like_action');
    }
    this._setEventListeners()
    return this._element;
  }
}

