import Popup from "./Popup";

export default class  PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
      this._confirmButton = this._popup.querySelector('.popup__button-save');
      this._form = this._popup.querySelector('.popup__form');
      this._submitButton = this._popup.querySelector('.popup__button-save');
      this._submitCallback = this._submitCallback.bind(this);
  }
  setConfirm(callback){
    this._setConfirm = callback
  }

  _submitCallback(evt) {
    const initialButtonText = this._submitButton.textContent;
    this._submitButton.textContent = "Сохранение..."
    evt.preventDefault();
    this._setConfirm()
    .then (() => this.close())
      .finally ( () => {
        this._submitButton.textContent = initialButtonText;
      })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitCallback)
  }
}
