import Popup from "./Popup";

export default class  PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
      this._confirmButton = this._popup.querySelector('.popup__button-save');
      this._form = this._popup.querySelector('.popup__form');
      this._submitButton = this._popup.querySelector('.popup__button-save')
  }
  setConfirm(callback){
    this.setConfirm = callback
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      const initialButtonText = this._submitButton.textContent;
      this._submitButton.textContent = "Сохранение..."
      evt.preventDefault();
      this.setConfirm()
      .then (() => this.close())
        .finally ( () => {
          this._submitButton.textContent = initialButtonText;
        })
    })
  }
}
