import { openPopup } from "./index.js";
export class Card {
  constructor (cardObject, templateSelector) {
    this._card = cardObject;
    this._name = this._card.name;
    this._link = this._card.link;
    this._alt = this._card.name;
    this._templateSelector = templateSelector;
  }

  _getTemplate () {
    return this._templateSelector.querySelector('.cards__item').cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector('.cards__button-like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('cards__button-like_action');
    })
    this._element.querySelector('.cards__button-remove').addEventListener('click', (evt) => {
      evt.target.closest('.cards__item').remove();
    })
    this._elementImage.addEventListener('click', (evt) => {
      popupViewImage.src = evt.target.src;
      popupViewImage.alt = evt.target.alt;
      popupViewImageTitle.textContent = evt.target.alt;
      openPopup(popupView); //без дублирования кода открываем модалку просмотра картинки с помощью импорта из index.js
      //popupView.classList.add('popup_opened'); //или лучше так открывать модалку? (следи за тредом в пачке)
    })
  }

  generateCard () {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.cards__image');
    this._elementTitle = this._element.querySelector('.cards__title');
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._setEventListeners()
    return this._element;
  }
}

