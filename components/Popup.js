export default class Popup {
  constructor(popupSelectror) {
    this._popup = document.querySelector(popupSelectror);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscDown); //вешаем слушатель на попап при откытии
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscDown); //удаляем слушатель при закрытии
  }

  _handleEscDown (evt) {
    if (evt.key === 'Escape') {
       this.close();
    }
  }

  setEventListeners() {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
      this.close();
    }
  }
}
