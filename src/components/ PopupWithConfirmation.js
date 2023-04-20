import Popup from "./Popup";

export default class  PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
      this._confirmButton = this._popup.querySelector('.popup__button-save');
      this._form = this._popup.querySelector('.popup__form');
      // this.setConfirm = this._setConfirm.bind(this);
  }
  setConfirm(callback){
    this.setConfirm = callback
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.setConfirm();
    })
  }
}
