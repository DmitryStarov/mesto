export default class Card {
  constructor (cardObject, templateSelector, handleCardClick, handleCardDelete, userId) {
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
    this._userId = userId;
  }

  _getTemplate = () => {
    return this._templateSelector.querySelector('.cards__item').cloneNode(true);
  }

  _setEventListeners = () => {
    this._element.querySelector('.cards__button-like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('cards__button-like_action');
    })
    this._element.querySelector('.cards__button-remove').addEventListener('click', (evt) => this._handleCardDelete())
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._elementImage);
    })
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.cards__image');
    this._elementTitle = this._element.querySelector('.cards__title');
    this._buttonDelete = this._element.querySelector('.cards__button-remove');
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    console.log(this._ownerId === this._userId)
    if (this._ownerId === this._userId) {
      this._buttonDelete.classList.add('cards__button-remove_visible');
    }
    this._setEventListeners()
    return this._element;
  }
}

